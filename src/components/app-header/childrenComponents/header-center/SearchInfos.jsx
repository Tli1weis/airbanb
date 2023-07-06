import React, { memo } from 'react'

const SearchInfos = memo((props) => {
    let {searchInfo,isAlpha}=props
 
  return (
    <div className="searchList my-[-20px] hover:cursor-pointer w-[800px] h-[100px]">
            <div className={`flex items-center h-[70px] border rounded-[40px] ${isAlpha?'bg-white':''}`}>
                {searchInfo.map((item,index)=>{
                    return (
                     <div className={`tab-item ${searchInfo.length===2?'w-[50%]':'w-[33.33%]'} ml-[30px] flex items-center justify-between`}>
                                <span className='tab-item-container'>
                                    <h4 className='font-bold'>{item.title}</h4>
                                    <div className='text-gray-400'>{item.desc}</div>
                                </span>
                                {index!==searchInfo.length-1&&<div>
                                    <span className=' border-r-[2px] h-[48px] border-y-gray-500'></span>
                                </div>
                                }
                    </div>
                    )
                })}
            </div>
  </div>
  )
})

export default SearchInfos