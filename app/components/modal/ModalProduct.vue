<template>
    <div
        @click.stop="$emit('close')"
        class="fixed inset-0 z-1 flex justify-center items-center bg-[rgba(51,51,51,0.7)] text-[#333333]"
    >
        <div
            @click.stop
            class="flex flex-col items-start w-[800px] bg-[#FFFFF6] p-[32px] rounded-[12px] relative"
        >
            <div class="sm:hidden absolute inset-0">
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
                        class="object-cover h-[239px] w-full"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div
                class="sm:hidden absolute inset-0 h-[240px] w-full bg-linear-to-b from-[transparent] to-[white]"
            ></div>
            <button  @click="$emit('close')" class="self-end mb-[16px] z-1">
                <CloseIcon />
            </button>
            <div
                class="sm:grid sm:grid-cols-2 gap-[32px] w-full max-h-[700px] overflow-y-scroll"
            >
                <div class="hidden sm:flex">
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
                            class="size-[352px] border border-[#D7D7D7] object-cover rounded-[16px]"
                            loading="lazy"
                        />
                    </picture>
                </div>
                <div class="flex flex-col gap-[32px] pt-[140px] sm:pt-0">
                    <div class="flex flex-col justify-center">
                        <h2 class="z-1">Lomito con pimentón</h2>
                        <p class="text-[#858589]">
                            Carne, arroz, tajadas, ensalada
                        </p>
                    </div>

                    <div class="flex flex-col justify-center gap-[16px]">
                        <div class="flex justify-between items-center">
                            <h4>Contornos (2/3)</h4>
                            <div
                                class="flex justify-center items-center gap-[8px]"
                            >
                                <div
                                    class="flex justify-center items-center w-[75px] h-[23px] bg-[#D7D7D7] rounded-[6px]"
                                >
                                    <h6>Requerido</h6>
                                </div>
                                <button>
                                    <ArrowUpIcon />
                                </button>
                            </div>
                        </div>
                        <div
                            v-for="contorno in contornos"
                            class="flex justify-between items-center"
                        >
                            <h5>{{ contorno }}</h5>
                            <CheckBox is_check />
                        </div>
                    </div>
                    <div class="flex flex-col justify-center gap-[16px]">
                        <div class="flex justify-between items-center">
                            <h4>Bebidas</h4>
                            <div
                                class="flex justify-center items-center gap-[8px]"
                            >
                                <button>
                                    <ArrowUpIcon />
                                </button>
                            </div>
                        </div>
                        <div
                            v-for="bebida in bebidas"
                            class="flex justify-between items-center"
                        >
                            <h5>{{ bebida }}</h5>
                            <CheckBox is_check />
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center gap-[16px] mb-[132px] sm:mb-0"
                    >
                        <div class="flex justify-between items-center">
                            <h4>Extras</h4>
                            <div
                                class="flex justify-center items-center gap-[8px]"
                            >
                                <button>
                                    <ArrowUpIcon />
                                </button>
                            </div>
                        </div>
                        <div
                            v-for="extra in extras"
                            class="flex justify-between items-center"
                        >
                            <h5>{{ extra }}</h5>
                            <CheckBox is_check />
                        </div>
                    </div>
                    <div
                        class="fixed bottom-0 left-0 p-[16px] gap-[16px] z-1 shadow-[0_25px_50px_-12px] flex flex-col bg-[white] w-full sm:p-0 sm:static sm:gap-[32px] sm:shadow-none sm:bg-[#FFFFF6]"
                    >
                        <div class="flex justify-between items-center">
                            <div class="flex flex-col gap-[8px]">
                                <h5 class="">
                                    <strong>3 productos</strong>
                                </h5>
                                <h6>Plato base + 2 bebidas + 1 extra</h6>
                            </div>
                            <h2 class="">$15</h2>
                        </div>
                        <div
                            class="flex justify-between items-center gap-[16px]"
                        >
                            <AmountBtn :amount="3" />
                            <MainBtn text="Agregar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AmountBtn from "../buttons/AmountBtn.vue";
import MainBtn from "../buttons/MainBtn.vue";
import ArrowUpIcon from "../icons/ArrowUpIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import CheckBox from "../ui/CheckBox.vue";

const $emit = defineEmits(["close"]);

function closeModal() {
    $emit("close");
}

const contornos: string[] = [
    "Arroz",
    "Pasta",
    "Ensalada verde",
    "Papas fritas",
    "Papas al vapor",
    "Pure de papas",
    "tajadas fritas",
    "Caraotas",
    "Frijoles",
    "Ensalada Cocida",
];

const bebidas: string[] = [
    "Agua nevada 355ml",
    "Jugo de parchita",
    "Jugo de guayaba",
    "Jugo de lechoza",
    "Jugo de fresa",
];

const extras: string[] = ["Racion de papas fritas"];
</script>

<style scoped></style>
