import { Component, Input } from "@angular/core";
import { IProduct } from "../../services/food.service";
import { RouterLink } from "@angular/router";

//TODO: добавить в интерфейс IProduct цену
//и здесь выводить в т.ч. цену
@Component({
  selector: "app-food-list",
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="mb">{{ title }}</h2>
    <ul class="products">
      @for (food of foods; track food.id) {
        <li class="product-item" [routerLink]="'/product/' + food.id">
          <div class="product-image">
            <img [src]="food.image" [alt]="food.title" />
          </div>
          <div class="product-info">
            <h3>{{ food.title }}</h3>
            <p class="hint">{{ food.text }}</p>
          </div>
        </li>
      }
    </ul>
  `,
})
export class FoodListComponent {
  @Input() title: string;
  @Input() foods: IProduct[];
}
