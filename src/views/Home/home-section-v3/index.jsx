import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import ScrollTabs from '@/base-ui/scroll-tabs'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
const HomeSectionV3 = memo((props) => {
    let {infoData:{title,subtitle,list}}=props
  return (
    <div className='mx-5'>
         <SectionHeader title={title} subtitle={subtitle}/>
       <div className="plus-list -mx-2">     
           <ScrollTabs >
              {list.map(item=>{
                return <RoomItem itemData={item} itemWidth='20%' key={item.id} />
              })}
           </ScrollTabs>
       </div>
       <SectionFooter name='plus'/>
    </div>
  )
})

export default HomeSectionV3