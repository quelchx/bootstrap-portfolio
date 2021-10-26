<template>
  <section>
    <h2 class="pb-2 border-bottom shuffle">Personal Skills</h2>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
    >
      <AOS animation='zoom-out' duration='600' delay='500' v-for="(skill, index) in assets" :key="index">
        <div class="col d-flex align-items-start">
          <i :class="'skill-icon ' + skill.icon"></i>
          <div class="mx-2">
            <h4 class="fw-bold mb-0 switch-decoration">{{ skill.asset }}</h4>
            <p class="pt-2 bounce">{{ skill.text }}</p>
          </div>
        </div>
      </AOS>
    </div>
  </section>
</template>

<script>
import AOS from '~/components/AOS'
export default {
  components: { AOS },
  props: ['assets'],
}
</script>
