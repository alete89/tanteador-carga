
export class Set {

    puntosLocal: number = 0
    puntosVisitante: number = 0

    constructor(puntosLocal?: number, puntosVisitante?: number) {
        this.puntosLocal = puntosLocal
        this.puntosVisitante = puntosVisitante

    }

    ganoLocal(a: number) {
        if (a < 4)
            return (this.puntosLocal >= 25) && (this.puntosLocal >= (this.puntosVisitante + 2))
        else {
            return (this.puntosLocal >= 15) && (this.puntosLocal >= (this.puntosVisitante + 2))

        }
    }

    ganoVisitante(a: number) {
        if (a < 4)
            return (this.puntosVisitante >= 25) && (this.puntosVisitante >= (this.puntosLocal + 2))
        else {
            return (this.puntosVisitante >= 15) && (this.puntosVisitante >= (this.puntosLocal + 2))
        }
    }

    static fromJson(setJson) {
        var nuevoSet = Object.assign(new Set(), setJson)
        return nuevoSet
    }
}
