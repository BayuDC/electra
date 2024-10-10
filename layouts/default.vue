<script setup lang="ts"></script>

<template>
  <div class="min-h-screen overflow-hidden relative flex flex-col">
    <Header />
    <slot />

    <div id="modal"></div>
  </div>
</template>

<style scoped></style>
