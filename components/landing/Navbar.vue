<template>
  <nav
    class="w-full navbar justify-between items-center h-20 py-4 bg-blue-600-color px-7"
  >
    <div class="flex items-center">
      <div class="prose text-xl md:text-4xl font-bold">
        <Icon name="logos:vue" />
      </div>
      <div class="prose text-xl md:text-4xl font-bold">
        <icon v-if="isLightMode" name="heroicons:sun-solid" />
        <icon v-else name="heroicons:moon-solid" />
      </div>
      <div class="prose text-xl md:text-4xl font-bold">
        <icon v-if="isSpanishMode" name="openmoji:flag-spain" />
        <icon v-else name="openmoji:flag-united-states" />
      </div>
    </div>

    <div class="flex items-center">
      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost">
          <Icon name="la:language" size="1.2em" />
        </button>
        <ul
          class="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-200 rounded-lg w-40 border dark:border-none"
        >
          <li
            v-for="availableLocale in availableLocales"
            :key="availableLocale.code"
          >
            <button
              @click.prevent="() => changeLocale(availableLocale.code)"
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
          class="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-200 rounded-box w-40 border dark:border-none"
        >
          <li>
            <button
              @click.prevent="() => setTheme('light')"
              class="cursor-pointer"
            >
              <Icon name="uil:sun" />
              {{ t("landing.nav.themeSelector.light") }}
            </button>
          </li>
          <li>
            <button
              @click.prevent="() => setTheme('dark')"
              class="cursor-pointer"
            >
              <Icon name="uil:moon" />
              {{ t("landing.nav.themeSelector.dark") }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const theme = useState("mode", () => "light");

const isLightMode = computed(() => theme.value === "light");

const setTheme = (code: string) => {
  console.log("setTheme", code);
  theme.value = code;
};

import { setLocale as veeSetLocale } from "@vee-validate/i18n";

interface Locale {
  code: string;
  name: string;
  icon: string;
  file: string;
}

const { t, locale, locales, setLocale } = useI18n();

const isSpanishMode = computed(() => locale.value === "es");

const availableLocales = computed(() => {
  return (locales.value as Locale[]).filter(
    (i: any): any => i.code !== locale.value
  );
});

const changeLocale = (code: string) => {
  console.log("changeLocale", code);
  setLocale(code);
  veeSetLocale(code);
};
</script>
