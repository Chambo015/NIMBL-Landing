<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonHouseShadow from './AppComponents/ButtonHouseShadow.vue';

const footer =  ref<HTMLElement | null>(null);


</script>

<template>
    <footer ref="footer" class="bg-[rgba(32,32,32,0.4)] backdrop-blur">
        <div class="container flex items-center py-16 justify-between gap-4">
            <figure class="flex items-center flex-shrink-0">
                <img src="/logo.png" width="67" height="67" alt="Logo" class="mr-4">
                <h3 class="font-[Ethnocentric] text-4xl bg-[linear-gradient(92.92deg,#3F82E7_0.78%,#AF69F5_50.14%,#4FCEF7_93.69%)] text-transparent bg-clip-text">NIMBL</h3><p class="ml-5 text-lg whitespace-nowrap"> <span class="mr-4">|</span> WEB3 platform</p>
            </figure>
            <div class="text-white/50 text-lg mx-auto flex gap-8 flex-wrap hover:[&>a]:text-white">
                <a href="#tokenized">Creator — Tokenized</a>
                <a href="#communities">Communities</a>
                <a href="#AIAssisted">AI assisted social</a>
            </div>
            <ButtonHouseShadow class="ml-auto" />
        </div>
    </footer>
</template>



<style scoped>

</style>