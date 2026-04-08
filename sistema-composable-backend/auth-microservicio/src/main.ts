import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// sistema-composable-backend/auth-microservicio/src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitamos CORS para que tu Angular (puerto 4200) pueda hablar con NestJS (puerto 3000)
  app.enableCors();

  // Escuchamos en el puerto definido o el 3000, y forzamos el host 0.0.0.0
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();