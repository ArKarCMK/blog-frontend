<template>
  <div class="container">
    <div v-if="blog.image" class="img">
 
      <img :src="blog.image" width="600px" height="400" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h2>{{ blog.title }}</h2>
        <div @click="handleSubscribeToggle(blog.id)">
          <div v-if="isSubscribed" class="icon filled">
            <span class="count">{{ subscriberCount }}</span>
            <n-icon size="24" >
              <Heart/>
            </n-icon>
          </div>
          <div v-else class="icon">
            <span class="count">{{ subscriberCount }}</span>
            <n-icon size="24">
              <HeartOutline />
            </n-icon>
          </div>
        </div>
      </div>
      
      <div v-html="blog.body" />
    </div>
  </div>
</template>

<script setup>
import { HeartOutline, Heart } from '@vicons/ionicons5';
const isSubscribed = ref(false);
const blogStore = useBlogStore();
const subscribers = ref(null);
const props = defineProps({
  blog: {
    title: String,
    body: String,
  },
  userId : Number,
});

const subscriberCount = computed(()=>{
  if(subscribers.value > 1000  ) {
    return (Math.floor(subscribers.value / 100) / 10) + 'k';
    
  } else {
    return subscribers.value
  }
})

watch(
  () => [props.blog, props.userId],
  ([blog, userId]) => {
    if (blog && userId && blog.subscribers.some(subscriber => subscriber.id == userId)) {
      isSubscribed.value = true;
    }
    subscribers.value = blog.subscribers.length
    
  },
);

const handleSubscribeToggle = async(blogId) => {
  const res =  await blogStore.toggleSubscribe(blogId)
  if(!res.error.value) { 
    isSubscribed.value = !isSubscribed.value
    if(isSubscribed.value) {
      subscribers.value++
    } else {
      subscribers.value--
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  .content{
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        width: 100px;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;  
        .count{
          color: #000;
          margin-right: 5px;
        }
        
      }
      .filled{
        color: $link-hover;
      }
    }
  }
}
</style>
