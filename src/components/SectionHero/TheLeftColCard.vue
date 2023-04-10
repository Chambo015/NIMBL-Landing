<script setup lang="ts">
import { gsap } from 'gsap';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: 420
    }
})

const ratio = (420 / 225)
const height = computed(() => props.width / ratio)
const idClipPath = crypto.randomUUID()

const targetEl = ref(null)

const animation = ref<any>(null)
onMounted(() => {
    animation.value = gsap.to(targetEl.value, {
        duration: 0.3,
  xPercent: 7
})
animation.value.reverse()
})
;

const mouseenter = () => {
    animation.value.play()
} 
const mouseleaveHandle = () => {
    gsap.delayedCall(0.2, () => animation.value.reverse())
    
}
    
</script>


<template>
    <div ref="targetEl"
        class="w-[419px] h-[225px] flex items-center justify-center relative bg-[rgb(255_255_255/0.08)] backdrop-blur-3xl isolate"
        :style="{width: width - 1 + 'px', height: height + 'px', clipPath: `url(#${idClipPath})` }" @mouseenter="mouseenter" @mouseleave="mouseleaveHandle">
        <slot />
        <svg width="420" height="225" viewBox="0 0 420 225" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 pointer-events-none" :style="{width: width + 'px', height: height + 'px' }">
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 16.9062 9)"
                stroke="#9B1CBF"
                stroke-opacity="0.3" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 30.9414 9)"
                stroke="#3672FE"
                stroke-opacity="0.6" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 44.9766 9)"
                stroke="#03E7F3"
                stroke-opacity="0.9" />

                <path
                    d="M10 0.5H92.91C95.3033 0.5 97.6084 1.40331 99.3645 3.02935L103.297 6.67025C105.237 8.46744 107.785 9.46585 110.43 9.46585H378.714C383.412 9.46585 387.405 12.8997 388.107 17.5447L417.766 213.579C418.636 219.326 414.186 224.5 408.373 224.5H294.266C291.952 224.5 289.718 223.656 287.982 222.125L283.969 218.586C282.051 216.894 279.581 215.961 277.024 215.961H9.99999C4.75328 215.961 0.5 211.708 0.5 206.461V10C0.5 4.7533 4.7533 0.5 10 0.5Z"
                    stroke="url(#paint0_linear_518_3830)"
                    stroke-opacity="0.56" />
      
            <defs>
                <linearGradient
                    id="paint0_linear_518_3830"
                    x1="370.046"
                    y1="7.08636e-05"
                    x2="18.3491"
                    y2="230.602"
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
                <path d="M0.222,0 H0.024 C0.011,0,0,0.02,0,0.044 V0.918 C0,0.942,0.011,0.962,0.024,0.962 H0.662 C0.668,0.962,0.674,0.966,0.678,0.973 L0.688,0.989 C0.692,0.996,0.698,1,0.703,1 H0.976 C0.991,1,1,0.976,1,0.949 L0.929,0.078 C0.927,0.056,0.917,0.04,0.905,0.04 H0.264 C0.258,0.04,0.252,0.036,0.248,0.028 L0.238,0.012 C0.234,0.004,0.228,0,0.222,0"></path>
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
