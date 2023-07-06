import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
const SectionRooms = memo((props) => {
    let {list,itemWidth}=props
  
  return (
    <div className="roomList flex flex-wrap mx-[-8px]">
    {list?.slice(0,8).map(item=>{
      return(
         <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
      )
    })}
</div>
  )
})

export default SectionRooms