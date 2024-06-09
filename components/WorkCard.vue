<script>
export default {
  name: "WorkCard",
  data() {
    return {
      works: [
        {
          id: 1,
          title: "Senprints",
          description: "Senprints eCommerce Platform (POD)",
          image: "thumb/senprints.webp",
          link: "work/senprints",
        },
        {
          id: 2,
          title: "Kiotviet",
          description: "KiotViet POS Solutions",
          image: "thumb/kiotviet.webp",
          link: "work/kiotviet",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8"
  >
    <div
      v-for="(work, index) in works"
      :key="index"
      class="group relative flex flex-col gap-2"
    >
      <div class="w-full overflow-hidden rounded-lg">
        <div class="group-hover:scale-102 transition-all duration-500">
          <img
            :src="require('@/public/' + work.image)"
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="text-base text-gray-700">
          <nuxt-link :to="work.link">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ work.title }}
          </nuxt-link>
        </h3>
        <p class="text-sm text-gray-500">
          {{ work.description }}
        </p>
      </div>
    </div>
  </div>
</template>
