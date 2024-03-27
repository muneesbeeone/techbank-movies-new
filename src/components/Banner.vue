<template>
  <div
    class="relative h-screen overflow-hidden max-h-[1080px] flex items-center justify-center"
  >
    <!-- <header-vue /> -->
    <div class="relative z-10">
      <div class="overlay w-screen flex items-center z-20 h-screen relative">
        <div class="w-full h-sceen absolute px-6 lg:px-12 order-2 md:order-1">
          <div class="text-center md:text-left font-sans space-y-6 wrapper">
            <h1
              class="font-black tracking-tight text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              Elevate Your Movie Experience
            </h1>
            <p class="text-md lg:text-lg leading-8 text-white">
              HOPE SONG | AR RAHMAN | THE GOATLIFE | BLESSY
            </p>
            <button
              @click="openModal"
              class="ring-1 w-fit ring-white hover:bg-white/20 rounded-3xl mx-auto md:mx-0 py-2 px-2 flex gap-2 items-center text-white transition duration-300 ease-in-out"
            >
              <img class="h-8" src="../assets/img/play-button.svg" alt="" />
              Watch Now
            </button>
          </div>
        </div>
        <div
          class="absolute text-sm lg:text-md w-fit text-white border-l-2 px-3 pr-5  mb-10 border-white  space-y-3 flex justify-end flex-col bottom-0 right-0"
        >
          <a href="https://www.facebook.com/profile.php?id=61556745997800" target="_blank"
            ><i class='bx bxl-facebook-square'></i></a
          >
          <a href="https://www.instagram.com/techbankmovieslondon_" target="_blank"><i class='bx bxl-instagram'></i></a>
          <a href="https://youtube.com/@techbankmovies?feature=shared" target="_blank"><i class='bx bxl-youtube'></i></a>
          <a href="https://www.linkedin.com/company/techbank-movies-london" target="_blank"
            ><i class='bx bxl-linkedin'></i></a
          >
        </div>
      </div>
    </div>
    <div class="video-container">
      <video
        id="2911f215-33d8-5331-fd79-0cc1bdd219d7-video"
        autoplay=""
        loop=""
        class="object-cover w-full h-full"
        style="background-image: url('/img/image_2024_03_25T09_59_43_190Z.png')"
        muted=""
        playsinline=""
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="../assets/img/HopeFinal12March.mp4"
          data-wf-ignore="true"
        />
        <source
          src="../assets/img/HopeFinal12March.webm"
          data-wf-ignore="true"
        />
      </video>
    </div>
  </div>
  
<!-- Main modal -->
<div v-if="isModalOpen" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="overflow-y-auto flex justify-center inset-0 mx-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 max-w-5xl w-full max-h-full">
        <!-- Modal content -->
        <div class="relative bg-black rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    HOPE SONG | AR RAHMAN
                </h3>
                <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4 mx-auto w-full">
                <iframe class="mx-auto" width="100%" height="504" src="https://www.youtube.com/embed/BJ8hdCxvsIE?autoplay=1" frameborder="0" allow="accelerometer; autoplay;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <!-- Modal footer -->

        </div>
    </div>
</div>

</template>
<script>
import Youtube from "vue-youtube";
export default {
  components: {
    Youtube,
  },
  data() {
    return {
      isModalOpen: false,
      videoId: "BJ8hdCxvsIE`",
    };
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
