<template>
  <div id="index" aria-label="index">
    <AOS
      duration="500"
      anchor="#index"
      delay="300"
      animation="fade-down"
      class="container col-xxl-8 px-4 py-5"
    >
      <Hero class="is-hero" />
    </AOS>
    <AOS
      duration="500"
      delay="200"
      animation="fade-right"
      class="container px-4 py-5"
    >
      <Projects class="is-projects" />
      
    </AOS>
    <AOS duration="400" delay="400" animation="fade-left" class="container">
      <Jumbotron />
    </AOS>
    <Curve/>
    <AOS
      animation="fade-up"
      duration="600"
      delay="200"
      class="container px-4 py-5"
    >
      <Skills :assets="skills" />
    </AOS>
    <AOS animation="zoom-in" duration="600" delay="300" class="container px-4">
      <MadeWith :assets="assets" :files="files" :libraries="libraries" />
    </AOS>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import Projects from '~/components/Projects'
import Jumbotron from '~/components/Jumbotron'
import Skills from '~/components/Skills'
import MadeWith from '~/components/MadeWith'
import AOS from '~/components/AOS'
import Wave from '~/components/Curve'
import { content } from '~/api/contents'
import Curve from '~/components/Curve.vue'

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
      title: 'Eric Quelch Portfolio',
      titleTemplate: 'Eric Quelch - Portfolio',
      meta: [
        {
          hid: `Eric Quelch's personal portfolio and resume`,
          name: `Eric Quelch's landing page for personal portfolio and resume`,
          content: `Information about Eric Quelch and his experience with web development`,
        },
      ],
    }
  },
  components: { Hero, Projects, Jumbotron, Skills, MadeWith, AOS, Curve },
}
</script>

