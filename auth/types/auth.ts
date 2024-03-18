export type Scheme = 'local' | 'refresh'

export type MethodTypes =
  | 'get'
  | 'post'
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'head'
  | 'patch'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | undefined

export interface Endpoint {
  url: string
  method: MethodTypes
}

export interface SchemeEndpoints {
  login: Endpoint
  refresh: Endpoint
  user: Endpoint
  logout: Endpoint
}

export interface SchemeRedirects {
  login: string
  logout: string
  home: string
}

export interface LoginProperty {
  property: string
  maxAge: number
}

export interface RefreshTokenScheme {
  endpoints: SchemeEndpoints
  redirect: SchemeRedirects
  token: LoginProperty
  refreshToken: LoginProperty
}

export interface AuthConfig {
  scheme: Scheme
  options: RefreshTokenScheme
}
