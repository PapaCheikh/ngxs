import { Component } from '@angular/core';
import { ProductModel } from '../../Models/product.model';
import { ProductService } from '../../Core/services/product.service';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetAllProducts, ProductState } from '../../Core/store/states/ProductState';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.component.html',
})
export class WomenComponent {
  products: ProductModel[] = [];
  @Select(ProductState.selectProduct) products$ !: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    /* this.productService.getProducts()
    .subscribe(products =>this.products = products); */
    this.products$.subscribe({
      next: (prods) => {
        this.store.dispatch(new GetAllProducts);
        this.products = prods;
      }
    })
  }
}
