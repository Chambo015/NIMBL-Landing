<script setup lang="ts">

</script>

<template>
    <section class="overflow-hidden min-h-screen relative flex items-end py-[calc(theme(spacing.index)*4.5)]">
        <div class="container monitor_container">
            <div class=" isolate z-10 relative w-[90%] 2xl:w-[100%] mx-auto before:block before:pt-[calc(100%/1.78)] monitor_screen">
                <div class="bg-[url('/monitor.png')] absolute inset-0 w-full h-full bg-no-repeat bg-[length:100%_auto] "></div>
            </div>
            <div class="bg-[url('/podium.png')] w-[90%] 2xl:w-[100%] mx-auto before:block before:pt-[calc(100%/9.72)] mix-blend-screen bg-no-repeat bg-[length:100%_auto] relative -mt-1"></div>
        </div>
    </section>
</template>



<style scoped lang="scss">
.monitor_screen {
    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 25%;
        background: conic-gradient(from 137.15deg at 53.38% 43.3%, #79D0E7 -34.56deg, #9F59D7 25.66deg, #79D0E7 325.44deg, #9F59D7 385.66deg);
        bottom: 19%;
        left: 50%;
        transform: translateX(-50%);
        filter: blur(300px);
        z-index: -1;
        border-radius: 50%;
    }
}
section {
    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 50%;
        left: 0;
        background: linear-gradient(0deg, rgb(17,17,17) 0%,rgb(17,17,17) 25%, rgba(17, 17, 17, .5) 57%, rgba(17, 17, 17, 0) 100%);
        z-index: 9999;
    }
}
</style>