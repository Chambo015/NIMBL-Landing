<template>
    <section class="text-white text-3xl flex w-screen overflow-hidden -mt-2" :style="{ backgroundColor: bgColor }">
        <div class="whitespace-nowrap inner-line relative py-4 [padding-inline-start:20px]" :style="{ backgroundColor: bgColor }">
            {{ text }}
            {{ text }}
            {{ text }}
        </div>
        <div  class="whitespace-nowrap inner-line relative py-4 ml-1" :style="{ backgroundColor: bgColor }">
            {{ text }}
            {{ text }}
            {{ text }}
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: 'Spring Sale'
    },
    bgColor: {
        type: String,
        default: '#F4E4B6'
    }
})
</script>

<style scoped>

div.inner-line {
    transform: translateX(100%);
    animation: animate 40s -40s linear infinite;
    will-change: transform;
}

div.inner-line:nth-child(2) {
      animation: animate2 40s -20s linear infinite;
    }

@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>