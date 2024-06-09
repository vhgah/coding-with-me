import Vue from "vue";

Vue.mixin({
  methods: {
    observeContent() {
      if (typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                observer.unobserve(entry.target); // Stop observing once element is visible
              }
            });
          },
          {
            threshold: 0,
          }
        );

        const contentItems = document.querySelectorAll(".content-item");

        contentItems.forEach((contentItem) => {
          observer.observe(contentItem);
        });
      } else {
        // Fallback for browsers not supporting IntersectionObserver
        // You may add a polyfill here
        console.log("IntersectionObserver not supported");
      }
    },
  },
});
