export function imprimir(...objetos) {
    if (objetos.length === 0)
        throw Error("Use um array que não seja vazio como parametro.");
    console.log(objetos.length);
    objetos.forEach((objeto) => console.log(objeto.paraTexto()));
}
