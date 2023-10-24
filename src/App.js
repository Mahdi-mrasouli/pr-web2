import React from 'react'

import {AboutUs, Chef, Footer, Gallery, Header, Menu, Laurels, Intro, FindUs} from './containers';
import { Navbar } from './components';
import './App.css'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
    
  )
}

export default App