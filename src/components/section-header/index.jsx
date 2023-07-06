import React, { memo } from 'react'

const SectionHeader = memo((props) => {
    let {title,subtitle}=props
  return (
    <div className='group hover:cursor-pointer flex items-center  w-70 my-2'>
       <div className="title ">
            <h2 className='font-bold text-2xl my-1'>{title}</h2>
            {subtitle&&<div className='my-3'>{subtitle}</div>}
       </div>
       <div className='group-hover:block hidden mx-[20px] text-2xl'>&gt;</div>
    </div>
  )
})

export default SectionHeader