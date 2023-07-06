import React, { memo } from 'react'

const LongForItem = memo((props) => {
    let {data:{price,picture_url,city}}=props
  return (
    <div className=' inner relative w-[15%] px-2 flex-shrink-0 '>
        <img  className='cover w-[100%] rounded-lg ' src={picture_url} alt="" />
        <div className="cover-bg absolute rounded-lg left-2 right-2 bottom-0 h-[60%] bg-gradient-to-t  from-black to-transparent"></div>
        <div className="info flex flex-col items-center justify-around h-[45px] absolute z-20 bottom-[15%] left-[50%] translate-x-[-50%] text-white">
            <div className="city font-bold text-[20px] ">
                {city}
            </div>
            <div className="price ">
                均价&nbsp;{price}
            </div>
        </div>
        
    </div>
  )
})

export default LongForItem