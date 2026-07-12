# Manifest A1 — Ngôn ngữ hàm số

> Đầu vào cho phiên soạn **phiếu tự luận + minitest + liều quiz** của buổi A1.
> Bài giảng gốc: [A1.html](A1.html) (31 slide). Soạn 2026-07-12.

## (a) Kĩ năng / quy tắc đã dạy (đúng tên hộp `kienthuc` trong slide)

1. **Hàm số — một đầu vào, một đầu ra** — định nghĩa hàm số, TXĐ, tập giá trị; 3 cách cho hàm (công thức / bảng / đồ thị); hàm cho bởi nhiều công thức.
2. **Hai lệnh cấm khi tìm tập xác định** — mẫu ≠ 0; trong căn bậc chẵn ≥ 0 (căn dưới mẫu > 0); nhiều điều kiện → lấy GIAO.
3. **Điểm thuộc đồ thị** — M(a;b) ∈ đồ thị ⟺ b = f(a).
4. **Đồng biến – nghịch biến trên khoảng K** — định nghĩa bằng cặp x₁ < x₂; đọc đồ thị trái→phải (lên dốc/xuống dốc); bảng biến thiên (mẫu BBT của x²−4x+3); kĩ thuật *bác bỏ bằng một phản ví dụ*; đồng biến trên khoảng ⟹ đồng biến trên khoảng con (không "vắt qua đỉnh").
5. **Chân dung parabol y = ax² + bx + c (a ≠ 0)** — trục x = −b/2a; đỉnh (thay hoành độ đỉnh vào f, không dùng −Δ/4a); bề lõm theo dấu a; kĩ thuật "manh mối → phương trình theo hệ số" (đi qua điểm, trục, đỉnh, cắt trục).
6. **GTLN–GTNN của hàm bậc hai trên đoạn [α;β] — ba ứng viên** — f(α), f(β), f(đỉnh) nếu đỉnh ∈ đoạn; đỉnh ngoài đoạn → hàm đơn điệu, chỉ 2 mút. (Đã gieo trước liên kết sang A9: đạo hàm cũng dùng đúng quy tắc này.)
7. **Bài toán thực tế — ba bước lập mô hình** — ① đặt biến + điều kiện ② lập hàm ③ tìm đỉnh/so ứng viên, trả lời đúng đơn vị; loại nghiệm theo ngữ cảnh.

Bộ "hạt giống" (tái dùng xuyên bài giảng): **f(x) = x² − 4x + 3** (giá trị, nghiệm, đỉnh (2;−1), BBT, GTLN-GTNN trên [0;3] và [3;5]) + các mini-check √(x−1), 1/(x−2), (x−2)², y = 1−3x.

## (b) Các dạng bài đã có ví dụ mẫu

| VD | Dạng | Nguồn |
|---|---|---|
| VD1 | Lập hàm nhiều công thức từ tình huống thực tế (cước taxi) | bank `2026C6-B15-020` |
| VD2 | Tính giá trị hàm cho bởi nhiều công thức (chọn đúng nhánh) | bank `2026C6-B15-001` |
| VD3 | TXĐ phân thức — bẫy "mẫu vô nghiệm" (Δ<0) | bank `2026C6-B15-005` |
| VD4 | TXĐ tổng hai căn — giao 2 điều kiện, đầu mút thuộc D | bank `2026C6-B15-007` |
| — | Điểm thuộc đồ thị (kiểm tra (5;8), (4;2) với f = x²−4x+3) | tự soạn (trong slide đồ thị) |
| VD5 | Xét mệnh đề đồng biến/nghịch biến của y = x² — phản ví dụ | bank `2026C6-B15-013` |
| VD6 | Chiều biến thiên parabol qua đỉnh + dấu a; khoảng con | bank `2026C6-B16-015` |
| VD7 | Toạ độ đỉnh parabol (kĩ năng 10 giây, nhịp HSA 90″/câu) | bank `2026C6-B16-014` |
| VD8 | Xác định hệ số b, c từ điểm + trục đối xứng | bank `2026C6-B16-019` |
| VD9 | GTLN–GTNN trên đoạn [0;3] — đỉnh thuộc đoạn | tự soạn (hạt giống) |
| VD10 | Parabol thực tế: dựng h(t) từ 3 dữ kiện, giải h=0, làm tròn | bank `2026C6-B16-013` |
| VD11 | Tối ưu thực tế: rào 32 m → S max (mô hình 3 bước) | bank `2026C6-B17-014` |

Slide **"Một câu hỏi — bốn kì thi"**: bài rào 32 m biến thể thành Đ/S 4 ý TN THPT (kèm biến thể rào 3 cạnh dựa tường, S_max = 128 m²), điền đáp án HSA, kéo thả/chọn nhiều TSA, tự luận barem SPT — 4 biến thể này **tự soạn**, dùng được làm mẫu cho phiếu template sau.

## (c) Câu bank đã dùng (phiếu sau KHÔNG lấy lại)

Bank nguồn: `Latex/Bank/C3/L10/C6/_bankC6_tn.tex` (104 TN, B15–B18, **không có feedback** — lời giải trong bài giảng do Claude tự giải, đã kiểm đáp án khớp `\item*`).

- **Ví dụ:** B15-001, B15-005, B15-007, B15-013, B15-020, B16-013, B16-014, B16-015, B16-019, B17-014.
- **Luyện tập cuối giờ:** B15-018 (Bài 1), B15-015 (Bài 2), B16-020 (Bài 5), B15-010 (Bài 7), B16-007 (Bài 8), B16-012 (Bài 9).
- **Tự soạn, không có trong bank:** Bài 3 (đỉnh y=−2x²+8x−1), Bài 4 (GTLN-GTNN [3;5]), Bài 6 (doanh thu bánh 30 000đ), bộ hạt giống, 4 biến thể "bốn kì thi".

⚠️ **Ghi chú nguồn quan trọng:**
- Bank `Latex/Bank/C3/L10/C3/BankC3.tex` mà prompt chỉ định **bị lệch slot** — nội dung thật là *Hệ thức lượng trong tam giác* (header file tự cảnh báo), KHÔNG có câu hàm số → A1 chỉ dùng bank C6.
- Bank C6 **không có câu đọc đồ thị/BBT bằng hình** (soạn giả đã loại từ đầu) — đồ thị trong bài giảng là SVG tự vẽ.
- Bank C6 còn ~26 câu B15/B16 chưa dùng (đủ cho minitest); B17 (dấu tam thức) + B18 (PT quy về bậc hai) gần như chưa đụng — để dành các buổi sau.

## (d) Gợi ý dạng nên đưa vào phiếu tự luận A1 (kèm barem kiểu SPT)

1. **TXĐ tổng hợp**: căn + phân thức + căn dưới mẫu trong cùng một hàm; 1 câu chứa tham số m (kiểu B15-010) — barem: điểm cho *hệ điều kiện đúng* trước, *giao đúng* sau.
2. **Xét đồng biến/nghịch biến bằng định nghĩa** (lập tỉ số [f(x₁)−f(x₂)]/(x₁−x₂) hoặc xét hiệu) cho 1 hàm bậc nhất + 1 hàm bậc hai trên khoảng cho trước — bài giảng chỉ dạy đọc đồ thị/đỉnh, phiếu cần bổ sung kĩ năng trình bày định nghĩa.
3. **Lập BBT + vẽ parabol hoàn chỉnh** (đỉnh, trục, giao 2 trục, bề lõm) — dạng "đọc-vẽ" mà bank không có; chấm từng chi tiết trên hình.
4. **Xác định a, b, c từ điều kiện** — đủ 3 kiểu manh mối: qua 3 điểm / đỉnh + điểm / trục + tương giao Ox (kiểu B16-007 nhưng trình bày đầy đủ).
5. **GTLN–GTNN trên đoạn**: 2 câu (đỉnh trong đoạn / ngoài đoạn) + 1 câu ngược "tìm m để min f = …".
6. **Bài thực tế mô hình hoá trọn vẹn** (đặc sản 4 kì thi): cổng parabol hoặc ném vật + bài rào 3 cạnh dựa tường (đã gieo ở slide 4-kì-thi, HS được gợi trước) — barem SPT: điểm cho đặt biến + điều kiện, lập hàm, lập luận đỉnh, kết luận đơn vị (4 bước × điểm thành phần).
7. Nhắc lại "hạt giống": mở phiếu bằng 5 câu tính nhanh quanh một hàm bậc hai mới (tương tự f(x)=x²−4x+3) để giữ nhịp bài giảng.
