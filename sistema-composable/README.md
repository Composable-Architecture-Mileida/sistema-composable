# Sistema Composable - Angular 18 + SSR

Este proyecto implementa una **Arquitectura Desacoplada Orientada a Dominios** siguiendo las mejores prácticas de escalabilidad y mantenibilidad para entornos Cloud y Microservicios.



Interfaz administrativa construida en **Angular 18**.

## 📊 Módulos Principales
- **Dashboard Gerencial:** Generación de reportes (PDF/Excel).
- **Gestión de Usuarios:** Conectado al `auth-microservice`.

## ⚙️ Configuración
- Consumo de API: `http://localhost:3000` (Auth Service)
- Puerto de ejecución: `4200`

## Arquitectura del Proyecto

El sistema está dividido en tres capas principales para asegurar el desacoplamiento:

* **Core (`src/app/core`)**: Contiene la "columna vertebral" de la app. Servicios singleton (Auth), interceptores, guardias y modelos globales. No depende de ninguna feature.
* **Shared (`src/app/shared`)**: El **UI-Kit**. Componentes atómicos (botones, inputs) y utilidades que se usan en todo el proyecto. Son componentes "tontos" (sin lógica de negocio).
* **Features (`src/app/features`)**: Módulos de negocio independientes (Auth, Dashboard, etc.). Cada uno es "composable" y puede ser extraído o modificado sin afectar al resto.

## Stack Tecnológico
- **Angular 18** (Standalone Components & Signals).
- **SSR & Hydration** (Server-Side Rendering para Performance y SEO).
- **Docker** (Contenedores para despliegue consistente).
- **Node.js Proxy** (Comunicación con Microservicios externos).

## Guía de Inicio Rápido

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```
2.  **Correr en desarrollo (con Proxy):**
    ```bash
    npx ng serve
    ```
3.  **Construir para Producción (SSR):**
    ```bash
    npm run build
    ```

## Entorno Docker
Para levantar el entorno completo con Microservicios:
```bash
docker-compose up --build

## 🐳 Orquestación con Docker
Para levantar todo el ecosistema (DB + Back + Front):
```bash
docker-compose up --build