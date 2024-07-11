import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Card from './Components/Card/Card'
import Page from './Components/Page/Page'
import Bold from './Components/Bold/Bold'
import Antd from './Components/Antd/Antd'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Contact/>
      <About/>
     <Menu/>
     <Card/>
     <Page/>
     <Bold/>
     <Antd/>
     <Footer/>
    </div>
  )
}

export default App
