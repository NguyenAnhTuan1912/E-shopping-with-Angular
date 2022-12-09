import {
	Component,
	Input,
	ChangeDetectionStrategy,
	ViewChildren,
	ElementRef,
	AfterViewInit,
	QueryList,
	OnChanges,
	SimpleChanges,
	ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../core/services/logger.service';

import AppRouterLinkModel from '../../models/AppRouterLinkModel';

const defaultRouterLinks: AppRouterLinkModel[] = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Products',
		link: 'products',
	},
];

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnChanges {
	@Input() appRouterLinks: AppRouterLinkModel[] = defaultRouterLinks;
	@Input() text: string;
	@Input() baseUrl: string = '';
	@ViewChild('navBar')
	navBar: ElementRef<HTMLAnchorElement>;
	currentPath: string;

	constructor(private router: Router, private logger: LoggerService) {
		this.logger.sendLog('Navbar on init.', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
		console.log(this.appRouterLinks);
		console.log(this.router.url);
	}

	ngAfterViewInit(): void {
		this.logger.sendLog(
			'Navbar after view init.',
			'log',
			'BOLD_BLUE_TEXT_WHITE_BG'
		);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.logger.sendLog('Navbar on changes.', 'log', 'BOLD_BLUE_TEXT_WHITE_BG');
	}

	onNavBarLinkClick(event: Event): void {
		const target = event.target as HTMLAnchorElement;
		console.log(target.attributes);
		const previousNavBarLink =
			this.navBar.nativeElement.querySelector('a.click');
		if (previousNavBarLink) previousNavBarLink.classList.remove('click');
		target.classList.add('click');
	}
}
