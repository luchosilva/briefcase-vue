<template>
  <div>
    <footer class="footer items-center p-4 md:container md:mx-auto">
      <div class="items-center grid-flow-col">
        <a :href="githubUrl.href" target="_blank">
          <Icon name="fa-brands:github" size="2.5em" />
        </a>
      </div>
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a :href="linkedinUrl.href" target="_blank">
          <Icon name="fa-brands:linkedin" size="2.5em" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

const githubUrl = new URL('https://github.com/luchosilva')

const linkedinUrl = new URL('https://www.linkedin.com/in/luis-silva-ufro-carahue')

</script>