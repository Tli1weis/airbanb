import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import PicturesBrowser from '@/base-ui/pictures-browser'
const DetailPictures = memo(() => {
    let [isShow,setIsShow]=useState(false)
    let {detailInfo}=useSelector(state=>({
        detailInfo:state.detail.detailInfo
      }),shallowEqual)
    
    let shadowStyles={
        manyCover:'absolute z-50 top-0 right-0 left-0 bottom-0 bg-black opacity-0 group-hover/container:opacity-[0.7] group-hover/container:group-hover/item:opacity-0 transition-all duration-500',
        cover:' absolute z-50 top-0 left-0 right-0 bottom-0  bg-black opacity-0 group-hover/container:opacity-[0.7] group-hover/container:group-hover:opacity-0 transition-all duration-500',
    }
   
  return (
          <div className='relative'>
              <div className="pictures group/container flex h-[600px]">
                        <div className="left  group w-[50%] h-[100%] hover:cursor-pointer">
                            <div onClick={e=>setIsShow(true)} className="item  relative overflow-hidden h-[100%] border border-black box-border">
                                <img src={detailInfo.picture_urls[1]} alt="" className='pic-img group-hover:scale-[1.1] transition-all h-[100%] object-cover' />
                                <div className={`detail-cover  ${shadowStyles.cover}`}></div>
                            </div>
                        </div>
                        <div className="right  w-[50%] h-[100%] flex flex-wrap hover:cursor-pointer">
                            {detailInfo?.picture_urls?.slice(5,9).map(item=>{
                            return<div onClick={e=>setIsShow(true)} className=' group/item relative overflow-hidden w-[50%] h-[50%] border border-black box-border' key={item}>
                                <img src={item} alt="" className='pic-img group-hover/item:scale-[1.1] transition-all  w-[100%] h-[100%] object-cover' />
                                <div className={`detail-cover ${shadowStyles.manyCover}`}></div>
                            </div>
                            })}
                        </div>
              </div>
              <div onClick={e=>setIsShow(true)} className='show hover:cursor-pointer absolute z-[99] bottom-[15px] right-[10px] bg-white px-[12px] py-[6px] rounded-[4px] '>显示图片</div>
             { isShow&&<PicturesBrowser setIsShow={setIsShow} pictureUrls={detailInfo?.picture_urls}/>}
          </div>
  )
})

export default DetailPictures