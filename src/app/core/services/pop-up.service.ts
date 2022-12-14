import { Injectable } from "@angular/core";

@Injectable()
export class PopupService {
    popSuccessFunctionRef: Function;
    popInfoFunctionRef: Function;
    popWarningFunctionRef: Function;
    popErrorFunctionRef: Function;

    constructor() {
        console.log("Popup service is created!");
    }

    popSuccess(data: any): void {
        this.popSuccessFunctionRef(data);
    }

    popInfo(data: any): void {
        this.popInfoFunctionRef(data);
    }

    popWarning(data: any): void {
        this.popWarningFunctionRef(data);
    }

    popError(data: any): void {
        this.popErrorFunctionRef(data);
    }
}