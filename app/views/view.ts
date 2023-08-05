export abstract class View <T> {

    protected elemento: HTMLElement;
    private escape = false;
    
    constructor(seletor: string, escape?: boolean) {
        this.elemento = document.querySelector(seletor);
        escape ? this.escape = escape : this.escape = false;
    }

    protected abstract template(model: T):string;

    public update(model: T) {
        let template = this.template(model);
        if(this.escape){
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '')
        }
        
        
        this.elemento.innerHTML = template;
    }
}