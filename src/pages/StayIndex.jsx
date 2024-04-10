import React, { useEffect, useState } from 'react'
import StaysTypeBar from '../cmp/StayIndex/StaysTypeBar'
import StayContent from '../cmp/StayIndex/StayContent'
import { useSelector } from 'react-redux'
import { loadStays, setFilterBy } from '../store/actions/stay.actions'
import StayList from '../cmp/StayIndex/StayList'
import { stayService } from '../services/stay.service'
import { saveStay } from "../store/actions/stay.actions";


export default function StayIndex() {
  const stays = useSelector(storeState => storeState.stayModule.stays)
  const filterBy = useSelector(storeState => storeState.stayModule.filterBy)

  useEffect(() => {
    loadStays()
  }, [filterBy])

  async function onAddStay() {
    const stay = {
      name: prompt('What is the name of the stay?'),
      price: +prompt('what is the price of the stay?'),
    }
    try {
      await saveStay(stay)
      //showSuccessMsg('Stay added')
    } catch (err) {
      console.log('Error from onAddStay ->', err)
      //showErrorMsg('Cannot add stay')
    }
  }
  function onSetFilter(type) {
    const filterBy = { type }
    setFilterBy(filterBy)
  }


  if (!stays) return
  return (
    <section>
      <button onClick={onAddStay}>add</button>
      <StaysTypeBar onSetFilter={onSetFilter}></StaysTypeBar>
      {/* <button onClick={onAddStay}>add stay</button> */}
      <StayList stays={stays}></StayList>
    </section>
  )
}
