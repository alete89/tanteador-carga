import { Equipo } from "./Equipo";
import { sha256 } from "js-sha256"

export class Usuario {
    id: number
    username: string
    private passwordHash: string
    equipo: Equipo

    setPasswordHash(password: string) {
        this.passwordHash = sha256(password)
    }
}
