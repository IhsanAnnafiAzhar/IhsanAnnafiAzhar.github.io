---
layout: default
title: Persamaan Diferensial-Eksak
parent: Persamaan Diferensial
---

1. $(3x+2y)dx+(2x+y)dy=0$
   
    + Menentukan apakah PD eksak
  
        $$M(x,y)=3x+2y \ \ \ \ 
        N(x,y)=2x+y$$
        
        $$\begin{align*}
        \text{Eksak ketika } \frac{\partial M}{\partial y} &= \frac{\partial N}{\partial x}\\
        \frac{\partial (3x+2y)}{\partial y}=2 & \ \ \ \frac{\partial (2x+y)}{\partial x}=2
        \end{align*}$$

        Maka PD tersebut merupakan PD eksak
    + Mencari solusi

        $$\begin{split}          
        (3x+2y)dx+(2x+y)dy=0 \\
        3xdx+2ydx+2xdy+ydy=0 \\
        \bbox[5px, border: 1px solid black]{\int 3x dx =\frac{3}{2}x^2 \\ }\\
        \bbox[5px, border: 1px solid black]{\int(2ydx+2xdy)=2\int(ydx+xdy)=2xy}\\
        \bbox[5px, border: 1px solid black]{\int y dy = \frac{1}{2}y^2}\\
        \frac{3}{2}x^2+2xy+\frac{1}{2}y^2=C
        \end{split}$$

2. $(y^2+3)dx+(2xy-4)dy=0$
3. $(2xy+1)dx+(x^2+4y)dy=0$
