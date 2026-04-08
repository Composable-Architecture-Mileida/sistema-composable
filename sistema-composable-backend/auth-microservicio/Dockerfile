# 1. Usamos una imagen ligera de Node.js (v20 es muy estable en 2026)
FROM node:20-alpine

# 2. Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de definición de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# 4. Instalamos las dependencias
# Usamos 'npm install' para asegurar que Prisma v5.22.0 se instale correctamente
RUN npm install

# 5. Generamos el Cliente de Prisma (Paso vital para que funcione el PrismaService)
RUN npx prisma generate

# 6. Copiamos el resto del código fuente
COPY . .

# 7. Compilamos el código TypeScript a JavaScript
RUN npm run build

# 8. Exponemos el puerto que usa NestJS
EXPOSE 3000

# 9. Comando para arrancar la aplicación en modo producción
CMD ["npm", "run", "start:prod"]