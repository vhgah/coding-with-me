<script>
export default {
  layout: "Index page",
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="content">
    <div class="post flex flex-col gap-5">
      <div class="post-header">
        <p class="text-3xl font-semibold leading-normal"></p>
        <p class="text-2xl font-semibold leading-normal text-gray-500">
          Young Software Engineer from Vietnam.
        </p>
      </div>
      <div class="post-location flex items-center gap-1">
        <div>
          <svg
            class="fill-current text-amber-700"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2394 4.27881C11.8969 1.90706 8.10306 1.90706 5.76065 4.27881C3.41312 6.65573 3.41312 10.5133 5.76065 12.8902L10 17.1827L14.2394 12.8902C16.5869 10.5133 16.5869 6.65573 14.2394 4.27881ZM10 18.25L9.46634 18.777L4.69341 13.9443C1.76886 10.9831 1.76886 6.18593 4.69341 3.22477C7.62308 0.258411 12.3769 0.258411 15.3066 3.22477C18.2311 6.18593 18.2311 10.9831 15.3066 13.9443L10.5342 18.7764L10 18.25ZM10 18.25L10.5342 18.7764C10.3933 18.9191 10.2005 19 10 19C9.79947 19 9.60725 18.9197 9.46634 18.777L10 18.25ZM10 6.5C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5C10.8284 9.5 11.5 8.82843 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5ZM7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8Z"
            ></path>
          </svg>
        </div>
        <p class="text-amber-700">Hà Nội, Việt Nam</p>
      </div>
      <div class="post-content">
        <p class="text-gray-600">
          I'm a software engineer and web developer from Vietnam. I have a deep
          passion for coding, but I sometimes struggle with laziness. That's why
          I created this website to store the valuable knowledge and insights
          I've gained.
        </p>
      </div>
      <div>
        <nuxt-link to="/about">
          <button
            class="text-white py-2.5 px-5 rounded-xl bg-gray-900 hover:bg-gray-800 text-sm flex items-center place-content-center"
          >
            More about me
          </button>
        </nuxt-link>
      </div>
    </div>
    <div
      class="work w-full flex flex-col gap-5 content-item opacity-0 translate-y-10 transition-all duration-1000"
    >
      <p class="text-2xl font-medium">Selected Work</p>
      <WorkCard />
    </div>
    <div
      class="blog w-full flex flex-col gap-5 content-item opacity-0 translate-y-10 transition-all duration-1000"
    >
      <p class="text-2xl font-medium">Blog</p>
      <BlogCard />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
