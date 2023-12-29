import React from 'react'

import StayPreview from './StayPreview'

export default function StayList({ stays }) {
  return (
    <>
      <div className="stay-list">
        <img src={stays[0].imgUrl} alt="" />
      </div>
      { /* {emails.map((email) => (
        <div className="emails-list" key={email.id}>
          <StayPreview></StayPreview>
        </div>
      ))} */}
    </>
  )
}
