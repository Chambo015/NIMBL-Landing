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
        class="w-[530px] h-[291px] flex items-center justify-center relative bg-white/5 isolate"
        :style="{width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }">
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
                d="M520 0.5H411.801C409.367 0.5 407.027 1.4339 405.261 3.1091L398.831 9.21209C396.88 11.0636 394.292 12.0958 391.603 12.0958H49.8773C45.1664 12.0958 41.1671 15.5481 40.4791 20.2085L2.1864 279.613C1.33948 285.35 5.78552 290.5 11.5845 290.5H159.584C161.938 290.5 164.208 289.626 165.954 288.048L172.462 282.167C174.392 280.422 176.901 279.456 179.502 279.456H520C525.247 279.456 529.5 275.203 529.5 269.956V10C529.5 4.7533 525.247 0.5 520 0.5Z"
                stroke="url(#paint0_linear_729_5199)"
                stroke-opacity="0.56" />
            <circle cx="516.504" cy="13.4342" r="2.93416" stroke="#9B1CBF" stroke-opacity="0.3" />
            <circle cx="502.473" cy="13.4342" r="2.93416" stroke="#3672FE" stroke-opacity="0.6" />
            <circle cx="488.434" cy="13.4342" r="2.93416" stroke="#03E7F3" stroke-opacity="0.9" />
            <defs>
                <linearGradient
                    id="paint0_linear_729_5199"
                    x1="63.0367"
                    y1="9.16503e-05"
                    x2="513.345"
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
                d="M0.779,0 H0.984 C0.995,0,1,0.015,1,0.034 V0.928 C1,0.947,0.995,0.962,0.984,0.962 H0.34 C0.335,0.962,0.33,0.965,0.327,0.971 L0.315,0.991 C0.311,0.997,0.307,1,0.302,1 H0.022 C0.01,1,0.002,0.981,0.003,0.961 L0.076,0.069 C0.077,0.052,0.085,0.04,0.094,0.04 H0.741 C0.746,0.04,0.751,0.036,0.754,0.03 L0.766,0.009 C0.77,0.003,0.774,0,0.779,0" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
