# Belajar React

Repository ini berisi project latihan React + TypeScript menggunakan Vite. Isi project menampilkan contoh penggunaan beberapa library umum dalam ekosistem React.

## Teknologi yang Digunakan

- React 19
- TypeScript
- Vite
- React Router DOM
- React Query (@tanstack/react-query)
- Zustand
- React Hook Form + Zod
- Tailwind CSS + clsx + tailwind-merge
- ESLint

## Fitur Contoh di Project

- Routing halaman dengan `react-router-dom`
  - `/` → Home
  - `/about` → About
  - `/count` → Counter dengan Zustand
  - `/products` → Fetch data produk menggunakan React Query + form validasi dengan React Hook Form & Zod
- Utility class Tailwind dengan helper `cn()` (`clsx` + `tailwind-merge`)
- Konfigurasi provider React Query di level root aplikasi

## Struktur Singkat

```txt
src/
├── App.tsx
├── main.tsx
├── components/providers/ReactQueryProvider.tsx
├── stores/useCountStore.ts
└── lib/utils.ts
```

## Menjalankan Project

Pastikan sudah menginstal Node.js dan pnpm.

1. Install dependency:

```bash
pnpm install
```

2. Jalankan mode development:

```bash
pnpm dev
```

3. Buka di browser:

```txt
http://localhost:5173
```

## Script yang Tersedia

- `pnpm dev` → Menjalankan server development Vite
- `pnpm build` → Type-check (`tsc -b`) lalu build production Vite
- `pnpm lint` → Menjalankan ESLint
- `pnpm preview` → Menjalankan preview hasil build
