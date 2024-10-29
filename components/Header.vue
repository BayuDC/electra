<script setup lang="ts">
const auth = useAuth();

const userLinks = [
  {
    label: 'Chat',
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    to: '/chat',
  },
  {
    label: 'Cart',
    icon: 'i-heroicons-shopping-cart',
    to: '/cart',
  },
  {
    label: 'Transaction',
    icon: 'i-heroicons-clipboard-document-list',
    to: '/transaction',
  },
];
const adminLinks = [
  {
    label: 'Manage  ',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/admin/manage',
  },
  {
    label: 'Chat',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/admin/chat',
  },
  {
    label: 'Transaction',
    icon: 'i-heroicons-clipboard-document-list',
    to: '/admin/transaction',
  },
];

const items = [
  [
    {
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Log out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      to: '/logout',
    },
  ],
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
          <div v-if="user" class="flex items-center">
            <UHorizontalNavigation
              :links="user.role == 'admin' ? adminLinks : userLinks"
              :ui="{
                active: 'dark:after:h-0 after:h-0',
                label: 'hidden sm:block',
                icon: {
                  base: 'w-5 h-5',
                },
              }"
            />
            <div class="h-8 ml-2">
              <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{}">
                <UAvatar
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                />

                <template #account="{ item }">
                  <div class="text-left">
                    <p>Signed in as</p>
                    <p class="truncate font-medium text-gray-900 dark:text-white">
                      {{ auth?.email }}
                    </p>
                  </div>
                </template>

                <template #item="{ item }">
                  <span class="truncate">{{ item.label }}</span>

                  <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                </template>
              </UDropdown>
            </div>
          </div>
          <div v-else>
            <UButton class="my-2.5" to="/login">Log In</UButton>
          </div>
        </Transition>
      </div>
    </Container>
  </div>
</template>
