<template>
    <section class="relative overflow-x-hidden" id="communities">
        <div class="container h-[500px] py-[100px] communities">
            <h2
                class="font-['Rollbox'] font-extrabold uppercase text-6xl text-center leading-tight bg-communities-text-gradient bg-clip-text text-transparent relative">
                Communities
            </h2>
            <p class="text-center text-2xl mt-8">Nimbl Communities - enables community building</p>
            <div class="flex wrap_buttons gap-8 mt-[70px]">
                <div class="bg-white/5 backdrop-blur-2xl py-9 px-7 text-2xl text-center">Free communities</div>
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
    background-image: radial-gradient(circle at 10% 100%, rgba(182, 22, 166, 0.2) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 100% 50%, rgba(69, 79, 228, 0.2) 0px, rgba(69, 78, 228, 0) 500px),
        radial-gradient(circle at 50% 50%, rgba(209, 114, 200, 0.1) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 10% -30%, rgba(112, 119, 229, 0.4) 0px, rgba(112, 119, 229, 0) 500px);
}
.communities {
    position: relative;
    isolation: isolate;
    

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url('/users-bg.png') center / 100% auto no-repeat;
        width: 100%;
        height: 100%;
        opacity: .5;
    }
}
.wrap_buttons > div {
    flex: 1 0;
    overflow: hidden;
    cursor: pointer;
    max-width: 376px;
    white-space: nowrap;
    border: 1px solid rgba(166, 166, 166, 0.56);
    border-radius: 5px;
}
</style>
