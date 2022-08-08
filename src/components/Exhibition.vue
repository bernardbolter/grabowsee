<template>
    <div 
        class="exhibition" 
        :class="{ exhibitionOn: this.$store.state.activeLink === 2 }"
        :style="background"
    >
        <section class="info">
            <!-- <h1>‘MONEY’</h1> -->
            <h3><b>"INERTIA"</b> | 10th Edition</h3>
            <h2>Countdown Grabowsee</h2>
            <h2>10.-24. August 2022</h2>
            <!-- <div class="dates">
                <p>Start 18:00 21.08</p>
                <p>End 18:00 23.08</p>
            </div> -->
        </section>
        <section class="title">
            <img :src="require('../assets/inertia.gif' )" alt="Residency Flyer 2022" />
        </section>
        <section class="inspiration">
            <h3>“a property of matter by which it continues in its existing state of rest or uniform motion in a straight line, unless that state is changed by an external force.”</h3>
            <h5>When people say something ‘has always been this way’ they’re usually justifying not changing something that probably really needs changing. Whether you call it cultural hegemony, social reproduction or most commonly ‘status quo’, these social tendencies usually work in the same way; a dominating system of norms which reproduce themselves and inherently exclude anything that doesn't conform. From this position the prospect of bringing about meaningful opposition and eventual change is challenging (although certainly not impossible).</h5>
            <h5>The scientific concept of inertia, however, is describing something a little different. Although it describes a continuing state of being or stasis, it does not hold the implication that this stasis is necessarily being reproduced and self-justified. Instead, It more simply implies a repetition or resting state. In scientific terms, Inertia can furthermore be very clearly be changed or altered by an external force.</h5>
            <h5>For Countdown Grabowsee 2022, as artists, we want to specifically ask: what happens when we think about the concept of inertia and apply it to what we see around us? Can this notion of inertia provide us with a new lens or framework to study how repetition and stasis can be both transformed and maintained? What role can art play in understanding, challenging or even transforming inertia? At the same time, what role can art play in contributing towards inertia? And finally, when should we drive change forward and when can we utilse a resting state?</h5>
        </section> 
        <section class="participants">
            <h4>Participants:</h4>
            <div class="column">
                <h5>Art</h5>
                <p>Sabiwa</p>
                <p>Alkmini</p> 				
                <p>Alfie Sellers</p>				
                <p>Julie Teuber</p>
                <p>Aja Jaques</p>
                <p>Susanna Oteiza</p> 
                <p>Maria Secio</p> 				
                <p>Rob Blake</p> 
                <p>Iolo Walker</p> 
                <p>Imke Rust</p> 
                <p>Ben Dressel</p> 
                <p>Anna Vlassova Longworth</p> 
                <p>Aisling Marnane</p>			
                <p>Nishmi</p> 			
                <p>Magdalena Zagorski</p> 			
                <p>Charlie Hawksfield</p> 
                <p>Octavio Garabello</p> 				
                <p>Ricarda Bochat</p> 		
                <p>Becky Buchanan</p> 
                <p>Daniel Brennan</p> 
                <p>Nadia D’Allesio</p> 			
                <p>Max Lunn</p> 				
                <p>Ivana Kekic</p> 			
                <p>Ana Eloisa Sommer-Madison</p> 
                <p>Mila Startosta</p> 
                <p>Lale Willan</p>				
                <p>Jessica Garfield</p> 				
                <p>Emily Morey</p> 				
                <p>Sam Potter</p> 			
                <p>Allistair Walter</p> 		
                <p>Clara Ewald</p>
                <p>Tukalo Olena</p> 	
                <p>Miguel Soler Montellano</p> 
                <p>Anastasia Sukhareva-Morozova</p> 				
                <p>Lise Wilke</p> 			
                <p>Maitane Midby</p>				
                <p>Jo Harvey</p> 				
                <p>Anne Marina Fiedler</p> 			
                <p>Nkech Kwokolo</p> 			
                <p>Tine Nedbo</p>
                <p>Mia Carvalho</p> 				
                <p>Alice Morey</p> 
                <p>Felix Waldherr</p> 
                <p>Barbara Oliveira</p> 		
                <p>Marina Detsch</p> 			
                <p>Bernart John Bolter IV</p> 
                <p>Inga Kat Coleman</p> 
                <p>Milena Leszkowicz</p> 				
                <p>Filipe Pirl</p> 			
                <p>Maximilian Küster</p>				
                <p>Gaby Bila-Guenther</p>
                <p>Zwei</p> 
                <p>Karolina Svärd</p> 				
                <p>Franziska Doffin</p>			
                <p>Monique Ulrich</p>
                <p>Jack Dove</p>	
                <p>David Braithwaite</p>	
                <p>Werner Kernebeck</p>	
                <p>Charlotte Ruth Kleinschmidt</p>
                <p>Klara Emilie Kleinschmidt</p>
                <p>Philipp Schrader</p>
                <p>Kito Kolchester</p>
                <p>Bella Hope</p>
                <p>Zu Kalinowska</p>
                <p>Aurelia van Kempen</p>
                <p>Lina Nilsson</p>
                <p>Mario</p>
                <p>Ben Whitehill</p>
                <p>Hannah Turner-Duffin</p>
            </div>
            <div class="column">
                <h5>Sound</h5>
                <p>Laure Boer</p>
                <p>Darya Zvezdina</p>
                <p>Andrey Guryanov</p> 			
                <p>Leander Jones</p>
                <p>Juliana Napier</p> 
                <p>Jele Mensen</p> 
                <p>Rosa Landers</p> 
                <p>Andreas Werner</p> 
                <p>Hendrik van Elst</p> 
                <p>Diane Barbe</p> 
                <p>Andreas Heib</p> 
                <p>Nat Fowler</p> 
                <p>Nicolas Saalfeld</p> 
                <p>Janberk Turan</p> 
                <p>Janek van Laak</p> 
                <p>Jonathan Batomene Braun</p> 
                <p>Felix Kopanka (Pöge)</p> 
                <p>Alicia Logan</p> 
                <p>Joana Fostiak</p>
                <p>Christopher Hütte</p>
                <p>Julio Nicolas Cordes</p>
                <p>Michal Krajczok</p>
                <p>felice zhukov</p>
                <p>Tabea Briggs</p>
                <p>Michal Andrisiak</p>
                <p>Lisa Fabian</p>
                <p>Rachel Margetts</p>
                <p>Greta Buitkute</p>
                <p>Alix Ihoumeau</p>
                <p>Samuel Weiskopf</p>
                <p>Lottie Sebes</p>
                <p>Lisa Violetta Gaß</p>
                <p>Ana Carlucci</p>
                <p>Sebastian Völkers</p>
                <p>Julius Conrad</p>
                <p>Besco</p>
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
            <h3>About:</h3>
            <p>We host an annual non-profit collaborative summer residency on the grounds of Heilstätte Grabowsee, which fosters artistic collaboration, through workshops, readings, performances, chance happenings, and communal living. We aim to cultivate a peaceful creative community, where participants are encouraged to experiment, collaborate and be inspired.</p>
            <p>The project started when a collective was formed in 2012 after meeting in a basement club in Berlin, building odd installations. The first year was set as a casual event to prepare for a techno festival that did not happen, the next year we got some funding enabling the basic amenity structures to be built; kitchen, running water, compost toilet, pizza oven, treehouse, then year after year it evolved, developing into a project unexplainable.</p>
            <h3>Community:</h3>
            <p>Community is fundamental to everything we do. Countdown Grabowsee is a slow growing community where kindness, tolerance and mutual support come first. We are not corporately or privately funded; the Countdown Grabowsee project runs through the hard work, generosity and passion of everyone involved. We do not tolerate any violence or discrimation.</p>
            <p>We strive for an open and free environment where every human and non-human can co-exist.</p>
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
    .title {
        width: 80%;
        margin: 10px 10% 0 10%;
        @media (min-width: 500px) {
            margin: 50px 10% 0 10%;
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