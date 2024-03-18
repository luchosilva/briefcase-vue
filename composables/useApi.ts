import { BeforeFetchContext, createFetch } from '@vueuse/core'

const runtimeConf = useRuntimeConfig()

const beforeFetch = async ({
  options,
}: BeforeFetchContext): Promise<void | Partial<BeforeFetchContext>> => {
  /* const myToken = await getMyToken()
  options.headers.Authorization = `Bearer ${myToken}` */

  return { options }
}

export const useApi = createFetch({
  baseUrl: runtimeConf.public.apiBase,
  options: {
    beforeFetch,
  },
  fetchOptions: {
    mode: 'cors',
  },
})
