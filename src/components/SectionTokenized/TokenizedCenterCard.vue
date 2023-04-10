<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 614
    }
})

const ratio = (614 / 280)
const height = computed(() => props.width / ratio)
const idClipPath = crypto.randomUUID()

const targetEl = ref(null)
defineExpose({
    targetEl
})
</script>


<template>
    <div ref="targetEl"
        class="w-[614px] h-[280px] flex items-center justify-center relative bg-white/5 backdrop-blur-3xl isolate"
        :style="{width: width + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg width="614" height="280" viewBox="0 0 614 280" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 pointer-events-none"  :style="{width: width + 'px', height: height + 'px' }">

<path d="M10.6985 0.5H603.362C609.179 0.5 613.629 5.67984 612.754 11.4301L573.164 271.43C572.458 276.071 568.467 279.5 563.773 279.5H416.258C413.739 279.5 411.323 278.499 409.542 276.718L403.638 270.816C401.669 268.847 398.999 267.741 396.214 267.741H219.256C216.472 267.741 213.801 268.847 211.832 270.816L205.928 276.718C204.147 278.499 201.731 279.5 199.212 279.5H51.6531C46.9771 279.5 42.9964 276.097 42.2688 271.478L1.31419 11.4782C0.406082 5.71311 4.86232 0.5 10.6985 0.5Z" stroke="url(#paint0_linear_598_4482)" stroke-opacity="0.56"/>
<defs>
<linearGradient id="paint0_linear_598_4482" x1="541.735" y1="8.81858e-05" x2="79.9277" y2="356.87" gradientUnits="userSpaceOnUse">
<stop stop-color="#B8B8B8"/>
<stop offset="0.567708" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#A6A6A6"/>
</linearGradient>
</defs>
</svg>

        <!-- ClipPath svg -->
        <svg width="0" height="0" viewBox="0 0 614 280">
            <clipPath :id="idClipPath" clipPathUnits="objectBoundingBox">
                <path d="M0.017,0 H0.985 C0.995,0,1,0.019,1,0.041 L0.936,0.97 C0.935,0.987,0.928,1,0.92,1 H0.679 C0.675,1,0.671,0.996,0.668,0.99 L0.658,0.968 C0.655,0.962,0.651,0.958,0.647,0.958 H0.358 C0.354,0.958,0.349,0.962,0.346,0.968 L0.337,0.99 C0.334,0.996,0.329,1,0.325,1 H0.084 C0.076,1,0.069,0.987,0.068,0.97 L0.001,0.041 C0,0.02,0.007,0,0.017,0"/>
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>

