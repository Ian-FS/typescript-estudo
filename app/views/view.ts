export class View <T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: T):string {
        throw Error('Classe filha precisa imprementar o método')
        
    }

    update(model: T) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}