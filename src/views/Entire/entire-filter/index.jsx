import React, { memo, useState } from 'react'
import filterData from '@/assets/data/filter_data.json'
const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems]=useState([])
  let {topAlpha}=props
  console.log('filter',topAlpha);
  function filterClick(item){
   
    let newFilterItems=[...selectItems]
    if(newFilterItems.includes(item)){
        let itemIndex=newFilterItems.findIndex(filterItem=>filterItem===item)
        newFilterItems.splice(itemIndex,1)   
    }else{
        newFilterItems.push(item)
    }
    setSelectItems(newFilterItems)
  }
  return (
    <>
       <div className={`filter-list flex fixed top-[150px] left-0 bg-white z-[99] right-0 items-center h-[48px] border pl-5 rounded-[5px]`}>
        {
          filterData.map((item,index)=>{
            return(
              <div key={index} onClick={e=>filterClick(item)}
                className={`${selectItems.includes(item)?'bg-red-500 text-white':''} item flex items-center justify-center py-[6px] px-[12px] hover:cursor-pointer border mr-[4px] ml-[8px] rounded-[5px]`}
              >{item}</div>
             )
             })
        }
      </div>
    </>
    )})


export default EntireFilter