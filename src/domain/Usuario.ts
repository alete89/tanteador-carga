import { Equipo } from "./Equipo";
import { sha256 } from "js-sha256"

export class Usuario {
    id: number
    username: string
    passwordHash: string //private?
    equipo: Equipo

    setPasswordHash(password: string) {
        this.passwordHash = sha256(password)
    }
}
