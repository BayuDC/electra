<script setup lang="ts">
silentLogin(user => {
  if (user.role == 'admin') {
    navigateTo('/admin/manage');
  }
});

const { data: products } = await useMyFetch<
  {
    id: number;
    name: string;
    price: string;
    unit: string;
    picture: string;
    category: {
      slug: string;
    };
  }[]
>('/products');

const showModal = ref(false);
const modalTrottle = ref(false);

watch(
  () => showModal.value,
  value => {
    if (value) {
      if (modalTrottle.value) {
        showModal.value = false;
        return;
      }
      setTimeout(() => {
        showModal.value = false;
        modalTrottle.value = false;
      }, 2000);
    }
  }
);
</script>

<template>
  <Main class="">
    <Section title="Electronic Parts">
      <Grid>
        <Product
          v-for="p in products"
          v-bind="{
            id: p.id,
            name: p.name,
            price: parseInt(p.price),
            picture: p.picture,
            unit: p.unit,
            category: p.category.slug,
          }"
          :key="p.id"
          @cart-added="showModal = true"
        />
      </Grid>

      <div>
        <!-- TODO error hydration -->
        <Teleport to="#modal">
          <Transition name="toast" mode="out-in">
            <Toast
              v-if="showModal"
              icon="i-heroicons-check-circle-20-solid"
              message="Product added to cart!"
              color="green"
            />
          </Transition>
        </Teleport>
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
