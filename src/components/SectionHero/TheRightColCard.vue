<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 420
    }
})

const ratio = (420 / 225)
const height = computed(() => props.width / ratio)

const idClipPath = crypto.randomUUID()
</script>

<template>
    <div
        class="w-[420px] h-[225px] flex items-center justify-center relative bg-[rgb(255_255_255/0.08)] backdrop-blur-3xl isolate"
        :style="{width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg width="420" height="225" viewBox="0 0 420 225" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 pointer-events-none" :style="{width: width  + 'px', height: height + 'px' }">
            <path
                d="M410 0.5H327.09C324.697 0.5 322.392 1.40331 320.636 3.02935L316.703 6.67025C314.763 8.46744 312.215 9.46585 309.57 9.46585H41.2857C36.5878 9.46585 32.5953 12.8997 31.8926 17.5447L2.23367 213.579C1.36407 219.326 5.8139 224.5 11.6268 224.5H125.734C128.048 224.5 130.282 223.656 132.018 222.125L136.031 218.586C137.949 216.894 140.419 215.961 142.976 215.961H410C415.247 215.961 419.5 211.708 419.5 206.461V10C419.5 4.7533 415.247 0.5 410 0.5Z"
                stroke="url(#paint0_linear_531_4354)"
                stroke-opacity="0.56" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 381.867 9)"
                stroke="#9B1CBF"
                stroke-opacity="0.3" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 395.902 9)"
                stroke="#3672FE"
                stroke-opacity="0.6" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 409.938 9)"
                stroke="#03E7F3"
                stroke-opacity="0.9" />
            <defs>
                <linearGradient
                    id="paint0_linear_531_4354"
                    x1="49.9536"
                    y1="7.08636e-05"
                    x2="401.651"
                    y2="230.602"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B8B8B8" />
                    <stop offset="0.567708" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#A6A6A6" />
                </linearGradient>
            </defs>
        </svg>

        <!-- ClipPath svg -->
        <svg width="0" height="0" viewBox="0 0 420 225">
            <clipPath :id="idClipPath" clipPathUnits="objectBoundingBox">
                <path
                    d="M0.78,0 H0.978 C0.991,0,1,0.02,1,0.044 V0.918 C1,0.942,0.991,0.962,0.978,0.962 H0.34 C0.334,0.962,0.328,0.966,0.324,0.973 L0.314,0.989 C0.31,0.996,0.304,1,0.299,1 H0.026 C0.011,1,0,0.976,0.002,0.949 L0.073,0.078 C0.075,0.056,0.085,0.04,0.097,0.04 H0.738 C0.744,0.04,0.75,0.036,0.754,0.028 L0.764,0.012 C0.768,0.004,0.774,0,0.78,0" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>

