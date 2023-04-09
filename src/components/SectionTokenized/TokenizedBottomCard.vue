<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        default: 930
    }
})

const ratio = 930 / 428
const height = computed(() => props.width / ratio)
const idClipPath = crypto.randomUUID()
// class="absolute inset-0 pointer-events-none"
</script>

<template>
    <div
        class="relative isolate flex items-center justify-center bg-white/5"
        :style="{ width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg
            width="930"
            height="428"
            viewBox="0 0 930 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="pointer-events-none absolute inset-0"
            :style="{ width: width + 'px', height: height + 'px' }">
            <path d="" fill="white" fill-opacity="0.05" />
            <path
                d="M31.1804 425.602H899.007C916.995 425.602 930.758 409.582 928.047 391.8L872.416 26.9314C870.228 12.5836 857.89 1.98395 843.376 1.98395H638.087C630.376 1.98395 622.981 5.04382 617.524 10.4918C611.488 16.5185 603.307 19.9035 594.777 19.9035H337.466C328.936 19.9035 320.755 16.5185 314.719 10.4918C309.263 5.04382 301.867 1.98395 294.157 1.98395H88.7294C74.2729 1.98395 61.9654 12.5024 59.7131 26.7823L2.16405 391.651C-0.647887 409.479 13.1319 425.602 31.1804 425.602Z"
                stroke="url(#paint0_linear_805_5393)"
                stroke-opacity="0.56"
                stroke-width="3.09211" />
            <defs>
                <linearGradient
                    id="paint0_linear_805_5393"
                    x1="823.199"
                    y1="427.148"
                    x2="119.188"
                    y2="-117.606"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B8B8B8" />
                    <stop offset="0.567708" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#A6A6A6" />
                </linearGradient>
            </defs>
        </svg>
        <!-- ClipPath svg -->
        <svg width="0" height="0">
            <clipPath :id="idClipPath" clipPathUnits="objectBoundingBox">
                <path
                    d="M0.034,1 H0.967 C0.987,1,1,0.962,1,0.918 L0.94,0.063 C0.938,0.027,0.924,0.001,0.907,0.001 H0.686 C0.678,0.001,0.669,0.009,0.663,0.022 C0.657,0.035,0.648,0.043,0.64,0.043 H0.363 C0.354,0.043,0.346,0.035,0.34,0.022 C0.334,0.009,0.325,0.001,0.316,0.001 H0.095 C0.079,0.001,0.065,0.027,0.063,0.062 L0.001,0.917 C-0.002,0.961,0.013,1,0.034,1" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
