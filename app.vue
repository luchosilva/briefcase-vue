<template>
  <!doctype html>
  <Html :class="mode" :data-theme="mode" lang="es">
    <head>
      <title>Briefcase Vue</title>
    </head>
    <Body
      class="antialiased duration-300 transition-colors min-w-full min-h-screen bg-base-200"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { setLocale } from "@vee-validate/i18n";

const mode = useState("mode", () => "light");

// const theme = useState('theme.current', () => 'darkMain')

const app: any = useAppConfig();

useHead({
  title: app.name,
  titleTemplate: "%s - Luis Silva",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Inventario",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
  ],
  script: [
    {
      src: "https://polyfill.io/v3/polyfill.min.js",
    },
  ],
});

setLocale("es");
</script>
