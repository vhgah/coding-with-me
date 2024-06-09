<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <h1 class="text-3xl font-semibold leading-normal">
    {{ title }}
  </h1>
</template>
