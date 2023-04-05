<script setup lang="ts">
import AppGridCard from './AppGridCard.vue';
import GPTSearchVideo from '@/assets/GPT-search.mp4'
import AIRecommendationsVideo from '@/assets/AIRecommendations.mp4'


</script>

<template>
    <section class="min-h-screen flex items-center py-[220px]" id="AIAssisted">
        <div class="container">
            <h2 class="mb-20 font-['Rollbox'] text-5xl font-extrabold uppercase"><span class="bg-hero-text-gradient bg-clip-text text-transparent ">AI</span> Assisted Social</h2>
            <div class="grid grid-cols-10 gap-5 auto-rows-[470px]">
                <div class="col-span-6 bg-white/5 rounded-[10px] border border-white/10 relative overflow-hidden">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center max-w-[60%] h-full relative z-50">
                        <h5 class="font-bold text-3xl mb-7">GPT-search</h5>
                        <p class="text-white/80 text-2xl">The AI solution are able to understand text, videos and images, and even context of each video, paving a way for a much smarter search functionality within Nimbl</p>
                    </div>
                    <div class="w-[35%] absolute bottom-0 right-0 h-[84%] bg-white/5 backdrop-blur-3xl z-40 border rounded-tl-[10px] border-white/20"></div>
                    <figure class="w-[495px] h-[400px] flex-shrink-0 flex items-center absolute right-0 bottom-0 translate-x-[20%] translate-y-[10%] z-50">
                        <video autoplay muted loop class="object-cover border border-r-0 border-b-0 border-white/20 block rounded-tl-[10px]" loading="lazy" playsinline>
                            <source :src="GPTSearchVideo" type="video/mp4">
                        </video>
                    </figure>
                </div>
                <div class="col-span-4 bg-white/5 rounded-[10px] border border-white/10 flex flex-col overflow-hidden">
                    <div class="px-12 py-7  flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">Video Summaries</h5>
                        <p class="text-white/80 text-2xl">GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp main points of a longer video.</p>
                    </div>
                    <figure class="mx-auto w-[90%] mt-auto">
                        <img src="/card2.jpg" alt="cardImage" width="569" height="252" class="w-full  border border-b-0  border-white/20 block rounded-t-[10px]">
                    </figure>
                </div>
                <div class="col-span-4 bg-white/5 rounded-[10px] border border-white/10 overflow-hidden relative">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center">
                        <h5 class="font-bold text-3xl mb-7">AI-Recommendations</h5>
                        <p class="text-white/80 text-2xl">User-feed personalization powered by ChatGPT</p>
                    </div>
                    <figure class="absolute bottom-0 inset-x-0 mx-auto w-[90%] translate-y-[35%]">
                        <video autoplay muted loop class="object-cover border border-b-0 border-white/20 block rounded-t-[10px]" loading="lazy" playsinline>
                            <source :src="AIRecommendationsVideo" type="video/mp4">
                        </video>
                    </figure>
                </div>
                <div class="col-span-6 bg-white/5 rounded-[10px] border border-white/10 relative isolate">
                    <div class="pl-14 py-14 pr-7 flex flex-col justify-center max-w-[60%] h-full">
                        <h5 class="font-bold text-3xl mb-7">Platform assistance</h5>
                        <p class="text-white/80 text-2xl">Navigation, research, watch history, support, and chat - powered by smart search and find features</p>
                    </div>
                    <div class="w-[40%] absolute bottom-0 right-0 h-[87%] bg-white/5 backdrop-blur-3xl z-40 border rounded-tl-[10px] border-white/20"></div>
                    <figure class="w-[45%] absolute bottom-0 right-0 flex-shrink-0 flex items-center z-50">
                        <img src="/card1.jpg" alt="cardImage" width="444" height="444" class="object-cover w-full h-96 border border-r-0 border-b-0 border-white/20 block rounded-tl-[10px]">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>