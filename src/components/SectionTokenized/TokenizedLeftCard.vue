<template>
    <div
        class="w-[530px] h-[291px] flex items-center justify-center relative bg-white/5 backdrop-blur-3xl isolate"
        :style="{ clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg
            width="530"
            height="291"
            viewBox="0 0 530 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none">
            <path
                d="M10 0.5H118.199C120.633 0.5 122.973 1.4339 124.739 3.1091L131.169 9.21209C133.12 11.0636 135.708 12.0958 138.397 12.0958H480.123C484.834 12.0958 488.833 15.5481 489.521 20.2085L527.814 279.613C528.661 285.35 524.214 290.5 518.415 290.5H370.416C368.062 290.5 365.792 289.626 364.046 288.048L357.538 282.167C355.608 280.422 353.099 279.456 350.498 279.456H10C4.75329 279.456 0.5 275.203 0.5 269.956V10C0.5 4.7533 4.7533 0.5 10 0.5Z"
                stroke="url(#paint0_linear_729_5198)"
                stroke-opacity="0.56" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 16.8672 10)"
                stroke="#9B1CBF"
                stroke-opacity="0.3" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 30.8984 10)"
                stroke="#3672FE"
                stroke-opacity="0.6" />
            <circle
                cx="3.43416"
                cy="3.43416"
                r="2.93416"
                transform="matrix(-1 0 0 1 44.9375 10)"
                stroke="#03E7F3"
                stroke-opacity="0.9" />
            <defs>
                <linearGradient
                    id="paint0_linear_729_5198"
                    x1="466.963"
                    y1="9.16503e-05"
                    x2="16.6548"
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
            <clipPath :id="idClipPath">
                <path
                    d="M118.199 0H10C4.47715 0 0 4.47716 0 10V269.956C0 275.479 4.47715 279.956 10 279.956H350.498C352.976 279.956 355.365 280.876 357.203 282.538L363.71 288.419C365.548 290.08 367.938 291 370.416 291H518.415C524.52 291 529.2 285.578 528.308 279.54L490.016 20.1355C489.291 15.2298 485.082 11.5958 480.123 11.5958H138.397C135.836 11.5958 133.372 10.6128 131.514 8.84941L125.083 2.74642C123.225 0.983056 120.761 0 118.199 0Z" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
</script>
