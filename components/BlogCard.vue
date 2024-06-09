<script>
export default {
  name: "BlogCard",
  data() {
    return {
      blogs: [
        {
          title: "The AI revolution (Chat GPT)",
          created_at: "Apr 21, 2024",
          link: "",
          summary:
            "AI is quite dumb, the accuracy of ChatGPT 3.5 is only 48%, and GPT-4 is more accurate by 40% compared to before, but there is still a large gap.",
        },
        {
          title: "The Dockerize",
          created_at: "Mar 19, 2024",
          link: "",
          summary:
            "Before, I only used Laradock to dockerize the containers I needed, but it seems heavy, so I took the initiative to learn about Docker and dockerize this website myself.",
        },
        {
          title: "2023 Year In Review",
          created_at: "Dec 29, 2023",
          link: "/blog/2023-reiew",
          summary:
            "2023 is a good year to me. The first is, I got a new job. I work as a software engineer at a big company. I have a good salary and a good environment. I have a good team and a good boss. I have a good life.",
        },
        {
          title: "Microservice Architecture",
          created_at: "Dec 27, 2022",
          link: "",
          summary:
            "Recently, I've been working on a project about microservers using Nest.js with Apache Kafka.",
        },
        {
          title: "2022 Year In Review",
          created_at: "Dec 31, 2022",
          link: "",
          summary:
            "2022 is a good year to me. The first is, I got a new job. I work as a software engineer at a big company. I have a good salary and a good environment. I have a good team and a good boss. I have a good life.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="blog-content flex flex-col gap-10">
    <div
      v-for="(blog, index) in blogs"
      :key="index"
      class="blog-item flex flex-col gap-4"
    >
      <div class="flex flex-col gap-2">
        <div class="date text-sm text-gray-400">
          {{ blog.created_at }}
        </div>
        <div class="title">
          <span
            class="text-xl hover:text-amber-700 transition-colors duration-300 cursor-pointer"
          >
            <nuxt-link :to="blog.link">
              {{ blog.title }}
            </nuxt-link>
          </span>
        </div>
        <div class="summary text-gray-500 text-base">
          {{ blog.summary }}
        </div>
      </div>
      <div class="button">
        <nuxt-link :to="blog.link">
          <button
            class="px-5 py-2.5 text-gray-900 bg-white border border-gray-300 hover:border-gray-400 rounded-lg text-sm flex items-center place-content-center transition-colors duration-300"
          >
            Read more
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
