import { Controller, Get, Inject } from '@nestjs/common';
import type { IAuthRepository } from './domains/auth/domain/auth.repository.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
   // Inyectamos la interfaz (el contrato), no la tecnología (Prisma)
  constructor(
  @Inject('AUTH_REPOSITORY') 
  private readonly authRepository: IAuthRepository, // Aquí es donde usas la interfaz
) {}
    @Get('check-db')
  async checkConnection() {
    try {
      const isAlive = await this.authRepository.healthCheck();
      return { 
        status: 'OK', 
        database: isAlive ? 'Connected' : 'Disconnected' 
      };
    } catch (error: unknown) {
      // Solución al error.message: Validamos si es una instancia de Error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      return { 
        status: 'Error', 
        details: errorMessage 
      };
    }
  }
}