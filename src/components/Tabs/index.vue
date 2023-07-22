
<script setup>
import { ref } from 'vue';
import { defineEmits,defineProps,defineExpose} from 'vue';

   defineProps({
    titles:{
        type:Array,
        default:()=>[]
    }
   })

   const emit=defineEmits(['tabItemClick'])
   const curIndex=ref(0)
   const tabsChange=(index)=>{
        curIndex.value=index
        emit('tabItemClick',index)
        console.log('ww');
   }

   const setCurIndex=(index)=>{
    curIndex.value=index
   }
   defineExpose({
    setCurIndex,
   })
   
</script>

<template>
    <div class="tabs">
       <template v-for="(item,index) in titles">
            <div class="item" :class="{active:index===curIndex}" @click="tabsChange(index)">{{ item }}</div>
       </template>
    </div>
</template>


<style lang="less" scoped>
    .tabs{
       
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        height: 40px;
        .item{
            display: flex;
            
            &.active{
                color: var(--primary-color);
                border-bottom: 3px solid var(--primary-color);
            }
        }
    }
</style>