import React from 'react'
import {Footer, Header, Hero, Skill, About} from './containers'
import {Navbar} from './components'
import './App.css'

// import {BrowserRouter, Route,Routes} from "react-router-dom"

const App = () => {
  const design = [
    {
      id: "1",
      ssrrcc: "images/GDSC.png",
      ttext: "GDSC Core Team Designer",
      dtext: `I was selected as a Junior Developer in the beginning and later was incorporated in the core team of session 2022-23 as a Designer. I have contributed in conducting sessions and designing schwags and instagram posts with fellow team members.`
    },
    {
      id: "2",
      ssrrcc: "images/danceFinal.png",
      ttext: "Designer @ Spring Fiesta",
      dtext: `Spring Fiesta is our college's annual fest.
      I contributed there as a Designer for social media posts.`
    },
    {
      id: "3",
      ssrrcc: "images/dramaFinal.png",
      ttext: "Designer @ Spring Fiesta",
      dtext: `Spring Fiesta is our college's annual fest.
      I contributed there as a Designer for social media posts.`
    },
    {
      id: "4",
      ssrrcc: "images/musicFinal.png",
      ttext: "Designer @ Spring Fiesta",
      dtext: `Spring Fiesta is our college's annual fest.
      I contributed there as a Designer for social media posts.`
    },
    {
      id: "5",
      ssrrcc: "images/pitchIt.jpg",
      ttext: "Designer @ Spring Fiesta",
      dtext: `Spring Fiesta is our college's annual fest.
      I contributed there as a Designer for social media posts.`
    },
    {
      id: "6",
      ssrrcc: "images/ideaToMvp.jpg",
      ttext: "Designer @ Spring Fiesta",
      dtext: `Spring Fiesta is our college's annual fest.
      I contributed there as a Designer for social media posts.`
    },
  ]

  const dev=[
    {
      id: "1",
      ssrrcc: "images/mobilePortfolio.png",
      ttext: `Former Portfolio`,
      dtext:`A completely responsive portfolio made using HTML and CSS.`
    },
    {
      id: "2",
      ssrrcc: "images/Desktop1.png",
      ttext: `Former Portfolio`,
      dtext:`Few snaps of the desktop version.`
    },
    {
      id: "3",
      ssrrcc: "images/Desktop2.png",
      ttext: `Former Portfolio`,
      dtext:`Few snaps of the desktop version.`
    },
    {
      id: "4",
      ssrrcc: "images/Desktop3.png",
      ttext: `Former Portfolio`,
      dtext:`Few snaps of the desktop version.`
    },
    {
      id: "5",
      ssrrcc: "images/Desktop4.png",
      ttext: `Former Portfolio`,
      dtext:`Few snaps of the desktop version.`
    }
  ]


  const pro=[
    {
      id: "1",
      ssrrcc: "images/weathermob.png",
      ttext: `WeatherNow`,
      dtext:`A responsive web application which can provide the weather conditions of any city arounf the world.`
    },
    {
      id: "2",
      ssrrcc: "images/weatherpc.png",
      ttext: `WeatherNow`,
      dtext:`A responsive web application which can provide the weather conditions of any city arounf the world.`
    }
  ]
  return (
    <div className='App'>
        {/* <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element = {<Header/>}></Route>
            <Route exact path="/project" element = {<Skill id="project" title="My Project" arr={pro} flag="1" git="https://github.com/Mazer-08/WeatherNow"/>}></Route>
            <Route exact path="/skills" element = {<>
                                                    <Skill id="skills" title="Front-End Skills" arr={dev} flag="1" git="https://mazer-08.github.io/Portfolio/"/>
                                                    <Skill title="Designing Skills" arr={design} flag="0"/>
                                                  </>}>
            </Route>
            <Route exact path="/codingProfiles" element = {<Hero id="codingProfiles"/>}></Route>
            <Route exact path="/about" element = {<About id="about"/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter> */}
        <Navbar/>
        <Header/>
        <Skill id="project" title="My Project" arr={pro} flag="1" git="https://weathernowww.netlify.app/"/>
        <Skill id="skills" title="Front-End Skills" arr={dev} flag="1" git="https://mazer-08.github.io/Portfolio/"/>
        <Skill title="Designing Skills" arr={design} flag="0"/>
        <Hero id="codingProfiles"/>
        <About id="about"/>
        <Footer/>
    </div>
  )
}

export default App