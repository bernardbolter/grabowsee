<template>
    <div 
        class="exhibition" 
        :class="{ exhibitionOn: this.$store.state.activeLink === 2 }"
        :style="background"
    >
        <section class="info">
            <h1>‘POWER’</h1>
            <h3>8th Edition</h3>
            <!-- <h2>Countdown Grabowsee 21.-13. August 2020</h2>
            <div class="dates">
                <p>Start 18:00 21.08</p>
                <p>End 18:00 23.08</p>
            </div> -->
        </section>
        <section class="inspiration">
            <h3>‘We live in Capitalism. Its power seems inescapable. So did the divine right of Kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.”</h3>
            <p>Ursula le Guin</p>
        </section> 
        <section class="participants">
            <h4>Participants:</h4>
            <div class="column">
                <h5>Art</h5>
                <p>Sara Ezzell</p>
                <p>Pernille Rosendahl</p> 				
                <p>Nuno Ferreira</p>				
                <p>Liina Nillson</p>
                <p>Beatrice Baumgartner</p>
                <p>Sally Evans</p> 
                <p>Frank Merkx</p> 				
                <p>Tabea Briggs</p> 
                <p>Elvin Brandhi</p> 
                <p>Becky Buchanan</p> 
                <p>Karolina Svärd</p> 
                <p>Therese Resi</p> 
                <p>Lucas Lacerda Góes</p>			
                <p>Daniel Weyand</p> 			
                <p>Simone Kesting</p> 			
                <p>Dietrich Meyer</p> 
                <p>Sarah Friend</p> 				
                <p>Gabriela Matuszewska</p> 		
                <p>Charlotte Kleinschmidt</p> 
                <p>Ole Zerndt</p> 
                <p>Paloma Schnitzer</p> 			
                <p>Liav Gabay</p> 				
                <p>Dareos Khalili</p> 			
                <p>Elisabeth Wilke</p> 
                <p>Isabel Cavenecia</p> 
                <p>Aja Jacques</p>				
                <p>Caro Ley</p> 				
                <p>Ingrid Blix</p> 				
                <p>Sam Gora</p> 			
                <p>Allistair Walter</p> 		
                <p>Bernard Bolter</p>
                <p>Dilery Alejandra Sanchez Ortiz</p> 	
                <p>P.A. Hülsenbeck</p> 
                <p>Maria Sécio</p> 				
                <p>Thomas Desloges</p> 			
                <p>Merve Namli</p>				
                <p>Pippa Brabyn</p> 				
                <p>Yan Gi Cheng</p> 			
                <p>Alkmini Gkousiari</p> 			
                <p>Aurelia Van Kempen</p>
                <p>Bridget Hines</p> 				
                <p>Alex Porter</p> 
                <p>Elliot Nicol</p> 
                <p>Anna Vlassova-Longworth</p> 		
                <p>Mikolaj Rogowski</p> 			
                <p>Kito Colchester</p> 
                <p>Bella Hope</p> 
                <p>Julian Simon</p> 				
                <p>Max Lunn</p> 			
                <p>Tine Nedbo</p>				
                <p>Maitane Midby </p>
                <p>Toby Saunders</p> 
                <p>Lale Willan</p> 				
                <p>Maria Leibnitz</p>			
                <p>Rob Blake</p>
                <p>Gustav Kleinschmidt</p>	
                <p>Dan Glass</p>	
                <p>Magdalena Zagorski</p>	
                <p>Maxim Schmidthals</p>
            </div>
            <div class="column">
                <h5>Sound</h5>
                <p>Susanna Risberg</p>
                <p>Lottie Sebes</p>
                <p>Michal Krajczok</p> 			
                <p>Samuel Weikopf</p> 			
                <p>Peter Landry</p> 				
                <p>Sebastian Völkers</p>
                <p>Molly Macleod</p>			
                <p>Fiete Rohde</p> 				
                <p>Juliana Napier</p> 			
                <p>Aisling Marnane</p> 
                <p>Florian Lorenz</p> 
                <p>Florian Grove</p>				
                <p>Nils Bloch</p> 
                <p>Laure Boer</p> 
                <p>Yannik Doernte</p> 
                <p>Rachel Margetts</p> 			
                <p>Maja Kala</p> 
                <p>Andy Aquarius</p> 
                <p>Leonardo Rossi</p>
                <p>Sam Eyvaz</p>
                <p>Future East Festival</p>
                <h5>Direction</h5>
                <p>Alice Morey</p>
                <p>Philip Schrader</p>
                <p>Rob Blake</p> 
                <p>Gustav Kleinschmidt</p>
                <p>Fabrix Art</p>
                <p>Bernard Bolter</p>
            </div>
        </section>
        <!-- <section class="event">
            <h3>Exhibition</h3>
            <p>We welcome you to share with us a weekend full of creativity, installations, performances and sounds interweaving in and out of delicate structures that live in symbiosis with nature. You are invited to stay for the weekend, we share all responsibilities of cleaning and taking care of the site, Please bring your own food and drink, take your rubbish with you when you leave, camping equipment and look after the environment by leaving no trace.</p>
            <p>Because the event is private please RSVP, once we receive this, you will get an invitation to the event, along with more information and a map. The event is FREE, we do ask for donation when you arrive.</p>
            <a 
                href="https://forms.gle/m2c5iZkR2NK2dU8f8" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >RSVP</a>
        </section>
        <section class="covid">
            <h3>COVID</h3>
            <p>We understand that this is an unusual time for all of us and therefore we have to adjust to the development over the next weeks. We can’t foresee the situation at the end of August. So we still have to figure out how we can realise the event by taking the distance rules into account. There will be various locations on site with hand sanitizers, wear masks if necessary and we ask all those who enter to fill out a form with contact details. The whole event is private and will take place outside. We ask any one who is vulnerable or has been sick to think really carefully about entering the site.</p>
        </section> -->
        <section class="about">
            <h3>About</h3>
            <p>‘Countdown Grabowsee’ is a phrase given to this project from the beginning as a collective yearning for something more, an idea of a beginning , a starting point from where to end, an escape, a place of possibilities through building new relationships, new experiences and sharing your own. And without wanting to make you cringe, a countdown to look forward to.</p>
            <p>‘Globe Gallery’ was the initial name for a part of the site that could voice these experiences through a site specific exhibition that expanded on the ground floor of the old sleeping quarters. House No.5. The corridor consists of over twenty-two rooms, broken windows, thick spider webs, dusty bricks, torn, crumbly wallpaper and the occasional artwork from past projects merging into the layers of history that unfold in this place.</p>
            <p>The project started in 2013 with a small group who met building installations in an old basement club in Berlin. The first year was set as a casual ‘work camp’ to prepare a techno festival which did not happen, the next year it was EU funded, which enabled the basic amenity structures to be built; kitchen, running water, compost toilet, pizza oven, treehouse, then year after year it evolved and keeps developing into a project unexplainable.</p>
            <p>The site is situated in the middle of a derelict tuberculosis hospital called Heilstätte Grabowsee, 30km North of Berlin. The first permanent building of the hospital was built in 1897 as a sanctuary for tuberculosis patients until after the Second World War, then it was used by the Red Army as a military hospital until 1995.</p>
            <p>We host an annual non-profit collaborative residency which fosters artistic collaboration, through workshops, readings, performances, chance happenings, and communal living.We aim to cultivate a peaceful community which entails co-creation, camping and living amongst idyllic natural landscapes.</p>
        </section>
    </div>
</template>

<script>
export default {
    name: "Exhibition",
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
    .exhibition {
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
    .exhibitionOn {
        left: 0;
        transition: left 1s ease-in-out;
        @media (min-width: 768px) {
            left: 15%;
        }
        @media (min-width: 1100px) {
            left: 25%;
        }
    }
    .info {
        width: 90%;
        margin: 50px 5% 10px;
        padding: 0;

        h1 {
            font-size: 50px;
            text-align: center;
            font-weight: 700;
            padding: 0;
            margin: 175px 0 0 0;

            @media (min-width: 500px) {
                font-size: 80px;
                margin: 150px 0 0;
            }
        }

        h3 {
            margin: 0;
            padding: 0;
            text-align: center;
            opacity: 0.6;
            font-weight: 400;
            font-size: 30px;
        }

        h2 {
            text-align: center;
        }

        .dates {
            width: 60%;
            margin: 0 20%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            font-weight: 200;

            p {
                margin: 10px 0;
                padding: 0;
            }

            @media (min-width: 500px) {
                font-size: 21px;
            }

            @media (min-width: 1100px) {
                flex-direction: row;
                font-size: 24px;
                justify-content: space-between;
            }
        }
    }
    .inspiration {
        width: 90%;
        margin: 10px 5% 0 5%;
        @media (min-width: 500px) {
            width: 80%;
            margin: 15px 10% 0 10%;
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
    .participants {
        width: 80%;
        margin: 0 10%;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;

        h4 {
            width: 100%;
        }
    }
    .column {
        width: 50%;
        margin: 0;
        padding: 0;

        h5 {
            font-size: 20px;
            font-weight: 800;
            opacity: 0.8;
        }

        p {
            font-size: 14px;
            margin: 0;
            padding: 0;
            line-height: 1.4;
        }
    }
    .event {
        width: 80%;
        margin: 0 10%;

        p {
            line-height: 1.5;
            font-size: 16px;
            opacity: 0.8;
            font-weight: 600;
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
                padding: 10px 50px;
            }

            &:hover {
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }
        }
    }
    .covid {
        color: red;
        width: 80%;
        margin: 0 10%;

        p {
            line-height: 1.5;
            font-size: 16px;
            opacity: 0.8;
            font-weight: 400;
        }
    }
    .about {
        width: 80%;
        margin: 0 10% 250px;

        p {
            line-height: 1.5;
            font-size: 16px;
            opacity: 0.8;
            font-weight: 400;
        }
    }
</style>