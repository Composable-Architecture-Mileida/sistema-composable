# Auth Microservice - Sistema Composable

Microservicio de autenticación construido con NestJS y Prisma ORM.

## Arquitectura
Basado en **Arquitectura de Dominios (DDD)** y diseño agnóstico de base de datos.

## Abstracción de Datos
Se implementó el **Patrón Repositorio** para asegurar que el cambio entre PostgreSQL y Oracle sea transparente.
- Los servicios dependen de interfaces (`IAuthRepository`).
- La persistencia está aislada en la capa de `infrastructure`.

## Tecnologías
- **Framework:** NestJS 10+
- **ORM:** Prisma 5.22.0 (Estable)
- **Base de Datos:** PostgreSQL (Preparado para Oracle)

##  Inicio Rápido
1. Instalar dependencias: `npm install`
2. Configurar el archivo `.env`
3. Generar cliente Prisma: `npx prisma generate`
4. Iniciar: `npm run start:dev`

## Base de Datos
- **Motor:** PostgreSQL 16
- **Acceso local:** localhost:5432
- **Usuario:** dev_user