<template>
  <div>
    <h2>Articles</h2>
    <p>
      Wanting more detailed guides? Check out some articles below.
    </p>
    <ul class="icon-list">
      <div v-for="post in posts" :key="post.id">
        <li class="shuffle pt-2">
          <nuxt-link class="switch-decoration" :to="`/posts/${post.id}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>