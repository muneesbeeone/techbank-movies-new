<template>
  <banner />
  <About id="about" />
  <projects />
</template>
<script>
import About from "../components/About.vue";
import Banner from "../components/Banner.vue";
// import Music from '../components/Music.vue';
import Projects from "../components/Projects.vue";
export default {
  components: { Banner, About, Projects },
  methods: {
    scrollToAbout() {
      // Use router.push to navigate to the About section with a hash link
      this.$router.push({ path: '/', hash: '#about' });
    }
  }
};
</script>
