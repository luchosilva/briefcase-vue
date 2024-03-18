import {
  type BeforeFetchContext,
  type OnFetchErrorContext,
  createFetch,
} from "@vueuse/core";

export const apiClient = () => {
  const runtimeConf = useRuntimeConfig();

  const forceSignOut = async () => {
    if (!process.client) return;
    await navigateTo("/");
  };

  const beforeFetch = async ({
    options,
  }: BeforeFetchContext): Promise<void | Partial<BeforeFetchContext>> => {
    if (!process.client) return;

    options = {
      ...options,
      headers: {
        ...options.headers,
        Accept: "application/json",
      },
    };

    return { options };
  };

  const onFetchError = (ctx: OnFetchErrorContext) => {
    const { response } = ctx as any;

    if (response?.status === 401) {
      forceSignOut();
    }
    return ctx;
  };

  return createFetch({
    baseUrl: runtimeConf.public.apiBase,
    options: {
      beforeFetch,
      onFetchError,
    },
    fetchOptions: {
      mode: "cors",
    },
  });
};
