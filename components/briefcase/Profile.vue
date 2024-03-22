<template>
  <div>
    <img
      :src="urlAvatar.href"
      alt="avatar"
      class="rounded-full w-[30dvh] h-[30dvh] mx-auto"
    />
    <h1 class="text-5xl font-bold">{{ t("pages.index.title") }}</h1>
    <p class="py-6">{{ t("pages.index.description") }}</p>
    <a
      :href="urlAvatar.href"
      target="_blank"
      class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
    >
      {{ t("pages.index.contact-by-email") }}
    </a>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const urlAvatar = new URL(
  "https://media.licdn.com/dms/image/D4E03AQFZ35-GIWO2Hg/profile-displayphoto-shrink_800_800/0/1699043197238?e=1716422400&v=beta&t=LT0a2h1A5LHWf8cEWsUjHcxMPCsgemuLrZKUxQeXpsY"
);
</script>
