# Dockerfile (seyirlik-fe deposu)

# Aşama 1: Build Aşaması (Üretim sürümünü oluştur)
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Bu adımın çıktısı /app/build/client klasörüne gidiyorsa
RUN npm run build 

# Aşama 2: Serving Aşaması (Hafif bir web sunucusu kullan)
FROM nginx:stable-alpine

# HATA DÜZELTİLDİ: Build aşamasından dosyaları doğru yoldan kopyala
COPY --from=builder /app/build/client /usr/share/nginx/html 
# ^^^^^^^^^^^^^^^^^ Bu kısmı /app/dist yerine /app/build/client yaptık.

# Nginx'i 80 portunda çalıştır
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]