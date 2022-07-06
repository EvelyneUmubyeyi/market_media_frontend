import { DealsComponent } from './components/deals/deals.component';
import { FindProductComponent } from './components/find-product/find-product.component';
import { MapSellersComponent } from './components/map-sellers/map-sellers.component';
import { FindSellerComponent } from './components/find-seller/find-seller.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'findSeller', 
    component: FindSellerComponent
  },
  {
    path: 'findSeller/map', 
    component: MapSellersComponent
  },
  {
    path: 'products', 
    component: FindProductComponent
  },
  {
    path: 'deals', 
    component: DealsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
