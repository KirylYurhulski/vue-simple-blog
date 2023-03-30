import axios from "axios";

export default {
  state: {
    posts: [],
    errorMessage: ""
  },
  actions: {
    async getPosts(ctx, limit= 5){
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
    }
  },
  mutations: {
    updatePosts(state, PostList) {
      state.posts = PostList
    },
    updateErrorMessage(state, message){
      state.errorMessage = message
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    errorMessage(state) {
      return state.errorMessage
    }
  }
}