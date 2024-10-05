<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const cart = useCartStore();
await cart.load();
</script>

<template>
  <Main>
    <Section title="My Cart">
      <div class="grid lg:grid-cols-[1fr,300px] gap-4 items-start">
        <UCard
          :ui="{
            body: {
              padding: 'px-4 py-0 sm:p-0 sm:px-6 sm:py-2',
            },
          }"
        >
          <div class="flex flex-col divide-y divide-gray-800">
            <CartItem
              v-for="p in cart.products"
              v-bind="{
                id: p.id,
                name: p.name,
                price: parseInt(p.price),
                unit: p.unit,
                picture: p.picture,
                quantity: p.pivot.quantity,
                totalPrice: p.totalPrice,
              }"
              @update-quantity="q => cart.update(p.id, q)"
            />
          </div>
        </UCard>
        <CartSummary :totalPrice="cart.totalPrice" />
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
