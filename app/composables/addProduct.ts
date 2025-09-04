import type { ProductOrder } from "~/types/ProductOrder";

export default function (product: ProductOrder) {
    product.amount++;
    product.subtotal += product.product.price;
}
