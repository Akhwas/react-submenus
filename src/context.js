import React, { useState, useContext } from 'react'
import sublinks from './data'
const AppContext = React.createContext()
const useGlobalContext =()=>{return useContext(AppContext)}

const AppProvider = ({children})=>{
    const [sideBar,setSideBar]=useState(false)
    const [subMenu,setSubMenu]=useState(false)
    const [location,setLocation]=useState({})
    const [page,setPage]=useState({page:'',links:[]})
    const showSideBar = ()=>{
      setSideBar(!sideBar)
      console.log(sideBar)
    }
    const showSubMenu = (text,coordinates)=>{
     setSubMenu(true)
     setLocation(coordinates)
     const page = sublinks.find((link)=>link.page === text)
     setPage(page)
     
     
    }
    const closeSubMenu = ()=>{
        setSubMenu(false)
    }
    // useEffect(()=>{
    //   setSubMenu(false)
    //   e.target.style.left =`${center}px`
    //   e.target.style.bottom =`${bottom}px`
    // },[location])
    return <AppContext.Provider value={{sideBar,subMenu,showSideBar,showSubMenu,location,page,closeSubMenu}}>{children}</AppContext.Provider>
}

export {AppContext, useGlobalContext, AppProvider}