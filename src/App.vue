<template>
  <div id="app" class="h-auto max-w-[1920px] mx-auto">
    <router-view></router-view>
    <footer-vue/>
  </div>
</template>

<script>
import FooterVue from './components/FooterVue.vue'
export default {
  components: {FooterVue  },
  name: 'App'
}
</script>

<style>
/* Add your global styles here */
</style>
