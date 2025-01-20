<template>
  <div v-if="message" class="container">
    <!-- <div class="container"> -->
    <n-alert class="success-message" type="info" closable>
      {{ message }}
      <!-- Hellow World, -->
    </n-alert>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .success-message {
    position: absolute;
    top: 20px;
    right: 10px;
  }
}
</style>
