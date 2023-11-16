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
  <div class="flex-1 space-y-4 sm:px-0 pt-6">
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

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
      <div class="rounded-xl border bg-card text-card-foreground shadow col-span-4">

      </div>
      <div class="rounded-xl border bg-card text-card-foreground shadow col-span-3">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="font-semibold leading-none tracking-tight">Recent Sales</h3>
          <p class="text-sm text-muted-foreground"> You made 265 sales this month. </p></div>
        <div class="p-6 pt-0">
          <div class="space-y-8">
            <div class="flex items-center">
              <span class="inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden text-xs rounded-full h-9 w-9">
                <img role="img" src="~/assets/avatars/01.png" class="h-full w-full aspect-square" alt="Avatar">
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none"> Olivia Martin </p>
                <p class="text-sm text-muted-foreground"> olivia.martin@email.com </p>
              </div>
              <div class="ml-auto font-medium"> +$1,999.00 </div>
            </div>
            <div class="flex items-center">
              <span class="font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden text-xs rounded-full flex h-9 w-9 items-center justify-center space-y-0 border"><img role="img" src="~/assets/avatars/02.png" class="h-full w-full aspect-square" alt="Avatar"><!----></span><div class="ml-4 space-y-1"><p class="text-sm font-medium leading-none"> Jackson Lee </p><p class="text-sm text-muted-foreground"> jackson.lee@email.com </p></div><div class="ml-auto font-medium"> +$39.00 </div></div><div class="flex items-center"><span class="inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden text-xs rounded-full h-9 w-9"><img role="img" src="~/assets/avatars/03.png" class="h-full w-full aspect-square" alt="Avatar"><!----></span><div class="ml-4 space-y-1"><p class="text-sm font-medium leading-none"> Isabella Nguyen </p><p class="text-sm text-muted-foreground"> isabella.nguyen@email.com </p></div><div class="ml-auto font-medium"> +$299.00 </div></div><div class="flex items-center"><span class="inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden text-xs rounded-full h-9 w-9"><img role="img" src="~/assets/avatars/04.png" class="h-full w-full aspect-square" alt="Avatar"><!----></span><div class="ml-4 space-y-1"><p class="text-sm font-medium leading-none"> William Kim </p><p class="text-sm text-muted-foreground"> will@email.com </p></div><div class="ml-auto font-medium"> +$99.00 </div></div><div class="flex items-center"><span class="inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden text-xs rounded-full h-9 w-9"><img role="img" src="~/assets/avatars/05.png" class="h-full w-full aspect-square" alt="Avatar"><!----></span><div class="ml-4 space-y-1"><p class="text-sm font-medium leading-none"> Sofia Davis </p><p class="text-sm text-muted-foreground"> sofia.davis@email.com </p></div><div class="ml-auto font-medium"> +$39.00 </div></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
