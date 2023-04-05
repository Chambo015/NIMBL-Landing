<script setup lang="ts">
import TheLeftColCard from './TheLeftColCard.vue'
import badgesImg from '@/assets/badges.png'
import musicImg from '@/assets/music.png'
import nimblImg from '@/assets/nimbl-pfps.png'
</script>

<template>
    <div class="space-y-[64px]">
        <TheLeftColCard>
            <img
                :src="badgesImg"
                class="h-full absolute left-0 bottom-0 -translate-x-[20%] translate-y-[20%]"
                alt="badgesImg"/>
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">01</p>
                <p class="text-3xl font-semibold">Badges</p>
            </div>
        </TheLeftColCard>
        <TheLeftColCard>
            <img
                :src="musicImg"
                class="h-full absolute left-0 bottom-0 -translate-x-[15%] translate-y-[15%]"
                alt="musicImg" />
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">03</p>
                <p class="text-3xl font-semibold w-min leading-none">Music packs</p>
            </div>
        </TheLeftColCard>
        <TheLeftColCard>
            <img :src="nimblImg" class="h-[90%] absolute left-0 bottom-0 -translate-x-[25%]" alt="nimblImg"/>
            <div class="absolute left-[55%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">05</p>
                <p class="text-3xl font-semibold w-min leading-none">Nimbl PFPs</p>
            </div>
        </TheLeftColCard>
    </div>
</template>

<style scoped></style>
