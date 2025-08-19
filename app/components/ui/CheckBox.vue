<template>
    <button
        class="flex justify-center items-center size-[20px] rounded-[6px] border border-[#333333]"
    >
        <div
            v-if="is_check"
            class="size-[12px] bg-[#117554] rounded-[3px]"
        ></div>
</button>
</template>

<script setup lang="ts">
defineProps<{
    is_check?: boolean;
}>();
</script>

<style scoped></style>
