<script setup lang="ts">
const appConfig = useAppConfig()
const envMode = appConfig.env
const showEnvIndicator = envMode !== "production"
const mode = useState("mode")
const isLightMode = computed(() => mode.value === "light")

const menu = [
  {
    key: "maintainer",
    label: "Mantenedores",
    icon: "heroicons:cog-6-tooth",
    permissions: {
      and: [
        {
          scope: "companies",
          action: "list",
        },
      ],
    },
    children: [
      {
        key: "maintainer-users",
        label: "Usuarios",
        icon: "heroicons:user-group",
        route: "/maintainer/users",
      },
      {
        key: "maintainer-roles",
        label: "Roles",
        icon: "heroicons:shield-check",
        route: "/maintainer/roles",
      },
    ],
  },
]
</script>
<template>
  <div>
    <div id="header">
      <DnaBadge v-if="showEnvIndicator" size="md"
        class="px-5 capitalize font-bold absolute z-50 left-0 right-0 m-auto top-0 rounded-t-none" variant="primary">
        {{ envMode }}
      </DnaBadge>
    </div>
    <div>
      <div>
        <DefaultNavbar id="nav">
          <template #logo>
            <div class="h-16 flex justify-center items-center text-center mr-6">
              <NuxtLink class="prose text-xl font-bold" to="/companies">
                <img v-if="isLightMode" src="@/assets/img/logo-light.png" alt="logo" class="w-64 p-2" />
                <img v-else src="@/assets/img/logo.png" alt="logo" class="w-64 p-2" />
              </NuxtLink>
            </div>
          </template>

          <template #menu>
            <div class="w-full">
              <CommonsNavigationMenu :items="menu" />
            </div>
          </template>
        </DefaultNavbar>
        <div class="flex-1 px-1 md:px-2 xl:px-3 py-1 md:py-2 xl:py-3">
          <slot />
        </div>
        <DefaultFooter id="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  #header {
    display: none !important;
  }

  #footer {
    display: none !important;
  }

  #nav {
    display: none !important;
  }
}
</style>
