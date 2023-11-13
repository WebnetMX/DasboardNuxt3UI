<script lang="ts" setup>
  const items = [{
    label: 'Getting Started',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    children: [{
      label: 'Setup',
      to: '/links/1'
    }, {
      label: 'Usage',
      to: '/links/2'
    }, {
      label: 'Content',
      to: '/links/3'
    }]
  }, {
    label: 'Installation',
    icon: 'i-heroicons-arrow-down-tray',
    disabled: true,
  }, {
    label: 'Theming',
    icon: 'i-heroicons-eye-dropper',
  }]
</script>

<template>
  <div
    class="hidden lg:col-span-2 lg:block"
  >
    <UAccordion :items="items">
      <template #default="{ item, index, open }">
        <UButton
          color="gray"
          variant="ghost"
          :icon="item.icon"
          :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
        >
          <!--Header-->
          <span class="truncate text-gray-500">{{ index + 1 }}. {{ item.label }}</span>
          <!--End of Header-->
          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>
      <template #item="{ item }">
        <!--Description-->
        <nav
          class="space-y-3 border-l border-gray-200 dark:border-gray-800 ml-1.5">
          <div class="space-y-1.5">
            <NuxtLink
              v-for="(child, index) in item.children"
              :key="index"
              :to="child.to"
              class="flex items-center gap-1.5 group border-l -ml-px pl-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </nav>
        <!--End of Description-->
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>
