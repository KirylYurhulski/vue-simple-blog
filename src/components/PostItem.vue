<template>
  <div class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ post.id }}. {{ post.title }}</h5>
    </div>
    <small>{{ post.body }}</small>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: [
      'post'
  ]
}
</script>