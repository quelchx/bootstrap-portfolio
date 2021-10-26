<template>
  <section id="made-with" aria-label="made-with">
    <div class="row g-5">
      <div class="col-md-6">
        <h2 class="switch-decoration">Made With</h2>
        <p class="bounce">
          Ready to beyond the starter template? Check out these open source
          projects that you can quickly duplicate to a new GitHub repository.
        </p>
        <ul class="icon-list">
          <AOS
            delay="500"
            duration="600"
            animation="fade-right"
            v-for="(library, index) in libraries"
            :key="index"
          >
            <li class="shuffle">{{ library }}</li>
          </AOS>
        </ul>
      </div>

      <div class="col-md-6 ex-gap">
        <h2 class="switch-decoration">Finished Product</h2>
        <ul class="icon-list">
          <AOS
            animation="fade-left"
            duration="600"
            delay="500"
            v-for="(file, index) in files"
            :key="index"
          >
            <li class="bounce">{{ file }}</li>
          </AOS>
        </ul>
        <h2 class="switch-decoration">Key Assets</h2>
        <ul class="icon-list">
          <AOS
            animation="fade-left"
            duration="500"
            delay="500"
            v-for="(asset, index) in assets"
            :key="index"
          >
            <li class="bounce">{{ asset }}</li>
          </AOS>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from '~/components/AOS'
export default {
  components: { AOS },
  props: ['files', 'libraries', 'assets'],
}
</script>