
<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
import { onMounted, ref } from 'vue';
   const props=defineProps({
    positionInfo:{
        type:Object,
        default:()=>({})
    }
   })

   const mapRef=ref()
   onMounted(()=>{
        const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
        const point = new BMapGL.Point(props.positionInfo.longitude,props.positionInfo.latitude);  // 创建点坐标 
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
        const marker = new BMapGL.Marker(point);        // 创建标注   
        map.addOverlay(marker);                     // 将标注添加到地图中
   })
</script>

<template>
    <div class="home">
      <DetailSection title="位置周边" check="查看更多周边信息">
        <div class="baidu" ref="mapRef"></div>
      </DetailSection>
    </div>
</template>


<style lang="less" scoped>
   .home{
    .baidu{
        height: 250px;   
    }
   }
</style>