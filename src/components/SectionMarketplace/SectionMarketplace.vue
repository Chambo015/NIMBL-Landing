<template>
    <section class="min-h-screen relative py-[calc(theme(spacing.index)*4)] overflow-x-hidden">
        <div class="container">
            <div class="bg-[url('/marketplace-platform.png')] isolate z-10 relative w-[90%] 2xl:w-[100%] mx-auto before:block before:pt-[calc(100%/1.81)] bg-no-repeat bg-[length:100%_auto] platform_bg">
                <h2 class="absolute bottom-0 translate-y-3/4 text-center font-['Rollbox'] text-8xl container font-extrabold bg-hero-text-gradient bg-clip-text text-transparent">MARKETPLACE</h2>
            </div>
            <p class="text-center text-2xl text-white/80 mt-32">NFT marketplace for trading:</p>
            <div class="mt-[73px]">
                <div class="flex items-center justify-between">
                    <BlurWindowLeft></BlurWindowLeft>
                    <BlurWindowCenter ></BlurWindowCenter>
                    <BlurWindowRight ></BlurWindowRight>
                </div>
                <div class="flex items-center justify-between mt-16">
                    <BlurWindowLeft></BlurWindowLeft>
                    <BlurWindowCenter ></BlurWindowCenter>
                    <BlurWindowRight ></BlurWindowRight>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BlurWindowLeft from './BlurWindowLeft.vue';
import BlurWindowCenter from './BlurWindowCenter.vue';
import BlurWindowRight from './BlurWindowRight.vue';


</script>

<style scoped lang="scss">

.platform_bg {
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 20%);
        width: 60%;
        height: 60%;
        filter: blur(90px);
        background: radial-gradient(circle at 90% 10%, rgb(93 22 185 / 50%) , rgb(16 0 255 / 6%) 70.71%), radial-gradient(circle at 10% 90%, rgb(213 33 76 / 50%) , rgba(255, 0, 0, 0) 70.71%);
    }
}

</style>