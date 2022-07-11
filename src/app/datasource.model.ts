import { Product } from "./product.model";

export class SimpleDataSource {
    private data: Product[];

    constructor() {
        this.data = new Array<Product>(
            new Product(1, "Kayak", "Doğa sporları", 275),
            new Product(2, "Traking", "Doğa sporları", 48.95),
            new Product(3, "Futbol", "Müsabaka Sporları", 19.50),
            new Product(4, "Basket", "Müsabaka Sporları", 34.95),
            new Product(5, "su topu", "yüzme", 16));
    }

    getData(): Product[] {
        return this.data;
    }
}
