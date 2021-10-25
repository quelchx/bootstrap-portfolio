<template>
  <div class="col-md-6">
    <div class="h-100 p-5 text-white bg-dark rounded-3">
      <h2>{{title}}</h2>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>