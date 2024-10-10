<script setup lang="ts">
const props = defineProps<{
  message: string;
  color: 'rose' | 'green' | 'blue' | 'yellow';
  icon: string;
}>();
const emit = defineEmits<{
  (e: 'dispose'): void;
}>();

onMounted(() => {
  setTimeout(() => {
    emit('dispose');
  }, 3000);
});
</script>

<template>
  <div class="absolute w-full max-w-md bottom-0 left-[50%] px-5 md:px-10 translate-x-[-50%] translate-y-[-40%]">
    <UAlert :icon="icon" :color="color" variant="solid" :title="message" />
  </div>
</template>

<style>
.toast-enter-active,
.toast-leave-active {
  @apply transition duration-300;
}
.toast-enter-from,
.toast-leave-to {
  @apply translate-x-[-50%] translate-y-[100%];
}
</style>
