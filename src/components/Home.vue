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
        width: 70%;
        margin: 150px 0 0 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        h1 {
            font-size: 200px;
            font-weight: 800;
            text-align: center;
            margin: 0;
        }
        h2 {
            font-size: 50px;
            font-weight: 400;
            text-align: left;
            display: inline-block;
            padding: 5px 10px;
            
        }
    }
    .homeOn {
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }
</style>