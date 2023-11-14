<script lang="ts" setup>
  import type { Link } from '@webnet-mx/ui-layer-admin/types'
  const links = [
    {
      label: 'Home',
      to: '/',
      icon: 'i-heroicons-document-magnifying-glass'
    }, {
      label: 'About',
      to: '/about',
      children: [
        {
          label: 'About Us',
          to: '/links/us'
        }, {
          label: 'About You',
          to: '/links/you'
        }
      ]
    }
  ] as Link[]
</script>

<template>
  <UContainer>
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
      <!-- Main Section -->
      <NavigationTree :links="links"/>
    </div>
  </UContainer>
</template>

<style scoped></style>
