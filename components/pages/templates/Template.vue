<template>
  <div class="col">
    <div class="card shadow-sm">
      <img :src="require('~/assets/images/features.png')" alt="demo-template">
      <div class="card-body">
        <p class="card-text">
          {{desc}}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-dark">
              <a class='no-decoration switch-decoration' :href="demo">
                Demo
              </a>
            </button>
            <button type="button" class="btn btn-sm btn-outline-dark">
              <a class='no-decoration switch-decoration' :href="code">
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['desc', 'demo', 'code']
}
</script>
