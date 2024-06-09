<script>
export default {
  name: "WorkDetail",
  data() {
    return {
      currentWork: {},
      works: [
        {
          id: 1,
          slug: "senprints",
          title: "Senprints",
          description: "Senprints eCommerce Platform (POD)",
          image: "senprints.webp",
          summary: "The E-commerce is trending",
        },
        {
          id: 2,
          slug: "kiotviet",
          title: "Kiotviet",
          description: "KiotViet POS Solutions",
          image: "kiotviet.webp",
          summary:
            "<p>This is my first time working at such a big tech company. Kiotviet is a technology ecosystem with retail management software (Kiotviet), B2B purchasing platform (KiotViet Connect), payment and financing solutions (KiotViet Finance). It has over 150,000 paying customers (as of 2021) and has raised a total of $3 million from reputable investment funds such as Seedcom, CVM017, and Mekong Capital. </p> <p>While I was here, I worked in the Internal department </p>",
        },
      ],
    };
  },
  mounted() {
    this.currentWork = this.works.find(
      (work) => work.slug === this.$route.params.slug
    );
  },
};
</script>

<template>
  <div class="content">
    <div class="flex flex-col gap-5 w-full">
      <Navigation navigation-to="/work" />
      <article class="detail flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-semibold leading-normal">
            {{ currentWork.title }}
          </h1>
          <p class="text-lg text-amber-700">
            {{ currentWork.description }}
          </p>
          <div
            v-html="currentWork.summary"
            class="flex flex-col gap-1 text-base text-gray-500 leading-7 tracking-wide"
          />
        </div>
      </article>

      <img
        v-if="currentWork.image"
        :src="require('@/public/' + currentWork.image)"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>

    <Footer />
  </div>
</template>
