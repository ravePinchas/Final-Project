import React, { useEffect } from 'react'
import StaysTypeBar from '../cmp/StayIndex/StaysTypeBar'
import StayContent from '../cmp/StayIndex/StayContent'
import { useSelector } from 'react-redux'
import { loadStays } from '../store/actions/stay.actions'
import StayList from '../cmp/StayIndex/StayList'
import { stayService } from '../services/stay.service'
import { saveStay } from "../store/actions/stay.actions";


export default function StayIndex() {
  const stays = useSelector(storeState => storeState.stayModule.stays)
  useEffect(() => {
    loadStays()
  }, [])

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

  if (!stays) return
  return (
    <section>
      <StaysTypeBar></StaysTypeBar>
      <button onClick={onAddStay}>add stay</button>
      <StayList stays={stays}></StayList>


    </section>
  )
}
