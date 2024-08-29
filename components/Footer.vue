<template>
  <div class="container">
    <n-grid cols="3" responsive="screen" x-gap="12">
      <n-grid-item>
        <div class="copyright">
          <div class="text">&#169; 2024 Ak Company Limited</div>
          <div class="text">All rights reserved</div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="navigation">
          <div class="first-row">
            <div class="first-column">
              <nuxt-link class="link" to="/home"> Home </nuxt-link>
              <nuxt-link class="link" to="/blogs"> Blogs </nuxt-link>
              <nuxt-link class="link" to="/about"> About </nuxt-link>
            </div>
            <n-divider vertical class="divider" />
            <div class="second-column">
              <nuxt-link class="link" to="#">Privacy And Policy</nuxt-link>
              <nuxt-link class="link" to="#">Terms And Conditions</nuxt-link>
            </div>
          </div>
          <div class="second-row">
            <n-input class="input" type="text" placeholder="Email" />
            <n-button class="button" strong secondary> Subscribe </n-button>
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="social">
          <div class="text">Becoming A Friend</div>
          <div class="img">
            <n-image-group>
              <n-space>
                <img
                  src="../assets/Facebook.jpg"
                  width="40"
                  height="40"
                  alt=""
                />
                <img src="../assets/YouTube.jpg" widht="40" height="40" />
                <img src="../assets/Twitter.jpg" widht="40" height="40" />
              </n-space>
            </n-image-group>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style lang="scss" scoped>
.container {
  /* width: calc(100vw - 160px); */
  background: #020202;
  color: #fff;
  margin: 0 auto;
  padding: 20px;
  /* display: flex;
  justify-content: center; */
  .copyright {
    height: 100%;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    .text {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .navigation {
    .first-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* background-color: red; */
      margin: 0 auto;
      .first-column {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        .link {
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 5px;
          &:hover {
            color: #11bad3;
          }

          &.router-link-active {
            color: #11bad3;
          }
        }
      }
      .divider {
        margin-top: 6px;
        height: 54px;
      }
      .second-column {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        .link {
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 5px;
        }
      }
    }
    .second-row {
      display: flex;
      padding-top: 20px;
      .input {
        /* width: 300px; */
        margin-right: 10px;
      }
      .button {
        background: #d9d9d9;
        padding: 0 40px;
      }
    }
  }
  .social {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 40px;

    .text {
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 20px;
    }
  }
}
</style>
