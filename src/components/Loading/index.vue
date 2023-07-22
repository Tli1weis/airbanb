
<script setup>
   import useMainStore from '@/stores/modules/main.js'

   const mainStore=useMainStore()
</script>

<template>
    <div class="loading" v-if="mainStore.isLoading">
        <div class="cover">
           <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>


<style lang="less" scoped>
    .loading{
        position: fixed;
        z-index: 99;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,.5);
        .cover{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 104px;
            height: 104px;
            background:url(@/assets/img/home/loading-bg.png) 0 0/100% 100%;
            img{
                width: 70px;
                height: 70px;
                padding:0 0  8px 0;
            }
        }
    }
</style>