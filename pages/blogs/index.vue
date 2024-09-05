<template>
  <div class="container">
    <div class="search-container">
      <div class="search">
        <n-input
          class="input"
          type="text"
          size="large"
          placeholder="Search Blog"
        />
        <n-button tertiary size="large" class="btn">search</n-button>
      </div>
      <div class="filter">
        <n-select
          v-model:value="value"
          size="large"
          :options="options"
          placeholder="Filter by category"
        />
      </div>
    </div>
    <HomeBlogs />
    <div class="pagination">
      <n-pagination v-model:page="page" :page-count="100" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const page = ref(1);
const totalPages = ref(100);

const value = ref(null);
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: "song0",
    disabled: true,
  },
  {
    label: "Drive My Car",
    value: "song1",
  },
  {
    label: "Norwegian Wood",
    value: "song2",
  },
];
</script>

<style lang="scss" scoped>
.container {
  .search-container {
    display: flex;
    justify-content: space-between;
    .search {
      // width: 300px;
      .input {
        width: 300px;
        margin: 30px 5px 20px 50px;
      }
      .btn {
        background-color: #2c2c2c;
        color: #fff;
      }
    }
    .filter {
      width: 300px;
      margin: 30px 50px 20px 0px;
    }
  }
  .pagination {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
