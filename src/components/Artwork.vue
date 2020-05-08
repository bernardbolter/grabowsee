<template>
    <div class="artwork" :class="this.landscape ? 'landscape' : 'portrait'">
        <img :src="require('../assets/past/' + this.image + '.jpg')">
        <div v-if="this.name" class="card" :style="cardOffset">{{ this.name }}</div>
    </div>
</template>

<script>
export default {
    name: "Artwork",
    props: ['name', 'image', 'landscape'],
    computed: {
        cardOffset() {
            return {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                "margin-left" : this.randomNumber(20,150) + 'px',
                "margin-top" : '-' + this.randomNumber(60,300) + 'px'
            }
        }
    },
    methods: {
        randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
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
        width: 46%;
        margin: 4% 2%;
    }
    .portrait {
        width: 33%;
        margin: 1% 8.5%;
    }
    .card {
        z-index: 605;
        position: absolute;
        padding: 15px 20px;
        font-size: 18px;
        font-family: $monofont;
    }
</style>