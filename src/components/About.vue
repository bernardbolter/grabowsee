<template>
    <div 
        class="about" 
        :class="{aboutOn : this.$store.state.activeLink === 1}"
        :style="back"
        >
            <h3>
                ‘Countdown Grabowsee’ is a phrase given to this project from the beginning, a countdown to look forward to.
            </h3>
            <p>
                ‘Globe Gallery’ was the initial name for a part of the site that could voice experiences through a site specific exhibition that expanded on the ground floor of the old sleeping quarters.
            </p>
            <p>
                This  project started in 2013 with a small group who met building installations in an old basement club in Berlin, year after year it evolved, developing into the unexplainable.
            </p>
            <p class="botpad">
                The site is situated in the middle of a derelict tuberculosis hospital called Heilstätte Grabowsee, 30km North of Berlin.
            </p>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            back: {
                "background-color" : this.$store.getters.makeOpaque(false, 7)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .about {
        width: 100%;
        margin: 0;
        padding: 0;
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
        overflow: hidden;
        @media (min-width: 650px) {
            padding: 0;
        }
        @media (min-width: 769px) {
            width: 60%;
            position: fixed;
            left: 15%;
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
            @media (min-width: 500px) {
                margin: 190px 5% 0 5%;
            }
            @media (min-width: 650px) {
                width: 80%;
                margin: 190px 15% 0 5%;
            }
            @media (min-width: 769px) {
                width: 90%;
                font-size: 18px;
                margin: 100px 5% 0;
            }
            @media (min-width: 1000px) {
                font-size: 20px;
                width: 80%;
                margin: 100px 10% 0;
            }
            @media (min-width: 1500px) {
                font-size: 22px;
            }
        }

        p {
            width: 90%;
            margin: 15px 5%;
            padding: 0;
            font-weight: 400;
            line-height: 1.6;
            font-size: 15px;
            opacity: 0.9;
            z-index: 1000;
            @media (min-width: 1000px) {
                z-index: 202;
                font-size: 16px;
                width: 80%;
                margin: 15px 10%;
            }
            @media (min-width: 1100px) {
                font-size: 16px;
            }
            @media (min-width: 1500px) {
                font-size: 18px;
            }
        }
        .botpad {
            padding: 0 0 150px 0;
            @media (min-width: 600px) {
                padding: 0 0 250px 0;
            }
            @media (min-width: 768px) {
                padding: 0;
            }
        }
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
        overflow-y: scroll;
        @media (min-width: 768px) {
            overflow-y: hidden;
        }
    }
</style>