<script lang="ts" setup>
</script>

<template>
  <div>
    <UContainer class="py-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <!-- Sidebar -->
        <div class="lg:col-span-2" >
          <Aside />
        </div>


        <!-- Main Section -->
        <main class="lg:col-span-9 sm:px-6">
          <UCard class="mt-10">
            <template #header>
              <div class="flex justify-between">
                <h1>Welcome to Nuxt UI Starter</h1>
                <ColorScheme>
                  <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
                </ColorScheme>
              </div>
            </template>
          </UCard>
        </main>
      </div>

    </UContainer>
  </div>
</template>

<style scoped></style>
