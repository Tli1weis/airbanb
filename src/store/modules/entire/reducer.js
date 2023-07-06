import { CURRENT_PAGE, LOADING, ROOM_LIST, TOTAL_COUNT } from "./constant"

const initialState={
    currentPage:0,
    roomList:[],
    totalCount:0,
    isLoading:false,
}

function reducer(state=initialState,action){
    switch(action.type){
        case ROOM_LIST:   
         return {...state,roomList:action.roomList}
         case CURRENT_PAGE:   
         return {...state,currentPage:action.currentPage}
         case TOTAL_COUNT:   
         return {...state,totalCount:action.totalCount}
         case LOADING:   
         return {...state,isLoading:action.isLoading}
        default:
            return state
    }
}

export default reducer