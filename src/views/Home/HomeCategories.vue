
<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

   const homeStore=useHomeStore()
   const {categories}=storeToRefs(homeStore)

</script>

<template>
    <div class="categories">
       <template v-for="(item,index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{ item.title }}</div>
            </div>
       </template>
    </div>
</template>


<style lang="less" scoped>
    .categories{
        display: flex;
        margin-top: 15px;
        overflow-x: auto;
        &::-webkit-scrollbar{
            display: none;
        }
        
        .item{
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            margin: 10px;
            
            img{
                width: 32px;
                height: 32px;
            }
            .text{
                margin-top: 5px;
            }
        }
    }
</style>