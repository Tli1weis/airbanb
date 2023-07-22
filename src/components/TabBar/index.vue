
<script setup>
    import tabBarData from '@/assets/data/tabBar'
    import getAssetsImg from '@/utils/load_img'
    import { ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

   
    const route=useRoute()
    const curIndex=ref(0)
    watch(route,(newRoute)=>{
        console.log('newRoute',newRoute);
        let index=tabBarData.findIndex(item=>item.path===newRoute.path)
        console.log('index',index);
        if(index=== -1)return
        curIndex.value=index
        
    })
    
   
</script>

<template>
    <div class="tabBar">
        
       <!--  <template v-for="(item,index) in tabBarData " :key="index">
            <div class="tab-item" @click="curClick(index,item)" :class="{active:curIndex===index}">
                    <img v-if="curIndex!==index" :src="getAssetsImg(item.img_url)" alt="">
                    <img v-else :src="getAssetsImg(item.active_img)" alt="">
                    <span class="text" >{{ item.text }}</span>
            </div>
        </template> -->
        <van-tabbar v-model="curIndex" active-color="#ff9854" route>
            <template v-for="(item,index) in tabBarData" :key="item">
                <van-tabbar-item :to="item.path">
                    <template #icon>
                        <img v-if="curIndex!==index" :src="getAssetsImg(item.img_url)" alt="">
                        <img v-else :src="getAssetsImg(item.active_img)" alt="">
                        <span class="text" >{{ item.text }}</span>
                    </template>
                </van-tabbar-item>
           
            </template>
        </van-tabbar>
    </div>
</template>


<style lang="less" scoped>
    .tabBar{
            img{
                line-height: 20px;
            }
            .text{
                font-size: 16px;
            }
        }

</style>