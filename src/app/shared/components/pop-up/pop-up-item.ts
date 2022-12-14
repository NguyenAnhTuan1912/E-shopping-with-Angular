import { Type } from "@angular/core";

export class PopupItem {
    constructor(public component: Type<any>, public data: any) {}
}