<script lang="ts" setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/1900503?v=4'
    }
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]
</script>

<template>
  <div class="sticky top-0 z-40">
    <div class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <UIcon name="i-heroicons-magnifying-glass" class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" />
          <!--svg class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
          </svg-->
          <input
            id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm focus:outline-none focus:ring-offset-0" placeholder="Search..." type="search" name="search"
          >
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View notifications</span>
            <UIcon name="i-heroicons-bell" class="h-6 w-6 mt-1" />
          </button>

          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"></div>

          <!-- Profile dropdown -->
          <div class="relative">
            <UDropdown
              :items="items"
              mode="hover"
              :popper="{ placement: 'bottom-start' }"
            >
              <div class="flex items-center py-0.5">
                <UAvatar
                  src="https://avatars.githubusercontent.com/u/1900503?v=4"
                  alt="Avatar"
                />
                <UButton
                  color="white"
                  variant="ghost"
                  label="Tim Cook"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </div>
            </UDropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
