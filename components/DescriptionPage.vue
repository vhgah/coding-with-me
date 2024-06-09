<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
<template>
  <p class="text-base text-gray-400">
    {{ description }}
  </p>
</template>
