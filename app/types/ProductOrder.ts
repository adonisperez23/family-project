import type { BaseProduct, Product } from "./Product";

export type ProductOrder = {
    product: Product;
    subtotal: number;
    amount: number;
    contornos: string[];
    bebidas: BaseProduct[];
    extras: BaseProduct[];
};
