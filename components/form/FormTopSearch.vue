<script lang="ts" setup>
const isOpen = ref(false)

const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' }
]

const selected = ref([])

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value
    }
  },
})

function onSelect(option: any) {
  console.log(option)
  isOpen.value = false
}

</script>

<template>
  <div class="relative flex flex-1 dark:bg-background">
    <form
      class="relative flex flex-1 items-center max-w-md dark:bg-background" action="#" method="GET"
    >
      <label for="search-field" class="sr-only">Search</label>
      <IconHeroiconsMagnifyingGlass />
      <input
        id="search-field"
        class="h-full w-full py-0 pl-8 pr-0 text-gray-900 bg-background dark:bg-background placeholder:text-gray-400 focus:ring-0 sm:text-sm focus:outline-none focus:ring-offset-0" placeholder="Search..." type="search" name="search"
      />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 space-x-1.5">
        <UKbd>⌘</UKbd>
        <UKbd>K</UKbd>
      </div>
    </form>
    <!-- Modal -->
    <UModal v-model="isOpen" >
      <div class="p-4">
        <UCommandPalette
          v-model="selected"
          nullable
          :groups="[{ key: 'people', commands: people }]"
          @update:model-value="onSelect"
        />
      </div>
    </UModal>
  </div>
</template>

<style scoped></style>
