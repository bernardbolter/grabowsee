<template>
    <div id="nav">
        <img 
            src="../assets/logo.png" 
            alt="Countdown Grabowsee Logo"
            @click="goHome" 
        />
        <ul>
            <Item
                v-for="link in this.$store.state.links"
                :key="link.id"
                :name="link.name" 
            />
        </ul>
    </div>
</template>

<script>
import Item from "./Item.vue";

export default {
    name: "Nav",
    components: {
        Item
    },
    methods: {
        goHome() {
            this.$store.commit('resetNav');
        }
    }
}
</script>

<style scoped lang="scss">
    #nav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2000;
        width: 220px;

        img {
            width: 170px;
            margin: 20px 0 0 20px;
            cursor: pointer;
        }

        ul {
            list-style: none;
            width: 170px;
            margin: 0 0 0 20px;
            padding: 0;
            position: relative;
            display: flex;
            flex-direction: column;
        }
    }
</style>