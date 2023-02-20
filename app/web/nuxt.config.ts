// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  runtimeConfig: {
    public: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECERET,
      redirect_uri: process.env.REDIRECT_URI,
      intra_auth_uri: process.env.INTRA_AUTH_URI,
      apiBase: '/api'
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
