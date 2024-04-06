<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3"
  >
    <img
      :src="avatarUrl.href"
      alt="avatar"
      class="rounded-full w-[30dvh] h-[30dvh] md:w-[50dvh] md:h-[50dvh] mx-auto"
    />
    <div class="flex flex-col">
      <h1 class="text-xl sm:text-5xl font-bold">
        {{ t("pages.index.title") }}
      </h1>
      <p class="py-6 text-sm sm:text-2xl">{{ t("pages.index.description") }}</p>
      <div className="flex items-center justify-around p-5 gap-5">
        <a :href="githubUrl.href" target="_blank">
          <Icon name="fa-brands:github" size="2.5em" />
        </a>
        <a :href="linkedinUrl.href" target="_blank">
          <Icon name="fa-brands:linkedin" size="2.5em" />
        </a>
        <a :href="mailUrl.href" target="_blank">
          <Icon name="logos:google-gmail" size="2.5em" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const avatarUrl = new URL(
  "https://media.licdn.com/dms/image/D4E03AQFZ35-GIWO2Hg/profile-displayphoto-shrink_800_800/0/1699043197238?e=1716422400&v=beta&t=LT0a2h1A5LHWf8cEWsUjHcxMPCsgemuLrZKUxQeXpsY"
);

const mailUrl = new URL(
  "mailto:luishernansilvaq@gmail.cl?subject=Contacto&body=Hola Luis, ..."
);

const githubUrl = new URL("https://github.com/luchosilva");

const linkedinUrl = new URL(
  "https://www.linkedin.com/in/luis-silva-ufro-carahue"
);
</script>
