<template>
    <section class="manifesto">
        <h2 class="title">{{ title }}</h2>
        <h3 class="quote">{{ quote }}</h3>
    </section>
</template>

<script>
import manifesto from '../data/manifesto.json';

export default {
    name: 'Manifesto',
    mounted() {
        window.setInterval(() => {
            this.loopManifesto()
        }, 3000)
    },
    data() {
        return {
            manifesto,
            theTitleCount: 0,
            theQuoteCount: 0
        }
    },
    computed: {
        title() {
            return this.manifesto.manifesto[this.theTitleCount].title
        },
        quote() {
            return this.manifesto.manifesto[this.theTitleCount].quotes[this.theQuoteCount]
        }
    },
    methods: {
        loopManifesto() {
            if (this.theQuoteCount === this.manifesto.manifesto[this.theTitleCount].quotes.length - 1) {
                if (this.theTitleCount === this.manifesto.manifesto.length - 1) {
                    this.theTitleCount = 0
                    this.theQuoteCount = 0
                } else {
                    this.theTitleCount++
                    this.theQuoteCount = 0
                }
            } else {
                this.theQuoteCount++
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .manifesto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }
    .title {
        font-size: 14px;
        position: fixed;
        top: 110px;
        color: rgba(255,255,255,.6);
        left: 30px;

        @media (min-width: 420px) {
           font-size: 16px; 
           top: 120px;
        }

        @media (min-width: 500px) {
           font-size: 18px; 
           top: 140px;
        }

        @media (min-width: 650px) {
           font-size: 22px; 
           top: 430px;
        }

        @media (min-width: 768px) {
           font-size: 26px; 
           top: 470px;
        }
    }
    .quote {
        font-size: 12px;
        position: fixed;
        top: 145px;
        width: 70%;
        margin: 0 5% 0 25%;
        color: rgba(255,255,255,.8);

        @media (min-width: 420px) {
           font-size: 14px; 
           top: 160px;
        }

        @media (min-width: 500px) {
           font-size: 15px; 
           top: 180px;
        }

        @media (min-width: 650px) {
           font-size: 15px; 
           top: 480px;
        }

        @media (min-width: 768px) {
           font-size: 22px;
           top: 550px;
        }
    }
</style>