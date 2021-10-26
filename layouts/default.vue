<template>
  <main class="light">
    <div class="container">
      <Header />
    </div>
    <Nuxt keep-alive class="main-content" />
    <div class="container pb-4">
      <Footer />
    </div>
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Header, Footer },
}
</script>
