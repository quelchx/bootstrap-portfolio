export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Eric Quelch',
    titleTemplate: 'quelchx',
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Eric Quelch - Full Stack Developer',
        name: 'Personal Portfolio + Resume',
        content: 'Information about Eric Quelch - Full Stack Developer',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/15181efa86.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
    ],
  },
  css: ['@/assets/style/main.scss'],
  plugins: ['~/plugins/aos.js'],
  components: false,
  generate: {
    fallback: true,
  },
  env: {
    blog: process.env.BLOG_API_URL,
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
