<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
  <li>
    <Box :is="NuxtLink" class="hover:bg-emerald-100 transition group">
      <div class="relative">
        <ProductImage />
        <div
          class="absolute -top-0.5 -right-0.5 group-hover:-top-1 group-hover:-right-1 transition-[right,top] duration-300">
          <UBadge class="text-black font-bold text-base p-2">Rp100/pcs</UBadge>
        </div>
        <div
          class="absolute -bottom-0.5 -left-0.5 group-hover:-bottom-1 group-hover:-left-1 transition-[left,bottom] duration-300">
          <UBadge class="text-black font-bold">#resistor</UBadge>
        </div>
      </div>
      <div class="text-center mt-2">
        <h3 class="font-bold italic text-lg text-black/90 group-hover:text-black/100 transition">
          Resistor 1KΩ 1/2W 5%
        </h3>
        <!-- <p class="text-black/90 font-bold text-sm italic mt-0.5"></p> -->
      </div>
    </Box>
  </li>
</template>

<style scoped></style>
