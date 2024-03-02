import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"search/:searchItem", component: HomeComponent},
  {path:"tag/:tag", component:HomeComponent},
  {path:'cart-page', component:CartComponent},
  {path:'food/:id',component:FoodPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
