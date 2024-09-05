<template>
  <div class="container">
    <div class="navbar">
      <navbar />
    </div>
    <div class="page">
      <NuxtPage />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup></script>

<style>
.container {
  .navbar {
    position: fixed;
    z-index: 999;
    width: 100%;
  }
  .page {
    padding-top: 80px;
  }
}
</style>
