---
layout: default
title: MatDis
---


## Diberikan n nilai $x_1,\ x_2,\ \dots, x_n$ dengan $x_i \neq x_j, \forall i,j$

Tunjukkan:
1. Rumus iterasi
2. Algoritma
3. Program Pascal dan hasilnya

sedangkan sehingga $x_1 < x_2 < x_3 < \dots < x_n$

### Rumus Iterasi
Masukan: X yang berupa himpunan bilangan
    
Keluaran: X dengan urutan bilangan dari yang terkecil

Proses:

$X= [x_1, x_2, x_3, \dots, x_n]$

Tentukan banyak bilangan yang ingin diurutkan

Masukkan bilangan yang ingin diurutkan

Bandingkan bilangan pada posisi pertama dengan bilangan pada posisi selanjutnya, apabila terdapat bilangan yang lebih kecil daripada bilangan pada pertama, tukar bilangan tersebut dengan bilangan yang terletak pada posisi pertama, dan juga cara yang sama untuk bilangan pada posisi selanjutnya

### Algoritma
    Masukan: X yang berupa himpunan bilangan
    
    Keluaran: X dengan urutan bilangan dari yang terkecil
    
    Proses:
        
    $X= [x_1, x_2, x_3, \dots, x_n]$

    Untuk a <- 1, n-1, lakukan
        Untuk i <- a+1, n, lakukan
            Jika X[i] < X[a], maka
                Letakkan nilai X[i] di variabel s
                Letakkan nilai X[a] = X[i]
                Letakkan nilai variabel s ke X[a]

    Untuk i < 1, n-1 lakukan
        Jika X[i] = X[i+1], maka
            Timpa X[i] dengan nilai pada X[i+1]
            Perkecil ukuran matriks sebanyak 1

    Keluaran berupa deret bilangan yang telah ditentukan


       

### Program Pascal

