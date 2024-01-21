import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { stayService } from '../services/stay.service'
import DateReservation from '../cmp/StayDetails/DateReservation'

export default function StayDetails() {
  const [stay, setStay] = useState()
  const { stayId } = useParams()
  const [monthReservetion, setMonthReservetion] = useState()
  const [dayReservetion, setDayReservetion] = useState()

  const [isPopupDate, setPopupDate] = useState(false)

  useEffect(() => {
    console.log('enter use effect');
    console.log('stayId', stayId);
    loadStay()
  }, [])

  async function loadStay() {
    try {
      const stay = await stayService.getById(stayId)
      setStay(stay)
      console.log('stay: ', stay);
    } catch (err) {
      // showErrorMsg('Cannot load stay')
    }
  }

  function onAddPopupDate() {
    setPopupDate(!isPopupDate)
  }

  if (!stay) return
  return (
    <section>
      <div className="header-deatils">
        <div className="name-display">
          {stay.name}
        </div>

        <div className="image-details">
          <img className="img-details1" src={stay.imgUrls[0]} alt="" />
          <img className="img-details2" src={stay.imgUrls[1]} alt="" />
          <img className="img-details3" src={stay.imgUrls[2]} alt="" />
          {/* <button>show all photos</button> */}
        </div>

        <section className="body-details">
          <div className="stay-details" > {/* the left element of the body*/}
            <div className="name-display2">
              <span>Entire stay in {stay.name}</span>
              <div>
                {stay.capacity} guests
              </div>
              <div>
                Rated 5.0 out of 5 stars.
                5.0
                4 reviews
              </div>
            </div>

            {/* <div className="reservation-display">
          961
        </div> */}

            <hr />

            <section className="host-display">
              <img src={stay.host.imgUrl} alt="" />
              <div>Hosted by {stay.host.fullname}</div>
            </section>

            <hr />

            <section className="summary-display">
              <div>
                <pre>{stay.summary}</pre>
              </div>
            </section>

            <hr />

            <section className="aminiteis-display">
              <h2>What this place offers</h2>
              <div>
                {
                  stay.amenities.map(aminity =>
                    <div className="aminity-preview" key={aminity}>
                      <img src={"/images/aminities/" + aminity + ".jpg"} alt="" />
                      <span>{aminity}</span>

                    </div>
                  )
                }
              </div>
            </section>
          </div>
          {/* The right element of the body*/}
          <div className="reservation-details">
            <div className="header-reservation-details">
              ₪{stay.price + " "}
              <span>night</span>
            </div>
            <div className="reservation-body pop-date-wrap">

              <button onClick={onAddPopupDate} className="check-in-btn-reservation">
                CHECK-IN
                <span>Add date</span>
              </button>
              <button onClick={onAddPopupDate} className="check-out-btn-reservation">
                CHECKOUT
                <span>Add date</span>
              </button>

              <div className={isPopupDate ? "popup-date" : "not-popup-date"} >
                <DateReservation monthReservetion={monthReservetion} dayReservetion={dayReservetion} />
                <DateReservation monthReservetion={monthReservetion} dayReservetion={dayReservetion} />
              </div>

              <button className="guest-btn-reservation">
                <div className="guest-text-btn">
                  <span>GUESTS</span>
                  <span className="small-guest-text-btn"> 1 guest </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible" }}><path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path></svg>
              </button>
            </div>  {/* end of reservation body*/}

            <div>
              <button class="reserve-btn">Reserve</button>
            </div>
          </div>  {/* end of the reservation */}

        </section>
      </div >
    </section >
  )
}
