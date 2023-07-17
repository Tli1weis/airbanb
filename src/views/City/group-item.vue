
<script setup>

import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'

  const props=defineProps({
    cityGroupData:{
        type:Object,
        default:()=>({}),
    }
   })
   const indexList=computed(()=>{
    const list=props.cityGroupData.cities.map(item=>item.group)
    list.unshift('#')
    return list
   })

   const router=useRouter()
   const cityStore=useCityStore()
  
   const cityTo=(city)=>{
   cityStore.currentCity=city

    router.back()
   }
</script>

<template>
    <div class="city-group">
        <van-index-bar :sticky="true" :index-list="indexList"  highlight-color="red">
            <van-index-anchor index="热门" />
               <div class="list">
                <template v-for="(item,index) in cityGroupData.hotCities" :key="item"> 
                   <div class="city" @click="cityTo(item)">{{ item.cityName }}</div>
                </template>
               </div>
            <template v-for="(item,index) in cityGroupData.cities" :key="index">
                <van-index-anchor :index="item.group" />
            
                <template v-for="(city,cityIndex) in item.cities" :key="cityIndex">
                    <van-cell :title="city.cityName" @click="cityTo(city)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>


<style lang="less" scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        padding-right: 25px;
        .city{
            width: 70px;
            height: 28px;
            line-height: 28px;
            background-color: #fff4ec;
            border-radius: 14px;
            text-align: center;
            
            font-size: 12px;
            color: #000;
            margin: 6px;
        }
    }
</style>