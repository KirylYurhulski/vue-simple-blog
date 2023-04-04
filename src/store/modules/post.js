import axios from "axios";

export default {
  state: {
    posts: [],
    loading: true,
    errorMessage: ""
  },
  actions: {
    async getPosts(ctx, limit= 5){
      ctx.commit('updateLoading', true)

      axios
        .get('https://jsonplaceholder.typicode.com/posts/?_limit=' + limit)
        .then((response) => {
          ctx.commit('updatePosts', response.data)
        })
        .catch((error) => {
          const errorMessage = `Error: ${error.code} ${error.response.status} ${error.response.statusText}`
          ctx.commit('updateErrorMessage', errorMessage)
          console.error(error)
        })
        .finally(() => {
          ctx.commit('updateLoading', false)
        })
    }
  },
  mutations: {
    updatePosts(state, PostList) {
      state.posts = PostList
    },
    updateErrorMessage(state, message) {
      state.errorMessage = message
    },
    updateLoading(state, value) {
      state.loading = value
    },
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    loading(state) {
      return state.loading
    },
    errorMessage(state) {
      return state.errorMessage
    }
  }
}