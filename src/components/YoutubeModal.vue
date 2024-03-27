<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="video-container">
        <Youtube :video-id="videoId" ref="player"/>
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
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    videoId: {
      type: String,
      required: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
