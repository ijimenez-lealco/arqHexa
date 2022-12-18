import { IProducto } from "src/app/domain/modelos/Iproduct";

export interface IRespuestaStrapi{
    createdAt:string,
    publishedAt:string,
    updatedAt:string,
    productos: IProducto[]
}