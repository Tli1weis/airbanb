const load_img=function (img){
    return new URL(`../assets/img/${img}`,import.meta.url).href
}

export default load_img