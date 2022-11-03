import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product.component";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

const routes: Routes = [
     {
        path: 'product',
        component: ProductComponent,
        children: [
            {path:'',component: ProductListComponent},
            {path:':slug',component: ProductDetailComponent}
        ]
     }, 
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})

export class ProductRoutingModule {}