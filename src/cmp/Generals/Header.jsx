import React, { useEffect } from 'react'
import SearchStayBar from './SearchStayBar'
import Logo from './logo'
import Profile from './Profile'
import { useLocation } from 'react-router'

export default function Header() {

  const location = useLocation()

  return (
    <>
      <header className={location.pathname.includes('/stay/') ? 'header-display-details' : 'header-display'}>
        <Logo></Logo>
        <SearchStayBar></SearchStayBar>
        <Profile></Profile>
      </header >

    </>
  )
}

