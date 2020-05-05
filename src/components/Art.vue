<template>
    <div class="art" :class="{ artOn: this.$store.state.links[0].active }">
        <div class="back one" />
        <div class="back two" />
    </div>
</template>

<script>
export default {
    name: "Art"
}
</script>

<style scoped lang="scss">
    .art {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        
    }
    .back {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: -100%;
        left: 0;
        margin: 0;
        padding: 0;
        background: rgba(0,0,0,0.6);
    }
    .one {
        top: -100%;
        left: 0;
        z-index: 1000;
        transition: top 1s ease-in-out;
    }
    .artOn .one {
        top: 0;
        transition: top 1s ease-in-out
    }
    .two {
        top: 0;
        left: -100%;
        z-index: 1001;
        transition: left 1s ease-in-out
    }
    .artOn .two {
        left: 0;
        transition: left 1s ease-in-out
    }
</style>