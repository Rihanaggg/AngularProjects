import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSectionComponent } from './product-section/product-section.component';

const routes: Routes = [
  { path: 'productlist', component:ProductListComponent  },
  { path: 'sectionlist/:productId', component: ProductSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
