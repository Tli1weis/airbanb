import React, { memo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import IconSearch from '@/assets/img/icon_search'
import SearchTabs from './SearchTabs'
import searchList from '@/assets/data/search_titles.json'
import SearchInfos from './SearchInfos'
import { styled } from 'styled-components'
const HeaderWrapper=styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${props=>props.theme.isAlpha?'':'48px'};
  .bar-enter{
    /* @apply translate-y-[58px] opacity-0 scale-[2.85714,1.375] */
    transform: scale(2.85714,1.375) translateY(58px);
    opacity: 0;
    
 }
 .bar-enter-active{
    /* @apply translate-y-[0] opacity-[1] scale-[1.0] transition-all ease-linear duration-[250ms] */
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
 }
 .bar-exit{
    /* @apply opacity-[0] */
    opacity: 0;
 }


 .detail-enter{
   /* @apply translate-y-[-58px] opacity-0 scale-[0.35,0.727273] */
   transform: scale(0.35,0.727273) translateY(-58px);
   opacity: 0;
}
 .detail-enter-active{
   /* @apply translate-y-[0] opacity-[1] scale-[1.0] transition-all ease-linear duration-[250ms] */
   transform: scale(1.0) translateY(0);
   opacity: 1;
   transition: all 250ms ease;
}
 .detail-exit{
   /* @apply opacity-[1] scale-[1.0] translate-y-0 */
   transform: scale(1.0) translateY(0);
   opacity: 1;
}
 .detail-exit-active{
    /* @apply  opacity-0 scale-[0.35,0.727273] translate-y-[-58px] transition-all ease-linear duration-[250ms]  */
    transform: scale(0.35,0.727273) translateY(-58px);
   opacity: 0;
   transition: all 250ms ease;
 }
`
function HeaderCenter(props) {
  let titles=searchList.map(item=>item.title)
  let [tabIndex,setTabIndex]=useState(0)
 
  console.log(tabIndex);
  let {isSearch,searchClick,isAlpha}=props
  function searchBarClick(){
    searchClick&&searchClick()
  }
  return (
     <HeaderWrapper>
      <CSSTransition in={!isSearch} timeout={250} classNames='bar' unmountOnExit={true}>
        <div onClick={searchBarClick} className=' search-bar absolute hover:btnShadow  flex items-center justify-between border rounded-[60px] w-[300px] h-[48px] p-4 text-sm font-bold '>
          <div className="text text-[12px]">搜索房源和体验</div>
          <div className="icon flex justify-center items-center text-white bg-red-500 w-8 h-8 rounded-[50%]">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} timeout={250} classNames='detail' unmountOnExit={true}>
        <div className="search-detail relative origin-[50%,0] will-change-[transform,opacity] ">
          <SearchTabs isAlpha={isAlpha} titles={titles} tabClick={setTabIndex}/>
          <div className={`infos absolute top-[60px] left-[50%]  translate-x-[-50%] `}>
            <SearchInfos isAlpha={isAlpha} searchInfo={searchList[tabIndex].searchInfo} />
          </div>
        </div>
      </CSSTransition>
     </HeaderWrapper>
  )
}

export default memo(HeaderCenter)