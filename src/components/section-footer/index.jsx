import React, { memo } from 'react'
import IconRight from '@/assets/img/icon_right'
import { useNavigate } from 'react-router-dom';
const SectionFooter = memo((props) => {
    let {name}=props
    let showMessage='显示全部';
    if(name){
        showMessage=`查看更多${name}房源`
    }
    const navigate=useNavigate()
    function moreClick(){
      window.scroll(0,0)
      navigate('/entire')
    }
  return (
    <div onClick={moreClick} className={`flex items-center hover:underline hover:cursor-pointer  ${name?'text-teal-600':''}`}>
        <span className='mr-2 text-[16px] font-bold'>{showMessage}</span>
        <IconRight />
    </div>
  )
})

export default SectionFooter