import React, { useEffect } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
  const  {showSideBar,showSubMenu,closeSubMenu}=useGlobalContext()
  const displaySubMenu =(e)=>{
    // showSubMenu()
  
    const page = e.target.textContent
     console.log(page)
     const tempBtn = e.target.getBoundingClientRect()
     console.log(tempBtn)
     const center = (tempBtn.left+tempBtn.right)/2
     const bottom = tempBtn.bottom-3
     
     showSubMenu(page,{center,bottom})
  }
  const handleSubMenu=(e)=>{

    if(!e.target.classList.contains('link-btn')){
      closeSubMenu()
    }
  }
  return <nav className='nav'>
  <div className='nav-center' onMouseOver={handleSubMenu}>
    <div className='nav-header' >
      <img src={logo} className='nav-logo'></img>
      <button className='btn toggle-btn' onClick={()=>showSideBar()}>
        <FaBars/>
      </button>
    </div>
    <ul className='nav-links' >
      <li >
        <button className='link-btn' onMouseOver={displaySubMenu}>products</button>
      </li>
      <li >
        <button className='link-btn' onMouseOver={displaySubMenu}>developers</button>
      </li>
      <li >
        <button className='link-btn' onMouseOver={displaySubMenu}>company</button>
      </li>
    </ul>
    <button className='btn signin-btn'>sign in</button>
    </div>  
  </nav>
}

export default Navbar
