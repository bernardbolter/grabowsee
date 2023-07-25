<template>
  <div>
    <ul class="gallery">
      <div 
        v-if="targetPhoto !== -1"
        class="photo-nav"  
      >
        <div 
          class="gallery-close"
          @click="choseNextPhoto(-1,-1)"
        >
        <svg  viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="rgba(255,255,255,.4)" cx="32.5" cy="32.5" r="32.5"></circle>
                <line x1="19.5" y1="19.5" x2="45.5" y2="45.5" id="Line" stroke="#000" stroke-width="4" stroke-linecap="round"></line>
                <line x1="19.5" y1="45.5" x2="45.5" y2="19.5" id="Line-2" stroke="#000" stroke-width="4" stroke-linecap="round"></line>
            </g>
        </svg>
        </div>
        <div class="gallery-controls">
          <div 
            class="gallery-last"
            @click="choseNextPhoto(index, targetPhoto)"
          >
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9737 20.6052C14.1842 21.3947 14.1842 22.6579 14.9737 23.3947C15.7632 24.1842 17.0263 24.1842 17.7632 23.3947L23.5 17.6579V38.0263C23.5 39.1315 24.3948 40.0263 25.5 40.0263C26.6053 40.0263 27.5 39.1315 27.5 38.0263V17.7105L33.2369 23.4473C34.0263 24.2368 35.2895 24.2368 36.0263 23.4473C36.3948 23.0789 36.6053 22.5526 36.6053 22.0263C36.6053 21.5 36.3948 21.0263 36.0263 20.6052L26.9211 11.5C26.5526 11.1315 26.0263 10.921 25.5 10.921C24.9737 10.921 24.4474 11.1315 24.079 11.5L14.9737 20.6052Z" fill="rgba(255,255,255,.7)"/>
              <path d="M0.5 25.5C0.5 39.2895 11.7105 50.5 25.5 50.5C39.2895 50.5 50.5 39.2895 50.5 25.5C50.5 11.7105 39.2895 0.5 25.5 0.5C11.7105 0.5 0.5 11.7105 0.5 25.5ZM46.5526 25.5C46.5526 37.0789 37.0789 46.5526 25.5 46.5526C13.9211 46.5526 4.44737 37.0789 4.44737 25.5C4.44737 13.9211 13.9211 4.44737 25.5 4.44737C37.0789 4.44737 46.5526 13.9211 46.5526 25.5Z" fill="rgba(255,255,255,.7)"/>
            </svg>
          </div>
          <div 
            class="gallery-next"
            @click="choseNextPhoto(index, targetPhoto)"  
          >
            <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9737 20.6052C14.1842 21.3947 14.1842 22.6579 14.9737 23.3947C15.7632 24.1842 17.0263 24.1842 17.7632 23.3947L23.5 17.6579V38.0263C23.5 39.1315 24.3948 40.0263 25.5 40.0263C26.6053 40.0263 27.5 39.1315 27.5 38.0263V17.7105L33.2369 23.4473C34.0263 24.2368 35.2895 24.2368 36.0263 23.4473C36.3948 23.0789 36.6053 22.5526 36.6053 22.0263C36.6053 21.5 36.3948 21.0263 36.0263 20.6052L26.9211 11.5C26.5526 11.1315 26.0263 10.921 25.5 10.921C24.9737 10.921 24.4474 11.1315 24.079 11.5L14.9737 20.6052Z" fill="rgba(255,255,255,.7)"/>
              <path d="M0.5 25.5C0.5 39.2895 11.7105 50.5 25.5 50.5C39.2895 50.5 50.5 39.2895 50.5 25.5C50.5 11.7105 39.2895 0.5 25.5 0.5C11.7105 0.5 0.5 11.7105 0.5 25.5ZM46.5526 25.5C46.5526 37.0789 37.0789 46.5526 25.5 46.5526C13.9211 46.5526 4.44737 37.0789 4.44737 25.5C4.44737 13.9211 13.9211 4.44737 25.5 4.44737C37.0789 4.44737 46.5526 13.9211 46.5526 25.5Z" fill="rgba(255,255,255,.7)"/>
            </svg>
          </div>
        </div>
      </div>
      <div v-if="targetPhoto !== -1" class="gallery-background"></div>
      <li 
        v-for="(photo, index) in photos" 
        :key="photo"
        class="photo"
        :class="index === targetPhoto && 'target'"
        @click="choseNextPhoto(index, totalPhotos)"
      >
        <GalleryImage v-bind:year="year" v-bind:photo="photo" v-bind:index="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import GalleryImage from './GalleryImage.vue'

export default {
  name: 'Gallery',
  props: [ 'photos', "year"],
  components: {
    GalleryImage
  },
  methods: {
      choseNextPhoto(index, totalPhotos) {
        console.log('clicked')
        const payload = { index, totalPhotos}
        this.$store.commit('decideTargetPhoto', payload)
      }
    },
  computed: {
      targetPhoto() {
        return this.$store.state.targetPhoto
      },
      totalPhotos() {
        return this.photos.length
      }
    }
  }
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
  padding: 1px;
}
.gallery {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
}
.photo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.photo-nav {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
}

.target {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 607;
}

.gallery-close {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 10px;
  bottom: 10px;
  opacity: .3;
  cursor: pointer;
  transition: opacity .5s ease;

  &:hover {
    opacity: .5;
    transition: opacity .5s ease;
  }
}

.gallery-controls {
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.gallery-last {
  transform: rotate(-90deg);
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 15px 0;
  opacity: .3;
  transition: opacity .5s ease;
  transition: opacity .5s ease;

  &:hover {
    opacity: .5;
    transition: opacity .5s ease;
  }
}

.gallery-last svg {
  width: 100%;
}

.gallery-next {
  transform: rotate(90deg);
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: .3;
  transition: opacity .5s ease;
  transition: opacity .5s ease;

  &:hover {
    opacity: .5;
    transition: opacity .5s ease;
  }
}

.gallery-next svg {
  width: 100%;
}

.gallery-background {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 900;
  background: rgba(0,0,0,.5);
  position: fixed;
  z-index: 603;
}

</style>
