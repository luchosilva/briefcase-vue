<template>
  <Html :class="mode" :data-theme="mode">

  <Body
    class="antialiased duration-300 transition-colors text-gray-800 bg-gray-50 dark:text-gray-200 dark:bg-gradient-to-br dark:to-gray-900 dark:from-cyan-800 dark:to-blue-900">
    <div class="hero h-screen">
      <div class="hero-content w-full">
        <div class="grid md:grid-cols-1 gap-5 w-full items-center justify-items-center prose">
          <div class="text-center">
            <h1 class="text-9xl font-bold mb-0">
              {{ props.error.statusCode }}
            </h1>
            <h4 class="text-2xl font-light m-0">{{ props.error.message }}</h4>
          </div>
          <div class="mt-9">
            <button class="btn btn-primary ml-3" @click="handleError">
              {{ $t("error.back") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Body>

  </Html>
</template>

<script setup lang="ts">
const mode = useState("mode.current", () => "dark")

const props: any = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404, message: "Not Found" }),
  },
})

const handleError = () => clearError({ redirect: "/" })
</script>
