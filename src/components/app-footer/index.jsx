import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import footerData from '@/assets/data/footer.json'
function AppFooter() {
 
  return (
   <div className='divide-y mt-[30px]'>
     <div className='flex justify-around items-center px-16 py-6 '>
      {footerData.map((item,index)=>{
        return<ul key={index} className='h-[200px] '>
           <h2 className='font-bold my-4'><NavLink>{item.name}</NavLink>
            </h2>
            {item.list.map((info,index)=>{
              return<li key={index} className='text-gray-500 leading-6'>{info}</li>
            })}
        </ul>
      })}
    </div>
    <div className="copyright   mx-[200px]  text-center w-[1200px] h-14 leading-[56px] text-gray-500">
        <span>© 2023  Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</span>
    </div>
   </div>
  )
}

export default memo(AppFooter)