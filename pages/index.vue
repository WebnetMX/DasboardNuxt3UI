<script lang="ts" setup>

  const links = [
    {
      label: 'Home',
      to: '/'
    }, {
      label: 'About',
      to: '/about',
      children: [
        {
          label: 'About Us',
          to: '/about/us'
        }, {
          label: 'About You',
          to: '/about/you'
        }
      ]
    }

  ]
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
