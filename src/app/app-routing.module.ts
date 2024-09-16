import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { ProductsComponent } from './Module/feature/products/products.component';
import { CartComponent } from './Module/feature/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feature/components/product-details/product-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  // {path:"product",component:ProductsComponent},
  {path:":levelOne/:levelTwo/:levelThree",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
