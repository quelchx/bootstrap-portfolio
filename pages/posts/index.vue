<template>
  <section class="container" id="articles" aria-label="articles">
    <AOS
      duration="300"
      delay="500"
      class="is-article-heading p-4 p-md-5 mb-4 text-white rounded bg-dark"
    >
      <h2>Articles</h2>
      <p>
        Articles and guides intensions are to help new developers get started.
      </p>
    </AOS>

    <div v-if="loading && !error">
      <Spinner />
    </div>

    <div v-if="error">
      <Error />
    </div>

    <article v-if="!loading && !error" class="row stretch mb-2">
      <AOS
        duration="500"
        delay="500"
        animation="zoom-in"
        class="col align-self-center"
        v-for="post in posts"
        :key="post.id"
      >
        <Article
          :desc="post.description"
          :title="post.title"
          :id="post.id"
          :date="post.createdAt"
        />
      </AOS>
    </article>

    <div class="row g-5">
      <aside class="col-md-8">
        <AOS
          duration="200"
          delay="400"
          animation="fade-down"
          v-if="!error && !loading"
        >
          <h3 class="pb-4 mb-4">
            {{ featured.title }}
          </h3>

          <article class="blog-post">
            <p v-html="featured"></p>
          </article>
        </AOS>
      </aside>

      <aside v-if="!error && !loading" class="col-md-4">
        <AOS
          duration="300"
          delay="400"
          animation="zoom-out"
          class="position-sticky"
          style="top: 2rem;"
        >
          <div class="p-4 mb-3 bg-light rounded">
            <h4>About</h4>
            <p class="mb-0">
              Every articles intention is to help educate and inspire new and
              experienced developers. Majority of the articles will cover the
              Vue.js and Nuxt.js framework, with the odd guide using other
              frameworks such as React.js
            </p>
          </div>

          <div class="p-4">
            <h4>All Articles</h4>
            <ol class="list-unstyled">
              <li class="pt-3" v-for="post in cache" :key="post.id">
                <nuxt-link :to="`/posts/${post.id}`">
                  {{ post.title }}
                </nuxt-link>
              </li>
            </ol>
          </div>
        </AOS>
      </aside>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import AOS from '~/components/shared/AOS'
import Spinner from '~/components/shared/Spinner'
import Error from '~/components/shared/Error'
import Article from '~/components/pages/posts/Article'

import meta from '~/assets/api/meta'

export default {
  components: { Spinner, Error, Article, AOS },
  async beforeCreate() {
    try {
      let res = await fetch(process.env.blog)
      this.posts = await res.json()
      this.loading = false
      return this.shuffled()
    } catch (error) {
      return (this.error = error)
    }
  },
  data() {
    return {
      posts: [],
      cache: [],
      featured: [],
      loading: true,
      error: null,
    }
  },
  methods: {
    shuffled() {
      this.featured = marked(this.posts[this.posts.length - 1].content)
      this.cache = [...this.posts]
      this.posts.reverse().shift()
    },
  },
  head() {
    return {
      meta: meta.articles,
    }
  },
}
</script>