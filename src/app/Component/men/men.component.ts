import { Component } from '@angular/core';
import { ProductModel } from '../../Models/product.model';
import { ProductService } from '../../Core/services/product.service';
import { Select, Store } from '@ngxs/store';
import { GetAllProducts, ProductState } from '../../Core/store/states/ProductState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [],
  templateUrl: './men.component.html',
})
export class MenComponent {
  products: ProductModel[] = [];
  @Select(ProductState.selectProduct) products$ !: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.products$.subscribe({
      next: (prods) => {
        this.products = prods;
      }
    })
  }
}