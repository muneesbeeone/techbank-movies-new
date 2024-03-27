<template>
    <banner/>
    <About/>
    <projects/>
</template>
<script>
import About from '../components/About.vue';
import Banner from '../components/Banner.vue'
import Projects from '../components/Projects.vue';
export default {
  components: { Banner,About, Projects },
    
}
</script>