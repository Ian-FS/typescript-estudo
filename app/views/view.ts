export abstract class View <T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model: T):string;

    update(model: T) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}