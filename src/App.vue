<script setup>
import data from '@/data/cardapio.json';
</script>

<template>
  <div class="container py-4">
    <div class="mx-auto flex max-w-screen-sm flex-col gap-y-10">
      <div class="bg-app-red pb-2 pt-3">
        <h1 class="text-center font-bebasNeue text-4xl font-bold text-white">
          Cardápio 31/10/2024
        </h1>
      </div>

      <div
        v-for="items in data"
        :key="items.title"
        class="flex flex-col gap-y-6"
      >
        <h2 class="text-center font-bebasNeue text-4xl font-bold text-app-red">
          {{ items.title }}
        </h2>
        <div
          v-for="item in items.item"
          :key="item.title"
          class="flex items-center gap-x-6 border-b pb-6"
        >
          <img
            :src="item.image"
            class="h-32 w-32 object-contain"
          />

          <div class="flex flex-col gap-y-2">
            <h3 class="font-bebasNeue text-app-darkRed text-xl leading-6">
              {{ item.title }}
            </h3>
            <span
              v-if="item.subtitle"
              class="text-sm"
            >
              {{ item.subtitle }}
            </span>

            <span
              v-if="item.content"
              class="text-sm"
            >
              Quantidade: {{ item?.content }}</span>
            <span class="font-bold text-sm">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
