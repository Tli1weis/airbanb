
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyObject } from '@/utils/isEmptyObject'
import HomeBanner from './home-banner'
import HomeLongFor from './home-longfor'
import HomeSectionV1 from './home-section-v1'
import HomeSectionV2 from './home-section-v2'
import HomeSectionV3 from './home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default function Home() {
 const {goodPriceInfo,highScoreInfo,discountInfo,hotRecommendInfo,longForInfo,plusInfo}
    = useSelector(state=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    hotRecommendInfo:state.home.hotRecommendInfo,
    longForInfo:state.home.longForInfo,
    plusInfo:state.home.plusInfo,
  }),shallowEqual)

 

 const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
  },[dispatch])

 
  return (
    <>
      <HomeBanner />
      {isEmptyObject(discountInfo) &&<HomeSectionV2 infoData={discountInfo}/>}
      {isEmptyObject(hotRecommendInfo)&&<HomeSectionV2 infoData={hotRecommendInfo}/>}
      {isEmptyObject(longForInfo)&&<HomeLongFor infoData={longForInfo}/>}
      {isEmptyObject(goodPriceInfo)&&<HomeSectionV1 infoData={goodPriceInfo}/>}
      {isEmptyObject(highScoreInfo)&&<HomeSectionV1 infoData={highScoreInfo}/>} 
      {isEmptyObject(plusInfo)&&<HomeSectionV3 infoData={plusInfo}/>} 
      </>
  )
}
