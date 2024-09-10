<template>
  <div class="container">
    <h4>Comments</h4>
    <n-card class="card" v-for="test in testArr" :key="test.id">
      <div class="first-row">
        <div class="user">
          <img
            src="https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width="50"
            height="50"
            class="profile"
          />
          <div class="name">Albert Steward</div>
        </div>
        <div class="time">2 hours ago</div>
      </div>
      <div class="second-row">
        <div>This is some article</div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
const testArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
</script>

<style lang="scss" scoped>
.container {
  width: 450px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  .card {
    margin-bottom: 5px;
    .first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .user {
        display: flex;
        align-items: center;
        .profile {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
