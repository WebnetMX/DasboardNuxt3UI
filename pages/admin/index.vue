<script lang="ts" setup>
  const cards = [
    {
      label: 'Total Revenue',
      price: '$45,231.89',
      description: '+20.1% from last month',
      icon: 'i-heroicons-currency-dollar'
    }, {
      label: 'Subscriptions',
      price: '+2350',
      description: '+180.1% from last month',
      icon: 'i-heroicons-users'
    }, {
      label: 'Sales',
      price: '+12,234',
      description: '+19% from last month',
      icon: 'i-heroicons-credit-card'
    }, {
      label: 'Active Now',
      price: '+573',
      description: '+201 since last hour',
      icon: 'i-heroicons-chart-bar'
    }
  ]
</script>

<template>
  <div>
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
      <!-- Main Section -->
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        class="rounded-xl border bg-card text-card-foreground shadow"
        v-for="card in cards"
      >
        <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium"> {{ card.label }}</h3>
          <UIcon :name="card.icon" class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="p-6 pt-0">
          <div class="text-2xl font-bold"> $45,231.89 </div><p class="text-xs text-muted-foreground"> +20.1% from last month </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
