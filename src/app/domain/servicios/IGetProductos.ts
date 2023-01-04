import { Observable } from "rxjs"
import { IProducto } from "../modelos/Iproduct";


export abstract class IGetProductos {
    public abstract getAllProductos():Observable<IProducto[]>
    public abstract getProductobyId(id:string):Observable<IProducto>
}