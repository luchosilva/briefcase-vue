import type { FetchClient } from "./types"

export class HttpRepository {
  public httpClient: FetchClient

  constructor(httpClient: FetchClient) {
    this.httpClient = httpClient
  }
}
