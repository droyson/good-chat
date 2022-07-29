import { defineNuxtConfig } from "nuxt";

const storyMode = process.argv[3] === "--story";
if (storyMode) {
  console.log("loading story mode");
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  dir: {
    pages: storyMode ? "stories" : "pages",
  },
});
