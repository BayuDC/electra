<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <Main>
    <Section title="Chat"> <Chat /> </Section>
  </Main>
</template>

<style scoped></style>
