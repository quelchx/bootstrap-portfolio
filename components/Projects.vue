<template>
  <section>
    <h2 class="pb-2 border-bottom">Projects Of Mine</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <Section
        title="Vue Writer"
        route="https://www.npmjs.com/package/vue-writer"
        button="btn-dark bounce"
      >
        <template v-slot:svg>
          <BoxOpenSVG />
        </template>
        <template v-slot:paragraph>
          <p>
            Typewriter component that simulates typing, and erasing text. Based
            off
            <a
              class="is-link switch-decoration"
              href="https://www.npmjs.com/package/vue-typer"
              target="_blank"
              >Vue Typer</a
            >
            This package's intention is to be a very lightweight typewriting
            feature you can add to your existing project.
          </p>
        </template>
      </Section>
      <Section
        title="AOS Vue"
        route="https://www.npmjs.com/package/aos-vue"
        button="btn-primary shuffle"
      >
        <template v-slot:svg>
          <CubesSolidSVG />
        </template>
        <template v-slot:paragraph>
          <p>
            <span>
              Lightweight animate on scroll component built for Vue.js. This
              package utilizes a library called aos.js, which you can find at
            </span>
            <a
              class="is-link switch-decoration"
              href="https://www.npmjs.com/package/aos"
              target="_blank"
              >AOS.js</a
            >.
            <span>
              The design of This component is to leverage the aos.js library and
              its features, customized towards the Vue way.
            </span>
          </p>
        </template>
      </Section>
      <Section
        title="Perty UI"
        route="https://marketplace.visualstudio.com/items?itemName=ericquelch.perty"
        button="btn-secondary bounce"
      >
        <template v-slot:svg>
          <CubeSolidSVG />
        </template>
        <template v-slot:paragraph>
          <p>
            The UI Theme that keeps things simple and clean. Based off the
            GitHub Dark Theme color palette with a twist. Spice up your Visual
            Code Editor and add this theme today.
          </p>
        </template>
      </Section>
    </div>
  </section>
</template>

<script>
import Section from '~/components/Section'
import CubesSolidSVG from '~/assets/svg/CubesSolidSVG'
import CubeSolidSVG from '~/assets/svg/CubeSolidSVG'
import BoxOpenSVG from '~/assets/svg/BoxOpenSVG'

export default {
  components: { Section, CubeSolidSVG, CubesSolidSVG, BoxOpenSVG },
}
</script>
