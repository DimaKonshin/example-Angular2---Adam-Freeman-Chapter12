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

    CheckExpression(id: number): boolean {
        if (this.model.getProduct(id).price < 50)
            return true;
        else if (this.model.getProduct(id).price >= 50)
            return false;
    }

    getClassMap(key: number): Object {

        let product = this.model.getProduct(key);

        return {
            "text-xs-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";
}