# Base image olarak node'un 14 versiyonunu kullan
FROM node:14

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını çalışma dizinine kopyala
COPY package.json /app
COPY package-lock.json /app

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . /app

# Uygulamayı derle
RUN npm run build

# Uygulamayı serve paketi ile servis edeceğiz
RUN npm install -g serve

# 3000 portunu dışa aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["serve", "-s", "build", "-l", "3000"]
