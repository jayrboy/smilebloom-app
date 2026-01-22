# Smilebloom App

แอป React สำหรับบันทึก/ติดตามข้อมูลเกี่ยวกับฟันและสุขภาพฟัน (เหมาะสำหรับคุณแม่และคุณหนู) พัฒนาด้วย Vite และเป็น Single Page Application (SPA)

## Tech Stack

- **Framework**: React
- **Build tool**: Vite
- **Routing**: `react-router-dom` (SPA)
- **UI**: MUI (`@mui/material`) + Emotion (`@emotion/react`, `@emotion/styled`)
- **Icons**: `react-icons`
- **Lint**: ESLint

## Requirements

- **Node.js**: แนะนำ Node 20 LTS (อย่างน้อย Node 18+)
- **Package manager**: npm

## Quick Start (ติดตั้งและรันโปรเจกต์)

1) Clone repo

```bash
git clone <repo-url>
cd smilebloom-app
```

2) Install dependencies

```bash
npm install
```

3) Run dev server

```bash
npm run dev
```

จากนั้นเปิด `http://localhost:5173`

## Useful Scripts

- **dev**: รันโหมดพัฒนา

```bash
npm run dev
```

- **build**: สร้างไฟล์ production ไปที่ `dist/`

```bash
npm run build
```

- **preview**: จำลองรัน production build ในเครื่อง

```bash
npm run preview
```

- **lint**: ตรวจ ESLint ทั้งโปรเจกต์

```bash
npm run lint
```

## Project Structure (ภาพรวมโฟลเดอร์)

- `index.html`: HTML entry
- `src/main.jsx`: จุดเริ่ม React + ครอบ `BrowserRouter`
- `src/App.jsx`: กำหนด routes ของแอป
- `src/components/`: หน้าจอ/คอมโพเนนต์หลัก (เช่น `Home`, `Dashboard`, ฯลฯ)
- `src/layout/`: คอมโพเนนต์เชิง layout (เช่น `MobileAppBar`, `DecorativeElements`)
- `src/data/`: ไฟล์ข้อมูลคงที่/seed data (เช่น `smilebloom.js`)
- `src/utils/`: utility functions (เช่น `localStorage.js`)
- `src/assets/`: รูป/สื่อที่ใช้ใน UI
- `src/index.css`: global styles

## Routing (หน้าในแอป)

กำหนดไว้ใน `src/App.jsx`:

- `/` → Home
- `/form` → Form
- `/dashboard` → Dashboard
- `/daily` → Daily
- `/favorites` → Favorites

หมายเหตุ: โปรเจกต์ใช้ `BrowserRouter` ดังนั้นการ refresh หน้า URL ที่ไม่ใช่ `/` ต้องมีการตั้งค่า redirect ฝั่ง hosting (ดูหัวข้อ Deploy)

## Data Persistence (LocalStorage)

โปรเจกต์มี helper สำหรับจัดการผู้ใช้ใน `src/utils/localStorage.js` โดยใช้ key หลักคือ:

- `users`: เก็บเป็น JSON (รองรับทั้ง object เดี่ยวและ array เพื่อ backward compatibility)

ฟังก์ชันที่มีให้ใช้งาน:

- `getUsers()`, `setUsers(users)`
- `addUser(user)`
- `getUserById(id)`
- `getCurrentUser()` (เลือก user ล่าสุดจาก `createdAt`)
- `updateUser(id, updates)`
- `deleteUser(id)`

### Reset ข้อมูล localStorage (ตอนทดสอบ)

- เปิด DevTools → Application → Local Storage → ลบ key `users`
  - หรือรันใน console:

```js
localStorage.removeItem('users')
```

## Deploy (Netlify)

โปรเจกต์เตรียม `netlify.toml` สำหรับ SPA redirect ไว้แล้ว:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Redirects**: `/*` → `/index.html` (เพื่อให้ route ของ SPA ทำงานเมื่อ refresh)

## How to connect Backend (แนวทางเชื่อมต่อ Backend)

ตอนนี้โปรเจกต์ยังไม่กำหนด backend แบบตายตัว แนะนำใช้ Vite environment variables ด้วย prefix `VITE_` เช่น:

1) สร้างไฟล์ `.env.local` (ไม่ควร commit)

```bash
VITE_API_BASE_URL="https://api.example.com"
```

2) เรียกใช้ในโค้ดผ่าน `import.meta.env.VITE_API_BASE_URL`

หมายเหตุ: ถ้าจะใช้ API จริง แนะนำรวมจุดเรียก API ไว้ใน `src/utils/` (เช่น `api.js`) เพื่อให้จัดการง่ายและเป็นมาตรฐานเดียวกันทั้งโปรเจกต์

## Development Workflow (แนะนำสำหรับทีม)

- **ก่อนเปิด PR/ส่งงาน**:
  - รัน `npm run lint`
  - เช็ก route ใหม่ต้องรองรับ SPA (ถ้า deploy แล้ว refresh แล้ว 404 ให้ตรวจ `netlify.toml`)
- **โฟลเดอร์ที่ควรแก้เป็นหลัก**:
  - เพิ่ม/แก้หน้า → `src/components/`
  - เพิ่ม/แก้ layout → `src/layout/`
  - เพิ่ม/แก้ route → `src/App.jsx`
  - เพิ่ม/แก้ storage utils → `src/utils/`

## Troubleshooting

- **เปิดหน้าอื่นแล้วกด Refresh แล้ว 404 (เฉพาะตอน deploy)**:
  - โปรเจกต์เป็น SPA + `BrowserRouter` ต้อง redirect ทุก route กลับไป `index.html`
  - ถ้าใช้ Netlify ให้ตรวจ `netlify.toml` ว่ามี redirect `/*` → `/index.html`
- **รัน `npm install` แล้วแปลก ๆ / dependency เพี้ยน**:
  - ลองลบแล้วติดตั้งใหม่:

```bash
rm -rf node_modules package-lock.json
npm install
```

- **พอร์ตชน (เช่น 5173 ถูกใช้อยู่)**:
  - Vite จะเลือกพอร์ตใหม่ให้อัตโนมัติ หรือปิดโปรเซสที่ใช้พอร์ตเดิมก่อน