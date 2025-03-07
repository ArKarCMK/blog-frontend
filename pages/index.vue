<template>
  <div>
    <navbar />
  </div>
</template>

<script setup>

const router = useRouter();

onMounted(() => {
  router.push("/home");
});
</script>

<style></style>
