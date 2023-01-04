import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProducto } from 'src/app/domain/modelos/Iproduct';
import { IGetProductos } from 'src/app/domain/servicios/IGetProductos';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productos : IProducto[] = []
  public searchProduct !: FormGroup;
  public productFound !:IProducto

  constructor(
    public getServiceProducts: IGetProductos
  ){
    this.searchProduct = this.createSearchProduct()
  }
  

  ngOnInit(): void {
    this.getServiceProducts.getAllProductos().subscribe(
      productos => this.productos =productos
    )
  }


  createSearchProduct (){
    return new FormGroup (
      {
        id : new FormControl ('',[Validators.required])
      }
    )
  }

  onSearch(){
    if(this.searchProduct.valid){
      this.getServiceProducts.getProductobyId(this.searchProduct.value.id).subscribe(
        res => this.productFound =res
      )
    }
  }






}
