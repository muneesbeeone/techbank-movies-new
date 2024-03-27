<template>
  <div id="app" class="h-auto max-w-[1920px] mx-auto">
    <header-vue/>
    <router-view></router-view>
    <footer-vue/>
  </div>
</template>

<script>
import FooterVue from './components/FooterVue.vue'
import HeaderVue from './components/HeaderVue.vue'
export default {
  components: {FooterVue, HeaderVue  },
  name: 'App'
}
</script>

<style>
/* Add your global styles here */
</style>
