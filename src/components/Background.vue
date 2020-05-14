<template>
    <div class="bg-wrap" :style="backColor">
        <div class="bg-image" />
    </div>
</template>

<script>
export default {
    name: 'Background',
    data() {
        return {
            backColor: {
                "background-color" : this.$store.getters.makeOpaque(true, 9) 
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
        background: url('~@/assets/bg-image.jpg') no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        opacity: 0.8;
    }
</style>