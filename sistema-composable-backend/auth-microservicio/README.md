# Auth Microservice - Sistema Composable

Microservicio de autenticación construido con NestJS y Prisma ORM.

## Arquitectura
Basado en **Arquitectura de Dominios (DDD)** y diseño agnóstico de base de datos.

## Tecnologías
- **Framework:** NestJS 10+
- **ORM:** Prisma 5.22.0 (Estable)
- **Base de Datos:** PostgreSQL (Preparado para Oracle)

##  Inicio Rápido
1. Instalar dependencias: `npm install`
2. Configurar el archivo `.env`
3. Generar cliente Prisma: `npx prisma generate`
4. Iniciar: `npm run start:dev`