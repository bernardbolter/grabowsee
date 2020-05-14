<template>
    <section class="time" :style="color">
        <div class="time_block">
            <p class="time_digits">{{ days | two_digits }}</p>
            <p class="time_text">Days</p>
        </div>
        <div class="time_between">:</div>
        <div class="time_block">
            <p class="time_digits">{{ hours | two_digits }}</p>
            <p class="time_text">Hours</p>
        </div>
        <div class="time_between">:</div>
        <div class="time_block">
            <p class="time_digits">{{ minutes | two_digits }}</p>
            <p class="time_text">Minutes</p>
        </div>
        <div class="time_between">:</div>
        <div class="time_block">
            <p class="time_digits">{{ seconds | two_digits }}</p>
            <p class="time_text">Seconds</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Countdown',
    mounted() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000)
    },
    data() {
        return {
            now: new Date(),
            date: Math.trunc(new Date(2020, 7, 15, 18) / 1000),
            color: {
                "color" : this.$store.getters.makeOpaque(false, 9)
            }
        }
    },
    computed: {
        seconds() {
            return (this.date - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24);
        }
    },
    filters: {
        two_digits: function(value) {
            if (value < 0 ) {
                return '00';
            }
            if (value.toString().length <= 1 ) {
                return `0${value}`;
            }
            return value;
        }
    }
}

</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);

.time {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 110px 0 0 0;
    padding: 0;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    @media (min-width: 500px) {
        bottom: 150px;
    }
    @media (min-width: 769px) {
        position: fixed;
        bottom: 150px;
    }
}
.time_block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 21%;
}
.time_digits {
    font-size: 30px;
    font-weight: 400;
    font-family: $monofont;
    margin: 0;
    @media (min-width: 550px) {
       font-size: 125px; 
    }
    @media (min-width: 650px) {
        font-size: 75px;
    }
    @media (min-width: 900px) {
        font-size: 100px;
    }
    @media (min-width: 1100px) {
        font-size: 120px;
    }
}
.time_text {
    font-size: 10px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    @media (min-width: 550px) {
        font-size: 16px;
        margin: -10px 0 10px 50px;   
    }
    @media (min-width: 650px) {
        font-size: 13px;
        margin: -10px 0 10px 20px;
    }
    @media (min-width: 900px) {
        font-size: 13px;
        margin: -20px 0 10px 40px;
    }
    @media (min-width: 1100px) {
        font-size: 16px;
        margin: -30px 0 10px 70px;
    }
}
.time_between {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4%;
    font-family: $monofont;
    font-weight: 300;
    font-size: 30px;
    @media (min-width: 900px) {
        font-size: 69px;
    }
    @media (min-width: 1100px) {
        font-size: 99px;
    }
}
</style>