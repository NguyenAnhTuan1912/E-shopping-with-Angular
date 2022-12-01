import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';

import ProductCategories from '../../data/product-categories.json';
import replaceSpecialCharToSpace from '../../utils/replaceSpecialCharToSpace';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() placeHolder: string = '';
  @Input() hasOption: boolean = false;
  @Input() keyOption: string = '';
  @Input() searchConfig: SearchConfig = {
    searchContent: '',
    searchBy: '',
    clearAferSearch: false,
  };

  @ViewChild('searchSelect') selectElemenntRef: ElementRef<HTMLSelectElement>;
  @ViewChild('searchInput') inputElementRef: ElementRef<HTMLInputElement>;

  private resultUrl: string = '/search';
  searchOptions: SearchOption[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.searchConfig.searchContent.toLowerCase() === 'products') {
      const categories: string[] = ProductCategories;
      this.searchOptions = categories.map((category) => ({
        name: replaceSpecialCharToSpace(category, '-'),
        value: category,
      }));
    }
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  onSearchInputEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const searchBy = this.searchConfig.searchBy;
      const inputElement = this.inputElementRef.nativeElement;
      const selectElement = this.selectElemenntRef.nativeElement;
      const searchString = inputElement.value;
      const searchOption = selectElement.value;
      const keyOption = this.keyOption;
      if (searchString === '' && searchOption === '') return;
      this.search(searchString, searchOption, searchBy, keyOption);
      this.checkSearchConfigToClearSearch();
    }
  }

  search(
    searchString: string,
    searchOption: string,
    searchBy?: string,
    keyOption?: string
  ): void {
    if (searchString !== '' && searchOption === '') {
      this.router.navigate([this.resultUrl], {
        queryParams: { [searchBy]: searchString },
      });
    } else if (searchString === '' && searchOption !== '') {
      this.router.navigate([this.resultUrl], {
        queryParams: { [keyOption]: searchOption },
      });
    } else {
      this.router.navigate([this.resultUrl], {
        queryParams: { [searchBy]: searchString, [keyOption]: searchOption },
      });
    }
  }

  checkSearchConfigToClearSearch(): void {
    if (this.searchConfig.clearAferSearch) {
      this.inputElementRef.nativeElement.value = '';
      this.selectElemenntRef.nativeElement.value = '';
    }
  }
}

type SearchConfig = {
  searchContent: string;
  searchBy: string;
  clearAferSearch?: boolean;
};

type SearchOption = {
  name: string;
  value: string;
};
