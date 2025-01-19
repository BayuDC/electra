<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps<{
  id: number;
  name: string;
  price: number;
  unit: string;
  picture: string;
  category: string;
  description: string;
}>();
const emit = defineEmits<{
  (e: 'cart-added'): void;
}>();

const user = useAuth();
const cart = useCartStore();

async function addToCart() {
  if (!user.value) {
    return navigateTo('/login');
  }

  await cart.load();
  const product = cart.products.find(p => p.id === props.id);

  await cart.update(props.id, (product?.pivot.quantity || 0) + 1);
  await cart.load();
  emit('cart-added');
}

const isOpen = ref(false);
</script>

<template>
  <UCard
    :ui="{
      background: 'dark:bg-black',
      header: {
        padding: 'px-4 pt-4 pb-3 sm:p-4',
      },
      body: {
        base: 'text-white/80',
        padding: 'px-4 py-0 sm:p-4 sm:py-0',
      },
      footer: {
        base: '',
        padding: 'px-4 pb-4 pt-2 sm:p-4 sm:pt-2',
      },
    }"
  >
    <template #header>
      <div class="relative">
        <div
          @click="isOpen = true"
          class="overflow-hidden rounded-md cursor-pointer"
          :style="`aspect-ratio: 1/1; background-image: url(${
            'https://electra.icu' + picture
          }); background-size: cover; background-position: center;`"
        ></div>
        <UBadge class="font-bold absolute -top-1 -left-1">{{ category }}</UBadge>
      </div>
    </template>
    <div class="truncate">
      {{ name }}
    </div>
    <template #footer>
      <div class="flex">
        <div class="font-bold text-sm md:text-base">
          <Money :amount="price" />
          <span class="text-gray-400">/{{ unit }}</span>
        </div>
        <div class="ml-auto flex items-center">
          <UDropdown
            :items="[
              [
                {
                  label: 'Ask admin',
                  icon: 'i-heroicons-chat-bubble-bottom-center-text',
                  click: () => {
                    navigateTo('https://wa.me/6281229939193');
                  },
                },
                {
                  label: 'Add to cart',
                  icon: 'i-heroicons-shopping-cart',
                  click: addToCart,
                },
              ],
            ]"
          >
            <UButton :padded="false" color="gray" variant="link" icon="i-heroicons-ellipsis-vertical-20-solid" />
          </UDropdown>
        </div>
      </div>
    </template>
    <UModal v-model="isOpen">
      <div class="p-4 flex gap-4 flex-col items-center">
        <div
          class="overflow-hidden rounded-md w-96"
          :style="`aspect-ratio: 1/1; background-image: url(${
            'https://electra.icu' + picture
          }); background-size: cover; background-position: center;`"
        ></div>
        <div>
          <h2 class="text-xl font-bold">{{ name }}</h2>
          <p class="text-gray-400">{{ category }}</p>
          <p class="mt-2">{{ description }}</p>
          <div class="mt-4">
            <div class="font-bold text-lg">
              <Money :amount="price" />
              <span class="text-gray-400">/{{ unit }}</span>
            </div>
            <div class="flex gap-2 flex-wrap">
              <UButton class="mt-4" @click="addToCart">Add to Cart</UButton>
              <UButton class="mt-4" to="https://wa.me/6281229939193">Ask Admin</UButton>
            </div>
          </div>
        </div>
      </div>
    </UModal>
  </UCard>
</template>

<style scoped></style>
