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
  public getProductobyId(id: number): Observable<IProducto> {
    throw new Error('Method not implemented.');
  }
}
