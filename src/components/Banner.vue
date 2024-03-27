<template>
    <div class="relative  h-screen overflow-hidden max-h-[1080px] flex items-center justify-center">
        <header-vue/>
        <div class="relative z-10">
          <div class="overlay w-screen flex items-center z-20 h-screen relative">
              <div class="w-full h-sceen absolute px-6 lg:px-12 order-2 md:order-1">
                  <div class="text-center md:text-left font-sans space-y-6 wrapper">
                      <h1
                          class="font-black tracking-tight text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
                          Elevate Your Movie Experience</h1>
                      <p class="text-md lg:text-lg leading-8 text-white">HOPE SONG | AR RAHMAN | THE GOATLIFE | BLESSY</p>
                      <a href="https://www.youtube.com/watch?v=BJ8hdCxvsIE" target="_blank" class="ring-1 w-fit ring-white hover:bg-white/20 rounded-3xl mx-auto md:mx-0 py-2 px-2 flex gap-2 items-center text-white transition duration-300 ease-in-out">
                          <img class="h-8" src="../assets/img/play-button.svg" alt="">
                          Watch Now
                      </a>
                  </div>
              </div>
              <div
                  class="absolute text-sm lg:text-md w-fit text-white border-l-2 px-3 lg:px-5 mb-10 border-white h-52 space-y-3 flex justify-end flex-col bottom-0 right-0">
                  <a href="https://www.facebook.com/profile.php?id=61556745997800">Fb.</a>
                  <a href="https://www.instagram.com/techbankmovieslondon">Ig.</a>
                  <a href="https://youtube.com/@techbankmovies?feature=shared">Yt.</a>
                  <a href="https://www.linkedin.com/company/techbank-movies-london">In.</a>
              </div>
          </div>
      </div>
      <div class="video-container">
          <video id="2911f215-33d8-5331-fd79-0cc1bdd219d7-video" autoplay="" loop=""
              class="object-cover w-full h-full" style="background-image:url('/img/image_2024_03_25T09_59_43_190Z.png')"
              muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="../assets/img/HopeFinal12March.mp4" data-wf-ignore="true">
              <source src="../assets/img/HopeFinal12March.webm" data-wf-ignore="true">
          </video>
      </div>
      </div>
</template>
<script>
import HeaderVue from './HeaderVue.vue'
export default {
  components: { HeaderVue },
    
}
</script>