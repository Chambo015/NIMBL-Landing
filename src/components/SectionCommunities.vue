<template>
    <section class="relative py-[calc(theme(spacing.index)*4)] overflow-x-hidden">
        <div class="container h-[500px] py-[100px] communities">
            <h2 class="font-['Rollbox'] font-extrabold uppercase text-6xl text-center leading-tight  bg-hero-text-gradient bg-clip-text text-transparent relative">Communities</h2>
            <p class="text-center text-2xl mt-8">Nimbl Communities - enables community building</p>
            <div class="flex wrap_buttons gap-8 mt-[70px] ">
                <div class="bg-white/5 backdrop-blur-2xl  py-9 px-7 text-2xl text-center">Free communities</div>
                <div class="bg-white/5 backdrop-blur-2xl  py-9 px-7 text-2xl text-center">Token gated communities</div>
                <div class="bg-white/5 backdrop-blur-2xl  py-9 px-7 text-2xl text-center">Subscription communities</div>
                <div class="bg-white/5 backdrop-blur-2xl  py-9 px-7 text-2xl text-center">Alpha-channels</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.communities {
    position: relative;
    isolation: isolate;

    background: url('/users-bg.png') center / 100% auto;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 20%;
        left: 0;
        background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0.4990371148459384) 37%, rgba(17,17,17,0) 100%);
        z-index: -0;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
        left: 0;
        background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0.4990371148459384) 37%, rgba(17,17,17,0) 100%);
        z-index: -0;
    }
}
.wrap_buttons > div {
    flex: 1 0 ;
    overflow: hidden;
    cursor: pointer;
    max-width: 376px;
    white-space: nowrap;
    border: 1px solid;
    border-image-slice: 1;
border-image-source: linear-gradient(249.15deg, rgba(184, 184, 184, 0.56) 3.23%, rgba(255, 255, 255, 0) 56.61%, rgba(166, 166, 166, 0.56) 97.26%);
}




</style>