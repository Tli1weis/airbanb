import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './childrenComponents/header-left'
import HeaderCenter from './childrenComponents/header-center'
import HeaderRight from './childrenComponents/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

function AppHeader() {
  const {headerConfig}=useSelector(state=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const {isFixed,topAlpha}=headerConfig
  let [isSearch,setIsSearch]=useState(false)
  const {scrollY}=useScrollPosition()
  const prevPosition=useRef(0)
  if(!isSearch)prevPosition.current=scrollY
  if(isSearch&&Math.abs(scrollY-prevPosition.current)>30)setIsSearch(false)
  let isAlpha=topAlpha&&scrollY===0
  console.log(isAlpha);
  return (
   <ThemeProvider theme={{isAlpha}}>
    <div className={`${isFixed?'fixed top-0 right-0 left-0  border-r-[0px]  z-[99] ':''}  ${isAlpha?' bg-opacity-0':'border-b border-b-slate-200 bg-white'} border-solid `}>
      <div  className={`content relative z-[19]    `}>
        <div className={`top  h-[80px] flex items-center  px-5  `}>
          <HeaderLeft isAlpha={isAlpha} />
          <HeaderCenter isAlpha={isAlpha} isSearch={isAlpha||isSearch} searchClick={e=>setIsSearch(true)} />
          <HeaderRight isAlpha={isAlpha} />
        </div> 
        {isAlpha||isSearch&&<div className={`search-area h-[100px] `}></div>}
        {isSearch&&<div onClick={e=>setIsSearch(false)} className={`cover fixed top-[180px] right-0 bg-black bg-opacity-[.5]  bottom-0 left-0 z-[999] `}></div>}
      </div>
    </div>
   </ThemeProvider>
  )
}

export default memo( AppHeader)