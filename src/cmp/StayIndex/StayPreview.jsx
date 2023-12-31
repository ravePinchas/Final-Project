import React from 'react'
import { Link } from 'react-router-dom'

export default function StayPreview({ stay }) {
  return (
    <>
      <button onClick={() => onRemove(stay._id)}>X</button>
      <Link className="link-preview" to={`/stay/${stay._id}`}>
        <img src={stay.imgUrl || "../images/black.png"} alt="" />
      </Link>
      <div className="stay-details-list">
        <div>
          {stay.name}
        </div>
        <div>
          added ____ weeks ago
        </div>
        <div>
          month __
        </div>
        <div>
          {stay.price + " "} night
        </div>
      </div>
    </>
  )
}
