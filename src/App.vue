<template>
  <div class="container-sm">
    <form class="row g-2 mt-4" @submit.prevent>
      <div class="col-auto">
        <input v-model="limit" type="text" class="form-control-plaintext" placeholder="Input posts limit...">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3" @click="onSubmit">Load</button>
      </div>
    </form>
    <hr>
    <Loader v-if="loading === true"/>
    <div v-else>
      <PostList class="mt-4" v-if="allPosts.length" :posts="allPosts"/>
      <div v-else-if="errorMessage" class="alert alert-danger mt-4" role="alert" >
        {{ errorMessage }}
      </div>
      <div v-else><div class="alert alert-warning mt-4" role="alert">
        {{ warningMessage }}
      </div></div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader"
import PostList from '@/components/PostList.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      warningMessage: 'No Posts selected!',
      limit: ''
    }
  },
  components: {
    PostList,
    Loader
  },
  methods: {
    ...mapActions(['getPosts']),
    async onSubmit() {
      this.getPosts(this.limit)
      this.limit = ''
    }
  },
  async mounted(){
    this.getPosts()
  },
  computed: {
    ...mapGetters(['allPosts', 'loading', 'errorMessage'])
  }
}
</script>