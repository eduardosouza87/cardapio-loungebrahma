<script setup>
import data from '@/data/cardapio.json';
</script>

<template>
  <div class="container py-4">
    <div class="mx-auto flex flex-col gap-y-10 max-w-screen-sm">

      <div class="bg-app-red pt-3 pb-2">
        <h1 class="text-center text-white text-4xl font-bold font-bebasNeue">Cardápio 31/10/2024</h1>
      </div>

      <div
        v-for="items in data"
        :key="items.title"
        class="flex flex-col gap-y-6"
      >
        <h2 class="text-center text-app-red font-bold  font-bebasNeue text-4xl">{{ items.title }}</h2>
        <div
          v-for="item in items.item"
          :key="item.title"
          class="flex gap-x-4 items-center"
        >
          <img
            :src="item.image"
            class="object-contain h-32 w-32"
          >

          <div class="flex flex-col gap-y-3">
            <h3 class="font-bold">
              {{ item.title }}
            </h3>
            <span>{{ item.content }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
