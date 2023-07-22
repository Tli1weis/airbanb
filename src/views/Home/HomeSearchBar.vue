
<script setup>
import useMainStore from '@/stores/modules/main';
import formatTime from '@/utils/formatTime';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

 const dateStore=useMainStore()
 const {startDate,endDate}=storeToRefs(dateStore)
 const transformStart=computed(()=>formatTime(startDate.value,'MM.DD'))
 const transformEnd=computed(()=>formatTime(endDate.value,'MM.DD'))
</script>

<template>
    <div class="search">
        <div class="stayTime">
            <div class="live">
                <div class="text">住</div>
                <div class="time">{{ transformStart }}</div>
            </div>
            <div class="leave">
                <div class="text">离</div>
                <div class="time">{{ transformEnd }}</div>
            </div>
            <div class="angle">

            </div>
        </div>
        <div class="keyword">关键字/位置/民宿</div>
        <div class="searchIcon">  
                <van-icon name="search" :size="18" color="#7d7f81" /> 
        </div>
    </div>
</template>


<style lang="less" scoped>
    .search{
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        border-radius:10px;
        font-size: 12px;
       
        .stayTime{
            position: relative;
            display: flex;
            flex-direction: column;
            border-right: 2px solid #fff;
            padding: 8px;
            .live,.leave{
                display: flex;
               
            }
            .leave{
                margin-top: 2px;
            }
            .angle{
                position: absolute;
                bottom: 0;
                right: 1px;
                width: 0;
                height: 0;
                border-top:7px solid transparent;
                border-bottom: transparent;
                border-right: 7px solid #656a6e;
                border-left: 7px solid transparent;
            }
        }
        .keyword{
            flex: 1;
            color: #aaa;
           padding-left: 5px;
           
        }
        .searchIcon{
            width: 30px;
        }
    }
</style>