<script setup lang="ts">
import { Menu } from "~/components/commons/ScrollSpy/types"

export interface ScrollSpyProp {
  menu: Menu
}

const props = defineProps<ScrollSpyProp>()

const scrollToSection = (id: string) => {
  const targetElement = document.getElementById(id)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
}

const traverseNestedArray = (menu: Menu, callback: (menu: Menu) => void) => {
  callback(menu)

  if (menu.items) {
    for (const item of menu.items) {
      traverseNestedArray(item, callback)
    }
  }

  if (menu.sections) {
    for (const section of menu.sections) {
      traverseNestedArray(section, callback)
    }
  }
}

const content = ref<HTMLDivElement>()

const activeId = ref<string>()

const handleScroll = (e: any) => {
  const contentHeight = e?.target?.clientHeight
  const scrollPosition = e?.target?.scrollTop
  if (!contentHeight || !scrollPosition) return

  traverseNestedArray(props.menu, (el) => {
    const sectionElement = document.getElementById(el.id)
    if (!sectionElement) return
    const sectionTop = sectionElement.offsetTop - contentHeight / 2
    if (!sectionTop) return
    const sectionBottom = sectionTop + sectionElement.clientHeight
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeId.value = el.id
    }
  })
}

watch(
  () => props.menu,
  () => {
    activeId.value = undefined
    content.value?.scrollTo({ top: 0 })
  },
  { deep: true },
)
</script>

<template>
  <div class="scrollspy">
    <commons-scroll-spy-menu
      :menu="menu"
      :active-id="activeId"
      @scroll-to="scrollToSection"
    />
    <commons-scroll-spy-content
      id="content"
      ref="content"
      :menu="menu"
      class="col-span-3 overflow-y-auto"
      @scroll="handleScroll"
    />
  </div>
</template>

<style scoped>
.scrollspy {
  @apply grid grid-cols-4 gap-1 overflow-y-auto h-[calc(100vh-15rem)];
}
</style>
