<script setup lang="ts">
import SectionAIUseCase from './components/SectionAIUseCase.vue';
import SectionAboutCollection from './components/SectionAboutCollection.vue';
import SectionCommunities from './components/SectionCommunities.vue';
import SectionHeader from './components/SectionHeader.vue';
import SectionHero from './components/SectionHero.vue';
import { SectionMarketplace } from './components/SectionMarketplace';
import SectionNFTCollection from './components/SectionNFTCollection.vue';
import { SectionNimblChannels } from './components/SectionNimblChannels';
import SectionPreviewPlatform from './components/SectionPreviewPlatform.vue';
import SectionUserData from './components/SectionUserData.vue';

</script>

<template>
    <SectionHeader />
    <SectionHero />
    <SectionPreviewPlatform />
    <SectionNFTCollection />
    <SectionAIUseCase />
    <SectionUserData />
    <SectionNimblChannels />
    <SectionCommunities />
    <SectionMarketplace />
</template>

<style scoped>
</style>
