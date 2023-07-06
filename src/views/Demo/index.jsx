import React, { memo, useState } from 'react'
import Indicator from '@/base-ui/indicator'
import { useSelector } from 'react-redux'
import { CSSTransition,SwitchTransition,TransitionGroup } from 'react-transition-group'
import { styled } from 'styled-components'
const SlatesWrapper=styled.div`
    .pic-container{
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
        
    }
   
`
const Demo = memo((props) => {
    let arr=['abc','abb','acc','bba','cba','nba']
    let [selectedIndex,setSelectedIndex]=useState(0)
    function controlClick(isRight){
        let curIndex=isRight?selectedIndex+1:selectedIndex-1;
        if(curIndex<0)curIndex=arr.length-1
        if(curIndex>arr.length-1)curIndex=0
        setSelectedIndex(curIndex)
    }
    let {detailInfo}=useSelector(state=>({
        detailInfo:state.detail.detailInfo
      }))
    
    let [{isLogin},setIsLogin]=useState({isLogin:true})
   let [books,setBooks]=useState([
     {
        id:11,
        name:'js',
        price:99
     },
     {
        id:22,
        name:'react',
        price:100
     },
    ])
    function add(){
        let book=[...books]
        book.push({id:new Date().getTime(),name:'gg',price:199})
        setBooks(book)
    }
    function remove(index){
        let book=[...books]
        book.splice(index,1)
        setBooks(book)
    }
   
   let {setIsShow,pictureUrls}=props
   let [currentIndex,setCurrentIndex]=useState(0)
   let [isNext,setIsNext]=useState(true)
   let [toggle,setToggle]=useState(true)
   
  
  return (
 <SlatesWrapper>
      <div className='text text-[32px]'>212131</div>
 </SlatesWrapper>
   /*  <div>
        <div className="control my-1">
            <button onClick={e=>controlClick(false)} className='border mx-2 bg-slate-400'>上一个</button>
            <button onClick={e=>controlClick(true)} className='border bg-slate-400'>下一个</button>
        </div>
        <div className=' w-[100px]'>
            <Indicator selectedIndex={selectedIndex}>
                {arr.map(item=>{
                    return(
                            <button key={item} className='border px-[12px] py-[6px] bg-slate-400'>{item}</button>   
                    )
                 })
                }
            </Indicator>
        </div>
    </div> */
   /*  <div className='relative group/container flex h-[600px]'>
        <div className=" left group   w-[50%] h-[100%] hover:cursor-pointer">
            <div className=" relative overflow-hidden h-[100%] box-border border border-black">
                <img src={detailInfo.picture_urls[1]} alt="" className='group-hover:scale-[1.1]  transition-all w-[100%] h-[100%] object-cover '/>
                <div className='absolute z-30  top-0 right-0 left-0 bottom-0 bg-black opacity-0 group-hover/container:opacity-[0.7] group-hover/container:group-hover:opacity-0 transition-all'></div>
            </div>
        </div>
        <div className="right group w-[50%] h-[100%] flex flex-wrap hover:cursor-pointer">
                {detailInfo?.picture_urls?.slice(5,9).map(item=>{
                    return <div className='group/item  relative overflow-hidden w-[50%] h-[50%] box-border border border-black'>
                        <img src={item} alt="" className='group-hover/item:scale-[1.1] transition-all w-[100%] h-[100%] object-cover '/>
                        <div className='absolute z-30  top-0 right-0 left-0 bottom-0 bg-black opacity-0 group-hover/container:opacity-[0.7] group-hover/container:group-hover/item:opacity-0 transition-all'></div>
                    </div>
                })}
        </div>
    </div> */
  /*   <div>
        <h2 className='font-bold text-[32px]'>图书馆</h2>
        <TransitionGroup component='ul'>
           
                {
                    books.map((book,index)=>{
                        return  <CSSTransition key={book.id} classNames='book' timeout={1000}>
                                <li >
                                    名字:{book.name}-价格:￥{book.price}
                                    <button onClick={e=>remove(index)} className='rounded-[4px]  px-[6px] py-[12px] border bg-slate-400'>删除</button>
                                </li>
                        </CSSTransition>
                    })
                }
           
        </TransitionGroup>
        <button onClick={e=>add()}>添加书记</button>
    </div> */
  )
})

export default Demo