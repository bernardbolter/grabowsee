<template>
    <div class="pastprojects" :class="{ pastProjectsOn: this.$store.state.links[2].active }">
        <section class="projects" :style="backcolor">
            <h1>Past Projects</h1>
            <div class="project">
                <div class="left">
                    <h2>Ritual</h2>
                    <h3>10. - 18.August 2019</h3>
                    <h4>“Ritual, whether secular or sacred binds groups together, ensuring their harmonious functioning by generating and maintaining orders of meaning, purpose and value”</h4>
                    <h5>(Barry Stephenson)</h5>
                    <h6>Curated by Sonja Teszler & Yan Gi Cheng. Organised by Philip Schrader & Alice Morey.</h6>
                </div>
                <div class="right">
                    <h4>Participants:</h4>
                    <h5>Sounds & Performance</h5>
                    <p>Pina Ruecker, Andy Aquarius, Luysali Theisen, Florentin Scheicher, Lukas Klein, Michal Krajczok, Joanna Harvey, Nils Bloch, Oliver Holyoake, Maja Kala, Liza Casullo, Rachel Margetts, Fanny Sorgo, Fellipe Vergani & Eva Geckeler, Karolina Svärd, Tabea Briggs, Laure Boer, Jack Dove</p>
                    <h5>Art & Installation</h5>
                    <p>Dietrich Meyer, Jérôme Pretot, YADA YADA, Carrick Bell, Keturah Cummings, Tara Dominguez, Brogan Geurts, Rocco Ruglio-Misurell, Mars Mandél, Alana Lynch, Yuko Ishida, Lale Willan, Sascha Walmroth, Pippa Brabyn, Toby Saunders, Robert & Frank, Magdalena Zagorski, Rob Blake, Yui Shimizu, Maitane Midby, Alex Porter, Tine Nedbo, Lina Schobel, Zwek, Lucia Krug, Max Fowler, Therese Resi, Mario Campos, Liina Nilson, Leander Leutzendorff, Nina Jørgensen, Volker Tolle, Katharina Bonk, Mano Krach, Konstantin Schreiber, Veronica Gudmundson, Aurora Del Rio, Gregorio Acevedo, Leonardo Rossi, Tanya Barnau Sythoff, Alvin McIntyre, Tanya Barnau Sythoff, Alexandra Vasilieva, Max Lunn, Chrischa Oswald,  Yannik Dörnte, Agrina Vllasaliu, Werner Kernebeck, David Braithwaite, Christine Cheung, Sean Coughlin, Mikołaj Rogowski, Hannah Turner-Duffin, Aurelia Van Kempen, Matthew Coleman, Sandra Julve, Anke Westermann, Sheng Jiang, Lapo Simeoni, Louisa Elderton, Sara Ezzell, Rosie Dahlstrom</p>
                </div>
            </div>
            <div class="project">
                <div class="left">
                    <h2>Symbiosis</h2>
                    <h3>10.-19. August 2018</h3>
                    <h4>‘Symbiosis’ is any type of a close and long-term biological interaction between two different biological organisms. Each symbiont may be of the same or of different species. In Fostering such unexpected unions, symbiosis becomes the ultimate survival of the unfitted that defy all rules and predictions by means of collaborative creativity.</h4>
                    <h6>Curated by Yan Gi Cheng. Organised by Philip Schrader & Alice Morey.</h6>
                </div>
                <div class="right">
                    <h4>Participants:</h4>
                    <p>Sasha Walmroth, Christian Buchner, Carlos Froelich, Andy Aged, Alice Morey, Zwek, Yan Gi Cheng, Bernard Bolter, Fellipe Vergani, Mirela Alister, Sandre Julve, Mai Linh Bui, Maithu Bui, Thea Ludcock, Tina Nedo, Liina Nilsson, Maitane Midby, Rocco Ruglio-Misurelll, Rob Blake, Christine Cheung, Laure Boer, Bernard Bolter, Majse Vilstrup, Karolina Svärd, Keturah Cummings, Tania Gomes, Nina Jørgensen, Philipp Halfmann, Yotaro Niwa, Evil Twin, Aurore del Rio, Yannik Doernte, Sebastian Völkers, Nancy Hillen, Valerie Vaernewyck, Louisa Elderton, David Braithwaite, Werner Kernebeck, Isabel Cavenecia, Sarah Grether, Lady Gaby, Camila McHugh, Christine Schwarz, KAVALL, AYRIE, Daniel Kupferberg,Toby Saunders, Ingwa, UMLAUT</p>
                </div>
            </div>
        </section>
        <div class="back two" :style="backcolor" />
        <div class="close" :style="closeBack" @click="close" :class="{ closeProjectsOn: this.$store.state.links[2].active }">
            <svg width="65px" height="65px" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
export default {
    name: "PastProjects",
    data() {
        return {
            backcolor: {
                "background-color" : this.$store.getters.makeOpaque(true, 8)
            },
            closeBack: {
                "background-color" : this.$store.getters.makeOpaque(false, 8)
            },
            stroke: {
                "stroke" : this.$store.getters.makeOpaque(false, 9)
            },
            fill: {
                "fill" : this.$store.getters.makeOpaque(true, 9)
            }
        }
    },
    methods: {
        close() {
            this.$store.commit('decideNav', this.$store.state.lastPage);
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
        padding: 0 0 0 100px;
        z-index: 601;
        position: fixed;
        overflow-y: scroll;
        top: -100%;
        transition: top 1s ease-in-out;

        h1 {
            width: 100%;
            height: 100px;
            background: white;
            color: black;
        }
    }
    .pastProjectsOn .projects {
        top: 0;
        transition: top 1s ease-in-out
    }
    .close {
        position: absolute;
        top: -100px;
        left: -100px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 602;
        transition: all 0.5s ease-in-out;
        opacity: 0.7;
        cursor: pointer;

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