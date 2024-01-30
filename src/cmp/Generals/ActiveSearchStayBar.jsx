import React from 'react'

export default function ActiveSearchStayBar() {

  function onAddPopupSearch() {

  }

  return (
    <section>

      <div onClick={onAddPopupSearch} className="active-btn where-active-btn">
        <span>Where</span>
        <input type="search" placeholder="Search destination" />
      </div>
      <span className="row-line-span"></span>
      <div onClick={onAddPopupSearch} className="active-btn check-in-acitve-btn">
        <span>Check in</span>
        <input type="search" placeholder="Add dates" />
      </div>
      <span className="row-line-span"></span>
      <div onClick={onAddPopupSearch} className="active-btn check-out-acitve-btn">
        <span>Check out</span>
        <input type="search" placeholder="Add dates" />
      </div>
      <span className="row-line-span"></span>
      <div onClick={onAddPopupSearch} className="active-btn guest-active-btn">
        <div>
          <span>Who</span>
          <input type="search" placeholder="Add guests" />
        </div>
        <div>
          <button className="icon-btn-active">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ fill: "none", height: "16px", width: "16px", stroke: "white", strokeWidth: 5.33333, overflow: "visible" }}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>

          </button>
        </div>
      </div>
      {/* <div className={isPopupSearch ? "popup-search" : "not-popup-search"} >
        <DatePickerReserversion />
      </div> */}



    </section>
  )
}
