<script setup lang="ts">
import TokenizedLeftCard from './TokenizedLeftCard.vue'
import TokenizedCenterCard from './TokenizedCenterCard.vue'
import TokenizedRightCard from './TokenizedRightCard.vue'
import IconBgHexagon from '../Icons/IconBgHexagon.vue'
import IconStackCoins from '../Icons/IconStackCoins.vue'
import IconBox from '../Icons/IconBox.vue'
import IconFire from '../Icons/IconFire.vue'
import { UseMatchMedia } from '@/hooks/UseMatchMedia'
import { useMediaQuery } from '@vueuse/core'
import TokenizedMiddleCard from './TokenizedMiddleCard.vue'
import TokenizedTopCard from './TokenizedTopCard.vue'
import TokenizedBottomCard from './TokenizedBottomCard.vue'

const isLargerXL = useMediaQuery('(min-width: 1280px)')

const [widthLeftCard] = UseMatchMedia({
    '3xl': 510,
    '2xl': 470,
    xl: 390,
    lg: 900,
    md: 690,
    sm: 555,
    mobile: 360,
})

const [widthCenterCard] = UseMatchMedia({
    '3xl': 605,
    '2xl': 540,
    xl: 450,
    lg: 900,
    md: 690,
    sm: 555,
    mobile: 360,
})
</script>

<template>
    <section class="md:py-[210px] py-[100px] sm:py-[150px]" id="tokenized">
        <div class="container">
            <h2 class="text-center font-['Rollbox'] xl:text-[50px] lg:text-7xl sm:text-6xl text-3xl xl:w-auto w-min mx-auto xl:mx-0 font-extrabold uppercase">
                Creator — <span class="bg-hero-text-gradient bg-clip-text text-transparent">tokenized</span>
            </h2>
            <div
                class="flex items-center justify-between flex-col gap-6 sm:gap-16 xl:mt-[66px] mt-8 sm:mt-[80px] xl:flex-row xl:gap-0 lg:mt-[90px]">
                <component :is="isLargerXL ? TokenizedLeftCard : TokenizedTopCard"  class="flex-shrink-0" :width="widthLeftCard">
                    <div class="flex xl:w-[80%] w-[67%] gap-2 sm:gap-6 flex-col items-center xl:flex-row xl:items-stretch xl:pr-4">
                        <IconBgHexagon
                            class="icon">
                            <IconStackCoins class=" w-full h-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Every creator represented as</span> a limited NFT collection
                        </p>
                    </div>
                </component>
                <!--  xl:order-none lg:order-first -->
                <component :is="isLargerXL ? TokenizedCenterCard : TokenizedMiddleCard" class="flex-shrink-0" :width="widthCenterCard">
                    <div class="flex xl:w-[80%] w-[67%] gap-2 sm:gap-6 flex-col items-center xl:flex-row xl:items-stretch">
                        <IconBgHexagon
                            class="icon">
                            <IconBox class="w-full h-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Creator collections are</span> available on the marketplace
                        </p>
                    </div>
                </component>
                <component :is="isLargerXL ? TokenizedRightCard : TokenizedBottomCard" class="flex-shrink-0" :width="widthLeftCard">
                    <div
                        class="flex xl:w-[80%] w-[67%] justify-end gap-2 sm:gap-6 flex-col items-center xl:flex-row xl:items-stretch xl:pl-4">
                        <IconBgHexagon
                            class="icon">
                            <IconFire class="w-full h-full" />
                        </IconBgHexagon>
                        <p class="description">
                            <span class="text-white/50">Watch/evaluate/trade channel collections</span> as NFTs
                        </p>
                    </div>
                </component>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.icon {
    @apply flex-shrink-0 w-[32px] h-[40px] sm:w-[47px] sm:h-[59px] md:w-[59px] md:h-[74px] lg:w-[80px] lg:h-[100px] xl:w-[40px] xl:h-[50px] 2xl:w-[62px] 2xl:h-[77.5px]
}
.description {
    @apply text-center text-sm sm:text-2xl lg:text-[40px] lg:max-xl:leading-tight xl:text-left xl:text-lg 3xl:text-2xl md:text-3xl
}
</style>
