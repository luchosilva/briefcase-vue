<script setup lang="ts">
import { Menu } from "~/components/commons/ScrollSpy/types"

export interface ContentProp {
  menu: Menu
}

defineProps<ContentProp>()
</script>

<template>
  <div :id="menu.id">
    <h3 class="pb-3 pt-5 text-xl font-semibold">
      {{ menu.title }}
    </h3>
    <section v-for="(section, index) in menu.sections" :key="index">
      <commons-scroll-spy-content :menu="section" />
    </section>
    <section v-for="(item, index) in menu.items" :id="item.id" :key="index">
      <h4 class="pb-3 pt-5 text-lg font-semibold">
        {{ item.title }}
      </h4>
      <p>
        {{ item.description }}
      </p>
    </section>
  </div>
</template>
