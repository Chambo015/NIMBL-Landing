<template>
    <div class="token-card">
        <div class="token-card__up">
            <div class="token-card__img" :style="{backgroundImage: `url(${img})`}">
                <div class="play-icon">
                    <svg viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2228 12.9742L0.998047 0.216797V25.7315L19.2228 12.9742Z" fill="url(#paint0_linear_1113_6719)" />
                        <defs>
                            <linearGradient id="paint0_linear_1113_6719" x1="0.998047" y1="12.9741" x2="19.7929" y2="13.0296"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#01EAF2" />
                                <stop offset="0.553811" stop-color="#3B65FF" />
                                <stop offset="1" stop-color="#D70BDA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="token-card__wrap-content">
                <svg class="bg-blobs" viewBox="0 0 322 498" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M82.2503 20.587C108.738 27.0131 138.975 38.4916 150.236 72.0756C160.943 104.011 139.685 136.839 132.554 170.615C126.653 198.56 127.112 228.748 112.664 250.014C94.3456 276.976 71.034 305.027 44.4206 300.337C17.2018 295.541 -2.82889 261.749 -14.504 227.605C-24.5934 198.099 -16.1526 165.785 -12.6139 133.542C-8.85926 99.3315 -12.6271 59.8298 6.39549 37.1796C26.517 13.2209 56.041 14.2286 82.2503 20.587Z"
                        fill="url(#paint0_linear_1113_6695)" fill-opacity="0.5" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M-22.4436 388.177C-12.4407 420.264 15.2088 429.909 38.1727 444.841C57.1026 457.149 76.2113 471.704 96.6842 465.636C117.35 459.511 129.415 433.882 144.38 413.363C167.162 382.125 205.874 361.087 205.173 316.878C204.453 271.459 172.65 233.946 141.306 219.482C113.908 206.838 88.9117 240.153 60.9729 250.332C34.9514 259.812 2.81321 247.764 -14.3984 276.206C-32.5414 306.188 -33.616 352.339 -22.4436 388.177Z"
                        fill="url(#paint1_linear_1113_6695)" fill-opacity="0.5" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M240.657 254.913C267.74 255.585 300.815 280.129 318.806 252.429C336.866 224.623 317.236 181.947 311.702 145.53C307.827 120.034 303.661 95.9111 291.905 75.4293C278.093 51.3672 262.846 25.5911 240.657 21.761C216.446 17.5819 188.56 27.7946 174.609 55.1825C161.511 80.8958 179.117 114.258 177.611 145.53C175.871 181.65 148.907 220.197 165.291 248.623C181.491 276.728 214.497 254.265 240.657 254.913Z"
                        fill="url(#paint2_linear_1113_6695)" fill-opacity="0.5" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M331.119 384.005C326.188 415.575 305.67 442.985 282.593 449.087C260.842 454.839 243.991 426.846 224.58 412.176C206.768 398.716 179.89 395.377 175.453 368.121C171.028 340.934 198.096 325.291 206.291 299.814C215.251 271.957 204.813 229.506 224.521 215.565C244.09 201.722 267.548 225.145 284.454 244.522C297.785 259.801 297.462 285.804 304.712 307.476C313.634 334.142 335.601 355.314 331.119 384.005Z"
                        fill="url(#paint3_linear_1113_6695)" fill-opacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_1113_6695" x1="311.296" y1="328.207" x2="-150.829" y2="176.382"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EA00D5" />
                            <stop offset="0.537233" stop-color="#3D5EFF" />
                            <stop offset="1" stop-color="#00EAF2" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1113_6695" x1="216.695" y1="178.256" x2="-85.9992" y2="275.194"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EA00D5" />
                            <stop offset="0.449872" stop-color="#3D5EFF" />
                            <stop offset="1" stop-color="#00EAF2" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1113_6695" x1="357.111" y1="92.2564" x2="-72.5731" y2="262.736"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EA00D5" />
                            <stop offset="0.493252" stop-color="#3D5EFF" />
                            <stop offset="1" stop-color="#00EAF2" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1113_6695" x1="-37.3326" y1="94.6631" x2="323.333" y2="261.732"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3D5EFF" />
                            <stop offset="0.501262" stop-color="#00EAF2" />
                            <stop offset="1" stop-color="#EA00D5" />
                        </linearGradient>
                    </defs>
                </svg>

                <div class="card-content">
                    <h4 class="card-title">@BlueWard2</h4>
                    <div class="card-stats">
                        <div class="card-stats__item"><span class="value"><svg width="20" height="20" style="display: inline;" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.62891 27.3835V24.1719C1.62891 23.3746 1.83391 22.6514 2.24391 22.0023C2.65391 21.3531 3.22335 20.8691 3.95224 20.5502C5.61502 19.8213 7.11266 19.2974 8.44516 18.9785C9.77766 18.6596 11.15 18.5002 12.5622 18.5002C13.9745 18.5002 15.3411 18.6596 16.6622 18.9785C17.9834 19.2974 19.4753 19.8213 21.1381 20.5502C21.867 20.8691 22.4421 21.3531 22.8635 22.0023C23.2849 22.6514 23.4956 23.3746 23.4956 24.1719V27.3835H1.62891ZM25.5456 27.3835V24.1719C25.5456 22.7369 25.1811 21.5581 24.4522 20.6356C23.7234 19.7131 22.7667 18.9671 21.5822 18.3977C23.1539 18.5799 24.6345 18.8475 26.0239 19.2006C27.4134 19.5537 28.5409 19.958 29.4064 20.4135C30.1581 20.8463 30.7503 21.3816 31.1831 22.0194C31.6159 22.6571 31.8322 23.3746 31.8322 24.1719V27.3835H25.5456ZM12.5622 16.416C11.0589 16.416 9.82891 15.9377 8.87224 14.981C7.91557 14.0244 7.43724 12.7944 7.43724 11.291C7.43724 9.78768 7.91557 8.55768 8.87224 7.60102C9.82891 6.64435 11.0589 6.16602 12.5622 6.16602C14.0656 6.16602 15.2956 6.64435 16.2522 7.60102C17.2089 8.55768 17.6872 9.78768 17.6872 11.291C17.6872 12.7944 17.2089 14.0244 16.2522 14.981C15.2956 15.9377 14.0656 16.416 12.5622 16.416ZM24.8622 11.291C24.8622 12.7944 24.3839 14.0244 23.4272 14.981C22.4706 15.9377 21.2406 16.416 19.7372 16.416C19.4867 16.416 19.2077 16.3989 18.9002 16.3648C18.5927 16.3306 18.3136 16.268 18.0631 16.1769C18.6097 15.6074 19.0254 14.907 19.3102 14.0756C19.5949 13.2442 19.7372 12.316 19.7372 11.291C19.7372 10.266 19.5949 9.3606 19.3102 8.57477C19.0254 7.78893 18.6097 7.06574 18.0631 6.40518C18.3136 6.33685 18.5927 6.2799 18.9002 6.23435C19.2077 6.18879 19.4867 6.16602 19.7372 6.16602C21.2406 6.16602 22.4706 6.64435 23.4272 7.60102C24.3839 8.55768 24.8622 9.78768 24.8622 11.291ZM3.67891 25.3335H21.4456V24.1719C21.4456 23.8074 21.3374 23.4544 21.121 23.1127C20.9046 22.771 20.637 22.5319 20.3181 22.3952C18.6781 21.6663 17.3 21.1766 16.1839 20.926C15.0678 20.6755 13.8606 20.5502 12.5622 20.5502C11.2639 20.5502 10.051 20.6755 8.92349 20.926C7.79599 21.1766 6.41224 21.6663 4.77224 22.3952C4.45335 22.5319 4.19141 22.771 3.98641 23.1127C3.78141 23.4544 3.67891 23.8074 3.67891 24.1719V25.3335ZM12.5622 14.366C13.4506 14.366 14.1852 14.0756 14.766 13.4948C15.3468 12.9139 15.6372 12.1794 15.6372 11.291C15.6372 10.4027 15.3468 9.6681 14.766 9.08727C14.1852 8.50643 13.4506 8.21602 12.5622 8.21602C11.6739 8.21602 10.9393 8.50643 10.3585 9.08727C9.77766 9.6681 9.48724 10.4027 9.48724 11.291C9.48724 12.1794 9.77766 12.9139 10.3585 13.4948C10.9393 14.0756 11.6739 14.366 12.5622 14.366Z" fill="white"/>
</svg>
 500K</span><span
                                class="key">members</span></div>
                        <div class="card-stats__item"><span class="value">134 NMBL</span><span class="key">floor price</span></div>
                    </div>
                    <p class="card-text">Brief description of the channel - dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard</p>
                    <p class="level_number">10</p>
                    <div class="card-time">CREATOR LEVEL</div>
                </div>
            </div>
        </div>
        <div class="token-card__down"></div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    img: {
        type: String,
        default: './token-bg1.png'
    }
})
</script>

<style lang="scss" scoped>
.token-card {
    height: 750px;
    aspect-ratio: 1 / 1.7;
    position: relative;
    filter: drop-shadow(-5px 0px 15px rgba(105, 0, 255, 0.6));

    .token-card__up {
        position: absolute;
        clip-path: circle(100% at 50% 85%);
        left: 0;
        right: 0;
        top: 0;
        bottom: 10%;
        background: linear-gradient(180deg, #01EAF2 -43.56%, #3B65FF 75.25%, #D70BDA 205.59%);
        z-index: 2;
        backdrop-filter: blur(20px);


        .token-card__img {
            position: absolute;
            clip-path: circle(100% at 50% 85%);
            right: 1px;
            left: 1px;
            top: 1px;
            bottom: 0%;
            background-repeat: no-repeat;
            background-size: 120%;
            background-position: 50% 0%;
            z-index: 3;
            overflow: hidden;

            .play-icon {
                position: absolute;
                left: 50%;
                top: 15%;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.4);
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(2px);
                transform: translateX(-50%);
                cursor: pointer;

                svg {
                    width: 17px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-40%, -50%);
                }
            }

        }
    }
    .token-card__down {
        position: absolute;
        clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
        left: 0;
        right: 0;
        top: 10%;
        bottom: 0;
        background: linear-gradient(180deg, #01EAF2 -43.56%, #3B65FF 75.25%, #D70BDA 205.59%);
        z-index: 1;
        backdrop-filter: blur(20px);
    }

    .token-card__wrap-content {
        position: absolute;
        left: 1px;
        bottom: 0;
        right: 1px;
        transform: translateY(14%);
        top: 23%;
        background: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        clip-path: polygon(0 10%, 50% 0, 101% 10%, 100% 87%, 50% 100%, 0 87%);
        z-index: 4;
        backdrop-filter: blur(20px);

        .bg-blobs {
            width: 120%;
            height: 150%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -70%);
            filter: blur(30px);

        }

        .card-content {
            position: absolute;
            inset: 0;
            padding: 10% 5% 15%;
            background: rgba(0, 0, 0, 0.6);
            overflow: hidden;
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            align-items: center;

            .card-title {
                font-size: 38px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            .card-stats {
                display: flex;
                gap: 10px;
                justify-content: center;
                margin-bottom: 25px;
                &__item {
                    background: rgba(0, 0, 0, 0.23);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: auto;
                    padding: 13px 28px;
                    border-radius: 7px;
                    .value {
                        font-family: 'ethnocentric';
                        font-size: 22px;
                        img {
                            width: 22px;
                        }
                    }
                    .key {
                        font-size: 18px;
                    }
                    &:last-child {
                        .value {
                            background: linear-gradient(270deg, #EA00D5 -6.27%, #3D5EFF 60.51%, #00EAF2 109.84%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                    }
                }
            }

            .card-text {
                font-size: 16px;
                line-height: 23px;
                text-align: center;
                margin-bottom: 25px;
            }
            .card_progress {
                align-self: stretch;
                .progress-wrap {
                    position: relative;
                    height: 10px;
                    background: #2C2C35;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    margin-bottom: 5px;

                    .progress-bar {
                        background: linear-gradient(273.27deg, #00EAF2 0.47%, #EA00D5 99.64%);
                        width: 30%;
                        height: 100%;
                    }
                }
                .progress-text {
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    gap: 10px;

                    span {
                        &:nth-child(2) {
                            margin-left: auto;
                        }
                        &:last-child {
                            color: rgba(255, 255, 255, 0.62);
                        }
                    }
                }
            }
            .level_number {
                font-family: 'Ethnocentric';
                font-size: 100px;
                line-height: 1;
                margin-bottom: 20px;
                background: linear-gradient(92.92deg, #3F82E7 0.78%, #AF69F5 50.14%, #4FCEF7 93.69%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .card-time {
                font-size: 23px;
                font-weight: 600;
                line-height: 25px;
            }
        }
    }

}
/* @media (max-width: 2000px) {
    .token-card {
        height: 350px;

        .token-card__up {
            .token-card__img {
                .play-icon {
                    top: 12%;
                    width: 40px;
                    height: 40px;
                    svg {
                        width: 10px;
                    }
                }

            }
        }

        .token-card__wrap-content {

            .card-content {
                gap: 15px;

                .card-title {
                    font-size: 18px;
                }
                .card-stats {
                    gap: 5px;
                    &__item {
                        padding: 8px;
                        .value {
                            font-size: 11px;
                            font-weight: 400;
                            white-space: nowrap;
                            img {
                                width: 13px;
                            }
                        }
                        .key {
                            font-size: 8px;
                        }
                    }
                }

                .card-text {
                    font-size: 7.5px;
                    line-height: 11px;

                }
                .card_progress {
                    .progress-wrap {
                        height: 6px;
                        border-radius: 2px;
                    }
                    .progress-text {
                        font-size: 7.3px;
                        gap: 5px;
                    }
                }
                .card-time {
                    font-size: 12px;
                    line-height: 17px;

                }
            }
        }

    }
} */
</style>