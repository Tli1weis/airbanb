import React, { memo, useEffect, useRef, useState } from 'react'
import IconGlobal from '@/assets/img/icon_global'
import IconMenu from '@/assets/img/icon_menu'
import IconAvatar from '@/assets/img/icon_avatar'

function HeaderRight(props) {
  let [isShow,setIsShow]=useState(false)
  let {isAlpha}=props
  
  console.log(isAlpha);
  useEffect(()=>{
    function windowShowModal(e){
        setIsShow(false)
        
    }
    window.addEventListener('click',windowShowModal,true)
    return (e)=>{
     
      window.removeEventListener('click',windowShowModal,true)
      
    }
  },[])
  function showModalClick(e){
    
    setIsShow(!isShow)
   
  }
  return (
    <div className='relative flex justify-end flex-1 '>
      <div className={`menus flex justify-around items-center w-[170px] ${isAlpha?'text-white font-bold':''} `}>
        <span className={`w-[60px] h-[40px] leading-[40px] text-center hover:btns ${isAlpha?' bg-opacity-[0.6]':''}`}>登录</span>
        <span className={`w-[60px] h-[40px] leading-[40px] text-center hover:btns ${isAlpha?' bg-opacity-[0.6]':''}`}>注册</span>
        <IconGlobal  />
      </div>
      <div onClick={(e)=>showModalClick(e)} className={`btn hover:btnShadow flex justify-around items-center border rounded-full ${isAlpha?'bg-white':''} border-gray-300 w-[75px] h-[40px] text-gray-600`}>
        <IconMenu />
        <IconAvatar />
      </div>
      { isShow&&<div className={` z-[999] divide-y leading-10 profilePanel absolute right-0 top-12 w-[240px] h-[210px] border rounded-xl shadow-md `}>
         <div className="top ">
            <div className="register hover:bg-zinc-100 px-2">注册</div>
            <div className="login hover:bg-zinc-100 px-2">登录</div>
         </div>
         <div className="bottom  ">
            <div className="houseAmount hover:bg-zinc-100 px-2  ">出租房源</div>
            <div className="experience hover:bg-zinc-100 px-2">开展体验</div>
            <div className={`help hover:bg-zinc-100 px-2`}>帮助</div>
         </div>
      </div>}
    </div>
  )
}

export default memo(HeaderRight)