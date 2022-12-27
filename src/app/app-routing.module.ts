import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
