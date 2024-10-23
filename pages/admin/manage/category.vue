<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  slug: string;
}

const { data: categories } = await useMyFetch<Category[]>('/categories');

const cols = [
  { key: 'id', label: 'Id' },
  { key: 'name', label: 'Name' },
];
</script>

<template>
  <div>
    <UTable :rows="categories" :columns="cols" />
  </div>
</template>

<style scoped></style>
