<script setup lang="ts">
import TheRightColCard from './TheRightColCard.vue';
import { UseMatchMedia } from '@/hooks/UseMatchMedia';

const [widthRightCard] = UseMatchMedia({
    '3xl': 420,
    '2xl': 420,
    xl: 345,
    lg: 900
})
</script>

<template>
    <div class="2xl:space-y-[64px] space-y-[52px]">
        <TheRightColCard :width="widthRightCard">
            <img
                src="/card/channel-tokens-sm.png"
                data-src="/card/channel-tokens.png"
                class="lazyload h-full absolute right-0 bottom-0 translate-x-[15%] translate-y-[5%]"
                alt="channelTokensImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="title_card">02</p>
                <p class="text_card">Channel tokens</p>
            </div>
        </TheRightColCard>
        <TheRightColCard :width="widthRightCard">
            <img
            src="/card/card-nimbl-premium-sm.png"
                data-src="/card/card-nimbl-premium.png"
                class="lazyload h-full absolute right-0 bottom-0 translate-x-[15%] translate-y-[15%]"
                alt="cardNimblPremiumImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="title_card">04</p>
                <p class="2xl:text-2xl text-xl font-semibold w-min leading-none">Subscriptions</p>
            </div>
        </TheRightColCard>
        <TheRightColCard :width="widthRightCard">
            <img
            src="/card/platform-list-sm.png"
                data-src="/card/platform-list.png"
                class="lazyload h-[80%] absolute right-0 bottom-0 translate-x-[40%] translate-y-[10%]"
                alt="platformListImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="title_card">06</p>
                <p class="text_card">Nimbl Interfaces as NFTs</p>
            </div>
        </TheRightColCard>
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