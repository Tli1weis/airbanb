import MyRequest from "..";

export function getHomeGoodPriceData(){
    return MyRequest.get({url:'/home/goodprice'})
}

export function getHomeHighScoreData(){
    return MyRequest.get({url:'/home/highScore'})
}

export function getHomeDiscountData(){
    return MyRequest.get({url:'/home/discount'})
}

export function getHomeHotRecommendData(){
    return MyRequest.get({url:'/home/hotrecommenddest'})
}

export function getHomeLongForData(){
    return MyRequest.get({url:'/home/longfor'})
}

export function getHomePlusForData(){
    return MyRequest.get({url:'/home/plus'})
}