<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      required: true
    },
    eraseSpeed: {
      type: Number,
      default: 100,
    },
    typeSpeed: {
      type: Number,
      default: 200,
    },
    delay: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
    }
  },
  methods: {
    typewriter() {
      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.array[this.arrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.typewriter, this.typeSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraser, this.delay)
      }
    },
    eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.array[this.arrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraser, this.eraseSpeed)
      } else {
        this.typeStatus = false
        this.arrayIndex += 1
        if (this.arrayIndex >= this.array.length)
          this.arrayIndex = 0
        setTimeout(this.typewriter, this.typeSpeed + 1000)
      }
    },
  },
  created() {
    setTimeout(this.typewriter, this.delay + 200)
  },
}
</script>