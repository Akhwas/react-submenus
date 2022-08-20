import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const {sideBar,showSideBar}=useGlobalContext()
  return <div  className={` ${sideBar ?'sidebar-wrapper show':'sidebar-wrapper'}`}>
    <aside className='sidebar'>
      <button className='close-btn' onClick={showSideBar}><FaTimes/></button>
      <div className='sidebar-links'>
        {sublinks.map((link,index)=>{
          const {page,links}=link
          return<article key={index}>
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map((item,index)=>{
                const{label,icon,url}=item
                return <a href={url} key={index}>{icon}{label}</a>
              })}
            </div>
          </article>
        })}
        
      </div>
    </aside>

  </div>
}

export default Sidebar
