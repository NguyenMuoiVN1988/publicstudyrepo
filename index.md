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
details:nth-of-type(12) > summary { background: #ecfeff; } /* mục thứ 12 – xanh băng  */

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

> 📚 **[25 chuyên đề HSA](HSA/CDOnTap/index.html)** — trang tổng hợp, chọn nhanh bài giảng & đề của mọi chuyên đề.

*Chuyên đề 1: Bất phương trình & hệ bất phương trình bậc nhất hai ẩn*
- [Bài giảng: Lý thuyết, ví dụ và quy hoạch tuyến tính](HSA/CDOnTap/CD1/CD1.html)
- [🗺️ Lộ trình ôn tập 13 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD1/OnTapCD1/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (13 câu)](HSA/CDOnTap/CD1/TestCD1Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (14 câu)](HSA/CDOnTap/CD1/TestCD1Part2.html)

*Chuyên đề 2: Hàm số bậc hai*
- [🗺️ Lộ trình ôn tập 10 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD2/OnTapCD2/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (18 câu)](HSA/CDOnTap/CD2/TestCD2Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD2/TestCD2Part2.html)

*Chuyên đề 3: Hệ thức lượng trong tam giác và Vectơ*
- [Bài giảng: Lý thuyết và 13 ví dụ có lời giải](HSA/CDOnTap/CD3/CD3.html)
- [🗺️ Lộ trình ôn tập 19 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD3/OnTapCD3/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD3/TestCD3Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD3/TestCD3Part2.html)

*Chuyên đề 4: Phương pháp toạ độ trong mặt phẳng*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD4/CD4.html)
- [🗺️ Lộ trình ôn tập 8 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD4/OnTapCD4/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (17 câu)](HSA/CDOnTap/CD4/TestCD4Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD4/TestCD4Part2.html)

*Chuyên đề 5: Hàm số lượng giác và phương trình lượng giác*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD5/CD5.html)
- [🗺️ Lộ trình ôn tập 4 bài Đúng/Sai từng ý (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD5/OnTapCD5/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (18 câu)](HSA/CDOnTap/CD5/TestCD5Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (18 câu)](HSA/CDOnTap/CD5/TestCD5Part2.html)

*Chuyên đề 6: Dãy số, cấp số cộng, cấp số nhân*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD6/CD6.html)
- [🗺️ Lộ trình ôn tập 7 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD6/OnTapCD6/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD6/TestCD6Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD6/TestCD6Part2.html)

*Chuyên đề 7: Giới hạn. Hàm số liên tục*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD7/CD7.html)
- [🗺️ Lộ trình ôn tập 3 bài Đúng/Sai từng ý (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD7/OnTapCD7/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD7/TestCD7Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD7/TestCD7Part2.html)

*Chuyên đề 8: Đại số tổ hợp. Xác suất và biến cố*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD8/CD8.html)
- [🗺️ Lộ trình ôn tập 21 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD8/OnTapCD8/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD8/TestCD8Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD8/TestCD8Part2.html)
- [Trắc nghiệm – Đề ôn tập số 03 (20 câu)](HSA/CDOnTap/CD8/TestCD8Part3.html)

*Chuyên đề 9: Quan hệ song song*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD9/CD9.html)
- [🗺️ Lộ trình ôn tập 5 bài Đúng/Sai từng ý (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD9/OnTapCD9/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD9/TestCD9Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (14 câu)](HSA/CDOnTap/CD9/TestCD9Part2.html)

*Chuyên đề 10: Hàm số mũ. Hàm số logarit*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD10/CD10.html)
- [🗺️ Lộ trình ôn tập 8 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD10/OnTapCD10/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (25 câu)](HSA/CDOnTap/CD10/TestCD10Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (25 câu)](HSA/CDOnTap/CD10/TestCD10Part2.html)

*Chuyên đề 11: Đạo hàm. Tiếp tuyến*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD11/CD11.html)
- [🗺️ Lộ trình ôn tập 7 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD11/OnTapCD11/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD11/TestCD11Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (18 câu)](HSA/CDOnTap/CD11/TestCD11Part2.html)

*Chuyên đề 12: Quan hệ vuông góc*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD12/CD12.html)
- [🗺️ Lộ trình ôn tập 8 bài (~10 phút/bài: lý thuyết + bài kiểm tra + kho luyện thêm)](HSA/CDOnTap/CD12/OnTapCD12/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD12/TestCD12Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD12/TestCD12Part2.html)

*Chuyên đề 13: Tính đơn điệu của hàm số*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD13/CD13.html)
- [🗺️ Lộ trình ôn tập 6 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD13/OnTapCD13/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD13/TestCD13Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD13/TestCD13Part2.html)

*Chuyên đề 14: Cực trị của hàm số*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD14/CD14.html)
- [🗺️ Lộ trình ôn tập 5 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD14/OnTapCD14/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD14/TestCD14Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD14/TestCD14Part2.html)

*Chuyên đề 15: Giá trị lớn nhất, giá trị nhỏ nhất của hàm số*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD15/CD15.html)
- [🗺️ Lộ trình ôn tập 4 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD15/OnTapCD15/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD15/TestCD15Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD15/TestCD15Part2.html)

*Chuyên đề 16: Đường tiệm cận của đồ thị hàm số*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD16/CD16.html)
- [🗺️ Lộ trình ôn tập 4 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD16/OnTapCD16/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD16/TestCD16Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD16/TestCD16Part2.html)

*Chuyên đề 17: Tương giao và tiếp tuyến của đồ thị hàm số*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD17/CD17.html)
- [🗺️ Lộ trình ôn tập 4 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD17/OnTapCD17/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD17/TestCD17Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD17/TestCD17Part2.html)

*Chuyên đề 18: Tính đơn điệu và cực trị của hàm hợp*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD18/CD18.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD18/TestCD18Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD18/TestCD18Part2.html)

*Chuyên đề 19: Tọa độ vectơ trong không gian*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD19/CD19.html)
- [🗺️ Lộ trình ôn tập 12 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD19/OnTapCD19/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD19/TestCD19Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD19/TestCD19Part2.html)

*Chuyên đề 20: Phương trình mặt phẳng và đường thẳng*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD20/CD20.html)
- [🗺️ Lộ trình ôn tập 11 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD20/OnTapCD20/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD20/TestCD20Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD20/TestCD20Part2.html)

*Chuyên đề 21: Phương trình mặt cầu – Góc và khoảng cách*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD21/CD21.html)
- [🗺️ Lộ trình ôn tập 11 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD21/OnTapCD21/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD21/TestCD21Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD21/TestCD21Part2.html)

*Chuyên đề 22: Nguyên hàm*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD22/CD22.html)
- [🗺️ Lộ trình ôn tập 18 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD22/OnTapCD22/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (20 câu)](HSA/CDOnTap/CD22/TestCD22Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (20 câu)](HSA/CDOnTap/CD22/TestCD22Part2.html)

*Chuyên đề 23: Tích phân – Ứng dụng tính diện tích*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD23/CD23.html)
- [🗺️ Lộ trình ôn tập 2 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD23/OnTapCD23/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD23/TestCD23Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD23/TestCD23Part2.html)

*Chuyên đề 24: Tích phân – Ứng dụng tính thể tích*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD24/CD24.html)
- [🗺️ Lộ trình ôn tập 2 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD24/OnTapCD24/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (16 câu)](HSA/CDOnTap/CD24/TestCD24Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (16 câu)](HSA/CDOnTap/CD24/TestCD24Part2.html)

*Chuyên đề 25: Xác suất có điều kiện*
- [Bài giảng: Lý thuyết và ví dụ có lời giải](HSA/CDOnTap/CD25/CD25.html)
- [🗺️ Lộ trình ôn tập 14 bài (~10 phút/bài: lý thuyết + bài kiểm tra)](HSA/CDOnTap/CD25/OnTapCD25/index.html)
- [Trắc nghiệm – Đề ôn tập số 01 (15 câu)](HSA/CDOnTap/CD25/TestCD25Part1.html)
- [Trắc nghiệm – Đề ôn tập số 02 (15 câu)](HSA/CDOnTap/CD25/TestCD25Part2.html)

</div>
</details>

---

<details>
<summary style="background:#e0e7ff;">TSA – Đánh giá tư duy (ĐH Bách khoa Hà Nội)</summary>
<div markdown="1">

**Luyện tập Tư duy Toán học** — tự chấm điểm, có lời giải; gồm cả dạng **kéo–thả** như bài thi trên máy.

> 📐 **[Trang tổng hợp luyện tập TSA](TSA/2026/index.html)** — chọn nhanh các bài luyện theo chủ đề và bài luyện tổng hợp.

*Luyện theo chủ đề*
- [Chủ đề 1: Đại số](TSA/2026/CD1.html)
- [Chủ đề 2: Số học](TSA/2026/CD2.html)
- [Chủ đề 3: Giải tích](TSA/2026/CD3.html)
- [Chủ đề 4: Hình học](TSA/2026/CD4.html)
- [Chủ đề 5: Xác suất và thống kê](TSA/2026/CD5.html)

*Bài luyện tổng hợp (định dạng đề)*
- [Bài luyện định dạng minh hoạ (40 câu)](TSA/2026/DeMinhHoa.html)
- [Bài luyện tổng hợp số 1 (40 câu)](TSA/2026/DeOnLuyen1.html)
- [Bài luyện tổng hợp số 2 (40 câu)](TSA/2026/DeOnLuyen2.html)

</div>
</details>

---

<details>
<summary style="background:#fff1f2;">TNTHPT – Tốt nghiệp THPT</summary>
<div markdown="1">

**Trắc nghiệm tương tác**
- [Đề Tham Khảo TN THPT 2025 – Môn Toán (12 TN + 4 Đ/S + 6 trả lời ngắn)](TNTHPT/2025MinhHoa.html)

**Chuyên đề ôn tập**
- [CD1: Chuyên đề Phương trình và Bất phương trình](TNTHPT/CD1part1.md)

</div>
</details>

---

<details>
<summary>Tiểu học</summary>
<div markdown="1">

#### Ôn tập Tiểu học Nâng cao — Hành trang vào lớp 6 CLC

- [Buổi 1: Ôn tập bốn phép toán (slides bài giảng tương tác)](Tieuhoc/OnTapNC/Buoi1.html)

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

**Lời giải phiếu bài tập — Chương 1: Tập hợp các số tự nhiên**
- [C1B1: Tập hợp](T6/2026PhieuBaiTap/LGC1B1.html)
- [C1B2: Cách ghi số tự nhiên](T6/2026PhieuBaiTap/LGC1B2.html)
- [C1B3: Thứ tự trong tập hợp các số tự nhiên](T6/2026PhieuBaiTap/LGC1B3.html)
- [C1B4: Phép cộng và phép trừ số tự nhiên](T6/2026PhieuBaiTap/LGC1B4.html)
- [C1B5: Phép nhân và phép chia số tự nhiên](T6/2026PhieuBaiTap/LGC1B5.html)
- [C1B6: Luỹ thừa với số mũ tự nhiên](T6/2026PhieuBaiTap/LGC1B6.html)
- [C1B7: Thứ tự thực hiện các phép tính](T6/2026PhieuBaiTap/LGC1B7.html)
- [C1 Ôn tập: Tập hợp các số tự nhiên](T6/2026PhieuBaiTap/LGC1Ontap.html)

**Lời giải phiếu bài tập — Chương 2: Tính chia hết**
- [C2B1: Quan hệ chia hết và tính chất](T6/2026PhieuBaiTap/LGC2B1.html)
- [C2B2: Dấu hiệu chia hết](T6/2026PhieuBaiTap/LGC2B2.html)
- [C2B3: Số nguyên tố](T6/2026PhieuBaiTap/LGC2B3.html)
- [C2B4: Ước chung. Ước chung lớn nhất](T6/2026PhieuBaiTap/LGC2B4.html)
- [C2B5: Bội chung. Bội chung nhỏ nhất](T6/2026PhieuBaiTap/LGC2B5.html)
- [C2 Ôn tập: Tính chia hết](T6/2026PhieuBaiTap/LGC2Ontap.html)

**Lời giải phiếu bài tập — Chương 3: Số nguyên**
- [C3B1: Tập hợp các số nguyên](T6/2026PhieuBaiTap/LGC3B1.html)
- [C3B2: Phép cộng và phép trừ số nguyên](T6/2026PhieuBaiTap/LGC3B2.html)
- [C3B3: Quy tắc dấu ngoặc](T6/2026PhieuBaiTap/LGC3B3.html)
- [C3B4: Phép nhân số nguyên](T6/2026PhieuBaiTap/LGC3B4.html)
- [C3B5: Phép chia hết. Ước và bội của một số nguyên](T6/2026PhieuBaiTap/LGC3B5.html)
- [C3 Ôn tập: Số nguyên](T6/2026PhieuBaiTap/LGC3Ontap.html)

**Lời giải phiếu bài tập — Chương 4: Một số hình phẳng trong thực tiễn**
- [C4B1: Tam giác đều. Hình vuông. Lục giác đều](T6/2026PhieuBaiTap/LGC4B1.html)
- [C4B2: Hình chữ nhật. Thoi. Bình hành. Thang cân](T6/2026PhieuBaiTap/LGC4B2.html)
- [C4B3: Chu vi và diện tích một số tứ giác](T6/2026PhieuBaiTap/LGC4B3.html)
- [C4 Ôn tập: Một số hình phẳng trong thực tiễn](T6/2026PhieuBaiTap/LGC4Ontap.html)

**Lời giải phiếu bài tập — Chương 5: Tính đối xứng của hình phẳng**
- [C5B1: Hình có trục đối xứng](T6/2026PhieuBaiTap/LGC5B1.html)
- [C5B2: Hình có tâm đối xứng](T6/2026PhieuBaiTap/LGC5B2.html)
- [C5 Ôn tập: Tính đối xứng của hình phẳng](T6/2026PhieuBaiTap/LGC5Ontap.html)

**Lời giải phiếu bài tập — Chương 6: Phân số**
- [C6B1: Mở rộng phân số. Phân số bằng nhau](T6/2026PhieuBaiTap/LGC6B1.html)
- [C6B2: So sánh phân số. Hỗn số dương](T6/2026PhieuBaiTap/LGC6B2.html)
- [C6B3: Phép cộng và phép trừ phân số](T6/2026PhieuBaiTap/LGC6B3.html)
- [C6B4: Phép nhân và phép chia phân số](T6/2026PhieuBaiTap/LGC6B4.html)
- [C6B5: Hai bài toán về phân số](T6/2026PhieuBaiTap/LGC6B5.html)
- [C6 Ôn tập: Phân số](T6/2026PhieuBaiTap/LGC6Ontap.html)

**Lời giải phiếu bài tập — Chương 7: Số thập phân**
- [C7B1: Số thập phân](T6/2026PhieuBaiTap/LGC7B1.html)
- [C7B2: Tính toán với số thập phân](T6/2026PhieuBaiTap/LGC7B2.html)
- [C7B3: Làm tròn và ước lượng](T6/2026PhieuBaiTap/LGC7B3.html)
- [C7B4: Tỉ số và tỉ số phần trăm](T6/2026PhieuBaiTap/LGC7B4.html)
- [C7 Ôn tập: Số thập phân](T6/2026PhieuBaiTap/LGC7Ontap.html)

**Lời giải phiếu bài tập — Chương 8: Những hình hình học cơ bản**
- [C8B1: Điểm và đường thẳng](T6/2026PhieuBaiTap/LGC8B1.html)
- [C8B2: Điểm nằm giữa hai điểm. Tia](T6/2026PhieuBaiTap/LGC8B2.html)
- [C8B3: Đoạn thẳng. Độ dài đoạn thẳng](T6/2026PhieuBaiTap/LGC8B3.html)
- [C8B4: Trung điểm của đoạn thẳng](T6/2026PhieuBaiTap/LGC8B4.html)
- [C8B5: Góc](T6/2026PhieuBaiTap/LGC8B5.html)
- [C8B6: Số đo góc](T6/2026PhieuBaiTap/LGC8B6.html)
- [C8 Ôn tập: Những hình hình học cơ bản](T6/2026PhieuBaiTap/LGC8Ontap.html)

**Lời giải phiếu bài tập — Chương 9: Dữ liệu và xác suất thực nghiệm**
- [C9B1: Dữ liệu và thu thập dữ liệu](T6/2026PhieuBaiTap/LGC9B1.html)
- [C9B2: Bảng thống kê và biểu đồ tranh](T6/2026PhieuBaiTap/LGC9B2.html)
- [C9B3: Biểu đồ cột](T6/2026PhieuBaiTap/LGC9B3.html)
- [C9B4: Biểu đồ cột kép](T6/2026PhieuBaiTap/LGC9B4.html)
- [C9B5: Kết quả có thể và sự kiện](T6/2026PhieuBaiTap/LGC9B5.html)
- [C9B6: Xác suất thực nghiệm](T6/2026PhieuBaiTap/LGC9B6.html)
- [C9 Ôn tập: Dữ liệu và xác suất thực nghiệm](T6/2026PhieuBaiTap/LGC9Ontap.html)

**Nâng cao**
- [Các phép tính về số tự nhiên – Chuyên Toán](T6/T6NCTaiLieuChuyenToan1.html)

</div>
</details>

---

<details>
<summary>Toán 7</summary>
<div markdown="1">

- [Đọc sách cùng học sinh](T7/DocCungHST7.md)

**Trắc nghiệm tương tác**
- [C1 – Chủ đề 1: Bốn phép toán trên tập số hữu tỉ (16 câu)](T7/T7C1/T7C1CD1.html)

**Lời giải phiếu bài tập**
- [C1B1: Tập hợp các số hữu tỉ](T7/2026PhieuBT/LGC1B1.html)
- [C1B2: Cộng, trừ, nhân, chia số hữu tỉ](T7/2026PhieuBT/LGC1B2.html)
- [C1B3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ](T7/2026PhieuBT/LGC1B3.html)
- [C1B4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế](T7/2026PhieuBT/LGC1B4.html)

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

**Lời giải phiếu bài tập**
- [C1B1: Đơn thức](T8/LGPhieuBaiTap/LGC1B1.html)
- [C1B2: Đa thức](T8/LGPhieuBaiTap/LGC1B2.html)
- [C1B3: Phép cộng và phép trừ đa thức](T8/LGPhieuBaiTap/LGC1B3.html)
- [C1B4: Phép nhân đa thức](T8/LGPhieuBaiTap/LGC1B4.html)
- [C1B5: Phép chia đa thức cho đơn thức](T8/LGPhieuBaiTap/LGC1B5.html)
- [C1B6: Ôn tập chương – Đa thức nhiều biến](T8/LGPhieuBaiTap/LGC1B6.html)

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
- [C1 – Chủ đề 3: Hệ hai phương trình bậc nhất hai ẩn (17 câu)](T9/TN/T9TNC1CD3_quiz.html)
- [C1 – Chủ đề 3 (Phần 2): Hệ phương trình chứa tham số (8 câu)](T9/TN/T9TNC1CD3Part2.html)
- **C1 – Chủ đề 4: Giải bài toán bằng cách lập hệ phương trình (25 câu, 8 phần)**: [P1](T9/TN/T9TNC1CD4Part1.html) · [P2](T9/TN/T9TNC1CD4Part2.html) · [P3](T9/TN/T9TNC1CD4Part3.html) · [P4](T9/TN/T9TNC1CD4Part4.html) · [P5](T9/TN/T9TNC1CD4Part5.html) · [P6](T9/TN/T9TNC1CD4Part6.html) · [P7](T9/TN/T9TNC1CD4Part7.html) · [P8](T9/TN/T9TNC1CD4Part8.html)
- **C2 – Chủ đề 5: Bất đẳng thức & BPT bậc nhất một ẩn (51 câu, 17 phần)**: [P1](T9/TN/T9TNC2BDTCD5Part1.html) · [P2](T9/TN/T9TNC2BDTCD5Part2.html) · [P3](T9/TN/T9TNC2BDTCD5Part3.html) · [P4](T9/TN/T9TNC2BDTCD5Part4.html) · [P5](T9/TN/T9TNC2BDTCD5Part5.html) · [P6](T9/TN/T9TNC2BDTCD5Part6.html) · [P7](T9/TN/T9TNC2BDTCD5Part7.html) · [P8](T9/TN/T9TNC2BDTCD5Part8.html) · [P9](T9/TN/T9TNC2BDTCD5Part9.html) · [P10](T9/TN/T9TNC2BDTCD5Part10.html) · [P11](T9/TN/T9TNC2BDTCD5Part11.html) · [P12](T9/TN/T9TNC2BDTCD5Part12.html) · [P13](T9/TN/T9TNC2BDTCD5Part13.html) · [P14](T9/TN/T9TNC2BDTCD5Part14.html) · [P15](T9/TN/T9TNC2BDTCD5Part15.html) · [P16](T9/TN/T9TNC2BDTCD5Part16.html) · [P17](T9/TN/T9TNC2BDTCD5Part17.html)
- **C3 – Chủ đề 6: Căn bậc hai & căn thức bậc hai (29 câu, 9 phần)**: [P1](T9/TN/T9TNC3CD6Part1.html) · [P2](T9/TN/T9TNC3CD6Part2.html) · [P3](T9/TN/T9TNC3CD6Part3.html) · [P4](T9/TN/T9TNC3CD6Part4.html) · [P5](T9/TN/T9TNC3CD6Part5.html) · [P6](T9/TN/T9TNC3CD6Part6.html) · [P7](T9/TN/T9TNC3CD6Part7.html) · [P8](T9/TN/T9TNC3CD6Part8.html) · [P9](T9/TN/T9TNC3CD6Part9.html)
- **C3 – Chủ đề 7: Biến đổi căn bậc hai, rút gọn biểu thức chứa căn (102 câu, 34 phần)**: [P1](T9/TN/T9TNC3CD7Part1.html) · [P2](T9/TN/T9TNC3CD7Part2.html) · [P3](T9/TN/T9TNC3CD7Part3.html) · [P4](T9/TN/T9TNC3CD7Part4.html) · [P5](T9/TN/T9TNC3CD7Part5.html) · [P6](T9/TN/T9TNC3CD7Part6.html) · [P7](T9/TN/T9TNC3CD7Part7.html) · [P8](T9/TN/T9TNC3CD7Part8.html) · [P9](T9/TN/T9TNC3CD7Part9.html) · [P10](T9/TN/T9TNC3CD7Part10.html) · [P11](T9/TN/T9TNC3CD7Part11.html) · [P12](T9/TN/T9TNC3CD7Part12.html) · [P13](T9/TN/T9TNC3CD7Part13.html) · [P14](T9/TN/T9TNC3CD7Part14.html) · [P15](T9/TN/T9TNC3CD7Part15.html) · [P16](T9/TN/T9TNC3CD7Part16.html) · [P17](T9/TN/T9TNC3CD7Part17.html) · [P18](T9/TN/T9TNC3CD7Part18.html) · [P19](T9/TN/T9TNC3CD7Part19.html) · [P20](T9/TN/T9TNC3CD7Part20.html) · [P21](T9/TN/T9TNC3CD7Part21.html) · [P22](T9/TN/T9TNC3CD7Part22.html) · [P23](T9/TN/T9TNC3CD7Part23.html) · [P24](T9/TN/T9TNC3CD7Part24.html) · [P25](T9/TN/T9TNC3CD7Part25.html) · [P26](T9/TN/T9TNC3CD7Part26.html) · [P27](T9/TN/T9TNC3CD7Part27.html) · [P28](T9/TN/T9TNC3CD7Part28.html) · [P29](T9/TN/T9TNC3CD7Part29.html) · [P30](T9/TN/T9TNC3CD7Part30.html) · [P31](T9/TN/T9TNC3CD7Part31.html) · [P32](T9/TN/T9TNC3CD7Part32.html) · [P33](T9/TN/T9TNC3CD7Part33.html) · [P34](T9/TN/T9TNC3CD7Part34.html)

**Chuyên đề**
- [Toán lời văn](T9/T9CDLoiVan.html)
- [Hàm số bậc hai và hệ thức Viet](T9/T9CDHamSoBac2.html)
- [Hình học không gian](T9/T9CDHHKG.html)

**Nâng cao**
- [Hệ phương trình đối xứng loại I, loại II và hệ đẳng cấp](T9/NC/T9NCHePTDoiXungLoai12DangCap.html)
- [Kĩ thuật thế trong giải hệ phương trình](T9/NC/T9NCHePTKiThuatThe.html)
- [Hệ phương trình bậc nhất hai ẩn chứa tham số](T9/NC/T9NCHePTBacNhatThamSo.html)
- [Bất đẳng thức (chứng minh, làm trội, Cô-si, GTLN–GTNN)](T9/NC/T9NCBatDangThuc.html)

**Ôn thi vào 10**
- [Câu 5 Đề thi vào 10 Hà Nội](T9/T9CDC5THIVAO10.html)
- [Rút gọn – Ôn thi chuyên sư phạm](onthivao10/csprutgon1.html)

**Lời giải phiếu bài tập**
- [C1B1: Phương trình và hệ phương trình bậc nhất hai ẩn](T9/2026PhieuBT/LGC1B1.html)
- [C1B2: Giải hệ phương trình bậc nhất hai ẩn](T9/2026PhieuBT/LGC1B2.html)
- [C1B3: Giải bài toán bằng cách lập hệ phương trình](T9/2026PhieuBT/LGC1B3.html)
- [C1 Ôn tập: Ôn tập cuối chương I](T9/2026PhieuBT/LGC1Ontap.html)
- [C2B1: Phương trình quy về phương trình bậc nhất một ẩn](T9/2026PhieuBT/LGC2B1.html)
- [C2B2: Bất đẳng thức và tính chất](T9/2026PhieuBT/LGC2B2.html)
- [C2B3: Bất phương trình bậc nhất một ẩn](T9/2026PhieuBT/LGC2B3.html)
- [C2B4: Ôn tập chương II](T9/2026PhieuBT/LGC2B4.html)
- [C3B1: Căn bậc hai và căn thức bậc hai](T9/2026PhieuBT/LGC3B1.html)
- [C3B2: Khai căn bậc hai với phép nhân và phép chia](T9/2026PhieuBT/LGC3B2.html)
- [C3B3: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai](T9/2026PhieuBT/LGC3B3.html)
- [C3B4: Căn bậc ba và căn thức bậc ba](T9/2026PhieuBT/LGC3B4.html)
- [C3B5: Ôn tập chương III](T9/2026PhieuBT/LGC3B5.html)
- [C4B1: Tỉ số lượng giác của góc nhọn](T9/2026PhieuBT/LGC4B1.html)
- [C4B2: Hệ thức giữa cạnh và góc trong tam giác vuông](T9/2026PhieuBT/LGC4B2.html)
- [C4B3: Ôn tập chương IV (Hệ thức lượng trong tam giác vuông)](T9/2026PhieuBT/LGC4B3.html)
- [C5B1: Mở đầu về đường tròn](T9/2026PhieuBT/LGC5B1.html)
- [C5B2: Cung và dây của một đường tròn](T9/2026PhieuBT/LGC5B2.html)
- [C5B3: Độ dài cung tròn. Diện tích hình quạt tròn và hình vành khuyên](T9/2026PhieuBT/LGC5B3.html)
- [C5B4: Vị trí tương đối của đường thẳng và đường tròn](T9/2026PhieuBT/LGC5B4.html)
- [C5B5: Vị trí tương đối của hai đường tròn](T9/2026PhieuBT/LGC5B5.html)
- [C5B6: Ôn tập chương V (Đường tròn)](T9/2026PhieuBT/LGC5B6.html)
- [C6B1: Hàm số y = ax² (a ≠ 0)](T9/2026PhieuBT/LGC6B1.html)
- [C6B2: Phương trình bậc hai một ẩn](T9/2026PhieuBT/LGC6B2.html)
- [C6B3: Định lí Viète và ứng dụng](T9/2026PhieuBT/LGC6B3.html)
- [C6B4: Giải bài toán bằng cách lập phương trình](T9/2026PhieuBT/LGC6B4.html)
- [C6B5: Ôn tập chương VI (Hàm số y = ax². Phương trình bậc hai)](T9/2026PhieuBT/LGC6B5.html)
- [C7B1: Bảng tần số và biểu đồ tần số](T9/2026PhieuBT/LGC7B1.html)
- [C7B2: Bảng tần số tương đối và biểu đồ tần số tương đối](T9/2026PhieuBT/LGC7B2.html)
- [C7B3: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ](T9/2026PhieuBT/LGC7B3.html)
- [C7B4: Ôn tập chương VII (Tần số và tần số tương đối)](T9/2026PhieuBT/LGC7B4.html)
- [C8B1: Phép thử ngẫu nhiên và không gian mẫu](T9/2026PhieuBT/LGC8B1.html)
- [C8B2: Xác suất của biến cố liên quan tới phép thử](T9/2026PhieuBT/LGC8B2.html)
- [C8B3: Ôn tập chương VIII (Xác suất của biến cố)](T9/2026PhieuBT/LGC8B3.html)
- [C9B1: Góc nội tiếp](T9/2026PhieuBT/LGC9B1.html)
- [C9B2: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác](T9/2026PhieuBT/LGC9B2.html)
- [C9B3: Tứ giác nội tiếp](T9/2026PhieuBT/LGC9B3.html)
- [C9B4: Đa giác đều](T9/2026PhieuBT/LGC9B4.html)
- [C10B1: Hình trụ và hình nón](T9/2026PhieuBT/LGC10B1.html)
- [C10B2: Hình cầu](T9/2026PhieuBT/LGC10B2.html)
- [C10B3: Ôn tập chương X (Một số hình khối trong thực tiễn)](T9/2026PhieuBT/LGC10B3.html)

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

**Lời giải Phiếu bài tập — Chương 1 (Mệnh đề & Tập hợp):**

- [C1B1: Mệnh đề](T10/2026PhieuBaiTap/LGC1B1.html)
- [C1B2: Tập hợp](T10/2026PhieuBaiTap/LGC1B2.html)
- [C1B3: Các phép toán trên tập hợp](T10/2026PhieuBaiTap/LGC1B3.html)
- [C1 Ôn tập: Mệnh đề & Tập hợp](T10/2026PhieuBaiTap/LGC1Ontap.html)

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

*Phiếu bài tập (lời giải)*

- [C1B1: Giá trị lượng giác của góc lượng giác](T11/2026PhieuBT/LGC1B1.html)
- [C1B2: Công thức lượng giác](T11/2026PhieuBT/LGC1B2.html)
- [C1B3: Hàm số lượng giác](T11/2026PhieuBT/LGC1B3.html)
- [C1B4: Phương trình lượng giác cơ bản](T11/2026PhieuBT/LGC1B4.html)
- [C1 Ôn tập: Hàm số lượng giác & phương trình lượng giác](T11/2026PhieuBT/LGC1Ontap.html)

*Kiểm tra ngắn*

- [C1B1: Giá trị lượng giác của góc lượng giác](T11/2026KiemTra/KTC1B1.html)
- [C1B2: Công thức lượng giác](T11/2026KiemTra/KTC1B2.html)
- [C1B3: Hàm số lượng giác](T11/2026KiemTra/KTC1B3.html)
- [C1B4: Phương trình lượng giác cơ bản](T11/2026KiemTra/KTC1B4.html)
- [C1 Ôn tập: Hàm số lượng giác & phương trình lượng giác](T11/2026KiemTra/KTC1B5.html)

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
<summary>Tư duy</summary>
<div markdown="1">

- [Tư duy 1](tuduy/tuduy1.html)

</div>
</details>
