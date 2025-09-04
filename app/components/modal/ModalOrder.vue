<template>
    <div
        class="fixed inset-0 z-1 flex justify-center items-center bg-[rgba(51,51,51,0.7)] text-[#333333]"
    >
        <div
            @click.stop="$emit('close')"
            class="flex justify-center items-center w-full"
        >
            <div
                @click.stop
                class="flex flex-col gap-[32px] w-full h-screen sm:w-[430px] sm:h-fit bg-[#FFFFF6] sm:rounded-[12px] p-[32px]"
            >
                <div class="flex justify-between items-center">
                    <h2>Tu Pedido</h2>
                    <button @click="$emit('close')">
                        <CloseIcon />
                    </button>
                </div>
                <div
                    class="flex flex-col justify-between items-start gap-[32px] overflow-auto max-h-[500px]"
                >
                    <div
                        v-for="(order, index) in $store"
                        class="flex justify-between items-start gap-[8px] w-full"
                    >
                        <div class="flex justify-center items-start gap-[8px]">
                            <picture>
                                <source
                                    type="image/avif"
                                    :srcset="order.product.img_avif_url"
                                />
                                <source
                                    type="image/jpeg"
                                    :srcset="order.product.img_url"
                                />
                                <img
                                    :src="order.product.img_url"
                                    class="w-[73px] h-[72px] border border-[#D7D7D7] object-cover rounded-[8px]"
                                    loading="lazy"
                                />
                            </picture>
                            <div class="flex flex-col gap-[8px]">
                                <p>{{ order.product.name }}</p>
                                <h5>${{ order.subtotal }}</h5>
                                <h6>{{ describirItems(order.contornos) }}</h6>
                                <h6>{{ describirItems(order.bebidas) }}</h6>
                                <h6>{{ describirItems(order.extras) }}</h6>

                                <div
                                    class="flex justify-start items-center gap-[8px]"
                                >
                                    <h6
                                        @click="_show_modal_product = true"
                                        class="underline cursor-pointer"
                                    >
                                        Editar
                                    </h6>
                                    <h6
                                        @click="deleteProduct(index)"
                                        class="underline cursor-pointer"
                                    >
                                        Eliminar
                                    </h6>
                                </div>
                            </div>
                            <ModalProduct
                                v-if="_show_modal_product"
                                @close="_show_modal_product = false"
                                :product="order"
                                :editing_product_index="index"
                            />
                        </div>
                        <div class="flex justify-center items-start">
                            <AmountBtn
                                @add="addProduct(order)"
                                @remove="removeProduct(order)"
                                :amount="order.amount"
                                small
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                    <div class="flex justify-between items-center">
                        <h5>Subtotal</h5>
                        <h5>${{ _sub_total_amount }}</h5>
                    </div>
                    <div class="flex justify-between items-center">
                        <h5>Servicio delivery</h5>
                        <h5>{{ COSTO_DELIVERY }}</h5>
                    </div>
                </div>
                <div
                    class="fixed bottom-0 left-0 z-1 shadow-[0_25px_50px_-12px] sm:shadow-none sm:static bg-[white] w-full p-[16px] sm:p-0 sm:bg-[#FFFFF6] flex flex-col gap-[16px]"
                >
                    <div class="flex justify-between items-center">
                        <h4 class="font-semibold">Total</h4>
                        <h3>${{ _total_amount }}</h3>
                    </div>
                    <MainBtn text="Ir a pagar" @click="sendOrder" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductOrder } from "~/types/ProductOrder";
import AmountBtn from "../buttons/AmountBtn.vue";
import MainBtn from "../buttons/MainBtn.vue";
import CloseIcon from "../icons/CloseIcon.vue";

const $store = useStore();

const COSTO_DELIVERY = "$2";

const _show_modal_product = ref(false);

const _total_amount = computed(() =>
    $store.value.reduce((total, ele) => (total = total + ele.subtotal), 2)
);

const _sub_total_amount = computed(() =>
    $store.value.reduce((total, ele) => (total = total + ele.subtotal), 0)
);

function deleteProduct(product_index: number) {
    $store.value.splice(product_index, 1);
}

function armarMensaje(pedido: ProductOrder[]) {
    let pedidoOrdenado: string = "";
    let totalProductos: number = 0;

    pedido.forEach((articulo) => {
        let cantidadArticulo = articulo.amount.toString();
        let precioArticulo = articulo.subtotal.toString();
        let monto = articulo.subtotal.toString();
        totalProductos +=
            articulo.amount + articulo.bebidas.length + articulo.extras.length;

        pedidoOrdenado += `\n${articulo.product.name}  \n ${describirItems(
            articulo.contornos
        )}\n\n ${describirItems(articulo.bebidas)}\n\n ${describirItems(
            articulo.extras
        )}\n
                            $${precioArticulo}            ${cantidadArticulo}             $${monto} \n`;
    });

    return `Rest. Los Cinco Sabores\n
Descripcion   Precio   Cantidad    Monto
${pedidoOrdenado} \n
SERVICIO DELIVERY +$2
MONTO TOTAL: $${_total_amount.value}\n
Cantidad Total de Productos: ${totalProductos}\n
NOTA:\n
Por favor espere que su pedido sea verificado por el Administrador.\n

Datos de Pago movil: \n
Tlf: 0414-8942782
CI: 23.917.268 
Bancos: Mercantil 0105`;
}

function sendOrder() {
    const MENSAJE = armarMensaje($store.value);
    const MENSAJE_ENCODED = encodeURIComponent(MENSAJE);

    console.log(armarMensaje($store.value), MENSAJE_ENCODED);
    window.open(
        `https://api.whatsapp.com/send?phone=584148942782&text=${MENSAJE_ENCODED}+`
    );
}
</script>

<style scoped></style>
