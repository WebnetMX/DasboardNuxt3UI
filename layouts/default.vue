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
    <!--AppHeader /-->
    <!--Aside /-->
    <slot />
  </div>
</template>

<style scoped></style>
