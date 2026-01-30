# Usa la imagen oficial de Node.js
FROM node:20-alpine

# Crea carpeta de la app dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json primero (mejor caching)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa Express
EXPOSE 3000

# Comando para iniciar el backend
CMD ["node", "index.js"]
