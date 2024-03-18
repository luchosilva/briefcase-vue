import type { UseFetchOptions, UseFetchReturn } from '@vueuse/core'
import { HttpRepository } from '../../http-repository'

export class FilesRepository extends HttpRepository {
  private RESOURCE = '/v1/api/files'

  uploadFile(payload: any, options: UseFetchOptions): UseFetchReturn<string> {
    return this.httpClient<string>(`${this.RESOURCE}/upload`, options)
      .post(payload)
      .json()
  }

  urlFile(
    key: string | Ref<string | undefined>,
    options = {} as UseFetchOptions,
  ): UseFetchReturn<any> {
    const route = computed(() => {
      const keyParam = toValue(key)

      return `${this.RESOURCE}/url/${keyParam}`
    })

    return this.httpClient<any>(route, options).get()
  }

  openFile(key: string, options = {} as UseFetchOptions): UseFetchReturn<any> {
    return this.httpClient<any>(`${this.RESOURCE}/open/${key}`).get()
  }

  downloadFile(
    key: string | Ref<string | undefined>,
    options = {} as UseFetchOptions,
  ): UseFetchReturn<any> {
    const route = computed(() => {
      const keyParam = toValue(key)

      return `${this.RESOURCE}/download/${keyParam}`
    })

    return this.httpClient<any>(route, options).get()
  }
}
