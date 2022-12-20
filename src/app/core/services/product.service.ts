import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import environments from 'src/environments/environment';
import ProductModel from '../../shared/models/ProductModel';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private products: ProductModel[] = [];
	private typeOfProductsView: string;
	private typeOfListView: string;
	public productsSubject = new Subject<ProductModel[]>();
	public typeOfProductsViewSubject = new Subject<string>();
	public typeOfListViewSubject = new Subject<string>();

	private ngUnsubscribe = new Subject<void>();

	private apiUrl = '/api/v1.0';

	constructor(private http: HttpClient) {
		this.productObservable = this.productObservable.bind(this);
		this.init();
	}

	init(): void {
		this.productObservable().subscribe((products) => {
			console.log('Get products from subcriber in Data service');
			console.log(products);
			this.setProducts(products);
		});

		this.typeOfProductsViewObservable().subscribe((type) => {
			console.log('Get new type of product');
			console.log(type);
			this.setTypeOfProductsView(type);
		});
	}

	destroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	public productObservable(): Observable<ProductModel[]> {
		return this.productsSubject.asObservable();
	}

	public typeOfProductsViewObservable(): Observable<string> {
		return this.typeOfProductsViewSubject.asObservable();
	}

	public typeOfListViewObservable(): Observable<string> {
		return this.typeOfListViewSubject.asObservable();
	}

	searchProductsFromSV(params: string) {
		const url = `${environments.serverOriginUrl}${this.apiUrl}/search?` + params;
		return this.http.get(url);
	}

	getProductsFromSV() {
		const url = `${environments.serverOriginUrl}${this.apiUrl}/products`;
		return this.http.get(url);
	}

	nextProducts(products: ProductModel[]) {
		console.log('Next products');
		console.log(products);
		this.productsSubject.next(products);
	}

	setProducts(products: ProductModel[]) {
		this.products = [...products];
	}

	getProducts(): ProductModel[] {
		return [...this.products];
	}

	nextTypeOfProductsView(type: string) {
		console.log('Next type of product');
		console.log(type);
		this.typeOfProductsViewSubject.next(type);
	}

	setTypeOfProductsView(type: string) {
		this.typeOfProductsView = type;
	}

	getTypeOfProductsView() {
		return this.typeOfProductsView;
	}

	nextTypeOfListView(type: string) {
		console.log('Next type of list view');
		console.log(type);
		this.typeOfListViewSubject.next(type);
	}

	setTypeOfListView(type: string) {
		this.typeOfListView = type;
	}

	getTypeOfListView() {
		return this.typeOfListView;
	}
}
