<template>
    <div 
        class="opencall" 
        :class="{ openOn: this.$store.state.activeLink === 2 }"
        :style="background"
    >
        <section class="info">
            <div class="left">
                <h4>OPEN CALL</h4>
                <p>Residency period:</p>
                <p>Exhibition weekend:</p>
            </div>
            <div class="right">
                <h2>Application deadline: 1st July 2023</h2>
                <p>10 - 20 August 2023</p>
                <p>18 - 20 August 2023</p>
            </div>
        </section>

        <section class="title">
            <h5>We welcome project and artist proposals for this 11th edition of Countdown Grabowsee.</h5>
            <p class="tides">"TIDES"</p>
            <img :src="require('../assets/tides.gif' )" alt="Residency Flyer 2022" />
        </section>
        <!-- <section class="inspiration">
            <h3>‘We live in Capitalism. Its power seems inescapable. So did the divine right of Kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.”</h3>
            <p>Ursula le Guin</p>
        </section>  -->

        <section class="application">
            <h3><b>Tides</b> are a result of the gravitational pull between the moon and the earth. In its rotation of the earth, the moon pulls the seas back and forth towards it, the water undulating in shifting patterns across the surface of the planet.</h3>
            <h4>Tides are the result of an association, of relations, of a dance between two separate yet independent spheres. Tides have two states, they transform, they are like similies: tides as the moon, the moon as sleep, our sleep as other, the-other-and-self as the push-and-pull of a tide.</h4>
            <h4>For Countdown Grabowsee 2023, as artists, we want to ask: How are tides present in our lives? How are we pulled into rhythms by that which surrounds us? How do we, in turn, create rhythms in our local environments, in others? Is an interdependence with another also tidal, rhythmical? Are our interdependencies the result of more powerful forces?</h4>
            <p>This year under the working title “Tides“, our 11th edition, we welcome all forms of artists, creatives and musicians to join us again on an exploratory residency at Heilstätte Grabowsee. </p>
            <p>You are invited to create a site-specific piece of work, this could be anything from a sculpture, a painting, a soundscape, workshop or just conversation. We invite you to be creative, think outside of your usual comforts of making by producing something on site, using the working title and the special nature of the space through the experiences you make whilst on the residency.</p>
        </section>

        <section class="application bottom-margin">
            <!-- <h1>EN</h1> -->
            <h2>We are:</h2>
            <p>- a camping residency, in the middle of a forest, by a lake, surrounded by derelict buildings</p>
            <p>-a community of creatives who strive to belong outside of the city, finding alternative ways of meeting.</p>
            <p>- We aim to cultivate a peaceful creative community, where participants are encouraged to experiment, collaborate and be inspired.</p>

            <h2>We provide:</h2>
            <p>- designated rooms as temporary studios</p>
            <p>- materials from the ‘Fundus’; fabrics, found objects, bits of furniture, wood, random bits and bobs.</p>
            <p>- basic working tools like hammers, drill, saws, screws etc.</p>
            <p>- designated area where you can set up a tent</p>
            <p>- designated area where you can park your camper van/car</p>
            <p>- compost toilet</p>
            <p>- a camp fire</p>
            <p>- running water</p>
            <p>- functional kitchen were we cook communally, sharing responsibilities during meal times</p>

            <h2>We limit:</h2>
            <p>- electricity</p>
            <p>- internet</p>
            <p>- lights</p>
            <p>- sound equipment</p>
            <p>- specific requests</p>
            <p>-participation age limit from 16></p>
            <p>We kindly ask you to be self-reliant, the special nature of this residency allows you to be challenged and work accordingly.</p>


            <h2>Need to know:</h2>
            <p>- Please be aware that by entering the site you are entering a derelict area, with broken glass, dusty rooms and some buildings marked unsafe.</p>
            <p>- Please take care of yourself on site, particularly in the buildings and wear appropriate footwear</p>
            <p>- Please be aware this is a natural site full of beautiful plants and animals that we are responsible for.</p>
            <p>- We are not a traditional venue so please be aware of these conditions in terms of your practice and your application.</p>
            <p>- We have a <b>NO DOG</b> policy</p>
            <p>- We <b>DO NOT ACCEPT APPLICATIONS</b> that can not come for the <b>FULL</b> duration. </p>
            <p>- We cook vegetarian/vegan food</p>
            <p>- The cost of the residency is 175€ this goes towards infrastructure, food, electricity, technical support & photography</p>

            <h2 class="headspace">Application:</h2>
            <p>Please fill in our participation form:</p>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeC9AAqobByEuycKWCOT92uE3witMny2R0kucuwE56pclYLrw/viewform?usp=pp_url" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >Application Link</a>


            <!-- <div class="open-call-closed-container">
                <p>Applications are Closed.</p>
            </div> -->

            <h2>Email us at globe.gallery@gmx.de with any questions.</h2>
            <h2 class="bold">Application deadline: 1st July 2023</h2>
            <p>Selected participants will be informed all by the end of July 2023</p>
            <h2 class="bold">We look forward to your proposals and welcome you to this year's edition!</h2>
        </section>
    </div>
</template>

<script>
export default {
    name: "Opencall",
    data() {
        return {
            background: {
                "background-color" : this.$store.getters.makeOpaque(false, 8)
            },
            linkStyles: {
                "background-color" : this.$store.getters.makeOpaque(true, 8),
                "color" : this.$store.getters.makeOpaque(false, 9)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .opencall {
        width: 100%;
        height: 100vh;
        position: fixed;
        overflow-y: scroll;
        top: 0;
        left: 100%;
        margin: 0;
        padding: 0;
        transition: left 0.5s ease-in-out;
        z-index: 350;
        box-sizing: border-box;
        @media (min-width: 768px) {
            width: 85%;
        }
        @media (min-width: 1100px) {
            width: 75%;
        }
        
    }
    .openOn {
        left: 0;
        transition: left 1s ease-in-out;
        @media (min-width: 768px) {
            left: 15%;
        }
        @media (min-width: 1100px) {
            left: 25%;
        }
    }
    .tides {
        font-size: 90px;
        font-weight: 900;
        color: white;
        margin: 0 0 -40px;
        position: relative;
    }
    .info {
        width: 90%;
        margin: 110px 5% 0 5%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        @media (min-width: 500px) {
            margin: 150px 5% 0 5%;
        }
        @media (min-width: 650px) {
            width: 80%;
            margin: 150px 10% 0 10%;
        }
        @media (min-width: 1200px) {
            width: 60%;
            margin: 100px 20% 0 20%;
        }

        h4 {
            font-size: 18px;
            font-weight: 700;
            text-align: left;
            @media (min-width: 500px) {
                font-size: 24px;
            }
            @media (min-width: 1400px) {
                font-size: 30px;
            }
        }
        h2 {
            font-size: 13px;
            @media (min-width: 650px) {
                font-size: 14px;
            }
            @media (min-width: 1300px) {
                font-size: 16px;
            }
            @media (min-width: 1400px) {
                font-size: 18px;
            }
        }
        p {
            font-size: 12px;
            font-weight: 400;
            @media (min-width: 500px) {
                font-size: 20px;
                font-weight: 200px;
            }
            @media (min-width: 650px) {
                font-size: 24px;
            }
            @media (min-width: 1400px) {
                font-size: 28px;
            }
        }
    }
    .left {
        text-align: left;
        width: 50%;
    }
    .right {
        text-align: right;
        width: 50%;
    }
    .bold {
        font-weight: 800;
    }
    .title {
        width: 80%;
        margin: 10px 10% 0 10%;
        @media (min-width: 500px) {
            margin: 50px 10% 0 10%;
        }

        h5 {
            font-size: 15px;
            font-weight: 400;
            text-align: left;
            @media (min-width: 500px) {
                font-size: 14px;
                text-align: center;
            }
            @media (min-width: 650px) {
               font-size: 18px;
                font-weight: 200; 
            }
            @media (min-width: 1400px) {
                font-size: 20px;
                font-weight: 100;
            }
            @media (min-width: 1400px) {
                font-size: 28px;
            }
        }

        h1 {
            font-size: 50px;
            font-weight: 800;
            text-align: center;

            @media (min-width: 500px) {
                font-size: 60px;
            }
        }

        img {
            width: 100%;
            margin: 0;

            @media (min-width: 500px) {
                width: 90%;
                margin: 0 5%;
            }

            @media (min-width: 650px) {
                width: 80%;
                margin: 0 10%;
            }

            @media (min-width: 800px) {
                width: 70%;
                margin: 0 15%;
            }

            @media (min-width: 1000px) {
                width: 60%;
                margin: 0 20%;
            }

            @media (min-width: 1200px) {
                width: 50%;
                margin: 0 25%;
            }
        }

        .video {
            width: 100%;
            margin: 0;
        }
    }
    .inspiration {
        width: 90%;
        margin: 40px 5% 0 5%;
        @media (min-width: 500px) {
            width: 80%;
            margin: 50px 10% 0 10%;
        }
        h3 {
            font-size: 14px;
            font-weight: 300;
            text-align: center;
            font-style: italic;
            line-height: 1.5;
            @media (min-width: 500px) {
                font-size: 16px;
                line-height: 2;
            }
            @media (min-width: 1400px) {
                font-size: 19px;
            }
        }
        p {
            font-size: 15px;
            font-weight: 500;
            text-align: right;
            @media (min-width: 1400px) {
                font-size: 17px;
            }
        }
    }
    .application {
        width: 86%;
        margin: 30px 7%;
        padding: 0 0 75px;
        @media (min-width: 1000px) {
            width: 80%;
            margin: 40px 10%;
        }
        @media (min-width: 1200px) {
            width: 74%;
            margin: 40px 13%;
        }
        @media (min-width: 1200px) {
            width: 70%;
            margin: 50px 15%;
        }
        @media (min-width: 1400px) {
            width: 60%;
            margin: 50px 20%;
        }
        @media (min-width: 1400px) {
            width: 60%;
            margin: 50px 20%;
        }

        h1 {
            font-size: 18px;
            font-weight: 600;
            font-family: $monofont;
            opacity: 0.6;
            margin: 50px 0 0 0;
        }

        h2 {
            font-size: 16px;
            font-weight: 700;
            @media (min-width: 500px) {
                font-size: 18px;
            }
        }

        p {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.7;
            opacity: 0.7;
            @media (min-width: 500px) {
                font-size: 16px;
            }
        }

        a {
            padding: 25px 40px;
            margin: 20px 10px 20px 0;
            display: inline-block;
            text-decoration: none;
            font-size: 18px;
            font-family: $monofont;
            opacity: 0.6;
            transition: opacity 0.5s ease-in-out;
            
            @media (min-width: 1300px) {
                font-size: 20px;
                padding: 30px 50px;
            }

            &:hover {
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }
        }

        .open-call-closed-container {
            width: 100%;
            padding: 0;
            margin: 0 0 20px;
            background: #d18e94;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(255,255,255,.2);

            p {
                color: rgba(255,255,255,.8);
                font-size: 20px;
                font-weight: bold;
                padding: 40px 0;
                margin: 0;
            }
        }

        .red {
            color: red;
        }

        .headspace {
            margin-top: 100px;
        }
    }
    .bottom-margin {
        margin-bottom: 100px;
    }
</style>