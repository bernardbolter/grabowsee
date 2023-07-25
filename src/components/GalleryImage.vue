<template>
  <img
    class="gallery-image"
    :class="!this.isTarget ? '' : !this.landscape ? 'portrait' : 'landscape'"
    :src="require(`@/assets/events/${year}/${photo}`)"
  >
</template>

<script>
export default {
  name: 'GalleryImage',
  props: ['photo', 'year', 'index'],
  data() {
    return {
      landscape: null
    }
  },
  computed: {
    isTarget() {
      return this.index === this.$store.state.targetPhoto
    }
  },
  mounted() {
    console.log(this.isTarget)
    var checkedImage = new Image
    checkedImage.src = require(`@/assets/events/${this.year}/${this.photo}`)
    checkedImage.onload = () => {
      if (checkedImage.width > checkedImage.height) {
        this.landscape = true
      } else {
        this.landscape = false
      }
    }
  }
}
</script>

<style scoped scss>
  .gallery-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .landscape {
    width: 90%;
    height: auto;
  }

  .portrait {
    width: auto;
    height: 90vh;
  }
</style>