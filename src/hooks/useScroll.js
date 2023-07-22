import { throttle } from "underscore";
import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll(elRef){
    let el=window
    const isReachBottom=ref(false)
    const clientHeight=ref(0)
    const scrollTop=ref(0)
    const scrollHeight=ref(0)
    const scrollListener=throttle(()=>{
        if(el===window){
            clientHeight.value=document.documentElement.clientHeight
            scrollTop.value=document.documentElement.scrollTop
            scrollHeight.value=document.documentElement.scrollHeight
        }else{
            clientHeight.value=elRef.value.clientHeight
            scrollTop.value=elRef.value.scrollTop
            scrollHeight.value=elRef.value.scrollHeight
        }
     
        
        if (clientHeight.value+scrollTop.value>=scrollHeight.value) {
           isReachBottom.value=true
           console.log('bottom');
        }
    },100)

    onMounted(()=>{
        if(elRef)el=elRef.value
        el.addEventListener('scroll',scrollListener)
    })
   
    onUnmounted(()=>{
        el.removeEventListener('scroll',scrollListener)
    })
   
    return {isReachBottom,scrollTop}
}