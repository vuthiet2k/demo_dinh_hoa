# Hệ Thống Số Hóa Di Tích Lịch Sử ATK Định Hóa — Thủ Đô Gió Ngàn Chiến Khu Việt Bắc

**Chuẩn Quy Trình Vận Hành:** Astra Agentic Workflow · **Kiểu Chữ Chủ Đạo (Typography):** `Merriweather` (Google Fonts) · **Kiến Trúc Token:** W3C DTCG 3-Tier Tokens (60–30–10) · **Kiểm Định Tương Phản:** W3C WCAG 2.2 AA/AAA · **Quy Chuẩn Hình Học:** Flat & Sharp (`border-radius: 0px`, `box-shadow: none`).

## 1. Kiến Trúc Phân Mảnh Mã Nguồn (Modular Codebase Architecture)

Toàn bộ giao diện và dữ liệu được tách thành các mô-đun độc lập (không gộp chung vào một file đơn lẻ):

```text
demo_dinh_hoa/
├── index.html                           # Entry point HTML gọn nhẹ (nạp Google Fonts Merriweather, CSS & các module JS)
├── vercel.json                          # Cấu hình triển khai tĩnh & Security Headers trên Vercel
├── package.json                         # Metadata dự án & scripts kiểm định
├── tailwind.config.js                   # Cấu hình Tailwind CSS ánh xạ font Merriweather, Semantic Tokens & ép 0px radius/shadow
├── styles/
│   ├── tokens.json                      # Bộ biến màu & kiểu chữ Merriweather chuẩn W3C DTCG 3-Tier (Option 1, 2, 3)
│   └── themes.css                       # CSS Variables (--font-primary: 'Merriweather') & hệ thống class hình học phẳng
├── src/
│   ├── data/
│   │   └── relics-data.js               # File JS lưu trữ độc lập toàn bộ dữ liệu 8 di tích, GIS, Flipbook 10 trang, Quiz, Kịch bản 250 từ & Tuyến du lịch
│   └── components/
│       ├── app-controller.js            # Module 1: Trang chủ Hub Tổng (Main.jpg), VR 360° & 2 Tuyến Du lịch Số
│       ├── gis-map-module.js            # Module 2: Bản đồ Số Không gian Địa lý GIS VN-2000 & Đo đạc Lộ trình Dijkstra
│       ├── flipbook-module.js           # Module 3: Ấn phẩm Số hóa 3D Flipbook Khổ A5 (10 trang) & Audio Guide AI
│       └── edu-hub-module.js            # Module 4: Edu-Hub Trắc nghiệm 1 chạm, Thuyết minh viên nhí 250 từ & Sổ tay 8 Con dấu
└── data/
    └── relics.json                      # Bản lưu JSON đối chiếu chuẩn dữ liệu gốc
```

## 2. Đối Chiếu 4 Màn Hình Thiết Kế Chuẩn (Google Stitch Visual Alignment)

1. **Màn hình 1 — Trang Chủ Hub Tổng (`Main.jpg` $\rightarrow$ `src/components/app-controller.js`)**:
   - Thanh trạng thái `CỔNG DỮ LIỆU ĐỊA CHỈ ĐỎ QUỐC GIA | CHIẾN KHU VIỆT BẮC (1947-1954)` & mã `BQL-ATK-TN01`.
   - Hero 2 cột kèm trích dẫn Hồi ký Đại tướng Võ Nguyên Giáp và khung trưng bày số hóa lưu trữ.
   - Dải 4 chỉ số KPI (`08 Điểm Di Tích Số Hóa`, `100% Thực Tế Ảo & Audio`, `1947 Mốc Son Kháng Chiến`, `8/8 Con Dấu Check-in`).
   - Lưới 8 Điểm Di tích chuẩn hóa (4x2), Khung trải nghiệm Thực tế ảo VR 360° Panorama 8K và 2 Tuyến Du lịch Số.
2. **Màn hình 2 — Bản Đồ Số Không Gian Địa Lý GIS (`Bản Đồ Số GIS - ATK Định Hóa.jpg` $\rightarrow$ `src/components/gis-map-module.js`)**:
   - Thanh quy chiếu `VN-2000 (Kinh tuyến trục 105°45') | WGS-84 RTK ±0.03m | Mảnh bản đồ F-48-56-C` & mã `GIS-ATK-2024-V3.2`.
   - Bộ lọc 8 điểm, 3 chế độ bản đồ (`Hành Chính`, `Vệ Tinh Địa Hình`, `Chiến Khu 1947-1954`), hộp Lớp dữ liệu phụ kháng chiến và thẻ Pop-up khảo sát RTK trực tiếp trên bản đồ.
   - Bảng tính toán lộ trình Dijkstra (Point A $\leftrightarrow$ Point B, xuất GPX/KML) và 4 thẻ thông số trắc địa (`128 km²`, `32 Mốc`, `1947-1954`, `±0.03 m`).
3. **Màn hình 3 — Ấn Phẩm Số Hóa 3D Cẩm Nang (`Cẩm Nang Số 3D Flipbook - ATK Định Hóa.jpg` $\rightarrow$ `src/components/flipbook-module.js`)**:
   - Mã lưu chiểu `ATK-DH-2024-VR`, quy chuẩn `KHỔ A5 • 10 TRANG`.
   - Sách mở 2 trang (Trang trái: ảnh tư liệu thực địa gốc, dấu đỏ Lưu trữ Quốc gia, trích lục nhật ký quân sự; Trang phải: Quyết định xếp hạng, nội dung di tích, hiện trạng bảo tồn, mã QR Virtual Tour 360°).
   - Mục lục 10 trang bên phải, thanh kéo trang `01 — 10` và trình phát `AUDIO GUIDE ĐỒNG BỘ` giọng đọc AI Thái Nguyên.
4. **Màn hình 4 — Edu-Hub & Sổ Tay Check-in (`Edu-Hub & Quiz Test - ATK Định Hóa.jpg` $\rightarrow$ `src/components/edu-hub-module.js`)**:
   - Bảng điểm `HỒ SƠ VỀ NGUỒN` (`80/100 Điểm`, `3/8 Điểm`, danh hiệu `CHIẾN SĨ THI ĐUA VỀ NGUỒN`).
   - Mô-đun 01: Thử thách trắc nghiệm lịch sử 1 chạm + Thang bậc thi đua 4 cấp danh hiệu.
   - Mô-đun 02: Góc Thuyết minh viên nhí chuẩn 250 từ (chia 3 đoạn: 50 từ, 140 từ, 60 từ) + Đồng hồ đếm lùi `02:00`.
   - Mô-đun 03: Sổ tay Check-in & 8 Con dấu Di sản ATK (`ATK-CH-9482`, `ATK-BT-4410`, `ATK-K77-7705`...) kèm xác thực bán kính GPS Geofencing 150m.
