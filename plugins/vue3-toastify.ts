import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 3000,
    theme: 'auto',
    position: toast.POSITION.TOP_RIGHT,
  } as ToastContainerOptions)

  return {
    provide: {
      toast,
    },
  }
})
