<template>
    <div
        class="w-[420px] h-[225px] flex items-center justify-center relative bg-white/5 backdrop-blur-lg isolate"
        :style="{ clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg width="420" height="225" viewBox="0 0 420 225" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 pointer-events-none">
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
        <svg width="0" height="0" viewBox="0 0 420 225">
            <clipPath :id="idClipPath">
                <path
                    d="M92.91 0H10C4.47715 0 0 4.47716 0 10V206.461C0 211.984 4.47714 216.461 9.99999 216.461H277.024C279.46 216.461 281.811 217.35 283.638 218.961L287.652 222.5C289.478 224.111 291.83 225 294.266 225H408.373C414.492 225 419.176 219.554 418.261 213.504L388.602 17.4699C387.862 12.5804 383.659 8.96585 378.714 8.96585H110.43C107.911 8.96585 105.485 8.01499 103.636 6.30337L99.7042 2.66248C97.8557 0.950858 95.4293 0 92.91 0Z" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
</script>
