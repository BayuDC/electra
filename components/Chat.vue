<script setup lang="ts"></script>

<template>
  <UCard
    :ui="{
      body: {
        padding: 'px-4 py-4 sm:p-0 sm:px-6 sm:py-6',
      },
    }"
  >
    <div class="flex flex-col gap-4">
      <ChatMessage type="you">Hello Buyer</ChatMessage>
      <ChatMessage type="me">Hello Seller</ChatMessage>
    </div>
    <UDivider class="my-6" />
    <div>
      <UInput placeholder="Type here...." size="xl" />
    </div>
  </UCard>
</template>

<style scoped></style>
