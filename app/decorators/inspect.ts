export function inspect(){
    return function (
        target: any,
        propertyKey: string,
        description: PropertyDescriptor
    ) {
        const metodoOriginal = description.value;
        description.value = function (...args: any[]) {

            console.log(
                `
                ------ Método: ${propertyKey}
                ------- Parâmetros: ${JSON.stringify(args)}
                `
            )
            const retorno = metodoOriginal.apply(this, args);
            console.log(JSON.stringify(retorno))
            return retorno
        }
        
        return description
    }
}