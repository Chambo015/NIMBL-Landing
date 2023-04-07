<script setup lang="ts">
import GPTSearchVideo from '@/assets/GPT-search.mp4'
import AIRecommendationsVideo from '@/assets/AIRecommendations.mp4'
</script>

<template>
    <section class="flex min-h-screen items-center py-40 2xl:py-48 3xl:py-[220px]" id="AIAssisted">
        <div class="container">
            <h2 class="mb-20 font-['Rollbox'] text-5xl font-extrabold uppercase">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent">AI</span> Assisted Social
            </h2>
            <div class="grid grid-cols-10 gap-16 xl:auto-rows-[360px] xl:gap-5 2xl:auto-rows-[470px]">
                <div
                    class="lx:gap-0 relative col-span-10 flex flex-col lg:gap-16 gap-4 overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-6 xl:block">
                    <div
                        class="relative z-50 flex h-full flex-col justify-center py-14 pl-12 pr-12 xl:max-w-[55%] xl:pl-14 xl:pr-7">
                        <h5 class="title">GPT-search</h5>
                        <p class="description">
                            The AI solution are able to understand text, videos and images, and even context of each
                            video, paving a way for a much smarter search functionality within Nimbl
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 right-0 z-40 hidden h-[84%] w-[35%] rounded-tl-[10px] border border-white/20 bg-white/5 backdrop-blur-3xl xl:block"></div>
                    <figure
                        class="right-0 bottom-0 z-50 mx-auto flex lg:h-[500px] h-[380px] w-[80%] flex-shrink-0 translate-y-[12%] items-center justify-center lg:translate-y-[10%] xl:absolute xl:h-[300px] xl:w-[400px] xl:translate-x-[20%] xl:translate-y-[10%] 2xl:h-[400px] 2xl:w-[495px]">
                        <video
                            autoplay
                            muted
                            loop
                            class="block w-full rounded-t-[10px] border border-b-0 border-white/20 object-cover xl:rounded-tl-[10px] xl:border-r-0"
                            loading="lazy"
                            playsinline>
                            <source :src="GPTSearchVideo" type="video/mp4" />
                        </video>
                    </figure>
                </div>
                <div
                    class="lx:gap-0 col-span-10 flex flex-col lg:gap-14 overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-4">
                    <div class="flex flex-col justify-center px-12 py-14 xl:py-7">
                        <h5 class="title">Video Summaries</h5>
                        <p class="description">
                            GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp main
                            points of a longer video.
                        </p>
                    </div>
                    <figure class="mx-auto mt-auto w-[90%]">
                        <img
                            src="/card2.jpg"
                            alt="cardImage"
                            width="569"
                            height="252"
                            class="block w-full rounded-t-[10px] border border-b-0 border-white/20" />
                    </figure>
                </div>
                <div
                    class="relative col-span-10 overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-4">
                    <div class="flex flex-col justify-center py-14 pl-14 pr-7">
                        <h5 class="title">AI-Recommendations</h5>
                        <p class="description">User-feed personalization powered by ChatGPT</p>
                    </div>
                    <figure
                        class="inset-x-0 lg:h-auto h-[400px] mx-auto w-[90%] translate-y-[13%] lg:translate-y-[10%] xl:absolute xl:top-[55%] xl:translate-y-0 2xl:top-[50%]">
                        <video
                            autoplay
                            muted
                            loop
                            class="block w-full rounded-t-[10px] border border-b-0 border-white/20 object-cover"
                            loading="lazy"
                            playsinline>
                            <source :src="AIRecommendationsVideo" type="video/mp4" />
                        </video>
                    </figure>
                </div>
                <div
                    class="relative isolate col-span-10 flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-6 xl:block">
                    <div class="flex h-full flex-col justify-center py-14 pl-12 pr-12 xl:max-w-[55%] xl:pl-14 xl:pr-7">
                        <h5 class="title">Platform assistance</h5>
                        <p class="description">
                            Navigation, research, watch history, support, and chat - powered by smart search and find
                            features
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 right-0 z-40 hidden h-[87%] w-[40%] rounded-tl-[10px] border border-white/20 bg-white/5 backdrop-blur-3xl xl:block"></div>
                    <figure
                        class="bottom-0 right-0 z-50 mx-auto flex h-[470px] w-[80%] flex-shrink-0 items-start xl:absolute xl:h-auto xl:w-[45%]">
                        <img
                            src="/card1.jpg"
                            alt="cardImage"
                            width="444"
                            height="444"
                            class="block w-full rounded-t-[10px] border border-b-0 border-white/20 object-cover xl:h-[300px] xl:rounded-tl-[10px] xl:border-r-0 2xl:h-96" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
h5.title {
    @apply mb-7 text-4xl lg:text-5xl font-bold xl:text-3xl;
}
p.description {
    @apply text-3xl lg:text-4xl text-white/80 xl:text-xl 2xl:text-2xl;
}
</style>
