import type { ProductOrder } from "~/types/ProductOrder";

export const useStore = () => useState<ProductOrder[]>("store", () => []);
