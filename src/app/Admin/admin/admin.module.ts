import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './AdminPages/add-product/add-product.component';
import { EditProductComponent } from './AdminPages/edit-product/edit-product.component';
import { ListProductComponent } from './AdminPages/list-product/list-product.component';


@NgModule({
  declarations: [AddProductComponent, EditProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
