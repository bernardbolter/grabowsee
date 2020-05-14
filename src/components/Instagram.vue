<template>
    <div 
            class="instagram"
            :class="{ instagramOn: this.$store.state.activeLink === 1 }"    
        >
            <img 
                src="../assets/about.jpg" 
                alt="Picture from Countdown Grabowsee Instagram"
                class="image"
                :class="{ imageOn: this.$store.state.links[0].active }"
                :style="border"
            />
            <a 
                href="https://www.instagram.com/countdowngrabowsee/"  
                target="_blank" 
                rel="noopener"
                :style="instagramStyles"
            >
                <p>instrgram</p>
                <div class="svg-container">
                    <svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path :style="fill" fill-rule="nonzero" d="M35.1,0 L14.9,0 C6.67324301,0.00551576249 0.00551576249,6.67324301 0,14.9 L0,35.1 C0.00551576249,43.326757 6.67324301,49.9944842 14.9,50 L35.1,50 C43.326757,49.9944842 49.9944842,43.326757 50,35.1 L50,14.9 C49.9944842,6.67324301 43.326757,0.00551576249 35.1,0 Z M45.0000458,35.1 C45.0080003,37.7280877 43.9675369,40.2508424 42.1091897,42.1091897 C40.2508424,43.9675369 37.7280877,45.0080003 35.1,45.0000458 L14.9,45.0000458 C12.2719123,45.0080003 9.74915757,43.9675369 7.89081034,42.1091897 C6.03246311,40.2508424 4.99199968,37.7280877 4.9999542,35.1 L4.9999542,14.9 C4.99199968,12.2719123 6.03246311,9.74915757 7.89081034,7.89081034 C9.74915757,6.03246311 12.2719123,4.99199968 14.9,4.9999542 L35.1,4.9999542 C37.7280877,4.99199968 40.2508424,6.03246311 42.1091897,7.89081034 C43.9675369,9.74915757 45.0080003,12.2719123 45.0000458,14.9 L45.0000458,35.1 Z" />
                        <path :style="fill" fill-rule="nonzero" d="M25,12 C17.8202983,12 12,17.8202983 12,25 C12,32.1797017 17.8202983,38 25,38 C32.1797017,38 38,32.1797017 38,25 C37.9889273,17.8248897 32.1751103,12.0110727 25,12 Z M25,32.9427688 C21.7874499,32.9427688 18.8912282,31.0075753 17.6618385,28.039566 C16.4324488,25.0715567 17.1119984,21.6552303 19.3836144,19.3836144 C21.6552303,17.1119984 25.0715567,16.4324488 28.039566,17.6618385 C31.0075753,18.8912282 32.9427688,21.7874499 32.9427688,25 C32.9427688,29.3866701 29.3866701,32.9427688 25,32.9427688 L25,32.9427688 Z" />
                        <circle :style="fill" fill-rule="nonzero" cx="38" cy="12" r="3"></circle>
                    </svg>
                </div>
            </a>
        </div>
</template>

<script>
export default {
    name: "instagram",
    data() {
        return {
            instagramStyles: {
                color: this.$store.getters.makeOpaque(false, 9),
                "background-color" : this.$store.getters.makeOpaque(true, 9)
            },
            fill: {
                fill: this.$store.getters.makeOpaque(false, 9)
            },
            border: {
                border: `4px solid ${this.$store.getters.makeOpaque(true, 8)}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .instagram {
        width: 100%;
        height: auto;
        top: 200px;
        right: -500px;
        position: fixed;
        transition: right 1s ease-in-out;
        z-index: 2001;
        box-sizing: border-box;
        @media (min-width: 350px) {
            top: 155px;
        }
        @media (min-width: 500px) {
            top: 148px;
        }
        @media (min-width: 769px) {
            z-index: 201;
            width: 250px;
            height: 250px;
            top: 100px;
            z-index: 201;
        }
        @media (min-width: 1000px) {
            width: 300px;
            height: 300px;
        }
        @media (min-width: 1200px) {
            width: 350px;
            height: 350px;
        }
        @media (min-width: 1400px) {
            width: 400px;
            height: 400px;
        }

        img {
            width: 100%;
            box-sizing: border-box;
            display: none;
            @media (min-width: 769px) {
                display: block;
            }
        }

        a {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            right: 0;
            bottom: 0;
            text-decoration: none;
            font-family: $monofont;
            text-transform: uppercase;
            font-size: 13px;
            padding: 0 10px;
            opacity: 0.6;
            transition: opacity 0.5s ease-in-out;
            height: auto;
            &:hover {
                opacity: 0.9;
                transition: opacity 0.5s ease-in-out;
            }
            @media (min-width: 500px) {
                padding: 0 0 0 15px;
                font-size: 14px;
            }
            @media (min-width: 769px) {
                top: 250px;
                bottom: auto;
            }
            @media (min-width: 1000px) {
                font-size: 18px;
                top: 300px;
            }
            @media (min-width: 1200px) {
                top: 350px;
            }
            @media (min-width: 1400px) {
                top: 400px;
            }
            .svg-container {
                width: 30px;
                margin: 10px;
                display: none;
                @media (min-width: 500px) {
                    margin: 0 10px;
                    display: block;
                }
            }
        }
    }
    .instagramOn {
        right: 25px;
        transition: right 1s ease-in-out;
        @media (min-width: 500px) {
           right: 30px; 
        }
        @media (min-width: 769px) {
            right: 20px;
        }
        @media (min-width: 850px) {
            right: 50px
        }
        @media (min-width: 1000px) {
            right: 6%;
        }
    }
</style>