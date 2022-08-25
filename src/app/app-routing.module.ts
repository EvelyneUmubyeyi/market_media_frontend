import { SellerApplicationFormComponent } from './components/seller-application-form/seller-application-form.component';
import { SellerAccountComponent } from './components/seller-account/seller-account.component';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductSellersComponent } from './components/product-sellers/product-sellers.component';
import { SellerProductsComponent } from './components/seller-products/seller-products.component';
import { SellerDescriptionComponent } from './components/seller-description/seller-description.component';
import { DealsComponent } from './components/deals/deals.component';
import { FindProductComponent } from './components/find-product/find-product.component';
import { MapSellersComponent } from './components/map-sellers/map-sellers.component';
import { FindSellerComponent } from './components/find-seller/find-seller.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { CartComponent } from './components/cart/cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SellerApplicationsComponent } from './components/seller-applications/seller-applications.component';
import { SellersListComponent } from './components/sellers-list/sellers-list.component';
import { ApplicationComponent } from './components/application/application.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StockComponent } from './components/stock/stock.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SellerReviewsComponent } from './components/seller-reviews/seller-reviews.component';
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { Login2Component } from './components/login2/login2.component';

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
    component: MapSellersComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'products', 
    component: FindProductComponent
  },
  {
    path: 'deals', 
    component: DealsComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'sellerDescription', 
    component: SellerDescriptionComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'sellerProducts', 
    component: SellerProductsComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'productSellers', 
    component: ProductSellersComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'productDescription', 
    component: ProductDescriptionComponent
  },
  {
    path: 'MyAccount', component: MyAccountComponent,
    children: [
      {path:'MyProfile', component:MyProfileComponent},
      {path:'AccountSettings', component:AccountSettingsComponent},
      {path:'MyCart', component:CartComponent},
      {path:'MyOrders', component:MyOrdersComponent},
   ],
  //  canActivate:[AuthGuard]
  },
  {
    path: 'adminDashboard', component: AdminDashboardComponent,
    children: [
      {path:'SellerApplications', component:SellerApplicationsComponent},
      {path:'SellerProducts', component:SellersListComponent},
   ],
  //  canActivate:[AuthGuard]
  },
  {
    path: 'sellerApplication', 
    component: ApplicationComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'sellerProductsAdmin', 
    component: ProductsListComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'SellerDashboard', component: SellerDashboardComponent,
    children: [
      {path:'', component:DashboardStatsComponent},
      {path:'Account', component:SellerAccountComponent},
      {path:'MyStock', component:StockComponent},
      {path:'MyOrders', component:OrdersComponent},
      {path:'Reviews', component:SellerReviewsComponent},
      {path:'AddStockItem', component: StockItemComponent},
      {path:'EditStockItem', component: StockItemComponent},
   ],
  //  canActivate:[AuthGuard]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'Signup', 
    component: SignupComponent
  },
  {
    path: 'sellerRegistration', 
    component: SellerApplicationFormComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'login2', 
    component: Login2Component,
    // canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
