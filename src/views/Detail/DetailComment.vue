
<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
import { ref } from 'vue';

const props=defineProps({
    commentInfos:{
        type:Object,
        default:()=>({})
    }
})

const starVal=ref(props.commentInfos.overall)
</script>

<template>
    <div class="comment">
        <DetailSection title="房客点评" :check="`查看全部${commentInfos.totalCount}条评价`">
            <div class="head">
                <div class="allRate">{{ commentInfos.overall }} </div>
                <div class="goodStar">
                    <div class="scoreTitle">{{ commentInfos.scoreTitle }}</div>
                    <div class="totalCount">{{ commentInfos.totalCount }}条评论</div>
                    <van-rate v-model="starVal" readonly allow-half :size="12"/>
                </div>
                <div class="scores">
                    <template v-for="(item,index) in commentInfos.subScores" :key="index">
                        <div class="score-item">{{ item }}</div>
                    </template>
                    
                </div>
            </div>
            <div class="tags">
                <template v-for="(item,index) in commentInfos.commentTagVo">
                    <div class="tag" :style="{color:item.color,backgroundColor:item.backgroundColor}">{{ item.text }}</div>
                </template>
            </div>
            <div class="comment-area">
                <div class="profile">
                    <div class="avatar">
                        <img :src="commentInfos.comment.userAvatars" alt="">
                    </div>
                    <div class="info">
                        <div class="name">{{commentInfos.comment.userName  }}</div>
                        <div class="checkInDate">{{ commentInfos.comment.checkInDate }}</div>
                    </div>
                </div>
               
               <div class="commentContent">{{ commentInfos.comment.commentDetail }}</div>
            </div>
        </DetailSection>
    </div>
</template>


<style lang="less" scoped>
    .comment{
        .head{
            display: flex;
            align-items: center;
            .allRate{
                font-size: 42px;
                font-weight: 700;
                border-bottom: 5px solid #fba334;
                border-radius:20px;
            }
            .goodStar{
                padding:0 10px;
                margin-top: 5px;
                .scoreTitle{
                    font-size: 13px;
                    font-weight: 700;
                }
                .totalCount{
                    padding-top: 5px;
                    color: #aaa;
                }
            }
            .scores{
                display: flex;
                justify-content: end;
                flex: 1;
                flex-wrap: wrap;
                .score-item{
                    padding-right: 5px;
                }
            }
        }
        .tags{
            display: flex;
            flex-wrap: wrap;
            .tag{
                padding: 3px;
                margin: 3px;
                border-radius: 9px;
            }
        }
        .comment-area{
            margin: 10px 0;
            padding: 10px ;
            border-radius: 5px;
            background-color: #f7f9fb;
            .profile{
                display: flex;   
                .avatar{               
                    img{
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;     
                    }
                }
                .info{    
                    padding-left: 8px;
                    .name{
                        font-size: 14px;
                        font-weight: 700;
                    }
                    .checkInDate{
                        color: #aaa;
                    }
                }
            }
            .commentContent{
                padding-top: 15px;
                font-size: 13px;
            }
        }
    }
</style>