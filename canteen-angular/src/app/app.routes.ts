import { Routes } from "@angular/router";
import { MenuComponent } from "./pages/menu/menu.component";
import { ProductComponent } from "./pages/product/product.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AccountComponent } from "./pages/account/account.component";

export const routes: Routes = [
  { path: "", component: MenuComponent, pathMatch: "full" },
  { path: "product/:id", component: ProductComponent },
  { path: "cart", component: CartComponent },
  { path: "account", component: AccountComponent },
];
