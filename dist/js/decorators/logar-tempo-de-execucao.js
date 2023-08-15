export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tempoInicial = performance.now();
            metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            if (emSegundos) {
                console.log(`${propertyKey}: ${(tempoFinal - tempoInicial) / 1000}s`);
            }
            else {
                console.log(`${propertyKey}: ${tempoFinal - tempoInicial}ms`);
            }
        };
    };
}
