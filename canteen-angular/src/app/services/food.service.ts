import { Injectable } from "@angular/core";

export enum ProductType {
  FirstCourse = "firstCourse",
  MainCourse = "mainCourse",
  Appetizers = "appetizers",
  Beverages = "beverages",
}

//Савелий, добавь в интерфейс цену
//лучше бы чтобы она была числом. Список типов в
//TS: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
//потом обработай её в компоненте food-list.component.ts

export interface IProduct {
  id: string;
  text: string;
  title: string;
  image: string;
  type: ProductType;
}

//пока мы не получаем список еды, сделаем
//структуру прямо в коде
//а так, будет ряд функции на подобии
//db.connect(){} | db.getFoods(): JSON {} | db.close()

//проблемка: как будем апдейтить актуальное меню? Жизненный цикл
//страницы меню обсудим

const foods: IProduct[] = [
  {
    id: "1",
    title: "Пюре с картошкой",
    image: "https://i.ibb.co/hMnJd3G/potato.webp",
    text: "Вкуснейшее пюре с картошкой. И пюре, и картошка.",
    type: ProductType.MainCourse,
  },
  {
    id: "2",
    title: "Рис с отбивной",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.1000.menu%2Fimg%2Fcontent-v2%2F58%2F02%2F25107%2Fplov-iz-burogo-risa-s-kuricei_1592292495_12_max.jpg&f=1&nofb=1&ipt=665af08faaaed20ea4687e17cc9f0bede4d0d604578894a73d10a7c728e0102e&ipo=images",
    text: "Мощнейшая отбивная",
    type: ProductType.MainCourse,
  },
  {
    id: "3",
    title: "Чай",
    image:
      "https://e2.edimdoma.ru/data/ingredients/0000/1200/1200-ed4_wide.jpg?1515760357",
    text: "Это чай. Просто чай",
    type: ProductType.Beverages,
  },
];

@Injectable({
  providedIn: "root",
})

export class FoodsService {
  readonly foods: IProduct[] = foods;

  //получаем конкретный продукт
  getById(id: string) {
    return this.foods.find((p) => p.id === id);
  }

  //для удобного распределения по блокам в компоненте
  //пока тут только разбивка по категориям, хорошо бы
  //реализовать так, чтобы на категории всё разбивалось
  //по требованию ("поиск")
  get byGroup() {
    return this.foods.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
