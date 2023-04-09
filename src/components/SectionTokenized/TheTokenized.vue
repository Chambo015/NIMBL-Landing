<script setup lang="ts">
import TokenizedLeftCard from './TokenizedLeftCard.vue'
import TokenizedCenterCard from './TokenizedCenterCard.vue'
import TokenizedRightCard from './TokenizedRightCard.vue'
import IconBgHexagon from '../Icons/IconBgHexagon.vue'
import IconStackCoins from '../Icons/IconStackCoins.vue'
import IconBox from '../Icons/IconBox.vue'
import IconFire from '../Icons/IconFire.vue'
import { UseMatchMedia } from '@/hooks/UseMatchMedia'

const [widthLeftCard] = UseMatchMedia({
    '3xl': 510,
    '2xl': 470,
    xl: 390,
    lg: 900,
    md: 690
})

const [widthCenterCard] = UseMatchMedia({
    '3xl': 605,
    '2xl': 540,
    xl: 450,
    lg: 900,
    md: 690
})
</script>

<template>
    <section class="md:py-[210px] py-[100px]" id="tokenized">
        <div class="container">
            <h2 class="text-center font-['Rollbox'] xl:text-[50px] lg:text-7xl sm:text-6xl text-3xl xl:w-auto w-min mx-auto xl:mx-0 font-extrabold uppercase">
                Creator — <span class="bg-hero-text-gradient bg-clip-text text-transparent">tokenized</span>
            </h2>
            <div
                class="flex items-center justify-between flex-col gap-16 xl:mt-[66px] mt-[80px] xl:flex-row xl:gap-0 3xl:mt-[90px]">
                <TokenizedLeftCard class="flex-shrink-0" :width="widthLeftCard">
                    <div class="flex xl:w-[80%] w-[67%] gap-6 flex-col items-center xl:flex-row xl:items-stretch xl:pr-4">
                        <IconBgHexagon
                            class="icon">
                            <IconStackCoins class=" w-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Every creator represented as</span> a limited NFT collection
                        </p>
                    </div>
                </TokenizedLeftCard>
                <!--  xl:order-none lg:order-first -->
                <TokenizedCenterCard class="flex-shrink-0" :width="widthCenterCard">
                    <div class="flex xl:w-[80%] w-[67%] gap-6 flex-col items-center xl:flex-row xl:items-stretch">
                        <IconBgHexagon
                            class="icon">
                            <IconBox class=" w-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Creator collections are</span> available on the marketplace
                        </p>
                    </div>
                </TokenizedCenterCard>
                <TokenizedRightCard class="flex-shrink-0" :width="widthLeftCard">
                    <div
                        class="flex xl:w-[80%] w-[67%] justify-end gap-6 flex-col items-center xl:flex-row xl:items-stretch xl:pl-4">
                        <IconBgHexagon
                            class="icon">
                            <IconFire class=" w-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Watch/evaluate/trade channel collections</span> as NFTs
                        </p>
                    </div>
                </TokenizedRightCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.icon {
    @apply min-w-[58px] h-[72px] lg:h-[100px] lg:min-w-[80px] xl:h-[56px] xl:min-w-[45px] 2xl:h-[62px] 2xl:min-w-[50px] 3xl:h-[76px] 3xl:min-w-[62px]
}
.description {
    @apply text-center text-3xl lg:text-[40px] xl:text-left xl:text-lg 3xl:text-2xl
}
</style>
