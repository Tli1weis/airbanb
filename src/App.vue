<script setup>
import TabBar from '@/components/TabBar/index.vue'
import { useRoute } from 'vue-router';

const route=useRoute()
</script>

<template >
    <div class="app">
        
        <RouterView></RouterView>
        <TabBar v-if="!route.meta.hiddenNavBar"/>
    </div>
</template>

<style scoped>


</style>
