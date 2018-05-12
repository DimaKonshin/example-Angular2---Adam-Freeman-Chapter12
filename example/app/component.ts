import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

    getClasses(id: number): string {
        let product = this.model.getProduct(id);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getNameOfProduct(id: number) {

        let product: Product = this.model.getProduct(id);

        return product != null ? product.name : "None";
    }
}