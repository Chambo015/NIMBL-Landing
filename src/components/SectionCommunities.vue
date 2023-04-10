<script setup lang="ts"></script>

<template>
    <section
        class="relative overflow-x-hidden before:bg-[url('/users-bg-min.png')] before:bg-[length:120%] before:bg-[50%_0%] lg:before:bg-[url('/users-bg-large.png')] lg:before:bg-center"
        id="communities">
        <div class="container relative isolate py-[100px]">
            <h2
                class="relative bg-communities-text-gradient bg-clip-text text-center font-['Rollbox'] text-3xl font-extrabold uppercase leading-tight text-transparent sm:text-6xl">
                Communities
            </h2>
            <p class="mt-8 text-center font-medium sm:text-2xl">
                Enabling a platform for creators to build communities
            </p>
            <div
                class="wrap_buttons sm:mt-[70px] mt-14 flex flex-wrap justify-between gap-8 [&>div]:flex-[0_0_100%] [&>div]:lg:flex-[0_0_45%] [&>div]:2xl:w-[376px] [&>div]:3xl:flex-[0_0_376px]">
                <div>Free communities</div>
                <div>Token gated communities</div>
                <div>Subscription communities</div>
                <div>Alpha-channels</div>
            </div>
        </div>
    </section>
</template>



<style scoped lang="scss">
section {
    background-color: #22202f;
    background-image: radial-gradient(circle at 10% 100%, rgba(182, 22, 166, 0.2) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 100% 50%, rgba(69, 79, 228, 0.2) 0px, rgba(69, 78, 228, 0) 500px),
        radial-gradient(circle at 50% 50%, rgba(209, 114, 200, 0.1) 0px, rgba(234, 0, 213, 0) 500px),
        radial-gradient(circle at 10% -30%, rgba(112, 119, 229, 0.4) 0px, rgba(112, 119, 229, 0) 500px);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        opacity: 0.2;
    }
}

.wrap_buttons > div {
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid rgba(166, 166, 166, 0.56);
    border-radius: 5px;
    @apply bg-white/5 sm:py-9 py-6 px-7 text-center lg:text-2xl sm:text-3xl text-lg backdrop-blur-2xl
}
</style>
