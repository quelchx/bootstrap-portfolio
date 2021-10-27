<template>
  <section class="container" id="articles" aria-label="articles">
    <AOS
      duration="300"
      delay="500"
      class="is-article-heading p-4 p-md-5 mb-4 text-white rounded bg-dark"
    >
      <h2 class="monaco">.blog()</h2>
      <p class="mx-3">
        Blogs are guides with intensions to help new developers learn new tricks
        and techniques.
      </p>
    </AOS>

    <div class="is-loading" v-if="loading && !error">
      <Spinner />
    </div>

    <div v-if="error">
      <Error />
    </div>

    <article v-if="!loading && !error" class="row mb-2">
      <AOS
        duration="500"
        delay="500"
        animation="zoom-in"
        class="col-12 align-self-center"
        v-for="post in posts"
        :key="post.id"
      >
        <Article
          keep-alive
          :desc="post.description"
          :title="post.title"
          :id="post.id"
          :date="post.createdAt"
        />
      </AOS>
    </article>

    <div class="row g-5" keep-alive>
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
            <h4 class="monaco shuffle">.about()</h4>
            <p class="mb-0">
              Every articles intention is to help educate and inspire new and
              experienced developers. Majority of the articles will cover the
              Vue.js and Nuxt.js framework, with the odd guide using other
              frameworks such as React.js
            </p>
          </div>

          <div class="p-4 bg-light rounded">
            <h4 class="monaco shuffle">.blogs()</h4>
            <ol class="list-unstyled">
              <li class="my-2 bounce" v-for="post in cache" :key="post.id">
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
import AOS from '~/components/AOS'
import Spinner from '~/components/Spinner'
import Error from '~/components/Error'
import Article from '~/components/Article'

export default {
  components: { Spinner, Error, Article, AOS },
  async fetch() {
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
      title: 'Blogs',
      titleTemplate: 'Eric Quelch - Blogs',
      meta: [
        {
          hid: `Eric Quelch - Blogs, Articles and Guides`,
          name: `Articles and Guides by Eric Quelch`,
          content: `Read articles and guides writen by Eric Quelch`,
        },
      ],
    }
  },
}
</script>
