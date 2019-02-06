export class Equipo {
    nombre: string
    urlEscudo: string


    constructor(init?: Partial<Equipo>) {
        Object.assign(this, init)
    }

    static fromJson(EquipoJson) {
        return Object.assign(new Equipo(), EquipoJson)
    }
}
