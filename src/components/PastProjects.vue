<template>
    <div class="pastprojects" :class="{ pastProjectsOn: this.$store.state.activeLink === 3 }">
        <section class="projects" :style="backcolor">
            <h1 :style="heading">Archive</h1>
            <div :style="backproject" class="project">
                <div>
                    <h2>Ritual</h2>
                    <h3>10. - 18.August 2019</h3>
                    <h4>“Ritual, whether secular or sacred binds groups together, ensuring their harmonious functioning by generating and maintaining orders of meaning, purpose and value”</h4>
                    <h5>(Barry Stephenson)</h5>
                    <h6>Curated by Sonja Teszler & Yan Gi Cheng.</h6>
                    <h6>Organised by Philip Schrader & Alice Morey.</h6>
                </div>
                <div>
                    <h3>Participants:</h3>
                    <h4>Sounds & Performance</h4>
                    <p>Pina Ruecker, Andy Aquarius, Luysali Theisen, Florentin Scheicher, Lukas Klein, Michal Krajczok, Joanna Harvey, Nils Bloch, Oliver Holyoake, Maja Kala, Liza Casullo, Rachel Margetts, Fanny Sorgo, Fellipe Vergani & Eva Geckeler, Karolina Svärd, Tabea Briggs, Laure Boer, Jack Dove</p>
                    <h4>Art & Installation</h4>
                    <p>Dietrich Meyer, Jérôme Pretot, YADA YADA, Carrick Bell, Keturah Cummings, Tara Dominguez, Brogan Geurts, Rocco Ruglio-Misurell, Mars Mandél, Alana Lynch, Yuko Ishida, Lale Willan, Sascha Walmroth, Pippa Brabyn, Toby Saunders, Robert & Frank, Magdalena Zagorski, Rob Blake, Yui Shimizu, Maitane Midby, Alex Porter, Tine Nedbo, Lina Schobel, Zwek, Lucia Krug, Max Fowler, Therese Resi, Mario Campos, Liina Nilson, Leander Leutzendorff, Nina Jørgensen, Volker Tolle, Katharina Bonk, Mano Krach, Konstantin Schreiber, Veronica Gudmundson, Aurora Del Rio, Gregorio Acevedo, Leonardo Rossi, Tanya Barnau Sythoff, Alvin McIntyre, Tanya Barnau Sythoff, Alexandra Vasilieva, Max Lunn, Chrischa Oswald,  Yannik Dörnte, Agrina Vllasaliu, Werner Kernebeck, David Braithwaite, Christine Cheung, Sean Coughlin, Mikołaj Rogowski, Hannah Turner-Duffin, Aurelia Van Kempen, Matthew Coleman, Sandra Julve, Anke Westermann, Sheng Jiang, Lapo Simeoni, Louisa Elderton, Sara Ezzell, Rosie Dahlstrom</p>
                </div>
            </div>
            <div class="artworks">
                <Artwork 
                    v-for="art in this.shuffledArt2019"
                    :key="art.id"
                    v-bind="art"
                />
            </div>
            <div class="project" :style="backproject">
                <div>
                    <h2>Symbiosis</h2>
                    <h3>10.-19. August 2018</h3>
                    <h4>‘Symbiosis’ is any type of a close and long-term biological interaction between two different biological organisms. Each symbiont may be of the same or of different species. In Fostering such unexpected unions, symbiosis becomes the ultimate survival of the unfitted that defy all rules and predictions by means of collaborative creativity.</h4>
                    <h6>Curated by Yan Gi Cheng. Organised by Philip Schrader & Alice Morey.</h6>
                </div>
                <div>
                    <h3>Participants:</h3>
                    <p>Sasha Walmroth, Christian Buchner, Carlos Froelich, Andy Aged, Alice Morey, Zwek, Yan Gi Cheng, Bernard Bolter, Fellipe Vergani, Mirela Alister, Sandre Julve, Mai Linh Bui, Maithu Bui, Thea Ludcock, Tina Nedo, Liina Nilsson, Maitane Midby, Rocco Ruglio-Misurelll, Rob Blake, Christine Cheung, Laure Boer, Bernard Bolter, Majse Vilstrup, Karolina Svärd, Keturah Cummings, Tania Gomes, Nina Jørgensen, Philipp Halfmann, Yotaro Niwa, Evil Twin, Aurore del Rio, Yannik Doernte, Sebastian Völkers, Nancy Hillen, Valerie Vaernewyck, Louisa Elderton, David Braithwaite, Werner Kernebeck, Isabel Cavenecia, Sarah Grether, Lady Gaby, Camila McHugh, Christine Schwarz, KAVALL, AYRIE, Daniel Kupferberg,Toby Saunders, Ingwa, UMLAUT</p>
                </div>
            </div>
            <div class="artworks">
                <Artwork 
                    v-for="art in this.shuffledArt2018"
                    :key="art.id"
                    v-bind="art"
                />
            </div>
        </section>
        <div class="back two" :style="backcolor" />
        <div class="close" :style="closeBack" @click="close" :class="{ closeProjectsOn: this.$store.state.activeLink === 3 }">
            <svg viewBox="0 0 65 65">
                <g id="close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <circle :style="fill" cx="32.5" cy="32.5" r="32.5"></circle>
                    <line :style="stroke" x1="19.5" y1="19.5" x2="45.5" y2="45.5" stroke-width="4" stroke-linecap="round"></line>
                    <line :style="stroke" x1="19.5" y1="45.5" x2="45.5" y2="19.5" stroke-width="4" stroke-linecap="round"></line>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import past from "../data/past.json";
import Artwork from "./Artwork.vue";

export default {
    name: "PastProjects",
    components: {
        Artwork
    },
    data() {
        return {
            backcolor: {
                "background-color" : this.$store.getters.makeOpaque(true, 8)
            },
            backproject: {
                "background-color" : this.$store.getters.makeOpaque(false, 9)
            },
            closeBack: {
                "background-color" : this.$store.getters.makeOpaque(false, 8)
            },
            stroke: {
                "stroke" : this.$store.getters.makeOpaque(false, 9)
            },
            fill: {
                "fill" : this.$store.getters.makeOpaque(true, 9)
            },
            heading: {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                color : this.$store.getters.makeOpaque(true, 8)
            },
            past,
            shuffledArt2019: [],
            shuffledArt2018: []
        }
    },
    mounted() {
        this.shuffledArt2019 = this.shuffle(this.past.cg2019);
        this.shuffledArt2018 = this.shuffle(this.past.cg2018);
    },
    methods: {
        close() {
            this.$store.commit('decideNav', this.$store.state.lastPage);
        },
        shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array
        }
    }
}
</script>

<style scoped lang="scss">
    .pastprojects {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }
    .back {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: -100%;
        left: 0;
        margin: 0;
        padding: 0;
    }
    .projects {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0 0 90px 0;
        z-index: 601;
        position: fixed;
        overflow-y: scroll;
        top: 100%;
        transition: top 1s ease-in-out;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        display: block;
        @media (min-width: 769px) {
            padding: 0 0 300px 75px;
        }

        h1 {
            width: auto;
            height: 50px;
            margin: 0;
            padding: 0 0 0 70px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: $monofont;
            font-size: 18px;
            @media (min-width: 500px) {
                font-size: 24px;
                height: 75px;
                padding: 0 0 0 100px; 
            }
            @media (min-width: 769px) {
                align-items: flex-end;
                font-size: 30px;
                width: 97%;
                height: 65px;
                margin: 0;
                padding: 0 0 10px 3%; 
            }
        }

        .artworks {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            @media (min-width: 500px) {
                padding: 40px 0;
            }
        }

        .project {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 20px 0;
            @media (min-width: 500px) {
                padding: 40px 0;
            }
            @media (min-width: 1000px) {
                flex-direction: row;
            }

            div {
                width: 90%;
                margin: 0 5%;
                display: inline-block;
                @media (min-width: 500px) {
                    width: 84%;
                    margin: 0 8%;
                }
                @media (min-width: 1000px) {
                    width: 40%;
                    margin: 0 5%;
                }
            }

            h2 {
                font-family: $monofont;
                padding: 0 0 0 10%;
                opacity: 0.7;
                font-size: 30px;
                @media (min-width: 500px) {
                   font-size: 40px; 
                }
            }

            h3 {
                font-weight: 600;
                font-size: 11px;
                padding: 0 0 0 20px;
            }
            h4 {
                width: 80%;
                padding: 0 10%;
                font-weight: 300;
                font-size: 15px;
                opacity: 0.7;
                @media (min-width: 500px) {
                    font-size: 20px;
                }

            }
            h5 {
                font-weight: 400;
                font-size: 14px;
                text-align: right;
                padding: 0 30% 0 0;
                opacity: 0.5;
            }
            h6 {
                font-weight: 600;
                font-size: 14px;
                width: 90%;
                padding: 0 5%;
                margin: 5px;
            }
            p {
                width: 90%;
                padding: 0 5%;
                font-weight: 600;
                font-size: 11px;
                line-height: 1.5;
                letter-spacing: 0.05em;
            }
        }
    }
    .pastProjectsOn .projects {
        top: 0;
        transition: top 1s ease-in-out
    }
    .close {
        position: absolute;
        top: -50px;
        left: -50px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 602;
        transition: all 0.5s ease-in-out;
        opacity: 0.7;
        cursor: pointer;
        @media (min-width: 500px) {
            top: -75px;
            left: -75px;
            width: 75px;
            height: 75px;
        }

        svg {
            width: 70%;
        }

        &:hover {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
        }
    }
    .closeProjectsOn {
        top: 0;
        left: 0;
        transition: all 1s ease-in-out; 
    }
    .two {
        top: 0;
        left: -100%;
        z-index: 600;
        transition: left 1s ease-in-out
    }
    .pastProjectsOn .two {
        left: 0;
        transition: left 1s ease-in-out
    }
</style>