
<script setup>
import { computed } from 'vue';

   const props=defineProps({
      houseData:{
        type:Object,
        default:()=>({})
      }
   })
   const starCount=computed(()=>{
    return Number(props.houseData.data.commentScore)
   })
  
</script>

<template>
  <div class="house-item">
       <div class="house-inner">
          <div class="cover">
            <img :src="houseData.data.image.url" alt="">
          </div>
          <div class="info">
            <div class="summary">{{ houseData.data.summaryText }}</div>
            <div class="content">{{ houseData.data.houseName }}</div>
            <div class="ratePrice">
                <van-rate readonly :modelValue="starCount" allow-half color="#fff" :size="14"/>
                <div class="price">￥{{ houseData.data.finalPrice }}</div>
            </div>
          </div>
        
       </div>
    </div>
</template>


<style lang="less" scoped>
.house-item{
    
    width: 50%;
    .house-inner{
       position: relative;
        width: 100%;
        color: #fff;
      
        .cover{
            padding:5px ;
            img{
                width: 100%;
                border-radius: 10px;
            }
          
        }
        .info{
                position: absolute;
                bottom: 0px;
                padding: 13px;
                .summary{
                    font-size: 13px;
                    margin-bottom: 5px;
                }
                .content{
                    margin-bottom: 5px;
                }
               .content{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow : hidden;
                text-overflow: ellipsis;
                
               }
               .ratePrice{
                display: flex;
                align-items: center;
                justify-content: space-between;
               }
            }
    }
}
</style>