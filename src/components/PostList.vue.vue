<template>
  <div class="list-group">
    <PostItem v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: 'PostList',
  props: [
      "posts"
  ],
  components: {PostItem}
}
</script>

