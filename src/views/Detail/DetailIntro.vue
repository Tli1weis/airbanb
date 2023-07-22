
<script setup>
   defineProps({
        priceIntro:{
            type:Object,
            default:()=>({})
        }
   })
</script>

<template>
    <div class="priceIntro">
        <h4 class="title">{{ priceIntro.title }}</h4>
        <div class="desc">{{ priceIntro.introduction}}</div>
    </div>
</template>


<style lang="less" scoped>
    .priceIntro{
        padding: 0 10px;
        .desc{
            padding: 15px 0;
        }
    }
</style>