<template>
  <nav class="w-full navbar">
    <div class="md:container md:mx-auto">
      <div class="flex flex-1 gap-5 px-2 mx-2">
        <div class="prose text-xl font-bold">
          <icon v-if="isLightMode" name="heroicons:sun-solid" />
          <icon v-else name="heroicons:moon-solid" />
        </div>
        <div class="prose text-xl font-bold">
          <icon v-if="isSpanishMode" name="openmoji:flag-spain" />
          <icon v-else name="openmoji:flag-united-states" />
        </div>
      </div>

      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost">
          <Icon name="la:language" size="1.2em" />
        </button>
        <ul
          class="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-gray-50 bg-opacity-10 rounded-lg w-40 border dark:border-none"
        >
          <li
            v-for="availableLocale in availableLocales"
            :key="availableLocale.code"
          >
            <button
              @click="changeLocale(availableLocale.code)"
              class="cursor-pointer"
            >
              <Icon :name="availableLocale.icon" />
              {{ availableLocale.name }}
            </button>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost">
          <Icon name="uil:sun" size="1.2em" />
        </button>
        <ul
          class="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-gray-50 bg-opacity-10 rounded-box w-40"
        >
          <li>
            <button @click="setTheme('light')" class="cursor-pointer">
              <Icon name="uil:sun" />
              {{ $t("landing.nav.themeSelector.light") }}
            </button>
          </li>
          <li>
            <button @click="setTheme('dark')" class="cursor-pointer">
              <Icon name="uil:moon" />
              {{ $t("landing.nav.themeSelector.dark") }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const theme = useState("mode");

const mode = useState("mode");

const isLightMode = computed(() => mode.value === "light");

const setTheme = (code: string) => {
  theme.value = code;
};

import { setLocale as veeSetLocale } from "@vee-validate/i18n";

interface Locale {
  code: string;
  name: string;
  icon: string;
  file: string;
}

const { locale, locales, setLocale } = useI18n();

const isSpanishMode = computed(() => locale.value === "es");

const availableLocales = computed(() => {
  return (locales.value as Locale[]).filter(
    (i: any): any => i.code !== locale.value
  );
});

const changeLocale = (code: string) => {
  setLocale(code);
  veeSetLocale(code);
};
</script>
