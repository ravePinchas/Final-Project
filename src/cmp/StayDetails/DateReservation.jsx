import React, { useState } from 'react'

export default function DateReservation({ monthReservetion, dayReservetion }) {

  const months = ['January', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  const [monthIndex, setMonthIndex] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())

  const days = []

  function initalDays() {
    for (let i = 0; i < 30; i++) {
      days[i] = i + 1
    }
  }

  initalDays()

  function onChangeMounthLeft() {
    if (monthIndex === 0) {
      if (year > new Date().getFullYear()) {
        setYear(year - 1)
        setMonthIndex(11)
      }
    }
    else {
      setMonthIndex(monthIndex - 1)
    }
  }


  function onChangeMounthRight() {
    if (monthIndex === 11) {
      setMonthIndex(0)
      setYear(year + 1)
    }
    else {
      setMonthIndex(monthIndex + 1)
    }
  }

  function onSetDayToActiv(day) {

  }



  return (
    <div>
      <div className="month">
        <ul>
          <li onClick={onChangeMounthLeft} className="prev">&#10094;</li>
          <li onClick={onChangeMounthRight} className="next">&#10095;</li>
          <li>{months[monthIndex] + " "}<span style={{ fontSize: "18px" }}> {year} </span></li>
        </ul>
      </div>
      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>
      <ul className="days">
        {
          days.map(day => <li onClick={() => onSetDayToActiv(day)}><span>{day}</span></li>)
        }
        {monthIndex !== 1 ? "<li><span>30</span></li>" : ""}
        {monthIndex === 0 || monthIndex === 2 || monthIndex === 4 || monthIndex === 6 || monthIndex === 7 || monthIndex === 9 || monthIndex === 11 ? "<li><span>31</span></li>" : ""}
      </ul>
    </div>
  )
}
