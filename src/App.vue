<template>
  <div id="app" class="h-auto max-w-[1920px] mx-auto">
    <header-vue  @scroll-to-about="handleScrollToAbout" />
    <router-view></router-view>
    <footer-vue/>
  </div>
</template>

<script>
import FooterVue from './components/FooterVue.vue'
import HeaderVue from './components/HeaderVue.vue'
export default {
  components: {FooterVue, HeaderVue  },
  name: 'App',
  methods: {
    handleScrollToAbout() {
      this.$nextTick(() => {
        // Check if aboutSection ref exists before trying to access its $el property
        if (this.$refs.aboutSection) {
          this.$refs.aboutSection.$el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
</script>

<style>
/* Add your global styles here */
</style>
