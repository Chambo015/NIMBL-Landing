<script setup lang="ts">
import groupSvg from '@/assets/group-locks.svg'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const UserRef = ref<HTMLElement | null>(null)
const ZKRef = ref<HTMLElement | null>(null)

onMounted(() => {

    const timeline = gsap.timeline()
    timeline.to(path.value, { duration: 1, strokeDashoffset: 0 })
})
</script>

<template>
    <section class="min-h-screen py-[calc(theme(spacing.index)*4)]">
        <div class="container relative">
            <h2 class="mb-[calc(theme(spacing.index)*4)] font-['Rollbox'] text-6xl font-extrabold">
                <span class="bg-hero-text-gradient bg-clip-text text-transparent">TRULY PRIVATE, DECENTRALIZED</span>
                USER DATA ON NIMBL
            </h2>
            <div class="flex items-center justify-center gap-4 isolate mb-16">
                <div ref="UserRef" class="relative mr-auto aside_section">
                    <img
                        src="/user-placeholder.png"
                        alt="user"
                        width="200"
                        height="200"
                        class="w-[240px] h-[240px] rounded-full object-cover z-10 relative" />
                    <span class="-top-3 z-20">Interests</span>
                    <span class="-right-[52%] top-5 -z-10">Cookies</span>
                    <span class="-right-[20%] bottom-3 z-20">History</span>
                    <span class="-left-[5%] -bottom-[32%] z-20">Chats</span>
                    <span class="-left-[35%] bottom-[15%] -z-10">Data</span>
                </div>
                <svg width="224" height="52" viewBox="0 0 224 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M223.061 13.0607C223.646 12.4749 223.646 11.5251 223.061 10.9393L213.515 1.3934C212.929 0.807611 211.979 0.807611 211.393 1.3934C210.808 1.97919 210.808 2.92893 211.393 3.51472L219.879 12L211.393 20.4853C210.808 21.0711 210.808 22.0208 211.393 22.6066C211.979 23.1924 212.929 23.1924 213.515 22.6066L223.061 13.0607ZM2 13.5H222V10.5H2V13.5Z"
                        fill="white" />
                    <path
                        d="M0.939346 38.9393C0.353546 39.5251 0.353546 40.4749 0.939346 41.0607L10.4853 50.6066C11.0711 51.1924 12.0208 51.1924 12.6066 50.6066C13.1924 50.0208 13.1924 49.0711 12.6066 48.4853L4.12132 40L12.6066 31.5147C13.1924 30.9289 13.1924 29.9792 12.6066 29.3934C12.0208 28.8076 11.0711 28.8076 10.4853 29.3934L0.939346 38.9393ZM222 38.5L2 38.5V41.5L222 41.5V38.5Z"
                        fill="white" />
                </svg>
                <img ref="ZKRef" :src="groupSvg" class="w-[370px] h-[400px] object-cover" />
                <svg width="219" height="202" viewBox="0 0 219 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M218.428 125.53C218.778 124.779 218.453 123.887 217.702 123.537L205.467 117.831C204.716 117.481 203.824 117.806 203.474 118.557C203.124 119.308 203.448 120.2 204.199 120.55L215.075 125.622L210.004 136.497C209.653 137.248 209.978 138.141 210.729 138.491C211.48 138.841 212.372 138.516 212.722 137.765L218.428 125.53ZM10.849 201.55L217.581 126.306L216.555 123.487L9.82291 198.731L10.849 201.55Z"
                        fill="white" />
                    <path
                        d="M208.366 78.6039C209.117 78.2538 209.442 77.3613 209.092 76.6105L203.386 64.3753C203.036 63.6245 202.144 63.2997 201.393 63.6498C200.642 63.9999 200.317 64.8924 200.668 65.6432L205.739 76.5189L194.863 81.5903C194.112 81.9404 193.788 82.8329 194.138 83.5837C194.488 84.3345 195.38 84.6593 196.131 84.3092L208.366 78.6039ZM0.48697 3.40954L207.219 78.654L208.245 75.8349L1.51303 0.590461L0.48697 3.40954Z"
                        fill="white" />
                    <path
                        d="M8.64254 173.61C8.29242 174.361 8.61726 175.254 9.36808 175.604L21.6032 181.309C22.354 181.659 23.2465 181.335 23.5966 180.584C23.9467 179.833 23.6219 178.94 22.8711 178.59L11.9954 173.519L17.0668 162.643C17.4169 161.892 17.0921 161 16.3413 160.65C15.5905 160.3 14.698 160.625 14.3479 161.375L8.64254 173.61ZM216.221 97.5905L9.48897 172.835L10.515 175.654L217.247 100.41L216.221 97.5905Z"
                        fill="white" />
                </svg>
                <div class="relative ml-auto aside_section">
                    <div
                        class="w-[290px] h-[180px] bg-[linear-gradient(257.96deg,#B9C2FE_0.22%,#444654_110.98%)] rounded-[13px] font-['Ethnocentric'] flex justify-center items-center text-5xl">
                        NIMBL
                    </div>
                    <span class="-top-[45%] -left-[20%] z-20">Content</span>
                    <span class="-right-[20%] -top-[27%] -z-10">Media</span>
                    <span class="-right-[18%] -bottom-[20%] z-20">NFT</span>
                    <span class="left-[15%] -bottom-[60%] z-20">GPT</span>
                    <span class="-left-[25%] -bottom-[15%] z-20">Video</span>
                </div>
            </div>
            <div class="flex justify-between">
                <p class="text-[40px] font-extrabold w-[240px] text-center">User</p>
                <p class="text-[#26BA96] text-[48px] font-extrabold">ZK Proofs</p>
                <p class="text-[40px] font-extrabold w-[290px] text-center">Experience</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.aside_section {
    span {
        position: absolute;
        font-size: 36px;
        background: #22202F;
        border-radius: 8px;
        padding: 7px 8px;
    }
}
</style>
