// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700],
    },
    display: 'swap',
  },

  supabase: {
    // Disable default auth redirect since we use a custom token system
    redirect: false,
  },

  // Ensure standard TypeScript behavior
  typescript: {
    strict: true
  }
})