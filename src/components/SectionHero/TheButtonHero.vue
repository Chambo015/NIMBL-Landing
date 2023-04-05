<script setup lang="ts"></script>

<template>
    <button
        class="w-[37%] h-[130px] bg-white/10 flex justify-center items-center absolute backdrop-blur-3xl bottom-[6%] left-[31.8%] border-white/10 border-t rounded-lg p-3 overflow-hidden">
        <span class="font-['Rollbox'] font-extrabold uppercase text-2xl relative z-50">open V0.04 - prototype</span>
    </button>
</template>

<style scoped lang="scss">
button {
    will-change: transform;
    transform: perspective(400px) rotateX(8deg); /* Поворачиваем относительно оси X */
    transform-origin: 50% 80%;
    box-shadow: inset 0px -12px 2px 0px rgb(17 17 28 / 70%), 7px 7px 20px 0px rgba(0, 0, 0, 0.5),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s linear;
    outline: none;
    &:active {
        height: 120px;
        box-shadow: inset 0px -2px 1px 0px rgb(17 17 28 / 59%), 1px 1px 20px 0px rgba(0, 0, 0, 0.5),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        transform: perspective(400px) rotateX(8deg) translateY(3px);
        span {
            text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.75);
        }
    }
}
span {
    transition: all 0.2s ease-in-out;
    text-shadow: 0px 2px 0px rgba(255, 255, 255, 0.75);
    letter-spacing: 0.025em;
}
</style>
