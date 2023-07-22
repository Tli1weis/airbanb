
<script setup>
   defineProps({
    topInfos:{
        type:Object,
        default:()=>({})
    }
   })
</script>

<template>
    <div class="infos">
        <div class="houseName">{{ topInfos.houseName }}</div>
        <div class="tags">
            <template v-for="(item,index) in topInfos.houseTags" :key="index">
                 <span class="item" v-if="item.tagText" :style="{color:item.tagText.color,background:item.tagText.background.color}">{{ item.tagText.text }}</span>
            </template>
           <div class="comment">
                 <div class="left">
                    <span class="overall">{{ topInfos.commentBrief.overall }}</span>
                    <span class="title">{{topInfos.commentBrief.scoreTitle }}</span>
                    <span class="brief">"{{ topInfos.commentBrief.commentBrief }}"</span>
                 </div> 
                <div class="count">
                        <div class="totalCount">{{ topInfos.commentBrief.totalCount }}条评论</div>
                        <van-icon name="arrow" />
                </div>
            </div>
            <div class="position comment">
                <div class="address">{{ topInfos.nearByPosition.address }}</div>
                <div class="around">
                    地图·周边
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
    .infos{
        padding: 20px 0px;
        .houseName{
            font-size: 20px;
            font-weight: 700;
            padding: 0 26px 0  15px;
        }
        .tags{
            font-size: 12px;
            padding: 12px;
            .item{
                padding: 2px;
                margin:0 3px;
            }
        }
        .comment{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding: 10px;
            border-radius: 5px;
            background-color: #f5f7fb;
           
           .left{
                .overall{
                    font-weight: 700;
                    font-size: 16px;
                }
                .brief{
                    color: #aaa;
                }
                .title{
                    font-weight: 700;
                    padding: 0 5px;
                }
           }
            .count{
                display: flex;
                align-items: center;
                font-weight: 700;
                color:#F7D294;
            }
        }
        .position{
            display: flex;
            justify-content: space-between;
            .address{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                font-size: 13px;
                font-weight: 700;
            }
            .around{
                
                color:#F7D294;
            }
        }
    }
</style>