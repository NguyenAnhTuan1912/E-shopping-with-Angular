import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-popup',
    template: `
        <div class="pop-up appear">
            <div class="pop-up-sign px-2 {{data.status}}">
                <span class="material-symbols-outlined sign">{{data.status === "success" ? 'check_circle' : data.status}}</span>
            </div>
            <div class="pop-up-content p-2">
                <h4 class="title mb-0">{{(data.status === 'help' ? 'info' : data.status) | titlecase}}: {{data.title}}</h4>
                <p class="detail">{{data.detail}}</p>
            </div>
        </div>
    `,
    styleUrls: ['./pop-up.component.css']
})
export class PopupComponent {
    @Input() data: any;
}