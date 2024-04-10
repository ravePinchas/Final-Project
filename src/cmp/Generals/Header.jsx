import React, { useEffect, useState } from 'react'
import SearchStayBar from './SearchStayBar'
import Logo from './logo'
import Profile from './Profile'
import { useLocation } from 'react-router'
import ActiveSearchStayBar from './ActiveSearchStayBar'

export default function Header() {

  const location = useLocation()
  const [activeSearch, setActiveSearch] = useState(false)
  const [generalSearchActive, setGeneralActive] = useState(true)

  function onActiveSearch(isActive) {
    setActiveSearch(isActive)
    if (location.pathname.includes('/stay')) {
      setActiveSearch(false)
    }
    if (location.pathname.includes('/reservation')) {
      setActiveSearch(true)
    }
  }

  
  useEffect(() => {
    if(location.pathname.includes('/hosting')){
     
      setGeneralActive(false)
    }
    else
    {
      setGeneralActive(true)
    }
    console.log('test location: ', location.pathname);
  }, [location])

  return (
    <>
      <header className={location.pathname.includes('/stay/') ? 'header-display-details' : 'header-display'}>
        <Logo onActiveSearch={onActiveSearch}></Logo>
        {generalSearchActive && !activeSearch && <SearchStayBar onActiveSearch={onActiveSearch}></SearchStayBar>}
        <Profile></Profile>
      </header >
      <section className={generalSearchActive && activeSearch ? "active-search-stay-bar" : "not-active-search-stay-bar"}>
        <ActiveSearchStayBar />
      </section>
    </>
  )
}

