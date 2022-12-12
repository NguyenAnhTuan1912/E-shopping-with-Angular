export class NotificationModel {
    title: string;
    detail: string;
    from: string;

    constructor({
        title = '',
        detail = '',
        from = ''
    } = {}) {
        this.detail = detail;
        this.title = title;
        this.from = from;
    }
}