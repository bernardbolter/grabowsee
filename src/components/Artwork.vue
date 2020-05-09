<template>
    <div class="artwork" :class="this.landscape ? 'landscape' : 'portrait'">
        <img :src="require('../assets/past/' + this.image + '.jpg')">
        <div v-if="this.name" class="card" :style="(this.theWidth > 600) ? cardOffset : cardOffsetSmall">{{ this.name }}</div>
    </div>
</template>

<script>
export default {
    name: "Artwork",
    props: ['name', 'image', 'landscape'],
    data() {
        return {
            theWidth: 0
        }
    },
    created() {
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
                "margin-top" : '-' + this.randomNumber(60,300) + 'px'
            }
        },
        cardOffsetSmall() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "margin-left" : this.randomNumber(10,75) + 'px',
                "margin-top" : '-' + this.randomNumber(60,100) + 'px'
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
        z-index: 604;
        position: relative;
        img {
            width: 100%;
        }
    }
    .landscape {
        width: 86%;
        margin: 4% 7%;
        @media (min-width: 1000px) {
            width: 46%;
            margin: 4% 2%;
        }
    }
    .portrait {
        width: 66%;
        margin: 1% 12%;
        @media (min-width: 1000px) {
            width: 33%;
            margin: 1% 8.5%;
        }
    }
    .card {
        z-index: 605;
        position: absolute;
        padding: 5px 10px;
        font-size: 12px;
        font-family: $monofont;
        @media (min-width: 500px) {
            padding: 15px 20px;
            font-size: 18px;
        }
    }
</style>