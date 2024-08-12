

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  return {
    provide: {
      apiFetch: $fetch.create({
        baseURL: config.public.BASE_URL,
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
        },
      }),
    },
  }
})
