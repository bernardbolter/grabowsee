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
                <h2>Application deadline: 20th July 2021</h2>
                <p>11 - 22nd August 2021</p>
                <p>20 - 22rd August 2021</p>
            </div>
        </section>

        <section class="title">
            <h5>We welcome project and artist proposals for this 9th edition of Countdown Grabowsee.</h5>
            <img :src="require('../assets/money_flyer.jpg' )" alt="Residency Flyer 2021" />
        </section>
        <!-- <section class="inspiration">
            <h3>‘We live in Capitalism. Its power seems inescapable. So did the divine right of Kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.”</h3>
            <p>Ursula le Guin</p>
        </section>  -->
        <section class="application">
            <h1>EN</h1>
            <h2>About:</h2>
            <p>We host an annual non-profit collaborative summer residency on the grounds of Heilstätte Grabowsee,  which fosters artistic collaboration, through workshops, readings, performances, chance happenings, and communal living. We aim to cultivate a peaceful creative community, where participants are encouraged to experiment, collaborate and be inspired.</p>
            <p>The project started when a collective was formed in 2012 after meeting in a basement club in Berlin,  building odd installations. The first year was set as a casual event to prepare for a techno festival that did not happen, the next year we got some funding enabling the basic amenity structures to be built; kitchen, running water, compost toilet, pizza oven, treehouse,  then year after year it evolved, developing into a project unexplainable.</p>
           
            <h2>Community:</h2>
            <p>Community is fundamental to everything we do. Countdown Grabowsee is a slow growing community where kindness, tolerance and mutual support come first. We are not corporately or privately funded; the Countdown Grabowsee project runs through the hard work,  generosity and passion of everyone involved. We do not tolerate any violence or discrimation.</p>
            <p>We strive for an open and free environment where every human and non-human can co-exist.</p>

            <h2>Art:</h2>
            <p>We welcome artists and creatives to join us and create a site-specific work. We encourage the work to be in response to the specific nature of the place, your experiences and the working title ‘Money’.  You are welcome to use designated rooms as temporary studios during your time spent on site and we aim to turn the whole area into a large scale exhibition, full of life by the end of the residency. We offer materials from the ‘Fundus’ for you to play with, this includes fabrics, found objects, bits of furniture, wood and random bits and bobs. We provide basic working tools like hammers, drill, saws, screws and there is limited access to electricity. Specific materials and tools please bring for yourself.</p>

            <h2>Sound and music:</h2>
            <p>We also welcome sound artists and musicians to the project. We are open to all kinds of approaches, acoustic or amplified, analog or digital, sound installation or live performance. The work developed at Grabowsee should in some way deal with the theme of the year.  Like the artists , you are also welcome to use designated rooms as temporary studios and we have lockable ones available.</p>
            <p>If you work with amplified sound, please note that you’ll have to bring your own equipment and sound system for the working week. Electricity is limited in areas of the site , so please inform us of how much you need in advance.  For live performances, there will be one PA for the final exhibition week-end.</p>
            
            <h2>Group Exhibition ‘The Bath House’:</h2>
            <p>This year we are focusing on a group exhibition with ALL the participants. This will be held in one of the big spaces, the old washing quarters. ‘The Bath House’ will be an opportunity to bring all the artworks made during the residency together in an intimate setting and pull in the focus of collaboration.</p>
            <p>Please have a think when you apply what kind of work you would contribute to this exhibition and we expect you to work on it during the residency.</p>
            
            <h2>Workshops & active participation:</h2>
            <p>We would like each participant to think of an activity, workshop, game, task that they can bring during the time spent there. This way we can fill up the schedule with sharing skills, conversation and experience. Examples from previous years include; ceramics, printing techniques, voice training, yoga, bookbinding, collage, fermenting.</p>
            
            <h2>Site Work:</h2>
            <p>This year we will not be focusing on the traditional site work activities, but rather use this designated time each day to work towards the end event and organisation of the group exhibition ‘The Bath House’.</p>
            <p>For all the newcomers, two hours a day was designated to help towards the maintenance of the buildings, the continuation of the project and team building.</p>
            
            <h2>Costs:</h2>
            <p>In order to cover the food costs (this includes three meals a day, tea/coffee), we ask for a contribution of 15€ per day. We would like this to be paid before arrival and we will send you bank details along with your confirmation email.</p>
            
            <h2>Please note:</h2>
            <p class="bold">Please be aware that by entering the site you are entering a derelict area, with broken glass, dusty rooms and some buildings marked unsafe. Please take care of yourself on site and particularly in the buildings and wear appropriate footwear. Heilstatte Grabowsee is a wild area with rough terrain and potentially dangerous or tough conditions. Please enter into the spirit of Grabowsee and look after yourselves and others - this isn’t the city! Please also be aware this is a natural site full of beautiful plants and animals that we are responsible for. </p>
            <p>The space holds a variety of rooms and halls with characteristic atmosphere and acoustics that can be used for performances, art and sound installations. Please note that most of the rooms in the derelict building do not have windows or doors, so it is dusty and, depending on the weather, can be damp during the night.</p>
            <p>We are not a traditional white cube space/venue so please be aware of these conditions in terms of your practice and your application. We do not want Artists or Musicians to simply come by during the exhibition weekend and expect to be part of it and we would like for all participants to live as part of the community during the entire residency period, in order to gain the full experience.</p>
            <p>CG is a very social and communal experience, you will have to live and share with strangers in a forest. This isn’t for everyone! Please come with an open minded and positive vibe.</p>
            
            <h2 class="red">COVID 19:</h2>
            <p class="red">We understand that this is an unusual time for all of us and therefore we have to adjust to the development over the next few months. We can’t foresee the situation in August but we will keep you informed about any important changes. We are aiming to go ahead with the residency and we will comply thoroughly with the regulations from the Germany Health authorities on best practice. This will include distance rules, antibody or PCR tests [offered in regular test stations e.g. in Berlin and Oranienburg] and a sign in protocol for everyone who enters into the site. We also are limiting the number of participants this year and we are still in conversation about how to proceed with the exhibition weekend.</p>
            
            <h2 class="headspace">Application:</h2>
            <p>Please fill in our participation form:</p>
            <!-- <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScDSVMDvgeC75pispz7bxp-UCMsXjJDE2zTN4Tx9IaBXc5EVQ/viewform" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >Artist/Creative</a>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScz2b4aLUg0U9BKD0UBDBVKgjMyh8h2FplGpOnzlcF0aoEOdg/viewform" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >Musician/Sound Artist</a> -->

            <div class="open-call-closed-container">
                <p>Applications are Closed.</p>
            </div>

            <h2>Email us at globe.gallery@gmx.de with any questions.</h2>
            <h2 class="bold">Application deadline: 20th July 2021</h2>
            <p>Selected participants will be informed all by the end of July 2021</p>
            <h2 class="bold">We look forward to your proposals and welcome you to this year's edition!</h2>
            
            <div class="line" />
            
            <h1>DE</h1>
            <h2>Allgemeine Information:</h2>
            <p class="bold">Auch dieses Jahr begrüßen wir Euch zur Globe Gallery auf dem Gelände der Heilstätte Grabowsee. Die Veranstaltung möchte einen Rahmen für künstlerische Zusammenarbeit, Workshops, Lesungen, Musik, Performances, Happenings und Gemeinschaft bieten. Unser Ziel ist es dabei ein friedliches Zusammenleben zu fördern und die Teilnehmer_innen zur Zusammenarbeit und Experiment zu inspirieren.</p>
            <p>Der Ursprung der Globe Gallery liegt im Jahr 2012. Zu dieser Zeit veranstalteten wir Parties und Happenings in diversen Berliner Clubs. In den letzten Jahren hat sich unser Fokus von der reinen Partyveranstaltung mehr in Richtung einer dauerhaften, nachhaltigen Veranstaltung auf dem Gelände der Heilstätte Grabowsee verschoben. Dabei ist eines unserer Ziele zur Entwicklung des Geländes beizutragen und über die Jahre entwickelte sich die Veranstaltung zu einem Projekt, dass letztendlich nur durch eigenes Erleben erfahrbar wird.</p>
            
            <h2>Gemeinschaft:</h2>
            <p>Gemeinschaft ist für uns und unsere Veranstaltung eine fundamentale Basis. Dabei ist uns der Austausch zwischen unterschiedlichen Menschen, Meinungen, Ansichten und Weltanschauungen enorm wichtig. Unser Projekt wird weder öffentlich noch privat gefördert, es entsteht alleine durch das Engagement der Veranstalter_innen. Uns ist wichtig, dass die Veranstaltung für jeden ohne Druck und Zwang durchgeführt wird. Physische oder psychische Gewalt und Intoleranz dulden wir nicht.</p>

            <h2>Kunst:</h2>
            <p>Wir rufen Künstler_innen und Musiker_innen bzw. Alle kreativen Menschen auf, durch Ihre Arbeit auf das Thema und das Gelände Bezug zu nehmen. Dabei gilt es die besonderen Gegebenheiten der Natur, der Gebäude und der Einrichtungen des Geländes zu beachten. Das Thema der Globe Gallery 2021 lautet “Money”. Für die Arbeiten können temporär verschiedene Räume und Plätze des Geländes verwendet werden. Die Arbeiten werden am Ende der Globe Gallery Teil einer größeren Ausstellung auf dem Gelände werden. Auf dem Gelände existiert eine große Auswahl von Materialien wie Stoffe, Fundstücke, Einrichtungsgegenstände, Holz und Nippes. Darüber hinaus haben wir ein begrenzte Anzahl von Werkzeug wie Bohrer, Hämmer, Sägen, Schaufeln, usw….Wenn Ihr spezielle Werkzeuge und Materialien benötigt, oder Werkzeuge bzw. Materialien nicht teilen möchtet, dann im Zweifel selbst mitnehmen.</p>

            <h2>Sound und Musik:</h2>
            <p>Auch dieses Jahr rufen wir wieder speziell Musiker_innen auf sich an der Globe Gallery zu beteiligen, eine Einschränkung auf eine bestimmte Musik oder Stilrichtung existiert nicht. Falls Ihr mit Verstärkern arbeiten möchtet, dann bringt bitte Euer eigenes Equipment mit, von Veranstaltungsseite haben wir lediglich eine kleine PA für Live Auftritte während der Veranstaltung. Zum Arbeiten gibt es Räume, diese sind notfalls auch abschließbar. Allerdings gibt es nicht an jedem Ort des Geländes einen Stromanschluss</p>
            
            <h2>Gruppenausstellung ‘The Bath House’:</h2>
            <p>Dieses Jahr möchten wir zusätzlich eine Gruppenausstellung mit allen Teilnehmer_innen realisieren. Diese findet im sogenannten Badehaus statt und soll dem künstlerischen Austausch unter den Teilnehmer_innen dienen.</p>

            <h2>Workshops:</h2>
            <p>Globe Gallery ist nicht nur eine Veranstaltung, die “passiv” erlebt werden soll. Die Veranstaltung lebt hauptsächlich durch die aktive Teilnahme der einzelnen Menschen. Wir begrüßen es daher ausdrücklich, wenn Ihr Workshops, Lesungen, Performances während der Globe Gallery veranstalten möchtet.</p>

            <h2>Site Work:</h2>
            <p>Auch 2021 ist das Site Work ein fester Bestandteil der Globe Gallery. Im Gegensatz zu den letzten Jahren werden wir die Site Work nutzen um gemeinsam die Gruppenausstellung sowie das Ausstellungsgebäude vorzubereiten. Die Dauer des Site Work sowie der ausdrückliche Wunsch zur Teilnahme von 2h bleibt ebenfalls unverändert</p>

            <h2>Kosten:</h2>
            <p>Um die Kosten für Verpflegung und Infrastruktur zu decken ist ein Unkostenbeitrag von 15€/Tag notwendig. Es gibt darüberhinaus noch die Möglichkeit Getränke wie Bier, Club Mate, usw. Zue kaufen. Trinkwasser aus dem Brunnen, sowie Kaffee und Tee kostet selbstverständlich nichts. Wir bitten Euch den Unkostenbeitrag bis spätestens zu Beginn der Veranstaltung zu begleichen. Weitere Informationen dazu gibt es per Mail nach Ende der Bewerbungsphase.</p>

            <h2>WICHTIGE INFORMATION:</h2>
            <p class="bold">Die Globe Gallery findet in einer verlassenen TBC Heilstätte statt. Bitte passt Euer Verhalten den Gegebenheiten an und befolgt die Anweisungen insbesondere zur Sicherheit und Verhalten auf dem Gelände. Werden diese Hinweise nicht befolgt, erfolgt ein Ausschluss von der Veranstaltung, eine Rückerstattung der Unkosten bei Ausschluss findet nicht statt.</p>
            <p class="bold">Auf dem Gelände gibt e seine Vielzahl von Räumlichkeiten. Dabei ist zu beachten, dass nicht alle Räume bespielt werden können und die Mehrzahl der Räume ohne Fenster sind. Da es sich um denkmalgeschützte Räume handelt, können die Räume nicht dauerhaft verändert werden. Die Räume sind staubig und zum Teil feucht [insbesondere nachts].</p>
            <p>Wie auf den Bildern ersichtlich, haben wir nicht den Anspruch eine traditionelle Galerie zu sein, bitte seid Euch dessen bewusst, wenn Ihr Euch anmeldet. Es ist daher auch nicht möglich nur am Ausstellungs Wochenende vorbeizukommen und einfach ein paar Bilder aufzuhängen. Wie bereits geschildert lebt die Veranstaltung von der Teilnahme aller über den gesamten Zeitraum.</p>
            <p>Globe Gallery ist ein Gruppenevent, bei dem über ca. 2 Wochen Fremde und Bekannte über 2 Wochen im Wald zusammenleben und Zelten. Es wird unter Umständen Regnen und kalt werden, die Infrastrukturellen Möglichkeiten wie Dusche und Toilette und WIFI sind eingeschränkt. Bitte bedenkt dies bei Eurer Anmeldung.</p>

            <h2 class="red">COVID 19:</h2>
            <p class="red">Derzeit können wir die Situation im August hinsichtlich der Infektionslage nicht vorhersehen. Daher halten wir Euch auf dem laufendenden. Wir bemühen uns aber durch Abstands und Hygieneregeln die Gefahr einer Ansteckung für alle zu minimieren. Bitte kommt im Interesse aller nur mit einem gültigen negative Corona Testergebnis auf das Gelände. Teststationen gibt es in Berlin und Oranienburg. Denkt an genügend Masken für den eigenen Schutz. Für das Ausstellungs Wochenende wir die maximale Anzahl an Gästen beschränkt, ebenso die Teilnehmerzahl an der Globe Gallery. Wir bitten Euch Angesichts der besonderen Situation um Verständnis.</p>

            <h2 class="headspace">Anmeldung:</h2>
            <p>Bitte füllt unser Teilnahmeformular aus:</p>
            <!-- <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScDSVMDvgeC75pispz7bxp-UCMsXjJDE2zTN4Tx9IaBXc5EVQ/viewform" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >Artist/Creative</a>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScz2b4aLUg0U9BKD0UBDBVKgjMyh8h2FplGpOnzlcF0aoEOdg/viewform" 
                target="_blank" 
                rel="noopener"
                :style="linkStyles"
            >Musician/Sound Artist</a> -->

            <div class="open-call-closed-container">
                <p>Bewerbungen sind geschlossen.</p>
            </div>

            <h2>Kontakt: globe.gallery@gmx.de</h2>
            <h2 class="bold">Anmeldung bis 20. July 2021</h2>
            <p>Zu oder Absagen werden wir bis Ende July versenden</p>
            <h2 class="bold">Wir freuen uns auf Euch und Eure Beiträge!</h2>
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
</style>