<template>
    <div class="artworks" id="artworks" ref="artworks">
        <Artwork 
            v-for="art in this.visibleArtworks"
            :key="art.id"
            v-bind="art"
        />
        <div class="pagination" v-if="showPreviousLink() || showNextLink()">
            <span
                v-if="showPreviousLink()"
                v-on:click="updatePage(currentPage - 1)"
                class="button"
            >
            <div class="left-arrow-svg">
                <svg viewBox="0 0 51 51">
                    <path fill="rgba(255,255,255,0.6)" d="M14.9737 20.6052C14.1842 21.3947 14.1842 22.6579 14.9737 23.3947C15.7632 24.1842 17.0263 24.1842 17.7632 23.3947L23.5 17.6579V38.0263C23.5 39.1315 24.3948 40.0263 25.5 40.0263C26.6053 40.0263 27.5 39.1315 27.5 38.0263V17.7105L33.2369 23.4473C34.0263 24.2368 35.2895 24.2368 36.0263 23.4473C36.3948 23.0789 36.6053 22.5526 36.6053 22.0263C36.6053 21.5 36.3948 21.0263 36.0263 20.6052L26.9211 11.5C26.5526 11.1315 26.0263 10.921 25.5 10.921C24.9737 10.921 24.4474 11.1315 24.079 11.5L14.9737 20.6052Z" />
                    <path fill="rgba(255,255,255,0.6)" d="M0.5 25.5C0.5 39.2895 11.7105 50.5 25.5 50.5C39.2895 50.5 50.5 39.2895 50.5 25.5C50.5 11.7105 39.2895 0.5 25.5 0.5C11.7105 0.5 0.5 11.7105 0.5 25.5ZM46.5526 25.5C46.5526 37.0789 37.0789 46.5526 25.5 46.5526C13.9211 46.5526 4.44737 37.0789 4.44737 25.5C4.44737 13.9211 13.9211 4.44737 25.5 4.44737C37.0789 4.44737 46.5526 13.9211 46.5526 25.5Z" />
                </svg>
            </div>
            previous
            </span>
            <span class="pagination-of">{{ this.currentPage + 1 }} of {{ this.totalPages }}</span>
            <span
                v-if="showNextLink()"
                v-on:click="updatePage(currentPage + 1)"
                class="button"
            >next
            <div class="right-arrow-svg">
                <svg viewBox="0 0 51 51">
                    <path fill="rgba(255,255,255,0.6)" d="M14.9737 20.6052C14.1842 21.3947 14.1842 22.6579 14.9737 23.3947C15.7632 24.1842 17.0263 24.1842 17.7632 23.3947L23.5 17.6579V38.0263C23.5 39.1315 24.3948 40.0263 25.5 40.0263C26.6053 40.0263 27.5 39.1315 27.5 38.0263V17.7105L33.2369 23.4473C34.0263 24.2368 35.2895 24.2368 36.0263 23.4473C36.3948 23.0789 36.6053 22.5526 36.6053 22.0263C36.6053 21.5 36.3948 21.0263 36.0263 20.6052L26.9211 11.5C26.5526 11.1315 26.0263 10.921 25.5 10.921C24.9737 10.921 24.4474 11.1315 24.079 11.5L14.9737 20.6052Z" />
                    <path fill="rgba(255,255,255,0.6)" d="M0.5 25.5C0.5 39.2895 11.7105 50.5 25.5 50.5C39.2895 50.5 50.5 39.2895 50.5 25.5C50.5 11.7105 39.2895 0.5 25.5 0.5C11.7105 0.5 0.5 11.7105 0.5 25.5ZM46.5526 25.5C46.5526 37.0789 37.0789 46.5526 25.5 46.5526C13.9211 46.5526 4.44737 37.0789 4.44737 25.5C4.44737 13.9211 13.9211 4.44737 25.5 4.44737C37.0789 4.44737 46.5526 13.9211 46.5526 25.5Z" />
                </svg>
            </div>
            </span>
        </div> 
    </div>
</template>

<script>
import Artwork from "./Artwork.vue";

export default {
    name: "Artworks",
    props: [ 'artworks' ],
    components: {
        Artwork
    },
    data() {
        return {
            nextId: 10,
            currentPage: 0,
            pageSize: 10,
            visibleArtworks: [],
            totalPages: 0
        }
    },
    mounted() {
        this.updateVisibleArtworks();
        this.totalPages = Math.ceil(this.artworks.length / this.pageSize);
    },
    methods: {
        updateVisibleArtworks() {
            this.visibleArtworks = this.artworks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this. pageSize);
        },
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleArtworks();
            this.scrollToTopArtworks();
        },
        showPreviousLink() {
            return this.currentPage == 0 ? false : true;
        },
        showNextLink() {
            return this.currentPage == (this.totalPages - 1) ? false : true;
        },
        scrollToTopArtworks() {
            const el = this.$refs.artworks;

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }
}
</script>

<style scoped lang="scss">
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
    .pagination {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 50px 0 0 0;

        span {
            width: auto;
        }

        .pagination-of {
            margin: 0 20px;
            color: rgba(255,255,255,.5);
        }
    }
    .button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: rgba(255,255,255,.7);
        cursor: pointer;

        .left-arrow-svg {
            transform: rotate(-90deg);
            width: 25px;
            margin: 0 10px 0 0;
        }

        .right-arrow-svg {
            transform: rotate(90deg);
            width: 25px;
            margin: 0 0 0 10px;
        }
    }
</style>