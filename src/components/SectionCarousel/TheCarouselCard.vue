<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        default: 725
    }
})

const ratio = 725 / 335
const height = computed(() => props.width / ratio)
const idClipPath = crypto.randomUUID()
</script>

<template>
    <div
        class="relative isolate flex ] items-center justify-center bg-[rgb(255_255_255/0.05)] backdrop-blur-3xl"
        :style="{ width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg
            width="725"
            height="335"
            viewBox="0 0 725 335"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none"
            :style="{ width: width + 'px', height: height + 'px' }">
            <path
                d="M29.2152 1.6817H696.189C712.934 1.6817 725.747 16.5924 723.229 33.1465L681.177 309.533C679.144 322.896 667.654 332.77 654.137 332.77H497.808C491.842 332.77 486.121 330.399 481.903 326.179C477.146 321.419 470.692 318.745 463.962 318.745H263.02C256.29 318.745 249.836 321.419 245.079 326.179C240.861 330.399 235.14 332.77 229.174 332.77H72.7169C59.2533 332.77 47.7921 322.971 45.6988 309.671L2.19705 33.285C-0.415202 16.6881 12.414 1.6817 29.2152 1.6817Z"
                stroke="url(#paint0_linear_774_6255)"
                stroke-opacity="0.56"
                stroke-width="2.87903" />
            <defs>
                <linearGradient
                    id="paint0_linear_774_6255"
                    x1="642.373"
                    y1="0.242293"
                    x2="91.6665"
                    y2="425.477"
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
                    d="M0.04,0.001 H0.961 C0.985,0.001,1,0.048,1,0.1 L0.942,0.927 C0.939,0.97,0.922,1,0.903,1 H0.687 C0.678,1,0.67,0.993,0.664,0.98 C0.657,0.966,0.649,0.959,0.64,0.959 H0.363 C0.354,0.959,0.346,0.966,0.34,0.98 C0.333,0.993,0.325,1,0.316,1 H0.1 C0.081,1,0.064,0.97,0.061,0.928 L0.001,0.1 C-0.003,0.048,0.016,0.001,0.04,0.001"></path>
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
