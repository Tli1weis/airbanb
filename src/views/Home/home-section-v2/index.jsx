import React, { memo,useCallback,useEffect,useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
const HomeSectionV2 = memo((props) => {
    let {infoData}=props
    let [name,setName]=useState(Object.keys(infoData.dest_list)[0])
   
    let tabsName=infoData?.dest_address?.map(item=>item.name)

    let tabClick=useCallback((index,tabName)=>{
          setName(tabName)
    },[]);
   
  return (
    <div className="discount px-6 my-5">
    <SectionHeader subtitle={infoData.subtitle} title={infoData.title}/>
    <SectionTabs tabsName={tabsName} tabClick={tabClick}/>
    <SectionRooms list={infoData?.dest_list?.[name]} itemWidth='33.3333333%' />
    <SectionFooter name={name}/>
  </div>
  )
})

export default HomeSectionV2