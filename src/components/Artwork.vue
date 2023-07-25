<template>
    <div class="artwork" :class="this.landscape ? 'landscape' : 'portrait'">
        <a v-bind:href="link" v-if="link" target="_blank">
            <div class="card" :style="(this.theWidth > 600) ? cardOffset : cardOffsetSmall">
                {{ this.name }}
                <div class="artwork-link">
                    <svg viewBox="0 0 40 41">
                        <path fill="rgba(0,0,0,.6)" d="M28.3222 20.2187C28.2677 19.5844 28.1486 18.9526 27.9631 18.3337C27.52 16.8548 26.7051 15.4923 25.6065 14.3938C24.576 13.3633 23.3134 12.5824 21.94 12.1238L18.8035 15.2603C18.7407 15.3232 18.6809 15.3883 18.6225 15.4547C18.6066 15.4727 18.591 15.4909 18.5755 15.5091C18.5269 15.5662 18.4798 15.6244 18.4343 15.6839C18.4255 15.6954 18.4162 15.7066 18.4075 15.7182C18.3555 15.7879 18.3062 15.8592 18.2588 15.9318C18.2464 15.9507 18.2346 15.9699 18.2226 15.9891C18.185 16.0488 18.1489 16.1092 18.1143 16.1706C18.1042 16.1884 18.0938 16.206 18.084 16.224C18.0427 16.3 18.0037 16.3772 17.9672 16.4558C17.9594 16.4726 17.9522 16.4899 17.9446 16.5069C17.9277 16.5445 17.9126 16.5828 17.8969 16.6209C19.3692 16.5248 20.8136 17.0599 21.8771 18.1234C23.1327 19.3789 23.6516 21.1654 23.2652 22.9024C23.0787 23.7408 22.6879 24.5147 22.1275 25.1607C22.0474 25.253 21.9639 25.3426 21.8771 25.4295L13.7844 33.5222C11.77 35.5365 8.49255 35.5365 6.47826 33.5222C4.46406 31.5079 4.46406 28.2304 6.47826 26.2162L11.0254 21.669C11.0249 21.6671 11.0244 21.6652 11.0239 21.6632C10.9927 21.5466 10.964 21.4297 10.9369 21.3124C10.929 21.2779 10.9217 21.2433 10.914 21.2089C10.8951 21.1227 10.8771 21.0364 10.8604 20.9499C10.8531 20.9124 10.8459 20.8749 10.839 20.8372C10.8209 20.7375 10.8041 20.6375 10.789 20.5375C10.7861 20.5182 10.7826 20.4991 10.7798 20.4798C10.7627 20.3623 10.748 20.2446 10.7349 20.1268C10.731 20.0917 10.7278 20.0565 10.7243 20.0214C10.7156 19.9352 10.708 19.8489 10.7015 19.7626C10.6985 19.7232 10.6956 19.6839 10.6931 19.6445C10.687 19.549 10.6822 19.4536 10.6787 19.3581C10.6779 19.3337 10.6763 19.3094 10.6756 19.285C10.6721 19.1676 10.671 19.0501 10.6715 18.9326C10.6716 18.8979 10.6725 18.8632 10.673 18.8285C10.6743 18.7422 10.6764 18.6559 10.6798 18.5696C10.6813 18.5298 10.683 18.49 10.685 18.4502C10.6897 18.358 10.6957 18.266 10.7027 18.174C10.7049 18.1466 10.7063 18.1192 10.7086 18.0918C10.7186 17.975 10.7306 17.8585 10.7445 17.7423C10.7484 17.7096 10.753 17.6771 10.7573 17.6444C10.7684 17.5575 10.7806 17.4706 10.794 17.3839C10.8 17.345 10.8061 17.3062 10.8126 17.2673C10.8275 17.1773 10.8436 17.0875 10.8609 16.9979C10.8663 16.9699 10.8711 16.9417 10.8768 16.9137C10.9 16.7984 10.9252 16.6834 10.9523 16.5689C10.9592 16.5399 10.9667 16.5111 10.9738 16.4822C10.9955 16.394 11.0181 16.3061 11.0421 16.2185C11.0521 16.1817 11.0624 16.1451 11.0729 16.1084C11.0979 16.0206 11.1242 15.933 11.1516 15.8458C11.1603 15.8181 11.1684 15.7903 11.1773 15.7626C11.2137 15.6498 11.2521 15.5376 11.2924 15.426C11.2945 15.4202 11.2963 15.4142 11.2984 15.4084L2.7488 23.958C-0.916266 27.6231 -0.916266 33.5866 2.7488 37.2516C4.52419 39.027 6.88478 40.0048 9.39565 40.0048C11.9064 40.0048 14.267 39.027 16.0424 37.2516L25.6065 27.6875C25.9362 27.3579 26.2438 27.0009 26.5211 26.6267C26.5211 26.6266 26.5212 26.6266 26.5212 26.6265C26.9589 26.0356 27.3207 25.3988 27.6043 24.7316C27.9494 23.9193 28.1775 23.0619 28.2851 22.1883C28.3322 21.8061 28.3568 21.4209 28.3571 21.0348C28.3572 20.9441 28.3559 20.8535 28.3533 20.7627C28.3481 20.5814 28.3377 20.3999 28.3222 20.2187Z" />
                        <path fill="rgba(0,0,0,.6)" d="M30.6001 0C28.0893 0 25.7287 0.977757 23.9533 2.75315L14.3892 12.3173C14.0597 12.6467 13.7521 13.0036 13.4748 13.3779C13.4747 13.378 13.4747 13.3781 13.4746 13.3782C11.7238 15.7417 11.1848 18.8418 12.0325 21.6711C12.4756 23.1501 13.2905 24.5125 14.3891 25.6111C15.4196 26.6416 16.6823 27.4225 18.0556 27.881L21.1921 24.7446C21.2549 24.6818 21.3147 24.6166 21.3731 24.5502C21.389 24.5322 21.4046 24.514 21.4201 24.4958C21.4688 24.4386 21.516 24.3803 21.5615 24.3207C21.5702 24.3093 21.5795 24.2982 21.588 24.2867C21.6401 24.2169 21.6895 24.1455 21.737 24.0727C21.7492 24.0541 21.7609 24.035 21.7729 24.0161C21.8107 23.9562 21.847 23.8952 21.8817 23.8336C21.8916 23.816 21.9018 23.7988 21.9114 23.7811C21.9528 23.705 21.9919 23.6275 22.0285 23.5489C22.0363 23.5321 22.0434 23.515 22.051 23.4981C22.0678 23.4605 22.0829 23.422 22.0987 23.3839C20.6257 23.4796 19.182 22.9449 18.1185 21.8814C16.863 20.6259 16.344 18.8393 16.7304 17.1024C16.9169 16.264 17.3077 15.4901 17.8681 14.8441C17.9482 14.7519 18.0317 14.6622 18.1185 14.5753L21.4631 11.2308C21.4632 11.2307 21.4634 11.2306 21.4635 11.2305L26.2114 6.48261C27.1871 5.50679 28.4845 4.96945 29.8644 4.96945C31.2443 4.96945 32.5416 5.50679 33.5175 6.48261C35.5317 8.49691 35.5317 11.7743 33.5175 13.7886L28.9703 18.3358C28.9708 18.3377 28.9712 18.3396 28.9718 18.3416C29.003 18.4582 29.0317 18.5752 29.0588 18.6924C29.0668 18.7269 29.074 18.7615 29.0817 18.7959C29.1007 18.8821 29.1186 18.9684 29.1352 19.0549C29.1425 19.0925 29.1498 19.1299 29.1566 19.1675C29.1748 19.2673 29.1915 19.3674 29.2067 19.4675C29.2096 19.4867 29.2131 19.5057 29.2159 19.525C29.233 19.6426 29.2478 19.7603 29.2608 19.8781C29.2647 19.9131 29.2679 19.9483 29.2714 19.9833C29.2801 20.0696 29.2877 20.1559 29.2942 20.2423C29.2972 20.2816 29.3001 20.3209 29.3027 20.3602C29.3088 20.4558 29.3135 20.5513 29.317 20.6469C29.3179 20.6712 29.3194 20.6955 29.3201 20.7198C29.3236 20.8372 29.3247 20.9547 29.3243 21.0722C29.3241 21.1069 29.3232 21.1416 29.3227 21.1764C29.3214 21.2626 29.3193 21.3489 29.3159 21.4351C29.3144 21.475 29.3127 21.5148 29.3107 21.5547C29.306 21.6467 29.3 21.7386 29.293 21.8304C29.2908 21.858 29.2893 21.8855 29.287 21.9131C29.2771 22.0297 29.265 22.1461 29.2512 22.2623C29.2473 22.2952 29.2426 22.328 29.2384 22.361C29.2272 22.4476 29.2151 22.5341 29.2019 22.6204C29.1958 22.6596 29.1897 22.6987 29.1832 22.7378C29.1683 22.8273 29.1522 22.9166 29.135 23.0057C29.1295 23.0343 29.1246 23.0628 29.1189 23.0913C29.0957 23.2064 29.0705 23.3211 29.0435 23.4354C29.0366 23.4649 29.0288 23.4942 29.0215 23.5238C29 23.6112 28.9776 23.6985 28.9538 23.7854C28.9436 23.8227 28.9332 23.8598 28.9226 23.897C28.8977 23.9842 28.8715 24.071 28.8444 24.1576C28.8356 24.1858 28.8272 24.2142 28.8181 24.2424C28.7817 24.3549 28.7435 24.467 28.7032 24.5782C28.7011 24.5842 28.6993 24.5902 28.697 24.5962L37.2467 16.0466C39.0222 14.2712 40 11.9106 40 9.39971C40 6.88894 39.0222 4.52836 37.2467 2.75286C35.4714 0.977757 33.1109 0 30.6001 0Z" />
                    </svg>
                </div>
            </div>
        </a>
        <div v-else class="card" :style="(this.theWidth > 600) ? cardOffset : cardOffsetSmall">{{ this.name }}</div>
        <a 
            v-if="videoLink" 
            class="artwork-video-link" 
            :href="videoLink" 
            target="_blank"
            :style="(this.theWidth > 600) ? videoOffset : videoOffsetSmall"
        >
            <p>video</p>
            <div class="artwork-video-svg">
                <svg viewBox="0 0 64 40">
                    <path fill="rgba(0,0,0,.6)" d="M53.8 0H10.4C4.86669 0 0.400024 4.46667 0.400024 10V30C0.400024 35.5333 4.86669 40 10.4 40H53.8C59.3333 40 63.8 35.5333 63.8 30V10C63.8 4.46667 59.3333 0 53.8 0ZM40.4 21.4L28.0667 29.1333C26.9334 29.8667 25.4667 29 25.4667 27.7333V12.2667C25.4667 10.9333 26.9334 10.1333 28.0667 10.8667L40.4 18.6C41.4667 19.2 41.4667 20.8 40.4 21.4Z" />
                </svg>
            </div>
        </a>

        <img :src="require('../assets/archives/' + this.imageName )">

        <h2 
            v-if="title" 
            class="artwork-title"
            :style="(this.theWidth > 600) ? titleOffset : titleOffsetSmall"
        >{{ this.title }}</h2>
        <p 
            v-if="materials" 
            class="artwork-materials"
            :style="(this.theWidth > 600) ? materialsOffset : materialsOffsetSmall"
        >{{ this.materials }}</p>
    </div>
</template>

<script>

export default {
    name: "Artwork",
    props: ['name', 'imageName', 'landscape', 'link', 'videoLink', 'materials', 'title'],
    data() {
        return {
            theWidth: 0
        }
    },
    created() {
        // console.log(this.name, this.imageName, this.link)
        this.theWidth = window.innerWidth;
        window.addEventListener("resize", this.getTheWidth);
    },
    destroyed() {
        window.removeEventListener("resize", this.getTheWidth);
    },
    computed: {
        cardOffset() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "margin-left" : this.randomNumber(20,150) + 'px',
                "margin-top" : '-' + this.randomNumber(0, 60) + 'px'
            }
        },
        cardOffsetSmall() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "margin-left" : this.randomNumber(0,25) + 'px',
                "margin-top" : '-' + this.randomNumber(0, 25) + 'px'
            }
        },
        videoOffset() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 4),
                "right" : this.randomNumber(20,150) + 'px',
                "top" : this.randomNumber(0, 60) + 'px' 
            }
        },
        videoOffsetSmall() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "right" : this.randomNumber(10,20) + 'px',
                "top" : this.randomNumber(0, 60) + 'px' 
            }
        },
        titleOffset() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 4),
                "left" : this.randomNumber(20,150) + 'px',
                "bottom" : this.randomNumber(0, 60) + 'px' 
            }
        },
        titleOffsetSmall() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "left" : '-' + this.randomNumber(0,15) + 'px',
                "bottom" : '-' + this.randomNumber(0, 60) + 'px' 
            }
        },
        materialsOffset() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 4),
                "right" : this.randomNumber(0, 80) + 'px',
                "bottom" : '-' + this.randomNumber(60, 80) + 'px' 
            }
        },
        materialsOffsetSmall() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "right" : '-' + this.randomNumber(0,15) + 'px',
                "bottom" : '-' + this.randomNumber(60, 80) + 'px' 
            }
        }
    },
    methods: {
        randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        getTheWidth() {
            this.theWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped lang="scss">
    .artwork {
        display: inline-block;
        z-index: 601;
        position: relative;
        img {
            width: 100%;
        }
    }
    .landscape {
        width: 86%;
        margin: 15% 7%;
        @media (min-width: 1000px) {
            width: 46%;
            margin: 10% 2%;
        }
    }
    .portrait {
        width: 66%;
        margin: 15% 12%;

        @media (min-width: 600px) {
            width: 66%;
            margin: 10% 12%;
        }
        @media (min-width: 1000px) {
            width: 33%;
            margin: 5% 8.5%;
        }
    }
    .card {
        // z-index: 605;
        position: absolute;
        padding: 5px 10px;
        font-size: 13px;
        font-family: $monofont;
        color: rgba(0,0,0,.8);
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        @media (min-width: 500px) {
            padding: 5px 10px;
            font-size: 15px;
        }

        .artwork-link {
            width: 15px;
            margin: 5px 0 0 10px;
        }
    }
    .artwork-video-link {
        z-index: 606;
        position: absolute;
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;

        p {
            font-size: 10px;
            font-family: $monofont;
            color: rgba(0,0,0,.8);
        }

        .artwork-video-svg {
            width: 20px;
            margin: 0 0 0 10px;
        }
    }
    .artwork-title {
        z-index: 607;
        position: absolute;
        padding: 5px 10px;
        color: rgba(0,0,0,.8);
        font-weight: 600;
        font-size: 16px;
        max-width: 175px;

        @media screen and (min-width: 600px) {
            max-width: 300px;
        }
    }
    .artwork-materials {
        z-index: 606;
        position: absolute;
        padding: 5px 10px;
        color: rgba(0,0,0,.6);
        font-size: 11px;
        max-width: 175px;

        @media screen and (min-width: 600px) {
            max-width: 300px;
        }
    }

</style>