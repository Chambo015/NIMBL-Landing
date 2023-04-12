<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'
import TheCarouselCard from './TheCarouselCard.vue'
import { computed, ref } from 'vue'
import { UseMatchMedia } from '@/hooks/UseMatchMedia'

const [spaceBetweenCard] = UseMatchMedia({
    lg: 40,
    md: 30,
    sm: 30,
    mobile: 20
})

/* Slider Keen */
const current = ref(0)
const [container, slider] = useKeenSlider({
    mode: 'snap',
    slides: {
        origin: "center",
        perView: 'auto',
        spacing: spaceBetweenCard.value
    },
    initial: current.value,
    slideChanged: (s) => {
        current.value = s.track.details.rel
    }
})
const dotHelper = computed(() => (slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []))
/* *** */


const [widthCard] = UseMatchMedia({
    lg: 725,
    md: 650,
    sm: 490,
    mobile: 365
})
</script>

<template>
    <section class="container md:pt-44 pt-16">
        <div ref="container" class="keen-slider">
            <div class="keen-slider__slide">
                <TheCarouselCard :width="widthCard">
                    <img
                        src="/card/badges.png"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="badgesImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">01</p>
                        <p class="text_card">Badges</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide ">
                <TheCarouselCard :width="widthCard">
                    <img
                    src="/card/channel-tokens.png"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="channelTokensImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">02</p>
                        <p class="text_card">Channel tokens</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide ">
                <TheCarouselCard :width="widthCard">
                    <img
                    src="/card/music.png"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="musicImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">03</p>
                        <p class="text_card">Music packs</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide ">
                <TheCarouselCard :width="widthCard">
                    <img
                    src="/card/card-nimbl-premium.png"
                        class="absolute right-0 bottom-0 h-full translate-x-[0%] translate-y-[5%]"
                        alt="cardNimblPremiumImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">04</p>
                        <p class="w-min md:text-[40px] sm:text-2xl text-xl font-semibold leading-none">Subscriptions</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide ">
                <TheCarouselCard :width="widthCard">
                    <img
                        src="/card/nimbl-pfps.png"
                        class="absolute right-0 bottom-0 h-[95%] translate-x-[10%] translate-y-[0%] -scale-x-100 scale-y-100"
                        alt="nimblImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">05</p>
                        <p class="text_card">Nimbl PFPs</p>
                    </div>
                </TheCarouselCard>
            </div>
            <div class="keen-slider__slide ">
                <TheCarouselCard :width="widthCard">
                    <img
                        src="/card/platform-list.png"
                        class="absolute right-0 bottom-0 h-[85%] translate-x-[30%] translate-y-[5%]"
                        alt="platformListImg" />
                    <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                        <p class="title_card">06</p>
                        <p class="text_card">Nimbl Interfaces as NFTs</p>
                    </div>
                </TheCarouselCard>
            </div>
        </div>
        <div v-if="slider" class="flex justify-center items-center gap-3 sm:h-5 h-4 mt-4">
            <button
                v-for="(_slide, idx) in dotHelper"
                @click="slider?.moveToIdx(idx)"
                :class="['rounded-full transition-all', current === idx ? 'bg-[#3672FE] sm:h-5 sm:w-5 h-4 w-4' : 'sm:w-3 w-2 h-2 sm:h-3 bg-white/30']"
                :key="idx"></button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import url('keen-slider/keen-slider.css');

.keen-slider {
    overflow: initial !important; /* Слайдер будет виден вне контейнера  */
}

.keen-slider__slide {
    @apply lg:min-w-[725px] cursor-grab active:cursor-grabbing md:min-w-[650px] sm:min-w-[490px] min-w-[365px]
}

.title_card {
    @apply mb-4 md:text-3xl text-white/80 sm:text-lg;
}
.text_card {
    @apply w-min md:text-5xl font-semibold leading-none sm:text-3xl text-2xl; 
}
</style>
