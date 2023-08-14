<template>
  <nav class="flex items-center justify-between leading-8 md:leading-9 lg:leading-10">
    <RouterLink class="brand-link text-center ml-2 md:ml-3 lg:ml-4 my-2 md:my-3 lg:my-4 leading-8 md:leading-9 lg:leading-10"
      to="/">Cuisi</RouterLink>
    <div class="grow"></div>
    <button class="text-center w-8 md:w-9 lg:w-10 ml-2 md:ml-3 lg:ml-4 my-2 md:my-3 lg:my-4 leading-8 md:leading-9 lg:leading-10">
      <i class="fa fa-search"></i>
    </button>
    <RouterLink class=" text-center w-8 ml-2 md:ml-3 lg:ml-4 my-2 md:my-3 lg:my-4 leading-8 md:leading-9 lg:leading-10" to="/profile">
      <i class="fa fa-user"></i>
    </RouterLink>
    <button class="box-border text-center w-8 m-2 md:m-3 lg:m-4 leading-8 md:leading-9 lg:leading-10" @click="toggleFullScreen">
      <i class="fa fa-expand" aria-hidden="true"></i>
    </button>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {RouterLink},
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
