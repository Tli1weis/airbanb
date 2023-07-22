
<script setup>
   import DetailSection from '@/components/DetailSection/index.vue'

   defineProps({
    facilityData:{
        type:Object,
        default:()=>({})
    }
   })

</script>

<template>
    <div class="facility">
        <DetailSection title="房屋设施" check="查看全部设施">
           <div class="wrapper">
                <template v-for="(item,index) in facilityData.houseFacilitys" :key="index">
                        <div class="item" v-if="facilityData.facilitySort.includes(index)">
                            <div class="head">
                                <img :src="item.icon" alt="">
                                <div class="text">{{ item.groupName }}</div>
                            </div>
                            <div class="list">
                                <template v-for="(facility,index) in item.facilitys.slice(0,4)" :key="index">
                                    <div class="facility-item">
                                        <i class="icon icon_check"></i>
                                        <span class="text">{{ facility.name }}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                </template>
           </div>
        </DetailSection>
    </div>
</template>


<style lang="less" scoped>
    .facility{
        
        .wrapper{
            padding: 20px 0px 20px 10px;
            border-radius: 5px;
            background-color: #f7f9fb;
            .item{
                display: flex;
                align-items: center;
                height: 70px;
                .head{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    
                    font-size: 13px;
                    img{
                        width: 24px;
                        height: 24px;
                        
                    }
                    .text{
                        margin-top: 3px;
                    }
                }
                .list{
                    display: flex;
                    flex: 1;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    line-height: 25px;
                    width: 200px;
                    
                    .facility-item{
                        display: flex;
                        align-items: center;
                        width: 110px;
                        font-size: 12px;
                       
                       .text{
                        padding-left: 5px;
                       }
                      
                    }
                }
            }
        }
    }
</style>