<template>
    <div class="home" :class="{ homeOn : this.$store.state.activeLink === 0}">
        <h1 :style="textColor">‘POWER’</h1>
        <section class="inspiration" :style="textColor">
            <h2>Sometimes the <span class="power">fragility</span> of a situation has <span class="power">no shame</span>, the <span class="power">optimism</span> reveals a secretive <span class="power">hierarchy</span>. <span class="power">Abuse</span> and <span class="power">force</span> , <span class="power">quietly</span> and <span class="power">calmly</span> allow the ripples to become <span class="power">centered</span>. The <span class="power">ocean</span> waves filter it’s <span class="power">electricity</span> , halting the <span class="power">internet</span>. Energy concentrates in other forms. <span class="power">Women</span> , Men, bodies, animals, minerals, insects, plants feel the <span class="power">stillness</span> of a <span class="power">space</span>.  <span class="power">Sport</span> gives you physical <span class="power">strength</span>, <span class="power">Dominion</span> requires <span class="power">resistance</span>,  <span class="power">Suppression</span> of <span class="power">women</span>, children and men is a <span class="power">responsibility</span> of the <span class="power">people</span>. We can acquire <span class="power">materials</span> that can enforce <span class="power">connections</span> between <span class="power">people</span>, <span class="power">assertiveness</span> towards the mind. <span class="power">Self-serving</span> the <span class="power">oppressive</span> <span class="power">corruption</span> of <span class="power">money</span>.  Can our true <span class="power">weapons</span> be <span class="power">love</span> ?. <span class="power">The Sea</span> and <span class="power">the Sun</span> can be the <span class="power">chargers</span> for us, <span class="power">united</span>. <span class="power">A line of flight</span>.</h2>
        </section> 
 </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            textColor: {
                color : this.$store.getters.makeOpaque(false, 9)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .home {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        transition: opacity 1s ease-in-out;
        opacity: 0;
        margin: 20px 5% 200px 5%;
        top: 160px;
        position: fixed;
        z-index: 2;
        @media (min-width: 500px) {
            align-items: flex-end;
            top: 90px;
        }
        @media (min-width: 650px) {
            margin: 20px 5% 185px 5%;
        }
        @media (min-width: 769px) {
            width: 75%;
            margin: 5% 5% 0 20%;
            top: 0; 
        }
        @media (min-width: 1100px) {
            margin: 75px 5% 0 20%;
            width: 75%;
            align-items: flex-start;
        }
        @media (min-width: 1400px) {
            margin: 100px 15% 0 20%;
            width: 65%;
            align-items: flex-start;
        }

        h1 {
            font-size: 25px;
            font-weight: 800;
            text-align: right;
            margin: 0;
            padding: 0;
            z-index: 3000;
            @media (min-width: 500px) {
                font-size: 30px;
                margin: 0 30px 0 0;
            }
            @media (min-width: 650px) {
                font-size: 40px;
            }
            @media (min-width: 769px) {
                font-size: 50px;
            }
            @media (min-width: 1100px) {
                font-size: 60px;
                margin: 0 0 -20px -33px;
            }
            @media (min-width: 1300px) {
                margin: 0 0 -20px 10px;
            }
            @media (min-width: 1500px) {
                font-size: 70px;
                margin: 0;
            }
        }
        .inspiration {
            width: 90%;
            margin: 0 5% 0 5%;
            @media (min-width: 500px) {
                margin: 10px 5% 0 5%;
            }
            h2 {
                font-size: 15px;
                font-weight: 600;
                text-align: justify;
                line-height: 1.7;
                @media (min-width: 500px) {
                    font-size: 16px;
                    line-height: 1.8;
                }
                @media (min-width: 1300px) {
                    font-size: 18px;
                    line-height: 2;
                }
                @media (min-width: 1400px) {
                    font-size: 20px;
                }

                .power {
                    background-color: rgba(109,192,169,0.3);
                }
            }
        }
    }
    .homeOn {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        position: relative;
        z-index: 3000;
    }
</style>