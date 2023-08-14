<template>
  <section class="relative">
    <RouterView class="w-full h-full p-2 md:p-3 lg:p-4 text-left"/>
    <button class="absolute right-0 top-0 box-border w-8 leading-8 md:leading-9 lg:leading-10 text-center m-2 md:m-3 lg:m-4" @click="toggleFullScreen" v-show="fullscreen===true">
      <i class="fa fa-compress" aria-hidden="true"></i>
    </button>
  </section>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  components: {RouterView},
  props: {
    fullscreen: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    toggleFullScreen() {
      this.$emit('toggleFullscreen', !this.fullscreen);
    }
  }
}
</script>