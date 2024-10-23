<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  unit: string;
  picture: string;
}

const { data: products } = await useMyFetch<Product[]>('/products');

const cols = [
  { key: 'id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price' },
  { key: 'unit', label: 'Unit' },
  { key: 'category.name', label: 'Category' },
];
</script>

<template>
  <div>
    <UTable :rows="products" :columns="cols" />
  </div>
</template>

<style scoped></style>
