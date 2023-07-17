
<script setup>
   import HomeNavBar from './HomeNavBar.vue';
   import HomeSearch from './HomeSearch.vue';
   import useHomeStore from '@/stores/modules/home';

   
   const homeStore=useHomeStore()
   homeStore.fetchHotSuggests()
</script>

<template>
    <div class="home">
        <HomeNavBar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearch/>
    </div>
</template>


<style lang="less" scoped>
.home{
  
    .banner{
            img{
                width: 100%;
            }
        }
   
}
</style>