<template>
    <div class="container">
        <div 
            class="about" 
            :class="{aboutOn : this.$store.state.activeLink === 1}"
            :style="back"
            >
                <h3>
                    Globe Gallery is an alternative Art Gallery starting in 2013, in the middle of a derelict hospital, Heilstätte Grabowsee, 30km North of Berlin.
                </h3>
                <p>
                    We host an annual non-profit and alternative gathering with a full week of expressing your creativity through making art, inspiring workshops, readings, performances and social exchange. It’s an open space for collaboration and we encourage you to contribute to the experience through your participation. Think of a DIY atmosphere, co-creation, camping amongst a derelict hospital with rural infrastructure but with its on lake and fire place - and be prepared or some unusual group activities.
                </p>
                <p>
                    Globe Gallery aims to be a platform for everyone who wants to share their work in a dedicated, dogma free and one-of-a-kind environment.
                </p>
                <p>
                    Besides creating art we need to maintain the infrastructure of the property with ‘Site Work’ this is two hours a day during your stay in order to give something back to the place.
                </p>
        </div>
        <div 
            class="instagram"
            :class="{ instagramOn: this.$store.state.activeLink === 1 }"    
        >
            <img 
                src="../assets/about.jpg" 
                alt="Picture of Grabowsee"
                class="image"
                :class="{ imageOn: this.$store.state.links[0].active }"
                :style="border"
            />
            <a 
                href="https://www.instagram.com/countdowngrabowsee/"  
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
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
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            back: {
                "background-color" : this.$store.getters.makeOpaque(false, 9)
            },
            linkStyles: {
                color: this.$store.getters.makeOpaque(false, 9),
                "background-color" : this.$store.getters.makeOpaque(true, 9)
            },
            fill: {
                fill: this.$store.getters.makeOpaque(false, 9)
            },
            stroke: {
                stroke: this.$store.getters.makeOpaque(false, 9)
            },
            border: {
                border: `4px solid ${this.$store.getters.makeOpaque(true, 8)}`
            }
        }
    },
    computed: {
        showAbout() {
            return {
                aboutOn : this.$store.state.activeLink === 3
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: 200;
        box-sizing: border-box;
    }
    .about {
        width: 60%;
        margin: 0;
        padding: 0;
        height: 100vh;
        top: -100%;
        left: 15%;
        position: absolute;
        transition: top 1s ease-in-out;
        background: #000;
        z-index: 202;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 1100px) {
            width: 50%;
            left: 25%;
        }

        h3 {
            width: 90%;
            font-size: 18px;
            margin: 0 5%;
            padding: 0;
            line-height: 1.6;
            font-weight: 600;
            font-family: $monofont;
            @media (min-width: 1000px) {
                font-size: 18px;
                width: 80%;
                margin: 0 10%;
            }
            @media (min-width: 1100px) {
                font-size: 20px;
            }
            @media (min-width: 1500px) {
                font-size: 22px;
            }
        }

        p {
            width: 90%;
            margin: 15px 5%;
            padding: 0;
            font-weight: 300;
            line-height: 1.6;
            font-size: 14px;
            opacity: 0.9;
            @media (min-width: 1000px) {
                font-size: 14px;
                width: 80%;
                margin: 0 10%;
            }
            @media (min-width: 1100px) {
                font-size: 16px;
            }
            @media (min-width: 1500px) {
                font-size: 18px;
            }
        }
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
    }
    .instagram {
        width: 250px;
        height: 250px;
        top: 100px;
        left: 100%;
        position: absolute;
        transition: left 1s ease-in-out;
        z-index: 201;
        box-sizing: border-box;
        @media (min-width: 1000px) {
            width: 300px;
            height: 300px;
        }
        @media (min-width: 1400px) {
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
        }

        a {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            right: 0;
            top: 250px;
            text-decoration: none;
            font-family: $monofont;
            text-transform: uppercase;
            font-size: 16px;
            padding: 0 0 0 15px;
            opacity: 0.6;
            transition: opacity 0.5s ease-in-out;
            &:hover {
                opacity: 0.9;
                transition: opacity 0.5s ease-in-out;
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
            }
        }
    }
    .instagramOn {
        left: calc(100% - 270px);
        transition: left 1s ease-in-out;
        @media (min-width: 1000px) {
            left: 67%;
        }
    }

</style>