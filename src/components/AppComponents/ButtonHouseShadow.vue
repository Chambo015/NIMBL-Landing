<script setup lang="ts">
import imgSteel from '@/assets/steel.jpg'

</script>

<template>
    <button class="w-[365px] h-[55px] bg-btn-steel rounded-md relative overflow-hidden shadow-inner shadow-[#6E0D99]">
        <div class="absolute -inset-2 mix-blend-overlay z-10" :style="{background: `url(${imgSteel}) `}"></div>
        <div class="absolute border-[7px] border-[#CA12F6] rounded-md blur-sm z-20 border_blur"></div>
        <span class="font-['Rollbox'] font-extrabold uppercase text-lg relative z-50">house of shadows</span>
    </button>
</template>



<style scoped lang="scss">
button {
    span {
        transition: all .3s ease-in-out;
        text-shadow: 0px 1px 1px rgba(255,255,255,0.6);
        letter-spacing: 0.025em;
    }
    .border_blur {
        left: 0.75rem/* 12px */;
        right: 0.75rem/* 12px */;
        top: 0.25rem/* 4px */;
        bottom: 0.25rem;/* 4px */
        transition: all .5s;
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        background: url('/swords.png') center / 100% 100%;
        top: 50%;
        width: 150px;
        height: 150px;
        transform: translateY(-41%) translateX(-40%);
        transition: transform 0.3s ease-in-out;
        z-index: 30;
    }
    &::after {
        content: '';
        position: absolute;
        right: 0;
        background: url('/swords.png') center / 100% 100%;
        top: 50%;
        width: 150px;
        height: 150px;
        transform: translateY(-41%) translateX(40%) scale(-1, 1);
        transition: transform 0.3s ease-in-out;
        z-index: 30;
    }
    &:hover {
        span {
            letter-spacing: 0.065em
        }

        &::before {
            transform: translateY(-41%) translateX(-50%) rotate(10deg) scale(1.3);
        }
        &::after {
            transform: translateY(-41%) translateX(50%) scale(-1.3, 1.3) rotate(10deg);
        }
        .border_blur {
            left: 0rem/* 12px */;
        right: 0rem/* 12px */;
        top: 0rem/* 4px */;
        bottom: 0rem/* 4px */
        }
    }
}
</style>