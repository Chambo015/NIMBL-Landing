<script setup lang="ts">
import GPTSearchVideo from '@/assets/GPT-search.mp4'
import AIRecommendationsVideo from '@/assets/AIRecommendation.mp4'
</script>

<template>
    <section class="flex min-h-screen items-center py-20 md:py-40 2xl:py-48 3xl:py-[220px]" id="AIAssisted">
        <div class="container">
            <h2 class="mb-11 font-['Rollbox'] text-2xl font-extrabold uppercase sm:text-4xl md:mb-20 md:text-5xl">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent">AI</span> Assisted Social
            </h2>
            <div class="grid grid-cols-10 gap-y-5  xl:gap-5">
                <!-- GPT-search -->
                <div
                    class="col-span-10 flex flex-col xl:flex-row overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-6">
                    <div class="px-5 py-9 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-9 xl:py-12 xl:flex-[0_0_55%]">
                        <h5 class="title">GPT-search</h5>
                        <p class="description">
                            The AI solution are able to understand text, videos and images, and even context of each
                            video, paving a way for a much smarter search functionality within Nimbl
                        </p>
                    </div>

                    <figure class="w-auto mb-9 mx-5 sm:mx-10 aspect-[1.33/1] md:mx-14 md:mb-20 lg:mx-16 xl:mx-0 xl:mb-0 xl:w-full xl:h-[70%]  xl:self-end video_one">
                        <video autoplay muted loop class="w-full max-xl:rounded-[10px] xl:rounded-tl-[10px] object-cover border border-white/20" loading="lazy" playsinline>
                            <source :src="GPTSearchVideo" type="video/mp4" />
                        </video>
                    </figure>
                </div>
                <!-- --- -->
                <!-- Video Summaries -->
                <div
                    class="col-span-10 flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-4">
                    <div class="px-5 py-9 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-9 xl:py-12">
                        <h5 class="title">Video Summaries</h5>
                        <p class="description">
                            GPT API on Nimbl provides automated video summaries, allowing users to quickly grasp main
                            points of a longer video.
                        </p>
                    </div>
                    <figure class="w-full px-5 sm:px-10 md:px-14 lg:px-16 xl:px-9 ">
                        <img
                            src="/card2.jpg"
                            alt="cardImage"
                            width="569"
                            height="252"
                            class="block w-full rounded-t-[10px] border border-b-0 border-white/20" />
                    </figure>
                </div>
                <!-- --- -->
                <!-- AI-Recommendations -->
                <div
                    class="col-span-10 flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-4">
                    <div class="px-5 py-9 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-9 xl:py-12">
                        <h5 class="title">AI-Recommendations</h5>
                        <p class="description">User-feed personalization powered by ChatGPT</p>
                    </div>
                    <figure
                        class="aspect-[1.7/1] w-auto mx-5 sm:mx-10 mb-9 md:mx-14 md:mb-20 lg:mx-16 xl:mx-9 xl:-mb-9 2xl:-mb-20 ">
                        <video
                            autoplay
                            muted
                            loop
                            class="block w-full rounded-[10px] object-cover border border-white/20"
                            loading="lazy"
                            playsinline>
                            <source :src="AIRecommendationsVideo" type="video/mp4" />
                        </video>
                    </figure>
                </div>
                <!-- --- -->
                <!-- Platform assistance -->
                <div
                    class="col-span-10 flex flex-col xl:flex-row overflow-hidden rounded-[10px] border border-white/10 bg-white/5 xl:col-span-6">
                    <div class="px-5 py-9 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-9 xl:py-12 xl:flex-[0_0_55%]">
                        <h5 class="title">Platform assistance</h5>
                        <p class="description">
                            Navigation, research, watch history, support, and chat - powered by smart search and find
                            features
                        </p>
                    </div>
                    <figure
                        class="w-full px-5 sm:px-10 mb-9 md:px-14 md:mb-20 lg:px-16 xl:px-0 xl:mb-0 xl:self-end video_one">
                        <img
                            src="/card1.jpg"
                            alt="cardImage"
                            width="445"
                            height="365"
                            class="block w-full aspect-[1.22/1] max-xl:rounded-[10px] xl:rounded-tl-[10px] border border-white/20" />
                    </figure>
                </div>
                <!--  -->
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
h5.title {
    @apply mb-3 text-xl sm:text-3xl font-bold sm:mb-7 md:text-[41px] lg:text-5xl xl:text-3xl;
}
p.description {
    @apply text-sm text-white/80 sm:text-2xl lg:text-4xl md:text-3xl xl:text-xl 2xl:text-2xl;
}

@screen xl {
    .video_one {
    position: relative;
    &::before {
        content: '';
        width: 85%;
        height: 15%;
        border: 1px solid;
        border-color: rgb(255 255 255 / 0.2);
        border-bottom-width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-100%);
        border-top-left-radius: 10px;
        background-color: rgb(255 255 255 / 0.05);
        backdrop-filter: blur(50px)
    }
}
}

</style>
