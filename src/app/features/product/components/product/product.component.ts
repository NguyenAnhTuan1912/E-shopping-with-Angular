import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ProductService } from '../../../../core/services/product.service';
import { ErrorHandlerService } from '../../../../core/services/error-handler.service';
import { LoggerService } from '../../../../core/services/logger.service';

import ProductCategories from '../../../../shared/data/product-categories.json';
import AppRouterLinkModel from '../../../../shared/models/AppRouterLinkModel';
import ProductModel from '../../../../shared/models/ProductModel';

import getUniqueItemsFromArray from '../../../../shared/utils/getUniqueItemsFromArray';
import replaceSpecialCharToSpace from '../../../../shared/utils/replaceSpecialCharToSpace';
import toTitleCase from '../../../../shared/utils/toTitleCase';
import getPathSegments from '../../../../shared/utils/getPathSegments';

import product_routing_patterns from '../../product-routing.pattern';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnDestroy {
	typeOfProduct: string;
	typeOfProductsView: string = '';
	categories: string[];

	categoryLinks: AppRouterLinkModel[] = [];
	listViewLinks: AppRouterLinkModel[] = [
		{
			name: 'List',
			link: 'list',
		},
		{
			name: 'Table',
			link: 'table',
		},
	];

	routerSubcription: Subscription;
	typeOfViewSubcription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private logger: LoggerService,
		private productService: ProductService,
		private router: Router
	) {
		this.routerSubcription = this.router.events.subscribe(
			(events: NavigationEnd) => {
				if (events instanceof NavigationEnd) {
					const segments = getPathSegments(
						product_routing_patterns['toCategoryOfProduct'],
						events.url
					);
					console.log('Segments view: ', segments.view);
					console.log('Type of view: ', this.typeOfProductsView);
					if (segments.view !== undefined) {
						if (this.typeOfProductsView !== segments.view) {
							console.log(this.typeOfProductsView !== segments.view);
							this.typeOfProductsView = segments.view;
							this.productService.nextTypeOfProductsView(
								this.typeOfProductsView
							);
							this.categories = getUniqueItemsFromArray(
								ProductCategories.map((category) => category)
							);
							this.categoryLinks = this.categories.map((category) => ({
								name: toTitleCase(replaceSpecialCharToSpace(category, '-')),
								link: this.typeOfProductsView + '/' + category,
							}));
							this.categoryLinks.unshift({
								name: 'All',
								link: this.typeOfProductsView,
							});
						}
					} else {
						this.typeOfProductsView = '';
					}
				}
			}
		);
	}

	ngOnInit(): void {
		this.logger.sendLog('Product init.', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
		setTimeout(() => {
			console.log(this.categories);
		}, 0);
	}

	ngOnDestroy(): void {
		this.logger.sendLog('Product destroy', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
		this.routerSubcription.unsubscribe();
	}
}
