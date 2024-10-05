<script setup lang="ts">
const props = defineProps<{
  amount: number;
}>();
</script>

<template>
  <span>
    {{
      new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount)
    }}
  </span>
</template>

<style scoped></style>
