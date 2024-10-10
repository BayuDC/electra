<script setup lang="ts"></script>

<template>
  <div class="min-h-screen overflow-hidden relative flex flex-col">
    <Header />
    <div>
      <slot />
    </div>

    <div id="modal"></div>
  </div>
</template>

<style scoped></style>
