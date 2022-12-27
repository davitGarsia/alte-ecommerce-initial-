import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CartComponent } from './cart/cart.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    CartComponent,
    HeroPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
