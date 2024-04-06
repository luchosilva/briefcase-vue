<template>
  <footer
    className="flex flex-col items-center justify-center p-4 md:container md:mx-auto"
  >
    <span className="text-center text-2xl"
      >¿Te gustaría ver mi portafolio en React.js?</span
    >
    <a :href="briefcaseUrl.href" target="_blank">
      <Icon name="logos:react" size="2.5em" />
    </a>
  </footer>
</template>

<script setup lang="ts">
const briefcaseUrl = new URL("https://luchosilva.github.io/briefcase-vue/");
</script>
