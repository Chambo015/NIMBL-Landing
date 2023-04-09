<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        default: 682
    }
})

const ratio = 682 / 314
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
            width="682"
            height="314"
            viewBox="0 0 682 314"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="pointer-events-none absolute inset-0"
            :style="{ width: width + 'px', height: height + 'px' }">
            <path
                d="M2.28955 286.131L44.8579 20.0785C46.5267 9.64831 55.525 1.97533 66.0879 1.97533H215.981C221.568 1.97533 226.935 4.14974 230.946 8.03808L231.787 8.85333C236.22 13.151 242.152 15.5543 248.327 15.5543H435.731C442.033 15.5543 448.078 13.0507 452.534 8.59422L452.856 8.27255C456.888 4.2405 462.356 1.97533 468.059 1.97533H617.934C628.557 1.97533 637.587 9.73313 639.189 20.2344L679.91 287.287C681.895 300.302 671.821 312.028 658.656 312.028H468.059C462.356 312.028 456.888 309.763 452.856 305.731L452.534 305.409C448.078 300.953 442.033 298.449 435.731 298.449H248.532C242.23 298.449 236.186 300.953 231.729 305.409L231.454 305.684C227.396 309.742 221.884 312.01 216.145 311.981L23.4131 311.027C10.2271 310.962 0.206257 299.151 2.28955 286.131Z"
                stroke="url(#paint0_linear_774_6098)"
                stroke-opacity="0.56"
                stroke-width="2.26316" />
            <defs>
                <linearGradient
                    id="paint0_linear_774_6098"
                    x1="603.171"
                    y1="0.843848"
                    x2="87.8947"
                    y2="399.558"
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
                    d="M0.064,0.064 L0.002,0.916 C-0.002,0.959,0.014,0.999,0.034,0.999 L0.318,1 C0.327,1,0.335,0.995,0.341,0.981 L0.342,0.98 C0.348,0.967,0.356,0.959,0.365,0.959 H0.64 C0.649,0.959,0.658,0.967,0.664,0.98 L0.664,0.981 C0.671,0.995,0.679,1,0.688,1 H0.968 C0.988,1,1,0.963,1,0.919 L0.941,0.064 C0.939,0.029,0.925,0.003,0.908,0.003 H0.688 C0.679,0.003,0.671,0.01,0.664,0.024 L0.664,0.025 C0.658,0.039,0.649,0.046,0.64,0.046 H0.365 C0.356,0.046,0.348,0.039,0.342,0.026 L0.341,0.023 C0.334,0.01,0.326,0.003,0.317,0.003 H0.097 C0.081,0.003,0.067,0.029,0.064,0.064" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
