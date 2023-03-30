<script setup lang="ts">

</script>

<template>
    <section class="overflow-hidden min-h-screen relative flex items-end pt-40">
        <div class="container">
            <div class=" isolate z-10 relative w-[90%] 2xl:w-[100%] mx-auto before:block before:pt-[calc(100%/1.78)] monitor_screen">
                <div class="bg-[url('/monitor.png')] absolute inset-0 w-full h-full bg-no-repeat bg-[length:100%_auto] "></div>
            </div>
            <div class="bg-[url('/podium.png')] w-[90%] 2xl:w-[100%] mx-auto before:block before:pt-[calc(100%/9.72)] mix-blend-screen bg-no-repeat bg-[length:100%_auto] -mt-1"></div>
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
</style>