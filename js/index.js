class Cotizador {
    constructor(modelo, factorvehiculo, factorUbicacion, costoM2) {
        this.modelo = parseInt(modelo)
        this.factorVe = parseFloat(factorvehiculo)
        this.factorUb = parseFloat(factorUbicacion)
        this.costoM2 = parseFloat(costoM2)
    }
    cotizar() {
        let resultado = (this.modelo * this.factorVe * this.factorUb * this.costoM2)
        return resultado.toFixed(2)
    }
}
