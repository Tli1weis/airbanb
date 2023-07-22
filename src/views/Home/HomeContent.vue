
<script setup>
import HouseListV3 from '@/components/HouseListV3/index.vue'
import HouseListV9 from '@/components/HouseListV9/index.vue'
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

   const homeStore=useHomeStore()
   const {houseList}=storeToRefs(homeStore)

   const router=useRouter()
   const toDetail=(id)=>{
        router.push(`/detail/${id}`)
   }
</script>

<template>
    <div class="content">
        <h2>热门精选</h2>
        <div class="list">
            <template v-for="(item,index) in houseList" :key="item.data.houseId">
                <HouseListV9 v-if="item.discoveryContentType===9" :houseData="item" @click="toDetail(item.data.houseId)"/>
                <HouseListV3 v-else-if="item.discoveryContentType===3" :houseData="item" @click="toDetail(item.data.houseId)"/>
            </template>
        </div>
    </div>
</template>


<style lang="less" scoped>
    .content{
        padding:10px ;
        .list{
            display: flex;
            flex-wrap: wrap;
            padding: 10px 0;
           
        }
    }
</style>