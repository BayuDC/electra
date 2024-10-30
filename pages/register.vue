<script setup lang="ts">
definePageMeta({
  layout: 'empty',
});

const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
});
const token = useLocalStorage('token', '');

const { data, execute, status, clear } = useMyFetch<{ token: string }>('/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: state,
  watch: false,
  immediate: false,
});

async function onSubmit() {
  await execute();

  if (!data.value) {
    return;
  }

  token.value = data.value.token;
  setTimeout(() => {
    clear();
    navigateTo('/');
  }, 1000);
}
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <div class="max-w-md mx-auto h-full flex items-center">
      <Main class="w-full">
        <Section title="Electra Store" center-head>
          <div>
            <UCard>
              <UForm :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Name" name="email">
                  <UInput v-model="state.name" />
                </UFormGroup>

                <UFormGroup label="Email" name="email">
                  <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                  <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <div class="flex">
                  <UButton type="submit" class="ml-auto" :loading="status == 'pending'"> Rgister </UButton>
                </div>
              </UForm>
            </UCard>
          </div>
        </Section>
      </Main>
      <Transition name="toast" mode="out-in">
        <Toast
          v-if="status == 'error'"
          icon="i-heroicons-x-circle-16-solid"
          message="Register failed!"
          color="rose"
          @dispose="clear"
        />
        <Toast
          v-else-if="status == 'success'"
          icon="i-heroicons-check-circle-20-solid"
          message="Register success!"
          color="green"
          @dispose="clear"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped></style>
