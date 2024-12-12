import { Component, inject } from "@angular/core";
import { TelegramService } from "../../services/telegram.service";
import { FoodsService } from "../../services/food.service";
import { FoodListComponent } from "../../components/food-list/food-list.component";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [FoodListComponent],
  template: `
    <app-food-list
      title="Горячие блюда"
      subtitle="Вторые блюда"
      [foods]="foods.byGroup['mainCourse']"
    />
    <app-food-list
      title="Напитки"
      subtitle="Чай, какао, соки..."
      [foods]="foods.byGroup['beverages']"
    />
    <app-food-list
      title="Первое блюдо"
      subtitle="Позаголовок для первых блюд"
      [foods]="foods.byGroup['firstCourse']"
    />
    <app-food-list
      title="Перекус"
      subtitle="Чипсы, снэки"
      [foods]="foods.byGroup['appetizers']"
    />
  `,
})
export class MenuComponent {
  telegram = inject(TelegramService);
  foods = inject(FoodsService);

  constructor() {
    this.telegram.MainButton.show();
    console.log(this.foods.byGroup);
  }
}
