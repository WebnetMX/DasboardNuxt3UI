<script lang="ts" setup></script>

<template>
  <form
    class="relative flex flex-1 dark:bg-background" action="#" method="GET"
  >
    <label for="search-field" class="sr-only">Search</label>
    <IconHeroiconsMagnifyingGlass />
    <input
      id="search-field"
      class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 bg-background dark:bg-background placeholder:text-gray-400 focus:ring-0 sm:text-sm focus:outline-none focus:ring-offset-0" placeholder="Search..." type="search" name="search"
    />
  </form>
</template>

<style scoped></style>
