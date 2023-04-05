<template>
    <div
        class="w-[614px] h-[280px] flex items-center justify-center relative bg-white/5 backdrop-blur-3xl isolate"
        :style="{ clipPath: `url(#${idClipPath})` }">
        <slot />
        <svg width="614" height="280" viewBox="0 0 614 280" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 pointer-events-none">

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
            <clipPath :id="idClipPath">
                <path d="M10.6985 0H603.362C609.485 0 614.17 5.45246 613.248 11.5053L573.659 271.505C572.915 276.391 568.714 280 563.773 280H416.258C413.607 280 411.063 278.947 409.188 277.072L403.284 271.17C401.409 269.295 398.866 268.241 396.214 268.241H219.256C216.604 268.241 214.061 269.295 212.186 271.17L206.282 277.072C204.407 278.947 201.864 280 199.212 280H51.6531C46.731 280 42.5408 276.418 41.7749 271.556L0.820276 11.556C-0.135623 5.48748 4.55515 0 10.6985 0Z"/>
            </clipPath>
        </svg>
        <!--  -->
    </div>
</template>
<script setup lang="ts">
const idClipPath = crypto.randomUUID()
// class="absolute inset-0 pointer-events-none"
</script>
