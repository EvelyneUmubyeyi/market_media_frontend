import { SafePipe } from './pipes/safe-url.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { FindSellerComponent } from './components/find-seller/find-seller.component';
import { SellerFiltersComponent } from './components/seller-filters/seller-filters.component';
import { MapSellersComponent } from './components/map-sellers/map-sellers.component';
import { FindProductComponent } from './components/find-product/find-product.component';
import { DealsComponent } from './components/deals/deals.component';
import { AppConfig } from './app.config';
import { SellerDescriptionComponent } from './components/seller-description/seller-description.component';
import { SellerProductsComponent } from './components/seller-products/seller-products.component';
import { ProductSellersComponent } from './components/product-sellers/product-sellers.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CartComponent } from './components/cart/cart.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SellerApplicationsComponent } from './components/seller-applications/seller-applications.component';
import { SellersListComponent } from './components/sellers-list/sellers-list.component';
import { ApplicationComponent } from './components/application/application.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';
import { SellerAccountComponent } from './components/seller-account/seller-account.component';
import { StockComponent } from './components/stock/stock.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SellerReviewsComponent } from './components/seller-reviews/seller-reviews.component';
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component';
import { SellerApplicationFormComponent } from './components/seller-application-form/seller-application-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesComponent,
    HomeComponent,
    SlideShowComponent,
    CallToActionComponent,
    FooterComponent,
    FindSellerComponent,
    SellerFiltersComponent,
    MapSellersComponent,
    FindProductComponent,
    DealsComponent,
    SellerDescriptionComponent,
    SellerProductsComponent,
    ProductSellersComponent,
    ProductDescriptionComponent,
    MyAccountComponent,
    CartComponent,
    MyProfileComponent,
    AccountSettingsComponent,
    MyOrdersComponent,
    AdminDashboardComponent,
    SellerApplicationsComponent,
    SellersListComponent,
    ApplicationComponent,
    ProductsListComponent,
    SellerDashboardComponent,
    SellerAccountComponent,
    StockComponent,
    OrdersComponent,
    SellerReviewsComponent,
    DashboardStatsComponent,
    SellerApplicationFormComponent,
    LoginComponent,
    SafePipe,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
  ],
  providers: [
    AppConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
