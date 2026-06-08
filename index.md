---
layout: default
title: "Public Study"
---

<style>
details {
  margin: 8px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}
summary {
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px 16px;
  list-style: none;
  user-select: none;
  color: #333;
  transition: background 0.2s;
}
summary::-webkit-details-marker { display: none; }
summary::before {
  content: "▶ ";
  font-size: 0.75em;
}
details[open] > summary::before {
  content: "▼ ";
}

/* Màu nền cho từng lớp khi đóng */
details:nth-of-type(1)  > summary { background: #fde8e8; } /* Tiểu học  – hồng nhạt  */
details:nth-of-type(2)  > summary { background: #fef3e2; } /* Toán 6    – cam nhạt   */
details:nth-of-type(3)  > summary { background: #fefce8; } /* Toán 7    – vàng nhạt  */
details:nth-of-type(4)  > summary { background: #ecfdf5; } /* Toán 8    – xanh lá    */
details:nth-of-type(5)  > summary { background: #e0f7f4; } /* Toán 9    – xanh ngọc  */
details:nth-of-type(6)  > summary { background: #eff6ff; } /* Toán 10   – xanh dương */
details:nth-of-type(7)  > summary { background: #f5f3ff; } /* Toán 11   – tím nhạt   */
details:nth-of-type(8)  > summary { background: #fdf4ff; } /* Toán 12   – tím lavender*/
details:nth-of-type(9)  > summary { background: #fff1f2; } /* TNTHPT    – đỏ hồng    */
details:nth-of-type(10) > summary { background: #f1f5f9; } /* Tư duy    – xám xanh   */
details:nth-of-type(11) > summary { background: #fef9c3; } /* mục thứ 11 – vàng kem  */

/* Khi mở ra: nền trắng, chữ đen */
details[open] > summary {
  background: #ffffff !important;
  color: #111111;
  border-bottom: 1px solid #e5e7eb;
}
details > div {
  padding: 8px 0 12px 16px;
  background: #ffffff;
}
</style>

---

<details>
<summary>HSA – Đánh giá năng lực ĐHQG Hà Nội</summary>
<div markdown="1">

**Trắc nghiệm tương tác**
- [Đề Minh Họa 2025 – Phần Toán & Xử lí số liệu](HSA/2025MinhHoa.html)

**Chuyên đề ôn tập**

*Chuyên đề 1: Bất phương trình & hệ bất phương trình bậc nhất hai ẩn*
- [Bài giảng: Lý thuyết, ví dụ và quy hoạch tuyến tính](HSA/CDOnTap/CD1/CD1.html)
- [Trắc nghiệm – Đề ôn tập số 01 (13 câu)](HSA/CDOnTap/CD1/TestCD1Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (14 câu)](HSA/CDOnTap/CD1/TestCD1Part2.html)

*Chuyên đề 2: Hàm số bậc hai*
- [Trắc nghiệm – Đề ôn tập số 01 (18 câu)](HSA/CDOnTap/CD2/TestCD2Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD2/TestCD2Part2.html)

</div>
</details>

---

<details>
<summary>Tiểu học</summary>
<div markdown="1">

#### Toán tư duy

**Chuyển động**
- [Câu hỏi 1](Tieuhoc/TuduyQuestion1.md)
- [Câu hỏi 2](Tieuhoc/TuduyQuestion2.md)
- [Câu hỏi 3](Tieuhoc/TuduyQuestion3.md)
- [Câu hỏi 4](Tieuhoc/TuduyQuestion4.md)
- [Câu hỏi 5: Chuyển động – Thời gian](Tieuhoc/TuduyQuestion5.md)
- [Câu hỏi 8: Vận tốc trung bình](Tieuhoc/TuduyQuestion8.md)

**Đếm**
- [Câu hỏi 1](Tieuhoc/TieuHocDemQuestion1.md)
- [Câu hỏi 2](Tieuhoc/TieuHocDemQuestion2.md)

**Khác**
- [Hiệu tỷ: Câu hỏi 1](Tieuhoc/TieuHocHieuTy.md)
- [Tính ngược từ cuối](Tieuhoc/T4CDNguocTuDuoi.md)

#### Toán 5 cơ bản
- [Phiếu luyện tập Tuần 1 và 2](T5/T5CBTuan1and2.html)
- [Phiếu luyện tập Tuần 3 và 4](T5/T5CBTuan3and4.html)

</div>
</details>

---

<details>
<summary>Toán 6</summary>
<div markdown="1">

**Cơ bản**
- [Chương 1: Số tự nhiên](T6/T6TaphopNC.md)
- [Chương 3: Phép cộng và trừ số nguyên](T6/T6C3B2CongTruSoNguyen.html)
- [Luyện tập phân số](T6/T6PhanSo.html)
- [Hình học: Số đo góc](T6/T6HinhHoc.html)

**Nâng cao**
- [Các phép tính về số tự nhiên – Chuyên Toán](T6/T6NCTaiLieuChuyenToan1.html)

</div>
</details>

---

<details>
<summary>Toán 7</summary>
<div markdown="1">

- [Đọc sách cùng học sinh](T7/DocCungHST7.md)

</div>
</details>

---

<details>
<summary>Toán 8</summary>
<div markdown="1">

**Chương 1: Đại số đa thức**
- [Bài 1: Đơn thức](T8/T8C1B1.html)
- [Bài 2: Đa thức](T8/T8C1B2.html)
- [Bài 3: Cộng và trừ đa thức](T8/T8C1B3.html)
- [Bài 4: Nhân đa thức](T8/T8C1B4.html)
- [Bài 5: Chia đa thức](T8/T8C1B5.html)
- [Bài 6: Hằng đẳng thức – Hiệu hai bình phương](T8/T8C1B6.html)

**Hình học**
- [Định lý Thales](T8/thalettheorem.html)
- [Hệ quả định lý Thales](T8/thalesdao.html)

</div>
</details>

---

<details>
<summary>Toán 9</summary>
<div markdown="1">

**Đại số**
- [C1B1: Phương trình và hệ phương trình bậc nhất hai ẩn](T9/C1B1.md)
- [C1B3: Giải bài toán bằng cách lập hệ phương trình](T9/T9C1Ba3.md)
- [C3B5: Rút gọn căn thức và các ý phụ](T9/T9C3B5.html)

**Trắc nghiệm tương tác**
- [C1 – Chủ đề 1: Phương trình quy về bậc nhất (29 câu)](T9/TN/T9TNC1B1CD1_quiz.html)
- [C1 – Chủ đề 2: Phương trình bậc nhất 2 ẩn](T9/TN/T9TNC1B1CD2_quiz.html)

**Chuyên đề**
- [Toán lời văn](T9/T9CDLoiVan.html)
- [Hàm số bậc hai và hệ thức Viet](T9/T9CDHamSoBac2.html)
- [Hình học không gian](T9/T9CDHHKG.html)

**Ôn thi vào 10**
- [Câu 5 Đề thi vào 10 Hà Nội](T9/T9CDC5THIVAO10.html)
- [Rút gọn – Ôn thi chuyên sư phạm](onthivao10/csprutgon1.html)

</div>
</details>

---

<details>
<summary>Toán 10</summary>
<div markdown="1">

- [C1B1: Mệnh đề](T10/T10C1B1.md)
- [C1B2: Tập hợp](T10/T10C1B2.html)
- [C6B1: Hàm số](T10/T10C6B1.html)
- [C6B2: Hàm số bậc nhất](T10/T10C6B2.html)

</div>
</details>

---

<details>
<summary>Toán 11</summary>
<div markdown="1">

**Chương 1: Lượng giác**

*Bài giảng*
- [Bài 1: Giá trị lượng giác](T11/C1/BaiGiang/T11C1B1.html)

*Phương trình lượng giác*

- [Bài 4: Phương trình lượng giác bậc hai](T11/T11C1B4.html)
- [Bài 5: Phương trình bậc nhất với sin và cos](T11/T11C1B5.html)
- [Bài 6: Phương trình thuần nhất bậc hai](T11/T11C1B6.html)
- [Bài 7: Luyện tập tổng hợp](T11/T11C1B7.html)

</div>
</details>

---

<details>
<summary>Toán 12</summary>
<div markdown="1">

**Chương 1**

| Bài học | Kiểm tra |
|---------|----------|
| [Bài 1](T12/T12C1B1.md) | [Kiểm tra Bài 1](T12/T12TestC1B1.md) |
| [Bài 2](T12/T12C1B2.md) | [Kiểm tra Bài 2](T12/T12TestC1B2F.md) |
| [Bài 3](T12/T12C1B3.md) | [Kiểm tra Bài 3](T12/T12TestC1B3F.md) |
| [Bài 4: Khảo sát hàm số](T12/T12C1B4KhaoSat.md) | [Kiểm tra Bài 4](T12/T12TestC1B4F.md) |

**Trắc nghiệm tương tác – Chương 1**
- [C1B1 – Dạng 1–3: Hàm đa thức, phân thức, căn thức (15 câu)](T12/TN/C1/T12C1B1D123.html)
- [C1B1 – Dạng 4–6: Hàm lượng giác, mũ, lôgarit (22 câu)](T12/TN/C1/T12C1B1D456.html)
- [C1B1 – Dạng 7–9: Giá trị tuyệt đối, biết f'(x), đồ thị/BBT (15 câu)](T12/TN/C1/T12C1B1D789.html)
- [C1B1 – Dạng 10–15: Hàm hợp, tìm tham số, bài toán thực tế (25 câu)](T12/TN/C1/T12C1B1D101112131415.html)

**Chương 2: Hình học không gian – Oxyz**
- [Bài 1: Vector trong không gian](T12/T12C2B1.md)
- [Bài 2](T12/T12C2B2.md)
- [Bài 3](T12/T12C2B3.html)
- [Tài liệu: C2B1 Vector trong không gian](T12/C2Bai1VecTorTrongKhongGian.md)
- [Giá trị lớn nhất, nhỏ nhất trong Oxyz](T12/MinMaxKhoangCachOxyz.md)
- [Luyện tập Min Max trong Oxyz](T12/T12LuyenTapMinMaxOxyz.md)

**Chương 3: Thống kê**
- [Bài 1: Khoảng biến thiên – Khoảng tứ phân vị](T12/T12C3B1.html)
- [Bài 2: Phương sai và độ lệch chuẩn](T12/T12C3B2.html)
- [Ôn tập thống kê lớp 10 và 11](T12/ontapthongke10va11.md)

**Chương 4: Tích phân**
- [Bài 1: Nguyên hàm và tích phân](T12/T12C4B1.html)
- [Bài 2: Ứng dụng hình học của tích phân](T12/T12C4B2.html)

</div>
</details>

---

<details>
<summary>TNTHPT</summary>
<div markdown="1">

- [CD1: Chuyên đề Phương trình và Bất phương trình](TNTHPT/CD1part1.md)

</div>
</details>

---

<details>
<summary>Tư duy</summary>
<div markdown="1">

- [Tư duy 1](tuduy/tuduy1.html)

</div>
</details>
