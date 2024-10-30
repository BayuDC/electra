<script setup lang="ts">
const user = useAuth();
const message = ref('');

const { data: messages } = await useMyFetch<
  {
    id: number;
    content: string;
    sender_id: number;
  }[]
>('/chat/messages/' + user.value!.id);
const { data: newMessages, refresh } = await useMyFetch<
  {
    content: string;
    sender_id: number;
  }[]
>('/chat/messages/' + user.value!.id + '/check/' + messages.value![messages.value!.length - 1].id, {
  immediate: false,
});

async function sendMessage() {
  const {} = await useMyFetch('/chat/messages/' + user.value!.id, {
    method: 'POST',
    body: JSON.stringify({
      content: message.value,
    }),
  });

  message.value = '';
  await reload();
}

async function reload() {
  await refresh();
  messages.value?.push(...newMessages.value!);
}
</script>

<template>
  <UCard
    :ui="{
      body: {
        padding: 'px-4 py-4 sm:p-0 sm:px-6 sm:py-6',
      },
    }"
  >
    <div class="flex flex-col gap-4 min-h-40">
      <ChatMessage v-for="m in messages" :type="m.sender_id == user?.id ? 'me' : 'you'">{{ m.content }}</ChatMessage>
    </div>
    <UDivider class="my-6" />
    <div class="flex items-center gap-4">
      <UButton size="lg" @click="reload">Refresh</UButton>
      <div class="w-full">
        <UInput placeholder="Type here...." size="xl" @keyup.enter="sendMessage" v-model="message" />
      </div>
    </div>
  </UCard>
</template>

<style scoped></style>
