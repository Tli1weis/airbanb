<script setup>
import TabBar from '@/components/TabBar/index.vue'
import Loading from '@/components/Loading/index.vue'
import { useRoute } from 'vue-router';

const route=useRoute()
</script>

<template >
    <div class="app">
        <RouterView  v-slot="props">
            <keep-alive includes="home">
                <component :is="props.Component"></component>
            </keep-alive>
        </RouterView>
        <TabBar v-show="!route.meta.hiddenNavBar"/>
        <Loading/>
    </div>
</template>

<style scoped>


</style>
