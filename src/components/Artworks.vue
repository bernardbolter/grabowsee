<template>
    <div class="artworks">
        <Artwork 
            v-for="art in this.visibleArtworks"
            :key="art.id"
            v-bind="art"
        />
        <div class="pagination">
            <span
                v-if="showPreviousLink()"
                v-on:click="updatePage(currentPage - 1)"
                class="button"
            >previous</span>
            {{ this.currentPage + 1 }} of {{ this.totalPages }}
            <span
                v-if="showNextLink()"
                v-on:click="updatePage(currentPage + 1)"
                class="button"
            >next</span>
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
            nextId: 11,
            currentPage: 0,
            pageSize: 3,
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
        },
        showPreviousLink() {
            return this.currentPage == 0 ? false : true;
        },
        showNextLink() {
            return this.currentPage == (this.totalPages - 1) ? false : true;
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
    }
</style>