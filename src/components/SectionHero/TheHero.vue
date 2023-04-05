<script setup lang="ts">
import TheButtonHero from './TheButtonHero.vue';
import TheLeftCol from './TheLeftCol.vue';
import ThePlayIcon from './ThePlayIcon.vue';
import TheRightCol from './TheRightCol.vue';

</script>

<template>
    <section class="min-h-screen pt-[160px] overflow-hidden relative">
        <div class="container">
            <h1 class="font-['Rollbox'] font-extrabold uppercase text-[80px] text-center leading-tight">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent block">DECENTRALIZED</span>
                SOCIAL PLATFORM
            </h1>
            <div class="platform flex justify-between items-center px-6 [perspective: 800px]">
                <ThePlayIcon class="absolute top-[40%] left-[50%] -translate-x-[50%] " />
                <TheLeftCol />
                <TheRightCol />
                <TheButtonHero />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .platform {
        width: 95%;
        position: relative;
        aspect-ratio: 1.1975 / 1;
        margin-left: auto;
        margin-right: auto;
        margin-top: -7%;
        background-image: url('/platform-min.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        mix-blend-mode: lighten;
    }
</style>
