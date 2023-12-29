import React from 'react'

export default function SearchStayBar() {
  return (
    <section className="search-section">
      <div className="search-bar">
        <button className='anywhere-btn'>
          <div>
            Anywhere
          </div>
        </button>
        <span></span>
        <button className='anyweek-btn'>
          <div>
            Anyweek
          </div>
        </button>
        <button className='guest-btn'>
          <div className='guest-div'>
            Add guests
          </div>
          <div className='guest-div-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "white", strokeWidth: 5.33333, overflow: "visible" }}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
          </div>
        </button>
      </div>
    </section>
  )
}
