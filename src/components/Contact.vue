<template>
    <div 
        class="contact" 
        :class="{ contactOn: this.$store.state.activeLink === 4 }"
        :style="background"
    >
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
                "background-color" : this.$store.getters.makeOpaque(true, 7),
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
        width: 100%;
        top: auto;
        bottom: 10px;
        left: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: left 1s ease-in-out;
        padding: 15px 20px;
        box-sizing: border-box;
        border-left: none;
        @media (min-width: 500px) {
            width: 60%;
            bottom: 100px;
            padding: 20px 20px;
        }
        @media (min-width: 769px) {
            width: 50%;
            top: 75px;
            bottom: auto;
            z-index: 301;
            padding: 40px 30px;
        }
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
        left: 20px;
        transition: left 1s ease-in-out;
        @media (min-width: 500px) {
            left: 40%;
        }
        @media (min-width: 769px) {
            left: 50%;
        }
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
        font-size: 12px;
        @media (min-width: 400px) {
           font-size: 14px; 
        }
        @media (min-width: 600px) {
           font-size: 16px; 
        }
    }

    span {
        font-weight: 600;
    }

    h2 {
        margin: 0 0 0 10px;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 11px;
        @media (min-width: 400px) {
           font-size: 13px; 
        }
        @media (min-width: 600px) {
           font-size: 15px; 
        }
    }
</style>