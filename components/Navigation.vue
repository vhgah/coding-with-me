<script>
export default {
  name: "Navigation",
  props: {
    navigationTo: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <nuxt-link :to="navigationTo">
      <div class="flex items-center gap-1 cursor-pointer group">
        <div class="h-5 w-5">
          <svg
            class="h-full w-full fill-current text-gray-500 group-hover:text-gray-900 transition-colors"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7996 6.23966C12.0814 6.5432 12.0639 7.01775 11.7603 7.2996L8.85221 10L11.7603 12.7004C12.0639 12.9823 12.0814 13.4568 11.7996 13.7603C11.5177 14.0639 11.0432 14.0815 10.7397 13.7996L7.23966 10.5496C7.08684 10.4077 7 10.2086 7 10C7 9.79145 7.08684 9.59232 7.23966 9.45041L10.7397 6.20041C11.0432 5.91856 11.5177 5.93613 11.7996 6.23966Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-xs text-gray-500 group-hover:text-gray-900 transition-colors"
        >
          Back to list
        </p>
      </div>
    </nuxt-link>
    <div class="border-t border text-gray-300"></div>
  </div>
</template>
