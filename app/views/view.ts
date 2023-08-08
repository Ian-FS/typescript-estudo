export abstract class View <T> {

    protected elemento: HTMLElement;
    private escape = false;
    
    constructor(seletor: string, escape?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
            escape ? this.escape = escape : this.escape = false;
        } else {
            throw Error("Seletor não existe no DOM")
        }
        
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