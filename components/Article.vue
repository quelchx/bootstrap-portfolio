<template>
  <div
    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
  >
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">{{
        new Date(date).toUTCString()
      }}</strong>
      <h3 class="mb-0">{{ title }}</h3>
      <p class="card-text mb-auto">
        {{ desc }}
      </p>
      <nuxt-link :prefetch='true' :to="`posts/${id}`" class="mt-2 stretched-link" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'id', 'date', 'desc'],
}
</script>
