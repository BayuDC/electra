<script lang="ts" setup>
const element = ref<HTMLElement | null>();
defineExpose({
  element,
});
</script>

<template>
  <ul class="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2" ref="element">
    <slot />
  </ul>
</template>

<style scoped></style>