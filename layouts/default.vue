<script setup lang="ts"></script>

<template>
  <div class="min-h-screen overflow-hidden relative flex flex-col">
    <Header />
    <div>
      <slot />
    </div>

    <div id="modal" class="fixed bottom-0 w-full"></div>
  </div>
</template>

<style scoped></style>
