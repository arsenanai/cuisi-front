<template>
  <TopBar v-show="fullscreen===false" :fullscreen="fullscreen" @toggleFullscreen="handleFullscreen"/>
  <div class="grow flex flex-col md:flex-row justify-between">
    <SideBar v-show="fullscreen===false"/>
    <ViewContainer class="grow" :fullscreen="fullscreen" @toggleFullscreen="handleFullscreen">
    </ViewContainer>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import SideBar from './components/SideBar.vue';
import ViewContainer from './components/ViewContainer.vue';

export default {
  components: {
    TopBar,
    SideBar,
    ViewContainer
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  methods: {
    handleFullscreen(fs) {
      this.fullscreen = fs;
    },
  }
}
</script>