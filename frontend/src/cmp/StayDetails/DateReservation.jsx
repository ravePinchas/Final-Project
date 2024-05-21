import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function DateReservation({ onSetCheckIn, onSetCheckOut }) {

  const months = ['January', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  const [monthIndex, setMonthIndex] = useState(0)
  const [dayActiveCheckIn, setDayActiveCheckIn] = useState(null)
  const [dayActiveCheckOut, setDayActiveCheckOut] = useState(null)
  // const [checkOut, setCheckOut] = useState(null)
  const [year, setYear] = useState(new Date().getFullYear())

  const checkIn = useSelector(storeState => storeState.stayModule.checkIn)
  const checkOut = useSelector(storeState => storeState.stayModule.checkOut)

  const dateCheckIn = {
    day: '',
    month: '',
    year: ''
  }

  const dateCheckOut = {
    day: '',
    month: '',
    year: ''
  }
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

    getClassForDay(null)
  }


  function onChangeMounthRight() {
    if (monthIndex === 11) {
      setMonthIndex(0)
      setYear(year + 1)
    }
    else {
      setMonthIndex(monthIndex + 1)
    }
    getClassForDay(null)
  }

  function onSetDayToActive(day) {
    if (checkIn.year !== '') {
      if (checkIn.year < year || (checkIn.month < months[monthIndex] && checkIn.year === year) || (checkIn.month === months[monthIndex] && checkIn.day < day)) {
        dateCheckOut.day = day
        dateCheckOut.month = months[monthIndex]
        dateCheckOut.year = year
        onSetCheckOut(dateCheckOut)
        setDayActiveCheckOut(day)
      }
      else {
        dateCheckIn.day = day
        dateCheckIn.month = months[monthIndex]
        dateCheckIn.year = year
        onSetCheckIn(dateCheckIn)
        setDayActiveCheckIn(day)
      }

    }
    else {
      dateCheckIn.day = day
      dateCheckIn.month = months[monthIndex]
      dateCheckIn.year = year
      onSetCheckIn(dateCheckIn)
      setDayActiveCheckIn(day)
    }
  }

  function getClassForDay(day) {
    if (day === dayActiveCheckIn || day === dayActiveCheckOut) {
      return 'active-date'
    }
    else {
      return ''
    }
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
          days.map(day => <li className={getClassForDay(day)} onClick={() => onSetDayToActive(day)} key={day}><span>{day}</span></li>)
        }
        {monthIndex !== 1 ? <li><span>30</span></li> : ""}
        {/* {monthIndex === 0 || monthIndex === 2 || monthIndex === 4 || monthIndex === 6 || monthIndex === 7 || monthIndex === 9 || monthIndex === 11 ? "<li><span>31</span></li>" : ""} */}
        {(monthIndex === 0 || monthIndex === 2 || monthIndex === 4 || monthIndex === 6 || monthIndex === 7 || monthIndex === 9 || monthIndex === 11) && <li><span>31</span></li>}
      </ul>
    </div>
  )
}
