
<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import formatTime from '@/utils/formatTime'
import countStayDay from '@/utils/countStayDay'
import { computed, ref } from 'vue';
import useHomeStore from '@/stores/modules/home';
import useDateStore from '@/stores/modules/main';


   const getPosition=()=>{
        navigator.geolocation.getCurrentPosition(res=>{
            console.log(res);
        },err=>{
            console.log(err);
        },{
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0
        })
   }

   const router=useRouter()
   const cityStore=useCityStore()
   const {currentCity}=storeToRefs(cityStore)
   const toCity=()=>{
        router.push('/city')
   }
   const dateStore=useDateStore()
   const {startDate,endDate}=storeToRefs(dateStore)
   const transformStart=computed(()=>formatTime(startDate.value))
   const transformEnd=computed(()=>formatTime(endDate.value))
   const stayCount=ref(countStayDay(endDate.value,startDate.value))
   const show=ref(false)
 
   const onConfirm=(value)=>{
    dateStore.startDate=value[0]
    dateStore.endDate=value[1]
    stayCount.value=countStayDay(value[1],value[0])
    show.value=false
   }

   const homeStore=useHomeStore()
   const {hotSuggests}=storeToRefs(homeStore)
   
   
   const searchClick=()=>{
        router.push({
            path:'/search',
            query:{
                startDate:startDate.value,
                endDate:endDate.value,
                currentCity:currentCity.value.cityName
            }
        })
   }

</script>

<template>
  <div class="location">
        <div class="selectPosition">
            <div class="city" @click="toCity">{{ currentCity.cityName }}</div>
            <div class="position" @click="getPosition">
                <div class="text">我的位置</div>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <div class="stay-time" @click="show=true">
                <div class="start">
                    <div class="date">
                        <div class="text">入住</div>
                        <div class="time">{{transformStart}}</div>
                    </div>
                    <div class="dwell-time">
                        共{{stayCount}}晚
                    </div>
                </div>
                <div class="end">
                    <div class="date">
                        <div class="text">离店</div>
                        <div class="time">{{transformEnd}}</div>
                    </div>
                </div>
        </div>
        <div class="select-time"> 
            <van-calendar v-model:show="show" :show-confirm="false"   type="range" color="#ff9854" @confirm="onConfirm"/>
        </div>
        <div class="more-info">
            <div class="price-num">
                <div class="price">价格不限</div>
                <div class="number">人数不限</div>
            </div>
            <div class="key">关键字/位置/民宿名</div>
        </div>
        <div class="hot-city">
            <div class="hotList">
                <template v-for="(item,index) in hotSuggests" :key="item">
                    <div class="hotItem"  @click="searchClick" :style="{background:item.tagText.background.color,color:item.tagText.color}">
                        {{ item.tagText.text }}
                    </div>
                </template>
            </div>
        </div>
        <div class="search-btn" @click="searchClick">
            <div class="text">开始搜索</div>
        </div>
  </div>
  
</template>


<style lang="less" scoped>
 .location{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding: 10px 20px 0;
        .selectPosition{
            display: flex;
            // flex: 1;
            width: 100%;
            justify-content: space-between;
        }
        .city{
            color: #333;
            font-size: 15px;
        }
        .position{
            display: flex;
            align-items: center;
            width:85px;
            .text{
                margin-right: 5px;
                font-size: 13px;
                color: #666;
            }
            img{
                width: 20px;
            }
        }
        .stay-time{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 20px;
        .start{
            display: flex;
            flex: 1;
            align-items: center;
            .dwell-time{
                font-size: 12px;
                color: #666;
                margin-left: 60px;
            }
            .text{
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 5px;
                }
        }
        .end{
                width: 110px;
                .text{
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 5px;
                }
            }
        }
        .more-info{
            width: 100%;
            color: #888;
            font-size: 13px;
            .price-num{
                display: flex;
                justify-content: space-between;
                .number{
                    width: 110px;
                }
               
            }
            .key{
                margin-top: 20px;
            }
        }
        .hot-city{
            margin: 20px 0 10px;
            
           .hotList{
            display: flex;
            flex-wrap: wrap;
            
            .hotItem{
                padding: 4px 5px;
                margin:5px 10px;
                border-radius: 10px;
                font-size: 12px;
                line-height: 1;
            }
           }
        }
        .search-btn{
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            text-align: center;
            font-weight: 400;
            font-size: 16px;
            background-image:var(--theme-gradient) ;
        
            .text{
                color: #fff;
            }
        }
    }
    
</style>