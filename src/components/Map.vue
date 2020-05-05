<template>
    <div 
        class="map" 
        :class="{ mapOn: this.$store.state.links[3].active }"
        :style="border"
    >
        <mapbox-map
            access-token ="pk.eyJ1IjoiYmVybmFyZGJvbHRlciIsImEiOiJjazlzZHIzODAxMnZzM2VydHB1NDNpdDhrIn0.KBjxoYzWqEbFc5r6qiEgsA"
            map-style ="mapbox://styles/mapbox/dark-v10"
            :zoom ='9'
            :center = "[13.292124792933455, 52.786265702929825]"
        >
            <mapbox-marker 
                :lng-lat = "[13.292124792933455, 52.786265702929825]"
                color = "#000000"
                popup
            >
                <template v-slot:popup>
                    <p class="map-link">
                        <a href="https://goo.gl/maps/ug85cnV1pQDR7Vwb7" target="_blank" rel="noopener" alt="Link to Google Map Directions">
                            DIRECTIONS
                        </a>
                        <span>* opens browser window</span>
                    </p>
                </template>
            </mapbox-marker>
        </mapbox-map>
    </div>
</template>

<script>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';

export default {
    name: "Map",
    components: { 
        MapboxMap,
        MapboxMarker 
    },
    data() {
        return {
            border: {
                "border-left" : `1px solid ${this.$store.getters.makeOpaque(false, 9)}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import url("https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css");
    .map {
        display: block;
        width: 75%;
        height: 100vh;
        position: fixed;
        right: calc(-75% - 4px);
        top: 0;
        z-index: 500;
        transition: right 1s ease-in-out;
        overflow: hidden;
    }

   .mapboxgl-map {
        margin: 0;
        width: 100%;
        height: 100%;
      }

    .mapOn {
        right: 0;
        transition: right 1s ease-in-out;
    }

    .map-link {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        padding: 10px 20px 0;
        margin: 0;
        letter-spacing: 0.1em;

        a {
            color: #666;
            text-decoration: none;

            &:hover {
                color: #111;
                text-decoration: underline;
            }
        }

        span {
                font-size: 7px;
                display: block;
                margin: -5px 0 0 0;
                padding: 0;
                color: #aaaaaa;
            }
    }
</style>