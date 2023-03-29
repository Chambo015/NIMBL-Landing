<script setup lang="ts">
import AppGridCard from './AppGridCard.vue';


</script>

<template>
    <section class="min-h-screen flex items-center py-20">
        <div class="container">
            <h2 class="mb-20 font-['Rollbox'] text-5xl font-extrabold"><span class="bg-hero-text-gradient bg-clip-text text-transparent">AI</span> USE-CASES</h2>
            <div class="grid grid-cols-10 gap-5 auto-rows-[470px]">
                <AppGridCard class="col-span-6 flex">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">GPT-search</h5>
                        <p class="text-white/80 text-2xl">GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp the main points of a longer video. This  saves time and makes it easier for users to consume content efficientlyhases</p>
                    </div>
                    <div class="w-[40%] flex-shrink-0 flex items-center">
                        <img src="/card1.jpg" alt="cardImage" width="444" height="444" class="object-cover w-full h-96 border border-r-0 border-white/20 block rounded-l-[10px]">
                    </div>
                </AppGridCard>
                <!-- <div class="col-span-6 bg-white/5 rounded-[10px] border border-white/10 flex">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">GPT-search</h5>
                        <p class="text-white/80 text-2xl">GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp the main points of a longer video. This  saves time and makes it easier for users to consume content efficientlyhases</p>
                    </div>
                    <div class="w-[40%] flex-shrink-0 flex items-center">
                        <img src="/card1.jpg" alt="cardImage" width="444" height="444" class="object-cover w-full h-96 border border-r-0 border-white/20 block rounded-l-[10px]">
                    </div>
                </div> -->
                <div class="col-span-4 bg-white/5 rounded-[10px] border border-white/10 flex flex-col overflow-hidden">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">Video Summaries</h5>
                        <p class="text-white/80 text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="self-end mx-auto">
                        <img src="/card2.jpg" alt="cardImage" width="569" height="252" class="border border-r-0 border-white/20 block rounded-t-[10px]">
                    </div>
                </div>
                <div class="col-span-4 bg-white/5 rounded-[10px] border border-white/10 flex flex-col overflow-hidden">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">Ai-Recommendations</h5>
                        <p class="text-white/80 text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="self-end mx-auto">
                        <img src="/card2.jpg" alt="cardImage" width="569" height="252" class="border border-r-0 border-white/20 block rounded-t-[10px]">
                    </div>
                </div>
                <div class="col-span-6 bg-white/5 rounded-[10px] border border-white/10 flex">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">Platform assistance</h5>
                        <p class="text-white/80 text-2xl">GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp the main points of a longer video. This  saves time and makes it easier for users to consume content efficientlyhases</p>
                    </div>
                    <div class="w-[40%] flex-shrink-0 flex items-center">
                        <img src="/card1.jpg" alt="cardImage" width="444" height="444" class="object-cover w-full h-96 border border-r-0 border-white/20 block rounded-l-[10px]">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>