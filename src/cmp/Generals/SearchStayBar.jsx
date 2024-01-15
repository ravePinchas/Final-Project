import React, { useEffect, useState } from 'react'
import ActiveSearchStayBar from './ActiveSearchStayBar'

export default function SearchStayBar({ onActiveSearch }) {

  return (
    <>
      <section className="search-section">
        <section className="search-bar">
          <button onClick={() => onActiveSearch(true)} className='where-btn search-btn'>
            <div>
              Anywhere
            </div>
          </button>
          <span></span>
          <button onClick={() => onActiveSearch(true)} className='when-btn search-btn'>
            <div>
              Anyweek
            </div>
          </button>
          <span></span>
          <button onClick={() => onActiveSearch(true)} className='guest-btn search-btn'>
            <span>
              Add guests
            </span>
            <div className='search-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "white", strokeWidth: 5.33333, overflow: "visible" }}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
            </div>
          </button>
        </section>
      </section >
    </>
  )
}
