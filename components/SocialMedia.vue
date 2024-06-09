<script>
export default {
  name: "SocialMedia",
  data() {
    return {
      socials: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/vhgah",
          svgClass: "h-5 w-5",
          svgPath:
            "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.66v-7.37h-2.4V10.8h2.4V8.36c0-2.37 1.45-3.66 3.74-3.66h1.77v2.96h-1.23c-.41 0-.97.2-1.13.88-.12.45-.12.92-.12 1.38v1.78h2.41l-.31 2.47h-2.1V22H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/vhgah",
          svgClass: "h-4 w-4",
          svgPath:
            "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        },
        {
          name: "Github",
          link: "https://github.com/vhgah",
          svgClass: "h-4 w-4",
          svgPath:
            "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z",
        },
      ],
    };
  },
  computed: {
    menuClass() {
      return this.$store.state.settings.menu === "hidden"
        ? "custom-hidden"
        : "custom-visible";
    },
  },
};
</script>

<template>
  <div
    class="social-media flex justify-center flex-row md:flex-col xl:flex-row gap-2"
    :class="menuClass"
  >
    <div
      v-for="(social, index) in socials"
      :key="index"
      class="h-8 w-8 flex items-center justify-center group hover:bg-gray-400/20 rounded-full transition-colors"
    >
      <a target="_blank" :href="social.link">
        <svg
          :class="social.svgClass"
          class="fill-current text-gray-500 group-hover:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>
            {{ social.name }}
          </title>
          <path :d="social.svgPath"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
