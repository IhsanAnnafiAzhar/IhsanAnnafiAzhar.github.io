---
layout: post
title: Persamaan Diferensial-Rangkuman
---

## Bentuk Umum
#### Bentuk Derivative 

$$\bbox[5px, border: 2px solid red]{\frac{dy}{dx}=f(x,y)}$$

#### Bentuk Differensial

$$\bbox[5px, border: 2px solid red]{M(x,y)dx+N(x,y)dy=0}$$

**Contoh**

Persamaan dalam bentuk derivative

$$\frac{dy}{dx}=2xy$$

Persamaan dalam dbntuk differensial

$$2xdx+ydy=0$$

## Persamaan Diferensial Eksak

#### Definisi Diferensial Total

Diberikan $$f$$ fungsi bernilai real atas dua variabel x dan y yang mempunyai turunan partial pertama kontibu pada domain D.

Diferensial total $$dF$$ fungsi $$F$$ didefinisikan sebagai berikut:

$$\bbox[5px, border: 2px solid red]{dF(x,y)=\frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y}dy}$$

untuk semua $$(x,y) \in D $$

Contoh: $$F(x,y) = xy^2 + 2x^3y$$

Diperoleh

$$\frac{\partial F}{\partial x}=y^2+6x^2y$$ dan $$\frac{\partial F}{\partial y}= 2xy+2x^3$$

sehingga $$dF(x,y)=(y^2+6x^2y)dx+(2xy+2x^3)dy$$

untuk semua (x,y) dalam pasangan bilangan real

#### Definisi Diferensial Total

Bentuk $$\bbox[5px, border: 2px solid red]{M(x,y)dx+N(x,y)dy}$$ disebut persamaan diferensial eksak jika terdapat fungsi F atas dua variabel x dan y sedemikian sehingga bentuk tersebut sama dengan diferensial total dari fungsi tersebut.

#### Ciri-Ciri Diferensial Eksak

Jika $$\bbox[5px, border: 2px solid red]{\frac{\partial M}{\partial y}(x,y)=\frac{\partial N}{\partial x}(x,y)}$$ dengan $$\bbox[5px, border: 2px solid red]{M(x,y)dx+N(x,y)dy=0}$$ maka PD tersebut merupakan PD eksak

#### Faktor Integrasi

Jika terdapat $$\mu (x,y)$$ sedemikian sehingga mengakibatkan PD tidak eksak, menjadi PD eksak atau $$\bbox[5px, border: 2px solid red]{\frac{\partial M}{\partial y}(x,y)\neq \frac{\partial N}{\partial x}(x,y)}$$ menjadi $$\bbox[5px, border: 2px solid red]{\mu (x,y) \frac{\partial M}{\partial y}(x,y) = \mu (x,y) \frac{\partial N}{\partial x}(x,y)}$$ maka $$\mu (x,y)$$ tersebut merupakan faktor integrasi

#### Mencari Faktor Integrasi

$$\bbox[5px, border: 2px solid red]
{\mu (x)= e^{\int{\frac{\frac{\partial M}{\partial y}-\frac{\partial N}{\partial x}}{N}dx}}}$$

atau

$$\bbox[5px, border: 2px solid red]
{\mu (y)= e^{\int{\frac{\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}}{M}dy}}}$$

## Persamaan Diferensial Separable

Yaitu persamaan diferensial dalam bentuk
$$\bbox[5px, border: 2px solid red]
{F(x)G(y)dx + f(x)g(y)dy}$$

#### Solusi PD Separable

Kalikan kedua ruas dengan faktor integrasi $$\bbox[5px, border: 2px solid red]{\frac{1}{f(x)G(y)}}$$ dengan f(x) dan G(y) tdk sama dengan 0. Sehingga didapat $$\bbox[5px, border: 2px solid red]{\frac{F(x)}{f(x)}dx +\frac{g(y)}{G(y)}dy=0}$$

Karena $$\bbox[5px, border: 2px solid red]{\frac{F(x)}{f(x)}dx=0=\frac{g(y)}{G(x)}}$$ maka PD tersebut dapat dicari solusinya.

## Persamaan Diferensial Homogen

Persamaan diferensial **orde satu** $$M(x,y)dx+N(x,y)dy=0$$ dikatakan dalam bentuk derivatif $$\frac{dy}{dx}=f(x,y)$$ maka terdapat suatu fungsi g sedemikian sehingga f(x,y) dapat dinyatakan dalam bentuk $$g(\frac{y}{x})$$

#### Solusi PD Homogen

Dengan perubahan variabel y=vx, akan mentransformasi PD homogen menjadi PD separable dalam variabel x dan v.

## Persamaan Diferensial Linear

Yaitu suatu persamaan diferensial biasa orde satu yang dapat dinyatakan dalam bentuk derivatif

$$\bbox[5px, border: 2px solid red]
{\frac{dy}{dx}+P(x)y=Q(x)}$$

atau dalam bentuk diferensial

$$\bbox[5px, border: 2px solid red]
{[P(x)y-Q(x)]dx+dy=0}$$

## Persamaan Diferensial Bernoulli

Yaitu persamaan diferensial dalam bentuk

$$\bbox[5px, border: 2px solid red]
{\frac{dy}{dx}+P(x)y=Q(x)y^n}$$

## Persamaan Diferensial Orde Tinggi

Persamaan diferensial biasa orde-n dengan x variabel independen dan y variabel dependen adalah persamaan yang dapat dinyatakan dalam bentuk

$$\bbox[5px, border: 2px solid red]
{a_0(x)\frac{d^ny}{dx^n}+a_1(x)\frac{d^{n-1}}{dx^{n-1}}+\cdots+a_{n-1}(x)\frac{dy}{dx}+a_n(x)y=F(x)}$$


dengan $$a_0(x)\neq0$$

Untuk $$F(x)=0$$ disebut dengan PD linear orde-n homogen.

Untuk $$F(x)\neq0$$ disebut dengan PD linear orde-n nonhomogen.

#### Bebas Linear

n buah fungsi, $$f_1,f_2,\cdots,f_n$$ disebut bebas linear pada $$a\leq x\leq b$$ jika hubungan

$$\bbox[5px, border: 2px solid red]{c_1f_1(x)+c_2f_2(x)+\cdots+c_nf_n(x)=0}$$

untuk semua x pada intercal dipenuhi hanya untuk

$$\bbox[5px, border: 2px solid red]{c_1=c_2=\cdots=c_n=0}$$

Jika terdapat $$c_i\neq 0$$ yang memenuhi hubungan tersebut, maka fungsi tersebut dikatakan bergantung linear.

#### Wronskian
Jika

$$\bbox[5px, border: 2px solid red]{
det \begin{bmatrix}
f_1(x) & f_2(x) & \cdots & f_n(x)\\
f^`_1(x) & f^`_2(x) & \cdots & f^`_n(x)\\
         &  \cdots & & \\
f^{n-1}_1(x) & f^{n-1}_2(x) & \cdots & f^{n-1}_n(x)
\end{bmatrix} \neq 0}$$

Maka ke-n fungsi tersebut bebas linear

#### Persamaan Diferensial Orde Tinggi Koefisien Konstan

$$\bbox[5px, border: 2px solid red]
{a_0(x)\frac{d^ny}{dx^n}+a_1(x)\frac{d^{n-1}}{dx^{n-1}}+\cdots+a_{n-1}(x)\frac{dy}{dx}+a_n(x)y=0}$$
Dapat disebut dengan PD linear orde-n homogen

Untuk mencari penyelesaian, dapat digunakan **persamaan karakteristik**, yaitu dengan memisalkan

$$\bbox[5px, border: 2px solid red]{\frac{dy}{dx}=my,\ \ \ \frac{d^2y}{dx^2}=m^2y,\ \ \ \cdots,\ \ \ \frac{d^ky}{dx^k}=m^ky}$$

1. Akar Berlainan
    Misalkan akar-akar yaitu: $$m_1,m_2,\cdots,m_n$$

    Maka diperoleh solusi berbeda, yaitu $$e^{m_1x},e^{m_2x},\cdots,e^{m_nx}$$

    Untuk mengetahui apakah n solusi saling bebas linear, digunakan determinan matriks wronskiannya.

    $$W=det \begin{bmatrix}
    e^{m_1x} & e^{m_2x} & \cdots & e^{m_nx}\\
    m_1e^{m_1x} & m_2e^{m_2x} & \cdots & m_ne^{m_nx}\\
         &  \cdots & & \\
    m_1^{n-1}e^{m_1x} & m^{n-1}_2e^{m_2x} & \cdots & m^{n-1}_ne^{m_1x}
    \end{bmatrix} \neq 0$$

2. Akar Kembar
   + Jika akar persamaan karakteristik m muncul sebanyak k kali, maka solusi umum yang bersesuaian dengan akar adalah

    $$y=(c_1+c_2x+c_3x^2+\cdots+c_kx^{k-1})e^mx$$
   
   + Jika akar-akar kembar yang lain merupakan akar yang berlainan $$m_{k+1},\cdots,m_n$$ maka solusi umumnya adalah

    $$y=(c_1+c_2x+c_3x^2+\cdots+c_kx^{k-1})e^{mx}+c_{k+1}e^{m_{k+1}x}+\cdots+c_ne^{m_nx}$$

   + Jika akar-akar yang lain juga terdapat akar kembar, maka solusi umum yang bersesuaian dengan akar ini dinyatakan ekuivalen dengan cara bagian 1.
   
3. Akar Komplek

    Jika $$m_{1,2}=a\pm bi$$, maka

    $\bbox[5px, border: 2px solid red]{y_1=e^{ax}(c_1\sin(bx)+c_2\cos(bx))}$

    Jika $a+bi$ dan $a-bi$ merupakan akar karakteristik yang berulang k-kali, maka solusi yang bersesuaian adalah

    $$\bbox[5px, border: 2px solid red]
    {\begin{align*}
        y_2=e^{ax} [(c_1+c_2x+\cdots+c_kx^{k-1})&\sin(bx)\\
        +(c_{k+1}+c_{k+2}x+\cdots+c_{2k}x^{k-1})&\cos(bx)] 
    \end{align*}}$$

#### Persamaan Diferensial Orde Tinggi Variasi Parameter

$${a_0(x)\frac{d^ny}{dx^n}+a_1(x)\frac{d^{n-1}}{dx^{n-1}}+\cdots+a_{n-1}(x)\frac{dy}{dx}+a_n(x)y=F(x)}$$

dengan $F(x)\neq 0$ disebut dengan PD nonhomogen.

Solusi umum dari PD Nonhomogen dapat dinyatakan dalam bentuk

$\bbox[5px, border: 2px solid red]{y=y_c+y_p}$

dengan
$y_c$ adalah solusi umum bagian homogen
$y_p$ adalah solusi khusus

$y_c(x)=c_1y_1(x)+c_2y_2(x)$

$y_p(x)=v_1y_1(x)+v_2y_2(x)$

$$v_1(x)=-\int \frac{F(x)y_1(x)}{a_0W[y_1(x),y_2(x)]} dx,\ \ \ \ \ v_2(x)=\int \frac{F(x)y_2(x)}{a_0W[y_1(x),y_2(x)]}dx$$

#### Persamaan Diferensial Orde Tinggi Cauchy-Euler

<div class="table-wrapper" markdown="block">
||UC $function$|UC $set$|
|:-:|:-:|:-:|
|1|$x^n$|$$\{x^n,x^{n-1},x^{n-2},\cdots,x,1\}$$|
|2|$e^{ax}$|$$\{e^{ax}\}$$|
|3|$\sin(bx+c)$ atau $\cos(bx+c)$ |$$\{\sin(bx+c),\cos(bx+c)\}$$|
|4|$x^ne^{ax}$|$$\{x^ne^{ax},x^{n-1}e^{ax},x^{n-2}e^{ax},\cdots,xe^{ax},e^{ax}\}$$|
|5|$x^n\sin(bx_c)$ atau $x^n\cos(bx_c)$|$$\begin{align*} \{ & x^n\sin(bx+c),x^n \cos(bx+c),\\&x^{n-1}\sin(bx+c),x^{n-1}\cos(bx+c),\\ &\cdots,x\sin(bx+c),x\cos(bx+c),\\ &\sin(bx+c),\cos(bx+c)\} \end{align*}$$|
|6|$x^n\sin(bx+c),x^n\cos(bx+c)$|$$\{e^{ax}\sin(bx+c),e^{ax}\cos(bx+c)\}$$|
|7|$x^ne^{ax}\sin(bx_c)$ atau $x^ne^{ax}\cos(bx_c)$|$$\begin{align*} \{ & x^ne^{ax}\sin(bx+c),x^ne^{ax} \cos(bx+c),\\&x^{n-1}e^{ax}\sin(bx+c),x^{n-1}e^{ax}\cos(bx+c),\\ &\cdots,xe^{ax}\sin(bx+c),xe^{ax}\cos(bx+c),\\ &e^{ax}\sin(bx+c),e^{ax}\cos(bx+c)\} \end{align*}$$|

</div>