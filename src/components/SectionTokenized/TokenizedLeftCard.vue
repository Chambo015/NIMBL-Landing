<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 530
    }
})

const ratio = (530 / 291)
const height = computed(() => props.width / ratio)

const idClipPath = crypto.randomUUID()
</script>

<template>
    <div
        class=" flex items-center justify-center relative bg-white/5 backdrop-blur-3xl isolate" :style="{width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})`}">
        <slot />
        <svg
            width="530"
            height="291"
            viewBox="0 0 530 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none"
            :style="{width: width + 'px', height: height + 'px'}">
            <path
                d="M10 0.5H118.199C120.633 0.5 122.973 1.4339 124.739 3.1091L131.169 9.21209C133.12 11.0636 135.708 12.0958 138.397 12.0958H480.123C484.834 12.0958 488.833 15.5481 489.521 20.2085L527.814 279.613C528.661 285.35 524.214 290.5 518.415 290.5H370.416C368.062 290.5 365.792 289.626 364.046 288.048L357.538 282.167C355.608 280.422 353.099 279.456 350.498 279.456H10C4.75329 279.456 0.5 275.203 0.5 269.956V10C0.5 4.7533 4.7533 0.5 10 0.5Z"
                stroke="url(#paint0_linear_729_5198)"
                stroke-opacity="0.56" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 16.8672 10)"
                stroke="#9B1CBF"
                stroke-opacity="0.3" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 30.8984 10)"
                stroke="#3672FE"
                stroke-opacity="0.6" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 44.9375 10)"
                stroke="#03E7F3"
                stroke-opacity="0.9" />
            <defs>
                <linearGradient
                    id="paint0_linear_729_5198"
                    x1="466.963"
                    y1="9.16503e-05"
                    x2="16.6548"
                    y2="288.084"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B8B8B8" />
                    <stop offset="0.567708" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#A6A6A6" />
                </linearGradient>
            </defs>
        </svg>

        <!-- ClipPath svg -->
        <svg width="0" height="0" viewBox="0 0 530 291">
            <clipPath :id="idClipPath" clipPathUnits="objectBoundingBox">
                <path
                    d="M0.224,0 H0.019 C0.008,0,0,0.015,0,0.034 V0.928 C0,0.947,0.008,0.962,0.019,0.962 H0.663 C0.668,0.962,0.673,0.965,0.676,0.971 L0.688,0.991 C0.692,0.997,0.696,1,0.701,1 H0.981 C0.993,1,1,0.981,1,0.961 L0.927,0.069 C0.926,0.052,0.918,0.04,0.909,0.04 H0.262 C0.257,0.04,0.252,0.036,0.249,0.03 L0.237,0.009 C0.233,0.003,0.229,0,0.224,0" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
