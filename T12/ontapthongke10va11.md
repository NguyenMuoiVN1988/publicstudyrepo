---
layout: default
title: Ôn tập Thống kê
permalink: /T12/ontapthongke/
---

## Ôn tập thống kê lớp 10 và lớp 11
### Lớp 10:
Học thống kê:
- Dấu hiệu nhận biết
- Tần số
- Bảng thống kê

|Dấu hiệu nhận biết| $x_1$| $x_2$| $\dots$ | $x_n$|
|---|---|---|---|---|
|Tần số| $f_1$| $f_2$| $\dots$ | $f_n$|
|Tần suất| $f_1/n$| $f_2/n$| $\dots$ | $f_n/n$|

- Mốt, số trung bình, số trung vị, phương sai, độ lệch chuẩn, tứ phân vị. (Trong đợt thi đại học thì có bách phân vị)

Nhắc lại:
- Mốt: là giá trị có tần số lớn nhất. (Và bảng chỉ có 1 giá trị có tần số lớn nhất, không xét bảng thống kê có 2 giá trị có tần số lớn nhất)

- Trung bình: $\bar{x}=\dfrac{1}{n}\sum_{i=1}^{n}x_i.f_i$ ($n=f_1+f_2+\dots+f_n$): Ý nghĩa của giá trị trung bình: Quan điểm cá nhân: Các em là học sinh có điểm 5 là điểm trung chia học sinh thành 2 nhóm: 1 nhóm có điểm trung bình lớn hơn 5, 1 nhóm có điểm trung bình nhỏ hơn 5. Điểm 5 sẽ chia học sinh thành 2 nhóm (2 nhóm có số học sinh như nhau). Ngoài ra có thu nhập đầu người bình quân ( chia ra nước phát triển và nước đang phát triển). (Thường thì giá trị trung bình sẽ không chia số đối tượng thành 2 nhóm có số lượng bằng nhau)

- Trung vị: Là giá trị chia nhóm đối tượng thành 2 nhóm có số lượng bằng nhau: Phụ thuộc $n$ chẵn và $n$ lẻ.

- Tứ phân vị: Chia 4 nhóm có số lượng = nhau. Tương tự tự trung vị trong 2 nhóm ở trung vị.


Giá trị bất thường của bảng số liệu (hay điểm bất thường, outlier) là những giá trị trong mẫu số liệu có sự sai khác đáng kể so với các quan sát khác. Những giá trị này có thể do biến động đo lường hoặc lỗi thí nghiệm, và có thể ảnh hưởng đến kết quả phân tích thống kê.
Để xác định giá trị bất thường, người ta thường sử dụng tứ phân vị và khoảng tứ phân vị của mẫu số liệu. Cách phổ biến là:

Tính ba tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu sau khi đã sắp xếp.

Tính khoảng tứ phân vị $\Delta Q = Q_3 - Q_1$.

Giá trị bất thường là các số nhỏ hơn $Q_1 - 1.5\times\Delta Q$ hoặc lớn hơn $Q_3 + 1.5\times\Delta Q$.

Ví dụ, với mẫu số liệu 5,6,9,21,22,23,...,42 có $Q_1=21$, $Q_3=31$, $\Delta Q=10$ thì giới hạn dưới là $21 - 1.5\times10 = 6$ và giới hạn trên là $31 + 1.5\times10 = 46$. Vì vậy, giá trị 5 nhỏ hơn 6 nên được xem là giá trị bất thường.

- Phương sai: $s^2=\dfrac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2$: Ý nghĩa là gì: Bảng thống kê có độ lệch hay không? Phương sai càng lớn thì độ lệch trong bảng thống kê càng lớn (Thống kê về xã hội: cân bằng giàu nghèo: thấy 90% thu nhập nằm trong 1% dân số); điểm tuyển sinh đại học các năm 2024, 2023, có điểm tuyển sinh cao: Đề chưa sát với thực tế của yêu cầu tuyển sinh. (Khó phân loại) 
- Độ lệch chuẩn: $s=\sqrt{s^2}$: bậc 1, phương sai bậc 2, bậc càng cao thì giá trị sẽ thiên về nhóm có các giá trị lớn hơn trung bình.

### Luyện tập

#### Bài 1.
Khoảng biến thiên tổng số giờ nắng trong năm của một tỉnh thành được thống kê từ năm 2006 đến 2019 được cho như sau:

|1884| 1600| 1645| 2049,9| 1913,8 | 1664,1 | 1664,1 | 1846,5 |
|---|---|---|---|---|---|---|---|
|1964,8| 1951| 2023,6| 1996,2| 1699,1| 1845| 2190,4|

Khi đó:

| Mệnh đề | Đúng | Sai |
|---|---|---|
|Số giờ nắng trung bình trong năm là 1826,67 giờ| | |
|Số giờ nắng nhỏ nhất 1600 giờ| | |
|Só giờ nắng lớn nhất là 2190,4 giờ| | |
|Vậy khoảng biến thiên là 520| | |

#### Bài 2.
Cho hai mẫu số liệu A và B được cho dưới dạng tần số như sau:

**Mẫu A:**

| Giá trị | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **Tần số** | 1 | 2 | 3 | 3 | 2 | 4 | 2 | 4 | 1 | 3 | 4 | 2 | 1 | 1 |

**Mẫu B:**

| Giá trị | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **Tần số** | 1 | 0 | 1 | 1 | 2 | 2 | 3 | 5 | 10 | 4 | 2 | 1 | 0 | 1 |

**Khi đó:**

| | **Mệnh đề** | **Đúng** | **Sai** |
|---|---|---|---|
| **(a)** | Với mẫu A ta có: giá trị trung bình $\overline{x}_A$ = 7,27| | |
| **(b)** | Với mẫu B ta có phương sai $s^2_B$ = 6,21| | |
| **(c)** | Với mẫu A ta có độ lệch chuẩn $s_A$ = 2,5.| | |
| **(d)** | Mẫu A có độ phân tán cao hơn mẫu B.| | |

#### Bài 3.
Thực hành việc đo chiều cao (cm) của 40 học sinh nữ khối lớp 10 của một trường Trung học phổ thông, ta được kết quả như sau:

| 154 | 152 | 154 | 151 | 150 | 149 | 153 | 154 | 152 | 152 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 150 | 152 | 150 | 153 | 152 | 156 | 153 | 156 | 105 | 153 |
| 156 | 154 | 154 | 152 | 152 | 154 | 155 | 155 | 153 | 152|
| 156 | 147 | 155 | 154 | 156 | 157 | 149 | 153 | 170 | 154 |

**Khi đó:**

| | **Mệnh đề** | **Đúng** | **Sai** |
| :-: | :--- | :---: | :---: |
| **(a)** | Chiều cao trung bình: $\overline{x}$ = 152,27 cm. | | |
| **(b)** | 170 cm là chiều cao lớn nhất. | | |
| **(c)** | Phương sai: $s^2$ = 65,32 | | |
| **(d)** | Độ lệch chuẩn: $s$ = 8,08. | | |

#### Bài 4.
Một cơ sở chăn nuôi gia cầm tiến hành nuôi thử nghiệm giống gà đẻ trứng mới. Khi gà đẻ cho trứng họ tiến hành khảo sát với 20 quả được cân nặng (gam) như sau:

| 40 | 42 | 36 | 38 | 40 | 42 | 29 | 48 | 43 | 43 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 41 | 41 | 39 | 44 | 45 | 41 | 40 | 39 | 42 | 41 |

**Khi đó:**

| | **Mệnh đề** | **Đúng** | **Sai** |
| :-: | :--- | :---: | :---: |
| **(a)** | Giá trị nhỏ nhất của mẫu là 29 | | |
| **(b)** | Giá trị lớn nhất của mẫu là 48 | | |
| **(c)** | Khoảng tứ phân vị: $\Delta_Q$ = 2. | | |
| **(d)** | Các giá trị bất thường là 29 và 48. | | |

#### Bài 5.
Mẫu số liệu dưới đây thống kê thời gian chờ xe bus (đơn vị: phút) của 10 học sinh ở cùng một bến:

1   4   5   6   8   10   11   12   25

**Khi đó:**

| | **Mệnh đề** | **Đúng** | **Sai** |
| :-: | :--- | :---: | :---: |
| **(a)** | Số trung bình cộng của mẫu số liệu là: $\overline{x}$ = 8,8 (phút) | | |
| **(b)** | Khoảng tứ phân vị của mẫu số liệu là: $\Delta_Q$ = 5 (phút) | | |
| **(c)** | Độ lệch chuẩn của mẫu số liệu là: $s \approx 5,27$ (phút) | | |
| **(d)** | 25 là giá trị bất thường của mẫu số liệu | | |

#### Bài 6.
Hãy tìm khoảng tứ phân vị của các mẫu số liệu sau:

22 22 23 46 31 36 42 47 28

#### Bài 7.
Hãy tìm giá trị ngoại lệ của mẫu số liệu:

38 38 24 47 43 70 22 48 48 37

#### Bài 8.
Cho mẫu số liệu sau:

|Giá trị| 2 | 3 | 4 | 5 | 6|
|---|---|---|---|---|---|
|Tần số| 4 | 2 | 5 | 2 | 6|

Hãy tìm độ lệch chuẩn của mẫu số liệu trên (Kết quả làm tròn đến hàng phần mười).

#### Bài 9.
Hàm lượng Natri (đơn vị mg) trong 100 g một số loại ngũ cốc được cho như sau:

| 0 | 340 | 70 | 140 | 200 | 180 | 210 | 150 | 100 | 130 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 140 | 180 | 190 | 160 | 290 | 50 | 220 | 180 | 200 | 210 |

Có bao nhiêu giá trị bất thường trong mẫu số liệu trên bằng cách sử dụng biểu đồ hộp?

#### Bài 10.
Mẫu số liệu sau cho biết chiều cao (đơn vị cm) của các bạn trong tổ

163 159 172 167 165 168 170 161.

Tìm khoảng biến thiên của mẫu số liệu này.

#### Bài 11.
Có bao nhiêu giá trị bất thường trong mẫu số liệu sau:

5 6 19 21 22 23 24 25 26 27 28 29 30 31 32 33 34 48 49


## Lớp 11:
Bảng thống kê nhóm: dấu hiệu là các nửa đoạn $(a_i,a_{i+1}]$, $a_{i+1}-a_i=d$ là độ dài nhóm (bằng nhau).

- Trung bình, tứ phân vị, phương sai, độ lệch chuẩn.

- Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có tần số lớn nhất.

Giả sử nhóm chứa mốt là $(a_i;a_{i+1}]$, khi đó mốt của mẫu số liệu ghép nhóm, kí hiệu là $M_o$, được xác định bởi công thức:

$M_o=a_i+\dfrac{f_i-f_{i-1}}{2f_i-f_{i-1}-f_{i+1}}.d$

- Chú ý:
  - Nếu không có nhóm kể trước của nhóm chứa mốt thì $f_{i-1}=0$.
  - Nếu không có nhóm kề sau của nhóm chứa mốt thì $f_{i+1}=0$.

#### Các công thức với bảng thống kê không ghép nhóm:
Đối với bảng thống kê không ghép nhóm ta có các công thức:
- Trung bình: $\bar{x}=\dfrac{1}{n}\sum_{i=1}^{n}x_i.f_i$

- Phương sai: $s^2=\dfrac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2$

- Độ lệch chuẩn: $s=\sqrt{s^2}$
 Các công thức: dựa giá trị $x_i$, nhưng trong bảng thống kê ghép nhóm thì giá trị là nửa khoảng (không là 1 con số))

 Để có công thức biến thể, ta cần giá trị đại diện của nhóm. Thường hay chọn giá trị nằm giữa của nhóm: $\dfrac{a_i+a_{i+1}}{2}$.

 Bảng thống kê ghép nhóm:

|Nhóm| $(a_0;a_1]$| $(a_1;a_2]$| $\dots$ | $(a_{n-1};a_n]$|
|---|---|---|---|---|
|Giá trị đại diện| $x_1=\dfrac{a_0+a_1}{2}$| $x_2=\dfrac{a_1+a_2}{2}$| $\dots$ | $x_n=\dfrac{a_{n-1}+a_n}{2}$|
|Tần số| $f_1$| $f_2$| $\dots$ | $f_n$|

- Trung bình: $\bar{x}=\dfrac{1}{n}\sum_{i=1}^{n}x_i.f_i$



**Công thức tứ phân vị: $Q_1, Q_2, Q_3$ là:**

B1. Tạo bảng có tần số tích luỹ:

|Nhóm| $(a_0;a_1]$| $(a_1;a_2]$| $\dots$ | $(a_{n-1};a_n]$|
|---|---|---|---|---|
|Giá trị đại diện| $x_1=\dfrac{a_0+a_1}{2}$| $x_2=\dfrac{a_1+a_2}{2}$| $\dots$ | $x_n=\dfrac{a_{n-1}+a_n}{2}$|
|Tần số| $f_1$| $f_2$| $\dots$ | $f_n$|
|Tần số tích luỹ| $F_1=f_1$| $F_2=f_1+f_2$| $\dots$ | $F_n=f_1+f_2+\dots+f_n$|

Bước 2. Chọn nhóm có tần số tích luỹ $F_i$ sao cho $F_i\geq \dfrac{1}{2}n$, $F_{i-1}<\dfrac{1}{2}n$. (chọn được $i$)

Bước 3. Tính $Q_2$:

$Q_2=a_{i-1}+\dfrac{\dfrac{1}{2}n-F_{i-1}}{f_i}.d$ (Ghi chú: chú ý cách ghi nhóm, nhóm thứ $i$: $(a_{i-1};a_i]$).

Tương tự $Q_1,Q_3$.

Chú ý: 


$\triangle Q=Q_3-Q_1$ gọi là khoảng tứ phân vị.

### Luyện tập
#### Bài 1.
Bảng thống kê sau cho biết thời gian chạy (phút) của 30 vận động viên (VĐV) trong một giải chạy Marathon:

|Thời gian| 129 | 130 | 133 | 134 | 135 | 136 | 138 | 141 | 142 | 143 | 144 | 145 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Số VĐV| 1 | 2 | 1 | 1 | 1 | 2 | 3 | 3 | 4 | 5 | 2 |

Hãy chuyển mẫu số liệu trên sang mẫu số liệu ghép nhóm gồm sáu nhóm có độ dài bằng nhau và bằng 3.
    
#### Bài 2.
Dựa vào bảng tần số mẫu số liệu ghép nhóm sau, hãy tìm tứ phân vị của nó.

|Nhóm| [30;40)| [40;50)| [50;60)| [60;70)| [70;80)| [80;90)|
|---|---|---|---|---|---|---|
|Tần số| 2| 10| 50| 16| 8| 2|

Khi đó:

|Mệnh đề| Đúng| Sai|
|---|---|---|
|**(a)**| Cỡ mẫu của mẫu số liệu là $n=40$| | |
|**(b)**| Tứ phân vị thứ hai của mẫu số liệu ghép nhóm là: $Q_2=45$| | |
|**(c)**| Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là: $Q_1=48$| | |
|**(d)**| Tứ phân vị thứ ba của mẫu số liệu ghép nhóm là: $Q_3=61,5$| | |

#### Bài 3.
Một hãng xe ô tô thống kê lại số lần gặp sự cố về động cơ của 100 chiếc xe cùng loại sau 2 năm sử dụng đầu tiên ở bảng sau:

|Số lần gặp sự cố| [1;2] | [3;4] | [5;6] | [7;8] | [9;10] |
|---|---|---|---|---|---|
|Số xe| 17 | 33  | 25 | 20 | 5 |

Khi đó:

|Mệnh đề| Đúng| Sai|
|---|---|---|
|**(a)**| Cỡ mẫu của mẫu số liệu là $n=100$| | |
|**(b)**| Tứ phân vị thứ hai của mẫu số liệu ghép nhóm là: $Q_2=4,5$| | |
|**(c)**| Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là: $Q_1=1,98$| | |
|**(d)**| Tứ phân vị thứ ba của mẫu số liệu ghép nhóm là: $Q_3=6,5$| | |

#### Bài 4.
Tiền lương tháng của một số nhân viên ở 01 công ty được ghi lại như sau (đơn vị: triệu đồng):

13; 8; 6; 7; 8; 4; 11; 9; 11; 1; 8; 3; 13; 2; 11; 2; 8; 9; 10; 7; 6; 5; 13; 1;
12; 5; 9; 6; 11; 7; 12; 7; 10; 0; 10; 0; 12; 2; 9; 8; 10; 9; 6; 7; 13; 6; 9; 2;

Khi đó:

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse;">
  <tr>
    <th rowspan="2">Mệnh đề</th>
    <th>Đúng</th>
    <th>Sai</th>
  </tr>
  <tr></tr>

  <tr>
    <td><b>(a)</b> Tứ phân vị thứ hai của dãy số liệu là: $Q_2 = 10,8.$</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>(b)</b> Tứ phân vị thứ nhất của dãy số liệu: $Q_1 = 6,05$</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>
      <b>(c)</b> Tổng hợp lại dãy số liệu trên vào bảng tần số ghép nhóm theo mẫu sau:
      <br />
      <table border="1" cellspacing="0" cellpadding="3" style="margin: 5px; border-collapse: collapse;">
        <tr>
          <th>Lương tháng (triệu đồng)</th>
          <td>  [6;8)  </td>
          <td>  [8;10)  </td>
          <td>  [10;12)  </td>
          <td>  [12;14)  </td>
        </tr>
        <tr>
          <th>Số nhân viên</th>
          <td>3</td>
          <td>6</td>
          <td>8</td>
          <td>7</td>
        </tr>
      </table>
    </td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>(d)</b> Ước lượng tứ phân vị của số liệu ở bảng tần số ghép nhóm trên ta được: $Q_2 = 6,75$</td>
    <td></td>
    <td></td>
  </tr>
</table>

#### Bài 5.
Số điểm một cầu thủ ghi được trong 20 trận đấu được cho ở bảng sau:

|25| 23| 21| 13| 8| 14| 15| 18| 22|11|
|---|---|---|---|---|---|---|---|---|---|
|24| 12| 14| 14| 18| 6| 8| 25| 10|11|

Khi đó
<table>
  <tr>
    <th>Mệnh đề</th>
    <th>Đúng</th>
    <th>Sai</th>
  </tr>
  <tr>
    <td><b>(a)</b> Tứ phân vị thứ hai của dãy số liệu là: $Q_2 = 14$</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(b)</b> Tứ phân vị thứ nhất của dãy số liệu là: $Q_1 = 10$</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(c)</b> 
   Bảng thống kê dữ liệu ghép nhóm là:
    <table>
      <tr>
        <th>Điểm số</th>
        <th>[6;10)</th>
        <th>[11;15)</th>
        <th>[16;20)</th>
        <th>[21;25)</th>
      </tr>
      <tr>
        <th>Số trận</th>
        <td>4</td>
        <td>8</td>
        <td>2</td>
        <td>6</td>
      </tr>
    </table>
    </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(d)</b> Ứớc lượng tứ phân vị của số liệu ở bảng tần số ghép nhóm trên ta được tứ phân vị thứ hai của mẫu số liệu là: $Q_2 = 8,25$</td>
    <td> </td>
    <td> </td>
  </tr>
</table>

#### Bài 6.
Cân nặng (kg) của nhóm học sinh trường THPT được tổng hợp dưới bảng sau:

|Cân nặng| [40;45)| [45;50)| [50;55)| [55;60)| [60;65)|
|---|---|---|---|---|---|
|Số học sinh| 7 | 5 | 11 | 5 | 7 |

Hãy tìm trung vị của mẫu số liệu ghép nhóm trên? Kết quả làm tròn đến hàng phần chục.

#### Bài 6.
Tổng hợp tiền lương tháng của một số nhân viên văn phòng được ghi lại như sau (đơn vị: triệu đồng):

|Lương tháng| [6;8)| [8;10)| [10;12)| [12;14)|
|---|---|---|---|---|
|Số nhân viên| 3 | 6 | 8 | 7 |

Hãy ước lượng tứ phân vị thứ nhất của số liệu ở bảng tần số ghép nhóm trên?

#### Bài 7.
Kết quả khảo sát cân nặng của 25 quả cam ở mỗi lô hàng , A B được cho ở bảng sau:

|Cân nặng| [150;155)| [155;160)| [160;165)| [165;170)|
|---|---|---|---|---|
|Số quả cam| 10 | 5 | 7 | 3 |

Khi đó
<table>
  <tr>
    <th>Mệnh đề</th>
    <th>Đúng</th>
    <th>Sai</th>
  </tr>
  <tr>
    <td><b>(a)</b> Giá trị đại diện nhóm [150;155) bằng 152,5</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(b)</b> Cân nặng trung bình của mỗi quả cam ở lô A là: 163,7 (gam).</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(c)</b> Theo số trung bình thì cam ở lô hàng B nặng hơn cam ở lô hàng A.</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(d)</b> Theo số trung bình thì cam ở lô hàng B nặng hơn cam ở lô hàng A.</td>
    <td> </td>
    <td> </td>
  </tr>
</table>

#### Bài 8.
Một nhà nghiên cứu ghi lại thời gian (giờ) sử dụng Facbook của 30 học sinh trong 02 tuần.
Kết quả thu được mẫu số liệu như sau:

|21| 17| 22| 18| 20| 17| 15| 13| 15| 20|
|---|---|---|---|---|---|---|---|---|---|
|15| 12| 18| 17| 25| 17| 21| 15| 12| 18|
|16| 23| 14| 18| 19| 13| 16| 19| 18| 17|

Khi đó

<table>
  <tr>
    <th>Mệnh đề</th>
    <th>Đúng</th>
    <th>Sai</th>
  </tr>
  <tr>
    <td><b>(a)</b> Số giờ trung bình của học sinh trong 02 tuần: 16,37 giờ.</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(b)</b> Tổng hợp kết quả thời gian sử dụng Facbook của học sinh vào bảng tần số ghép nhóm theo mẫu sau:</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(b)</b> 
    <table>
      <tr>
        <th>Số giờ</th>
        <th>[12;15)</th>
        <th>[15;18)</th>
        <th>[18;21)</th>
        <th>[21;24)</th>
        <th>[24;27)</th>
      </tr>
      <tr>
        <th>Giá trị đại diện</th>
        <td>13,5</td>
        <td>16,5</td>
        <td>18,5</td>
        <td>21,5</td>
        <td>24,5</td>
      </tr>
      <tr>
        <th>Số học sinh</th>
        <td>5</td>
        <td>12</td>
        <td>8</td>
        <td>4</td>
        <td>1</td>
      </tr>
    </table>
    </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(c)</b> Nhóm chứa mốt của mẫu số liệu ý (b) là nhóm [15;18)</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><b>(d)</b> Mốt của mẫu số liệu ý (b) bằng 16,91</td>
    <td> </td>
    <td> </td>
  </tr>
</table>


[Về Trang Home](../index.md)
