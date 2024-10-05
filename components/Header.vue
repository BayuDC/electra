<script setup lang="ts">
const links = [
  {
    label: 'Chat',
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    to: '/test',
  },
  {
    label: 'Cart',
    icon: 'i-heroicons-shopping-cart',
    to: '/cart',
  },
  {
    label: 'Transaction',
    icon: 'i-heroicons-clipboard-document-list',
    to: '/test',
  },
];

const user = useAuth();
</script>

<template>
  <div class="border-b-2 border-primary-500 py-2">
    <Container class="px-5 md:px-10 flex items-center">
      <h1 class="font-bold text-green italic text-[28px] line-clamp-1">
        <NuxtLink to="/">Electra Store</NuxtLink>
      </h1>
      <div class="ml-auto">
        <Transition name="blur" mode="out-in">
          <div v-if="user">
            <UHorizontalNavigation
              :links="links"
              :ui="{
                active: 'dark:after:h-0 after:h-0',
                label: 'hidden sm:block',
                icon: {
                  base: 'w-6 h-6',
                },
              }"
            />
          </div>
          <div v-else>
            <UButton class="my-2.5" to="/login">Log In</UButton>
          </div>
        </Transition>
      </div>
    </Container>
  </div>
</template>
