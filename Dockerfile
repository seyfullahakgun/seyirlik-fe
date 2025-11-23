# Aşama 1: Build Aşaması (Üretim sürümünü oluştur)
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Vite ile üretimi derle
RUN npm run build

# Aşama 2: Serving Aşaması (Hafif bir web sunucusu kullan)
FROM nginx:stable-alpine

# Build aşamasından statik dosyaları kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx'i 80 portunda çalıştır
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]