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
    picture_url: string;
    category: {
      name: string;
    };
    description: string;
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
    <Section title="All Products">
      <Grid>
        <Product
          v-for="p in products"
          v-bind="{
            id: p.id,
            name: p.name,
            price: parseInt(p.price),
            picture: p.picture_url,
            unit: p.unit,
            category: p.category.name,
            description: p.description,
          }"
          :key="p.id"
          @cart-added="showModal = true"
        />
      </Grid>

      <div>
        <ClientOnly>
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
        </ClientOnly>
      </div>
    </Section>
  </Main>
</template>

<style scoped></style>
