import React, { useEffect, useState } from 'react'
import DateReservation from '../cmp/StayDetails/DateReservation'
import { useParams } from 'react-router'
import { stayService } from '../services/stay.service'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DatePickerReserversion from '../cmp/StayDetails/DatePickerReserversion'
import { saveOrder, updateCurrentOrder } from '../store/actions/order.actions'

export default function StayDetails() {
  const [stay, setStay] = useState()
  const { stayId } = useParams()
  const [isPopupDate, setPopupDate] = useState(false)
  // const [orderId, setOrderId] = useState(null);
  const checkIn = useSelector(storeState => storeState.orderModule.checkInDate)
  const checkOut = useSelector(storeState => storeState.orderModule.checkOutDate)
  const numberOfDays = useSelector(storeState => storeState.orderModule.numberOfDays)

  // const orders = useSelector(storeState => storeState.orderModule.orders)

  function onSaveOrder() {
    if (numberOfDays < 1) {
      return
    }
    var newOrder = {
      startDate: checkIn,
      endDate: checkOut,
      numberOfDays: numberOfDays,
      totalPrice: numberOfDays * stay.price,
      stay: {
        _id: stay._id,
        name: stay.name,
        price: stay.price
      },
    }
    saveOrder(newOrder)
    console.log("onSaveOrder");
    // updateCurrentOrder(newOrder)
  }

  useEffect(() => {
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
                <span>{checkIn ? new Date(checkIn).toLocaleDateString('en-US') : "Add Date"}</span>
              </button>
              <button onClick={onAddPopupDate} className="check-out-btn-reservation">
                CHECKOUT
                <span>{checkOut ? new Date(checkOut).toLocaleDateString('en-US') : "Add Date"}</span>
              </button>

              <div className={isPopupDate ? "popup-date" : "not-popup-date"} >
                <DatePickerReserversion onAddPopupDate={onAddPopupDate} />
                {/* <DateReservation onSetCheckIn={onSetCheckIn} />
                <DateReservation onSetCheckOut={onSetCheckOut} /> */}
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
              <Link to={"reservation"}>
                <button onClick={onSaveOrder} className="reserve-btn">Reserve</button>
              </Link>
            </div>

            {numberOfDays > 0 && <div>
              <div className="order-reservation-details">
                <div className="total-night-details">
                  <span className="span1-details-order">₪{stay.price + " "}x{numberOfDays + " nights"}</span>
                  <span className="span2-details-order">₪{stay.price * numberOfDays}</span>
                </div>
                <div className="total-night-details">
                  <span className="span1-details-order"> Cleaning fee </span>
                  <span className="span2-details-order"> ₪100</span>
                </div>
              </div>
              <hr />
              <div className="total-details">
                <span className="span1-details-order"> Total </span>
                <span className="span2-details-order"> ₪{stay.price * numberOfDays + 100}</span>
              </div>
            </div>}
          </div>  {/* end of the reservation */}

        </section>
      </div>
    </section >
  )
}
