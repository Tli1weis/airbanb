import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconLeft from '@/assets/img/icon_left'
import IconRight from '@/assets/img/icon_right'
import Indicator from '@/base-ui/indicator'
const RoomItem = memo((props) => {
    let {itemData,itemWidth='25%',toDetailClick}=props
    let [selectedIndex,setSelectedIndex]=useState(0)
    let sliderRef=useRef()

    let SliderElement= <div className="slider relative">
    <div className="control text-white">
        <div onClick={e=>controlClick(false)} className="slider-left absolute z-20 left-0 top-[50%] translate-y-[-50%]  w-[48px] h-[100%] transition-opacity duration-500 flex items-center justify-center hover:bg-gradient-to-l from-transparent to-black hover:opacity-30">
            <IconLeft width={32} height={32}/>
        </div>
        <div onClick={e=>controlClick(true)} className="slider-right absolute z-20 right-0  top-[50%] translate-y-[-50%] w-[48px] h-[100%] transition-opacity duration-500 flex items-center justify-center hover:bg-gradient-to-l from-black to-transparent hover:opacity-30">
            <IconRight width={32} height={32}/>
        </div>
    </div>
    <Carousel dots={false} ref={sliderRef}>
        {
            itemData?.picture_urls?.map(item=>{
                return(
                   <div  key={item} className=' relative pt-[66.6%]   pb-0 px-2'>
                         <img onClick={goToEntire} src={item} className='absolute top-0 left-0 rounded-[10px]  w-[100%] h-[100%] object-cover' alt="" />
                   </div>
                )
            })
        }
    </Carousel>
    <div className="indicator w-[50%] absolute z-30 left-0 right-0 bottom-[10px] m-auto">
        <Indicator selectedIndex={selectedIndex}>
            {itemData?.picture_urls?.map((item,index)=>{
                return(
                    <div className="indicator-item w-[28.6%] flex justify-center items-center" key={item}>
                        <span className={`dot w-[9px] h-[9px] border rounded-[50%] ml-[1.5px] mr-[12.8px] ${index===selectedIndex?'bg-white w-[9px] h-[9px] ':""} ${index===selectedIndex-1?' w-[7px] h-[7px] ':''} ${index===selectedIndex-2?' w-[8px] h-[8px] ':''} ${index===selectedIndex+1?' w-[8px] h-[8px] ':''} ${index===selectedIndex+2?'w-[8px] h-[8px] ':''} ${index===selectedIndex-3?' w-[6px] h-[6px] ml-[2px] mr-[12.8px]':''} ${index===selectedIndex+3?' w-[6px] h-[6px] ml-[2px] mr-[12.8px]':''}`}></span>
                    </div>
                )
            })}
        </Indicator>
    </div>
   </div>
    let PictureElement=<div className="cover relative pt-[66.6%]   pb-0 px-2">
    <img onClick={goToEntire} src={itemData?.picture_url} alt="" className='absolute top-0 left-0 rounded-[10px]  w-[100%] h-[100%] object-cover'/>
                       </div>
    function controlClick(isRight){
        isRight?sliderRef.current.next():sliderRef.current.prev()
        let curIndex=isRight?selectedIndex+1:selectedIndex-1,
            length=itemData.picture_urls.length-1;
        if(curIndex>length)curIndex=0
        if(curIndex<0)curIndex=length
        setSelectedIndex(curIndex)
    }
    function goToEntire(){
        toDetailClick&&toDetailClick(itemData)
    }
  return (
        <div className='hover:cursor-pointer p-2   flex-shrink-0' style={{width:itemWidth}} >
            <div className=" inner w-[100%]">
               {!itemData.picture_urls?PictureElement:SliderElement}   
                <div className='desc my-2' style={{color:itemData.verify_info.text_color}}>
                    {itemData.verify_info.messages.join(' · ')}
                </div>
                <div className="name font-black my-2 line-clamp-2">
                    {itemData.name}
                </div>
                <div className="price my-2">
                    ¥{itemData.price}/晚
                </div>
                <Rating name="read-only" className='MuiRating-icon' value={itemData.star_rating??4.5} precision={0.1} sx={{color:itemData.star_rating_color,fontSize:'12px'}} readOnly />
                <span className="count ml-[6px] mr-[3px] text-[10px] ">{itemData.reviews_count}</span>
                {itemData?.bottom_info&&<span className="comment" style={{fontSize:itemData.bottom_info.content_color,fontSize:10}}>·{itemData.bottom_info.content}</span>}
            
            </div>
        </div>
  )
})

export default RoomItem