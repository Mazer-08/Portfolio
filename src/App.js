import React from 'react'
import {Footer, Header} from './containers'
import {Navbar, Card} from './components'
import './app.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Card/>
        <Footer/>
    </div>
  )
}

export default App