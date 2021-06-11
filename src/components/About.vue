<template>
    <div 
        class="about" 
        :class="{aboutOn : this.$store.state.activeLink === 1}"
        :style="back"
        >
            <h3>We host an annual non-profit collaborative summer residency on the grounds of Heilstätte Grabowsee,  which fosters artistic collaboration, through workshops, readings, performances, chance happenings, and communal living. We aim to cultivate a peaceful creative community, where participants are encouraged to experiment, collaborate and be inspired.</h3>
            <p>The project started when a collective was formed in 2012 after meeting in a basement club in Berlin,  building odd installations. The first year was set as a casual event to prepare for a techno festival that did not happen, the next year we got some funding enabling the basic amenity structures to be built; kitchen, running water, compost toilet, pizza oven, treehouse,  then year after year it evolved, developing into a project unexplainable.</p>
            <p>Community is fundamental to everything we do. Countdown Grabowsee is a slow growing community where kindness, tolerance and mutual support come first. We are not corporately or privately funded; the Countdown Grabowsee project runs through the hard work,  generosity and passion of everyone involved. We do not tolerate any violence or discrimation.</p>
            <p class="botpad">We strive for an open and free environment where every human and non-human can co-exist.</p>
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
        top: -100vh;
        left: 0;
        position: fixed;
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
            font-size: 15px;
            padding: 0;
            line-height: 1.6;
            font-weight: 600;
            @media (min-width: 500px) {
                margin: 190px 5% 17px 5%;
            }
            @media (min-width: 650px) {
                width: 80%;
                margin: 190px 15% 17px 5%;
            }
            @media (min-width: 769px) {
                width: 90%;
                font-size: 16px;
                margin: 100px 5% 17px;
            }
            @media (min-width: 1000px) {
                font-size: 17px;
                width: 80%;
                margin: 100px 10% 17px;
            }
            @media (min-width: 1500px) {
                font-size: 18px;
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
                // padding: 0;
            }
        }
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
        overflow-y: scroll;
        @media (min-width: 768px) {
            // overflow-y: hidden;
        }
    }
</style>