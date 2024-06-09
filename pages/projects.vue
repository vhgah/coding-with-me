<script lang="ts">
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Homework solver",
          description: "An AI Can help with homework, accuracy rate up to 90%",
          launched: "",
          colorClass: "bg-green-300",
          external: false,
        },
        {
          title: "The tracking app",
          description: "You can track your package and make free API calls",
          launched: "",
          colorClass: "bg-gray-900",
          external: false,
        },
        {
          title: "The crawler app",
          description: "Can crawl products from AliExpress",
          launched: "",
          colorClass: "bg-blue-300",
          external: false,
        },
        {
          title: "The Photo Gally",
          description: "A photo gallery app using (Reactjs with Firebase)",
          launched: "Mar 28, 2022",
          colorClass: "bg-yellow-300",
          external: true,
          link: "https://github.com/vhgah/loveiu",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="content">
    <div class="flex flex-col gap-2 w-full">
      <TitlePage title="Projects" />
      <DescriptionPage
        description="Side projects and businesses I've launched over the years"
      />
    </div>
    <div class="w-full flex flex-col gap-1">
      <a
        v-for="(project, index) in projects"
        :key="index"
        :target="project.external ? '_blank' : '_self'"
        :href="project.link"
      >
        <div
          class="flex gap-8 py-5 px-8 bg-gray-100 rounded-xl items-center place-content-center hover:scale-102 hover:bg-gray-100/60 transition-all duration-500 cursor-pointer"
        >
          <div class="basis-10 flex place-content-center hidden lg:block">
            <div class="w-7 h-7 rounded-full" :class="project.colorClass"></div>
          </div>
          <div class="flex flex-grow flex-col gap-1">
            <h2 class="text-2xl font-medium relative">
              {{ project.title }}
              <span
                v-if="!project.launched"
                class="absolute ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >
                Soon!
              </span>
            </h2>
            <p class="text-lg text-gray-600">
              {{ project.description }}
            </p>
            <p class="text-lg text-gray-600">
              Launched: {{ project.launched }}
            </p>
          </div>
          <div class="basis-10 flex place-content-center">
            <div v-if="project.link" class="w-5 h-5">
              <svg
                class="w-full h-full"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 1.75C14 1.33579 14.3358 1 14.75 1H18.25C18.6642 1 19 1.33579 19 1.75V5.25C19 5.66421 18.6642 6 18.25 6C17.8358 6 17.5 5.66421 17.5 5.25V3.56066L11.5303 9.53033C11.2374 9.82322 10.7626 9.82322 10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967L16.4393 2.5H14.75C14.3358 2.5 14 2.16421 14 1.75ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    <Footer />
  </div>
</template>
