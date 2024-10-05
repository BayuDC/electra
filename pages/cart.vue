<script setup lang="ts">
const { data: product } = await useMyFetch<any>('/products/1');

const items = [
  {
    product: product.value.name,
    quantity: 2,
    price: product.value.price,
    picture: product.value.picture,
    unit: product.value.unit,
  },
  {
    product: product.value.name,
    quantity: 2,
    price: product.value.price,
    picture: product.value.picture,
    unit: product.value.unit,
  },
  {
    product: product.value.name,
    quantity: 2,
    price: product.value.price,
    picture: product.value.picture,
    unit: product.value.unit,
  },
];
</script>

<template>
  <Main>
    <Section title="My Cart">
      <UCard
        :ui="{
          body: {
            padding: 'px-4 py-0 sm:p-0 sm:px-6 sm:py-2',
          },
        }"
      >
        <div class="flex flex-col divide-y divide-gray-800">
          <div
            v-for="i in items"
            class="grid grid-cols-[1fr,auto] md:grid-cols-[1fr,auto,auto] items-center gap-4 md:gap-10 lg:gap-16"
          >
            <div class="flex py-4">
              <div class="h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-md">
                <img class="object-cover" :src="i.picture" alt="" />
              </div>
              <div class="ml-4 flex flex-col">
                <div class="text-base md:text-xl text-white font-bold">{{ i.product }}</div>
                <div class="mt-2 text-sm md:text-base text-gray-400">Rp{{ i.price }}/{{ i.unit }}</div>
                <div class="mt-auto">
                  <UButton class="md:flex hidden" variant="soft" size="sm" color="rose" icon="i-heroicons-trash"
                    >Remove</UButton
                  >
                  <div class="text-white text-lg font-bold md:hidden">Rp{{ i.price * i.quantity }}</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col-reverse md:flex-row items-center">
              <UButton size="sm" color="gray" variant="link" icon="i-heroicons-minus-16-solid" />
              <div
                class="px-2 py-2 text-white font-bold text-sm md:text-base bg-gray-800 rounded-md ring-1 ring-gray-700"
              >
                20
              </div>
              <UButton size="sm" color="gray" variant="link" icon="i-heroicons-plus-16-solid" />
            </div>
            <div class="md:block hidden">
              <div class="text-white text-lg font-bold">Rp{{ i.price * i.quantity }}</div>
            </div>
          </div>
        </div>

        <!-- <UTable v-if="false" :rows="rows" :columns="columns">
          <template #product-data="{ row }">
            <div class="flex">
              <div class="h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-md">
                <img class="object-cover" :src="row.picture" alt="" />
              </div>
              <div class="ml-4 flex flex-col">
                <div class="text-base md:text-xl text-white font-bold">{{ row.product }}</div>
                <div class="mt-2 text-base hidden md:block">Rp{{ row.price }}/{{ row.unit }}</div>
                <div class="mt-auto">
                  <UButton variant="soft" color="rose" icon="i-heroicons-trash">Remove</UButton>
                </div>
              </div>
            </div>
          </template>
          <template #price-data="{ row }">
            <div class="text-white text-lg font-bold">Rp{{ row.price * row.quantity }}</div>
          </template>
          <template #quantity-data="{ row }">
            <div class="flex items-center">
              <UButton size="xl" color="gray" variant="link" icon="i-heroicons-minus-16-solid" />
              <div class="px-2 py-2 text-white font-bold text-md bg-gray-800 rounded-md ring-1 ring-gray-700">20</div>
              <UButton size="xl" color="gray" variant="link" icon="i-heroicons-plus-16-solid" />
            </div>
          </template>
        </UTable> -->
      </UCard>
    </Section>
  </Main>
</template>

<style scoped></style>
