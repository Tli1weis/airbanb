import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'
import ScrollTabs from '@/base-ui/scroll-tabs'
const HomeLongFor = memo((props) => {
  let {infoData}=props
  return (
       <div className=' pl-2 m-5 overflow-hidden  '>
          <SectionHeader subtitle={infoData.subtitle} title={infoData.title}/>
          <div className="list   mx-[-10px] hover:cursor-pointer">
          <ScrollTabs >
              {infoData.list.map(item=>{
                  return(
                    <LongForItem key={item.city} data={item}/>
                  )
                })}
              </ScrollTabs>
          </div> 
    </div>
  
  )
})

export default HomeLongFor