/**
 * Entidad que representa al usuario dentro del dominio de identidad.
 * @property {string} id - Identificador único universal (UUID).
 */

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name?: string,
    public readonly password?: string,
    public readonly createdAt?: Date,
  ) {}


}