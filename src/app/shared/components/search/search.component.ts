import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import Products from "../../data/products.json";
import replaceSpecialCharToSpace from "../../utils/replaceSpecialCharToSpace";

import ProductModel from "../../models/ProductModel";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/core/services/product.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, OnDestroy {
	searchParams: any = {};
	searchParamsKeys: string[] = [];
	products: ProductModel[] = [];
	// Test
	filteredProducts: ProductModel[] = [];

	routeSubscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService
	) {
		this.products = Products;
		this.routeSubscription = this.route.queryParams.subscribe((params) => {
			let paramsAsString = this.getParamsAsString(params);
			// http://localhost:3010/api/v1.0/search?
			this.productService.searchProductsFromSV(paramsAsString)
			.subscribe((filteredProducts: ProductModel[]) => {
				console.log(filteredProducts);
				this.filteredProducts = filteredProducts;
			});
		});
	}

	getParamsAsString(params: Params) {
		let str = '';
		for(let param in params) {
			str = str + `${param}=${params[param]}` + '&';
		}
		return str;
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
