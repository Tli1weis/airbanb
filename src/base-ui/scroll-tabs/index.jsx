import React, { memo, useEffect, useRef, useState } from 'react'
import IconRight from '@/assets/img/icon_right'
import IconLeft from '@/assets/img/icon_left'
const ScrollTabs = memo((props) => {
    let {isScrollImg}=props
    let [showRight,setShowRight]=useState(false)
    let [showLeft,setShowLeft]=useState(false)
    let [posIndex,setPosIndex]=useState(0)
    const ScrollContentRef=useRef()
   
    let newEleOffLeft=useRef()
    let totalDistanceRef=useRef()
    
    useEffect(()=>{
        const scrollWidth=ScrollContentRef.current.scrollWidth
        const clientWidth=ScrollContentRef.current.clientWidth
        const totalDistance=scrollWidth-clientWidth
        totalDistanceRef.current=totalDistance
        newEleOffLeft.current=newEleOffLeft.current?newEleOffLeft.current:0
        setShowRight(totalDistance> newEleOffLeft.current)
     },[props.children])
    
 
    function controlDirectionClick(isRight){
    

      let newPosIndex=isRight?posIndex+1:posIndex-1;
      let newEle=ScrollContentRef.current.children[newPosIndex]
      newEleOffLeft.current=newEle.offsetLeft;
      console.log('newEleOffLeft',newEleOffLeft);
      ScrollContentRef.current.style.transform=`translate(-${newEleOffLeft.current}px)`
      setPosIndex(newPosIndex)
      console.log('totalDistanceRef.current',totalDistanceRef.current);
      setShowRight(totalDistanceRef.current>newEleOffLeft.current)
      if(isScrollImg){
        setShowRight(totalDistanceRef.current<newEleOffLeft.current||true)
        if(newEleOffLeft.current===955||newEleOffLeft.current===1588){      
            setShowRight(false)
        }
        setShowLeft(newEleOffLeft.current>20)
        return
      }
      setShowLeft(newEleOffLeft.current>20)
    }
   
    
  return (
    <div className='relative '>
       {showLeft&&<div onClick={e=>controlDirectionClick(false)} className='flex items-center justify-center absolute z-50 top-[50%] translate-y-[-50%]  left-[0px] translate-x-[-50%] w-[25px] rounded-[50%] ring-gray-950 ring-1 mx-4 my-1 bg-black text-white h-[25px] hover:cursor-pointer hover:btnShadow' ><IconLeft /></div>}
       {showRight&& <div onClick={e=>controlDirectionClick(true)} className='flex items-center justify-center absolute z-50 top-[50%] translate-y-[-50%] right-[6px] translate-x-[50%] w-[25px] rounded-[50%] ring-gray-950 ring-1 bg-black text-white mx-4 my-1 h-[25px]  hover:cursor-pointer hover:btnShadow ' ><IconRight /></div>}
      <div className=" overflow-hidden ">
        <div className="content  flex transition-transform duration-300 " ref={ScrollContentRef}>
              {props.children}
        </div>
      </div>
    </div>
  )
})

export default ScrollTabs