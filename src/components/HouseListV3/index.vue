
<script setup>
import { computed } from 'vue';


   const props=defineProps({
      houseData:{
        type:Object,
        default:()=>({})
      }
   })
  
 
</script>

<template>
  <div class="house-item">
       <div class="house-inner">
          <div class="cover">
            <img :src="houseData.data.image.url" alt="">
          </div>
          <div class="info">
            <div class="position">
              <img src="@/assets/img/home/location.png" alt="">
              <div class="pos-text">
                {{ houseData.data.location }}
              </div>
            </div>
            <div class="content">{{ houseData.data.houseName }}</div>
            <div class="summary">{{ houseData.data.summaryText }}</div>
            <div class="discount">
                <div class="new">￥{{ houseData.data.finalPrice }}</div>
                <div class="old">￥{{ houseData.data.productPrice }}</div>
                <div class="dis-price" :style="{color:houseData?.data.priceTipBadge?.color}" v-if="houseData?.data?.priceTipBadge?.text">{{ houseData.data.priceTipBadge.text }}</div>
            </div>
          </div>
        
       </div>
    </div>
</template>


<style lang="less" scoped>
 .house-item{
    display: flex;
    flex-shrink: 0;
    width: 50%;
    .house-inner{
        width: 100%; 
        .cover{
          padding: 5px;
            img{  
                width: 100%;
                border-radius: 10px;
            }
        }
        .info{
          padding: 10px;
                .position{
                  display: flex;
                  align-items: center;
                  font-size: 12px;
                  margin-bottom: 5px;
                  img{
                    width: 14px;
                    height: 14px;
                  }
                }
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
              .discount{
                display: flex;
                align-items: center;
                .new{
                  color: orange;
                }
                .old{
                  font-size: 12px;
                  color: #666;
                  padding: 3px;
                  text-decoration: line-through;
                }
                .dis-price{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 60px;
                  border-radius: 20px;
                  font-size: 12px;
                  margin-left: 5px;
                  background-image: var(--theme-gradient);
                }
              }
            }
    }
}
</style>