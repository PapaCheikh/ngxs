import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductModel } from "../../../Models/product.model"
import { Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { tap } from "rxjs";

export class GetAllProducts {
    static readonly type = '[Product] Get All';
}

export interface ProductStateModel {
    products: ProductModel[] | undefined;
}

@State<ProductStateModel>({
    name: 'Product',
    defaults: {
        products: []
    }
})

@Injectable()
export class ProductState {
    constructor(private _productService: ProductService){}

    @Action(GetAllProducts)
    getAllProduct(ctx: StateContext<ProductStateModel>) {
        console.log('getal');
        
        return this._productService.getProducts().pipe(
            tap((prods) =>{
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    products: prods
                })
            })
        )
    }
    
    @Selector([ProductState])
    static selectProduct(state: ProductStateModel) {
        return state.products
    }
}