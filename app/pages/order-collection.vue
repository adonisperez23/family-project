<template>
    <div class="flex justify-center items-center sm:pt-[128px]">
        <div
            class="flex flex-col gap-[32px] w-full h-screen sm:w-[430px] sm:h-[589px] bg-[#FFFFF6] rounded-[12px] p-[32px]"
        >
            <div class="flex justify-between items-center">
                <h2>Tu Pedido</h2>
                <button class="">
                    <CloseIcon />
                </button>
            </div>
            <div class="flex justify-center items-start gap-[8px]">
                <picture>
                    <source
                        type="image/avif"
                        srcset="
                            https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/12_bistec%20de%20solomo.avif
                        "
                    />
                    <source
                        type="image/jpeg"
                        srcset="
                            https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/12_bistec%20de%20solomo-min.png
                        "
                    />
                    <img
                        src="https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/12_bistec%20de%20solomo-min.png"
                        class="w-[73px] h-[72px] border border-[#D7D7D7] object-cover rounded-[8px]"
                        loading="lazy"
                    />
                </picture>
                <div class="flex flex-col gap-[8px]">
                    <p>Pabellón criollo a caballo</p>
                    <h5>8$</h5>
                    <h6>Jugo de archita, ración de papas fritas</h6>
                    <h6 class="underline">Editar</h6>
                </div>
                <div class="flex justify-center items-start">
                    <AmountBtn :amount="3" small />
                </div>
            </div>
            <div class="flex justify-center items-start gap-[8px]">
                <picture>
                    <source
                        type="image/avif"
                        srcset="
                            https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/12_bistec%20de%20solomo.avif
                        "
                    />
                    <source
                        type="image/jpeg"
                        srcset="
                            https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/12_bistec%20de%20solomo-min.png
                        "
                    />
                    <img
                        src="https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/12_bistec%20de%20solomo-min.png"
                        class="w-[73px] h-[72px] border border-[#D7D7D7] object-cover rounded-[8px]"
                        loading="lazy"
                    />
                </picture>
                <div class="flex flex-col gap-[8px]">
                    <p>Pabellón criollo a caballo</p>
                    <h5>8$</h5>
                    <h6>Jugo de archita, ración de papas fritas</h6>
                    <h6 class="underline">Editar</h6>
                </div>
                <div class="flex justify-center items-start">
                    <AmountBtn :amount="3" small />
                </div>
            </div>
            <div class="flex flex-col gap-[16px]">
                <div class="flex justify-between items-center">
                    <h5>Productos</h5>
                    <h5>$26</h5>
                </div>
                <div class="flex justify-between items-center">
                    <h5>Envio</h5>
                    <h5>$26</h5>
                </div>
            </div>
            <div
                class="fixed bottom-0 left-0 z-1 shadow-[0_25px_50px_-12px] sm:shadow-none sm:static bg-[white] w-full p-[16px] sm:p-0 sm:bg-[#FFFFF6] flex flex-col gap-[16px]"
            >
                <div class="flex justify-between items-center">
                    <h4 class="font-semibold">Subtotal</h4>
                    <h3>$26</h3>
                </div>
                <MainBtn text="Ir a pagar" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AmountBtn from "~/components/buttons/AmountBtn.vue";
import MainBtn from "~/components/buttons/MainBtn.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
</script>

<style scoped></style>
