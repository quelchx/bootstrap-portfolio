<template>
  <div id="index" aria-label="index">
    <AOS
      duration="1000"
      anchor="#index"
      delay="300"
      animation="fade-down"
      class="container col-xxl-8 px-4 py-5"
    >
      <Hero class="is-hero" />
    </AOS>
    <AOS
      duration="1000"
      delay="200"
      animation="fade-right"
      class="container px-4 py-5"
    >
      <Projects class="is-projects" />
    </AOS>
    <AOS duration="900" delay="400" animation="fade-left" class="container">
      <Jumbotron />
    </AOS>
    <AOS
      animation="fade-up"
      duration="1200"
      delay="200"
      class="container px-4 py-5"
    >
      <Skills :assets="skills" />
    </AOS>
    <AOS animation="zoom-in" duration="1200" delay="300" class="container px-4">
      <MadeWith :assets="assets" :files="files" :libraries="libraries" />
    </AOS>
  </div>
</template>

<script>
import Hero from '~/components/pages/home/Hero'
import Projects from '~/components/pages/home/Projects'
import Jumbotron from '~/components/pages/home/Jumbotron'
import Skills from '~/components/pages/home/Skills'
import MadeWith from '~/components/pages/home/MadeWith'

import AOS from '~/components/shared/AOS'

import { content } from '~/assets/api/contents'
import meta from '~/assets/api/meta'

export default {
  data() {
    return {
      libraries: content.libraries,
      files: content.files,
      assets: content.assets,
      skills: content.skills,
    }
  },
  head() {
    return {
      meta: meta.index,
    }
  },
  components: { Hero, Projects, Jumbotron, Skills, MadeWith, AOS },
}
</script>