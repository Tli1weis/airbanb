import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createAction';
const EntirePagination = memo((props) => {
  
  const {roomList,totalCount,currentPage}=useSelector(state=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    currentPage:state.entire.currentPage,
    
  }),shallowEqual)
  let page=Math.ceil(totalCount/20),
      start=(currentPage*20)+1,
      end=(currentPage+1)*20;
  let dispatch=useDispatch()

  function changePage(e,page){
    window.scroll(0,0)
    dispatch(fetchRoomListAction(page-1))
  }
  return (
    <>
      {
        !!roomList.length&&(
         <div className=' flex flex-col items-center justify-center'>
             <Pagination count={page} onChange={changePage}/>
             <div className="desc my-2 tracking-widest">
                第{start}-{end}个房源,共超过{totalCount}个
             </div>
            
         </div>
        
        )
      }
    </>
  )
})

export default EntirePagination