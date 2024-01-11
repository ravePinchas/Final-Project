import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="logo-div">
      <Link to="/"><img className='logo-img' src="/images/airbnb-logo.jpg" alt="" /></Link>
    </div>
  )
}