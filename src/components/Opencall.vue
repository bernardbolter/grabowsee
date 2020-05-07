<template>
    <div 
        class="opencall" 
        :class="{ openOn: this.$store.state.links[1].active }"
        :style="borderLeft"
    >
        <section class="info">
            <div class="left">
                <h4>OPEN</h4>
                <p>Residency period:</p>
                <p>Exhibition weekend:</p>
            </div>
            <div class="right">
                <h4>CALL</h4>
                <p>15 - 23rd August 2020</p>
                <p>21-23rd August 2020</p>
            </div>
        </section>
        <section class="title">
            <h5>We welcome project proposals for this year's theme of</h5>
            <h1>‘POWER’</h1>
        </section>
        <section class="inspiration">
            <h2>Sometimes the <span class="power">fragility</span> of a situation has <span class="power">no shame</span>, the <span class="power">optimism</span> reveals a secretive <span class="power">hierarchy</span>. <span class="power">Abuse</span> and <span class="power">force</span> , <span class="power">quietly</span> and <span class="power">calmly</span> allow the ripples to become <span class="power">centered</span>. The <span class="power">ocean</span> waves filter it’s <span class="power">electricity</span> , halting the <span class="power">internet</span>. Energy concentrates in other forms. <span class="power">Women</span> , Men, bodies, animals, minerals, insects, plants feel the <span class="power">stillness</span> of a <span class="power">space</span>.  <span class="power">Sport</span> gives you physical <span class="power">strength</span>, <span class="power">Dominion</span> requires <span class="power">resistance</span>,  <span class="power">Suppression</span> of <span class="power">women</span>, children and men is a <span class="power">responsibility</span> of the <span class="power">people</span>. We can acquire <span class="power">materials</span> that can enforce <span class="power">connections</span> between <span class="power">people</span>, <span class="power">assertiveness</span> towards the mind. <span class="power">Self-serving</span> the <span class="power">oppressive</span> <span class="power">corruption</span> of <span class="power">money</span>.  Can our true <span class="power">weapons</span> be <span class="power">love</span> ?. <span class="power">The Sea</span> and <span class="power">the Sun</span> can be the <span class="power">chargers</span> for us, <span class="power">united</span>. <span class="power">A line of flight</span>.</h2>
            <h3>‘We live in Capitalism. Its power seems inescapable. So did the divine right of Kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.”</h3>
            <p>Ursula le Guin</p>
        </section> 
        <section class="application">
        </section>
    </div>
</template>

<script>
export default {
    name: "Opencall",
    data() {
        return {
            borderLeft: {
                "border-left" : `4px solid ${this.$store.getters.makeOpaque(true, 9)}`,
                "background-color" : this.$store.getters.makeOpaque(false, 9)
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .opencall {
        width: 75%;
        height: 100vh;
        position: fixed;
        overflow-y: scroll;
        top: 0;
        left: 100%;
        margin: 0;
        padding: 0;
        transition: left 0.5s ease-in-out;
        z-index: 800;
        font-size: 10px;
        box-sizing: border-box;
        
    }
    .openOn {
        left: 25%;
        transition: left 1s ease-in-out;
    }
    .info {
        width: 60%;
        margin: 100px 20% 0 20%;
        display: flex;
        flex-direction: row;  

        h4 {
            font-size: 30px;
            font-weight: 700;
        }
        p {
            font-size: 30px;
            font-weight: 200;
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
    .title {
        width: 80%;
        margin: 50px 10% 0 10%;
        text-align: center;

        h5 {
            font-size: 20px;
            font-weight: 100
        }

        h1 {
            font-size: 60px;
            font-weight: 800;
        }
    }
    .inspiration {
        width: 80%;
        margin: 50px 10% 0 10%;

        h2 {
            font-size: 18px;
            font-weight: 600;
            text-align: justify;
            line-height: 1.7;

            .power {
                background-color: red;
            }
        }
        h3 {
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            font-style: italic;
            line-height: 2
        }
        p {
            font-size: 30px;
            font-weight: 500;
            text-align: center;
        }
    }
</style>