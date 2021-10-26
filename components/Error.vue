<template>
  <div class="alert alert-danger position-relative" role="alert">
    Error loading articles, please try again later
    <nuxt-link to="/">
      <span
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >
        <i class="fas fa-home"></i>
        <span class="visually-hidden">Error</span>
      </span>
    </nuxt-link>
  </div>
</template>
