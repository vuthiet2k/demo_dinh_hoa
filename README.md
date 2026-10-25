# Hệ Sinh Thái Số Hóa Di Tích Lịch Sử Cách Mạng & Anh Hùng Dân Tộc — ATK Định Hóa (Thái Nguyên)

**Chuẩn Quy Trình Vận Hành:** Astra Agentic Workflow · **Kiến Trúc Token:** W3C DTCG 3-Tier Tokens · **Kiểm Định Tương Phản:** W3C WCAG 2.2 AA/AAA · **Quy Chuẩn Hình Học:** Flat & Sharp (`border-radius: 0px`, `box-shadow: none`).

## 1. Hồ Sơ Quản Trị Dự Án & Nguồn Dẫn Chứng (Provenance Baseline)

- **Kho lưu trữ mã nguồn (GitHub Vercel):** [vuthiet2k/demo_dinh_hoa](https://github.com/vuthiet2k/demo_dinh_hoa) (Nhánh mặc định: `main`)
- **Tài liệu Đặc tả Hệ màu 60–30–10:** [Đặc Tả 3 Hệ Màu UI/UX (60–30–10) — Di Tích Lịch Sử Cách Mạng & Anh Hùng Dân Tộc](https://docs.google.com/document/d/1Lkup3rL1z9TBAdwhukchsTc67LJmUpjJjWQ2p4r5N9U/edit?tab=t.0)
- **Tài liệu Chuẩn UI/UX Hệ sinh thái Định Hóa:** [Tài Liệu Chuẩn UI/UX & Đặc Tả Hệ Thống Giao Diện Số Hóa Di Tích Định Hóa](https://docs.google.com/document/d/1Rn2pbhcyOWE1wiIVy5w0q6xWbrZj6kBnrPu4_55a2hY/edit)
- **Dữ liệu gốc 8 điểm di tích:** [Danh sách 8 điểm số hoá Định Hóa](https://docs.google.com/spreadsheets/d/1QUXeQnvpUx10NV_87W1u445fNWhedBii0UMwKkQmXZw/edit?gid=1689620034#gid=1689620034)
- **Thư mục lưu trữ dự án:** [Thư mục v2 – Xã Định Hoá](https://drive.google.com/drive/folders/1iLI3n3EHtFX61EO4HdzgReWJ5hAzWMeG)
- **Metadata Phiên bản:** `prd_version: UI-COLOR-SPEC-v2.0` · `policy_version: ASTRA-GPT6-1.0` · `schema_version: DTCG-2026.1` · `plan_version: PLAN-COLOR-60-30-10-v1.0`

---

## 2. Đặc Tả 3 Hệ Màu UI/UX Theo Tỷ Lệ 60–30–10 (Chuẩn W3C WCAG 2.2)

Dự án hỗ trợ chuyển đổi linh hoạt giữa **3 hệ màu chuẩn 60–30–10** (Mặc định: **Option 1** cho Cổng thông tin chính, kèm bộ chuyển đổi trực tiếp và chế độ Context-Aware theo phân hệ):

| Vai trò Semantic Token (DTCG) | Option 1 — Hào hùng & Trang trọng ([baotanghochiminh.vn](https://baotanghochiminh.vn/)) | Option 2 — Ký ức & Lịch sử sâu lắng ([vietnam.vn](https://www.vietnamplus.vn/thong-tin-doi-ngoai-ra-mat-nen-tang-quang-ba-viet-nam-da-ngon-ngu-post856934.vnp)) | Option 3 — Khát vọng & Tự do ([baotanglichsuquocgia.vn](https://baotanglichsuquocgia.vn/)) | Mục đích áp dụng trên UI |
| :--- | :--- | :--- | :--- | :--- |
| `surface.bg.primary` (60%) | `#F6F0E4` (Nền giấy dó) | `#F1F0E5` (Be xám) | `#F3F7FA` (Trắng xanh) | Nền tổng thể, trang chi tiết di tích, nền đọc tư liệu |
| `surface.card.secondary` | `#E5DCCB` (Giấy dó đậm) | `#DADCCF` (Viền/Nền phụ) | `#DCE6ED` (Xanh nhạt) | Viền card, đường phân cách, nền thành phần phụ |
| `brand.primary.default` (30%) | `#8F2929` (Đỏ gạch) | `#566447` (Xanh olive) | `#356B91` (Xanh hòa bình) | Header, thanh điều hướng, nút CTA chính, trạng thái active |
| `brand.accent.highlight` (10%) | `#C29A50` (Vàng đồng) | `#B9A16A` (Vàng cổ) | `#D7AD45` (Vàng sao) | Huy hiệu, mốc thời gian, số liệu nổi bật, đường viền nhấn |
| `brand.accent.secondary` | `#8F2929` (Đồng nhất Primary) | `#566447` (Đồng nhất Primary) | `#B9574B` (Đỏ son dịu) | Nhãn sự kiện đặc biệt, điểm nhấn phụ |
| `text.primary.body` | `#292723` (Than đậm - 13.13:1 AAA) | `#292E27` (Than xanh - 12.11:1 AAA) | `#263541` (Xanh than - 11.69:1 AAA) | Tiêu đề lớn, nội dung bài viết, hồ sơ nhân vật |
| `text.on-brand.inverse` | `#F6F0E4` / `#FFFFFF` (7.35:1 - 8.34:1 AAA) | `#FFFFFF` (6.35:1 AA+) | `#FFFFFF` (5.73:1 AA) | Chữ trên nút CTA và thanh Header |

### Quy Chuẩn Thiết Kế Bắt Buộc (Strict Geometric & Cultural Rules)
1. **Không bo góc (`border-radius: 0px`)**: Mọi khung chứa, thẻ card, nút bấm, ô nhập liệu, huy hiệu và khung hình ảnh đều vuông góc 100%.
2. **Không đổ bóng (`box-shadow: none`)**: Phân tách lớp hoàn toàn bằng tỷ lệ màu nền 60–30–10 và đường viền sắc nét (`1px` / `2px` / `4px solid`).
3. **Không dùng họa tiết mây cổ hoặc biểu tượng đình chùa**: Giữ vững bản sắc Di tích lịch sử cách mạng ATK Định Hóa.
4. **Kiểm soát màu nhấn (Accent 10%)**: Tuyệt đối không dùng màu Accent (`#C29A50`, `#B9A16A`, `#D7AD45`) làm chữ nhỏ trên nền sáng; chỉ dùng làm nền huy hiệu đi kèm chữ đậm Neutral Dark hoặc chi tiết đồ họa/viền nhấn.

---

## 3. Danh Mục 8 Điểm Di Tích Lịch Sử Số Hóa Tại Định Hóa

| Mã định danh | Cấp xếp hạng | Địa chỉ | Tên điểm di tích chuẩn xác | Số Quyết định công nhận |
| :--- | :--- | :--- | :--- | :--- |
| **DH-QG-01** | Quốc gia | TT Chợ Chu | Danh lam thắng cảnh Chùa Hang | Số 515/QĐ-BVHTTDL (2015) |
| **DH-QG-02** | Quốc gia | Xã Bảo Linh | Di tích lịch sử Nơi ở và làm việc của Bộ Tổng tham mưu QĐND VN (1949 - 1954) | Số 2245/QĐ-BVHTTDL ngày 29/6/2015 |
| **DH-QG-03** | Quốc gia | Xã Đồng Thịnh | Xưởng Đội Cấn - Nhà máy Quân giới K77 (1947 - 1954) | Số 2245/QĐ-BVHTTDL (2017) |
| **DH-QG-04** | Quốc gia | Xã Bảo Cường | Di tích lịch sử Nơi thành lập và đóng quân của Cục Tổng Thanh tra Quân đội Quốc gia Việt Nam (1948 - 1954) | Số 86/QĐ-BVHTTDL ngày 16/01/2018 |
| **DH-QG-05** | Quốc gia | Xã Bảo Linh | Di tích lịch sử Địa điểm nơi ở và làm việc của Cục Tác chiến (1949 - 1954), xã Bảo Linh, huyện Định Hóa | Số 3545/QĐ-BVHTTDL ngày 20/11/2024 |
| **DH-CT-01** | Cấp Tỉnh | TT Chợ Chu | Di tích lịch sử Nơi thành lập Tiểu đoàn 187, tiền thân của Lữ đoàn 144 – Bộ Tổng tham mưu | Số 2785/QĐ-UBND (2014) |
| **DH-CT-02** | Cấp Tỉnh | TT Chợ Chu | Địa điểm thành lập Đảng bộ Châu Định Hóa, tiền thân của Đảng bộ huyện/xã Định Hóa (26/6/1946) | Quyết định ngày 01/12/2014 (2020) |
| **DH-CT-03** | Cấp Tỉnh | TT Chợ Chu | Di tích lịch sử Địa điểm cuộc mít tinh tại đình Quan Đế (28/3/1945), đại diện Mặt trận Việt Minh tuyên bố xóa bỏ chính quyền tay sai do thực dân Pháp dựng lên, thị trấn Chợ Chu, Định Hóa, Thái Nguyên | Số 3873/QĐ-UBND (2023) |

---

## 4. Cấu Trúc Thư Mục Dự Án (Vercel Ready)

```text
demo_dinh_hoa/
├── index.html              # Giao diện Hub Tổng + Bộ chuyển đổi 3 Hệ màu (60-30-10) + 5 Khối Nội dung Chuẩn
├── vercel.json             # Cấu hình triển khai tĩnh & Security/Cache Headers trên Vercel
├── package.json            # Metadata dự án & scripts kiểm định
├── tailwind.config.js      # Cấu hình Tailwind CSS ánh xạ Semantic Tokens DTCG & ép border-radius/box-shadow = 0
├── styles/
│   ├── tokens.json         # Bộ biến màu chuẩn W3C DTCG 3-Tier (Primitives, Semantics, Components)
│   └── themes.css          # CSS Custom Variables cho Option 1, Option 2, Option 3 & quy tắc hình học phẳng
└── data/
    └── relics.json         # Cơ sở dữ liệu chuẩn của 8 điểm di tích lịch sử ATK Định Hóa
```
