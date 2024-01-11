import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { stayService } from '../services/stay.service'

export default function StayDetails() {
  const [stay, setStay] = useState()
  const { stayId } = useParams()

  useEffect(() => {
    loadStay()
  }, [])

  async function loadStay() {
    try {
      const stay = await stayService.getById(stayId)
      setStay(stay)
    } catch (err) {
      showErrorMsg('Cannot load stay')
    }
  }

  // function onChangeHeader() {
  //   document.getElementsByClassName('logo-div').style.paddingLeft = '40px'
  // }
  // onChangeHeader()


  if (!stay) return
  return (
    <section>
      <div className="header-deatils">
        <div className="name-display">
          {stay.name}
        </div>
        {/* <div className="small-name-display">test</div> */}

        <div className="image-details">
          <img className="img-details1" src={stay.imgUrls[0]} alt="" />
          <img className="img-details2" src={stay.imgUrls[1]} alt="" />
          <img className="img-details3" src={stay.imgUrls[2]} alt="" />
          {/* <button>show all photos</button> */}
        </div>
        <section className="name-display2">
          <span>Entire stay in {stay.name}</span>
          <div>
            {stay.capacity} guests
          </div>
          <div>
            Rated 5.0 out of 5 stars.
            5.0
            4 reviews
          </div>
        </section>
        <hr />

        <section className="host-display">
          <img src={stay.host.imgUrl} alt="" />
          <div>Hosted by {stay.host.fullname}</div>
        </section>

        <hr />

        <section className="summary-display">
          <div>
            {stay.summary}
          </div>
        </section>

        <hr />

        <section className="aminiteis-display">
          <h2>What this place offers</h2>
          <div>
            {
              stay.amenities.map(aminity =>
                <div>{aminity}</div>
              )
            }
          </div>

        </section>

      </div>

    </section>
  )
}
