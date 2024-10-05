<script setup lang="ts">
const { data: cart } = await useMyFetch<{
  products: {
    id: number;
    name: string;
    slug: string;
    price: string;
    unit: string;
    picture: string;
    pivot: {
      quantity: number;
    };
    totalPrice: number;
  }[];
}>('/cart', {
  default: () => ({
    products: [] as any[],
  }),

  transform: data => ({
    products: data.products.map((p: any) => ({
      ...p,
      totalPrice: parseInt(p.price) * p.pivot.quantity,
    })),
  }),
});

const totalPrice = computed(() => cart.value.products.reduce((acc, p) => acc + p.totalPrice, 0));
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
            />
          </div>
        </UCard>
        <CartSummary :totalPrice="totalPrice" />
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
