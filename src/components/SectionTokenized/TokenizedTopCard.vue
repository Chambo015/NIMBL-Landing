<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        default: 930
    }
})

const ratio = 930 / 427
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
            height="427"
            viewBox="0 0 930 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="pointer-events-none absolute inset-0"
            :style="{ width: width + 'px', height: height + 'px' }">
            <path
                d="M31.1804 1.69449H899.007C916.995 1.69449 930.758 17.715 928.047 35.4971L872.416 400.365C870.228 414.713 857.89 425.313 843.376 425.313H638.087C630.376 425.313 622.981 422.253 617.524 416.805C611.488 410.778 603.307 407.393 594.777 407.393H337.466C328.936 407.393 320.755 410.778 314.719 416.805C309.263 422.253 301.867 425.313 294.157 425.313H88.7294C74.2729 425.313 61.9654 414.794 59.7131 400.515L2.16405 35.6461C-0.647887 17.8181 13.1319 1.69449 31.1804 1.69449Z"
                stroke="url(#paint0_linear_805_5392)"
                stroke-opacity="0.56"
                stroke-width="3.09211" />
            <defs>
                <linearGradient
                    id="paint0_linear_805_5392"
                    x1="823.199"
                    y1="0.148572"
                    x2="119.188"
                    y2="544.903"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B8B8B8" />
                    <stop offset="0.567708" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#A6A6A6" />
                </linearGradient>
            </defs>
        </svg>

        <!-- ClipPath svg -->
        <svg width="0" height="0" viewBox="0 0 682 314">
            <clipPath :id="idClipPath" clipPathUnits="objectBoundingBox">
                <path
                    d="M0.034,0 H0.967 C0.987,0,1,0.04,1,0.084 L0.94,0.939 C0.938,0.974,0.924,1,0.907,1 H0.686 C0.678,1,0.669,0.993,0.663,0.979 C0.657,0.966,0.648,0.958,0.64,0.958 H0.363 C0.354,0.958,0.346,0.966,0.34,0.979 C0.334,0.993,0.325,1,0.316,1 H0.095 C0.079,1,0.065,0.974,0.063,0.939 L0.001,0.084 C-0.002,0.04,0.013,0,0.034,0" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
