<template>
  <html :class="mode" :data-theme="mode" :lang="locale">
    <body
      class="antialiased duration-300 transition-colors min-w-full min-h-screen bg-base-200"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </body>
  </html>
</template>

<script setup lang="ts">
import { setLocale as setLocaleVee } from "@vee-validate/i18n";

const mode = useState("mode", () => "light");

const { locale, setLocale } = useI18n();

const app: any = useAppConfig();

useHead({
  title: app.name,
  titleTemplate: "%s - Luis Silva",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Briefcase Vue",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
      crossorigin: "*",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossorigin: "*",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "*",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      crossorigin: "*",
    },
  ],
  script: [
    {
      src: "https://polyfill.io/v3/polyfill.min.js",
    },
  ],
});

setLocaleVee("es");
setLocale("es");
</script>
