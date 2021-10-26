<template>
  <div class="col d-flex align-items-start">
    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
      <slot name="svg" />
    </div>
    <div>
      <h2>{{ title }}</h2>
      <slot name="paragraph" />
      <a :href="route" target="_blank" :class="'btn ' + button">
        {{title}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "button", "route"]
};
</script>
