class Cotizador {
    constructor(modelo, factorvehiculo, factorUbicacion, valor) {
        this.modelo = parseInt(modelo)
        this.factorVe = parseFloat(factorvehiculo)
        this.factorUb = parseFloat(factorUbicacion)
        this.valor = parseFloat(valor)
    }
    cotizar() {
        let resultado = (this.modelo * this.factorVe * this.factorUb * this.valor)
        return resultado.toFixed(2)
    }
}
