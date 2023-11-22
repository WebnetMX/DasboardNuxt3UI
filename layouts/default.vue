<script lang="ts" setup>
  useHead({
    htmlAttrs: {
      lang: 'en',
      class: 'h-full bg-white dark:bg-background',
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
      <UContainer>
        <AppHeader />
      </UContainer>


      <main class="py-10">
        <UContainer>
          <slot />
        </UContainer>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
