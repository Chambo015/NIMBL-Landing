<template>
    <div
        class="w-[420px] h-[225px] flex items-center justify-center relative bg-white/5 backdrop-blur-lg isolate"
        :style="{ clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg width="420" height="225" viewBox="0 0 420 225" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <clipPath :id="idClipPath">
                <path
                    d="M327.09 0H410C415.523 0 420 4.47716 420 10V206.461C420 211.984 415.523 216.461 410 216.461H142.976C140.54 216.461 138.189 217.35 136.362 218.961L132.348 222.5C130.522 224.111 128.17 225 125.734 225H11.6268C5.50797 225 0.823944 219.554 1.73929 213.504L31.3982 17.4699C32.1379 12.5804 36.3405 8.96585 41.2857 8.96585H309.57C312.089 8.96585 314.515 8.01499 316.364 6.30337L320.296 2.66248C322.144 0.950858 324.571 0 327.09 0Z" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
</script>
