<script setup lang="ts">
import { Menu } from "~/components/commons/ScrollSpy/types"

export interface MenuProp {
  menu: Menu
  activeId?: string
}

export type MenuEvent = (e: "scroll-to", id: string) => void

const emit = defineEmits<MenuEvent>()

defineProps<MenuProp>()

const scrollToSection = (id: string) => {
  emit("scroll-to", id)
}
</script>

<template>
  <div>
    <ul class="menu w-56 rounded-box">
      <li>
        <details open>
          <summary class="text-lg font-bold">
            <a :href="'#' + menu.id" @click="scrollToSection(menu.id)">
              <span class="text-lg font-bold">
                {{ menu.title }}
              </span>
            </a>
          </summary>
          <ul>
            <li v-for="(section, index) in menu.sections" :key="index">
              <commons-scroll-spy-menu
                :menu="section"
                :active-id="activeId"
                @scroll-to="scrollToSection"
              />
            </li>
            <li v-for="(section, index) in menu.items" :key="index">
              <a
                :href="'#' + section.id"
                :class="{
                  'text-base': activeId !== section.id,
                  'text-base font-bold': activeId === section.id,
                }"
                @click="scrollToSection(section.id)"
              >
                <span class="text-lg">
                  {{ section.title }}
                </span>
              </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  @apply bg-base-200 sticky top-20;
}
</style>
