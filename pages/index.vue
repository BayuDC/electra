<script setup lang="ts"></script>

<template>
  <Main>
    <Section title="Electronic Parts">
      <Grid>
        <UCard :ui="{ background: 'dark:bg-black' }">
          <template #header>
            <img src="https://ft.unj.ac.id/elektronika/wp-content/uploads/2021/10/1K-ohm-05-5-percent.jpg">
          </template>

          Resistor 1K Ohm

          <template #footer>
            Rp100/pcs
          </template>
        </UCard>
      </Grid>
    </Section>
  </Main>
</template>

<style scoped></style>
