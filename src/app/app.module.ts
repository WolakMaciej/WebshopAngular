import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductManagerComponent } from './components/admin/product-manager/product-manager.component';
import { LoginComponent } from './components/public/login/login.component';
import { ProductsListComponent } from './components/public/shopping-cart/products-list/products-list.component';
import { ProductComponent } from './components/public/shopping-cart/products-list/product/product.component';
import { FooterComponent } from './components/public/shered/footer/footer.component';
import { NavComponent } from './components/public/shered/nav/nav.component';
import { HeaderComponent } from './components/public/shered/header/header.component';
import { PageNotFoundComponent } from './components/public/shered/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/public/shopping-cart/shopping-cart.component';
import { CartsListComponent } from './components/public/shopping-cart/carts-list/carts-list.component';
import { CartComponent } from './components/public/shopping-cart/carts-list/cart/cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserManagerComponent} from './components/admin/user-manager/user-manager.component';
import {RegisterComponent} from './components/public/register/register.component';
import {OrderManagerComponent} from './components/admin/order-manager/order-manager.component';
import { CartManagerComponent } from './components/admin/cart-manager/cart-manager.component';
import { OrderComponent } from './components/admin/order-manager/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    LoginComponent,
    ProductsListComponent,
    ProductComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    CartsListComponent,
    CartComponent,
    UserManagerComponent,
    RegisterComponent,
    OrderManagerComponent,
    CartManagerComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
