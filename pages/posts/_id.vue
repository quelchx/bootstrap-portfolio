<template>
  <div class="container" id="article" :aria-label="post.title">
    <div v-if="loading && !error">
      <Spinner />
    </div>
    <div v-if="error">
      <Error />
    </div>
    <AOS
      animation="fade-up"
      duration="1000"
      delay="400"
      v-if="!error && !loading"
    >
      <p>Posted: {{ new Date(post.createdAt).toUTCString() }}</p>
      <h1>{{ post.title }}</h1>
      <p v-html="article"></p>
      <button class="btn btn-primary">
        <nuxt-link class="text-white no-decoration" to="/posts">Back</nuxt-link>
      </button>
    </AOS>
  </div>
</template>

<script>
import marked from 'marked'
import Spinner from '~/components/shared/Spinner'
import Error from '~/components/shared/Error'
import AOS from '~/components/shared/AOS'
export default {
  components: { Spinner, Error, AOS },
  async mounted() {
    try {
      let res = await fetch(`${process.env.blog}/${this.$route.params.id}`)
      this.post = await res.json()
      this.loading = false
      this.article = marked(this.post.content)
    } catch (error) {
      this.error = error
    }
  },
  data() {
    return {
      post: [],
      article: null,
      error: null,
      loading: true,
    }
  },
  head() {
    return {
      meta: [
        {
          hid: this.post.title,
          name: this.post.title,
          content: this.post.description,
        },
      ],
    }
  },
}
</script>