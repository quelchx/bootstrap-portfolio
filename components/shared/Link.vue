<template>
  <a :href="link" target="_blank" class="is-link switch-decoration">
    {{ name }}
  </a>
</template>

<script>
export default {
  props: ['link', 'name'],
}
</script>
