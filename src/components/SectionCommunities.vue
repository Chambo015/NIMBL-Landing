<template>
    <section class="relative overflow-x-hidden lg:before:bg-center before:bg-[50%_100%]" id="communities">
        <div class="container py-[100px] relative isolate">
            <h2
                class="font-['Rollbox'] font-extrabold uppercase text-6xl text-center leading-tight bg-communities-text-gradient bg-clip-text text-transparent relative">
                Communities
            </h2>
            <p class="text-center text-2xl mt-8">Nimbl Communities - enables community building</p>
            <div class="flex wrap_buttons  justify-between gap-8  mt-[70px] flex-wrap [&>div]:2xl:w-[376px] [&>div]:3xl:flex-[0_0_376px] [&>div]:lg:flex-[0_0_45%] [&>div]:flex-[0_0_100%]">
                <div class="bg-white/5 backdrop-blur-2xl py-9 px-7 text-2xl text-center ">Free communities</div>
                <div class="bg-white/5 backdrop-blur-2xl py-9 px-7 text-2xl text-center">Token gated communities</div>
                <div class="bg-white/5 backdrop-blur-2xl py-9 px-7 text-2xl text-center">Subscription communities</div>
                <div class="bg-white/5 backdrop-blur-2xl py-9 px-7 text-2xl text-center">Alpha-channels</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
    background-color: #22202f;
    background-image:  radial-gradient(circle at 10% 100%, rgba(182, 22, 166, 0.2) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 100% 50%, rgba(69, 79, 228, 0.2) 0px, rgba(69, 78, 228, 0) 500px),
        radial-gradient(circle at 50% 50%, rgba(209, 114, 200, 0.1) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 10% -30%, rgba(112, 119, 229, 0.4) 0px, rgba(112, 119, 229, 0) 500px);

        &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('/users-bg-large.png');
        background-repeat: no-repeat;
        background-size: 120%;
        width: 100%;
        height: 100%;
        opacity: .2;
    }
}

.wrap_buttons > div {
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid rgba(166, 166, 166, 0.56);
    border-radius: 5px;
}
</style>
