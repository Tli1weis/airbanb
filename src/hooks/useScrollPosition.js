import { useEffect, useState } from "react";
import { throttle } from "underscore";
export default function useScrollPosition(){
    let [scrollX,setScrollX]=useState(0)
    let [scrollY,setScrollY]=useState(0)
    useEffect(()=>{
        const scrollHandle=throttle(function(){
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        })
        window.addEventListener('scroll',scrollHandle)
        return ()=>{
            window.removeEventListener('scroll',scrollHandle)
        }
    },[])

    return {scrollY,scrollX}
}