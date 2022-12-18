import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';
import { GetProductosLocalService } from '../../servicios/getProductosLocal/get-productos-local.service';
import { GetProductosStrapiService } from '../../servicios/getProductosStrapi/get-productos-strapi.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[
    {
      provide:IGetProductos,
      useClass:GetProductosStrapiService
    }
  ]
})
export class HomeModule { }
