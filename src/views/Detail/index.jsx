import React, { useEffect } from 'react'
import DetailInfo from './detail-info'
import DetailPictures from './detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
export default function Detail() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false}))
  },[])
  return (
    <div className=''>
      <DetailPictures />
      <DetailInfo />
    </div>
  )
}
