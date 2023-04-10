<script setup lang="ts">
import TheButtonHero from './TheButtonHero.vue';
import TheLeftCol from './TheLeftCol.vue';
// import ThePlayIcon from './ThePlayIcon.vue';
import TheRightCol from './TheRightCol.vue';



</script>

<template>
    <section class="sm:min-h-screen md:pt-[160px] pt-[110px] overflow-hidden relative">
        <div class="container ">
            <h1 class="font-['Rollbox'] relative z-50 w-[102%] sm:w-full font-extrabold uppercase 2xl:text-[80px] lg:text-7xl md:text-5xl sm:text-[42px] text-3xl text-center leading-tight">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent block">DECENTRALIZED</span>
                SOCIAL PLATFORM
            </h1>
            <div class="platform xl:left-0 left-[50%] xl:translate-x-0 -translate-x-1/2 xl:w-[95%] w-[170%] flex justify-between items-center xl:px-6 bg-[length:100%] [perspective: 800px] lg:aspect-[1.1975/1] md:aspect-[1.2/1] aspect-[1.18/1]">
                <!-- <ThePlayIcon class="absolute top-[40%] left-[50%] -translate-x-[50%] " /> -->
                <TheLeftCol class="hidden xl:block" />
                <TheRightCol class="hidden xl:block" />
                <TheButtonHero />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .platform {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: -7%;
        background-image: url('/platform-min.jpg');
        background-position: center;
        background-repeat: no-repeat;
        mix-blend-mode: lighten;
    }
</style>
