<template>
    <div @click="openModal" class="flex flex-col gap-[16px]">
        <picture>
            <source type="image/avif" :srcset="img_avif_url" />
            <source type="image/jpeg" :srcset="img_url" />
            <img
                :src="img_url"
                class="size-[320px] border border-[#D7D7D7] hover:border-[#72BF78] object-cover rounded-[16px]"
                loading="lazy"
            />
        </picture>
        <div class="flex flex-col gap-[8px]">
            <h2 class="hover:underline whitespace-nowrap">{{ name }}</h2>
            <p>${{ price }}</p>
        </div>
        <div v-if="_open_modal">
            <ModalProduct v-on:close="closeModal" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/Product";
import ModalProduct from "../modal/ModalProduct.vue";

defineProps<Product>();

const _open_modal = ref(false);

function closeModal() {
    console.log("closing modal", _open_modal.value);
    _open_modal.value = false;
    console.log("closing modal", _open_modal.value);
    console.log("closing modal", _open_modal.value);
}

function openModal() {
    console.log("open modal", _open_modal.value);
    _open_modal.value = true;
}
</script>

<style scoped></style>
