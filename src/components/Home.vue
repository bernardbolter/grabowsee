<template>
    <div class="home" :class="{ homeOn : this.$store.state.activeLink === 0}">
        <h1 :style="(this.theWidth > 500) ? countOffset : countOffsetSmall">COUNT</h1>
        <h1 :style="(this.theWidth > 500) ? downOffset : downOffsetSmall">DOWN</h1>
        <h1 :style="(this.theWidth > 500) ? graOffset : graOffsetSmall">GRA</h1>
        <h1 :style="(this.theWidth > 500) ? bowOffset : bowOffsetSmall">BOW</h1>
        <h1 :style="(this.theWidth > 500) ? seeOffset : seeOffsetSmall">SEE</h1>
        <h1 :style="(this.theWidth > 500) ? thOffset : thOffsetSmall"><span class="power">10th</span></h1>
        <h1 :style="(this.theWidth > 500) ? editionOffset : editionOffsetSmall"><span class="power">edition</span></h1>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            textColor: {
                color : this.$store.getters.makeOpaque(false, 9)
            },
            theWidth: 0
        }
    },
    created() {
        this.theWidth = window.innerWidth;
        window.addEventListener("resize", this.getTheWidth);
    },
    computed: {
        countOffset() {
            return {
                left: '-' + this.randomNumber(100, 120) + 'px',
                top: this.randomNumber(200, 230) + 'px'
            }
        },
        countOffsetSmall() {
            return {
                left: '-' + this.randomNumber(50, 70) + 'px',
                top: this.randomNumber(200, 230) + 'px'
            }
        },
        downOffset() {
            return {
                left: this.randomNumber(100, 120) + 'px',
                top: this.randomNumber(200, 230) + 'px'
            }
        },
        downOffsetSmall() {
            return {
                left: this.randomNumber(50, 70) + 'px',
                top: this.randomNumber(200, 230) + 'px'
            }
        },
        graOffset() {
            return {
                left: '-' + this.randomNumber(150, 170) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        graOffsetSmall() {
            return {
                left: '-' + this.randomNumber(70, 90) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        bowOffset() {
            return {
                left: '-' + this.randomNumber(0, 10) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        bowOffsetSmall() {
            return {
                left: '-' + this.randomNumber(0, 10) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        seeOffset() {
            return {
                left: this.randomNumber(150, 170) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        seeOffsetSmall() {
            return {
                left: this.randomNumber(70, 90) + 'px',
                top: this.randomNumber(250, 280) + 'px'
            }
        },
        thOffset() {
            return {
                left: '-' + this.randomNumber(100, 120) + 'px',
                top: this.randomNumber(330, 360) + 'px'
            }
        },
        thOffsetSmall() {
            return {
                left: '-' + this.randomNumber(60, 80) + 'px',
                top: this.randomNumber(330, 360) + 'px'
            }
        },
        editionOffset() {
            return {
                left: this.randomNumber(100, 120) + 'px',
                top: this.randomNumber(330, 360) + 'px'
            }
        },
        editionOffsetSmall() {
            return {
                left: this.randomNumber(60, 80) + 'px',
                top: this.randomNumber(330, 360) + 'px'
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
    .home {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity 1s ease-in-out;
        opacity: 0;
        margin: 20px 5% 200px 5%;
        top: 200px;
        position: fixed;
        z-index: 2;

        @media (min-width: 500px) {
            top: 90px;
        }
        @media (min-width: 650px) {
            margin: 20px 5% 185px 5%;
        }
        @media (min-width: 769px) {
            width: 75%;
            margin: 5% 5% 0 20%;
            top: 0; 
        }
        @media (min-width: 1100px) {
            margin: 75px 5% 0 20%;
            width: 75%;
            align-items: flex-start;
        }
        @media (min-width: 1400px) {
            margin: 50px 15% 0 20%;
            width: 65%;
            align-items: flex-start;
        }

        h1 {
            font-size: 55px;
            font-weight: 800;
            width: 100%;
            padding: 0;
            z-index: 100;
            position: fixed;
            color: rgba(255,255,255,.5);
            margin: 0;
            text-align: center;

            @media (min-width: 500px) {
                font-size: 70px;
            }
            // @media (min-width: 650px) {
            //     font-size: 40px;
            // }
            // @media (min-width: 769px) {
            //     font-size: 50px;
            // }
            // @media (min-width: 1100px) {
            //     font-size: 60px;
            //     margin: 5px 0 5px 20px;
            // }
            // @media (min-width: 1300px) {
            //     margin: 5px 0 5px 30px;
            // }
            // @media (min-width: 1500px) {
            //     font-size: 60px;
            //     margin: 5px 0 5px 20px;
            // }
            .power {
                background-color: rgba(109,192,169,0.3);
                font-size: 35px;

                @media (min-width: 500px) {
                    font-size: 50px;
                }
            }
        }
        .inspiration {
            width: 90%;
            margin: 0 5% 0 5%;
            @media (min-width: 500px) {
                margin: 10px 5% 0 5%;
            }
            h2 {
                font-size: 15px;
                font-weight: 600;
                text-align: justify;
                line-height: 1.7;
                @media (min-width: 500px) {
                    font-size: 16px;
                    line-height: 1.8;
                }
                @media (min-width: 1300px) {
                    font-size: 18px;
                    line-height: 2;
                }
                @media (min-width: 1400px) {
                    font-size: 20px;
                }

                
            }
        }
    }
    .homeOn {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        position: relative;
    }
</style>