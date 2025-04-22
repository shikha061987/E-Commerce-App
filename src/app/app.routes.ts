import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [

  { path: 'products', component: ProductListComponent },
  { path: 'details/:id', component: ProductDetailsComponent },

  { path: 'cart', component: CartViewComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }


];
