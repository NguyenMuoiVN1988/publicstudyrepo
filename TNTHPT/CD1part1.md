---
layout: default
title: Chuyên đề Phương trình và Bất phương trình
tags: [Phương trình, Bất phương trình, Ôn thi THPT, Lượng giác, Tóm tắt lý thuyết, Ví dụ, Bài tập, Hướng dẫn giải, Ôn thi Đại học, Phương trình mũ, Phương trình lôgarit, Bất phương trình mũ, Bất phương trình lôgarit]
---
# PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH

## Phần Lý thuyết trọng tâm

### PHƯƠNG TRÌNH LƯỢNG GIÁC

#### Phương trình lượng giác cơ bản

#####  Phương trình $\sin(x) = m$ (1)
* Với $|m| \gt 1$, phương trình (1) vô nghiệm.
* Với $|m| \le 1$, gọi $\alpha$ là số thực thuộc đoạn $[-\frac{\pi}{2}; \frac{\pi}{2}]$ sao cho $\sin(\alpha) = m$. Khi đó, ta có:

$\sin(x) = m \Leftrightarrow \sin(x) = \sin(\alpha) \Leftrightarrow \left[ \begin{array}{l} x = \alpha + k2\pi \\ x = \pi - \alpha + k2\pi \end{array} \right. (k \in \mathbb{Z})$.

Chú ý:
* Một số trường hợp đặc biệt:
    * $\sin(x) = 1 \Leftrightarrow x = \frac{\pi}{2} + k2\pi (k \in \mathbb{Z})$
    * $\sin(x) = -1 \Leftrightarrow x = -\frac{\pi}{2} + k2\pi (k \in \mathbb{Z})$
    * $\sin(x) = 0 \Leftrightarrow x = k\pi (k \in \mathbb{Z})$
* Nếu $x$ có đơn vị là độ: $\sin(x) = \sin(a^{\circ}) \Leftrightarrow \begin{bmatrix} x = a^{\circ} + k360^{\circ} \\ x = 180^{\circ} - a^{\circ} + k360^{\circ} \end{bmatrix} (k \in \mathbb{Z})$.

b) Phương trình $\cos(x) = m$ (2)
* Với $|m| > 1$, phương trình (2) vô nghiệm.
* Với $|m| \le 1$, gọi $\alpha$ là số thực thuộc đoạn $[0; \pi]$ sao cho $\cos(\alpha) = m$. Khi đó, ta có:
    $\cos(x) = m \Leftrightarrow \cos(x) = \cos(\alpha) \Leftrightarrow \left[ \begin{array}{l} x = \alpha + k2\pi \\ x = -\alpha + k2\pi \end{array} \right. (k \in \mathbb{Z})$.

Chú ý:
* Một số trường hợp đặc biệt:
    * $\cos(x) = 1 \Leftrightarrow x = k2\pi (k \in \mathbb{Z})$
    * $\cos(x) = -1 \Leftrightarrow x = \pi + k2\pi (k \in \mathbb{Z})$
    * $\cos(x) = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi (k \in \mathbb{Z})$
* Nếu $x$ có đơn vị là độ: $\cos(x) = cos(a^{\circ}) \Leftrightarrow \left[ \begin{array}{l} x = a^{\circ} + k360^{\circ} \\ x = -a^{\circ} + k360^{\circ} \end{array} \right. (k \in \mathbb{Z})$.

c) Phương trình $\tan(x) = m$
* Gọi $\alpha$ là số thực thuộc khoảng $(-\frac{\pi}{2}; \frac{\pi}{2})$ sao cho $\tan(\alpha) = m$. Khi đó, ta có:
* Khi đó, ta có: $\tan(x) = m \Leftrightarrow \tan(x) = \tan(\alpha) \Leftrightarrow x = \alpha + k\pi (k \in \mathbb{Z})$.
* Nếu $x$ có đơn vị là độ: $\tan(x) = \tan(a^{\circ}) \Leftrightarrow x = a^{\circ} + k180^{\circ} (k \in \mathbb{Z})$.

d) Phương trình $\cot(x) = m$
* Gọi $\alpha$ là số thực thuộc khoảng $(0; \pi)$ sao cho $\cot(\alpha) = m$. Khi đó, ta có:
* Khi đó, ta có: $\cot(x) = m \Leftrightarrow \cot(x) = \cot(\alpha) \Leftrightarrow x = \alpha + k\pi (k \in \mathbb{Z})$.
* Nếu $x$ có đơn vị là độ: $\cot(x) = \cot(a^{\circ}) \Leftrightarrow x = a^{\circ} + k180^{\circ} (k \in \mathbb{Z})$.

2. Phương trình lượng giác đưa về dạng cơ bản
* $\sin(f(x)) = \sin(g(x)) \Leftrightarrow \left[ \begin{array}{l} f(x) = g(x) + k2\pi \\ f(x) = \pi - g(x) + k2\pi \end{array} \right. (k \in \mathbb{Z})$.
* $\cos(f(x)) = \cos(g(x)) \Leftrightarrow \left[ \begin{array}{l} f(x) = g(x) + k2\pi \\ f(x) = -g(x) + k2\pi \end{array} \right. (k \in \mathbb{Z})$.

---

### PHƯƠNG TRÌNH, BẤT PHƯƠNG TRÌNH MŨ VÀ LÔGARIT

#### Phương trình mũ
Với $a > 0, a \ne 1$ thì:
* $a^{f(x)} = b \Leftrightarrow f(x) = \log_{a}b$ (với $b > 0$).
* $a^{f(x)} = a^{g(x)} \Leftrightarrow f(x) = g(x)$.

#### Phương trình lôgarit
Với $a > 0, a \ne 1$ thì:
* $\log_{a}f(x) = b \Leftrightarrow f(x) = a^{b}$.
* $\log_{a}f(x) = \log_{a}g(x) \Leftrightarrow \begin{cases} f(x) = g(x) \\ f(x)\gt 0 \\ g(x) \gt 0 \end{cases}$.

#### Bất phương trình mũ
Với $a > 0, a \ne 1$:
* Xét bất phương trình $a^{f(x)} > b$:
    * Nếu $b \le 0$, tập nghiệm là tập xác định của $f(x)$.
    * Nếu $b > 0$ và $a > 1$ thì $f(x) > \log_{a}b$.
    * Nếu $b > 0$ và $0 < a < 1$ thì $f(x) < \log_{a}b$.
* Xét bất phương trình $a^{f(x)} > a^{g(x)}$:
    * Nếu $a > 1$ thì $f(x) > g(x)$.
    * Nếu $0 < a < 1$ thì $f(x) < g(x)$.

#### Bất phương trình lôgarit
Với $a > 0, a \ne 1$:
* Xét bất phương trình $\log_{a}f(x) > b$:
    * Nếu $a > 1$ thì $f(x) > a^{b}$.
    * Nếu $0 < a < 1$ thì $0 < f(x) < a^{b}$.
* Xét bất phương trình $\log_{a}f(x) > \log_{a}g(x)$:
    * Nếu $a > 1$ thì $f(x) > g(x) > 0$.
    * Nếu $0 < a < 1$ thì $0 < f(x) < g(x)$.


## Phần Ví dụ

### Dạng 1. Câu trắc nghiệm nhiều phương án lựa chọn

#### Ví dụ 1. 
Nghiệm của phương trình $\sin(x+\frac{\pi}{3})=-\frac{\sqrt{3}}{2}$ là:

A. $x=-\frac{2\pi}{3}+k2\pi$ và $x=\pi+k2\pi(k\in\mathbb{Z})$.

B. $x=-\frac{\pi}{3}+k2\pi$ và $x=\frac{\pi}{3}+k2\pi(k\in\mathbb{Z})$.

C. $x=k2\pi$ và $x=\pi+k2\pi(k\in\mathbb{Z})$.

D. $x=-\frac{\pi}{2}+2k\pi$ và $x=\frac{5\pi}{3}+k2\pi(k\in\mathbb{Z})$.

Lời giải: Chọn A
Ta có: $\sin(x+\frac{\pi}{3})=-\frac{\sqrt{3}}{2} \Leftrightarrow \sin(x+\frac{\pi}{3})=\sin(-\frac{\pi}{3})$
$\Leftrightarrow \left[ \begin{array}{l} x+\frac{\pi}{3} = -\frac{\pi}{3} + k2\pi \\ x+\frac{\pi}{3} = \pi-(-\frac{\pi}{3}) + k2\pi \end{array} \right. \Leftrightarrow \left[ \begin{array}{l} x = -\frac{2\pi}{3} + k2\pi \\ x = \pi + k2\pi \end{array} \right. (k \in \mathbb{Z})$.

#### Ví dụ 2. 
Tổng các nghiệm của phương trình $3^{x^{2}-2x}=81$ là:

A. $4$

B. $-4$

C. $-2$

D. $2$

Lời giải: Chọn D
$3^{x^{2}-2x}=81$ $\Leftrightarrow 3^{x^{2}-2x}=3^{4}$ $\Leftrightarrow x^{2}-2x=4$ $\Leftrightarrow x^{2}-2x-4=0$.
Phương trình có hai nghiệm. Theo định lí Vi-ét, tổng hai nghiệm là $S = -\frac{b}{a} = 2$.

#### Ví dụ 3. 
Nghiệm của phương trình $\log_{16}(x+5)=\frac{1}{2}$ là:

A. $3$

B. $-1$

C. $-3$

D. $27$

Lời giải: Chọn B
Điều kiện: $x+5>0 \Leftrightarrow x>-5$.
$\log_{16}(x+5)=\frac{1}{2}$ $\Leftrightarrow x+5=16^{\frac{1}{2}}$ $\Leftrightarrow x+5=4$ $\Leftrightarrow x=-1$ (thỏa mãn).


### Dạng 2. Câu trắc nghiệm đúng sai

#### Ví dụ 5. 
Cho phương trình $\sin^{2}(2x+\frac{\pi}{4})=\cos^{2}(x+\frac{\pi}{2})$.

| |Mệnh đề | Đúng| Sai |
|---|---|---|---|
|a)| Hạ bậc hai vế, ta được phương trình: $\frac{1-cos(4x+\frac{\pi}{2})}{2}=\frac{1+cos(2x+\pi)}{2}$.| | |
|b)| Ta có: $\cos(2x+\pi)=-\cos(2x)$.| | |
|c)| Phương trình đã cho đưa về dạng: $\cos(4x+\frac{\pi}{2})=\cos(2x)$.| | |
|d)| Nghiệm của phương trình đã cho là: $x=-\frac{\pi}{4}+k\pi$ và $x=\frac{\pi}{12}+k\frac{\pi}{3}(k\in\mathbb{Z})$.| | |

*Lời giải*

a) Hạ bậc hai vế, ta được phương trình: $\frac{1-cos(4x+\frac{\pi}{2})}{2}=\frac{1+cos(2x+\pi)}{2}$.

Công thức hạ bậc: $\sin^2\alpha = \frac{1-cos(2\alpha)}{2}$ và $\cos^2\alpha = \frac{1+cos(2\alpha)}{2}$.
Áp dụng vào phương trình, ta có:
$\frac{1-cos(2(2x+\frac{\pi}{4}))}{2} = \frac{1+cos(2(x+\frac{\pi}{2}))}{2}$
$\Leftrightarrow \frac{1-cos(4x+\frac{\pi}{2})}{2} = \frac{1+cos(2x+\pi)}{2}$.

$\implies$ ĐÚNG

b) Ta có: $\cos(2x+\pi)=-\cos(2x)$.


Áp dụng công thức hơn kém $\pi$: $\cos(\alpha+\pi) = -\cos(\alpha)$.
$\implies$ ĐÚNG

c) Phương trình đã cho đưa về dạng: $\cos(4x+\frac{\pi}{2})=\cos(2x)$.

Từ câu a và b, phương trình trở thành:
$1-\cos(4x+\frac{\pi}{2}) = 1+\cos(2x+\pi)$
$\Leftrightarrow -\cos(4x+\frac{\pi}{2}) = \cos(2x+\pi)$
$\Leftrightarrow -\cos(4x+\frac{\pi}{2}) = -\cos(2x)$
$\Leftrightarrow \cos(4x+\frac{\pi}{2}) = \cos(2x)$.
$\implies$ ĐÚNG

d) Nghiệm của phương trình đã cho là: $x=-\frac{\pi}{4}+k\pi$ và $x=\frac{\pi}{12}+k\frac{\pi}{3}(k\in\mathbb{Z})$.

Từ câu c: $\cos(4x+\frac{\pi}{2})=\cos(2x)$
$\Leftrightarrow \left[ \begin{array}{l} 4x+\frac{\pi}{2} = 2x+k2\pi \\ 4x+\frac{\pi}{2} = -2x+k2\pi \end{array} \right. \Leftrightarrow \left[ \begin{array}{l} 2x = -\frac{\pi}{2}+k2\pi \\ 6x = -\frac{\pi}{2}+k2\pi \end{array} \right. \Leftrightarrow \left[ \begin{array}{l} x = -\frac{\pi}{4}+k\pi \\ x = -\frac{\pi}{12}+k\frac{\pi}{3} \end{array} \right. (k \in \mathbb{Z})$.
So với đáp án, nghiệm thứ hai không khớp.
$\implies$ SAI



### Dạng 3. Câu trắc nghiệm trả lời ngắn

#### Ví dụ 8. 
Hàng ngày mực nước tại một cảng biển lên xuống theo thủy triều. Độ sâu $h$ (m) theo thời gian $t$ (giờ) trong một ngày được cho bởi công thức: $h=16+7\sin(\frac{\pi}{12}t)$ với $0\le t\le24$. Tính thời điểm mà mực nước tại cảng là cao nhất.

Lời giải:
Ta có $-1 \le \sin(\frac{\pi}{12}t) \le 1$.
Do đó $h = 16+7\sin(\frac{\pi}{12}t) \le 16+7(1) = 23$.
Mực nước cao nhất là $h_{max} = 23$ m.
Điều này xảy ra khi $\sin(\frac{\pi}{12}t)=1 \Leftrightarrow \frac{\pi}{12}t=\frac{\pi}{2}+k2\pi \Leftrightarrow t=6+24k$.
Vì $0\le t\le24$, ta chọn $k=0$, suy ra $t=6$.
Trả lời: 6

