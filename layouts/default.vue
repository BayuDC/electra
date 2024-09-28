<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-40" />
    <slot />
    <Footer class="mt-auto" />
  </div>
</template>

<style scoped></style>
