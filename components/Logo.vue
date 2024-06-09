<template>
  <div class="logo xl:h-32 flex md:justify-center justify-between items-center">
    <nuxt-link to="/" class="flex flex-col gap-5 items-center">
      <div class="h-12 w-12">
        <img
          class="h-full w-full rounded-lg object-cover"
          src="../public/thumb/handsome-guy.webp"
        />
      </div>
      <div class="text-center hidden xl:block">
        <div class="text-base font-semibold">Hoang Anh</div>
        <div class="text-sm text-gray-500">Software Engineer</div>
      </div>
    </nuxt-link>
    <Widget />
  </div>
</template>
