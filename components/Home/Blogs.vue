<template>
  <div class="blog-container">
    <n-card title="Blogs" size="medium">
      <n-grid cols="1 s:2 m:3" responsive="screen" x-gap="12">
        <n-grid-item>
          <div class="blog">
            <div>
              <img
                src="../../assets/image.png"
                width="300"
                height="200"
                alt=""
              />
            </div>
            <div>
              <h1>The book I love</h1>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to me?".....
              </p>
            </div>
            <div class="button">
              <n-button tertiary class="btn">Read More</n-button>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="blog">
            <div>
              <img
                src="../../assets/image.png"
                width="300"
                height="200"
                alt=""
              />
            </div>
            <div>
              <h1>The book I love</h1>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to me?".....
              </p>
            </div>
            <div class="button">
              <n-button tertiary class="btn">Read More</n-button>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="blog">
            <div>
              <img
                src="../../assets/image.png"
                width="300"
                height="200"
                alt=""
              />
            </div>
            <div>
              <h1>The book I love</h1>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to me?".....
              </p>
            </div>
            <div class="button">
              <n-button tertiary class="btn">Read More</n-button>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  width: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: green;
  .blog {
    width: 300px;
    .button {
      display: flex;
      justify-content: space-between;
      .btn {
        background: #2c2c2c;
        color: #fff;
      }
    }
  }

  .side-bar {
    height: 399px;
    width: 400px;
    background: #fff;
  }
}
</style>
