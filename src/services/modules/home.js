import hyRequest from '../request'
export function getHotSuggests(){
    return hyRequest.get({
        url:'/home/hotSuggests'
    })
}
export function getHomeCategories(){
    return hyRequest.get({
        url:'/home/categories'
    })
}
export function getHouseList(page=1){
    return hyRequest.get({
        url:'/home/houselist',
        params:{
            page
        }
    })
}