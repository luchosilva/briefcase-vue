import { ApiFactory } from '~/repositories/factory'
import type { ApiModules, FetchClient } from '~/repositories/types'
import { apiClient } from '~/auth/http/apiClient'

declare module '#app' {
  interface NuxtApp {
    $api: ApiModules
  }
}

export default defineNuxtPlugin(() => {
  const useApi = apiClient()
  const modules = ApiFactory(useApi as FetchClient)

  return {
    provide: {
      api: modules,
    },
  }
})
