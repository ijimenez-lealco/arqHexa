import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';
import { GetProductosLocalService } from '../../servicios/getProductosLocal/get-productos-local.service';
import { GetProductosStrapiService } from '../../servicios/getProductosStrapi/get-productos-strapi.service';
import { HomeComponent } from './layout/home.component';
import { CardComponent } from './componentes/card/card.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide:IGetProductos,
      useClass:GetProductosStrapiService
    }
  ]
})
export class HomeModule { }
