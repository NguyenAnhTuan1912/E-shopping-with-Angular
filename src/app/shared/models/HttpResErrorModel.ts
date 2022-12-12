export default class HttpResErrorModel {
    type?: string;
    httpStatus: string;
    title: string;
    detail: string;
    instance?: string

    constructor({
        type = '',
        httpStatus = '',
        title = '',
        detail = '',
        instance = ''
    } = {}) {
        this.type = type,
        this.httpStatus = httpStatus,
        this.title = title,
        this.detail = detail,
        this.instance = instance
    }
}