<script lang="ts" setup>
const value = ref('')
const uiInput = {
  "base": "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 border-0",
  "variant": {
    "outline": "shadow-sm bg-transparent text-gray-900 dark:text-white dark:ring-{color}-400 yui-focus dark:focus:ring-{color}-400",
    "none": "bg-transparent"
  },
}
</script>

<template>
  <div>
    Page: <code class="text-red-500 text-xs font-mono">{{ useRoute().params.id }}</code>

    <UInput
      v-model="value"
      :ui="uiInput"
      variant="outline"
    />
  </div>
</template>

<style scoped></style>
