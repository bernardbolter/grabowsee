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
                :navId="link.id" 
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
            this.$store.commit('decideNav', 0);
        }
    }
}
</script>

<style scoped lang="scss">
    #nav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 500;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 170px;
            margin: 50px 0 0;
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