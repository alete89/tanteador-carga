import { Equipo } from "./Equipo";
import { Set } from "./Set";

export class Fecha {
    local: Equipo
    visitante: Equipo
    fechaHoraInicio: Date
    lugar: string
    iniciado: boolean = false
    sets: Array<Set> = [new Set(), new Set(), new Set(), new Set(), new Set({ "puntosParaGanar": 15 })]

    constructor(init?: Partial<Fecha>) {
        Object.assign(this, init)
    }

    setsGanadosLocal() {
        return this.sets.filter(set => set.ganoLocal()).length

    }

    setsGanadosVisitante() {
        return this.sets.filter(set => set.ganoVisitante()).length

    }

    partidoFinalizado() {
        return this.setsGanadosLocal() == 3 || this.setsGanadosVisitante() == 3
    }


    static fromJson(fechaJson) {
        var nuevaFecha = Object.assign(new Fecha(), fechaJson)
        nuevaFecha.fechaHoraInicio = new Date(fechaJson.fechaHoraInicio)
        nuevaFecha.sets = fechaJson.sets.map(Set.fromJson)
        return nuevaFecha
    }
}
