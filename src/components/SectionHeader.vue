<script setup lang="ts">
import { ref } from 'vue';

const balance = ref<number>(0.015)
</script>

<template>
    <header class="bg-[rgba(32,32,32,0.4)] backdrop-blur fixed top-0 inset-x-0 z-50">
        <div class="container flex items-center">
            <img src="/logo.png" width="67" height="67" alt="Logo" class="mr-4">
            <h3 class="font-[Ethnocentric] text-4xl bg-[linear-gradient(92.92deg,#3F82E7_0.78%,#AF69F5_50.14%,#4FCEF7_93.69%)] text-transparent bg-clip-text">NIMBL</h3>
            <span @click="balance = 0.2" class="text-2xl mr-14 ml-auto">${{balance}}</span>
            <button class="bg-btn-bg text-3xl py-2 px-14">Token Airdrop</button>
        </div>
    </header>
</template>



<style scoped>

</style>