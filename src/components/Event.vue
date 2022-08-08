<template>
    <section>
        <div :style="backEvent" class="event">
            <div>
                <h2>{{event.title}}</h2>
                <h3>{{event.dates}}</h3>
                <h4>{{event.text}}</h4>
                <h5>{{event.textAuthor}}</h5>
                <h6 v-if="event.curatedBy !== undefined">Curated by <span>{{event.curatedBy}}</span>.</h6>
                <h6 v-if="event.organisedBy !== undefined">Organised by <span>{{event.organisedBy}}</span>.</h6>
                <h6 v-if="event.direction !== undefined">Direction - <span>{{event.direction}}</span></h6>
            </div>
            <div>
                <h3>Participants:</h3>
                <h4 v-if="event.soundPerformance !== undefined">Sounds & Performances</h4>
                <p v-if="event.soundPerformance !== undefined">{{event.soundPerformance}}</p>
                <h4 v-if="event.artInstallation !== undefined">Art & Installation</h4>
                <p v-if="event.artInstallation !== undefined">{{event.artInstallation}}</p>
                <!-- only show if participants are not divided into groups -->
                <p v-if="event.participants !== undefined">{{event.participants}}</p>
            </div>
        </div>
        <Artworks v-bind:artworks="this.artworks" />
    </section >
</template>

<script>
import Artworks from './Artworks.vue'
import artworksData from '../data/artworksData.json'

export default {
    name: "Event",
    props: [ 'event' ],
    components: {
        Artworks
    },
    data() {
        return {
            artworksData: artworksData,
            artworks: [],
            backEvent: {
                "background-color" : this.$store.getters.makeOpaque(false, 9)
            },
        }
    },
    created() {
        this.artworks = this.sortArtwork(this.event, this.artworksData)
    },
    methods: {
        sortArtwork(theEvent, allArtwork) {
            console.log("all art: ", allArtwork)
            allArtwork.map(art => {
                console.log(art.year)
            })
            const yearOfArt = allArtwork.filter(artwork => artwork.year === theEvent.year.toString())
            return this.shuffle(yearOfArt)

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
    .event {
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
            font-weight: 400;
            font-size: 13px;
            width: 90%;
            padding: 0 5%;
            margin: 5px;

            span {
                font-weight: 600;
            }
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
</style>