import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/domain/modelos/Iproduct';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productos : IProducto[] = []


  constructor(
    public getServiceProducts: IGetProductos
  ){
  }

  ngOnInit(): void {
    this.getServiceProducts.getAllProductos().subscribe(
      productos => this.productos =productos
    )
  }

}
