# # 1. Usamos una imagen ligera de Node.js (v20 es muy estable en 2026)
# FROM node:20-alpine

# # 2. Creamos el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # 3. Copiamos los archivos de definición de dependencias
# COPY package*.json ./
# COPY prisma ./prisma/

# # 4. Instalamos las dependencias
# # Usamos 'npm install' para asegurar que Prisma v5.22.0 se instale correctamente
# RUN npm install

# # 5. Generamos el Cliente de Prisma (Paso vital para que funcione el PrismaService)
# RUN npx prisma generate

# # 6. Copiamos el resto del código fuente
# COPY . .

# # 7. Compilamos el código TypeScript a JavaScript
# RUN npm run build

# # 8. Exponemos el puerto que usa NestJS
# EXPOSE 3000

# # 9. Comando para arrancar la aplicación en modo producción
# CMD ["npm", "run", "start:prod"]



# # --- STAGE 1: Build ---
# FROM node:20-alpine AS builder
# WORKDIR /app

# # Instalamos dependencias
# COPY package*.json ./
# COPY prisma ./prisma/
# RUN npm install

# # Copiamos código y compilamos
# COPY . .
# RUN npx prisma generate
# RUN npm run build

# # --- STAGE 2: Run ---
# FROM node:20-alpine AS runner
# WORKDIR /app

# # Copiamos solo lo necesario para la ejecución
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/prisma ./prisma

# EXPOSE 3000
# # Usamos start:prod porque ya tenemos la carpeta dist lista
# CMD ["npm", "run", "start:prod"]

# --- STAGE 1: Build ---
FROM node:20-alpine AS builder
# Instalamos openssl para que Prisma pueda generar el cliente
RUN apk add --no-cache openssl
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install

COPY . .
# Forzamos la generación del cliente específicamente para Alpine (linux-musl)
RUN npx prisma generate
RUN npm run build

# --- STAGE 2: Run ---
FROM node:20-alpine AS runner
# ¡ESTA LÍNEA ES VITAL! Instalamos las librerías de compatibilidad
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["npm", "run", "start:prod"]