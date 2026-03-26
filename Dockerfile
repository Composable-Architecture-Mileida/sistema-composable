# ETAPA 1: Construcción (Build)
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y construimos
COPY . .
RUN npm run build

# ETAPA 2: Ejecución (Runtime)
FROM node:20-alpine

WORKDIR /app

# Copiamos solo lo necesario desde la etapa de construcción
COPY --from=build /app/dist/sistema-composable ./dist/sistema-composable
COPY --from=build /app/package*.json ./

# Exponemos el puerto del servidor SSR (por defecto 4000 o 4200)
EXPOSE 4200

# Comando para arrancar el servidor de Angular SSR
CMD ["node", "dist/sistema-composable/server/main.server.mjs"]