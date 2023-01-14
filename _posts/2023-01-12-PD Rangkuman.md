---
layout: post
matkul: persdif
---
## Bentuk Umum

#### Bentuk Derivative 

$$\bbox[5px, border: 2px solid red]{\frac{dy}{dx}=f(x,y)}$$.

#### Bentuk Differensial

$$\bbox[5px, border: 2px solid red]{M(x,y)dx+N(x,y)dy=0}$$.

**Contoh**

Persamaan dalam bentuk derivative

$$\frac{dy}{dx}=2xy$$.

Persamaan dalam dbntuk differensial

$$2xdx+ydy=0$$.

## Persamaan Diferensial Eksak

#### Definisi Diferensial Total

Diberikan $$f$$ fungsi bernilai real atas dua variabel x dan y yang mempunyai turunan partial pertama kontibu pada domain D.

Diferensial total $$dF$$ fungsi $$F$$ didefinisikan sebagai berikut:

$$\bbox[5px, border: 2px solid red]{dF(x,y)=\frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y}dy}$$.

untuk semua $$(x,y) \in D $$.

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

## Persamaan Diferensial Separable

Yaitu persamaan diferensial dalam bentuk
$$\bbox[5px, border: 2px solid red]
{F(x)G(y)dx + f(x)g(y)dy}$$.

#### Solusi PD Separable

Kalikan kedua ruas dengan faktor integrasi $$\bbox[5px, border: 2px solid red]{\frac{1}{f(x)G(y)}}$$ dengan f(x) dan G(y) tdk sama dengan 0. Sehingga didapat $$\bbox[5px, border: 2px solid red]{\frac{F(x)}{f(x)}dx +\frac{g(y)}{G(y)}dy=0}$$

Karena $$\bbox[5px, border: 2px solid red]{\frac{F(x)}{f(x)}dx=0=\frac{g(y)}{G(x)}}$$ maka PD tersebut dapat dicari solusinya.

## Persamaan Diferensial Homogen

Persamaan diferensial **orde satu** $$M(x,y)dx+N(x,y)dy=0$$ dikatakan dalam bentuk derivatif $$\frac{dy}{dx}=f(x,y)$$ maka terdapat suatu fungsi g sedemikian sehingga f(x,y) dapat dinyatakan dalam bentuk $$g(\frac{y}{x})$$