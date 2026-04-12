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

### Gestión de Contenedores
- **Dockerfiles individuales:** Ubicados en cada servicio para definir su entorno de ejecución.
- **Docker Compose:** Ubicado en la raíz para la interconexión de servicios y gestión de volúmenes de datos.

## 🛠️ Notas de Desarrollo
- Antes de iniciar, asegurar que los puertos 3000 y 4200 estén libres.
- Usar `docker-compose down` para liberar recursos al finalizar.

## 🛠️ Gestión de Infraestructura (Docker)

Para garantizar un entorno de desarrollo limpio y evitar conflictos de caché o volúmenes, sigue estos pasos según sea necesario.

### 1. Reinicio Estándar (Flujo Diario)
Utiliza este flujo cuando realices cambios en el código que necesiten ser reflejados en los contenedores.
```bash
# Detener contenedores y eliminar huérfanos
docker-compose down --remove-orphans

# Reconstruir y levantar en segundo plano
docker-compose up --build -d

### 📊 Monitoreo y Debugging (Logs)

Para seguir el rastro de ejecución de los microservicios y la base de datos en tiempo real:

| Comando | Descripción |
| :--- | :--- |
| `docker-compose logs -f` | Ver logs de **todos** los servicios en tiempo real. |
| `docker-compose logs -f auth-api` | Ver logs solo del **Backend** (NestJS). |
| `docker-compose logs -f angular-app` | Ver logs solo del **Frontend** (Nginx). |
| `docker-compose logs -f composable-db` | Ver logs de la **Base de Datos** (Postgres). |

#### 🔍 Tips de Debugging:
* **Filtro de errores:** Si los logs son muy extensos, puedes usar:
  `docker-compose logs auth-api | grep ERROR`
* **Últimas líneas:** Para ver solo lo más reciente (ej. las últimas 50 líneas):
  `docker-compose logs --tail=50 -f auth-api`

### 🛑 Detención de Servicios

Dependiendo de qué tan profunda necesites que sea la limpieza, elige uno de estos comandos:

| Comando | Acción | ¿Qué hace? |
| :--- | :--- | :--- |
| `docker-compose stop` | **Pausar** | Detiene los servicios pero **mantiene** los contenedores creados. |
| `docker-compose down` | **Bajar** | Detiene y **elimina** contenedores y redes internas. Es el estándar. |
| `docker-compose down -v` | **Borrar Todo** | Detiene, elimina contenedores y **borra los volúmenes (Base de Datos)**. |

#### 💡 Cuándo usar cada uno:
* Usa `stop` si vas a volver pronto y no quieres que Docker recree todo.
* Usa `down` al finalizar tu jornada de desarrollo para liberar recursos de RAM/CPU.
* Usa `down -v` solo si necesitas resetear la base de datos desde cero (limpiar tablas y datos).

netstat -ano | findstr :5432

Cambia [PID] por el número que encontraste (ej. 1234)
taskkill /F /PID [PID]

Limpieza de redes "fantasma" en Docker
A veces el puerto está reservado por una red de Docker que no se cerró bien. Limpia las redes con:

Bash
docker network prune -f