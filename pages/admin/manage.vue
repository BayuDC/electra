<script setup lang="ts">
const links = [
  {
    label: 'Product',
    icon: 'i-heroicons-shopping-cart',
    to: '/admin/manage',
  },
  {
    label: 'Category',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/admin/manage/category',
  },
  {
    label: 'User',
    icon: 'i-heroicons-chat-bubble-left-right',
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
