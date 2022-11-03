import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [CommonModule,ProductRoutingModule],
    declarations: [ProductComponent, ProductListComponent, ProductDetailComponent]
})

export class ProductModule { }