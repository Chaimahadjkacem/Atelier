import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { Product } from './core/model/product';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'product/:id', component:DetailProductsComponent},
  {path:'offres',component:OffresEmploiComponentComponent},
  {path:'articles', component:ArticlesComponentComponent},
  {path:'addProduct', component:FormProductComponent},
  {path:'addPay', component:TemplateDrivenFormComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
