<script setup lang="ts"></script>

<template>
  <UCard :ui="{
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
  }">
    <template #header>
      <div class="relative">
        <div class="overflow-hidden rounded-md" style="aspect-ratio: 1/1">
          <img src="https://ft.unj.ac.id/elektronika/wp-content/uploads/2021/10/1K-ohm-05-5-percent.jpg">
        </div>
        <UBadge class="font-bold absolute -top-1 -left-1">#resistor</UBadge>
      </div>
    </template>
    Resistor 1K Ohm
    <template #footer>
      <div class="flex">
        <div class="font-bold text-lg">
          Rp100/pcs
        </div>
        <div class="ml-auto flex items-center">
          <UDropdown :items="[[{
            label: 'Ask admin',
            icon: 'i-heroicons-chat-bubble-bottom-center-text'
          }, {
            label: 'Add to cart',
            icon: 'i-heroicons-shopping-cart',
          }]]">
            <UButton :padded="false" color="gray" variant="link" icon="i-heroicons-ellipsis-vertical-20-solid" />
          </UDropdown>
        </div>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
