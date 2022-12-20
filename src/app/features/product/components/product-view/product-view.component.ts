import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../../core/services/product.service';
import { ErrorHandlerService } from '../../../../core/services/error-handler.service';
import { LoggerService } from '../../../../core/services/logger.service';

import ProductData from '../../../../shared/data/products.json';
import AppRouterLinkModel from '../../../../shared/models/AppRouterLinkModel';
import ProductModel from '../../../../shared/models/ProductModel';

import getUniqueItemsFromArray from '../../../../shared/utils/getUniqueItemsFromArray';
import replaceSpecialCharToSpace from '../../../../shared/utils/replaceSpecialCharToSpace';
import toTitleCase from '../../../../shared/utils/toTitleCase';
import { HttpClient } from '@angular/common/http';
import environments from 'src/environments/environment';

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
})
export class ProductViewComponent implements OnInit, OnDestroy {
	typeOfProduct!: string;
	typeOfProductsView: string;
	products: ProductModel[];
	categories: string[];
	categoryLinks: AppRouterLinkModel[] = [];

	routeSubcription: Subscription;
	productSubcription?: Subscription;
	typeOfProductsViewSubscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private logger: LoggerService,
		public errorHandler: ErrorHandlerService,
		private http: HttpClient
	) {
		this.routeSubcription = this.route.url.subscribe((data) => {
			console.log('Product view routing');
			console.log(data);
			if (!data[1]) this.typeOfProduct = 'all';
			else this.typeOfProduct = data[1].path;
			if (!this.typeOfProductsView) {
				console.log('CHAWNG TYPE OF PRODUCT VIEW');
				this.typeOfProductsView = this.productService.getTypeOfProductsView();
			}
			if (this.routeSubcription) {
				this.logger.sendLog('How', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
				this.productService.nextProducts(this.productService.getProducts());
			}
		});
		this.typeOfProductsViewSubscription = this.productService
			.typeOfProductsViewObservable()
			.subscribe((type) => {
				if (this.typeOfProductsView !== type) {
					this.typeOfProductsView = type;
				}
			});
		this.products = this.productService.getProducts();
		console.log('Product property of Product component');
		console.log(this.products);
	}

	ngOnInit(): void {
		this.logger.sendLog('Product view init.', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
		// Cái này thay cho việc fetch dữ liệu :))))
		// setTimeout(() => {
		// 	this.productService.nextProducts(ProductData);
		// }, 0);
		this.http.get(`${environments.serverOriginUrl}/api/v1.0/products`)
		.subscribe((products: ProductModel[]) => {
			this.productService.nextProducts(products);
		});

		this.productSubcription = this.productService.productObservable().subscribe(
			(products) => {
				console.log('Get products from data service in Product component.');
				console.log(this.typeOfProduct);
				if (this.typeOfProduct !== 'all') {
					this.products = products.filter(
						(product) => product.category === this.typeOfProduct
					);
				} else {
					this.products = [...products];
				}
			},
			(err) => {
				this.errorHandler.forbidden(err);
			}
		);
	}

	ngAfterViewInit(): void {
		this.logger.sendLog(
			'Product view after view init.',
			'log',
			'BOLD_BLUE_TEXT_WHITE_BG'
		);
	}

	ngOnDestroy(): void {
		this.logger.sendLog(
			'Product view destroy',
			'log',
			'BOLD_BLUE_TEXT_WHITE_BG'
		);
		this.products = [];
		this.routeSubcription.unsubscribe();
		this.productSubcription.unsubscribe();
	}
}
