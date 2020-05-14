<template>
    <svg class="wave" :style="setBottom" :width="browserWidth" height="100" xmlns="http://www.w3.org/2000/svg">
        <path :d="path" :style="stroke" />
    </svg>
</template>

<script>
export default {
    name: 'Wave',
    props: ['bottom', 'curve', 'speed'],
    data() {
        return {
            xs: [],
            path: '',
            browserWidth: 0,
            animateID: undefined,
            time: 0,
            points: [],
            setBottom: {
                "bottom" : `${this.bottom}px` 
            },
            stroke: {
                stroke : this.$store.getters.makeOpaque(false, 7)
            }
        }
    },
    mounted() {
        this.getWidth();
        this.animateWave();
    },
    created() {
        window.addEventListener("resize", this.getWidth);
    },
    beforeDestroy() {
        clearInterval(this.animateID);
    },
    destroyed() {
        window.removeEventListener("resize", this.getWidth);
    },
    methods: {
        getWidth() {
            this.xs = [];
                this.browserWidth = window.innerWidth;
        },
        animateWave() {
            this.animateID = setInterval(function() {
                this.time++;
            }.bind(this), this.speed)
        }
    },
    watch: {
        browserWidth() {
            for (var i = 0; i <= this.browserWidth; i++ ) {
                this.xs.push(i);
            }
        },
        time() {
            this.points = this.xs.map(x => {
                let y = 50 + 40 * Math.sin((x + this.time) / this.curve);
                return [x,y]
            });
            this.path = "M" + this.points.map(p => {
                return p[0] + "," + p[1]
            }).join(" L");
        }
    }
}
</script>

<style scoped lang="scss">
    .wave {
        position: fixed;
        left: 0;
        z-index: 105;
        @media (min-width: 769px) {
            z-index: 900;
        }
        path {
            stroke-width: 4px;
            fill: transparent;
        }
    }
</style>