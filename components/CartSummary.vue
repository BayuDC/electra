<script setup lang="ts">
const props = defineProps<{
  totalPrice: number;
}>();
</script>

<template>
  <UCard>
    <div class="flex gap-4 flex-col">
      <div>
        <div class="text-xs font-bold text-gray-400">Total price</div>
        <div class="text-2xl font-bold text-white">
          <Money :amount="totalPrice" />
        </div>
      </div>
      <div>
        <div class="text-xs font-bold text-gray-400 mb-2">Payment</div>
        <USelectMenu :options="['Bayar di tempat', 'Bayar pake doa']" />
      </div>
    </div>
    <template #footer>
      <div class="py-2">
        <UButton block>Checkout</UButton>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
