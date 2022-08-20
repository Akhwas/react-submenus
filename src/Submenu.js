import React, { useState, useRef, useEffect } from 'react'
import { FaCentercode } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {subMenu,location,page:{page,links}}
  =useGlobalContext()
  
  const container = useRef(null)
  const {center,bottom}=location
  useEffect(()=>{
    const subo = container.current
    
    subo.style.left = `${center}px`
    subo.style.top = `${bottom}px`
    // console.log(subo,page)
    
    // container.style.textContent = 
  },[location,page])
  
  
  return <aside className={`submenu ${subMenu?'show':''}`} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center col-${links.length}`}>
      {links.map((link,index)=>{
        const {url,icon,label}=link
        return <a href={url} key={index}>{icon}{label}</a>
      })}
    </div>

  </aside>
}

export default Submenu
