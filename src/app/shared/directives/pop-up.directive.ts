import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopupDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}