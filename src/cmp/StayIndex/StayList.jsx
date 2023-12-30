import React from 'react'

import StayPreview from './StayPreview'

export default function StayList({ stays }) {
  return (
    <section className="stay-list">
      {
        stays.map(stay => <div key={stay.id}>
          <StayPreview stay={stay} />
          {/* <div className="robot-actions">
            <button onClick={() => onRemove(robot.id)}>X</button>
            <Link to={`/robot/edit/${robot.id}`}><button>Edit</button></Link>
          </div> */}
        </div>)
      }
    </section>
  )
}
