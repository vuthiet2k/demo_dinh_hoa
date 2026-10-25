# Hệ Sinh Thái Số Hóa Di Tích Lịch Sử Cách Mạng & Chuyên Đề Mùa Thu Độc Lập — ATK Định Hóa (Thái Nguyên)

**Chuẩn Quy Trình Vận Hành:** Astra Agentic Workflow · **Kiến Trúc Token:** W3C DTCG 3-Tier Tokens · **UI Framework:** Bootstrap 5.3.3 CDN · **Thiết Kế Gốc:** Figma Node `28:2` · **Quy Chuẩn Hình Học:** Flat & Sharp (`border-radius: 0px`, `box-shadow: none`).

## 1. Hồ Sơ Quản Trị Dự Án & Nguồn Dẫn Chứng (Provenance Baseline)

- **Kho lưu trữ mã nguồn (GitHub Vercel):** [vuthiet2k/demo_dinh_hoa](https://github.com/vuthiet2k/demo_dinh_hoa) (Nhánh mặc định: `main`)
- **Thiết kế giao diện Figma (Node `28:2`):** [Figma Design — ANxe1oSyFCZDLHBBvYqYnE (node-id=28-2)](https://www.figma.com/design/ANxe1oSyFCZDLHBBvYqYnE/Untitled?node-id=28-2&t=NBSpMApXQKrev98B-4)
- **Tài liệu Đặc tả Hệ màu 60–30–10:** [Đặc Tả 3 Hệ Màu UI/UX (60–30–10) — Di Tích Lịch Sử Cách Mạng & Anh Hùng Dân Tộc](https://docs.google.com/document/d/1Lkup3rL1z9TBAdwhukchsTc67LJmUpjJjWQ2p4r5N9U/edit?tab=t.0)
- **Tài liệu Chuẩn UI/UX Hệ sinh thái Định Hóa:** [Tài Liệu Chuẩn UI/UX & Đặc Tả Hệ Thống Giao Diện Số Hóa Di Tích Định Hóa](https://docs.google.com/document/d/1Rn2pbhcyOWE1wiIVy5w0q6xWbrZj6kBnrPu4_55a2hY/edit)
- **Dữ liệu gốc 8 điểm di tích:** [Danh sách 8 điểm số hoá Định Hóa](https://docs.google.com/spreadsheets/d/1QUXeQnvpUx10NV_87W1u445fNWhedBii0UMwKkQmXZw/edit?gid=1689620034#gid=1689620034)
- **Metadata Phiên bản:** `prd_version: UI-COLOR-SPEC-v2.0` · `policy_version: ASTRA-GPT6-1.0` · `schema_version: DTCG-2026.1` · `plan_version: PLAN-BOOTSTRAP-THEME-FIGMA-28-2-v1.0`

## 2. Kiến Trúc Chuyển Màu Nền Các Section & Hệ Màu (Chuẩn Figma Node `28:2`)

Toàn bộ giao diện được cấu hình với **Bootstrap 5.3.3 CDN** kết hợp bộ biến CSS Custom Properties (`styles/themes.css` & `styles/tokens.json`), đảm bảo đúng 100% thứ tự chuyển màu nền giữa các section trong thiết kế Figma `28:2`:

| Thứ tự | Figma Node ID | Tên Section trên Giao diện | Token Màu Nền | Mã HEX (Option 1 - Figma `28:2`) | Màu Chữ / Điểm Nhấn Chính |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `28:110` | **Top Sovereign Banner** (Thông tin Ban chỉ đạo) | `--brand-primary-default` | `#8F2929` (`rgb(143,41,41)`) | Chữ `#F6F0E4` & Vàng kem `#DFC58E` |
| **2** | `28:423` | **Main Header Navigation** (Thanh điều hướng) | `--brand-primary-default` | `#8F2929` (`rgb(143,41,41)`) | Chữ `#F6F0E4`, Active `#DFC58E`, Icon Box `#6F1115` |
| **3** | `28:128` | **Hero Section** (Chuyên đề Mùa Thu Độc Lập) | `--surface-bg-primary` | `#F6F0E4` (`rgb(246,240,228)`) | Tiêu đề `#8F2929`, Quote Box `#ECE4D3`, Nút phụ `#F3EDE1` |
| **4** | `28:5` | **Historical Numbers / Milestones Ribbon** | `--surface-bg-ribbon` | `#ECE4D3` (`rgb(236,228,211)`) | 4 Thẻ số liệu nền `#F6F0E4`, Số `#8F2929` & `#C29A50` |
| **5** | `28:204` | **Key Exhibition Galleries** (3 Phân khu A, B, C) | `--surface-bg-primary` | `#F6F0E4` (`rgb(246,240,228)`) | 3 Thẻ phân khu nền `#FFFFFF`, Khung ảnh `#292723` |
| **6** | `28:299` | **Interactive Historical Timeline** (Biên niên sử) | `--surface-bg-ribbon` | `#ECE4D3` (`rgb(236,228,211)`) | Bước 1–3 nền `#F6F0E4`, Bước 4 (2/9/1945) nền `#8F2929` |
| **7** | `28:39` | **News & Educational Activities** + **8 Di tích ATK** | `--surface-bg-primary` | `#F6F0E4` (`rgb(246,240,228)`) | Thẻ tin tức & di tích nền `#FFFFFF`, Nhãn `#8F2929` |
| **8** | `28:363` | **Museum Visit Booking Callout** (Đăng ký đoàn) | `--brand-primary-default` | `#8F2929` (`rgb(143,41,41)`) | Chữ `#F6F0E4`, Nút CTA chính nền Vàng đồng `#C29A50` |
| **9** | `28:382` | **Footer** (Chân trang Bảo tàng Hồ Chí Minh) | `--surface-footer-dark` | `#292723` (`rgb(41,39,35)`) | Tiêu đề `#C29A50`, Liên hệ `#DFC58E`, Nội dung `#F6F0E4` |

### Quy Chuẩn Hình Học & Cấu Hình Bootstrap 5.3 CDN
1. **Không bo góc (`border-radius: 0px !important`)**: Ghi đè toàn bộ biến `--bs-border-radius*` của Bootstrap 5.3 về `0px` và áp dụng quy tắc phẳng tuyệt đối trên mọi `.btn`, `.card`, `.badge`, `.form-control`, `.navbar`.
2. **Không đổ bóng (`box-shadow: none !important`)**: Ghi đè `--bs-box-shadow* = none` và phân tách lớp hoàn toàn bằng sự chuyển tiếp màu nền (`#8F2929` → `#F6F0E4` → `#ECE4D3` → `#F6F0E4` → `#ECE4D3` → `#F6F0E4` → `#8F2929` → `#292723`) cùng đường viền sắc nét (`1px` / `2px` / `4px solid`).
3. **Typography chuẩn thiết kế**: Sử dụng `Merriweather` (700/400) cho hệ thống tiêu đề lớn, số liệu lịch sử, lời trích dẫn Tuyên ngôn Độc lập và `Be Vietnam Pro` (400/600/700) cho văn bản điều hướng, nhãn phân khu và nội dung thuyết minh.

## 3. Cấu Trúc Thư Mục Dự Án (Vercel Ready)

```text
demo_dinh_hoa/
├── index.html              # Giao diện chuẩn Figma 28:2 + Bootstrap 5.3 CDN + Bộ chuyển đổi 3 Hệ màu + 8 Di tích ATK
├── vercel.json             # Cấu hình triển khai tĩnh & Security/Cache Headers trên Vercel
├── package.json            # Metadata dự án & scripts kiểm định DTCG Tokens
├── tailwind.config.js      # Cấu hình đồng bộ Semantic Tokens DTCG & ép border-radius/box-shadow = 0
├── styles/
│   ├── tokens.json         # Bộ biến màu chuẩn W3C DTCG 3-Tier & đặc tả thứ tự chuyển màu section Figma 28:2
│   └── themes.css          # CSS Custom Variables, Bootstrap 5.3 overrides & quy tắc hình học phẳng
└── data/
    └── relics.json         # Cơ sở dữ liệu chuẩn của 8 điểm di tích lịch sử ATK Định Hóa
```
