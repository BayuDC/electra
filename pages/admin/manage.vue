<script setup lang="ts">
const links = [
  {
    label: 'Product',
    icon: 'i-heroicons-shopping-bag',
    to: '/admin/manage/product',
  },
  {
    label: 'Category',
    icon: 'i-heroicons-tag',
    to: '/admin/manage/category',
  },
  {
    label: 'User',
    icon: 'i-heroicons-users',
    to: '/admin/manage/user',
  },
];
</script>

<template>
  <Main>
    <Section>
      <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800 mb-4" />
      <NuxtPage />
    </Section>
  </Main>
</template>

<style scoped></style>
