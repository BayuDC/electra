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

const emit = defineEmits<{
  (e: 'update-quantity', quantity: number): void;
}>();
</script>

<template>
  <div>
    <div class="grid grid-cols-[1fr,auto] md:grid-cols-[1fr,120px,120px] items-center gap-4 md:gap-10 lg:gap-16">
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
            <UButton
              class="md:flex hidden"
              variant="soft"
              size="sm"
              color="rose"
              icon="i-heroicons-trash"
              @click="emit('update-quantity', 0)"
              >Remove</UButton
            >
            <div class="text-white text-lg font-bold md:hidden"><Money :amount="price * quantity" /></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center justify-self-center">
        <UButton
          size="sm"
          color="gray"
          variant="link"
          icon="i-heroicons-minus-16-solid"
          @click="emit('update-quantity', quantity - 1)"
        />
        <UInput
          :model-value="quantity"
          class="w-12"
          :ui="{
            base: 'text-white font-bold text-sm md:text-base text-center rounded-md ring-1 ring-gray-700',
          }"
          @change="v => emit('update-quantity', parseInt(v) || quantity)"
          pattern="[0-9]*"
          type="number"
        ></UInput>

        <UButton
          size="sm"
          color="gray"
          variant="link"
          icon="i-heroicons-plus-16-solid"
          @click="emit('update-quantity', quantity + 1)"
        />
      </div>
      <div class="md:block hidden justify-self-end">
        <div class="text-white text-lg font-bold"><Money :amount="price * quantity" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
