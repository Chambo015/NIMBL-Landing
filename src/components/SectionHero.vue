<script setup lang="ts">
import TheInfiniteTicker from './TheInfiniteTicker.vue';

</script>

<template>
  <section class="min-h-screen relative hero pt-[170px] overflow-hidden">
    <div class="container">
      <h1 class="font-['Rollbox'] font-extrabold uppercase text-6xl text-center leading-tight mb-7">
        <span class="bg-hero-text-gradient bg-clip-text text-transparent">DECENTRALIZED</span>
        SOCIAL PLATFORM POWERED BY
        <span class="text-[#74AA9C] before:content-[url('/gpt.png')] whitespace-nowrap before:mr-1"
          >CHATGPT</span
        >
      </h1>
      <p class="text-center text-2xl text-white/80 max-w-[800px] mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula eget libero et
        lacinia.
      </p>
    </div>
    <div
      class="bg-[url('/hero.png')] bg-no-repeat bg-[length:100%_auto] bg-center w-full h-[41vw] flex justify-center items-center"
    >
      <div
        style="clip-path: url(#my-clip-path)"
        class="w-[997px] h-[206px] z-40 bg-white/5 backdrop-blur-2xl flex justify-center items-center rounded-t-[10px_20px] "
      >
        <div class="flex gap-16">
            <button class="bg-btn-bg bg-clip-border border-transparent text-3xl py-4 px-9 min-w-[329px]">Go to prototype</button>
            <button class="border text-3xl py-4 px-9 min-w-[329px]">Lightpaper</button>
        </div>
      </div>
    </div>
    <TheInfiniteTicker bg-color="#202020" text="video • blockchain • nft • ai • web3 • stream • community • challenges • education •"/>
  </section>
  <svg width="0" height="0">
    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0,0 H1 L0.931,1 H0.671 L0.652,0.958 H0.351 L0.332,1 H0.072 L0,0"></path>
    </clipPath>
  </svg>
</template>

<style scoped lang="scss">
.hero {
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 580px;
    background: url('/left-hero.png') center no-repeat;
    mix-blend-mode: screen;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 580px;
    background: url('/left-hero.png') center no-repeat;
    transform: scale(-1, 1);
    mix-blend-mode: screen;
  }
}
</style>
