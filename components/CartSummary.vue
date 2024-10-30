<script setup lang="ts">
const props = defineProps<{
  totalPrice: number;
  isEmpty: boolean;
}>();
const user = useAuth();
const payment = ref('');
const address = ref(user.value.address);

const paymentCode = computed(() => {
  if (payment.value === 'Bayar di tempat') {
    return 'cash';
  }

  return 'debit';
});

async function checkout() {
  const { data } = await useMyFetch('/transactions/checkout', {
    method: 'POST',
    body: JSON.stringify({
      payment: paymentCode.value,
      address: address.value,
    }),
  });

  navigateTo('/transaction');
}
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
        <USelectMenu v-model="payment" :options="['Bayar di tempat', 'Bayar pake doa']" />
      </div>
      <div>
        <div class="text-xs font-bold text-gray-400 mb-2">Address</div>
        <UInput v-model="address" />
      </div>
    </div>
    <template #footer>
      <div class="py-2">
        <UButton block @click="checkout" :disabled="isEmpty || !address || !payment">Checkout</UButton>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
