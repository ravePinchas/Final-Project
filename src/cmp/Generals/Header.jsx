import React from 'react'
import SearchStayBar from './SearchStayBar'
import Logo from './logo'
import Profile from './Profile'
export default function Header() {
  return (
    <>
      <header>
        <Logo></Logo>
        <SearchStayBar></SearchStayBar>
        <Profile></Profile>
      </header>

    </>
  )
}

