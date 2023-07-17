
<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import {storeToRefs} from 'pinia'
import useCityStore from '@/stores/modules/city'
import groupItem from './group-item.vue';
const searchValue=ref('')
const activeValue=ref('')

const router=useRouter()
   const cancel=()=>{
    router.back()
   }

const cityStore=useCityStore()
cityStore.fetchAllCitiesData()
const {allCities}=storeToRefs(cityStore)

const currentGroup=computed(()=>allCities.value[activeValue.value])
console.log(allCities);
</script>

<template>
    <div class="city ">
       <div class="top">
            <van-search
                v-model="searchValue"
                shape="round"
                @cancel="cancel"
                show-action
                placeholder="城市/区域/位置"
            />
            <van-tabs v-model:active="activeValue" color="#ff9854">
                <template v-for="(item,key,index) in allCities" :key="key">
                    <van-tab :title="item.title" :name="key"></van-tab>
                </template>
            </van-tabs>
       </div>
       
       <div class="content">
            <template v-for="(item,key,index) in allCities" :key="index">
                <group-item v-show="activeValue===key" :cityGroupData="item"/>
            </template>
       </div>
    </div>
</template>


<style lang="less" scoped>
.city{
 

   /*  position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff; */

  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 104px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
}
</style>