<script setup lang="ts"></script>

<template>
  <header class="bg-black">
    <Container class="px-5 md:px-10">
      <div class="flex items-center justify-between h-16">
        <h1 class="font-bold text-emerald-500 italic text-[32px]">
          <NuxtLink to="/">Electra Store</NuxtLink>
        </h1>
        <div class="flex gap-2">
          <UButton>Sign Up</UButton>
          <UButton>Sign In</UButton>
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped></style>
