<template>
    <div
        class="w-[570px] h-[216px] flex items-center justify-center relative bg-white/5 backdrop-blur-lg isolate"
        :style="{ clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg
            width="570"
            height="216"
            viewBox="0 0 570 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none">
                <path
                    d="M5.77905 0.5H564.102C566.881 0.5 568.996 2.99494 568.541 5.73698L534.341 211.737C533.981 213.908 532.103 215.5 529.902 215.5H383.692C382.659 215.5 381.658 215.145 380.856 214.494L372.438 207.659C371.458 206.863 370.234 206.429 368.971 206.429H196.556C195.294 206.429 194.069 206.863 193.089 207.659L184.672 214.494C183.87 215.145 182.868 215.5 181.835 215.5H35.713C33.4776 215.5 31.5812 213.859 31.2597 211.647L1.32583 5.6471C0.931413 2.93278 3.03623 0.5 5.77905 0.5Z"
                    stroke="url(#paint0_linear_522_4148)"
                    stroke-opacity="0.4" />
            <defs>
                <linearGradient
                    id="paint0_linear_522_4148"
                    x1="505.044"
                    y1="-0.000344417"
                    x2="137.344"
                    y2="349.891"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B8B8B8" />
                    <stop offset="0.567708" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="#A6A6A6" />
                </linearGradient>
            </defs>
        </svg>
        <!-- ClipPath svg -->
        <svg width="0" height="0" viewBox="0 0 570 216">
            <clipPath :id="idClipPath">
                <path
                    d="M5.77905 0H564.102C567.19 0 569.54 2.77215 569.034 5.81887L534.835 211.819C534.434 214.231 532.347 216 529.902 216H383.692C382.544 216 381.432 215.605 380.54 214.882L372.123 208.047C371.232 207.324 370.119 206.929 368.971 206.929H196.556C195.408 206.929 194.296 207.324 193.404 208.047L184.987 214.882C184.096 215.605 182.983 216 181.835 216H35.713C33.2293 216 31.1221 214.177 30.7649 211.719L0.831029 5.719C0.392786 2.70309 2.73147 0 5.77905 0Z" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
</script>
