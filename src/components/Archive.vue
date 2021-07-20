<template>
    <div class="archive" :class="{ archiveOn: this.$store.state.activeLink === 3 }">
        <section class="projects" :style="backcolor">
            <h1 :style="heading">Archive</h1>
            <Event v-for="event in events.events" :key="event.year" :event="event" />
            <a class="archive-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeZZczRfcYtsORWB-BZ_VEV73GjGmoyvWSIYMg3q89Df5G6Aw/viewform" target="_blank">
                <p>If you have participated in a previous residency and would like your work to be in the archive. Click this link and fill out the google form.</p> 
                <div class="right-arrow-svg">
                    <svg viewBox="0 0 51 51">
                        <path fill="rgba(255,255,255,0.6)" d="M14.9737 20.6052C14.1842 21.3947 14.1842 22.6579 14.9737 23.3947C15.7632 24.1842 17.0263 24.1842 17.7632 23.3947L23.5 17.6579V38.0263C23.5 39.1315 24.3948 40.0263 25.5 40.0263C26.6053 40.0263 27.5 39.1315 27.5 38.0263V17.7105L33.2369 23.4473C34.0263 24.2368 35.2895 24.2368 36.0263 23.4473C36.3948 23.0789 36.6053 22.5526 36.6053 22.0263C36.6053 21.5 36.3948 21.0263 36.0263 20.6052L26.9211 11.5C26.5526 11.1315 26.0263 10.921 25.5 10.921C24.9737 10.921 24.4474 11.1315 24.079 11.5L14.9737 20.6052Z" />
                        <path fill="rgba(255,255,255,0.6)" d="M0.5 25.5C0.5 39.2895 11.7105 50.5 25.5 50.5C39.2895 50.5 50.5 39.2895 50.5 25.5C50.5 11.7105 39.2895 0.5 25.5 0.5C11.7105 0.5 0.5 11.7105 0.5 25.5ZM46.5526 25.5C46.5526 37.0789 37.0789 46.5526 25.5 46.5526C13.9211 46.5526 4.44737 37.0789 4.44737 25.5C4.44737 13.9211 13.9211 4.44737 25.5 4.44737C37.0789 4.44737 46.5526 13.9211 46.5526 25.5Z" />
                    </svg>
                </div>
            </a>
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
import archive from "../data/archive.json";
import eventsData from '../data/eventsData.json';

import Event from './Event.vue';

export default {
    name: "Archive",
    components: {
        Event
    },
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
            },
            heading: {
                "background-color" : this.$store.getters.makeOpaque(false, 6),
                color : this.$store.getters.makeOpaque(true, 8)
            },
            archive,
            shuffledArt2019: [],
            shuffledArt2018: [],
            events: eventsData
        }
    },
    created() {
        this.shuffledArt2019 = this.shuffle(this.archive.cg2019);
        this.shuffledArt2018 = this.shuffle(this.archive.cg2018);
        // this.events = this.eventsData;
        // this.artworks = this.artworksData;
        console.log("events: ", this.events)
        console.log("artworks: ", this.artworks)
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
    .archive {
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
            font-weight: 400;
            font-family: $monofont;
            font-size: 18px;
            @media (min-width: 500px) {
                font-size: 24px;
                height: 75px;
                padding: 0 0 0 100px; 
            }
            @media (min-width: 769px) {
                align-items: flex-end;
                font-size: 34px;
                width: 97%;
                height: 65px;
                margin: 0;
                padding: 0 0 10px 3%; 
            }
        }
    }
        
    .archiveOn .projects {
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
    .archiveOn .two {
        left: 0;
        transition: left 1s ease-in-out
    }
    .archive-link {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background: rgba(255,255,255,0.3);
        border: rgba(0,0,0,.5) 1px solid;
        width: 90%;
        margin: 40px 5% 20px;
        border-radius: 20px;

        p {
            font-size: 17px;
            line-height: 23px;
            color: rgba(255,255,255,.6);
            padding: 18px 5%;
            width: 80%;
        }

        .right-arrow-svg {
            width: 40px;
            transform: rotate(90deg);
            margin: 0 5%;
        }
    }
</style>