<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheButtonHero from './TheButtonHero.vue';
import TheLeftCol from './TheLeftCol.vue';
import ThePlayIcon from './ThePlayIcon.vue';
import TheRightCol from './TheRightCol.vue';
import { gsap } from "gsap";


const refTitle = ref<HTMLElement | null>(null)
const refPlatform = ref<HTMLElement | null>(null)
const refLeftCol = ref<HTMLElement | null>(null)
const refRightCol = ref<HTMLElement | null>(null)
const refPlayIcon = ref<HTMLElement | null>(null)
const refButton = ref<HTMLElement | null>(null)

onMounted(() => {
    const tl = gsap.timeline(); 
    tl.fromTo(refTitle.value, { yPercent: 100, autoAlpha: 0}, {delay: 1,  duration: 1, yPercent: 0, autoAlpha: 1})
    // @ts-ignore
    tl.from(refLeftCol.value?.targetEl.children, { duration: 1.5, xPercent: -50, autoAlpha : 0 , stagger: 0.2 , ease: "elastic.out(1, 0.75)", force3D: true })
    // @ts-ignore
    tl.from(refRightCol.value?.targetEl.children, { duration: 1.5, xPercent: 50, autoAlpha: 0 , stagger: 0.2, ease: "elastic.out(1, 0.75)", force3D: true}, '<') // '<' вставляем в начало предыдущей анимации
    tl.to(refPlatform.value, { duration: 2, '--pseudoOpacity': 0,  force3D: true
}, "<0.5") // '<0.5' вставляем в начало предыдущей анимации c задержкой 0,5 сек
    // @ts-ignore
    tl.from(refPlayIcon.value.targetEl, { duration: 1, scale: 0,  ease: "back.out(1.7)"}, "<") // '<0.5' вставляем в начало предыдущей анимации c задержкой 0,5 сек
    // @ts-ignore
    tl.fromTo(refButton.value.targetEl, { autoAlpha: 0}, { duration: 1, autoAlpha: 1}, "<0.5")
})


</script>

<template>
    <section class=" md:pt-[160px] pt-[110px] overflow-hidden relative">
        <div class="container">
            <h1 ref="refTitle" class="font-['Rollbox'] relative z-50 w-[102%] sm:w-full font-extrabold uppercase 2xl:text-[80px] lg:text-7xl md:text-5xl sm:text-[42px] text-3xl text-center leading-tight">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent block">DECENTRALIZED</span>
                SOCIAL PLATFORM
            </h1>
            <div ref="refPlatform"  class="platform xl:left-0 left-[50%] xl:translate-x-0 -translate-x-1/2 xl:w-[95%] w-[170%] flex justify-between items-center xl:px-6 bg-[length:100%] [perspective: 800px] lg:aspect-[1.1975/1] md:aspect-[1.2/1] aspect-[1.18/1]">
                <ThePlayIcon ref="refPlayIcon" class="absolute top-[40%] left-[50%] -translate-x-[50%] " />
                <TheLeftCol ref="refLeftCol" class="hidden xl:block" />
                <TheRightCol ref="refRightCol" class="hidden xl:block" />
                <TheButtonHero ref="refButton" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .platform {
        --pseudoOpacity: 1;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: -7%;
        background-image: url('/platform-min.jpg');
        background-position: center;
        background-repeat: no-repeat;
        mix-blend-mode: lighten;
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            opacity: var(--pseudoOpacity);
            background-color: var(--main-bg);
        }
    }
</style>
