<script setup lang="ts">
definePageMeta({
  layout: 'empty',
});

const state = reactive({
  email: undefined,
  password: undefined,
});
const token = useLocalStorage('token', '');

const { data, execute, status, clear } = useMyFetch<{ token: string }>('/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: state,
  watch: false,
});

async function onSubmit() {
  await execute();

  if (!data.value) {
    return;
  }

  token.value = data.value.token;
}
</script>

<template>
  <div class="max-w-md mx-auto h-screen flex items-center">
    <Main class="w-full">
      <Section title="Electra Store" center-head>
        <div>
          <UCard>
            <UForm :state="state" class="space-y-4" @submit="onSubmit">
              <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
              </UFormGroup>

              <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
              </UFormGroup>

              <div class="flex">
                <UButton type="submit" class="ml-auto" :loading="status == 'pending'"> Login </UButton>
              </div>
            </UForm>
          </UCard>
          <div class="mt-6 flex gap-4 flex-col">
            <UButton color="gray" variant="solid" class="w-full py-3 px-4 sm:px-6">
              <div class="flex items-center w-full gap-4 justify-between">
                <span> Continue with Google </span>
                <img src="~/assets/google.svg" alt="" />
              </div>
            </UButton>
            <UButton color="gray" variant="solid" class="w-full py-3 px-4 sm:px-6">
              <div class="flex items-center w-full gap-4 justify-between">
                <span> Continue with Apple </span>
                <img src="~/assets/apple.svg" alt="" />
              </div>
            </UButton>
          </div>
        </div>
      </Section>
    </Main>
  </div>
</template>

<style scoped></style>
