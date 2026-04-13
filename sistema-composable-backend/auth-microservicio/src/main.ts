import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// sistema-composable-backend/auth-microservicio/src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitamos CORS para que tu Angular (puerto 4200) pueda hablar con NestJS (puerto 3000)
  app.enableCors();

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Sistema Composable - Auth API')
    .setDescription('Documentación del microservicio de Identidad y Acceso')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth() // Para cuando implementemos JWT
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // URL de acceso: http://localhost:PORT/api/docs

  // Escuchamos en el puerto definido o el 3000, y forzamos el host 0.0.0.0
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();