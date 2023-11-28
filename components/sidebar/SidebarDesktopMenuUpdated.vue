<script lang="ts" setup>
const links = [
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
  }, {
    label: 'Reports',
    to: '/links/33',
    icon: 'i-heroicons-chart-pie'
  }
]

const settingsLinks = [
  {
    label: 'Settings',
    to: '/links/settings',
    icon: 'i-heroicons-cog'
  }
]

const defaultConfig = {
  wrapper: "relative space-y-1 my-2",
  base: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-none disabled:cursor-not-allowed disabled:opacity-75",
  padding: "px-3 py-2",
  active: "text-gray-900 dark:text-white before:bg-background dark:before:bg-gray-800",
  rounded: "rounded-none",
  icon: {
    base: "shrink-0 w-6 h-6 group-hover:text-primary",
  },
}

const uiVerticalNavitagion = {
  ...defaultConfig,
  icon: {
    ...defaultConfig.icon,
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
}

const uiSettingsNavigation = {
  ...defaultConfig,
  icon: {
    ...defaultConfig.icon,
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
}
</script>

<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">

    <div class="flex h-16 shrink-0 items-center justify-center border-r border-gray-200 dark:border-muted dark:bg-background sticky top-0 z-50 bg-white">
      <ULink
        to="/admin"
        active-class="text-primary font-medium"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        <Logo class="text-primary" />
      </ULink>
    </div>

    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-muted bg-white dark:bg-background pb-4"
    >
      <nav class="flex flex-1 flex-col">
        <ul
          role="list"
          class="flex flex-1 flex-col gap-y-7"
        >
          <li>
            <UVerticalNavigation
              :links="links"
              :ui="uiVerticalNavitagion"
            >
              <template #default="{ link, isActive }">
                <div v-if="isActive" class="absolute inset-y-0 left-0 w-0.5 bg-primary"></div>
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </li>
          <li class="mt-auto">
            <UVerticalNavigation
              :links="settingsLinks"
              :ui="uiSettingsNavigation"
            >
              <template #default="{ link, isActive }">
                <div v-if="isActive" class="absolute inset-y-0 left-0 w-0.5 bg-primary"></div>
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
