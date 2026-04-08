import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/database/prisma.service';
import { PrismaAuthRepository } from './infrastructure/persistence/prisma-auth.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'AUTH_REPOSITORY', // Token abstracto
      useClass: PrismaAuthRepository, // Implementación actual (Postgres)
    },
  ],
  exports: ['AUTH_REPOSITORY'],
})
export class AuthModule {}