<script setup lang="ts">
import IconBgHexagon from '../Icons/IconBgHexagon.vue'
import IconStackCoins from '../Icons/IconStackCoins.vue'
import BlurWindow from './BlurWindow.vue'
import ChannelToken from './ChannelToken.vue'
</script>

<template>
    <section class="min-h-screen relative py-[calc(theme(spacing.index)*4)] overflow-x-hidden">
        <div class="container flex justify-between">
            <div>
                <h2 class="uppercase font-['Rollbox'] text-5xl font-extrabold mb-[113px] mt-[80px]">
                    Nimbl Channels <span class="bg-hero-text-gradient bg-clip-text text-transparent">as NFT</span>
                </h2>
                <p class="text-white/80 text-2xl mb-[67px]">Channel’s Utility:</p>
                <div class="flex">
                    <div>
                        <div class="flex gap-5 items-center">
                            <IconBgHexagon>
                                <IconStackCoins />
                            </IconBgHexagon>
                            <span class="text-2xl leading-none">The Content</span>
                        </div>
                        <div class="flex gap-5 items-center mt-7">
                            <IconBgHexagon>
                                <IconStackCoins />
                            </IconBgHexagon>
                            <span class="text-2xl leading-none">Alpha Content</span>
                        </div>
                    </div>
                    <div class="ml-7">
                        <div class="flex gap-5 items-center">
                            <IconBgHexagon>
                                <IconStackCoins />
                            </IconBgHexagon>
                            <span class="text-2xl leading-none">Channel Growth</span>
                        </div>
                        <div class="flex gap-5 items-center mt-7">
                            <IconBgHexagon>
                                <IconStackCoins />
                            </IconBgHexagon>
                            <span class="text-2xl leading-none">Alpha Chats</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative mr-10">
                <ChannelToken class="relative z-40" />
                <ChannelToken class="!absolute top-0 left-0 z-30 scale-75 translate-x-[45%]" img="./token-bg2.png" />
                <ChannelToken class="!absolute top-0 left-0 z-20 scale-50 translate-x-[79%]" img="./token-bg3.png" />
                <BlurWindow class="!absolute z-50 top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 ">
                    <div class="p-14">
                        <IconBgHexagon class="!w-[62px] !h-[76px]">
                            <IconStackCoins class="!w-full !h-full"/>
                        </IconBgHexagon>
                        <p class="text-3xl text-white/80 mt-4">Every creator represented as a limited non-fungible tokens collection</p>
                    </div>
                </BlurWindow>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
