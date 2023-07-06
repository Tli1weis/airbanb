import React, { memo, useEffect, useRef } from 'react'

const Indicator = memo((props) => {
    let {children,selectedIndex}=props
    let indicatorRef=useRef()
    useEffect(()=>{
        let curEle=indicatorRef.current.children[selectedIndex]
        let indOffsetLeft=curEle.offsetLeft
        let indWidth=curEle.clientWidth
        let contentWidth=indicatorRef.current.clientWidth
        let contentScroll=indicatorRef.current.scrollWidth

        let offset=indOffsetLeft+indWidth*0.5-contentWidth*0.5
        if(offset<0)offset=0
        let totalOffset=contentScroll-contentWidth
        if(offset>totalOffset)offset=totalOffset
         indicatorRef.current.style.transform=`translate(${-offset}px)`
      
    },[selectedIndex])
  return (
    <div className=" overflow-hidden">
          <div className='indicator-content relative flex   flex-shrink-0 transition-transform duration-200' ref={indicatorRef}>
            {
            children
            }
          </div>
    </div>
    
  )
})

export default Indicator