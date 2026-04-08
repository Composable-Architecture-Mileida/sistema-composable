# ETAPA 1: Construcción (Build)
FROM node:20-alpine AS build-step

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código y compilamos
COPY . .
RUN npm run build -- --configuration production

# ETAPA 2: Servidor de Producción (Nginx)
FROM nginx:1.25-alpine

# Copiamos los archivos compilados desde la etapa anterior
# Nota: La ruta 'dist/sistema-composable/browser' puede variar según tu angular.json
COPY --from=build-step /app/dist/sistema-composable/browser /usr/share/nginx/html

# Exponemos el puerto 80 (estándar de Nginx)
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]