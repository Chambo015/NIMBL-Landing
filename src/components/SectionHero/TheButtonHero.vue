<script setup lang="ts">
import { ref } from 'vue';
import imgSteel from '@/assets/steel-big.jpg'
const targetEl = ref(null)
defineExpose({
    targetEl
})
</script>

<template>
    <button ref="targetEl"
        class="sm:w-[37%] w-[50%] bg-btn-steel-hero flex justify-center items-center absolute backdrop-blur-3xl sm:bottom-[6%] bottom-[2%] left-[25%] sm:left-[31.8%] border-white/10 border-t rounded-lg p-3 overflow-hidden isolate">
        <div class="absolute -inset-2 mix-blend-overlay z-50 opacity-100 bg-[auto_100%] bg-no-repeat" :style="{backgroundImage: `url(${imgSteel})`}"></div>
        <div class="absolute md:border-[7px] border-4 border-[#CA12F6] rounded-md blur-sm z-20 sm:inset-x-3 inset-x-2 top-2 bottom-5 border_blur duration-200"></div>
        <span class="font-['Rollbox'] absolute font-extrabold uppercase 2xl:text-2xl xl:text-lg lg:text-2xl md:text-lg sm:text-base text-sm z-50">open V0.04 - prototype</span>
    </button>
</template>

<style scoped lang="scss">
button {
    will-change: transform;
    transform: perspective(400px) rotateX(8deg); /* Поворачиваем относительно оси X */
    transform-origin: 50% 80%;
    box-shadow: inset 0px -12px 2px 0px rgb(17 17 28 / 70%), -1px 9px 6px 2px rgba(0, 0, 0, 0.5), 8px 7px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s linear;
    outline: none;
    @media (max-width: 640px) {
        box-shadow: inset 0px -8px 2px 0px rgb(17 17 28 / 70%), -1px 9px 6px 2px rgba(0, 0, 0, 0.5), 8px 7px 5px 0px rgba(0, 0, 0, 0.1);
    }
    &::before {
        content: '';
        display: block;
        inset: 0;
        width: 100%;
        transition: padding-top 0.2s linear;
        padding-top: calc(100% / 5.4);
    }
    &:active {
        box-shadow: inset 0px -2px 1px 0px rgb(17 17 28 / 59%), 1px 1px 20px 0px rgba(0, 0, 0, 0.5),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        transform: perspective(400px) rotateX(8deg) translateY(3px);
        &::before {
            padding-top: calc(100% / 6);
        }
        span {
            text-shadow: 0px 1px 3px rgba(255, 255, 255, 0.75);
        }
        .border_blur {
            bottom: 0.5rem;
            left: 0.5rem;
            right: 0.5rem;
        }
    }
}
span {
    transition: all 0.2s ease-in-out;
    text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.75);
    letter-spacing: 0.025em;
}
</style>
