import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import {useGlobalContext} from './context'
function App() {
  
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Submenu/>
      <Hero/>
    </>
  )
}

export default App
