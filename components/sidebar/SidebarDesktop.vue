<script lang="ts" setup>
const items = [
  {
    label: 'Dashboard',
    to: '/',
    icon: 'i-heroicons-home'
  }, {
    label: 'Team',
    to: '/admin',
    icon: 'i-heroicons-users'
  }, {
    label: 'Projects',
    to: '/links/1',
    icon: 'i-heroicons-folder',
    children: [
      {
        label: 'Calendar',
        to: '/links/11',
        icon: 'i-heroicons-calendar'
      }, {
        label: 'Documents',
        to: '/links/22',
        icon: 'i-heroicons-document-text'
      }
    ]
  }, {
    label: 'Reports',
    to: '/links/33',
    icon: 'i-heroicons-chart-pie'
  }
]
</script>

<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-muted bg-white dark:bg-background px-6 pb-4">
      <div class="flex h-16 shrink-0 items-center justify-center">
        <ULink
          to="/admin"
          active-class="text-primary font-medium"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <Logo class="text-primary" />
        </ULink>
      </div>

      <NavigationTree
        :links="items"
        :default-open="false"
      />
    </div>
  </div>
</template>

<style scoped></style>
