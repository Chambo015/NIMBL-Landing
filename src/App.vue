<script setup lang="ts">

import SectionAI from './components/SectionAI.vue';
import SectionCommunities from './components/SectionCommunities.vue';
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/SectionHero/TheHero.vue';
import TheTokenized  from './components/SectionTokenized/TheTokenized.vue';
import TheInfiniteTicker from './components/TheInfiniteTicker.vue';
import TheFooter from './components/TheFooter.vue';
import { onMounted, defineAsyncComponent } from 'vue';
import { useMediaQuery } from '@vueuse/core';

// @ts-ignore
import Luxy from 'luxy.js'

const  TheCarousel =  defineAsyncComponent(() =>
  import('./components/SectionCarousel/TheCarousel.vue')
);

onMounted(() => {
    Luxy.init()
})

const isLargerXL = useMediaQuery('(min-width: 1280px)')
</script>

<template>
<TheHeader />
    <main id="luxy" class="bg-[#111111]">
            <TheHero />
            <TheInfiniteTicker bg-color="#202020" text="video • blockchain • nft • ai • web3 • stream • community • challenges • education •"/>
            <TheCarousel v-if="!isLargerXL" /> 
            <TheTokenized />
            <SectionCommunities />
            <SectionAI />
        <TheFooter />
    </main>
</template>

<style scoped>
</style>
