<script setup lang="ts">
import { storeToRefs } from "pinia"

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const userName = computed(() => {
  return `@${user.value?.username}`
})

// navigateTo('/home')
</script>

<template>
  <header class="mb-4 flex justify-between items-center">
    <div>
      <h1 class="text-3xl sm:text-4xl">Bienvenido {{ userName }}</h1>
    </div>
  </header>
</template>
