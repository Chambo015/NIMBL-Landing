<script setup lang="ts">
import TheLeftColCard from './TheLeftColCard.vue'
import badgesImg from '@/assets/badges.png'
import musicImg from '@/assets/music.png'
import nimblImg from '@/assets/nimbl-pfps.png'
import { UseMatchMedia } from '@/hooks/UseMatchMedia';
import { ref } from 'vue';

const [widthLeftCard] = UseMatchMedia({
    '3xl': 420,
    '2xl': 420,
    xl: 345,
    lg: 900
})
const targetEl = ref(null)
defineExpose({
    targetEl
})
</script>

<template>
    <div ref="targetEl" class="2xl:space-y-[64px] space-y-[52px] relative z-50">
        <TheLeftColCard :width="widthLeftCard">
            <img
                :src="badgesImg"
                class="h-full absolute left-0 bottom-0 -translate-x-[20%] translate-y-[20%]"
                alt="badgesImg"/>
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="title_card">01</p>
                <p class="text_card">Badges</p>
            </div>
        </TheLeftColCard>
        <TheLeftColCard :width="widthLeftCard">
            <img
                :src="musicImg"
                class="h-full absolute left-0 bottom-0 -translate-x-[15%] translate-y-[15%]"
                alt="musicImg" />
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="title_card">03</p>
                <p class="text_card">Music packs</p>
            </div>
        </TheLeftColCard>
        <TheLeftColCard :width="widthLeftCard">
            <img :src="nimblImg" class="h-[90%] absolute left-0 bottom-0 -translate-x-[25%]" alt="nimblImg"/>
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="title_card">05</p>
                <p class="text_card">Nimbl PFPs</p>
            </div>
        </TheLeftColCard>
    </div>
</template>

<style scoped lang="scss">
.title_card {
    @apply text-white/80 2xl:text-xl mb-3 text-base
}
.text_card {
    @apply 2xl:text-3xl text-2xl font-semibold leading-none w-min
}
</style>
