
<script setup>
import DetailSection from '@/components/DetailSection/index.vue'

defineProps({
    landLordInfos:{
        type:Object,
        default:()=>({})
    }
})

</script>

<template>
    <div class="landlord">
        <DetailSection title="房东介绍" check="查看房东主页">
            <div class="head">
                <img :src="landLordInfos.topScroll" alt="">
                <div class="landlord-assets">
                    <div class="infos">
                        <div class="logo">
                             <img :src="landLordInfos.hotelLogo" alt="">
                        </div>
                    <div class="profile">
                        <div class="name">{{ landLordInfos.hotelName }}</div>
                        <div class="tags">
                            <template v-for="(item,index) in  landLordInfos.hotelTags " :key="index">
                                <span class="tag" :style="{color:item.tagText.color}">{{item.tagText.text}}</span>
                            </template>
                        </div>
                    </div>
                    </div>
                    <div class="chat">
                        <span>联系房东</span>
                    </div>
                </div>
            </div>
            <div class="content">          
                    <template v-for="(item,index) in landLordInfos.hotelSummary" :key="index">
                        <div class="item">
                            <div class="good">{{ item.title }}</div>
                            <div class="percent">{{ item.introduction }}</div>
                            <div class="tip">{{ item.tip }}</div>
                        </div>
                    </template>
            </div>
        </DetailSection>
    </div>
</template>


<style lang="less" scoped>
.landlord{
    .head{
        
        width: 100%;
        
        img{
            width: 100%;
            border-radius: 5px;
            padding-right: 5px;
        }
        .landlord-assets{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 10px;
           .infos{
            display: flex;
            .logo{
                img{
                    width: 64px;
                    height: 64px;
                }
            }
            .profile{
                margin-top: 10px;
                .name{
                    font-weight: 700;
                    font-size: 16px;
                }
                .tags{
                    display: flex;
                    align-items: center;
                    margin: 5px 0;
                    margin-left: -5px;
                    .tag{
                        font-size: 13px;
                        padding:0 5px;
                        border-right: 1px solid #9B9B9B;
                        &:last-child{
                            border-right: none;
                        }
                    }
                }
            }
           }
            .chat{
                padding: 5px 10px;
                border-radius: 5px;
                color: #fff;
                background-image:var(--theme-gradient);
            }
        }
    }
    .content{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px 0 20px;
        .item{
           .good{
            font-size: 13px;
            color: #888;
           }
           .percent{
                font-weight: 700;
                font-size: 18px;
                padding: 5px 0;
           }
           .tip{
            color: #333;
           }
        }
    }
}
</style>