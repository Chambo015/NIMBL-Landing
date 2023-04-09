<script setup lang="ts">
import IconBgHexagon from '../Icons/IconBgHexagon.vue';
import IconClock from '../Icons/IconClock.vue';
import IconDrop from '../Icons/IconDrop.vue';
import IconNetwork from '../Icons/IconNetwork.vue';
import IconStackCoins from '../Icons/IconStackCoins.vue'
</script>

<template>
  <section
    class="min-h-screen bg-[url('/bg-about-collection.png')] bg-no-repeat bg-cover flex items-center"
  >
    <div class="container flex justify-end">
      <div
        class="w-[930px] h-[767px] z-40 flex items-center justify-center relative bg-white/5 backdrop-blur-md"
        style="clip-path: url(#era)"
      >
       <div class="flex flex-col px-[80px] justify-center">
          <h2 class="font-['Rollbox'] text-5xl font-extrabold mb-12"><span class="bg-hero-text-gradient bg-clip-text text-transparent">ABOUT</span> COLLECTION</h2>
          <div>
              <div class="flex py-5 border-b border-[#b8b8b826]">
                  <div class="flex-grow max-w-[50%] flex gap-5 items-center">
                      <IconBgHexagon>
                          <IconDrop />
                      </IconBgHexagon>
                      <span class="text-2xl leading-none">Supply: 3600</span>
                  </div>
                  <div class="flex-grow max-w-[50%] flex gap-5 items-center">
                      <IconBgHexagon>
                          <IconNetwork />
                      </IconBgHexagon>
                      <span class="text-2xl leading-none">Network: ETH MAINNET</span>
                  </div>
              </div>
              <div class="flex py-5 border-b border-[#b8b8b826]">
                  <div class="flex-grow max-w-[50%] flex gap-5 items-center">
                      <IconBgHexagon>
                          <IconStackCoins />
                      </IconBgHexagon>
                      <span class="text-2xl leading-none">Public: 0.12 ETH</span>
                  </div>
                  <div class="flex-grow max-w-[50%] flex gap-5 items-center">
                      <IconBgHexagon>
                          <IconDrop />
                      </IconBgHexagon>
                      <span class="text-2xl leading-none">Private sale: 0.06 ETH</span>
                  </div>
              </div>
              <div class="flex py-5">
                  <div class="flex-grow flex gap-5 items-center">
                      <IconBgHexagon>
                          <IconClock />
                      </IconBgHexagon>
                      <span class="text-2xl leading-none">Mint date: 4th May, 2023</span>
                  </div>
              </div>
          </div>
          <div class="flex gap-16 mt-10">
              <button class="bg-btn-bg bg-clip-border border-transparent text-3xl py-4 px-9">Participate in WL raffle</button>
              <button class="border text-3xl py-4 px-9">Get notified</button>
          </div>
       </div>
        <svg 
          width="930"
          height="767"
          viewBox="0 0 930 767"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-x-0 bottom-0 top-[1px] w-full h-[calc(100%-2px)] pointer-events-none"
        >
          <path
            d="M10 0.5H227.543C230.51 0.5 233.307 1.88658 235.104 4.24831L252.351 26.9207C254.336 29.531 257.428 31.0636 260.707 31.0636H920C925.247 31.0636 929.5 35.3169 929.5 40.5636V757C929.5 762.247 925.247 766.5 920 766.5H702.311C699.422 766.5 696.691 765.186 694.888 762.929L677.643 741.339C675.651 738.844 672.632 737.392 669.439 737.392H10C4.7533 737.392 0.5 733.139 0.5 727.892V10C0.5 4.7533 4.7533 0.5 10 0.5Z"
            stroke="url(#paint0_linear_264_240)"
            stroke-opacity="0.56"
            fill="null"
            fill-opacity=".05"
          />

          <defs>
            <linearGradient
              id="paint0_linear_264_240"
              x1="888.535"
              y1="-6.825e-05"
              x2="-106.709"
              y2="459.651"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B8B8B8" />
              <stop offset="0.567708" stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="#A6A6A6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
  <!-- ClipPath svg -->
  <svg width="0"  height="0" viewBox="0 0 930 767">
    <clipPath id="era">
      <path
        d="M10 0.5H227.543C230.51 0.5 233.307 1.88658 235.104 4.24831L252.351 26.9207C254.336 29.531 257.428 31.0636 260.707 31.0636H920C925.247 31.0636 929.5 35.3169 929.5 40.5636V757C929.5 762.247 925.247 766.5 920 766.5H702.311C699.422 766.5 696.691 765.186 694.888 762.929L677.643 741.339C675.651 738.844 672.632 737.392 669.439 737.392H10C4.7533 737.392 0.5 733.139 0.5 727.892V10C0.5 4.7533 4.7533 0.5 10 0.5Z"/>
    </clipPath>
  </svg>
  <!--  -->
</template>
