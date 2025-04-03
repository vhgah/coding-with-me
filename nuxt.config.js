export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Coding with me - A blog about web development and programming",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Welcome to Coding With Me! Here, I share my experiences navigating the tech industry, along with code refactoring solutions I've picked up working at big tech companies. This site offers insights and practical tips to help you level up your coding skills and navigate the real world of software development.",
      },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Coding with Me - Your Web Dev Companion",
      },
      {
        property: "og:description",
        content:
          "Delve into the world of web development with Coding With Me! Explore expert insights, practical tips, and code refactoring techniques to elevate your coding skills and navigate the real world of software development.",
      },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Coding with Me - Your Web Dev Companion",
      },
      {
        name: "twitter:description",
        content:
          "Delve into the world of web development with Coding With Me! Explore expert insights, practical tips, and code refactoring techniques to elevate your coding skills and navigate the real world of software development.",
      },
      { name: "twitter:image", content: "/favicon.png" },
      {
        hid: "csp",
        name: "Content-Security-Policy",
        content: "... (Insert your CSP policy directives here)...",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    bodyAttrs: {
      class: "bg-gray-100",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/intersection-observer-mixin.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],

  axios: {
    baseURL: process.env.API_URL || "http://api.codingwithme.docker",
  },

  router: {
    middleware: ["logAccess"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  server: {
    port: 5174,
    host: "0.0.0.0",
  },
};
