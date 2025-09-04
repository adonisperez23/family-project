import type { ProductOrder } from "~/types/ProductOrder";

export default function (product: ProductOrder) {
    if (product.amount === 1) return;
    else {
        product.amount--;
        product.subtotal -= product.product.price;
    }
}
