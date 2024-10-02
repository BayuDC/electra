<script setup lang="ts">
const { data } = await useMyFetch('/auth/me');

console.log(data.value);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <slot />
  </div>
</template>

<style scoped></style>
