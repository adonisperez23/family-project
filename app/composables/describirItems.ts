import type { BaseProduct } from "~/types/Product";

export default function (items: string[] | BaseProduct[]) {
    const mappedItems = items.map((item) => {
        // 2. Si el elemento es un objeto, lo formatea. Si es un string, lo deja como está.
        if (typeof item === "object" && item !== null) {
            return `${item.name}`; // ej: "Laptop ($1200.00)"
        }
        return item;
    });

    // 3. Une todos los elementos con ", " para crear el string final.
    return mappedItems.join(", ");
}
