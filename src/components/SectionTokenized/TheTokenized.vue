<script setup lang="ts">
import TokenizedLeftCard from './TokenizedLeftCard.vue'
import TokenizedCenterCard from './TokenizedCenterCard.vue'
import TokenizedRightCard from './TokenizedRightCard.vue'
import IconBgHexagon from '../Icons/IconBgHexagon.vue'
import IconStackCoins from '../Icons/IconStackCoins.vue'
import IconBox from '../Icons/IconBox.vue'
import IconFire from '../Icons/IconFire.vue'
</script>

<template>
    <section class="py-[210px]" id="tokenized">
        <div class="container">
            <h2 class="font-['Rollbox'] text-[50px] text-center font-extrabold uppercase">
                Creator — <span class="bg-hero-text-gradient bg-clip-text text-transparent">tokenized</span>
            </h2>
            <div class="mt-[90px] flex items-center justify-between">
                <TokenizedLeftCard class="flex-grow flex-shrink-0 pl-10 pr-14">
                    <IconBgHexagon class="!w-[62px] !h-[76px] mr-6">
                        <IconStackCoins />
                    </IconBgHexagon>
                    <p class="text-2xl">
                        <span class="text-white/50">Every creator represented as</span> a limited NFT collection
                    </p>
                </TokenizedLeftCard>
                <TokenizedCenterCard class="flex-grow flex-shrink-0 px-16">
                    <IconBgHexagon class="!w-[62px] !h-[76px] mr-6">
                        <IconBox />
                    </IconBgHexagon>
                    <p class="text-2xl">
                        <span class="text-white/50">Creator collections are</span> available on the marketplace
                    </p>
                </TokenizedCenterCard>
                <TokenizedRightCard class="flex-grow flex-shrink-0 pr-10 pl-14">
                    <IconBgHexagon class="!w-[62px] !h-[76px] mr-6">
                        <IconFire />
                    </IconBgHexagon>
                    <p class="text-2xl">
                        <span class="text-white/50">Watch/evaluate/trade channel collections</span> as NFTs
                    </p>
                </TokenizedRightCard>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
