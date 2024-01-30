import React from 'react'
import { Link, useParams } from 'react-router-dom'



export default function StayReservation() {
  const { stayId } = useParams()
  return (
    <section>
      <div className="confirm-reserve">
        <Link className='back-to-stay-link' to={`/stay/${stayId}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Back" role="img" focusable="false" style={{ display: "block", color: "black", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "3", overflow: "visible" }}><path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
        </Link>

        <h1>Confirm and pay</h1>
      </div >

      <div className="body-reservation-page">
        <div className="body-left-reservation-page">
          <div className="header-left-reservation">
            <div className="rare-find-reservation-div">
              <span className="rare-find-reservation-span">
                This is a rare to find.
              </span>
              <span>
                Martina's place is usually booked.
              </span>
            </div>
            <div>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "32px", width: "32px", fill: "rgb(227, 28, 95)", stroke: "currentcolor" }}><g stroke="none"><path d="M24.556 8H9a1 1 0 0 0-.993.883L8 9v15.556a1 1 0 0 0 .206.608l.087.1 17.213 17.213a1 1 0 0 0 1.32.083l.094-.083L42.477 26.92a1 1 0 0 0 .083-1.32l-.083-.094L25.263 8.293a1 1 0 0 0-.575-.284L24.556 8z" fillOpacity=".2"></path><path d="M24.556 4A5 5 0 0 1 27.9 5.282l.192.182 17.213 17.214a5 5 0 0 1 .172 6.89l-.172.18L29.75 45.306a5 5 0 0 1-6.89.172l-.181-.172L5.464 28.092a5 5 0 0 1-1.457-3.271L4 24.556V9a5 5 0 0 1 4.783-4.995L9 4h15.556zm0 2H9a3 3 0 0 0-2.995 2.824L6 9v15.556a3 3 0 0 0 .743 1.977l.136.145L24.092 43.89a3 3 0 0 0 4.099.135l.144-.135L43.89 28.335a3 3 0 0 0 .135-4.1l-.135-.143L26.678 6.879a3 3 0 0 0-1.924-.872L24.556 6zM13 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></g></svg>
            </div>
          </div>
          <div className="your-trip-reservation">
            <h2>Your trip</h2>
          </div>
          <div className="dates-body-left-reservation">
            <h3>Dates</h3>
            <div>month [day] - month [day] </div>
          </div>
          <div className="guests-body-left-reservation">
            <h3>Guests</h3>
            <div>[num] guest </div>
          </div>
          <hr />
          <div className="how-to-pay-body-left-reservation">
            <h2>Choose how to pay</h2>
          </div>
          <div className="option-how-to-pay-reservation">
            <div className="pay-in-full-reservation">
              <div className="pay-in-full-reservation-text">
                <span>Pay in full</span><input type="radio" />
              </div>
              <div className="pay-total-reservation-text">
                <span>Pay the total (₪17,055.90).</span>
              </div>
            </div>
            <div className="pay-in-part-reservation">
              <div className="pay-in-full-reservation-text">
                <span>Pay part now, part later</span><input type="radio" />
              </div>
              <div className="pay-total-reservation-text">
                <span>₪8,527.95 due today, ₪8,527.95 on Mar 1, 2024. No extra fees.</span>
              </div>
            </div>
          </div>
          <hr />


          <div className="credit-pay-div">
            <div>
              <div>
                <h2>Pay with</h2>
              </div>
              <div className="credit-or-debit-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Credit card" role="img" focusable="false" style={{ display: "block", height: "33px", width: "33px", fill: "rgb(176, 176, 176)" }}><path d="M29 5a2 2 0 0 1 2 1.85V25a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V7a2 2 0 0 1 1.85-2H3zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z"></path></svg>

                <span>Credit or debit card</span>

                <svg className="svg-arrow-credit-or-debit" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: "16px", width: "16px", display: "block", fill: "rgb(72, 72, 72)" }}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>
              </div>

              <div className="card-details">
                <div className="card-number"><input type="number" placeholder="Card number" /></div>
                <div className="expiration-cvv">
                  <input type="date" placeholder="Expiration" />
                  <input type="number" placeholder="CVV" />
                </div>
              </div>

              <div className="card-country-region">
                <div>
                  <span className="country-region">Country/region</span>
                  <span>Israel</span>
                </div>
                <div className="svg-arrow-region">
                  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: "16px", width: "16px", display: "block", fill: "currentcolor" }}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="body-right-reservation-page">

        </div>
      </div>

    </section>
  )
}
