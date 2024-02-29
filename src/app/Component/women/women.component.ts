import { Component } from '@angular/core';
import { ProductModel } from '../../Models/product.model';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from '../../Core/store/states/ProductState';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.component.html',
})
export class WomenComponent {
  products: ProductModel[] = [];
  @Select(ProductState.selectProduct) products$ !: Observable<ProductModel[]>;

  constructor() { }

  ngOnInit(): void {
    this.products$.subscribe({
      next: (prods) => {
        this.products = prods;
      }
    })
  }
}
