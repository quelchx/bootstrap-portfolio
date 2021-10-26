<template>
  <div
    :data-aos="animation"
    :data-aos-easing="easing"
    :data-aos-mirror="mirror"
    :data-aos-duration="duration"
    :data-aos-once="once"
    :data-aos-delay='delay'
    :data-aos-anchor-placement="anchor"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AOS',
  props: {
    animation: {
      type: String,
      default: 'fade-in',
      required: false,
    },
    easing: {
      type: String,
      default: 'ease-in-out',
      required: false,
    },
    mirror: {
      type: Boolean,
      default: true,
      required: false,
    },
    once: {
      type: Boolean,
      default: false,
      required: false,
    },
    delay: {
      type: String,
      default: "0",
      required: false
    },
    anchor: {
      type: String,
      default: '',
      required: false,
    },
    duration: {
      type: String,
      default: '0',
      required: false,
    }
  },
}
</script>



