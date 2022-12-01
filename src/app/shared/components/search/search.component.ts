import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Products from '../../data/products.json';
import replaceSpecialCharToSpace from '../../utils/replaceSpecialCharToSpace';

import ProductModel from '../../models/ProductModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchParams: any = {};
  searchParamsKeys: string[] = [];
  products: ProductModel[] = [];
  // Test
  filteredProducts: ProductModel[] = [];

  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.products = Products;
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      this.searchParams = Object.assign({}, params);
      this.searchParamsKeys = Object.keys(this.searchParams);
      this.filteredProducts = this.filter(
        this.searchParamsKeys,
        this.searchParams
      );
    });
  }

  filter(keys: string[], searchParams: any): ProductModel[] {
    let copyOfProducts = [...this.products];
    for (let key of keys) {
      copyOfProducts = copyOfProducts.filter((product) => {
        return product[key]
          .toLowerCase()
          .includes(searchParams[key].toLowerCase());
      });
    }
    console.log(copyOfProducts);
    return copyOfProducts;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
