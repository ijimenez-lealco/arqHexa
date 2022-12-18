import { Component, OnInit } from '@angular/core';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    public getServiceProducts: IGetProductos
  ){
  }
  ngOnInit(): void {
    console.log('Hola')
    this.getServiceProducts.getAllProductos().subscribe(console.log)
  }

}
