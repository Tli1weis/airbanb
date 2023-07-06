import React, { memo } from 'react'
import IconSvg from '@/assets/img/icon_logo'
import { useNavigate } from 'react-router-dom'
function HeaderLeft(props) {
  let {isAlpha}=props
  const navigate=useNavigate()
  function toHome(){
      navigate('/home')
  }
  return (
    <div className={`flex-1 ${isAlpha?'fill-white':'fill-red-600'} cursor-pointer`} onClick={toHome}>
      <IconSvg />
    </div>
  )
}

export default memo(HeaderLeft)