<template>
    <div 
        class="contact" 
        :class="{ contactOn: this.$store.state.activeLink === 4 }"
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
                "border-left" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`,
                "border-top" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`,
                "border-bottom" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`,
                "color" : this.$store.getters.makeOpaque(false, 8)
            },
            line: {
                "border-bottom" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .contact {
        position: fixed;
        width: 50%;
        top: 75px;
        left: 100%;
        z-index: 301;
        display: flex;
        flex-direction: column;
        align-content: left;
        justify-content: center;
        transition: left 1s ease-in-out;
        padding: 40px 30px;
        box-sizing: border-box;
        @media (min-width: 1000px) {
            top: 150px;
            width: 35%;
        }
        @media (min-width: 1200px) {
            top: 300px;
            width: 23%;
        }
    }

    .contactOn {
        left: 50%;
        transition: left 1s ease-in-out;
        @media (min-width: 1000px) {
            left: 65%;
        }
        @media (min-width: 1200px) {
            left: 77%;
        }
    }

    h1 {
        margin: 5px 0 0 20px;
        padding: 0 0 20px 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
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
</style>