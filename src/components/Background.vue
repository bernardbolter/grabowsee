<template>
    <div class="bg-wrap" :style="backColor">
        <div class="bg-image" :style="backImage" />
    </div>
</template>

<script>
export default {
    name: 'Background',
    data() {
        return {
            number: null,
            backColor: {
                "background-color" : this.$store.getters.makeOpaque(true, 9)
            }
        }
    },
    mounted() {
        this.number = Math.floor(Math.random() * 2);
    },
    computed: {
        backImage() {
            var randomNumber = Math.floor(Math.random() * 2) + 1;
            console.log(randomNumber);
            return {
                "background-image" : `url("/background/bg_${randomNumber}.jpg")`
            }
        }
    }
}
</script>

<style scoped sass>
    .bg-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
    .bg-image {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        opacity: 0.8;
    }
</style>