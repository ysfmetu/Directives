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


}
