import React, { useEffect } from 'react'
import StaysTypeBar from '../cmp/StayIndex/StaysTypeBar'
import StayContent from '../cmp/StayIndex/StayContent'
import { useSelector } from 'react-redux'
import { loadStays } from '../store/actions/stay.actions'
import StayList from '../cmp/StayIndex/StayList'


export default function StayIndex() {
  const stays = useSelector(storeState => storeState.stayModule.stays)
  console.log(stays);

  useEffect(() => {
    loadStays()
  }, [])

  if (!stays) return <div>loding...</div>
  return (
    <section>
      <StaysTypeBar></StaysTypeBar>
      <StayList stays={stays}></StayList>
    </section>
  )
}
