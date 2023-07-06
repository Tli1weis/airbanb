import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {

 const {roomList,totalCount,isLoading}= useSelector(state=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)
  let dispatch=useDispatch()
  let navigate=useNavigate()
   const toDetailClick=useCallback((itemData)=>{
          dispatch(changeDetailInfoAction(itemData))
          navigate('/detail')
  },[dispatch,navigate])
  
  return (
    <div className='relative my-[40px] px-[20px] mt-[210px]'>
      <h2 className=' title font-bold text-[20px] px-2 my-2'>{totalCount}多出住所</h2>
     <div className=" roomList flex flex-wrap">
        {
            roomList.map(item=>{
              return <RoomItem key={item._id} itemData={item} itemWidth='20%' toDetailClick={toDetailClick} />
            })
          }
     </div>
     {isLoading&&<div className='mask absolute  z-[999] top-0 left-0 right-0 bottom-0 bg-neutral-300 opacity-70'></div>}
    </div>
  )
})

export default EntireRooms