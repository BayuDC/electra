<script setup lang="ts">
defineProps<{
  type: 'me' | 'you';
}>();
</script>

<template>
  <div
    class="py-2 px-4 font-medium"
    :class="{
      'bg-black text-white rounded-r-xl rounded-bl-xl self-start': type == 'you',
      'bg-emerald-500 text-black rounded-l-xl rounded-br-xl self-end': type == 'me',
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
