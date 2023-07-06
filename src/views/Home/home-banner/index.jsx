import React, { memo } from 'react'
import bg from '../../../assets/img/bg.jpg'
const HomeBanner = memo(() => {
  return (
    <div className=' h-[650px] hover:cursor-pointer' style={{background:`url(${bg})center 0px/cover`}}></div>
  )
})

export default HomeBanner