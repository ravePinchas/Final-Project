import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ onActiveSearch }) {
  return (
    <div onClick={() => onActiveSearch(false)} className="logo-div">
      <Link to="/"><img className='logo-img' src="/images/airbnb-logo.jpg" alt="" /></Link>
    </div>
  )
}