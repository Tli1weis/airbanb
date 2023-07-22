
<script setup>
   import HomeNavBar from './HomeNavBar.vue';
   import HomeSearch from './HomeSearch.vue';
   import useHomeStore from '@/stores/modules/home';
   import HomeCategories from './HomeCategories.vue';
   import HomeContent from './HomeContent.vue';
   import HomeSearchBar from './HomeSearchBar.vue'
import useScroll from '@/hooks/useScroll';
import { computed, onActivated, ref, watch } from 'vue';

   const homeStore=useHomeStore()
   homeStore.fetchHotSuggests()
   homeStore.fetchCategories()
   homeStore.fetchHouseList()

   const homeRef=ref()
   const {isReachBottom,scrollTop}=useScroll(homeRef)
   watch(isReachBottom,(newVal)=>{
    newVal&&homeStore.fetchHouseList().then(res=>{
        isReachBottom.value=false
    })
   })
   const isTop=computed(()=>{
    return scrollTop.value>=400
   })

   onActivated(()=>{
    homeRef.value.scrollTo({
        top:scrollTop.value
    })

   })
</script>

<template>
    <div class="home" ref="homeRef">
        <HomeNavBar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearch/>
        <HomeCategories/>
        <div class="search-bar" v-if="isTop">
            <HomeSearchBar startDate="08.12" endDate="08.14"/>
        </div>
        <HomeContent/>
    </div>
</template>


<style lang="less" scoped>
.home{
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
    padding-bottom: 60px;
    .banner{
            img{
                width: 100%;
            }
    }
    .search-bar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        padding: 16px 16px 12px;
        background-color: #fff;
        
    }
   
}
</style>