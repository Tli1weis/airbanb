
import React, { memo, useState } from 'react'
import ScrollTabs from '@/base-ui/scroll-tabs'
const SectionTabs = memo((props) => {
    let [currentIndex,setCurrentIndex]=useState(0)
    let {tabsName=[],tabClick,}=props
   
    let tabChange=(index,name)=>{
        tabClick(index,name)
        setCurrentIndex(index)     
    }
    const btnStyle={
        allStyle:'outline-none hover:ring   w-[245px] shrink-0 basis-[245px]  border h-[50px] text-center leading-[50px] mx-[10px] rounded-[10px] hover:btnShadow whitespace-nowrap box-border',
    }
  return (
    <div className=' w-[1580px] my-3'>
       <ScrollTabs >
            {tabsName.map((tab,index)=>{
             return <div  onClick={e=>tabChange(index,tab)} key={index} className={`${btnStyle.allStyle} ${index===currentIndex?"bg-red-400 text-white ":''} `}>
                               {tab}
                    </div>
                })}
       </ScrollTabs>
    </div>
  )
})

export default SectionTabs