import React from 'react'
import './card.css'
const Card = (props) => {
	const x = props.src;
	console.log(x);
	return (
		<div className="card-container">
	
			<div className="card border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

				<h5 className="ctitle mb-2 tracking-tight text-gray-900 dark:text-white">{props.platform}
				</h5>

				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.rating}</p>


				<a href={props.profileLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				View Profile
				</a>
			</div>
		</div>
	)
}

export default Card