import React, { useEffect } from 'react'
import EntireFilter from './entire-filter'
import EntireRooms from './entire-rooms'
import EntirePagination from './entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/createAction'
import { useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default function Entire() {
  let {headerConfig:{topAlpha}}=useSelector(state=>({
    headerConfig:state.main.headerConfig
  }))
  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false}))
  },[dispatch])
  console.log(topAlpha);
  return (
    <div>
     <EntireFilter topAlpha={topAlpha}/>
      <EntireRooms />
      <EntirePagination />
    </div>
  )
}
