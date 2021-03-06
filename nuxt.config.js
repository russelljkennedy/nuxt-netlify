export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-netlify",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  generate: {
    async ready() {
      const { $content } = require("@nuxt/content");
      const files = await $content()
        .only(["slug"])
        .fetch();
      console.log(files);
    }
  },

  // generate: {
  //   async routes() {
  //     const contentPaths = ["docs"];

  //     const files = [];
  //     contentPaths.forEach(async path => {
  //       const file = await $content(path).fetch();
  //       files.push(file);
  //     });

  //     const generated = files.map(file => {
  //       return {
  //         route: file.path === "/index" ? "/" : file.path,
  //         payload: fs.readFileSync(
  //           `./content/${file.path}${file.extension}`,
  //           "utf-8"
  //         )
  //       };
  //     });

  //     return generated;
  //   }
  // },

  // generate: {
  //   routes: function() {
  //     const fs = require("fs");
  //     const path = require("path");
  //     return fs.readdirSync("./content/blog").map(file => {
  //       return {
  //         route: `/blog/${path.parse(file).name}`, // Return the slug
  //         payload: require(`./content/blog/${file}`)
  //       };
  //     });
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
