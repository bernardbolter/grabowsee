<template>
    <div class="container">
        <div 
            class="about" 
            :class="{ aboutOn: this.$store.state.links[0].active }"
            :style="back"
            >
            <div class="inside">
                <section class="heading">
                    Globe Gallery is an alternative Art Gallery starting in 2013, in the middle of a derelict hospital, Heilstätte Grabowsee, 30km North of Berlin.
                </section>
                <section class="body">
                    We host an annual non-profit and alternative gathering with a full week of expressing your creativity through making art, inspiring workshops, readings, performances and social exchange. It’s an open space for collaboration and we encourage you to contribute to the experience through your participation. Think of a DIY atmosphere, co-creation, camping amongst a derelict hospital with rural infrastructure but with its on lake and fire place - and be prepared or some unusual group activities.
                </section>
                <section class="body">
                    Globe Gallery aims to be a platform for everyone who wants to share their work in a dedicated, dogma free and one-of-a-kind environment.
                </section>
                <section class="body">
                    Besides creating art we need to maintain the infrastructure of the property with ‘Site Work’ this is two hours a day during your stay in order to give something back to the place.
                </section>
                <a 
                    href="https://www.instagram.com/countdowngrabowsee/"  
                    target="_blank" 
                    rel="noopener" 
                    class="instagram"
                    :style="color"
                >
                    <p>instrgram</p>
                    <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path :style="fill" fill-rule="nonzero" d="M35.1,0 L14.9,0 C6.67324301,0.00551576249 0.00551576249,6.67324301 0,14.9 L0,35.1 C0.00551576249,43.326757 6.67324301,49.9944842 14.9,50 L35.1,50 C43.326757,49.9944842 49.9944842,43.326757 50,35.1 L50,14.9 C49.9944842,6.67324301 43.326757,0.00551576249 35.1,0 Z M45.0000458,35.1 C45.0080003,37.7280877 43.9675369,40.2508424 42.1091897,42.1091897 C40.2508424,43.9675369 37.7280877,45.0080003 35.1,45.0000458 L14.9,45.0000458 C12.2719123,45.0080003 9.74915757,43.9675369 7.89081034,42.1091897 C6.03246311,40.2508424 4.99199968,37.7280877 4.9999542,35.1 L4.9999542,14.9 C4.99199968,12.2719123 6.03246311,9.74915757 7.89081034,7.89081034 C9.74915757,6.03246311 12.2719123,4.99199968 14.9,4.9999542 L35.1,4.9999542 C37.7280877,4.99199968 40.2508424,6.03246311 42.1091897,7.89081034 C43.9675369,9.74915757 45.0080003,12.2719123 45.0000458,14.9 L45.0000458,35.1 Z" />
                            <path :style="fill" fill-rule="nonzero" d="M25,12 C17.8202983,12 12,17.8202983 12,25 C12,32.1797017 17.8202983,38 25,38 C32.1797017,38 38,32.1797017 38,25 C37.9889273,17.8248897 32.1751103,12.0110727 25,12 Z M25,32.9427688 C21.7874499,32.9427688 18.8912282,31.0075753 17.6618385,28.039566 C16.4324488,25.0715567 17.1119984,21.6552303 19.3836144,19.3836144 C21.6552303,17.1119984 25.0715567,16.4324488 28.039566,17.6618385 C31.0075753,18.8912282 32.9427688,21.7874499 32.9427688,25 C32.9427688,29.3866701 29.3866701,32.9427688 25,32.9427688 L25,32.9427688 Z" />
                            <circle :style="fill" fill-rule="nonzero" cx="38" cy="12" r="3"></circle>
                    </svg>
                </a>
            </div>
        </div>
        <img 
            src="../assets/about.jpg" 
            alt="Picture of Grabowsee"
            class="image"
            :class="{ imageOn: this.$store.state.links[0].active }"
            :style="border"
        />
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            back: {
                "background-color" : this.$store.getters.makeOpaque(true, 9),
                "border-left" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`,
                "border-right" : `2px solid ${this.$store.getters.makeOpaque(false, 7)}`
            },
            color: {
                color: this.$store.getters.makeOpaque(false, 9)
            },
            fill: {
                fill: this.$store.getters.makeOpaque(false, 9)
            },
            stroke: {
                stroke: this.$store.getters.makeOpaque(false, 9)
            },
            border: {
                border: `4px solid ${this.$store.getters.makeOpaque(false, 7)}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: 200;
    }
    .about {
        width: 50%;
        height: 100vh;
        top: -100%;
        left: 25%;
        position: absolute;
        transition: top 1s ease-in-out;
        background: #000;
        z-index: 202;
    }
    .aboutOn {
        top: 0;
        transition: top 1s ease-in-out;
    }
    .inside {
        width: 90%;
        margin: 50px 5% 0 5%;
        padding: 0;
    }
    .heading {
        width: 100%;
        font-size: 26px;
        margin: 10px 0;
        padding: 0;
        line-height: 1.6;
        font-weight: 400; 
    }
    .body {
        width: 100%;
        margin: 15px 0;
        padding: 0;
        font-weight: 200;
        line-height: 1.4;
        font-size: 20px;
        text-indent: 40px;
    }
    .image {
        width: 500px;
        height: 500px;
        top: 100px;
        left: 100%;
        position: absolute;
        transition: left 1s ease-in-out;
        z-index: 201;
        border: 3px solid #cdcdcd;
    }
    .imageOn {
        left: 60%;
        transition: left 1s ease-in-out;
    }
    section {
        font-size: 16px;
    }
    .instagram {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        text-decoration: none;
        margin: 30px 10px 0 0;
        opacity: 0.6;
        transition: opacity 0.7s ease-in-out;

        &:hover {
            opacity: 1;
            transition: opacity 0.7s ease-in-out;
        }

        p {
            font-family: 'Major Mono Display', monospace;
            font-size: 25px;
            margin: 0 20px 0 20px;
        }
    }

</style>