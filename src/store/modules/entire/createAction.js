import { getEntireRoomList } from "@/service/modules/entire"
import { CURRENT_PAGE, LOADING, ROOM_LIST, TOTAL_COUNT } from "./constant"


export const changeCurrentPageAction=(currentPage)=>({
    type:CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction=(roomList)=>({
    type:ROOM_LIST,
    roomList
})

export const changeTotalCountAction=(totalCount)=>({
    type:TOTAL_COUNT,
    totalCount
})

export const isLoadingAction=(isLoading)=>(
    {
        type:LOADING,
        isLoading
    }
)

export const fetchRoomListAction=(page)=>{
    return async(dispatch,getState)=>{
        // let currentPage=getState().entire.currentPage
        dispatch(isLoadingAction(true))
        let res=await getEntireRoomList(page*20)
        dispatch(isLoadingAction(false))
        const roomList=res.list
        const totalCount=res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))  
    }
}