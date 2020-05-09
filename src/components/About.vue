<template>
    <div 
        class="about" 
        :class="{aboutOn : this.$store.state.activeLink === 1}"
        :style="back"
        >
            <h3>
                Globe Gallery is an alternative Art Gallery starting in 2013, in the middle of a derelict hospital, Heilstätte Grabowsee, 30km North of Berlin.
            </h3>
            <p>
                We host an annual non-profit and alternative gathering with a full week of expressing your creativity through making art, inspiring workshops, readings, performances and social exchange. It’s an open space for collaboration and we encourage you to contribute to the experience through your participation. Think of a DIY atmosphere, co-creation, camping amongst a derelict hospital with rural infrastructure but with its on lake and fire place - and be prepared or some unusual group activities.
            </p>
            <p>
                Globe Gallery aims to be a platform for everyone who wants to share their work in a dedicated, dogma free and one-of-a-kind environment.
            </p>
            <p>
                Besides creating art we need to maintain the infrastructure of the property with ‘Site Work’ this is two hours a day during your stay in order to give something back to the place.
            </p>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            back: {
                "background-color" : this.$store.getters.makeOpaque(false, 9)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .about {
        width: 100%;
        margin: 0;
        padding: 0 0 90px 0;
        height: 100vh;
        top: -100%;
        left: 0;
        position: absolute;
        transition: top 1s ease-in-out;
        background: #000;
        z-index: 202;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-y: scroll;
        @media (min-width: 550px) {
            overflow-y: hidden;
        }
        @media (min-width: 650px) {
            padding: 0;
        }
        @media (min-width: 769px) {
            width: 60%;
            position: absolute;
            left: 15%;
            justify-content: center;
        }
        @media (min-width: 1100px) {
            width: 50%;
            left: 25%;
        }

        h3 {
            width: 90%;
            margin: 170px 5% 0 5%;
            font-size: 17px;
            padding: 0;
            line-height: 1.6;
            font-weight: 600;
            font-family: $monofont;
            @media (min-width: 500px) {
                margin: 190px 5% 0 5%;
            }
            @media (min-width: 650px) {
                width: 80%;
                margin: 190px 15% 0 5%;
            }
            @media (min-width: 700px) {
                width: 65%;
                margin: 200px 30% 0 5%;
            }
            @media (min-width: 769px) {
                width: 90%;
                font-size: 18px;
                margin: 0 5%;
            }
            @media (min-width: 1000px) {
                font-size: 18px;
                width: 80%;
                margin: 0 10%;
            }
            @media (min-width: 1100px) {
                font-size: 20px;
            }
            @media (min-width: 1500px) {
                font-size: 22px;
            }
        }

        p {
            width: 90%;
            margin: 15px 5%;
            padding: 0;
            font-weight: 300;
            line-height: 1.6;
            font-size: 14px;
            opacity: 0.9;
            z-index: 1000;
            @media (min-width: 1000px) {
                z-index: 202;
                font-size: 14px;
                width: 80%;
                margin: 0 10%;
            }
            @media (min-width: 1100px) {
                font-size: 16px;
            }
            @media (min-width: 1500px) {
                font-size: 18px;
            }
        }
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
    }
</style>