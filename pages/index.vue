<script setup lang="ts">
silentLogin();

const { data: products } = await useMyFetch<
  {
    name: string;
    price: number;
    unit: string;
    picture: string;
    category: {
      slug: string;
    };
  }[]
>('/products');
</script>

<template>
  <Main>
    <Section title="Electronic Parts">
      <Grid>
        <Product
          v-for="p in products"
          v-bind="{
            name: p.name,
            price: p.price,
            picture: p.picture,
            unit: p.unit,
            category: p.category.slug,
          }"
        />
      </Grid>
    </Section>
  </Main>
</template>

<style scoped></style>
