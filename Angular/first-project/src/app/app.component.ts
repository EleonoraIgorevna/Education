import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products'
import { ProductsService } from './services/products.service';
import { tap, Observable } from 'rxjs';

@Component({
  selector: 'app-root', //название компонента  для шаблона ( все наше приложение находится в данном компоненте)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//
export class AppComponent implements OnInit {
  title = 'first-project';
  // products: IProduct[] = [];
  loading = false
  products$: Observable<IProduct[]>
  term = ""

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false));
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products;
    //   this.loading = false;
    // });

  }






}
