export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "linkedbingo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "normalize.css/normalize.css",
    "@/assets/scss/base.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "@/components", pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["@/components/bosons/*.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],
  router: {
    middleware: ["auth"],
  },

  auth: {
    // redirect: {
    //   login: "/login",
    //   logout: "/",
    //   home: "/"
    // },
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          property: "token",
          name: "X-Auth-Token",
          global: true,
          // maxAge: 1800,
          // required: true,
          type: false,
        },
        // refreshToken: {
        //   property: 'refresh_token',
        //   data: 'refresh_token',
        //   maxAge: 60 * 60 * 24 * 2
        // },
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "token" },
          // refresh: false,
          logout: false,
          user: false,
        },

        // tokenType: ''
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308 
    browserBaseUrl: process.env.API_URL,
    baseUrl: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.dat$/,
        loader: "raw-loader",
        exclude: /(node_modules)/,
      });
    },
  },
};
