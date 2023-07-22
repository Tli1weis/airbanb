
<script setup>
import DetailSwipe from './DetailSwipe.vue'
import DetailTopInfos from './DetailTopInfos.vue';
import DetailFacility from './DetailFacility.vue';
import DetailLandlord from './DetailLandlord.vue';
import DetailComment from './DetailComment.vue';
import DetailNotice from './DetailNotice.vue';
import DetailMap from './DetailMap.vue'
import DetailIntro from './DetailIntro.vue';
import Tabs from '@/components/Tabs/index.vue'
import { useRoute, useRouter } from 'vue-router';
import {getDetailInfo} from '@/services/modules/detail.js'
import { computed, onMounted, ref, watch } from 'vue';
import useScroll from '@/hooks/useScroll';
  const route=useRoute()
  const houseId=route.params.id
  const detailInfos=ref({})
  const mainPart=computed(()=>detailInfos.value.mainPart)
  getDetailInfo(houseId).then(res=>{
    detailInfos.value=res.data
  })

  const router=useRouter()
  const onClickLeft=()=>{
    router.back()
  }

const detailRef=ref()
  const {scrollTop}=useScroll(detailRef)

  const isShowTab=computed(()=>{
    return scrollTop.value>=300
  })

  const Els=ref({})
  const names=computed(()=>{
    const name=Object.keys(Els.value)
    return name
  })
  console.log(names);
  const getElRef=(value)=>{
    if(!value)return
    const name=value.$el.getAttribute('name')
    Els.value[name]=value.$el
  }
 
  let isClick=false
  let currentOffsetTop=-1
  const tabItemClick=(index)=>{
    const key=Object.keys(Els.value)[index]
    const el=Els.value[key]
    let offsetTop=el.offsetTop
    if (index!==0)offsetTop=offsetTop-44
    isClick=true
    currentOffsetTop=offsetTop
    detailRef.value.scrollTo({
      top:offsetTop,
      behavior:'smooth'
    })
  }


  const tabNavRef=ref()
  watch(scrollTop,(newVal)=>{
    if(currentOffsetTop===newVal){
      isClick=false
    }
    if(isClick)return
      const el=Object.values(Els.value)
      const values= el.map(item=>item.offsetTop)
      let index=el.length-1;
      for (let i = 0; i < values.length; i++) {
          if (values[i]>newVal+44) {
            index=i-1
            break
          }
      }
      // tabNavRef.value?.setCurIndex(index)
      // console.log(tabNavRef.value);
      tabNavRef?.value?.setCurIndex(index);
  })
</script>

<template>
    <div class="detail"  ref="detailRef"  >
        <Tabs class="tabs" :titles="names" v-if="isShowTab"  @tabItemClick="tabItemClick"  ref="tabNavRef"/>
        <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
       
        />
        <div class="detail-swipe" v-if="mainPart" v-memo="[mainPart]">
            <DetailSwipe :swipeData="mainPart.topModule.housePicture.housePics"/>
        </div>
        <div class="main" v-if="mainPart"  v-memo="[mainPart]">
          <DetailTopInfos name="描述" :ref="getElRef" :topInfos="mainPart.topModule"/>
          <DetailFacility name="设施" :ref="getElRef" :facilityData="mainPart.dynamicModule.facilityModule.houseFacility"/>
          <DetailLandlord name="房东" :ref="getElRef"  :landLordInfos="mainPart.dynamicModule.landlordModule"/>
          <DetailComment  name="评论" :ref="getElRef" :commentInfos="mainPart.dynamicModule.commentModule"/>
          <DetailNotice   name="须知" :ref="getElRef" :noticeInfo="mainPart.dynamicModule.rulesModule.orderRules"/>
          <DetailMap      name="周边" :ref="getElRef" :positionInfo="mainPart.dynamicModule.positionModule"/>
          <DetailIntro :priceIntro="mainPart.introductionModule"/>
        </div>
        <div class="footer">
          <img src="@/assets/img/detail/icon_ensure.png" alt="">
          <div class="text">宏源旅途，永无止境！</div>
        </div>
    </div>
</template>


<style lang="less" scoped>
    .detail{
      height: 100vh;
      overflow-y: auto;
        --van-font-bold:400;
        .tabs{
          position:fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
        }
        .footer{
          display: flex;
          flex-direction: column;
            justify-content: center;
            align-items: center;
          padding: 50px;
          img{
            width: 150px;
          }
          .text{
            padding-top: 10px;
          }
        }
    }
</style>