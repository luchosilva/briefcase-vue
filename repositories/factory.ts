import { FilesRepository, SettingsRepository } from "./modules";
import type { ApiModules, FetchClient } from "./types";

export const ApiFactory = (httpClient: FetchClient): ApiModules =>
  ({
    files: new FilesRepository(httpClient),
    settings: new SettingsRepository(httpClient),
  }) as ApiModules;
