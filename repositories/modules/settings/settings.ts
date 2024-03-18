import type { UseFetchOptions, UseFetchReturn } from "@vueuse/core"
import { HttpRepository } from "../../http-repository"

export class SettingsRepository extends HttpRepository {
  private RESOURCE = "/settings/report-issue"

  reportIssue(payload: any, options: UseFetchOptions): UseFetchReturn<any> {
    return this.httpClient<string>(`${this.RESOURCE}`, options)
      .post(payload)
      .json()
  }
}
