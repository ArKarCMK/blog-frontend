// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["nuxtjs-naive-ui", "@pinia/nuxt"],
  // ui: {
  //   safelistColors: ["orange"],
  // },
  css: [
    // "@/assets/styles/variable.scss", // Ensure this path is correct
  ],

  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variable.scss";`, // Ensure this path is correct
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
