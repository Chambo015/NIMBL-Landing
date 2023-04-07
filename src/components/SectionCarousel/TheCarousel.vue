<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'
import TheCarouselCard from './TheCarouselCard.vue'
import channelTokensImg from '@/assets/channel-tokens.png'
import cardNimblPremiumImg from '@/assets/card-nimbl-premium.png'
import platformListImg from '@/assets/platform-list.png'
import badgesImg from '@/assets/badges.png'
import musicImg from '@/assets/music.png'
import nimblImg from '@/assets/nimbl-pfps.png'
import { computed, ref } from 'vue'

const current = ref(0)
const [container, slider] = useKeenSlider({
    mode: 'snap',
    slides: {
        origin: "center",
        perView: 'auto',
        spacing: 40
    },
    initial: current.value,
    slideChanged: (s) => {
        current.value = s.track.details.rel
    }
})

const dotHelper = computed(() => (slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []))
</script>

<template>
    <section class="container pt-44">
        <div ref="container" class="keen-slider">
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="badgesImg"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="badgesImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">01</p>
                        <p class="text_card">Badges</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="channelTokensImg"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="channelTokensImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">02</p>
                        <p class="text_card">Channel tokens</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="musicImg"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="musicImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">03</p>
                        <p class="text_card">Music packs</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="cardNimblPremiumImg"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="cardNimblPremiumImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">04</p>
                        <p class="w-min text-[40px] font-semibold leading-none">Subscriptions</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="nimblImg"
                        class="absolute right-0 bottom-0 h-[95%] translate-x-[10%] translate-y-[0%] -scale-x-100 scale-y-100"
                        alt="nimblImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">05</p>
                        <p class="text_card">Nimbl PFPs</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide min-w-[725px] cursor-grab active:cursor-grabbing">
                <TheCarouselCard>
                    <img
                        :src="platformListImg"
                        class="absolute right-0 bottom-0 h-[85%] translate-x-[30%] translate-y-[5%]"
                        alt="platformListImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">06</p>
                        <p class="text_card">Nimbl Interfaces as NFTs</p>
                    </div>
                </TheCarouselCard>
            </div>
        </div>
        <div v-if="slider" class="flex justify-center items-center gap-3 h-5 mt-4">
            <button
                v-for="(_slide, idx) in dotHelper"
                @click="slider?.moveToIdx(idx)"
                :class="['rounded-full transition-all', current === idx ? 'bg-[#3672FE] h-5 w-5' : 'w-3 h-3 bg-white/30']"
                :key="idx"></button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important; /* Слайдер будет виден вне контейнера  */
}

.title_card {
    @apply mb-4 text-3xl text-white/80;
}
.text_card {
    @apply w-min text-5xl font-semibold leading-none;
}
</style>
