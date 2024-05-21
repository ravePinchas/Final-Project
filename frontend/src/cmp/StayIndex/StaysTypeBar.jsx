import React, { useState } from 'react'

export default function StaysTypeBar({ onSetFilter }) {

  function onChangeFilter(type) {
    // ev.preventDefault();
    onSetFilter(type)
  }


  return (
    <section className="stays-type-bar">
      <label>
        <img onClick={() => onChangeFilter('Farm')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24"></img>
        <span>Farm</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Castle')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" width="24" height="24"></img>
        <span>Castle</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Room')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="" width="24" height="24"></img>
        <span>Room</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Yurt')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" alt="" width="24" height="24"></img>
        <span >Yurt</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter(`Chef's kitchens`)} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg" alt="" width="24" height="24"></img>
        <span>Chef's kitchens</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Amazing views')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24"></img>
        <span>Amazing views</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('OMG!')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24"></img>
        <span>OMG!</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('National parks')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"></img>
        <span> National parks</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Cabins')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24"></img>
        <span>Cabins</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Countryside')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24"></img>
        <span>Countryside</span>
      </label>
      <label>
        <img onClick={() => onChangeFilter('Mansions')} className="i181yxiv dir dir-ltr" src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="" width="24" height="24"></img>
        <span>Mansions</span>
      </label>

      <button className="filers-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentColor", strokeWidth: "3", overflow: "visible" }} aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path></svg>
        <div>
          Filters
        </div>

      </button>


    </section >
  )
}