# Tahap 1: Menginstal dependensi
FROM node:20-alpine AS deps
# Menggunakan alpine OS yg kecil untuk mengurangi ukuran Docker image
WORKDIR /app

# Menyalin file daftar pustaka (library) 
COPY package.json package-lock.json ./
# Menginstall deps secara bersih mengikuti version list lock
RUN npm ci

# Tahap 2: Membangun Production (Melakukan bundling proyek Next.js)
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
# Salin seluruh kode aplikasi (ingat, .dockerignore melindungi node_modules bawaan laptop dll)
COPY . .

# Mengeksekusi build yang dioptimalkan "standalone" yang kita setup pada next.config.ts
RUN npm run build

# Tahap 3: Environment untuk Production (Tahap Akhir / Image Akhir yg Ringan)
FROM node:20-alpine AS runner
WORKDIR /app

# Memastian berjalan di lingkungan production
ENV NODE_ENV=production

# Menyalin berkas statis publik (seperti gambar logo, komodo.mp4 dll)
COPY --from=builder /app/public ./public

# Ini keajaiban dari mode "standalone", alih-alih menyalin folder node_modules ber-GigaByte, 
# kita cukup menyalin isi folder khusus ini saja
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
# server.js di-generate secara otomatis oleh next.js ketika build standalone dijalankan
CMD ["node", "server.js"]
