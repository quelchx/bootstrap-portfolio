<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <span class="fs-4 is-logo bounce">quelch()</span>
    </a>

    <ul class="nav nav-pills justify-content-center">
      <li
        class="nav-item switch-decoration"
        v-for="(route, index) in routes"
        :key="index"
      >
        <nuxt-link class="nav-link shuffle" :to="route.route">
          {{ route.name }}
        </nuxt-link>
      </li>
      <li class="nav-item bounce">
        <a @click="switchTheme" class="nav-link switch-decoration">{{`toggle(${theme})`}}</a>
      </li>
    </ul>
  </header>
</template>

<script>
import { routes } from '~/assets/api/routes'
export default {
  data() {
    return {
      routes: routes.paths,
      theme: 'dark',
    }
  },
  methods: {
    switchTheme() {
      if (this.theme === 'dark') {
        this.theme = 'light'
        document.querySelector('.light').className = 'dark'
      } else {
        this.theme = 'dark'
        document.querySelector('.dark').className = 'light'
      }
    },
  },
}
</script>
