<template>
  <main id="main" class="light">
    <div class="container">
      <Header id="navigation" aria-label="navigation" />
    </div>
    <Nuxt
      keep-alive
      class="main-content"
      id="main-content"
      aria-label="main-content"
    />
    <div class="container pb-4">
      <Footer id="footer" aria-label="footer" />
    </div>
  </main>
</template>

<script>
import Header from '~/components/global/Header'
import Footer from '~/components/global/Footer'
export default {
  components: { Header, Footer },
}
</script>
