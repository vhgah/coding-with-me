<script>
export default {
  layout: "Index page",
  mounted() {
    // this.observeContent(); // Call the method when component is mounted
  },
};
</script>
<template>
  <div class="content">
    <div class="post flex w-full md:gap-8 gap-4">
      <div class="md:basis-9/12">
        <div class="flex flex-col gap-5">
          <div>
            <p class="text-4xl font-semibold leading-normal">Vũ Hoàng Anh</p>
            <p class="text-3xl font-semibold leading-normal text-gray-500">
              Software Engineer
            </p>
          </div>
          <div
            class="text-base text-gray-600 flex flex-col gap-5 leading-7 tracking-wide"
          >
            <p>
              I'm a software engineer and web developer from Vietnam. I have a
              deep passion for coding, but I sometimes struggle with laziness.
              That's why I created this website to store the valuable knowledge
              and insights I've gained. Writing an introduction about myself is
              quite challenging, so I'll stop here for now. I'll continue
              whenever I come up with more ideas
            </p>
            <p>
              The goals that I always aim to accomplish are: completing my
              Upwork profile, finishing my LinkedIn profile. However, I always
              feel like I'm not good enough to complete it. I've had these plans
              for about a year now. I've fundamentally changed, made lists of
              tasks to do each day, and review them every week.
            </p>
          </div>
        </div>
      </div>
      <div class="basis-3/12 hidden md:block">
        <img
          class="h-52 rounded-lg"
          src="../public/thumb/cool-guy.webp"
          alt=""
        />
      </div>
    </div>
    <div
      class="awards flex flex-col w-full content-item opacity-0 translate-y-10 transition-all duration-1000 gap-5"
    >
      <h2 class="text-2xl font-medium">Awards</h2>
      <div class="flex flex-col md:flex-row gap-1">
        <div class="bg-gray-100 p-6 rounded-t-lg md:rounded-l-lg md:basis-1/2">
          <p class="text-base">Third prize in 2014</p>
          <p class="text-base text-gray-500">
            Provincial Youth Computer Competition
          </p>
        </div>
        <div class="bg-gray-100 p-6 rounded-b-lg md:rounded-r-lg md:basis-1/2">
          <p class="text-base">Second prize in 2015</p>
          <p class="text-base text-gray-500">
            Provincial Youth Computer Competition
          </p>
        </div>
      </div>
    </div>
    <div
      class="awards flex flex-col gap-5 w-full content-item opacity-0 translate-y-10 transition-all duration-1000"
    >
      <h2 class="text-2xl font-medium">Experience</h2>
      <div class="flex flex-col md:gap-10 gap-4">
        <div class="md:flex gap-8 w-full">
          <div class="basis-3/12">
            <p class="text-sm text-gray-500">2023 – Present</p>
          </div>
          <div class="basis-9/12 flex flex-col gap-1">
            <p class="text-gray-700">Senprints eCommerce Platform (POD)</p>
            <p class="text-sm text-gray-500">Fullstack developer</p>
          </div>
        </div>
        <div class="border-t text-gray-300"></div>
        <div class="md:flex gap-8 w-full">
          <div class="basis-3/12">
            <p class="text-sm text-gray-500">2022 – 2023</p>
          </div>
          <div class="basis-9/12 flex flex-col gap-1">
            <p class="text-gray-700">KiotViet POS Solutions</p>
            <p class="text-sm text-gray-500">Middle developer</p>
          </div>
        </div>
        <div class="border-t text-gray-300"></div>
        <div class="md:flex gap-8 w-full">
          <div class="basis-3/12">
            <p class="text-sm text-gray-500">2021 – 2022</p>
          </div>
          <div class="basis-9/12 flex flex-col gap-1">
            <p class="text-gray-700">BCTech Software outsourcing company</p>
            <p class="text-sm text-gray-500">Junior developer</p>
          </div>
        </div>
        <div class="border-t text-gray-300"></div>
        <div class="md:flex gap-8 w-full">
          <div class="basis-3/12">
            <p class="text-sm text-gray-500">2020 – 2021</p>
          </div>
          <div class="basis-9/12 flex flex-col gap-1">
            <p class="text-gray-700">KONPANI Software outsourcing company</p>
            <p class="text-sm text-gray-500">Website development</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="awards flex flex-col gap-5 w-full content-item opacity-0 translate-y-10 transition-all duration-1000"
    >
      <h2 class="text-2xl font-medium">Education</h2>
      <div class="flex flex-col gap-10">
        <div class="md:flex gap-8 w-full">
          <div class="basis-3/12">
            <p class="text-sm text-gray-500">2016 – 2021</p>
          </div>
          <div class="basis-9/12 flex flex-col gap-1">
            <p class="text-gray-700">
              Bachelor's Degree in Software Engineering
            </p>
            <p class="text-sm text-gray-500">Phuong Dong University (PDU)</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped></style>
