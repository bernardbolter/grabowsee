<template>
    <li 
        class="item" 
        :style="itemStyle" 
        @click="goNav"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    ><span 
        :style="background"
        :class="{ active: hover }"    
    >{{ name }}</span></li>
</template>

<script>
export default {
    name: "Item",
    props: ['name'],
    data() {
        return {
            pad: 0,
            hover: false,
            background: {
                'background-color' : this.$store.getters.makeOpaque(true, 4),
                'color': this.$store.state.lightColor
            }
        }
    },
    mounted() {
        this.pad = Math.floor(Math.random() * (15 - 8 + 1) + 8);
        console.log(this.$store.state.lightColor);
        console.log(this.$store.getters.makeOpaque(false, 4));
    },
    computed: {
        itemStyle() {
            return {
                animation: this.pad +'s linear infinite alternate movein'
            }
        }
    },
     methods: {
        goNav() {
            this.$store.commit('decideNav', this.name);
        }
    }
}
</script>

<style lang="scss">
    .item {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        position: relative;
        text-align: center;
        margin: 20px 0 0 0;
        padding: 2px 5px;
        display: block;
        cursor: pointer;
        opacity: 1;

        span {
            transition: background-color 0.5s ease-in;
            padding: 7px 15px;
        }
    }

    .active {
        background: rgba(0,0,0,0.8) !important;
        transition: background-color 1s ease-in-out;
    }

    @keyframes movein {
        0% {
            left: -10px;
        }
        50% {
            left: 10px
        }
        100% {
            left: -10px;
        }
    }
</style>