import { IData } from "./IData"
import { IMeta } from "./Imeta"

export interface IServiceStrapi<Type>{
    data:IData<Type>,
    meta:IMeta
}