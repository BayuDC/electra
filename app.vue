<template>
  <Html>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,700&family=Inter:wght@700&display=swap"
        rel="stylesheet"
      />
      <Title>Electra Store</Title>
    </Head>

    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
.blur-enter-active,
.blur-leave-active {
  @apply transition duration-300;
}
.blur-enter-from,
.blur-leave-to {
  @apply opacity-0 blur;
}
.slide-enter-active,
.slide-leave-active {
  @apply transition duration-300;
}
.slide-leave-to {
  @apply opacity-0 translate-y-20;
}
</style>
