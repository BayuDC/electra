<script setup lang="ts">
const user = useAuth();
const message = ref('');

const { data: messages } = await useMyFetch<
  {
    content: string;
    sender_id: number;
  }[]
>('/messages/1');

async function sendMessage() {
  const {} = await useMyFetch('/messages/1', {
    method: 'POST',
    body: JSON.stringify({
      content: message.value,
    }),
  });

  messages.value!.push({
    content: message.value,
    sender_id: user.value!.id,
  });
  message.value = '';
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
    <div class="flex flex-col gap-4">
      <ChatMessage v-for="m in messages" :type="m.sender_id == user?.id ? 'me' : 'you'">{{ m.content }}</ChatMessage>
    </div>
    <UDivider class="my-6" />
    <div>
      <UInput placeholder="Type here...." size="xl" @keyup.enter="sendMessage" v-model="message" />
    </div>
  </UCard>
</template>

<style scoped></style>
