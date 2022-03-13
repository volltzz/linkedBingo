export default {
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
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "normalize.css/normalize.css",
    "@/assets/scss/base.scss",
  ],
  plugins: ["@/plugins/element-ui"],
  components: [{ path: "@/components", pathPrefix: false }],
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@/components/bosons/*.scss"],
  },
  modules: ["@nuxtjs/proxy", "@nuxtjs/axios", "@nuxtjs/auth-next"],
  router: {
    middleware: ["auth"],
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          name: "X-Auth-Token",
          global: true,
          type: false,
        },
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "token" },
          logout: false,
          user: false,
        },
      },
    },
  },
  axios: {
    // http://3.145.195.66:8040
    proxy: true,
    prefix: "/api/",
  },
  proxy: {
    "/api/": {
      target: process.env.SERVER_API_URL,
      pathRewrite: { "^/api/": "" },
    },
  },
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
