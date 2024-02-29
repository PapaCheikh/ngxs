import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetAllProducts } from './Core/store/states/ProductState';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-store-ngxs';

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllProducts);
  }
}
