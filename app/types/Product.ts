export type Product = {
    name: string;
    price: number;
    img_url: string;
    img_avif_url: string;
};

export type BaseProduct = Pick<Product, "name" | "price">;
