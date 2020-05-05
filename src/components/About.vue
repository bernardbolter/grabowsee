<template>
    <div class="container">
        <div class="about" :class="{ aboutOn: this.$store.state.links[2].active }">
            <h1>ABOUT</h1>
        </div>
        <img 
            src="../assets/about.jpg" 
            alt="Picture of Grabowsee"
            class="image"
            :class="{ imageOn: this.$store.state.links[2].active }"
        />
    </div>
</template>

<script>
export default {
    name: "About",
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
        z-index: 400;
    }
    .about {
        width: 50%;
        height: 100vh;
        top: -100%;
        left: 25%;
        position: absolute;
        transition: top 1s ease-in-out;
        background: #000;
        opacity: 0.6;
        z-index: 402;
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
    }
    .image {
        width: 500px;
        height: 500px;
        top: 100px;
        left: 100%;
        position: absolute;
        transition: left 1s ease-in-out;
        z-index: 401;
        border: 3px solid #cdcdcd;
    }
    .imageOn {
        left: 60%;
        transition: left 1s ease-in-out;
    }

</style>