import React from 'react'
import Background from './components/background'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import CustomCursor from './components/customcursor'
import About from './components/about'
import Contact from './components/contact'
import TechStack from './components/techstack'

export default function App() {
  return (
    <div>
      <Background></Background>
      
     <Hero></Hero>
      <Navbar></Navbar>
     <About></About>
     <TechStack></TechStack>
     <Contact></Contact>
    </div>
  )
}
