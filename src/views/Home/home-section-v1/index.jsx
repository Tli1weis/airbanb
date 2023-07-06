import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSectionV1 = memo((props) => {
    let {infoData}=props
  
  return (
    <div className="content px-6 my-5">
    <SectionHeader subtitle={infoData.subtitle} title={infoData.title}/>
    <SectionRooms list={infoData.list} />
    <SectionFooter />
   </div>
  )
})

export default HomeSectionV1