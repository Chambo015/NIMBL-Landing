<script setup lang="ts">
import TheRightColCard from './TheRightColCard.vue';
import channelTokensImg from '@/assets/channel-tokens.png'
import cardNimblPremiumImg from '@/assets/card-nimbl-premium.png'
import platformListImg from '@/assets/platform-list.png'
</script>

<template>
    <div class="space-y-[64px]">
        <TheRightColCard>
            <img
                :src="channelTokensImg"
                class="h-full absolute right-0 bottom-0 translate-x-[15%] translate-y-[5%]"
                alt="channelTokensImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">02</p>
                <p class="text-3xl font-semibold w-min leading-none">Channel tokens</p>
            </div>
        </TheRightColCard>
        <TheRightColCard>
            <img
                :src="cardNimblPremiumImg"
                class="h-full absolute right-0 bottom-0 translate-x-[15%] translate-y-[15%]"
                alt="cardNimblPremiumImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">04</p>
                <p class="text-2xl font-semibold w-min leading-none">Subscriptions</p>
            </div>
        </TheRightColCard>
        <TheRightColCard>
            <img
                :src="platformListImg"
                class="h-[80%] absolute right-0 bottom-0 translate-x-[40%] translate-y-[10%]"
                alt="platformListImg" />
            <div class="absolute left-[13%] top-1/2 -translate-y-1/2">
                <p class="text-white/80 text-xl mb-3">06</p>
                <p class="text-3xl font-semibold w-min leading-none">Nimbl Interfaces as NFTs</p>
            </div>
        </TheRightColCard>
    </div>
</template>



<style scoped>

</style>