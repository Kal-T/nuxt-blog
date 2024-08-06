export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    return {
        provide: {
          apiFetch: $fetch.create({ baseURL: config.public.BASE_URL})
        }
      }
  })
  