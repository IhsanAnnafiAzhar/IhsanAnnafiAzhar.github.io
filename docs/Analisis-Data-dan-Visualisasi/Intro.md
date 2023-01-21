---
layout: default
title: Perkenalan
parent: Analisis Data dan Visualisasi
nav_order: 1
---

Sebelum memulai menganalisis data, perlu terlebih dahulu mengetahui cara menggunakan R Studio

1. Pertama-tama, buka R Studio
2. Untuk membuat file perintah R baru, klik menu `File` >> `New File` >> `R Script`
3. Pada layar, akan terdapat 4 jendela sebagai berikut
    ![eh](/assets/images/r_layout.png)   
   
   + Jendela bagian kiri memuat kode perintah R yang nantinya akan dikirim ke R untuk di proses, untuk menjalankan kode yang tertulis disini bisa dengan menekan tombol `Ctrl`+`Enter`
   + Jendela bagian kiri bawah memuat perintah-perintah R yang nantinya akan diproses oleh R dan menghasilkan _output_ tertentu. _Output_ dari perintah R bisa di sini dalam bentuk teks, atau bisa dalam bentuk gambar di kolom grafik pada jendela bagian kanan bawah.
   + Jendela bagian kanan atas memuat riwayat dan data-data yang sedang digunakan pada perintah R
   + Jendela bagian kanan bawah memuat grafik, paket yang digunakan, dan beragam lainnya.
    Paket disini digunakan untuk memperluas fungsi R, sehingga R dapat menjalankan perintah lebih banyak.
4. Selanjutnya mengatur folder kerja, hal ini bisa dilakukan dengan menggunakan perintah `setwd`. Contohnya yaitu `setwd("C:/Users/Documents")`. Perintah ini disarankan ditulis pada jendela bagian kiri atas, agar tidak perlu menulis ulang lagi ketika R dibuka ulang.
5. Banyak fungsi yang masih bisa dipelajari, seperti fungsi sebagai kalkulator (`1+1`), namun untuk mempersingkat bisa langsung ke bab selanjutnya.