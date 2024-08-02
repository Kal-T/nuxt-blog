<template>
  
  <div class="container mx-auto w-1/2 py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink to="/posts/1">Title of Post</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>Feb 2, 2022</div>
      <div>&middot;</div>
      <div>Thiha Htet Zaw</div>
    </div>
    <div class="post-content">
      {{ $route.params.id }} About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur at saepe eaque mollitia iure sapiente odio ad error nostrum aperiam deleniti autem, perferendis iste minus repellat! Sapiente assumenda maxime vitae soluta, ratione quae nulla optio consequatur excepturi qui eligendi nobis a dicta numquam mollitia modi dignissimos consectetur praesentium dolore accusantium eos sunt vel, quas atque! Aliquam, dolorem rerum aliquid qui dolores blanditiis autem, voluptatum officiis ducimus ipsa esse eaque, modi excepturi saepe voluptas error laboriosam doloribus iste? Libero sed molestiae accusamus magni officiis deserunt eius consectetur dolores fugit delectus in, inventore ea dicta totam nam officia ab vel quae voluptatum.
    </div>
  </div>
</template>