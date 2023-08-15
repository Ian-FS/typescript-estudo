export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.time(propertyKey);
            metodoOriginal.apply(this, args);
            console.timeEnd(propertyKey);
            // console.log(retorno)
        }
        // return descriptor
    }
}