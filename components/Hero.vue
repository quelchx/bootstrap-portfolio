<template>
  <section id="hero">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <BannerSVG
          class="d-block mx-lg-auto img-fluid"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 is-headline switch-decoration fw-bold lh-1 mb-3">
          <Typewriter :array='array'/>
        </h1>
        <p class="lead">
          My name is Eric Quelch, and I'm an inspiring full-stack developer
          currently living in London, Ontario. I have been developing for close
          to four years now and love what I do. I'm very passionate and am
          always trying to expand my skillset.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="bounce btn btn-dark btn-lg px-4 me-md-2">
            <Link path="https://github.com/quelchx" name="Github" />
          </button>
          <button type="button" class="shuffle btn btn-info btn-lg px-4">
            <Link path="#" name="Linkedin" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Link from '~/components/Link'
import BannerSVG from "~/assets/svg/BannerSVG";
import Typewriter from '~/components/Typewriter'
export default {
  components: { BannerSVG, Link, Typewriter },
  data() {
    return {
      array: ['quelchx()']
    }
  }
};
</script>
