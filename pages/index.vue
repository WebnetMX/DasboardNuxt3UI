<script lang="ts" setup>
</script>

<template>
  <AppHeader />
  <UContainer>
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <Aside />
      <!-- Main Section -->
      <main class="lg:col-span-9">
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
</template>

<style scoped></style>
