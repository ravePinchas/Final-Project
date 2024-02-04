import React, { useEffect, useState } from 'react'
import SearchStayBar from './SearchStayBar'
import Logo from './logo'
import Profile from './Profile'
import { useLocation } from 'react-router'
import ActiveSearchStayBar from './ActiveSearchStayBar'

export default function Header() {

  const location = useLocation()
  const [activeSearch, setActiveSearch] = useState(false)

  function onActiveSearch(isActive) {
    setActiveSearch(isActive)
    if (location.pathname.includes('/stay/')) {
      setActiveSearch(false)
    }
    if (location.pathname.includes('/reservation/')) {
      setActiveSearch(true)
    }
  }

  return (
    <>
      <header className={location.pathname.includes('/stay/') ? 'header-display-details' : 'header-display'}>
        <Logo onActiveSearch={onActiveSearch}></Logo>
        {!activeSearch && <SearchStayBar onActiveSearch={onActiveSearch}></SearchStayBar>}
        <Profile></Profile>
      </header >
      <section className={activeSearch ? "active-search-stay-bar" : "not-active-search-stay-bar"}>
        <ActiveSearchStayBar />
      </section>

    </>
  )
}

