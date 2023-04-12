<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ButtonHouseShadow from './AppComponents/ButtonHouseShadow.vue';

const header =  ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.from(header.value, {
    delay: 0.5,
    duration: 1,
    y: -100,
    autoAlpha: 0,
    ease: 'power3.out',
  });
  
})
</script>

<template>
    <header ref="header" class="bg-[rgba(32,32,32,0.4)] backdrop-blur fixed top-0 inset-x-0 z-[99999]">
        <div class="container flex items-center py-1">
            <img src="/logo.png" width="67" height="67" alt="Logo" class="md:h-[67px] md:w-[67px] sm:h-[50px] sm:w-[50px] h-[25px] w-[25px] md:mr-4 mr-2">
            <h3 class="font-[Ethnocentric] md:text-4xl sm:text-3xl text-lg bg-[linear-gradient(92.92deg,#3F82E7_0.78%,#AF69F5_50.14%,#4FCEF7_93.69%)] text-transparent bg-clip-text">NIMBL</h3>
            <ButtonHouseShadow class="ml-auto" />
        </div>
    </header>
</template>