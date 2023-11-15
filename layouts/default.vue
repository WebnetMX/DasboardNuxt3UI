<script lang="ts" setup>
  useHead({
    htmlAttrs: {
      lang: 'en',
      class: 'h-full bg-white dark:bg-gray-800',
    },
    bodyAttrs: {
      class: 'h-full antialiased',
    },
  })
</script>

<template>
  <div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <SidebarMobile />

    <!-- Static sidebar for desktop -->
    <SidebarDesktop />

    <div class="lg:pl-72">
      <AppHeader />

      <main class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
