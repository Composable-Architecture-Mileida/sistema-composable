import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../core/database/prisma.service';
import { IAuthRepository } from '../../domain/auth.repository.interface';

@Injectable()
export class PrismaAuthRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Este es el método que usará el AppController para validar la conexión
  async healthCheck(): Promise<boolean> {
    try {
      // Ejecuta una consulta simple para ver si la DB responde
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (e) {
      return false;
    }
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: any) {
    return this.prisma.user.create({ data });
  }
}