<script setup lang="ts">
const props = defineProps<{
  id: number;
  name: string;
  price: number;
  unit: string;
  picture: string;
  quantity: number;
  totalPrice: number;
}>();
</script>

<template>
  <div>
    <div class="grid grid-cols-[1fr,auto] md:grid-cols-[1fr,auto,auto] items-center gap-4 md:gap-10 lg:gap-16">
      <div class="flex py-4">
        <div class="h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-md">
          <img class="object-cover" :src="picture" alt="" />
        </div>
        <div class="ml-4 flex flex-col">
          <div class="text-base md:text-xl text-white font-bold">{{ name }}</div>
          <div class="mt-2 text-sm md:text-base text-gray-400">
            <Money :amount="price" />
            <span>/{{ unit }}</span>
          </div>
          <div class="mt-auto">
            <UButton class="md:flex hidden" variant="soft" size="sm" color="rose" icon="i-heroicons-trash"
              >Remove</UButton
            >
            <div class="text-white text-lg font-bold md:hidden"><Money :amount="price * quantity" /></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center">
        <UButton size="sm" color="gray" variant="link" icon="i-heroicons-minus-16-solid" />
        <div class="px-2 py-2 text-white font-bold text-sm md:text-base bg-gray-800 rounded-md ring-1 ring-gray-700">
          {{ quantity }}
        </div>
        <UButton size="sm" color="gray" variant="link" icon="i-heroicons-plus-16-solid" />
      </div>
      <div class="md:block hidden">
        <div class="text-white text-lg font-bold"><Money :amount="price * quantity" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
