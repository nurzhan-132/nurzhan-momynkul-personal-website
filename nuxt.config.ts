import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  features: {
    inlineStyles: false,
  },

  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Jost: [300, 400, 500, 600, 700],
        },
      },
    ],
  ],

  // i18n: {
  //   locales: [
  //     {
  //       code: "en",
  //       file: "en/index.js",
  //     },
  //     {
  //       code: "ru",
  //       file: "ru-RU.js",
  //     },
  //     {
  //       code: "kk",
  //       file: "kk-KZ.js",
  //     },
  //   ],
  //   lazy: true,
  //   langDir: "lang",
  //   defaultLocale: "en",
  //   strategy: "prefix_and_default",
  // },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "lang",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "ru",
        iso: "ru-RU",
        name: "Русский",
        file: "ru-RU.json",
      },
      {
        code: "kk",
        iso: "kk-KZ",
        name: "Қазақша",
        file: "kk-KZ.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
});
