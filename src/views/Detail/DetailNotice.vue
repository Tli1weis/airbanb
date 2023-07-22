
<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
defineProps({
    noticeInfo:{
        type:Array,
        default:()=>[]
    }
})
</script>

<template>
    <div class="notice">
        <DetailSection title="预订须知" check="">
                    <template v-for="(item,index) in noticeInfo" :key="index">
                            <div class="content">
                                <div class="title">{{ item.title }}</div>
                                <div class="announcement">   
                                    <div class="desc" :class="{special:index===2}">{{ item.introduction }}</div>
                                    <div class="introduction" v-if="index===1">查看说明</div>
                                </div>
                              
                            </div>
                    </template>
        </DetailSection>
    </div>
</template>


<style lang="less" scoped>
    .notice{
            .content{ 
                display: flex;
                // justify-content: space-between;
                align-items: center;
                line-height: 40px;
                .title{
                    color: #676567;
                    margin-right: 20px;
                    }
                .announcement{
                    display: flex;
                    justify-content: space-between;
                    .desc{
                        font-size: 12px;
                        width: 236.5px;
                    }
                    .special{
                        padding-left: 15px;
                    }
                    .introduction{
                        font-weight: 700;
                        font-size: 12px;
                    }
                }  
            } 
    }
</style>