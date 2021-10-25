<template>
  <a :href="link" target="_blank" class="is-link switch-decoration">
    {{ name }}
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['link', 'name'],
}
</script>
