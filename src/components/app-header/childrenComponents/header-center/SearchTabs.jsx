import React, { memo, useState } from 'react'

const SearchTabs = memo((props) => {
  let {titles,tabClick,isAlpha}=props
 
  let [curIndex,setCurIndex]=useState(0)
  function tabChange(index){
    setCurIndex(index)
    tabClick&&tabClick(index)
  }
  return (
    <div className="searchTabs flex hover:cursor-pointer w-[150px] justify-between ">
    {titles.map((item,index)=>{
      return  <div onClick={e=>tabChange(index)} key={item} className={`tab-item h-[25px] ${index===curIndex?'border-b-[2px] border-black':''} ${isAlpha?'border-white text-white':''}  font-bold transition-all`}>
                        {item}
              </div>
     })}
 </div>
  )
})

export default SearchTabs