<template>
  <aside
    class="sidebar z-10 fixed xl:w-[15.5rem] lg:w-20 md:w-20 w-full grow-0 shrink-0 basis-auto h-auto md:h-full bg-bg"
  >
    <div class="flex flex-col gap-2 l-0 t-0 py-5 px-6">
      <Logo />
      <Navbar />
      <SocialMedia />
    </div>
  </aside>
</template>
<script>
export default {
  name: "Sidebar",
  computed: {
    menu() {
      return this.$store.state.settings.menu;
    },
  },
};
</script>
