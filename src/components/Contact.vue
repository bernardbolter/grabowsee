<template>
    <div 
        class="contact" 
        :class="{ contactOn: this.$store.state.links[3].active }"
        :style="background"
    >
        <h1 :style="line"><span>Philip Schrader</span> or <span>Alice Morey</span></h1>
        <h2>globe.gallery (at) gmx.de</h2>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            hover: false,
            background: {
                "background-color" : this.$store.getters.makeOpaque(true, 6),
                "border" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`
            },
            line: {
                "border-bottom" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`
            }
        }
    }
}
</script>

<style scoped style="scss">
    .contact {
        position: absolute;
        top: 500px;
        left: 100%;
        z-index: 301;
        display: flex;
        flex-direction: column;
        align-content: left;
        justify-content: center;
        transition: left 1s ease-in-out;
        padding: 40px 30px;
        box-sizing: border-box;
    }

    h1 {
        margin: 5px 0 0 20px;
        padding: 0 0 20px 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        border-bottom: 1px solid white;
    }

    span {
        font-weight: 600;
    }

    h2 {
        margin: 15px 0 0 20px;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 15px;
    }

    .contactOn {
        left: -335px;
        transition: left 1s ease-in-out;
    }
</style>