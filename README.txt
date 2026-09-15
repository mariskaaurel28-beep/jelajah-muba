# JELAJAH MUBA — Website Kabupaten Musi Banyuasin

## Isi folder
- `index.html` — struktur halaman
- `style.css` — desain/responsif
- `script.js` — data, filter, modal detail, peta, editor, import/export JSON

## Menjalankan di Visual Studio Code
1. Install Visual Studio Code.
2. Extract folder `jelajah-muba`.
3. Buka folder tersebut di VS Code.
4. Install extension **Live Server** (Ritwick Dey).
5. Klik kanan `index.html` → **Open with Live Server**.
6. Website akan terbuka di browser.

## Jika memakai Visual Studio
Website ini adalah static HTML/CSS/JS, jadi tidak membutuhkan ASP.NET.
Bisa dibuka dengan Visual Studio melalui folder project dan file `index.html`.

## Fitur yang sudah tersedia
- Tampilan responsif desktop/tablet/HP.
- Hero, Tentang Muba, statistik, wisata, hotel, kuliner, event.
- Tombol **Selengkapnya** membuka detail.
- Detail berisi deskripsi, alamat, harga, jam, foto, dan tombol Google Maps.
- Search dan filter kategori.
- Event & kegiatan.
- Prestasi.
- Album dokumentasi.
- Peta Google Maps.
- Editor Data: tambah, edit, hapus.
- Export/Import JSON.
- Data editor tersimpan di `localStorage`.

## Penting tentang Editor Data
Versi ini tidak memakai database. Jika data diubah melalui editor, perubahan hanya tersimpan pada browser/perangkat yang melakukan perubahan.

Agar admin dapat mengubah data dan hasilnya langsung terlihat oleh SEMUA pengunjung, langkah berikutnya adalah menghubungkan editor ke database seperti Supabase/Firebase atau membuat backend ASP.NET + SQL Server.

## Data dan foto
Beberapa data harga/jam bersifat dinamis. Konfirmasi langsung sebelum dipublikasikan sebagai informasi resmi.
Foto dari sumber pihak ketiga pada prototype sebaiknya diganti dengan foto milik sendiri, foto berlisensi, atau foto yang memang diizinkan untuk digunakan publik.

## Deploy gratis
### Netlify
1. Buat akun Netlify.
2. Drag & drop folder project.
3. Website langsung memiliki alamat publik.

### GitHub Pages
1. Buat repository GitHub.
2. Upload `index.html`, `style.css`, `script.js`.
3. Settings → Pages → Deploy from branch → pilih `main`.
4. Website bisa diakses publik.

## Data awal yang dimasukkan
Wisata: Danau Ulak Lia, Sekayu Waterfront, Taman Air Serasan Sekate, Manau Kuning, Embung Desa Cinta Bumi, Danau Konger.
Hotel: Hotel Randik, Hotel Grand Ranggonang, Hotel Pelangi, Graha Dirham Home Stay.
Kuliner: Rumah Makan Pagi Sore, Rumah Makan Brunai, Lembah Anai, RM Kukasimura & Travel, Cek Ndul.
Event: Muba Expo, Festival Randik, HUT Kabupaten Musi Banyuasin.
Prestasi: beberapa capaian Muba 2025–2026.
