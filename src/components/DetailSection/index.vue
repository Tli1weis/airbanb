
<script setup>
  defineProps({
        title:{
            type:String,
            default:'默认标题'
        },
        check:{
            type:String,
            default:'查看全部设施'
        }
   })
</script>

<template>
    <div class="section">
        <div class="header">
            <h2>{{ title }}</h2>
        </div>
        <div class="content">
            <slot>
              我是默认内容
            </slot>
        </div>
        <div class="footer" v-if="check">
            {{ check }}
            <van-icon name="arrow" />
        </div>
    </div>
</template>


<style lang="less" scoped>
    .section{
        padding: 0 15px;
        .header{
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            border-bottom: 2px solid #f3f4f5;
        }
        .content{
            margin-top: 10px;
           
           
        }
        .footer{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 20px;
            color: #ffa46a;
            font-weight: 700;
        }
    }
</style>