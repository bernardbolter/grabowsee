<template>
    <div class="home" :class="{ homeOn : this.$store.state.activeLink === 0}">
        <h2 :style="color2">18:00 15 August 2020</h2>
        <h1 :style="color1">‘POWER’</h1>
 </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            color1: {
             color : this.$store.getters.makeOpaque(true, 9)
            },
            color2 : {
                color : this.$store.getters.makeOpaque(false, 9),
                "background-color" : this.$store.getters.makeOpaque(true, 5) 
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .home {
        width: 90%;
        margin: 100px 10% 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        @media (min-width: 650px) {
            margin: 250px 0 0 10%;
            align-items: flex-start;
        }
        @media (min-width: 769px) {
            width: 70%;
            margin: 250px 0 0 30%;
        }
        @media (min-width: 1100px) {
            margin: 150px 0 0 30%;
        }

        h1 {
            font-size: 55px;
            font-weight: 800;
            text-align: right;
            margin: 0;
            @media (min-width: 500px) {
                font-size: 70px;
            }
            @media (min-width: 650px) {
                font-size: 110px;
            }
            @media (min-width: 769px) {
                font-size: 100px;
            }
            @media (min-width: 1100px) {
                font-size: 150px;
            }
            @media (min-width: 1500px) {
                font-size: 200px;
            }
        }
        h2 {
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            display: inline-block;
            padding: 5px 10px;
            @media (min-width: 500px) {
                font-size: 20px;
            }
            @media (min-width: 650px) {
                font-size: 28px;
            }
            @media (min-width: 769px) {
                font-size: 22px;
            }
            @media (min-width: 900px) {
                font-size: 25px;
            } 
            @media (min-width: 1100px) {
                font-size: 35px;
            } 
            @media (min-width: 1500px) {
                font-size: 50px;
            }
        }
    }
    .homeOn {
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }
</style>