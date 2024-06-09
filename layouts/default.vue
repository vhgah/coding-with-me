<script lang="ts" setup></script>
<template>
  <div class="min-h-screen w-auto flex">
    <Sidebar />
    <main
      class="main-content relative p-2 mt-20 overflow-hidden h-auto flex grow pl-0 md:pl-20 xl:pl-[15.5rem] md:mt-2"
    >
      <slot name="content">
        <Nuxt />
      </slot>
    </main>
  </div>
</template>
<style scoped></style>
