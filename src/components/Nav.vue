<template>
    <div id="nav">
        <div class="logo" @click="goHome">
            <Logo />
        </div>
        <ul>
            <Item
                v-for="link in this.$store.state.links"
                :key="link.id"
                :name="link.name"
                :navId="link.id" 
            />
        </ul>
    </div>
</template>

<script>
import Item from "./Item.vue";
import Logo from "./Logo.vue";

export default {
    name: "Nav",
    components: {
        Item,
        Logo
    },
    data() {
        return {
            fill: {
                fill: this.$store.getters.makeOpaque(true, 6)
            },
            stroke: {
                stroke: this.$store.getters.makeOpaque(false, 9)
            }
        }
    },
    methods: {
        goHome() {
            this.$store.commit('decideNav', 0);
        }
    }
}
</script>

<style scoped lang="scss">
    #nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 500px) {
            align-items: flex-start;
        }
        @media (min-width: 769px) {
            width: 25%;
            position: absolute;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
        @media (min-width: 1100px) {
            align-items: center;
        }

        .logo {
            width: 100px;
            margin: 10px 0 0 10px;
            cursor: pointer;
            @media (min-width: 500px) {
                width: 125px;
                margin: 15px 0 0 15px;
            }
            @media (min-width: 650px) {
                width: 150px;
            }
            @media (min-width: 769px) {
                width: 125px;
                margin: 30px 0 0 20px;
            }
            @media (min-width: 1100px) {
                width: 170px;
                margin: 50px 0 0;
            }
        }

        img {
            width: 100%;
        }

        ul {
            list-style: none;
            width: 260px;
            margin: 0 0 0 10px;
            padding: 0;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            left: 0;
            transition: left .75s ease-in-out;
            @media (min-width: 400px) {
                width: 230px;
            }
            @media (min-width: 500px) {
                width: 260px;
                margin: 0;
            }
            @media (min-width: 769px) {
                width: 170px;
                margin: 0;
                flex-direction: column;
            }
            @media (min-width: 1100px) {
                margin: 0;
            }
        }
        .mobileLinksOn {
            left: 150px;
            transition: left .75s ease-in-out;
        }
        .mobile {
            width: 60px;
            height: 60px;
            display: block;
            position: fixed;
            right: 15px;
            top: 15px;
            cursor: pointer;
            @media (min-width: 769px) {
                display: none;
            }

            svg {
                width: 100%;
                #line {
                    opacity: 1;
                    transition: opacity 0.5s ease-in-out;
                }
                #x1 {
                    transform: rotate(0deg);
                    transform-origin: center center;
                    transition: transform 0.5s ease-in-out;
                }
                #x2 {
                    transform: rotate(0deg);
                    transform-origin: center center;
                    transition: transform 0.5s ease-in-out;
                }
            }
        }
        .mobileOn {
            svg {
                #line {
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                #x1 {
                    transform: rotate(45deg);
                    transform-origin: center center;
                    transition: transform 0.5s ease-in-out;
                }
                #x2 {
                    transform: rotate(-45deg);
                    transform-origin: center center;
                    transition: transform 0.5s ease-in-out;
                }
            }
        }
    }
</style>