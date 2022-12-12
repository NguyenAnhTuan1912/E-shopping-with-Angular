export class AccessTokenPayloadModel {
    scope: string;
    sub: string;
    exp: number;
    fullExp: number; // Dev only
    iat?: number;

    constructor({
        scope = '',
        sub = '',
        exp = Math.floor(Date.now() / 1000),
        fullExp = Date.now(),
        iat = 0
    } = {}) {
        this.scope = scope;
        this.sub = sub;
        this.exp = exp;
        this.fullExp = fullExp;
        this.iat = iat;
    }
}

export class IDTokenPayloadModel {
    name: string;
    sub: string;
    exp: number;
    fullExp: number; // Dev only
    iat?: number;

    constructor({
        name = '',
        sub = '',
        exp = Math.floor(Date.now() / 1000),
        fullExp = Date.now(),
        iat = 0
    } = {}) {
        this.name = name;
        this.sub = sub;
        this.exp = exp;
        this.fullExp = fullExp;
        this.iat = iat;
    }
}