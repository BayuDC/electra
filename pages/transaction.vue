<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const { data: transactions, refresh } = await useMyFetch('/transactions');

async function cancel(id: number) {
  const { data } = await useMyFetch(`/transactions/${id}/cancel`, {
    method: 'PATCH',
  });

  refresh();
}
async function finish(id: number) {
  const { data } = await useMyFetch(`/transactions/${id}/finish`, {
    method: 'PATCH',
  });
  refresh();
}
</script>

<template>
  <Main>
    <Section title="My Transactions">
      <div class="grid gap-4 grid-cols-[1fr]">
        <UCard
          v-for="t in transactions"
          :key="t.id"
          :ui="{
            body: {
              padding: 'px-4 py-4 sm:p-0 sm:p-6 ',
            },
          }"
        >
          <div class="flex flex-col md:grid gap-4 md:grid-cols-[1fr,auto] grid-cols-[auto,1fr]">
            <div class="justify-self-end">
              <UBadge color="green" variant="soft" size="lg" class="text-center">
                <span v-if="t.status === 'created'">Being Packed</span>
                <span v-else-if="t.status === 'confirmed'">On The Way</span>
                <span v-else-if="t.status === 'finished'">Finished</span>
                <span v-else-if="t.status === 'canceled'">Canceled</span>
              </UBadge>
            </div>

            <div class="flex gap-2 flex-col" style="grid-column: 1 / 2; grid-row: 1 / 3">
              <div>
                <div class="text-xs font-bold text-gray-400">Order Time</div>
                <div class="text-2xl font-bold text-white">
                  {{ new Date(t.created_at).toLocaleString() }}
                </div>
              </div>
              <div>
                <div class="text-xs font-bold text-gray-400">Total price</div>
                <div class="text-2xl font-bold text-white">
                  <Money :amount="t.final_price" />
                </div>
              </div>
              <div>
                <div class="text-xs font-bold text-gray-400">Products</div>
                <ul class="text-white list-disc list-inside">
                  <li v-for="product in t.products" :key="product.id">
                    {{ product.name }} x{{ product.pivot.quantity }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:self-end" style="grid-column: 2 / 3; grid-row: 2 / 3">
              <div class="flex gap-2 flex-col">
                <UButton
                  v-if="t.status == 'created' || t.status == 'confirmed'"
                  color="red"
                  variant="solid"
                  class="text-center block"
                  @click="cancel(t.id)"
                  >Cancel Order</UButton
                >
                <UButton
                  v-if="t.status == 'confirmed'"
                  color="blue"
                  variant="solid"
                  class="text-center block"
                  @click="finish(t.id)"
                  >Order Received</UButton
                >
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
