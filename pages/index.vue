<template>
  <div class="hero min-h-full">
    <div class="px-5 w-full">
      <div class="grid md:grid-cols-12 gap-5 w-full items-center justify-items-center">
        <div class="max-w-md text-center col-span-4">
          <img src="https://media.licdn.com/dms/image/D4E03AQFZ35-GIWO2Hg/profile-displayphoto-shrink_800_800/0/1699043197238?e=1716422400&v=beta&t=LT0a2h1A5LHWf8cEWsUjHcxMPCsgemuLrZKUxQeXpsY" alt="avatar" class="rounded-full w-[30dvh] h-[30dvh] mx-auto" />
          <h1 class="text-5xl font-bold">{{ $t('pages.index.title') }}</h1>
          <p class="py-6">{{ $t('pages.index.description') }}</p>
          <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="redirectToEmail">
            {{ $t('pages.index.contact-by-email') }}
          </button>
        </div>
        <div class="col-span-8 max-h-[80dvh] overflow-auto scroll-m-1">
          <!-- <projects /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import projects from "../components/projects/Projects.vue";

definePageMeta({
  layout: "landing",
  auth: false,
})

const redirectToEmail = () => {
  const url = new URL("mailto:luishernansilvaq@gmail.cl?subject=Contacto&body=Hola Luis, ...");
  window.open(url.href, "_blank");
}
</script>
