import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
