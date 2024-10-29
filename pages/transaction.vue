<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const transactions = ref([]);
</script>

<template>
  <Main>
    <Section title="My Transactions">
      <div class="grid gap-4 grid-cols-[1fr]">
        <UCard
          v-for="_ in 5"
          :ui="{
            body: {
              padding: 'px-4 py-4 sm:p-0 sm:p-6 ',
            },
          }"
        >
          <div class="flex flex-col md:grid gap-4 md:grid-cols-[1fr,auto] grid-cols-[auto,1fr]">
            <div class="justify-self-end">
              <UBadge color="green" variant="soft" size="lg" class="text-center">Being Packed</UBadge>
            </div>

            <div class="flex gap-2 flex-col" style="grid-column: 1 / 2; grid-row: 1 / 3">
              <div>
                <div class="text-xs font-bold text-gray-400">Order Time</div>
                <div class="text-2xl font-bold text-white">
                  {{ new Date().toLocaleString() }}
                </div>
              </div>
              <div>
                <div class="text-xs font-bold text-gray-400">Total price</div>
                <div class="text-2xl font-bold text-white">
                  <Money :amount="50000" />
                </div>
              </div>
              <div>
                <div class="text-xs font-bold text-gray-400">Products</div>
                <ul class="text-white list-disc list-inside">
                  <li>Resistor 100 Ohm x100</li>
                  <li>Kapaistor 20 uF x20</li>
                </ul>
              </div>
            </div>
            <div class="md:self-end" style="grid-column: 2 / 3; grid-row: 2 / 3">
              <div class="flex gap-2 flex-col">
                <UButton color="red" variant="solid" class="text-center block">Cancel Order</UButton>
                <UButton color="blue" variant="solid" class="text-center block">Order Received</UButton>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
