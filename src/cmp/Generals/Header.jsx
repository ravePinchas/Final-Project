import React from 'react'
import SearchStayBar from './SearchStayBar'
export default function Header() {
  return (
    <>
      <header>
        <div className="logo-div">
          <a href=""><img className='logo-img' src="/images/airbnb-logo.jpg" alt="" /></a>
        </div>
        <div>
          <SearchStayBar></SearchStayBar>
        </div>
        <div className="profile-bar">

        </div>
      </header>
      <hr />
    </>
  )
}

