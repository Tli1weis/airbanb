
import React, { memo, useEffect, useRef, useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'
import IconClose from '@/assets/img/icon_close'
import IconRight from '@/assets/img/icon_right'
import IconLeft from '@/assets/img/icon_left'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Indicator from '../indicator'
import { styled } from 'styled-components'
const SlatesWrapper=styled.div`
   
        .fade-enter{
        transform: translateX(${props=>props.isNext?'100%':'-100%'});
        opacity: 0;
        /* @apply translate-x-[100%] opacity-0 */
        /*  transform:translateX(100px);
        opacity: 0; */
        }
        .fade-enter-active{
        transform: translateX(0);
        opacity: 1;
        transition: all 250ms ease;
        /* @apply translate-x-0 opacity-[1] transition-all ease-linear duration-[250ms] */
        /*   transform:translateX(0);
        opacity: 1;
        transition: all 1s ease; */
        }
        .fade-exit{
        opacity: 1;
        transform: translateX(0);
        /* @apply opacity-[1] */
        /*  transform:translateX(0);
        opacity: 1; */
        }
        .fade-exit-active{
        opacity: 0;
        transition: all 250ms ease;
        /* @apply  opacity-0 transition-all ease-linear duration-[250ms]  */
        /*  transform:translateX(-100px);
        opacity: 0;
        transition: all 1s ease; */

        }
        
    
   
`
const PicturesBrowser = memo((props) => {
    let {setIsShow,pictureUrls}=props
    let [currentIndex,setCurrentIndex]=useState(0)
    let [isNext,setIsNext]=useState(true)
    let [toggle,setToggle]=useState(true)
    
   
    useEffect(()=>{
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='auto'
        }
    },[])
   
    function control(isRight){
        let cur=isRight?currentIndex+1:currentIndex-1
        if(cur<0)cur=pictureUrls.length-1
        if(cur>pictureUrls.length-1)cur=0
        setCurrentIndex(cur)
        setIsNext(isRight)
    }
    function select(index){
        setIsNext(index>currentIndex)
        setCurrentIndex(index)
    }
  
  return (
  
      <SlatesWrapper isNext={isNext}>
          <div  className='fixed  flex flex-col z-[999] top-0 right-0 left-0 bottom-0 bg-black'>
        <div className="top relative h-[86px]">
                <div onClick={e=>setIsShow(false)} className='absolute hover:cursor-pointer right-[10px] top-[10px] text-center text-[32px] text-white'>
                    <IconClose width={28} height={28} />
                </div>
        </div>
        <div className="slider flex-1 relative flex justify-center items-center overflow-hidden">
                <div className="control absolute z-[1] flex h-[100%] top-0 bottom-0 right-0 left-0 text-white justify-between  hover:cursor-pointer">
                    <div className="control-left w-[83px] h-[100%] flex items-center justify-center" onClick={e=>control(false)}><IconLeft width='68' height='68'/></div>
                    <div className="control-right w-[83px] h-[100%] flex items-center justify-center" onClick={e=>control(true)}><IconRight  width='68' height='68'/></div>
                </div>
           
                <div className="pic-container relative h-[100%] w-[100%] max-w-[105vh] overflow-hidden "  >
                    <SwitchTransition mode='in-out'>
                            <CSSTransition classNames='fade' key={pictureUrls[currentIndex]} timeout={250}>
                                <img src={pictureUrls[currentIndex]} alt="" className={` absolute top-0 left-0 right-0 bottom-0 h-[100%] m-auto select-none `}/>    
                            </CSSTransition>
                    </SwitchTransition>
                    </div>
             
        </div>
        <div className="preview h-[100px] mt-[10px] flex justify-center">
            <div className="info absolute bottom-[10px]  max-w-[105vh]  hover:cursor-pointer ">
                <div className={`desc flex justify-between items-center  z-[99]  text-white `}>
                    <div className="total ">
                        <span className='mr-[6px]'>{currentIndex+1}/{pictureUrls.length}:room</span>
                        <span>apartment图片{currentIndex+1}</span>
                    </div>
                    <div className="show" onClick={e=>setToggle(!toggle)}>
                        <span>{toggle?'隐藏':'显示'}照片列表</span>
                      {toggle?<ArrowDropDownIcon />:<ArrowDropUpIcon/>}
                    </div>
                </div>
                <div className={`list overflow-hidden transition-all mt-[3px] ${toggle?'h-[67px]':'h-[0px]'}`}>
                    <Indicator selectedIndex={currentIndex}>
                        {pictureUrls?.map((item,index)=>{
                            return <div onClick={e=>select(index)} className='item w-[150px]  flex-shrink-0 mx-[15px]' key={index} > 
                                <img src={item} alt="" className={` h-[67px]  w-[100%] object-cover ${currentIndex===index?'opacity-[1]':'opacity-[0.5]'}`}/>
                            </div>
                        })}
                    </Indicator>
                </div>
            </div>
        </div>
      </div>
      </SlatesWrapper>
    
  )
})

export default PicturesBrowser