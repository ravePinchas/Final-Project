import React from 'react'
import { Link } from 'react-router-dom'

export default function StayPreview({ stay }) {
  return (
    <>
      <Link className="link-preview" to={`/`}>
        <img src={stay.imgUrl} alt="" />
      </Link>
    </>
  )
}
