import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { PopupComponent } from "./pop-up.component";
import { PopupDirective } from "../../directives/pop-up.directive";
import { PopupItem } from "./pop-up-item";
import { PopupService } from "src/app/core/services/pop-up.service";

@Component({
    selector: 'app-popup-banner',
    templateUrl: './pop-up-banner.component.html',
    styleUrls: ['./pop-up-banner.component.css']
})
export class PopupBannerComponent implements OnInit, OnDestroy {
    @Input() position: string;
    @ViewChild(PopupDirective, {static: true}) popup: PopupDirective;

    constructor(
        private popupService: PopupService,
        private eleRef: ElementRef
    ) {
        this.createPopup = this.createPopup.bind(this);
        this.popSuccess = this.popSuccess.bind(this);
        this.popInfo = this.popInfo.bind(this);
        this.popWarning = this.popWarning.bind(this);
        this.popError = this.popError.bind(this);

        this.popupService.popSuccessFunctionRef = this.popSuccess;
        this.popupService.popInfoFunctionRef = this.popInfo;
        this.popupService.popWarningFunctionRef = this.popWarning;
        this.popupService.popErrorFunctionRef = this.popError;
    }

    ngOnInit(): void {
        this.eleRef.nativeElement.classList.add(this.position);
    };

    ngOnDestroy(): void {
        this.createClearAllPopup();
    }

    popSuccess(data: any): void {
        const status = 'success';
        return this.createPopup(data, status);
    }

    popInfo(data: any): void {
        const status = 'help';
        return this.createPopup(data, status);
    }

    popWarning(data: any): void {
        const status = 'warning';
        return this.createPopup(data, status);
    }

    popError(data: any): void {
        const status = 'error';
        return this.createPopup(data, status);
    }

    createPopup(rawData: any, status: string): void {
        const popupItem = new PopupItem(PopupComponent, rawData);
        const conponentRef = this.popup.viewContainerRef.createComponent<PopupComponent>(popupItem.component);
        const popupContainer = conponentRef.location.nativeElement.querySelector('.pop-up');
        conponentRef.location.nativeElement.classList.add(this.position);
        conponentRef.instance.data = {...popupItem.data, status: status};
        setTimeout(() => {
            popupContainer.classList.remove('appear');
            setTimeout(() => {conponentRef.destroy()}, 500);
        }, 5000);
    };

    createClearAllPopup(): void {
        this.popup.viewContainerRef.clear();
    };
}