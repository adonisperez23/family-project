<template>
    <div class="bg-[#FFFFF6]">
        <div class="h-[88px] bg-[#FBD288] flex justify-center">
            <div
                class="flex justify-between items-center w-full sm:w-[1024px] px-[16px]"
            >
                <img
                    src="/icons/family-logo.svg"
                    alt=""
                    height="56"
                    width="64"
                />
                <div class="flex justify-between items-center gap-[16px]">
                    <a class="invisible sm:visible" href="#menu">Menu</a>
                    <a
                        href="https://api.whatsapp.com/send?phone=584129797775"
                        class="invisible sm:visible"
                        >Whatsapp</a
                    >
                    <button
                        @click="_show_modal_order = true"
                        class="flex justify-center items-center gap-[8px] h-[48px] border border-[#522711] sm:px-[32px] px-[16px] py-[12px] rounded-[6px] bg-[#FF4545] text-[white] hover:translate-y-[-6px]"
                    >
                        <FoodIcon />
                        <div class="whitespace-nowrap">
                            Mi pedido ({{ $store.length }})
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div class="my-[64px]">
            <div class="flex justify-center">
                <div class="flex flex-col text-center gap-[32px]">
                    <div class="flex flex-col gap-[16px]">
                        <h1 class="text-[#333333]">
                            ¿Qué quieres almorzar hoy?
                        </h1>
                        <p class="text-[#333333]">
                            Elige tu almuerzo, agrega extras y te lo llevamos.
                        </p>
                    </div>
                    <div
                        class="flex flex-col justify-center items-center gap-[16px]"
                    >
                        <a
                            href="#menu"
                            class="flex justify-center items-center gap-[8px] w-[224px] h-[56px] border border-[#522711] px-[32px] py-[16px] rounded-[12px] bg-[#FFBC0D] text-[#522711] scroll-smooth"
                        >
                            <ForkIcon />
                            <p class="whitespace-nowrap">Empezar pedido</p>
                        </a>
                        <h6 class="text-[#333333]">
                            Los pedidos se envían por WhatsApp. No necesitas
                            registrarte. 👀
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div
                class="flex flex-col justify-center items-start max-w-[1024px] my-[64px]"
            >
                <div id="menu" class="flex mb-[64px]">
                    <h2>Menú</h2>
                </div>
                <div
                    class="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 gap-x-[32px] gap-y-[64px]"
                >
                    <ProductCard
                        v-for="(product, index) in menu"
                        :key="index"
                        v-bind="product"
                    />
                </div>
            </div>
        </div>

        <div
            class="flex justify-center h-[270px] bg-[#F24C4C] text-[white] px-[16px]"
        >
            <div class="flex justify-between items-center w-[1024px] my-[64px]">
                <div class="flex flex-col gap-[16px]">
                    <img
                        src="/icons/family-logo-white.svg"
                        alt=""
                        height="56"
                        width="64"
                    />
                    <p>Los cinco sabores</p>
                </div>
                <div class="flex flex-col justify-center items-end gap-[16px]">
                    <h4>Contacto</h4>
                    <p>Sigue disfrutando en nuestras redes sociales</p>
                    <div class="flex justify-center gap-[16px]">
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalOrder @close="_show_modal_order = false" v-if="_show_modal_order" />
</template>

<script setup lang="ts">
import FacebookIcon from "~/components/icons/FacebookIcon.vue";
import FoodIcon from "~/components/icons/FoodIcon.vue";
import ForkIcon from "~/components/icons/ForkIcon.vue";
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import ProductCard from "~/components/menu/ProductCard.vue";
import type { Product } from "~/types/Product";

const $store = useStore();

const _show_modal_order = ref(false);

const menu: Product[] = [
    {
        name: "Lomito con pimenton",
        price: 11,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/2_lomito%20con%20piment%C3%B3n-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/2_lomito%20con%20piment%C3%B3n.avif",
    },
    {
        name: "Costillas de cochino fritas",
        price: 12,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/3_costillas%20de%20cochino%20fritas-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/3_costillas%20de%20cochino%20fritas.avif",
    },
    {
        name: "Filet de pollo",
        price: 9,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/4_filet%20de%20pollo-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/4_filet%20de%20pollo.avif",
    },
    {
        name: "Asado negro",
        price: 9,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/5_asado%20negro-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/5_asado%20negro.avif",
    },

    {
        name: "Lengua en salsa",
        price: 9,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/8_lengua%20en%20salsa-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/8_lengua%20en%20salsa.avif",
    },
    {
        name: "Costillas guisadas",
        price: 9,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/9_costillas%20guisadas-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/9_costillas%20guisadas.avif",
    },

    {
        name: "Callos madrileños",
        price: 12,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/11_callos%20madrilenos-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/11_callos%20madrilenos.avif",
    },
    {
        name: "Bistec de solomo",
        price: 10,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/12_bistec%20de%20solomo-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/12_bistec%20de%20solomo.avif",
    },
    {
        name: "Filet de cochino",
        price: 8,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/13_filet%20de%20cochino-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/13_filet%20de%20cochino.avif",
    },
    {
        name: "Bistec de higado encebollado",
        price: 8,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/14_bistec%20de%20higado-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/14_bistec%20de%20higado.avif",
    },
    {
        name: "Rabo en salsa",
        price: 7,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/10_rabo%20en%20salsa-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/10_rabo%20en%20salsa.avif",
    },
    {
        name: "Pabellon criollo a caballo",
        price: 8,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/7_pabellon%20criollo%20a%20caballo-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/7_pabellon%20criollo%20a%20caballo.avif",
    },
    {
        name: "Milanesa de pollo",
        price: 9,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/6_milanesa%20de%20pollo-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/6_milanesa%20de%20pollo.avif",
    },
    {
        name: "Pasta a la bologna",
        price: 8,
        img_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/min/1_pasta%20a%20la%20bologna-min.png",
        img_avif_url:
            "https://voley-storage.nyc3.cdn.digitaloceanspaces.com/food/avif/1_pasta%20a%20la%20bologna.avif",
    },
];
</script>

<style scoped>

</style>
