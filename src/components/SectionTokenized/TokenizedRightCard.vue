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
            <clipPath :id="idClipPath">
            <path
                d="M411.801 0H520C525.523 0 530 4.47716 530 10V269.956C530 275.479 525.523 279.956 520 279.956H179.502C177.024 279.956 174.635 280.876 172.797 282.538L166.29 288.419C164.452 290.08 162.062 291 159.584 291H11.5845C5.48029 291 0.800293 285.578 1.69177 279.54L39.9845 20.1355C40.7086 15.2298 44.9185 11.5958 49.8773 11.5958H391.603C394.164 11.5958 396.628 10.6128 398.486 8.84941L404.917 2.74642C406.775 0.983056 409.239 0 411.801 0Z" />
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
// class="absolute inset-0 pointer-events-none"
</script>
