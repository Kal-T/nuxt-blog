<template>
  <div class="container mx-auto w-1/2 py-8 divide-gray-300">
    <PostItem v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script setup>
    // const { data: posts } = await useFetch('http://nuxt-blog-laravel.test/api/posts')

    const posts = await useNuxtApp().$apiFetch('/api/posts')
    
</script>