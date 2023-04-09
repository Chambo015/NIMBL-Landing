<script setup lang="ts">

</script>

<template>
    <section class="min-h-screen overflow-hidden flex flex-col justify-center py-20">
        <h2 class="font-['Rollbox'] text-7xl container font-extrabold mb-14">NIMBL <span class="bg-hero-text-gradient bg-clip-text text-transparent">NFT COLLECTION</span></h2>

        <div class="flex gap-[45px] -translate-x-[176px] mb-[45px]">
            <template v-for="card in 10" :key="card">
                <div class="bg-[url('/image1.jpg')] flex-shrink-0 w-[330px] h-[330px] rounded-[10px] opacity-70 relative bg-no-repeat bg-cover bg-center before:absolute before:inset-0 before:bg-[url('/RRR.jpg')] before:opacity-0 hover:before:opacity-100 before:duration-500 hover:opacity-100 duration-300 before:transition-opacity overflow-hidden cursor-pointer transition-all hover:shadow-[0px_0px_37px_1px_#D172C8] "></div>
            </template>
        </div>
        <div class="flex gap-[45px] -translate-x-12">
            <template v-for="card in 10" :key="card">
                <div class="bg-[url('/image1.jpg')] flex-shrink-0 w-[330px] h-[330px] rounded-[10px] opacity-70 relative bg-no-repeat bg-cover bg-center before:absolute before:inset-0 before:bg-[url('/RRR.jpg')] before:opacity-0 hover:before:opacity-100 before:duration-500 hover:opacity-100 duration-300 before:transition-opacity overflow-hidden cursor-pointer transition-all hover:shadow-[0px_0px_37px_1px_#D172C8] "></div>
            </template>
        </div>
    </section>
</template>


<style scoped>

</style>