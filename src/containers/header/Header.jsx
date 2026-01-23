import React, { useState, useEffect, useRef, useMemo } from 'react'
import 'animate.css'
import { BsChevronDown } from "react-icons/bs";

const FallingSpan = ({ charData, className = "" }) => {
	return (
		<span
			className={className}
			style={{
				display: 'inline-block',
				whiteSpace: 'pre',
				transform: `translate3d(calc(${charData.dx}px * var(--scroll-ratio)), calc(${charData.dy}px * var(--scroll-ratio)), 0) rotate(calc(${charData.dr}deg * var(--scroll-ratio)))`,
				opacity: `calc(1 - (var(--scroll-ratio) * 1.2))`,
				transition: 'transform 0.1s linear, opacity 0.1s linear', // smooth out scroll jitters slightly
				willChange: 'transform, opacity'
			}}
		>
			{charData.char}
		</span>
	);
};

// Helper to generate physics data for a string
const usePhysicsText = (text) => {
	return useMemo(() => {
		return text.split('').map((char, i) => ({
			id: i,
			char,
			dx: (Math.random() - 0.5) * 800, // Random X scatter (-400 to 400)
			dy: Math.random() * 500 + 200,   // Random Y drop (200 to 700)
			dr: (Math.random() - 0.5) * 720  // Random rotation
		}));
	}, [text]);
}

const Header = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef(null);

	// Initial Texts
	const h1_prefix_data = usePhysicsText("Greetings Visitor");
	const h1_mid_data = usePhysicsText(", I'm ");
	const h1_name_data = usePhysicsText("Sabhya");
	const h2_data = usePhysicsText("Software Development Engineer");
	const p_data = usePhysicsText("Currently Exploring: Working & Architecture of LLMs");

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;
		// Calculate position relative to center (-1 to 1)
		const x = (clientX - innerWidth / 2) / (innerWidth / 2);
		const y = (clientY - innerHeight / 2) / (innerHeight / 2);
		setMousePosition({ x, y });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const scrollY = window.scrollY;
			const maxScroll = 500; // Animation completes by 500px
			const ratio = Math.min(1, Math.max(0, scrollY / maxScroll));

			// Set CSS variable on the container for performant updates
			containerRef.current.style.setProperty('--scroll-ratio', ratio);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			ref={containerRef}
			className="min-h-screen flex flex-col justify-center items-center relative bg-[var(--color-bg)] px-4 overflow-hidden"
			id="home"
			onMouseMove={handleMouseMove}
			style={{ '--scroll-ratio': 0 }}
		>
			{/* Background Blob that follows mouse (inverted for depth) */}
			<div
				className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-full blur-[100px] opacity-10 pointer-events-none transition-transform duration-100 ease-out"
				style={{
					transform: `translate(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px)`,
					zIndex: 0
				}}
			/>

			<div
				className="text-center space-y-6 max-w-4xl mx-auto z-10 transition-transform duration-100 ease-out"
				style={{
					fontFamily: 'var(--font-text)',
					transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`
				}}
			>
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide animate__animated animate__fadeInDown text-[var(--color-text)] drop-shadow-sm">
					{h1_prefix_data.map(d => <FallingSpan key={d.id} charData={d} />)}
					<span className="animate__animated animate__tada animate__delay-1s inline-block" style={{
						display: 'inline-block',
						transform: `translate3d(calc(-200px * var(--scroll-ratio)), calc(500px * var(--scroll-ratio)), 0) rotate(calc(180deg * var(--scroll-ratio)))`,
						opacity: `calc(1 - var(--scroll-ratio))`
					}}>🙋🏻</span>
					{h1_mid_data.map(d => <FallingSpan key={d.id} charData={d} />)}
					{h1_name_data.map(d => (
						<FallingSpan
							key={d.id}
							charData={d}
							className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]"
						/>
					))}
				</h1>

				<h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--color-text)] animate__animated animate__fadeInUp animate__delay-1s opacity-0 [animation-fill-mode:forwards]">
					{h2_data.map(d => <FallingSpan key={d.id} charData={d} />)}
				</h2>

				<p className="text-lg md:text-xl text-[var(--color-subtext)] font-medium animate__animated animate__fadeInUp animate__delay-2s opacity-0 [animation-fill-mode:forwards]">
					{p_data.map(d => <FallingSpan key={d.id} charData={d} />)}
				</p>

				<div className="pt-8"
					style={{
						transform: `translateY(calc(300px * var(--scroll-ratio)))`,
						opacity: `calc(1 - (var(--scroll-ratio) * 1.5))`
					}}
				>
					<div className="animate__animated animate__fadeInUp animate__delay-3s opacity-0 [animation-fill-mode:forwards]">
						<a href="#about" className="px-8 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-300 font-medium">
							More About Me
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-10 animate-bounce cursor-pointer z-10"
				style={{
					opacity: `calc(1 - var(--scroll-ratio))`
				}}
			>
				<BsChevronDown className="text-3xl text-[var(--color-text)] opacity-70 hover:opacity-100 transition-opacity" />
			</div>
		</section>
	)
}

export default Header