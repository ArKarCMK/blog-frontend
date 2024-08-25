<template>
  <div class="container">
    <n-card title="Popular Blogs" size="medium">
      <div class="blog-container">
        <n-card size="medium">
          <div class="blogs">
            <div class="img">
              <n-carousel>
                <img
                  heigh="150"
                  width="150"
                  class="blog-img"
                  src="~/assets/image.png"
                />
              </n-carousel>
            </div>
            <div class="body">
              <n-h1>The Popular Article</n-h1>
              <n-p
                >One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to
                me?".....</n-p
              >
            </div>
            <div class="btn">
              <n-button>
                <n-icon size="30" color="#000">
                  <CaretForwardOutline />
                </n-icon>
              </n-button>
            </div>
          </div>
        </n-card>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { CaretForwardOutline } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 100px);
  margin: 0 auto;
  .blog-container {
    .blogs {
      display: flex;
      justify-content: space-around;
      .img {
        width: 150px;
        height: 150px;
      }
      .body {
        width: 80%;
        padding: 0 40px;
      }
      .btn {
        height: 150px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
