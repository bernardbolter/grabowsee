<template>
    <div 
        class="map" 
        :class="{ mapOn: this.$store.state.activeLink ===4 }"
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
                "border-right" : `2px solid ${this.$store.getters.makeOpaque(false, 9)}`
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
        left: -75%;
        top: 0;
        z-index: 500;
        transition: left 1s ease-in-out;
        box-sizing: border-box;
        z-index: 300;
    }

    .mapOn {
        left: 0;
        transition: left 1s ease-in-out;
    }

   .mapboxgl-map {
        margin: 0;
        width: 100%;
        height: 100%;
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