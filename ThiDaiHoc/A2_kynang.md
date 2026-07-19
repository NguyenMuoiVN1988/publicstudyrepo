# Manifest A2 — Hàm số lượng giác & phương trình lượng giác

> Đầu vào cho phiên soạn **phiếu tự luận + minitest + liều quiz** của buổi A2.
> Bài giảng gốc: [A2.html](A2.html) (28 slide). Soạn 2026-07-13.
> Nối mạch: mở đầu bằng đúng lời hứa cuối A1 ("gia đình hàm số biết TUẦN HOÀN" → vòng quay/sóng/dao động).

## (a) Kĩ năng / quy tắc đã dạy (đúng tên hộp `kienthuc` trong slide)

1. **Sin, cos, tan trên đường tròn lượng giác** — cos = hoành độ, sin = tung độ điểm M; tan = sin/cos (cos≠0), cot = cos/sin (sin≠0); chặn −1≤sin,cos≤1; hệ thức sin²+cos²=1.
2. **Đổi độ ↔ radian · độ dài cung** — α(rad)=α°·π/180; các mốc 180°=π…30°=π/6; **độ dài cung ℓ=Rα** (α phải là radian).
3. **Giá trị lượng giác các góc đặc biệt** (bảng 0, π/6, π/4, π/3, π/2) + **dấu theo góc phần tư** ("nhất cả – nhị sin – tam tan – tứ cos") + 3 cung liên kết cốt lõi (cos đối, sin bù, phụ chéo).
4. **Công thức cộng & nhân đôi** (điểm nhanh; hạ bậc/biến đổi tích↔tổng chỉ nêu tên).
5. **y = sin x** — TXĐ ℝ, TGT [−1;1], lẻ, chu kì 2π, khoảng đồng biến/nghịch biến; đồ thị hình sóng (SVG).
6. **y = cos x** — TXĐ ℝ, TGT [−1;1], chẵn, chu kì 2π; cos x = sin(x+π/2) (dịch trái π/2).
7. **y = tan x (và cot x)** — TXĐ bỏ điểm tiệm cận, TGT ℝ, lẻ, chu kì **π**; tiệm cận đứng.
8. **Ba "lệnh cấm" khi tìm TXĐ hàm LG** — mẫu≠0, trong căn≥0, + tan u cần cos u≠0 (u≠π/2+kπ), cot u cần sin u≠0 (u≠kπ).
9. **Chu kì hàm mở rộng & GTLN–GTNN** — T=2π/|ω| (sin/cos), T=π/|ω| (tan); GTLN-GTNN bằng chặn sin/cos, đặt ẩn phụ t=sin x∈[−1;1], hoặc |a sin+b cos|≤√(a²+b²).
10. **Nghiệm của sin x = m** — |m|>1 vô nghiệm; |m|≤1: x=α+k2π ∨ x=π−α+k2π; các trường hợp đặc biệt 0, ±1.
11. **Ba công thức nghiệm** — cos x=m → x=±α+k2π; tan x=m → x=α+kπ (mọi m, MỘT họ); cot x=m → x=α+kπ.

Bộ "hạt giống" (tái dùng xuyên bài giảng): **đường tròn lượng giác + giá trị đặc biệt** — sin(π/6)=½, cos(π/3)=½, sin(π/2)=1, cos π=−1, tan(π/4)=1, M(π/2)=(0;1), sin(−α)=−sin α, cos x=0 ⇔ x=π/2+kπ, chu kì sin=2π, −1≤sin x≤1. Nhân vật thực tế xuyên bài: **chiếc vòng quay** h(t)=50−40cos(πt/10) (mở đầu → bộ 4-kì-thi).

## (b) Các dạng bài đã có ví dụ mẫu

| VD | Dạng | Nguồn |
| --- | --- | --- |
| VD1 | Đổi độ↔radian + độ dài cung ℓ=Rα (72°, R=5) | tự soạn (kiểu bank `2026C1-B1-006` vệ tinh) |
| VD2 | Tính GTLG bằng cung liên kết (cos 2π/3, sin 5π/6, tan(−π/4)) | tự soạn (kiểu bank `B1-002`, `B1-007`) |
| VD3 | Tìm TXĐ hàm LG — mẫu cos x=0 | tự soạn (kiểu bank `B3-004`) |
| VD4 | Chu kì (sin 3x) + tập giá trị (2030−4cos x) | bank `2026C1-B3-005` (ý c) |
| VD5 | Bài tuần hoàn thực tế: sóng biển h=75 sin(πt/8) — biên độ + chu kì | bank `2026C1-B3-002` |
| VD6 | Giải sin x = ½ (hai họ nghiệm) | tự soạn (hạt giống) |
| VD7 | Giải 2cos x = √3 (x = ±α+k2π) | bank `2026C1-B4-001` |
| VD8 | PT thực tế dao động: x=1,5cos(πt/4), tìm t khi x=0 | bank `2026C1-B4-005` |

**Bộ 3 slide "Một câu hỏi — bốn kì thi"** (nhân vật: vòng quay h(t)=50−40cos(πt/10), tự soạn, đã kiểm chứng số độc lập bằng PowerShell):
① **TN THPT** Đ/S 4 ý — a) h(0)=10 Đ · b) h_max=90 Đ · c) t=10 về thấp nhất **S** (thực ra cao nhất) · d) lần đầu 70 m tại t=20/3 Đ; thang lũy tiến 0,1/0,25/0,5/1.
② **HSA** 2 ô điền (`sq-sa`): chu kì = **20**; t cao 70 m lần đầu = **6,67** (làm tròn 2 chữ số, dấu phẩy) — **TƯƠNG TÁC THẬT** bằng [`slide-quiz.js`](../assets/js/slide-quiz.js).
② **TSA** kéo thả (`sq-dd` all-or-nothing): dựng h(t)=[50]−[40]cos([π/10]t); kho 6 thẻ có 3 nhiễu (10, π/20, π/5).
③ **SPT** barem 4 bước × 0,25đ (lập PT cos=−½ → nghiệm ±2π/3 → chọn t>0 nhỏ nhất 20/3 → kết luận đơn vị) + 3 lỗi mất điểm (quên nhánh −, quên "lần đầu"/nghiệm nhỏ nhất, thiếu đơn vị).

## (c) Câu bank đã dùng (phiếu sau KHÔNG lấy lại)

Bank nguồn: `Latex/Bank/C3/L11/C1/` (`_bankC1_tn.tex` = 34 câu **Đúng/Sai nhiều ý** cloze; `_bankC1_essay.tex` = 19 essay). **Bank ĐÚNG chương, CÓ feedback 100%** (nhiều essay kèm barem MiniTest T11C1). Đáp án đã đối chiếu độc lập — không phát hiện lỗi.

- **Đã dùng làm ví dụ/khung:** `2026C1-B3-002` (sóng biển → VD5), `2026C1-B3-005` (TGT 2030−4cos → VD4), `2026C1-B4-001` (2cos x=√3 → VD7), `2026C1-B4-005` (dao động 1,5cos(πt/4) → VD8). Các dạng B1-002/B1-007 (cung liên kết, dấu) và B3-004 (TXĐ) dùng làm *khuôn* nhưng đề tự soạn lại cho gọn.
- **Tự soạn, không có trong bank:** VD1, VD2, VD3, VD6; bộ hạt giống; nhân vật "vòng quay" và cả 3 biến thể bốn-kì-thi; toàn bộ 9 bài luyện tập.

## (d) Gợi ý dạng nên đưa vào phiếu tự luận A2 (kèm barem kiểu SPT)

1. **Tính GTLG / rút gọn bằng cung liên kết** (kiểu B1-001, B1-004): cho một GTLG + góc phần tư → tính các GTLG còn lại; barem: điểm cho *xác định dấu đúng* trước, *giá trị* sau.
2. **TXĐ hàm LG tổng hợp**: 1 câu tan/cot, 1 câu có căn + mẫu lượng giác → hệ điều kiện, lấy giao. Barem: điều kiện đúng → giải → giao.
3. **GTLN–GTNN**: (i) dạng chặn a·sin+b (kiểu 2030−4cos); (ii) dạng bậc hai theo sin đặt ẩn phụ t∈[−1;1] (Bài 7); (iii) dạng a sin+b cos (Bài 5). Cả 3 kiểu, mỗi kiểu 1 câu.
4. **Giải PT lượng giác cơ bản đủ 3 loại** (sin=m, cos=m, tan=m) — barem: đưa về sin α → viết ĐỦ hai họ nghiệm (điểm trừ nếu thiếu họ π−α) → kết luận k∈ℤ.
5. **Chứng minh tuần hoàn / tìm chu kì** (kiểu essay B3-E02): 1 câu tính chu kì, 1 câu CM không tuần hoàn (VDC, tuỳ lớp).
6. **Bài tuần hoàn thực tế trọn vẹn** (đặc sản 4 kì): vòng quay / sóng biển / dao động / số giờ ban ngày → lập mô hình h(t)=A sin(ωt)+B, tính biên độ, chu kì, giải h(t)=giá trị (lần đầu). Barem SPT: lập PT → nghiệm cơ bản (đủ 2 nhánh) → điều kiện t≥0 chọn nghiệm nhỏ nhất → kết luận đơn vị.
7. Nhắc "hạt giống": mở phiếu bằng 5 câu tính nhanh giá trị lượng giác đặc biệt để giữ nhịp bài giảng.

⚠️ **Ghi chú nguồn quan trọng:**

- File `_bankC1_tn.tex` **KHÔNG phải trắc nghiệm 4 phương án** — toàn bộ là **Đúng/Sai nhiều ý** (cloze, đáp án qua `\dapD/\dapS`). Rất hợp để rút cho phiếu **TN THPT (Đ/S 4 ý)** ở tầng 3a; nếu cần MC A/B/C/D phải chuyển định dạng.
- **Bank thiếu 3 mảng**: (i) câu đổi độ↔radian thuần (chỉ có độ dài cung/tốc độ qua câu vệ tinh B1-006); (ii) câu xét chẵn/lẻ hàm LG; (iii) trắc nghiệm 4 phương án. → Phiếu/minitest cần tự soạn bù 3 mảng này.
- B4 tự luận chỉ 1 môi trường `B4-E01` nhưng gồm **14 phương trình a→n** (VDC, mỗi câu có barem riêng) — kho tốt cho phần nâng cao.
- 34 câu Đ/S + 18 essay còn lại **chưa đụng** — đủ cho minitest 20′ và phiếu template mà không trùng ví dụ bài giảng.
