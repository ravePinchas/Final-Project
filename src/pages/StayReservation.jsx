import React from 'react'
import { Link, useParams } from 'react-router-dom'

// const { stayId } = useParams()

export default function StayReservation() {
  return (
    <div className="confirm-reserve">
      <Link className='back-to-stay-link' to="/stay/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Back" role="img" focusable="false" style={{ display: "block", color: "black", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "3", overflow: "visible" }}><path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
      </Link>

      <h1>Confirm and pay</h1>
    </div >
  )
}
