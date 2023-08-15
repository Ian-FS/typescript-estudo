export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const tempoInicial = performance.now()
            metodoOriginal.apply(this, args);
            const tempoFinal = performance.now()
            if(emSegundos) {
                console.log(`${propertyKey}: ${(tempoFinal - tempoInicial)/1000}s`)
            } else {
                console.log(`${propertyKey}: ${tempoFinal - tempoInicial}ms`)
            }
            
        }
        // return descriptor
    }
}