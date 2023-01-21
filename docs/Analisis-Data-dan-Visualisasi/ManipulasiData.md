---
layout: default
title: Perkenalan
parent: Analisis Data dan Visualisasi
nav_order: 2
---

Data yang akan dianalisis menggunakan R perlu di import terlebih dahulu.
+ Mengimpor file CSV (_Comma Separated Value_)
  - Apabila `,` menjadi pembatas antar kolom dan `.` menjadi tanda bilangan desimal, maka gunakan
  ```R
  read.csv(file, header = TRUE, sep = ",",
            quote = "\"", dec = ".", fill = TRUE, comment.char ="", ...)
  ```

+ Mengimpor file Excel
+ Mengimpor file SPSS (.sav)
+ Mengimpor file Stata (.dta)