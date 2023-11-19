<script lang="ts" setup>
interface TableColumn {
  key: any
  label: string
  sortable?: boolean | undefined
  direction?: 'asc' | 'desc' | undefined
  class?: string | undefined
}

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'title',
  label: 'Title',
  sortable: true
}, {
  key: 'email',
  label: 'Email',
  direction: 'desc'
}, {
  key: 'role',
  label: 'Role'
}] as TableColumn[]

const selectedColumns = ref([...columns])

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
</script>

<template>
  <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
    <Card class="col-span-6 xl:col-span-10 rounded-md">
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle class="text-2xl">Welcome back!</CardTitle>
          <CardDescription class="text-base">Here's a list of your tasks for this month!</CardDescription>
        </div>
        <UAvatar
          src="https://avatars.githubusercontent.com/u/1900503?v=4"
          alt="Avatar"
        />
      </CardHeader>
      <CardContent>
        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
          <USelectMenu
            v-model="selectedColumns"
            :options="columns"
            multiple
            placeholder="Columns"
          />
        </div>

        <UTable
          :columns="selectedColumns"
          :rows="people"
        />
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>
