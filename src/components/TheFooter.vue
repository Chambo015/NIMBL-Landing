<script setup lang="ts">
import { ref } from 'vue'
import ButtonHouseShadow from './AppComponents/ButtonHouseShadow.vue'

const footer = ref<HTMLElement | null>(null)
</script>

<template>
    <footer ref="footer" class="bg-[rgba(32,32,32,0.4)] backdrop-blur">
        <div class="container flex items-center xl:justify-between justify-center gap-4 xl:py-16 py-10">
            <figure class="flex flex-shrink-0 items-center">
                <img src="/logo.png" width="67" height="67" alt="Logo" class="xl:mr-4 xl:opacity-100 opacity-25 aspect-square xl:w-[67px] w-[77px]" />
                <h3
                    class="bg-[linear-gradient(92.92deg,#3F82E7_0.78%,#AF69F5_50.14%,#4FCEF7_93.69%)] hidden xl:block bg-clip-text font-[Ethnocentric] text-4xl text-transparent">
                    NIMBL
                </h3>
                <p class="ml-5 whitespace-nowrap text-lg hidden xl:block"><span class="mr-4">|</span> WEB3 platform</p>
            </figure>
            <div class="mx-auto hidden flex-wrap gap-8 text-lg text-white/50 2xl:flex hover:[&>a]:text-white">
                <a href="#tokenized">Creator — Tokenized</a>
                <a href="#communities">Communities</a>
                <a href="#AIAssisted">AI assisted social</a>
            </div>
            <ButtonHouseShadow class="ml-auto hidden xl:inline-block" />
        </div>
    </footer>
</template>

<style scoped></style>
