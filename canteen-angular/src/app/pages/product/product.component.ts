import { Component, OnDestroy, OnInit } from "@angular/core";
import { FoodsService, IProduct } from "../../services/food.service";
import { TelegramService } from "../../services/telegram.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  standalone: true,
  template: `
    <div class="centered">
      <h2 class="mb"> {{ food.title }} </h2>
      <br/>
      <img [src]="food.image" [alt]="food.title" />
      <p>{{food.text}}</p>
    </div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  food: IProduct;

  constructor(
    private foods: FoodsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.food = this.foods.getById(id)
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack)
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.hide();
  }
}
