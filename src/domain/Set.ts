
export class Set {

    puntosLocal: number = 0
    puntosVisitante: number = 0
    puntosParaGanar: number

    constructor(puntosLocal?: number, puntosVisitante?: number, puntosParaGanar?: number) {
        this.puntosLocal = puntosLocal
        this.puntosVisitante = puntosVisitante
        this.puntosParaGanar = puntosParaGanar
    }

    ganoLocal() {
        return (this.puntosLocal >= this.puntosParaGanar) && (this.puntosLocal >= (this.puntosVisitante + 2))
    }

    ganoVisitante() {
        return (this.puntosVisitante >= this.puntosParaGanar) && (this.puntosVisitante >= (this.puntosLocal + 2))
    }

    static fromJson(setJson) {
        var nuevoSet = Object.assign(new Set(), setJson)
        return nuevoSet
    }
}
