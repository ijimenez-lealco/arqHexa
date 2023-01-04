import { Injectable } from '@angular/core';
import { Observable, of, tap,map } from 'rxjs';
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
      img:'https://img.freepik.com/fotos-premium/juguete-mascotas-rojo-hueso-perro_461160-3947.jpg?w=2000'
    },
    {
      id:2,
      nombre:'Collar',
      precio: 3000,
      img:'https://puppiscolombia.vteximg.com.br/arquivos/ids/183577-1000-1000/collar-para-perro-al-torno-reata-neopleno-color-surtido-1.png?v=637987713449130000'
    },
    {
      id:3,
      nombre:'Pelota',
      precio: 2500,
      img:'https://cf.shopee.com.co/file/f1f5ef546022c4d126b468e652921b3a'
    },
  ]


  constructor() { }

  public getAllProductos(): Observable<IProducto[]> {
    return of(this.data)
  }

//TODO REVISAR ESTA ESTRUCTURA PORQUE ESTOY PERDIDA
  public getProductobyId(id:string): Observable<IProducto> {
    const idNumber = parseInt(id)
    console.log(id)
    return this.getAllProductos().pipe(
      map((productos:IProducto[])=> productos.find((producto:IProducto)=> producto.id === idNumber)
      ),
      tap(console.log)
    )
  }
}
