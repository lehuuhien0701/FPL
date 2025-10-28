# FIL - Fédération Immobilière du Luxembourg

Dự án React với Tailwind CSS được xây dựng bằng Vite.

## Cấu trúc dự án

```
tailwind-FIL/
├── styles/             # CSS styles
│   └── globals.css    # Global styles với Tailwind
├── app.tsx            # Main App component với tất cả UI
├── main.tsx           # Entry point
├── index.html         # HTML template
├── tailwind.config.ts # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies
```

## Cài đặt

1. **Cài đặt Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Chạy development server:**
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt tại:**
   ```
   http://localhost:5173
   ```

## Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## Tính năng

- ✅ React 18 với TypeScript
- ✅ Vite build tool (nhanh hơn Next.js)
- ✅ Tailwind CSS styling
- ✅ Responsive design
- ✅ Tất cả UI trong 1 file app.tsx
- ✅ Professional color scheme (Navy, Gold, Beige, Sage)
- ✅ Custom SVG icons

## Màu sắc chính

- **Navy**: `#0A2540` - Màu chủ đạo
- **Gold**: `#BBA25A` - Màu nhấn
- **Beige**: `#EDEBE7` - Màu nền
- **Sage**: `#88938F` - Màu phụ

## Sections trong app.tsx

1. **Navigation** - Thanh điều hướng với logo và menu
2. **Hero Section** - Phần giới thiệu chính
3. **Stats Section** - Hiển thị số liệu thống kê
4. **Services Section** - Các dịch vụ với cards
5. **CTA Section** - Call to action
6. **Footer** - Chân trang

## Customization

- Tất cả code UI nằm trong `app.tsx`
- Cấu hình Tailwind trong `tailwind.config.ts`
- Styles global trong `styles/globals.css`

## Production Build

```bash
npm run build
npm run preview
```

## Hỗ trợ

Dự án này sử dụng:
- Vite (build tool nhanh)
- React 18
- TypeScript
- Tailwind CSS 3
- Custom SVG icons