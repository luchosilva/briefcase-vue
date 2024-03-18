import type {
  MaybeRefOrGetter,
  UseFetchOptions,
  UseFetchReturn,
} from "@vueuse/core";
import { FilesRepository, SettingsRepository } from "../modules";

export interface FetchClient {
  <T>(
    url: MaybeRefOrGetter<string>
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;

  <T>(
    url: MaybeRefOrGetter<string>,
    useFetchOptions: UseFetchOptions
  ): UseFetchReturn<T> & PromiseLike<T>;

  <T>(
    url: MaybeRefOrGetter<T>,
    options: RequestInit,
    useFetchOptions?: UseFetchOptions | undefined
  ): UseFetchReturn<T> & PromiseLike<T>;
}

export interface ApiModules {
  files: FilesRepository;
  settings: SettingsRepository;
}

export * from "./commons";
