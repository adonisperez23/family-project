<template>
    <Teleport to="#teleports">
        <div
            @click.stop="$emit('close')"
            class="fixed inset-0 z-2  flex justify-center items-center bg-[rgba(51,51,51,0.7)] text-[#333333]"
        >
            <div
                @click.stop
                class="flex flex-col items-start w-[800px] bg-[#FFFFF6] p-[32px] rounded-[12px] relative"
            >
                <div class="visible sm:invisible h-[239px] absolute inset-0">
                    <picture>
                        <source
                            type="image/avif"
                            :srcset="_product_order.product.img_avif_url"
                        />
                        <source
                            type="image/jpeg"
                            :srcset="_product_order.product.img_url"
                        />
                        <img
                            :src="_product_order.product.img_url"
                            class="object-cover h-[239px] w-full"
                            loading="lazy"
                        />
                    </picture>
                </div>
                <div
                    class="sm:hidden absolute inset-0 h-[240px] w-full bg-linear-to-b from-[transparent] to-[white]"
                ></div>
                <button @click="$emit('close')" class="self-end mb-[16px] z-1">
                    <CloseIcon />
                </button>
                <div class="sm:grid sm:grid-cols-2 gap-[32px] w-full">
                    <div class="hidden sm:flex">
                        <picture>
                            <source
                                type="image/avif"
                                :srcset="_product_order.product.img_avif_url"
                            />
                            <source
                                type="image/jpeg"
                                :srcset="_product_order.product.img_url"
                            />
                            <img
                                :src="_product_order.product.img_url"
                                class="size-[352px] border border-[#D7D7D7] rounded-[16px]"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div class="flex flex-col gap-[32px] pt-[140px] sm:pt-0 max-h-[700px]">
                        <div class="flex flex-col justify-center">
                            <h2 class="z-1">
                                {{ _product_order.product.name }}
                            </h2>
                            <p class="text-[#858589]">
                                {{ describirItems(_product_order.contornos) }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-[32px] overflow-auto">
                            <div
                                v-if="!sin_contornos"
                                class="flex flex-col justify-center gap-[16px]"
                            >
                                <div class="flex justify-between items-center">
                                    <h4>
                                        Contornos ({{
                                            _product_order.contornos.length
                                        }}/3)
                                    </h4>
                                    <div
                                        class="flex justify-center items-center gap-[8px]"
                                    >
                                        <div
                                            v-if="
                                                _product_order.contornos
                                                    .length === 0
                                            "
                                            class="flex justify-center items-center w-[75px] h-[23px] bg-[#D7D7D7] rounded-[6px]"
                                        >
                                            <h6>Requerido</h6>
                                        </div>
                                        <button
                                            @click="
                                                _show_contornos =
                                                    !_show_contornos
                                            "
                                        >
                                            <ArrowUpIcon
                                                v-if="_show_contornos"
                                            />
                                            <ArrowDownIcon v-else />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    v-if="_show_contornos"
                                    v-for="(contorno, index) in contornos"
                                    :key="index"
                                    class="flex justify-between items-center"
                                >
                                    <h5
                                        :class="{
                                            'text-[#D7D7D7]':
                                                !checkBox(
                                                    contorno,
                                                    _product_order.contornos
                                                ) && _limite_contornos,
                                        }"
                                    >
                                        {{ contorno }}
                                    </h5>
                                    <CheckBox
                                        :key="index"
                                        @click="
                                            selectItem(
                                                contorno,
                                                _product_order.contornos
                                            )
                                        "
                                        :checked="
                                            checkBox(
                                                contorno,
                                                _product_order.contornos
                                            )
                                        "
                                        :disabled="
                                            !checkBox(
                                                contorno,
                                                _product_order.contornos
                                            ) && _limite_contornos
                                        "
                                    />
                                </div>
                            </div>
                            <div
                                class="flex flex-col justify-center gap-[16px]"
                            >
                                <div class="flex justify-between items-center">
                                    <h4>Bebidas</h4>
                                    <div
                                        class="flex justify-center items-center gap-[8px]"
                                    >
                                        <button
                                            @click="
                                                _show_bebidas = !_show_bebidas
                                            "
                                        >
                                            <ArrowUpIcon v-if="_show_bebidas" />
                                            <ArrowDownIcon v-else />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    v-if="_show_bebidas"
                                    v-for="(bebida, index) in bebidas"
                                    :key="index"
                                    class="flex justify-between items-center"
                                >
                                    <h5>{{ bebida.name }}</h5>
                                    <div
                                        class="flex justify-center items-center gap-[12px]"
                                    >
                                        <h5>+${{ bebida.price }}</h5>
                                        <CheckBox
                                            @click="
                                                () => {
                                                    selectItem(
                                                        bebida.name,
                                                        _bebidas_seleccionadas
                                                    );
                                                    calculateOrderSubtotal(
                                                        bebida,
                                                        _product_order.bebidas,
                                                        _product_order
                                                    );
                                                }
                                            "
                                            :checked="
                                                checkBox(
                                                    bebida.name,
                                                    _bebidas_seleccionadas
                                                )
                                            "
                                        />
                                    </div>
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
                                        <button
                                            @click="
                                                _show_extras = !_show_extras
                                            "
                                        >
                                            <ArrowUpIcon v-if="_show_extras" />
                                            <ArrowDownIcon v-else />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    v-if="_show_extras"
                                    v-for="extra in extras"
                                    class="flex justify-between items-center"
                                >
                                    <h5>{{ extra.name }}</h5>
                                    <div
                                        class="flex justify-center items-center gap-[12px]"
                                    >
                                        <h5>+${{ extra.price }}</h5>
                                        <CheckBox
                                            @click="
                                                () => {
                                                    selectItem(
                                                        extra.name,
                                                        _extras_seleccionados
                                                    );
                                                    calculateOrderSubtotal(
                                                        extra,
                                                        _product_order.extras,
                                                        _product_order
                                                    );
                                                }
                                            "
                                            :checked="
                                                checkBox(
                                                    extra.name,
                                                    _extras_seleccionados
                                                )
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="fixed bottom-0 left-0 p-[16px] gap-[16px] z-1 shadow-[0_25px_50px_-12px] flex flex-col bg-[white] w-full sm:p-0 sm:static sm:gap-[32px] sm:shadow-none sm:bg-[#FFFFF6]"
                        >
                            <div class="flex justify-between items-center">
                                <div class="flex flex-col gap-[8px]">
                                    <h5 class="">
                                        <strong
                                            >{{
                                                _cantidad_productos
                                            }}
                                            productos</strong
                                        >
                                    </h5>
                                    <h6>
                                        {{ _resumen_orden }}
                                    </h6>
                                </div>
                                <h2 class="">${{ _product_order.subtotal }}</h2>
                            </div>
                            <div
                                class="flex justify-between items-center gap-[16px]"
                            >
                                <AmountBtn
                                    @add="addProduct(_product_order)"
                                    @remove="removeProduct(_product_order)"
                                    :amount="_product_order.amount"
                                />

                                <MainBtn
                                    class="hover:translate-y-[-4px]"
                                    text="Agregar"
                                    @click="AddProductToStore"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import type { BaseProduct, Product } from "~/types/Product";
import AmountBtn from "../buttons/AmountBtn.vue";
import MainBtn from "../buttons/MainBtn.vue";
import ArrowUpIcon from "../icons/ArrowUpIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import CheckBox from "../buttons/CheckBox.vue";
import ArrowDownIcon from "../icons/ArrowDownIcon.vue";
import type { ProductOrder } from "~/types/ProductOrder";
import { Teleport } from "vue";

const $emit = defineEmits(["close"]);

const $props = defineProps<{
    product: ProductOrder;
    editing_product_index?: number;
}>();

const _product_order = reactive<ProductOrder>({
    product: { name: "", price: 0, img_avif_url: "", img_url: "" },
    subtotal: 0,
    amount: 1,
    contornos: [],
    bebidas: [],
    extras: [],
});

Object.assign(_product_order, $props.product);

const $store = useStore();

//Productos que no llevan contornos
// 1.Bologna

const sin_contornos = _product_order.product.name === "Pasta a la bologna";

const _show_contornos = ref(true);
const _show_bebidas = ref(true);
const _show_extras = ref(true);

const _bebidas_seleccionadas = ref<string[]>([]);
const _extras_seleccionados = ref<string[]>([]);
_extras_seleccionados.value = $props.product.extras.map(
    (product) => product.name
);
_bebidas_seleccionadas.value = $props.product.bebidas.map(
    (product) => product.name
);

const _limite_contornos = computed(() => {
    return _product_order.contornos.length === 3;
});

const _cantidad_productos = computed(() => {
    return (
        _product_order.amount +
        _bebidas_seleccionadas.value.length +
        _extras_seleccionados.value.length
    );
});

const _resumen_orden = computed(() => {
    let bebidas =
        _bebidas_seleccionadas.value.length > 0
            ? `+ ${_bebidas_seleccionadas.value.length} bebidas`
            : "";
    let extras =
        _extras_seleccionados.value.length > 0
            ? `+ ${_extras_seleccionados.value.length} extra`
            : "";

    let product_amount = _product_order.amount > 1 ? _product_order.amount : "";

    return `${product_amount} Plato base ${bebidas} ${extras}`;
});

function calculateOrderSubtotal(
    item: BaseProduct,
    collectionBaseProduct: BaseProduct[],
    order: ProductOrder
) {
    let item_index = collectionBaseProduct.findIndex(
        (element) => element.name === item.name
    );

    if (item_index !== -1) {
        order.subtotal -= item.price;
        collectionBaseProduct.splice(item_index, 1);
    } else {
        order.subtotal += item.price;
        collectionBaseProduct.push(item);
    }
}

function selectItem(name: string, collectionItem: string[]) {
    console.log("haciendo click");
    let item_index = collectionItem.findIndex((element) => element === name);

    if (item_index !== -1) {
        collectionItem.splice(item_index, 1);
    } else {
        collectionItem.push(name);
    }
}

function checkBox(name: string, collectionItem: string[]): boolean {
    return collectionItem.some((element) => element === name);
}

function AddProductToStore() {
    if (
        $props.editing_product_index !== null &&
        $props.editing_product_index !== undefined
    ) {
        $store.value[$props.editing_product_index] = _product_order;
    } else {
        $store.value.push(_product_order);
    }

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

const bebidas: BaseProduct[] = [
    { name: "Agua nevada 355ml", price: 1 },
    { name: "Jugo de parchita", price: 2 },
    { name: "Jugo de guayaba", price: 2 },
    { name: "Jugo de lechoza", price: 2 },
    { name: "Jugo de fresa", price: 3 },
];

const extras: BaseProduct[] = [{ name: "Racion de papas fritas", price: 3 }];
</script>

<style scoped></style>
