import { inspect } from "../decorators/inspect.js";

export abstract class View <T> {

    protected elemento: HTMLElement;
    
    constructor(seletor: string, escape?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error("Seletor não existe no DOM")
        }
        
    }

    protected abstract template(model: T):string;

    public update(model: T) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}