export interface IAuthRepository {
  findOneByEmail(email: string): Promise<any>;
  create(data: any): Promise<any>;
  // Aquí defines los métodos genéricos que necesites
}