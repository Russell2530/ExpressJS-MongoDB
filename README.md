# Express.js & MongoDB REST API (Product Management)

Repository ini berisi implementasi RESTful API sederhana untuk manajemen produk menggunakan **Node.js**, **Express.js**, dan **MongoDB** dengan ODM **Mongoose**. Arsitektur proyek menggunakan pola struktur MVC (*Model-View-Controller* / *Routes-Controllers-Models*) yang rapi dan modular.

---

## 🚀 Fitur Utama

- **CRUD Lengkap untuk Produk**:
  - `GET` Semua produk
  - `GET` Detail produk berdasarkan ID
  - `POST` Tambah produk baru
  - `PUT` Update data produk berdasarkan ID
  - `DELETE` Hapus produk berdasarkan ID
- **Validasi Data Schema** menggunakan Mongoose Schema & Model.
- **Auto-reloading** saat pengembangan menggunakan `nodemon`.
- **Struktur Kode Modular** memisahkan Routes, Controllers, dan Models.

---

## 🛠️ Tech Stack & Dependencies

- **Runtime Environment:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) (v5.x)
- **Database:** [MongoDB](https://www.mongodb.com/) (MongoDB Atlas)
- **ODM:** [Mongoose](https://mongoosejs.com/) (v9.x)
- **Dev Tool:** [Nodemon](https://nodemon.io/)

---

## 📁 Struktur Proyek

```text
├── controllers/
│   └── product.controller.js    # Logika bisnis & penanganan request/response
├── models/
│   └── product.models.js        # Schema dan Model data produk (Mongoose)
├── routes/
│   └── product.route.js         # Definisi rute/endpoint produk
├── index.js                     # Entry point aplikasi & koneksi database
├── package.json                 # Metadata proyek & daftar dependensi
└── README.md                    # Dokumentasi proyek
```

---

## 📦 Skema Model Data (Product)

| Field | Tipe Data | Wajib (Required) | Default | Keterangan |
|---|---|---|---|---|
| `name` | String | Ya | - | Nama produk |
| `quantity` | Number | Ya | `0` | Jumlah stok produk |
| `price` | Number | Ya | `0` | Harga produk |
| `image` | String | Tidak | - | URL gambar produk |
| `createdAt` | Date | Otomatis | - | Waktu pembuatan (*timestamps*) |
| `updatedAt` | Date | Otomatis | - | Waktu perubahan terakhir (*timestamps*) |

---

## ⚙️ Panduan Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/Russell2530/ExpressJS-MongoDB.git
cd ExpressJS-MongoDB
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Database (MongoDB)
Pastikan connection string MongoDB pada file `index.js` sudah sesuai dengan koneksi MongoDB Atlas atau local MongoDB Anda:
```javascript
mongoose.connect("<YOUR_MONGODB_CONNECTION_URI>")
```

### 4. Jalankan Aplikasi

- **Mode Pengembangan (Development / Auto-reload):**
  ```bash
  npm run dev
  ```
- **Mode Produksi (Serve):**
  ```bash
  npm run serve
  ```

Server akan aktif dan berjalan di: `http://localhost:3000`

---

## 📡 Dokumentasi Endpoint API

Base URL: `http://localhost:3000`

### 1. Root / Test Server
- **Endpoint:** `GET /`
- **Deskripsi:** Pengecekan status server apakah berjalan dengan baik.
- **Response:**
  ```text
  Hello World from Express!
  ```

---

### 2. Ambil Semua Produk (Get All Products)
- **Endpoint:** `GET /api/products`
- **Status Response:** `200 OK`
- **Contoh Response:**
  ```json
  [
    {
      "_id": "67433c...",
      "name": "Keyboard Mechanical",
      "quantity": 10,
      "price": 450000,
      "image": "https://example.com/keyboard.jpg",
      "createdAt": "2026-11-24T08:00:00.000Z",
      "updatedAt": "2026-11-24T08:00:00.000Z"
    }
  ]
  ```

---

### 3. Ambil Detail Produk Berdasarkan ID
- **Endpoint:** `GET /api/products/:id`
- **Status Response:** `200 OK`
- **Contoh Response:**
  ```json
  {
    "_id": "67433c...",
    "name": "Keyboard Mechanical",
    "quantity": 10,
    "price": 450000,
    "image": "https://example.com/keyboard.jpg",
    "createdAt": "2026-11-24T08:00:00.000Z",
    "updatedAt": "2026-11-24T08:00:00.000Z"
  }
  ```

---

### 4. Tambah Produk Baru (Create Product)
- **Endpoint:** `POST /api/products`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Mouse Gaming Wireless",
    "quantity": 15,
    "price": 250000,
    "image": "https://example.com/mouse.jpg"
  }
  ```
- **Status Response:** `201 Created`
- **Contoh Response:**
  ```json
  {
    "_id": "67433e...",
    "name": "Mouse Gaming Wireless",
    "quantity": 15,
    "price": 250000,
    "image": "https://example.com/mouse.jpg",
    "createdAt": "2026-11-24T08:15:00.000Z",
    "updatedAt": "2026-11-24T08:15:00.000Z"
  }
  ```

---

### 5. Update Produk Berdasarkan ID
- **Endpoint:** `PUT /api/products/:id`
- **Headers:** `Content-Type: application/json`
- **Request Body (Contoh update stok & harga):**
  ```json
  {
    "quantity": 25,
    "price": 240000
  }
  ```
- **Status Response:** `200 OK` (atau `404 Not Found` jika ID tidak ditemukan)
- **Contoh Response:**
  ```json
  {
    "_id": "67433e...",
    "name": "Mouse Gaming Wireless",
    "quantity": 25,
    "price": 240000,
    "image": "https://example.com/mouse.jpg",
    "createdAt": "2026-11-24T08:15:00.000Z",
    "updatedAt": "2026-11-24T08:30:00.000Z"
  }
  ```

---

### 6. Hapus Produk Berdasarkan ID
- **Endpoint:** `DELETE /api/products/:id`
- **Status Response:** `200 OK` (atau `404 Not Found` jika ID tidak ditemukan)
- **Contoh Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

---

## 👤 Author

- GitHub: [@Russell2530](https://github.com/Russell2530)
