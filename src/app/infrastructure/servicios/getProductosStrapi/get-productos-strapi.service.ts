import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IProducto } from 'src/app/domain/modelos/Iproduct';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';
import { HttpClient } from '@angular/common/http';
import { IServiceStrapi } from './domain/IserviceStrapi';
import { IData } from './domain/IData';
import { IRespuestaStrapi } from './domain/IrespuestaStrapi';

@Injectable({
  providedIn: 'root'
})
export class GetProductosStrapiService implements IGetProductos {

  constructor(
    private http: HttpClient
  ) { }
  public getAllProductos(): Observable<IProducto[]> {
    const url = 'http://localhost:1337/api/producto?populate=*'
    return this.http.get<IServiceStrapi<IRespuestaStrapi>>(url).pipe(
      map( (res:IServiceStrapi<IRespuestaStrapi> )=> res.data.attributes.productos),
    )
    
  }
  public getProductobyId(id: string): Observable<IProducto> {
    const idNumber = parseInt(id)
    return this.getAllProductos().pipe(
      tap(console.log),
      map((products:IProducto[])=> products.find((product:IProducto)=> product.id === idNumber)),
      tap(console.log)
    )
  }
}
