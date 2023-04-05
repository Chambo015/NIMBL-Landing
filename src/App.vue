<script setup lang="ts">
import SectionAI from './components/SectionAI.vue';
import SectionCommunities from './components/SectionCommunities.vue';
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/SectionHero/TheHero.vue';
import TheTokenized  from './components/SectionTokenized/TheTokenized.vue';
import TheInfiniteTicker from './components/TheInfiniteTicker.vue';
import TheFooter from './components/TheFooter.vue';

</script>

<template>
    <TheHeader />
    <TheHero />
    <TheInfiniteTicker bg-color="#202020" text="video • blockchain • nft • ai • web3 • stream • community • challenges • education •"/>
    <TheTokenized />
    <SectionCommunities />
    <SectionAI />
    <TheFooter />
</template>

<style scoped>
</style>
