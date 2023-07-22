
<script setup>
   const props=defineProps({
    swipeData:{
        type:Array,
        default:()=>[]
    }
   })
  
   const swipeGroup={}
   for (const item of props.swipeData) {
        let valueArray=swipeGroup[item.enumPictureCategory]
        if (!valueArray) {
            valueArray=[]
            swipeGroup[item.enumPictureCategory]=valueArray
        }
        valueArray.push(item)
   }
   console.log(swipeGroup);

   const nameReg=/【(.*?)】/i

   const getName=(name)=>{
    const res=nameReg.exec(name)
    return res[1]
   }

   const getCurIndex=(item)=>{
    const  valueArray=swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data=>data===item)+1
   }
</script>

<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" >
            <template v-for="(item,index) in swipeData" :key="item">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="indicator" >
                    <template v-for="(value,key,index) in swipeGroup" :key="key" >
                      <span class="item" :class="{active:swipeData[active]?.enumPictureCategory==key}">
                        {{ getName(value[0].title) }}
                        <span class="text" v-if="swipeData[active]?.enumPictureCategory==key">{{getCurIndex(swipeData[active]) }}/{{ value.length }}</span>
                      </span>
                      
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>


<style lang="less" scoped>
    .swipe{
        .swipe-list{
            .item{
                img{
                    width: 100%;
                }
            }
            .indicator {
                position: absolute;
                right: 5px;
                bottom: 5px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 2px 5px;
                font-size: 12px;
                color: #fff;
                background: rgba(0, 0, 0, 1);
                .item{
                    margin: 0 5px;
                }
                .active{
                    padding: 0 3px;
                    
                    color: #333;
                    border-radius: 5px;
                    background-color: #fff;
                }
            }
        }
    }
</style>