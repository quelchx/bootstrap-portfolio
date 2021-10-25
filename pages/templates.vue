<template>
  <section class="container" id="css-templates" aria-label="css-templates">
    <AOS duration="1000" delay="400" class="col-lg-8 mx-auto p-3 py-md-5">
      <h1>Pre-Styled and Pre-Configured</h1>
      <p class="fs-5 col-md-8">
        View pre-built and styled UI components using CSS, Sass, Bootstrap,
        Bulma and much more. Check out the demo's or souce code, feel free to
        copy and use in your own projects.
      </p>
      <AOS delay="300" duration="300" animation="slide-left" class="mb-5">
        <a
          href="https://github.com/quelchx.github.io"
          class="btn btn-dark bounce btn-md px-4"
          >View Github Repository</a
        >
      </AOS>
      <hr class="col-3 col-md-2 mb-5" />
      <article class="templates">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AOS
            animation="zoom-in"
            delay="400"
            duration="500"
            v-for="(template, index) in templates"
            :key="index"
          >
            <Template
              :desc="template.desc"
              :code="template.code"
              :demo="template.link"
            />
          </AOS>
        </div>
        <hr class="col-3 col-md-2 mb-5" />
        <AOS delay="400" duration="400" class="row g-5">
          <Donations />
          <div v-if="!loading && !error" class="col-md-6">
            <Snippets :posts="posts" />
          </div>
        </AOS>
      </article>
    </AOS>
  </section>
</template>

<script>
import Template from '~/components/pages/templates/Template'
import Donations from '~/components/pages/templates/Donations'
import Snippets from '~/components/pages/templates/Snippets'
import Link from '~/components/shared/Link'
import AOS from '~/components/shared/AOS'

import { templates } from '~/assets/api/templates'
import meta from '~/assets/api/meta'
export default {
  components: { Template, Link, Donations, AOS, Snippets },
  async beforeCreate() {
    try {
      let res = await fetch(process.env.blog)
      this.posts = await res.json()
      return (this.loading = false)
    } catch (error) {
      return (this.error = error)
    }
  },
  head() {
    return {
      meta: meta.templates,
    }
  },
  data() {
    return {
      posts: [],
      error: null,
      loading: true,
      templates: templates.files,
    }
  },
}
</script>