import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
	selector: "app",
	templateUrl: "template.html"
})
export class ProductComponent {

	model: Model = new Model();
     targetName: string = "Kayak";
     public selectedProduct: string | undefined;

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }
    getSelectedProduct(product:Product):boolean{
        return product.name===this.selectedProduct;
    }
    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }


}
