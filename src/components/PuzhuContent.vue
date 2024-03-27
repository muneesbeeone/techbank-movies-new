<template>
  <div>
    <div class="relative h-screen overflow-hidden max-h-[400px] flex items-center justify-center">
      <header-vue/>
      <div class="relative z-10">
        <div class="overlay w-screen flex items-center z-20 h-screen relative">
          <div class="w-full h-sceen absolute px-6 lg:px-12 order-2 md:order-1">
            <div class="text-center font-sans space-y-6">
              <h1 class="font-black tracking-tight text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Puzhu
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="video-container">
        <img src="https://0xtech-cdn.s3-eu-west-1.amazonaws.com/dwallet-referral/techbank-movies/puzhu/puzhu-banner.webp" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="min-h-screen relative w-full lg:px-12 py-10 lg:py-20 px-3 sm:py-38">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div v-for="(item, i) in images" class="mx-auto card" :key="i">
          <img class="rounded-xl" :src="`https://0xtech-cdn.s3-eu-west-1.amazonaws.com/dwallet-referral/techbank-movies/puzhu/${item}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from './HeaderVue.vue';

export default {
  components: { HeaderVue },
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.images = ['puzhu1.webp','puzhu2.webp'];
  },
};
</script>
