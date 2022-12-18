import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProducto } from 'src/app/domain/modelos/Iproduct';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';

@Injectable({
  providedIn: 'root'
})
export class GetProductosLocalService implements IGetProductos {
  private data:IProducto[] =[
    {
      id:1,
      nombre:'Hueso de juguete',
      precio: 2000,
    },
    {
      id:2,
      nombre:'Collar',
      precio: 3000,
    },
    {
      id:3,
      nombre:'Pelota',
      precio: 2500,
    },
  ]


  constructor() { }
  public getAllProductos(): Observable<IProducto[]> {
    return of(this.data)
  }
  public getProductobyId(id:number): Observable<IProducto> {
    throw new Error('Method not implemented.');
  }
}
