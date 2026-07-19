# Manifest A1 — Toàn cảnh hàm số (BẢN HIỆN HÀNH: A1v3)

> Đầu vào cho phiên soạn **phiếu tự luận + minitest + liều quiz** của buổi A1.
> **Bài giảng hiện hành: [A1v3.html](A1v3.html)** (39 slide, 2026-07-13) = lời văn do user
> nhờ GPT trau chuốt (A1v2.html) + khung chuẩn hoá (chip chặng đồng bộ, CSS bóng đổ/heading
> bảng, sửa sót: "hạt giống"→"mười câu nền tảng", bỏ "trò chơi thám tử" mồ côi, thống nhất
> thuật ngữ **"dấu hiệu"** thay "chữ ký", 2 lỗi ngữ pháp). Arc 5 chặng theo
> `Latex/ThiDaiHoc/KeChuyenMachA.md` §3.0+§4: **nhu cầu → tình huống → hàm số → khái niệm
> → kĩ thuật**, mỗi chặng kết bằng 📌 tổng hợp; tờ HỒ SƠ hàm số 7 mục.
> (A1.html = bản V3.1 cũ; A1v2.html = bản lời văn GPT thô — giữ để đối chiếu, sẽ dọn sau khi chốt.)

## (a) Kĩ năng / quy tắc đã dạy

**Khung mới (xương sống cả mạch A — các buổi sau tái dùng):**

1. **Chuỗi bối cảnh gốc** — SỐNG cần → LÀM → bài toán → mối liên hệ → hàm số hoá → xử lý
   → sống tốt lên; kì thi = trạm kiểm tra. (Slide "Chuyện bắt đầu từ cuộc sống".)
2. **4 nhu cầu căn bản** — ① BIẾT TRƯỚC · ② NHIỀU NHẤT-ÍT NHẤT · ③ ĐẠT MỐC KHI NÀO ·
   ④ NHÌN TOÀN CẢNH; mọi câu hỏi trong 4 tình huống (taxi, cú đá bổng, tiền sinh sôi 1,06ⁿ,
   đu quay 20′/vòng) đều gắn tag nhu cầu.
3. **TỜ HỒ SƠ HÀM SỐ 7 MỤC** (dẫn xuất từ nhu cầu, KHÔNG áp đặt): gốc gác/quy tắc · TXĐ-TGT ·
   chân dung (đồ thị) · chiều biến thiên · nét riêng (đối xứng/tuần hoàn/tiệm cận) ·
   đỉnh-đáy (GTLN-GTNN) · nghiệm. Minh hoạ trọn trên f(x)=x²−4x+3.
4. **4 chiếc áo (4 biểu diễn)** — lời văn / bảng số (dân số VN 52,7·76,3·96,2 triệu) /
   đồ thị (điện tâm đồ) / công thức; kĩ năng "thay áo".
5. **Chữ ký nhận diện họ hàm từ bảng số** — +a đều = bậc nhất · ×a đều = mũ · lặp = tuần hoàn ·
   thay-đổi-của-thay-đổi đều = bậc hai (lộ ra ở bảng bóng rơi); trò kéo-thả `sq-dd` 3 bảng + thẻ nhiễu.
6. **Bản tổng hợp 7 họ hàm MỘT TRANG** (lý lịch trích ngang: chữ ký · khai sinh · mini SVG ·
   học ở buổi nào) — in dán góc học tập; + slide "thử tay nghề" 5 câu 20″
   (Boyle 0,5 lít · chu kì 20′ · 32 000 vi khuẩn · Richter ×100 · ống 6 triệu).
7. **Δy/Δx — tốc độ thay đổi trung bình** (bảng bóng rơi CN Tower: 5,14,23,…,82 m/giây,
   tăng ~10/giây) + câu treo "vận tốc đúng tại t=2?" (→ A6-A7).
8. **Trailer 4 bài toán lớn** — hộp trụ (A10) · gấp đôi tiền (A4) · vận tốc tức thời (A6-A7) ·
   diện tích bờ cong (A13); A13 quay lại bảng này.

**Kĩ thuật giữ từ bản cũ (đã duyệt, lời giải đã kiểm):**

9. Hàm số một-vào-một-ra; hàm nhiều công thức. 10. Hai lệnh cấm TXĐ + GIAO (hứa lệnh cấm mới:
tan ở A2, log ở A3). 11. Điểm thuộc đồ thị b=f(a). 12. Đồng biến-nghịch biến (định nghĩa cặp,
đọc trái→phải, BBT SVG kiểu SGK, phản ví dụ, khoảng con). 13. Chân dung parabol (trục −b/2a,
đỉnh thay-hoành-độ-vào-f, bề lõm). 14. GTLN-GTNN ba ứng viên (gieo A9). 15. Mô hình 3 bước
bài thực tế. Hạt giống: **f(x)=x²−4x+3** + mini-check √(x−1), 1/(x−2), (x−2)², 1−3x.

## (b) Ví dụ mẫu (số VD như bản 36-slide, không đổi)

| VD | Dạng | Nguồn |
| --- | --- | --- |
| VD1 | Dựng quy tắc từ lời văn — cước taxi (trả nợ tình huống 1) | bank `2026C6-B15-020` |
| VD2 | Hàm nhiều công thức — chọn đúng nhánh | bank `2026C6-B15-001` |
| VD3 | TXĐ bẫy "mẫu vô nghiệm" (chung slide với VD4) | bank `2026C6-B15-005` |
| VD4 | TXĐ giao 2 điều kiện, đầu mút thuộc D | bank `2026C6-B15-007` |
| VD5 | Bác bỏ mệnh đề đơn điệu bằng phản ví dụ | bank `2026C6-B15-013` |
| VD6 | Chiều biến thiên parabol + khoảng con | bank `2026C6-B16-015` |
| VD7 | Lần ngược hệ số từ manh mối | bank `2026C6-B16-019` |
| VD8 | GTLN–GTNN trên [0;3] — ba ứng viên | tự soạn (hạt giống) |
| VD9 | Dựng h(t) từ 3 dữ kiện, giải h=0 → 2,58 s; kèm đỉnh 8,79 m (trả nợ tình huống 2) | bank `2026C6-B16-013` |
| VD10 | Rào 32 m → S_max = 64 m² (mô hình 3 bước) | bank `2026C6-B17-014` |
| — | Điểm thuộc đồ thị (5;8)/(4;2); kéo-thả chữ ký; thử tay nghề 5 câu; bảng Δy/Δx | tự soạn |

**Bộ 3 slide "Một câu hỏi — bốn kì thi"**: GIỮ NGUYÊN bản đã duyệt (tham chiếu VD10/VD9);
engine [`assets/js/slide-quiz.js`](../assets/js/slide-quiz.js) (sq-sa 64 · sq-dd 3 ô + nhiễu ·
barem SPT 4×0,25đ).

## (c) Câu bank đã dùng (phiếu sau KHÔNG lấy lại)

Bank nguồn: `Latex/Bank/C3/L10/C6/_bankC6_tn.tex` (104 TN, B15–B18, không feedback — lời giải
Claude tự giải, đáp đã kiểm khớp `\item*`).

- **Trên slide:** B15-001, B15-005, B15-007, B15-013, B15-020 · B16-013, B16-015, B16-019 ·
  B17-014 · B15-018 (Bài 1 luyện).
- **🔓 TRẢ KHO cho phiếu/minitest:** B16-014, B16-020, B15-010, B16-007, B16-012
  (+ B15-015 nhiệt độ theo độ cao — bản V3 không dùng trên slide nữa, trả kho nốt).
- **Tự soạn:** Bài 2–4 luyện tập (đỉnh −2x²+8x−1=I(2;7) · GTLN [3;5]=0;8 · bánh 21 000 đ),
  hạt giống, 4 biến thể bốn-kì-thi, 4 tình huống chặng 1, thử tay nghề, bảng Δy/Δx (Stewart tr.29).

⚠️ Ghi chú nguồn (không đổi): bank L10/C3 lệch slot (hệ thức lượng) — chỉ dùng C6; C6 không có
câu đọc đồ thị/BBT hình; B17 tam thức + B18 PT quy về bậc hai gần như chưa đụng.

## (d) Gợi ý phiếu tự luận A1 (barem kiểu SPT)

1. **TXĐ tổng hợp** + 1 câu tham số m — dùng B15-010; barem: hệ điều kiện → giao.
2. **Đơn điệu bằng định nghĩa** (xét tỉ số/hiệu) — slide chỉ dạy đọc, phiếu dạy trình bày.
3. **Lập BBT + vẽ parabol hoàn chỉnh** — dạng đọc-vẽ bank không có.
4. **Xác định a,b,c từ manh mối** — dùng B16-007, B16-012, B16-020.
5. **GTLN-GTNN trên đoạn** (đỉnh trong/ngoài) + câu ngược tìm m; khởi động bằng B16-014.
6. **Mô hình hoá trọn vẹn** (cổng parabol/ném vật + rào 3 cạnh đã gieo) — barem 4 bước.
7. **🆕 Nhận diện họ hàm từ bảng dữ liệu thật** (4 bảng: +đều/×đều/lặp/Δ-của-Δ đều) — khớp chặng 2.
8. **🆕 Δy/Δx trên bảng số liệu** (quãng đường/dân số) — nhận xét nhanh dần/chậm dần, gieo A6-A7.
9. **🆕 Câu "gắn nhu cầu"**: cho 1 tình huống thực tế, HS tự đặt 3 câu hỏi theo nhu cầu ①②③
   rồi giải 1 câu — đúng tinh thần chặng 1 (bài mở phiếu, chấm điểm ý tưởng).
10. Nhắc hạt giống: mở phiếu bằng 5 câu tính nhanh quanh một hàm bậc hai mới.
