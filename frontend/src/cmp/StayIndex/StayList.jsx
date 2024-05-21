import React from 'react'

import StayPreview from './StayPreview'

export default function StayList({ stays }) {
  return (
    <section className="stay-list">
      {
        stays.map(stay => <div key={stay._id}>
          <StayPreview stay={stay} />
        </div>)
      }
    </section>
  )
}
