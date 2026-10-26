/**
 * CƠ SỞ DỮ LIỆU ĐỊA LÝ DI SẢN ĐẶC BIỆT & HỒ SƠ 5 KHỐI CHUẨN 8 ĐIỂM DI TÍCH ATK ĐỊNH HÓA
 * Tách biệt hoàn toàn dữ liệu ra file JS độc lập (src/data/relics-data.js)
 * Bao gồm: Dữ liệu 5 Khối Hồ sơ Chi tiết cho từng di tích + Bộ dựng Minh họa Kiến trúc & Tư liệu SVG
 */

window.ATK_PORTAL_DATA = {
  metadata: {
    systemCode: "GIS-ATK-2024-V3.2",
    archiveCode: "ATK-DH-2024-VR",
    eduSessionCode: "ATK-EDU-8492",
    vn2000Spec: "HỆ QUY CHIẾU QUỐC GIA VN-2000 (KINH TUYẾN TRỤC 105°45') • WGS-84 RTK ±0.03M • MẢNH BẢN ĐỒ F-48-56-C",
    stationStatus: "CỔNG DỮ LIỆU DI SẢN TRỰC TUYẾN 24/7",
    acceptanceNote: "Biên bản nghiệm thu Sở KH&CN Thái Nguyên số 18/BB-GIS",
    managementBoard: "Ban Quản lý Khu Di tích Lịch sử – Sinh thái ATK Định Hóa, Tỉnh Thái Nguyên",
    visitorAddress: "Phố Hợp Thành, Thị trấn Chợ Chu & Xã Phú Đình, Huyện Định Hóa, Tỉnh Thái Nguyên",
    openingHours: "07:30 – 17:00 (Tất cả các ngày trong tuần, kể cả ngày Lễ)",
    hotline: "0208 3878 354"
  },

  hero: {
    topBarLeft: "KHU DI TÍCH QUỐC GIA ĐẶC BIỆT ATK ĐỊNH HÓA — THÁI NGUYÊN",
    topBarRightCode: "THỦ ĐÔ GIÓ NGÀN CHIẾN KHU VIỆT BẮC (1947 – 1954)",
    topBarStatus: "ĐÓN KHÁCH THAM QUAN & TRẢI NGHIỆM SỐ 24/7",
    eyebrow: "DI TÍCH QUỐC GIA ĐẶC BIỆT • THỦ ĐÔ KHÁNG CHIẾN",
    titleLine1: "HỆ THỐNG SỐ HÓA DI TÍCH",
    titleLine2: "LỊCH SỬ ATK ĐỊNH HÓA",
    subtitle: "Hành Trình Về Nguồn Thủ Đô Gió Ngàn Chiến Khu Việt Bắc",
    description: "Khám phá trọn vẹn 08 điểm di tích lịch sử kháng chiến tiêu biểu tại huyện Định Hóa, tỉnh Thái Nguyên qua Hồ sơ Di sản 5 khối chuẩn, Bản đồ số địa lý GIS, Cẩm nang lật trang 3D Flipbook, Không gian thực tế ảo VR 360° và Hộ chiếu Di sản số.",
    quote: "“Thu Đông năm 1947, giặc Pháp mở cuộc tấn công lớn lên Việt Bắc hòng tiêu diệt cơ quan đầu não kháng chiến của ta... Nhưng Định Hóa nói riêng và Việt Bắc nói chung đã trở thành căn cứ địa bất khả xâm phạm.”",
    quoteAuthor: "— Đại tướng Võ Nguyên Giáp | Hồi ký “Chiến đấu trong vòng vây”",
    mediaOverlayTag: "KHÔNG GIAN DI SẢN LỊCH SỬ & TRẮC ĐỊA SỐ",
    mediaOverlayTitle: "Quần Thể Đại Bản Doanh Thủ Đô Kháng Chiến (1947 – 1954)",
    mediaOverlayMeta: "Thị trấn Chợ Chu • Xã Bảo Linh • Xã Đồng Thịnh • Xã Bảo Cường",
    mediaFooterLeft: "Đơn vị bảo tồn: Ban Quản lý Khu Di tích ATK Định Hóa",
    mediaFooterRight: "Xếp hạng Quốc gia & Cấp Tỉnh"
  },

  kpiMetrics: [
    {
      value: "08",
      label: "Điểm Di Tích Tiêu Biểu",
      sub: "05 Di tích Quốc gia & 03 Di tích Cấp Tỉnh",
      accentClass: "brand",
      targetView: "trang-chu",
      scrollId: "relicsDirectoryGridSection"
    },
    {
      value: "128 km²",
      label: "Bản Đồ Số Địa Lý GIS",
      sub: "Chuẩn tọa độ VN-2000 & Đo lộ trình thực địa",
      accentClass: "olive",
      targetView: "ban-do-gis"
    },
    {
      value: "10 Trang",
      label: "Cẩm Nang 3D Flipbook",
      sub: "Ấn phẩm khổ A5 kèm thuyết minh Audio AI",
      accentClass: "gold",
      targetView: "cam-nang-3d"
    },
    {
      value: "8/8",
      label: "Hộ Chiếu Con Dấu Số",
      sub: "Trắc nghiệm lịch sử & Check-in GPS thực địa",
      accentClass: "brand",
      targetView: "edu-hub"
    }
  ],

  gisFooterStats: [
    {
      title: "ĐỘ PHỦ KHÔNG GIAN",
      value: "128 km²",
      desc: "Bao quát 4 cụm địa bàn trọng điểm Chợ Chu, Bảo Linh, Đồng Thịnh và Bảo Cường."
    },
    {
      title: "MỐC TRẮC ĐỊA RTK",
      value: "32 Mốc",
      desc: "Được cắm cọc mốc bảo vệ vùng lõi di tích và vùng đệm sinh thái nghiêm ngặt."
    },
    {
      title: "TƯ LIỆU BẢN ĐỒ LỊCH SỬ",
      value: "1947–1954",
      desc: "Lồng ghép đối sánh bản đồ tác chiến Việt Bắc Thu - Đông 1947 và biên niên sử kháng chiến."
    },
    {
      title: "ĐỘ CHÍNH XÁC TRỤC",
      value: "±0.03 m",
      desc: "Tiêu chuẩn đo vẽ bản đồ địa chính quốc gia tỷ lệ 1/2.000 và 1/500 chuyên sâu."
    }
  ],

  communeDistribution: [
    {
      commune: "Thị Trấn Chợ Chu",
      items: "Chùa Hang, Đình Quan Đế, Đảng Bộ Châu, Tiểu đoàn 187",
      countLabel: "04 Điểm",
      filterKey: "TT Chợ Chu"
    },
    {
      commune: "Xã Bảo Linh",
      items: "Đại bản doanh Bộ Tổng Tham mưu, Cục Tác chiến QĐNDVN",
      countLabel: "02 Điểm",
      filterKey: "Xã Bảo Linh"
    },
    {
      commune: "Xã Đồng Thịnh",
      items: "Xưởng Đội Cấn – Nhà máy Quân giới K77",
      countLabel: "01 Điểm",
      filterKey: "Xã Đồng Thịnh"
    },
    {
      commune: "Xã Bảo Cường",
      items: "Nơi thành lập Cục Tổng Thanh tra Quân đội (Thôn Bãi Hội)",
      countLabel: "01 Điểm",
      filterKey: "Xã Bảo Cường"
    }
  ],

  /**
   * Hàm dựng hình minh họa kiến trúc & cảnh quan lịch sử SVG cho từng di tích
   * Đảm bảo 100% khung hình trên Landing Page, Trang Chi tiết, Flipbook, GIS và VR có đồ họa trực quan sắc nét
   */
  renderRelicVisualSvg: function (relicId, variant) {
    const mode = variant || "card";
    const palettes = {
      "DH-QG-01": { sky1: "#2A1815", sky2: "#5E211D", hill: "#3B4D3B", accent: "#D4A853", badge: "HANG ĐÁ VÔI THÁP TƯỢNG • CHỢ CHU", subtitle: "Căn cứ Bí mật VNTTX & Nơi Bác Hồ Làm Việc (1947)" },
      "DH-QG-02": { sky1: "#1E2F23", sky2: "#3E5A47", hill: "#293D2E", accent: "#DFC58E", badge: "ĐỒI TỈ XÃ BẢO LINH • BỘ TỔNG THAM MƯU", subtitle: "Đại bản doanh Đại tướng Võ Nguyên Giáp (1949–1954)" },
      "DH-QG-03": { sky1: "#2D1E17", sky2: "#6E2B1C", hill: "#3B2F26", accent: "#E5A93C", badge: "RỪNG ĐỒNG THỊNH • QUÂN GIỚI K77", subtitle: "Xưởng Vũ khí Đội Cấn Chế Tạo Đạn Bazooka & Súng Cối" },
      "DH-QG-04": { sky1: "#232B35", sky2: "#354B5E", hill: "#2E4033", accent: "#D7AD45", badge: "THÔN BÃI HỘI • XÃ BẢO CƯỜNG", subtitle: "Nơi Thành Lập Cục Tổng Thanh Tra Quân Đội (1948–1954)" },
      "DH-QG-05": { sky1: "#263324", sky2: "#4A6141", hill: "#2B3B2B", accent: "#E2B857", badge: "ĐỒI KHAU MUỘC • XÃ BẢO LINH", subtitle: "Cơ quan Cục Tác Chiến Hoạch Định Chiến Dịch Lớn" },
      "DH-CT-01": { sky1: "#33221E", sky2: "#6B2D26", hill: "#394A36", accent: "#D9B362", badge: "ĐỒI CỌ THÔN ROÒNG • TT. CHỢ CHU", subtitle: "Tiểu Đoàn Cận Vệ 187 – Tiền Thân Lữ Đoàn 144" },
      "DH-CT-02": { sky1: "#3B1818", sky2: "#7A1C1C", hill: "#3A4434", accent: "#F0C76E", badge: "TRUNG TÂM THỊ TRẤN CHỢ CHU (26/6/1946)", subtitle: "Nơi Thành Lập Đảng Bộ Châu Định Hóa Đầu Tiên" },
      "DH-CT-03": { sky1: "#283627", sky2: "#4E6847", hill: "#2D3B2A", accent: "#E5BE67", badge: "CÂY ĐA CỔ THỤ ĐÌNH QUAN ĐẾ (28/3/1945)", subtitle: "Cuộc Mít Tinh Xóa Bỏ Chính Quyền Thực Dân Phong Kiến" },
      "HERO": { sky1: "#2B1513", sky2: "#6A1E1B", hill: "#344937", accent: "#E0B65B", badge: "THỦ ĐÔ GIÓ NGÀN • CHIẾN KHU VIỆT BẮC (1947–1954)", subtitle: "Quần Thể Di Tích Quốc Gia Đặc Biệt ATK Định Hóa – Thái Nguyên" }
    };
    const p = palettes[relicId] || palettes["HERO"];
    const heightClass = mode === "hero" ? "h-72 sm:h-80" : mode === "detail" ? "h-64 sm:h-80" : mode === "thumb" ? "h-28" : "h-44";

    let centerArtwork = "";
    if (relicId === "DH-QG-01") {
      // Vòm hang đá vôi Chùa Hang + Bia tưởng niệm + Sóng điện đài
      centerArtwork = `
        <path d="M20,210 Q80,55 200,55 Q320,55 380,210 Z" fill="#1C1A17" stroke="${p.accent}" stroke-width="2"/>
        <path d="M55,210 Q115,95 200,95 Q285,95 345,210 Z" fill="#2E2924"/>
        <polygon points="140,96 148,132 156,96" fill="#6E6559"/>
        <polygon points="195,95 203,142 211,95" fill="#7D7265"/>
        <polygon points="248,98 255,128 262,98" fill="#6E6559"/>
        <rect x="176" y="138" width="48" height="54" fill="#8F2929" stroke="${p.accent}" stroke-width="2"/>
        <polygon points="170,138 200,118 230,138" fill="${p.accent}"/>
        <circle cx="200" cy="156" r="16" fill="none" stroke="${p.accent}" stroke-width="1.2" stroke-dasharray="3 2"/>
        <circle cx="200" cy="156" r="28" fill="none" stroke="${p.accent}" stroke-width="1" stroke-dasharray="2 3" opacity="0.65"/>
        <text x="200" y="160" text-anchor="middle" fill="#FFF" font-size="9" font-weight="bold">VNTTX</text>
      `;
    } else if (relicId === "DH-QG-02" || relicId === "DH-QG-05") {
      // Lán tác chiến dưới đồi cọ Bảo Linh + Bản đồ chiến dịch
      centerArtwork = `
        <path d="M0,195 Q110,120 230,165 T400,150 L400,220 L0,220 Z" fill="${p.hill}"/>
        <polygon points="115,145 200,98 285,145" fill="#8C6D3F" stroke="${p.accent}" stroke-width="2"/>
        <rect x="135" y="145" width="130" height="52" fill="#4A3B28" stroke="${p.accent}" stroke-width="1.5"/>
        <rect x="155" y="156" width="90" height="32" fill="#F6F0E4" stroke="#7A1C1C" stroke-width="1.5"/>
        <polyline points="162,178 182,165 205,174 235,162" fill="none" stroke="#7A1C1C" stroke-width="2"/>
        <circle cx="75" cy="130" r="24" fill="#2E4A31" stroke="#5A7D5C" stroke-width="1.5"/>
        <rect x="72" y="150" width="6" height="38" fill="#5C4328"/>
        <circle cx="325" cy="126" r="26" fill="#2E4A31" stroke="#5A7D5C" stroke-width="1.5"/>
        <rect x="322" y="148" width="6" height="40" fill="#5C4328"/>
      `;
    } else if (relicId === "DH-QG-03") {
      // Xưởng Quân giới K77 + Bánh xe nước + Lò rèn vũ khí
      centerArtwork = `
        <path d="M0,195 Q140,135 280,170 T400,155 L400,220 L0,220 Z" fill="${p.hill}"/>
        <rect x="115" y="132" width="170" height="62" fill="#3D2B22" stroke="${p.accent}" stroke-width="2"/>
        <polygon points="102,132 200,92 298,132" fill="#6E2B1C" stroke="${p.accent}" stroke-width="2"/>
        <circle cx="155" cy="164" r="18" fill="none" stroke="${p.accent}" stroke-width="2.5"/>
        <line x1="137" y1="164" x2="173" y2="164" stroke="${p.accent}" stroke-width="1.5"/>
        <line x1="155" y1="146" x2="155" y2="182" stroke="${p.accent}" stroke-width="1.5"/>
        <rect x="205" y="146" width="56" height="36" fill="#8F2929" stroke="#F0C76E" stroke-width="1.5"/>
        <text x="233" y="168" text-anchor="middle" fill="#FFF" font-size="11" font-weight="bold">K77</text>
      `;
    } else if (relicId === "DH-CT-03") {
      // Cây đa cổ thụ Đình Quan Đế + Mái đình + Cờ đỏ sao vàng
      centerArtwork = `
        <path d="M0,198 Q200,155 400,195 L400,220 L0,220 Z" fill="${p.hill}"/>
        <circle cx="135" cy="122" r="42" fill="#2A4B2C" stroke="#6B8E63" stroke-width="2"/>
        <circle cx="105" cy="136" r="28" fill="#234024"/>
        <circle cx="165" cy="136" r="28" fill="#234024"/>
        <rect x="126" y="152" width="18" height="44" fill="#5A3E28"/>
        <polygon points="195,142 265,106 335,142" fill="#8F2929" stroke="${p.accent}" stroke-width="2"/>
        <rect x="212" y="142" width="106" height="50" fill="#4A251D" stroke="${p.accent}" stroke-width="1.5"/>
        <rect x="258" y="75" width="32" height="20" fill="#B91C1C" stroke="#FFF" stroke-width="1"/>
        <text x="274" y="89" text-anchor="middle" fill="#FFD700" font-size="12">★</text>
        <line x1="258" y1="75" x2="258" y2="142" stroke="#FFF" stroke-width="2"/>
      `;
    } else {
      // Nhà bia tưởng niệm di tích chuẩn Quốc gia / Cấp tỉnh + Đồi cọ + Cờ Tổ quốc
      centerArtwork = `
        <path d="M0,195 Q130,130 260,165 T400,145 L400,220 L0,220 Z" fill="${p.hill}"/>
        <polygon points="130,126 200,86 270,126" fill="#8F2929" stroke="${p.accent}" stroke-width="2"/>
        <rect x="148" y="126" width="104" height="66" fill="#3B231E" stroke="${p.accent}" stroke-width="1.5"/>
        <rect x="172" y="136" width="56" height="48" fill="#241614" stroke="${p.accent}" stroke-width="1.5"/>
        <text x="200" y="156" text-anchor="middle" fill="${p.accent}" font-size="10" font-weight="bold">BIA DI TÍCH</text>
        <text x="200" y="171" text-anchor="middle" fill="#FFFFFF" font-size="9">ATK ĐỊNH HÓA</text>
      `;
    }

    return `
      <div class="relative w-full ${heightClass} overflow-hidden border border-subtle bg-[#1F1A17] select-none">
        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" class="w-full h-full block">
          <defs>
            <linearGradient id="grad-${relicId}-${mode}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${p.sky1}" />
              <stop offset="100%" stop-color="${p.sky2}" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#grad-${relicId}-${mode})" />
          <!-- Lưới tọa độ quân sự mờ -->
          <line x1="0" y1="55" x2="400" y2="55" stroke="#FFFFFF" stroke-opacity="0.07" stroke-dasharray="4 4" />
          <line x1="0" y1="110" x2="400" y2="110" stroke="#FFFFFF" stroke-opacity="0.07" stroke-dasharray="4 4" />
          <line x1="100" y1="0" x2="100" y2="220" stroke="#FFFFFF" stroke-opacity="0.07" stroke-dasharray="4 4" />
          <line x1="200" y1="0" x2="200" y2="220" stroke="#FFFFFF" stroke-opacity="0.07" stroke-dasharray="4 4" />
          <line x1="300" y1="0" x2="300" y2="220" stroke="#FFFFFF" stroke-opacity="0.07" stroke-dasharray="4 4" />
          <!-- Dãy núi Việt Bắc phía xa -->
          <polygon points="0,175 65,115 145,160 235,102 325,155 400,118 400,220 0,220" fill="#1B281E" opacity="0.75" />
          ${centerArtwork}
        </svg>
        ${mode !== "thumb" ? `
          <div class="absolute top-2.5 left-2.5 bg-black/75 border border-white/25 px-2.5 py-1 text-[10px] font-sans font-bold text-[#F0D796] uppercase tracking-wider">
            ★ ${p.badge}
          </div>
          <div class="absolute bottom-0 inset-x-0 bg-black/75 border-t border-white/15 px-3 py-2 flex items-center justify-between gap-2 text-white">
            <span class="text-[11px] font-sans font-medium truncate">${p.subtitle}</span>
            <span class="text-[10px] font-mono-code text-[#DFC58E] shrink-0">VN-2000 VERIFIED</span>
          </div>
        ` : ""}
      </div>
    `;
  },

  relics: [
    {
      order: 1,
      id: "DH-QG-01",
      gisCode: "ATK-CC-04",
      stampVerifyCode: "ATK-CH-9482",
      shortTabName: "1. Chùa Hang",
      stampShortTitle: "1. Chùa Hang Định Hóa",
      stampBadgeLine: "CHÙA HANG",
      rank: "Quốc gia",
      rankBadge: "CẤP QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • TRUNG TÂM CHỢ CHU",
      categoryTag: "Danh lam thắng cảnh & Căn cứ Chủ tịch Hồ Chí Minh",
      name: "Chùa Hang Định Hóa",
      fullName: "Di tích Lịch sử & Thắng cảnh Chùa Hang (Thị trấn Chợ Chu)",
      commune: "TT Chợ Chu",
      communeFull: "Phố Chợ Chu, Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 515/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ số 1460-QĐ/VH (1999) & QĐ 515/QĐ-BVHTTDL",
      period: "1947 – 1954",
      lat: "21.912500°B",
      lng: "105.642800°Đ",
      elevation: "285m so với mực nước biển",
      distanceFromCenter: "0.8 km",
      mapPin: { x: 265, y: 120, num: 1, label: "1. Chùa Hang" },
      shortDesc: "Nơi đặt trạm báo chí bí mật, đài phát sóng của Việt Nam Thông tấn xã và là nơi Chủ tịch Hồ Chí Minh từng dừng chân làm việc trong Chiến dịch Việt Bắc Thu – Đông 1947.",
      fieldStatus: "Lòng hang đá vôi tự nhiên giữ nguyên hệ thống nhũ đá, dấu vết cải tạo kho quân nhu, bậc đá nguyên gốc và Nhà bia tưởng niệm Chủ tịch Hồ Chí Minh.",
      nextTargetId: "DH-CT-03",
      nextDistanceKm: "1.2 km",
      nextDurationText: "~4 phút đi xe / 15 phút đi bộ",
      stampedDefault: true,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử và Danh lam thắng cảnh cấp Quốc gia được Bộ Văn hóa - Thông tin (nay là Bộ VHTTDL) công nhận theo Quyết định số 1460-QĐ/VH ngày 28/6/1999 và bổ sung hồ sơ khoa học theo Quyết định số 515/QĐ-BVHTTDL.",
        historicalStory: [
          "Chùa Hang (còn gọi là Tiên Lữ Phật Động) nằm sâu trong lòng núi đá vôi Tháp Tượng thuộc trung tâm Thị trấn Chợ Chu. Không chỉ là thắng cảnh tâm linh cổ kính của vùng đất Định Hóa, nơi đây còn có vị trí địa quân sự đặc biệt hiểm yếu: vòm đá vôi dày hàng chục mét che chắn an toàn tuyệt đối trước các đợt oanh tạc bằng pháo binh và máy bay trinh sát của thực dân Pháp.",
          "Mùa Thu – Đông năm 1947, khi thực dân Pháp mở cuộc hành quân nhảy dù xuống Bắc Kạn (Chiến dịch Léa) nhằm bao vây căn cứ địa Việt Bắc, Chùa Hang đã trở thành nơi sơ tán và làm việc bí mật của bộ phận điện đài Việt Nam Thông tấn xã (VNTTX), xưởng in báo chí Trung ương và kho cất giấu tài liệu tối mật. Tại đây, các bản tin chiến thắng Sông Lô, Đèo Bông Lau đã được truyền đi khắp cả nước.",
          "Đặc biệt, trong những năm tháng kháng chiến tại ATK Định Hóa, Chủ tịch Hồ Chí Minh đã từng dừng chân nghỉ lại và làm việc tại Chùa Hang. Hình ảnh vị Cha già dân tộc làm việc giản dị bên vách đá hang Tháp Tượng đã trở thành biểu tượng thiêng liêng trong ký ức đồng bào các dân tộc huyện Định Hóa."
        ],
        timeline: [
          { year: "Thế kỷ XVIII", event: "Hình thành không gian thờ tự Phật giáo trong lòng động đá vôi núi Tháp Tượng và chữ khắc cổ trên vách đá." },
          { year: "Tháng 10/1947", event: "Trạm điện đài mật của Việt Nam Thông tấn xã và bộ phận ấn loát Trung ương chuyển vào lòng hang tránh máy bay Pháp oanh tạc." },
          { year: "1947 – 1948", event: "Chủ tịch Hồ Chí Minh dừng chân làm việc và chỉ đạo công tác kháng chiến tại khu vực Chùa Hang – Chợ Chu." },
          { year: "28/06/1999", event: "Bộ Văn hóa – Thông tin ban hành Quyết định xếp hạng Di tích Lịch sử & Thắng cảnh cấp Quốc gia." }
        ],
        keyFigures: ["Chủ tịch Hồ Chí Minh", "Đội ngũ cán bộ, kỹ thuật viên điện đài Việt Nam Thông tấn xã (VNTTX)", "Nhân dân các dân tộc Thị trấn Chợ Chu che chở, tiếp tế lương thực"],
        architectureItems: [
          "Vòm động đá vôi Tháp Tượng dài hơn 60m, trần hang cao thoáng với hệ thống nhũ đá nguyên sinh kỳ ảo.",
          "Nhà bia tưởng niệm Chủ tịch Hồ Chí Minh được xây dựng trang nghiêm dưới chân núi Chùa Hang.",
          "Nền đá phẳng bên trong hang — nơi từng đặt máy thu phát vô tuyến điện và bàn làm việc kháng chiến.",
          "Hệ thống bậc đá cổ dẫn lên cửa hang và khuôn viên cây xanh bảo vệ vùng lõi di tích."
        ],
        galleryCaptions: [
          "Cửa động đá vôi núi Tháp Tượng và đường bậc đá cổ dẫn lên Chùa Hang Định Hóa",
          "Không gian Nhà bia tưởng niệm Chủ tịch Hồ Chí Minh tại khuôn viên di tích",
          "Vòm nhũ đá tự nhiên bên trong lòng hang — nơi đặt điện đài mật năm 1947"
        ],
        travelGuide: "Từ ngã ba trung tâm Thị trấn Chợ Chu, di chuyển theo trục đường nội thị khoảng 800m về phía núi Tháp Tượng. Đường bê tông phẳng rộng, xe ô tô đoàn 45 chỗ đỗ ngay tại sân đón tiếp dưới chân núi."
      }
    },
    {
      order: 2,
      id: "DH-QG-02",
      gisCode: "ATK-BL-01",
      stampVerifyCode: "ATK-BT-4410",
      shortTabName: "2. Đồi Tỉ (BTTM)",
      stampShortTitle: "2. Bộ Tổng Tham Mưu Đồi Tỉ",
      stampBadgeLine: "BỘ TỔNG THAM MƯU",
      rank: "Quốc gia",
      rankBadge: "CẤP QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • ĐỒI TỈ BẢO LINH",
      categoryTag: "Cơ quan Đầu não Quân sự QĐNDVN",
      name: "Bộ Tổng Tham Mưu QĐNDVN (Đồi Tỉ)",
      fullName: "Di tích Cơ quan Bộ Tổng Tham Mưu QĐNDVN tại Đồi Tỉ (1949 – 1954)",
      commune: "Xã Bảo Linh",
      communeFull: "Thôn Đồi Tỉ, Xã Bảo Linh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 2245/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ số 2245/QĐ-BVHTTDL ngày 29/6/2015 của Bộ VHTTDL",
      period: "1949 – 1954",
      lat: "21.874200°B",
      lng: "105.612500°Đ",
      elevation: "340m dưới tán rừng cọ cổ thụ",
      distanceFromCenter: "2.4 km",
      mapPin: { x: 140, y: 185, num: 2, label: "2. Bộ Tổng TTM" },
      shortDesc: "Đại bản doanh nơi Đại tướng Võ Nguyên Giáp và Tổng Tham mưu trưởng Hoàng Văn Thái chỉ huy, lập kế hoạch tác chiến cho các chiến dịch lớn từ Biên giới 1950 đến Điện Biên Phủ 1954.",
      fieldStatus: "Nhà bia di tích Quốc gia, dấu tích hệ thống hầm hào chỉ huy và lán làm việc dưới tán rừng cọ Đồi Tỉ xã Bảo Linh.",
      nextTargetId: "DH-QG-05",
      nextDistanceKm: "1.8 km",
      nextDurationText: "~5 phút đi xe / 18 phút đi bộ",
      stampedDefault: true,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Quốc gia được Bộ Văn hóa, Thể thao và Du lịch xếp hạng theo Quyết định số 2245/QĐ-BVHTTDL ngày 29/6/2015.",
        historicalStory: [
          "Trong giai đoạn phát triển thế tiến công chiến lược (1949 – 1954), Cơ quan Bộ Tổng Tham mưu Quân đội Nhân dân Việt Nam đã đặt đại bản doanh tại khu vực Đồi Tỉ, xã Bảo Linh, huyện Định Hóa. Đồi Tỉ có địa thế kín đáo, nằm giữa những cánh rừng cọ và rừng vầu rậm rạp, lưng tựa dãy núi Hồng, thuận lợi cho việc bảo mật tuyệt đối và cơ động chỉ huy.",
          "Tại đây, dưới sự chỉ đạo trực tiếp của Đại tướng Tổng Tư lệnh Võ Nguyên Giáp và Thiếu tướng Tổng Tham mưu trưởng Hoàng Văn Thái, Bộ Tổng Tham mưu đã xây dựng phương án tác chiến cho hàng loạt chiến dịch xoay chuyển cục diện chiến tranh: Chiến dịch Biên giới Thu – Đông 1950, Chiến dịch Trần Hưng Đạo, Hoàng Hoa Thám, Quang Trung, Hòa Bình, Tây Bắc và đỉnh cao là Chiến dịch lịch sử Điện Biên Phủ năm 1954.",
          "Mỗi tấm bản đồ tác chiến căng trên vách nứa Đồi Tỉ đều kết tinh trí tuệ quân sự Việt Nam, biến căn cứ rừng cọ Bảo Linh thành 'bộ não tham mưu chiến lược' làm nên chiến thắng chấn động địa cầu."
        ],
        timeline: [
          { year: "Năm 1949", event: "Cơ quan Bộ Tổng Tham mưu chuyển đại bản doanh về đóng quân ổn định tại Đồi Tỉ, xã Bảo Linh." },
          { year: "Năm 1950", event: "Hoạch định kế hoạch tác chiến Chiến dịch Biên giới Thu – Đông 1950, khai thông biên giới Việt – Trung." },
          { year: "1953 – 1954", event: "Chuẩn bị kế hoạch tác chiến Đông – Xuân 1953–1954 và Chiến dịch Điện Biên Phủ trước khi xuất quân." },
          { year: "29/06/2015", event: "Bộ VHTTDL xếp hạng Di tích Lịch sử cấp Quốc gia theo Quyết định số 2245/QĐ-BVHTTDL." }
        ],
        keyFigures: ["Đại tướng Võ Nguyên Giáp (Tổng Tư lệnh QĐNDVN)", "Đại tướng Hoàng Văn Thái (Tổng Tham mưu trưởng đầu tiên)", "Các cán bộ, sĩ quan tham mưu tác chiến Bộ Tổng Tham mưu"],
        architectureItems: [
          "Nhà bia tưởng niệm Di tích Quốc gia Cơ quan Bộ Tổng Tham mưu thiết kế trang nghiêm.",
          "Dấu tích nền lán làm việc của Tổng Tham mưu trưởng và phòng giao ban tác chiến.",
          "Hệ thống hầm trú ẩn chữ A và giao thông hào bảo vệ dưới tán rừng cọ Đồi Tỉ.",
          "Tuyến đường liên lạc nội bộ kết nối sang Cục Tác chiến (Đồi Khau Muộc)."
        ],
        galleryCaptions: [
          "Nhà bia Di tích Quốc gia Cơ quan Bộ Tổng Tham mưu tại Đồi Tỉ, xã Bảo Linh",
          "Rừng cọ Đồi Tỉ che phủ kín đáo hệ thống lán trại và giao thông hào chỉ huy",
          "Sơ đồ bố trí các lán cơ mật của Bộ Tổng Tham mưu giai đoạn 1949 – 1954"
        ],
        travelGuide: "Từ Thị trấn Chợ Chu đi theo tuyến đường nhựa liên xã hướng Tây Nam về xã Bảo Linh khoảng 2,4km. Khu di tích có biển chỉ dẫn rõ ràng và sân dừng xe cho đoàn tham quan."
      }
    },
    {
      order: 3,
      id: "DH-QG-03",
      gisCode: "ATK-DT-03",
      stampVerifyCode: "ATK-K77-7705",
      shortTabName: "3. Quân Giới K77",
      stampShortTitle: "3. Xưởng Quân Giới K77",
      stampBadgeLine: "QUÂN GIỚI K77",
      rank: "Quốc gia",
      rankBadge: "CẤP QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • XÃ ĐỒNG THỊNH",
      categoryTag: "Công nghiệp Quốc phòng Kháng chiến",
      name: "Xưởng Đội Cấn – Quân Giới K77",
      fullName: "Di tích Xưởng Đội Cấn – Nhà máy Quân giới K77 (Xã Đồng Thịnh)",
      commune: "Xã Đồng Thịnh",
      communeFull: "Xã Đồng Thịnh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 2245/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ số 2245/QĐ-BVHTTDL ngày 29/6/2015 của Bộ VHTTDL",
      period: "1947 – 1954",
      lat: "21.868100°B",
      lng: "105.620200°Đ",
      elevation: "310m ven suối rừng Đồng Thịnh",
      distanceFromCenter: "3.1 km",
      mapPin: { x: 170, y: 225, num: 3, label: "3. Quân Giới K77" },
      shortDesc: "Cơ sở nghiên cứu, chế tạo vũ khí đạn dược chủ lực của ngành Quân giới Việt Nam, sản xuất đạn bazooka, súng cối và lựu đạn phục vụ các mặt trận lớn.",
      fieldStatus: "Nhà bia di tích Quốc gia kết hợp khuôn viên Nhà văn hóa thôn, bảo tồn dấu tích nền xưởng rèn đúc vũ khí kháng chiến.",
      nextTargetId: "DH-QG-04",
      nextDistanceKm: "5.2 km",
      nextDurationText: "~10 phút đi xe / 45 phút đi bộ",
      stampedDefault: true,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Quốc gia được Bộ Văn hóa, Thể thao và Du lịch xếp hạng theo Quyết định số 2245/QĐ-BVHTTDL ngày 29/6/2015.",
        historicalStory: [
          "Thực hiện chỉ đạo của Trung ương Đảng và Bộ Tổng Tư lệnh về việc xây dựng nền công nghiệp quốc phòng tự lực trong lòng căn cứ địa Việt Bắc, Xưởng Đội Cấn (mật danh Nhà máy Quân giới K77) đã được di chuyển và lắp đặt sâu trong rừng xã Đồng Thịnh, huyện Định Hóa từ năm 1947.",
          "Vượt qua tình trạng thiếu nguyên vật liệu, máy móc thô sơ phải vận chuyển hàng trăm cây số đường rừng, các kỹ sư và công nhân quân giới K77 đã sáng tạo tận dụng sức nước suối rừng, рельс đường sắt cũ và vỏ bom đạn thu được của địch để rèn đúc thành hàng vạn quả đạn bazooka, đạn súng cối 60mm, 81mm, súng SKZ và lựu đạn.",
          "Những lô vũ khí mang dấu ấn Xưởng Đội Cấn – K77 đã kịp thời tiếp lửa cho bộ đội chủ lực trên khắp các chiến trường từ Việt Bắc 1947, Biên giới 1950 đến Điện Biên Phủ 1954, khẳng định bản lĩnh tự cường của ngành Quân giới Việt Nam."
        ],
        timeline: [
          { year: "Năm 1947", event: "Di chuyển máy móc cơ khí, lập xưởng sản xuất vũ khí bí mật tại rừng xã Đồng Thịnh, Định Hóa." },
          { year: "1948 – 1950", event: "Chế tạo thành công nhiều lô đạn chống tăng bazooka, súng cối và mìn phục vụ Chiến dịch Biên giới." },
          { year: "1951 – 1954", event: "Mở rộng quy mô Nhà máy Quân giới K77, đẩy mạnh sản xuất vũ khí chi viện tiền tuyến Điện Biên Phủ." },
          { year: "29/06/2015", event: "Đón nhận Bằng xếp hạng Di tích Lịch sử cấp Quốc gia theo QĐ số 2245/QĐ-BVHTTDL." }
        ],
        keyFigures: ["Đội ngũ kỹ sư, cán bộ kỹ thuật Cục Quân giới", "Hàng trăm công nhân quốc phòng Xưởng Đội Cấn – Nhà máy K77", "Nhân dân xã Đồng Thịnh đùm bọc, bảo vệ bí mật nhà máy suốt 8 năm"],
        architectureItems: [
          "Nhà bia Di tích Quốc gia Xưởng Đội Cấn – Nhà máy Quân giới K77 tại xã Đồng Thịnh.",
          "Khu vực nền xưởng cơ khí, lò đúc gang và hầm chứa đạn dược ven suối.",
          "Nhà văn hóa cộng đồng nơi trưng bày tư liệu truyền thống ngành Quân giới tại địa phương."
        ],
        galleryCaptions: [
          "Nhà bia tưởng niệm Di tích Quốc gia Xưởng Đội Cấn – Nhà máy Quân giới K77",
          "Khu vực địa hình đồi rừng và suối nước nơi đặt máy tiện vũ khí năm 1947–1954",
          "Tư liệu các thế hệ công nhân quân giới Việt Bắc chế tạo vũ khí kháng chiến"
        ],
        travelGuide: "Cách trung tâm Thị trấn Chợ Chu 3,1km về phía Nam thuộc địa phận xã Đồng Thịnh. Đường liên xã trải nhựa thuận tiện cho cả đoàn xe ô tô và xe máy."
      }
    },
    {
      order: 4,
      id: "DH-QG-04",
      gisCode: "ATK-BC-04",
      stampVerifyCode: "ATK-TT-8618",
      shortTabName: "4. Tổng Thanh Tra",
      stampShortTitle: "4. Cục Tổng Thanh Tra",
      stampBadgeLine: "TỔNG THANH TRA",
      rank: "Quốc gia",
      rankBadge: "CẤP QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • THÔN BÃI HỘI",
      categoryTag: "Cơ quan Thanh tra Bộ Quốc phòng",
      name: "Cục Tổng Thanh Tra Quân Đội",
      fullName: "Di tích Nơi thành lập Cục Tổng Thanh tra Quân đội (Thôn Bãi Hội, Xã Bảo Cường)",
      commune: "Xã Bảo Cường",
      communeFull: "Thôn Bãi Hội, Xã Bảo Cường, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 86/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ số 86/QĐ-BVHTTDL ngày 16/01/2018 của Bộ VHTTDL",
      period: "1948 – 1954",
      lat: "21.881000°B",
      lng: "105.599100°Đ",
      elevation: "295m tại thung lũng thôn Bãi Hội",
      distanceFromCenter: "4.2 km",
      mapPin: { x: 105, y: 155, num: 4, label: "4. Tổng Thanh Tra" },
      shortDesc: "Nơi ra đời và đóng quân của Cục Tổng Thanh tra Quân đội Quốc gia Việt Nam (nay là Thanh tra Bộ Quốc phòng), giữ nghiêm kỷ luật chiến trường giai đoạn 1948 – 1954.",
      fieldStatus: "Nhà bia di tích Quốc gia khang trang tại thôn Bãi Hội, xã Bảo Cường, được Bộ Quốc phòng và địa phương gìn giữ, tôn tạo.",
      nextTargetId: "DH-QG-03",
      nextDistanceKm: "5.2 km",
      nextDurationText: "~10 phút đi xe / 45 phút đi bộ",
      stampedDefault: false,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Quốc gia được Bộ Văn hóa, Thể thao và Du lịch công nhận theo Quyết định số 86/QĐ-BVHTTDL ngày 16/01/2018.",
        historicalStory: [
          "Ngày 25/01/1948, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 130-SL thành lập Cục Tổng Thanh tra Quân đội Quốc gia Việt Nam — tổ chức tiền thân của ngành Thanh tra Quốc phòng ngày nay. Thôn Bãi Hội, xã Bảo Cường, huyện Định Hóa là nơi Cục Tổng Thanh tra đặt trụ sở làm việc trong những năm tháng kháng chiến chống thực dân Pháp.",
          "Từ thôn Bãi Hội, các đoàn thanh tra quân sự đã tỏa đi khắp các đại đoàn chủ lực, các quân khu và mặt trận để kiểm tra việc chấp hành mệnh lệnh tác chiến, công tác huấn luyện, quản lý vũ khí trang bị, lương thực và việc thực hiện chính sách dân vận của bộ đội.",
          "Hoạt động của Cục Tổng Thanh tra Quân đội tại ATK Định Hóa đã góp phần quan trọng rèn luyện bản chất 'Quân đội cách mạng từ nhân dân mà ra, vì nhân dân mà chiến đấu', xây dựng kỷ luật sắt làm nền tảng cho mọi thắng lợi trên chiến trường."
        ],
        timeline: [
          { year: "25/01/1948", event: "Chủ tịch Hồ Chí Minh ký Sắc lệnh số 130-SL thành lập Cục Tổng Thanh tra Quân đội Quốc gia Việt Nam." },
          { year: "1948 – 1954", event: "Cơ quan Cục Tổng Thanh tra đóng quân và làm việc tại thôn Bãi Hội, xã Bảo Cường, huyện Định Hóa." },
          { year: "16/01/2018", event: "Bộ VHTTDL ban hành Quyết định số 86/QĐ-BVHTTDL xếp hạng Di tích Lịch sử cấp Quốc gia." }
        ],
        keyFigures: ["Chủ tịch Hồ Chí Minh (người ký Sắc lệnh 130-SL thành lập)", "Thiếu tướng Lê Thiết Hùng – Tổng Thanh tra Quân đội đầu tiên", "Cán bộ, chiến sĩ ngành Thanh tra Quốc phòng và nhân dân thôn Bãi Hội"],
        architectureItems: [
          "Nhà bia tưởng niệm Di tích Quốc gia Nơi thành lập Cục Tổng Thanh tra Quân đội tại thôn Bãi Hội.",
          "Bia đá khắc Sắc lệnh 130-SL và lịch sử truyền thống ngành Thanh tra Quốc phòng.",
          "Khuôn viên cây xanh, sân hành lễ dâng hương dành cho các đoàn công tác về nguồn."
        ],
        galleryCaptions: [
          "Toàn cảnh Nhà bia Di tích Quốc gia Cục Tổng Thanh tra Quân đội tại thôn Bãi Hội",
          "Bia đá ghi dấu Sắc lệnh số 130-SL ngày 25/01/1948 của Chủ tịch Hồ Chí Minh",
          "Khuôn viên cảnh quan sinh thái thôn Bãi Hội, xã Bảo Cường, huyện Định Hóa"
        ],
        travelGuide: "Từ trung tâm Thị trấn Chợ Chu đi theo trục đường về xã Bảo Cường khoảng 4,2km đến thôn Bãi Hội. Đường giao thông nông thôn mới rộng rãi, thuận lợi cho các đoàn về nguồn."
      }
    },
    {
      order: 5,
      id: "DH-QG-05",
      gisCode: "ATK-BL-05",
      stampVerifyCode: "ATK-TC-3545",
      shortTabName: "5. Cục Tác Chiến",
      stampShortTitle: "5. Cục Tác Chiến QĐNDVN",
      stampBadgeLine: "CỤC TÁC CHIẾN",
      rank: "Quốc gia",
      rankBadge: "CẤP QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • ĐỒI KHAU MUỘC",
      categoryTag: "Trung tâm Tham mưu Tác chiến Chiến lược",
      name: "Cục Tác Chiến – Bộ Tổng Tham Mưu",
      fullName: "Di tích Địa điểm Nơi ở và làm việc của Cục Tác chiến (1949 – 1954)",
      commune: "Xã Bảo Linh",
      communeFull: "Đồi Khau Muộc, Xã Bảo Linh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 3545/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ số 3545/QĐ-BVHTTDL ngày 20/11/2024 của Bộ VHTTDL",
      period: "1949 – 1954",
      lat: "21.849300°B",
      lng: "105.631800°Đ",
      elevation: "355m tại sườn đồi Khau Muộc",
      distanceFromCenter: "3.7 km",
      mapPin: { x: 240, y: 245, num: 5, label: "5. Cục Tác Chiến" },
      shortDesc: "Cơ quan tham mưu tác chiến đầu não trực thuộc Bộ Tổng Tham mưu, nơi tổng hợp tình hình địch - ta từng giờ và xây dựng bản đồ các chiến dịch lớn 1949 – 1954.",
      fieldStatus: "Nhà bia di tích lịch sử được Bộ Văn hóa, Thể thao và Du lịch xếp hạng cấp Quốc gia theo Quyết định số 3545/QĐ-BVHTTDL ngày 20/11/2024.",
      nextTargetId: "DH-QG-02",
      nextDistanceKm: "1.8 km",
      nextDurationText: "~5 phút đi xe / 18 phút đi bộ",
      stampedDefault: false,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Quốc gia mới nhất trong quần thể được Bộ Văn hóa, Thể thao và Du lịch xếp hạng theo Quyết định số 3545/QĐ-BVHTTDL ngày 20/11/2024.",
        historicalStory: [
          "Nằm cách đại bản doanh Bộ Tổng Tham mưu (Đồi Tỉ) khoảng 1,8km theo đường rừng liên lạc bí mật, khu vực đồi Khau Muộc thuộc xã Bảo Linh là nơi ở và làm việc của Cục Tác chiến — cơ quan trọng yếu bậc nhất trực thuộc Bộ Tổng Tham mưu Quân đội Nhân dân Việt Nam từ năm 1949 đến năm 1954.",
          "Tại các lán làm việc dưới tán rừng cọ Khau Muộc, cán bộ, sĩ quan Cục Tác chiến làm việc ngày đêm bên những tấm bản đồ quân sự tỷ lệ lớn, tiếp nhận điện báo từ khắp các chiến trường Bắc – Trung – Nam, phân tích thế bố phòng của quân Pháp và trực tiếp phác thảo phương án tác chiến trình Tổng Tư lệnh Võ Nguyên Giáp và Tổng Tham mưu trưởng Hoàng Văn Thái.",
          "Ngày 20/11/2024, Bộ Văn hóa, Thể thao và Du lịch đã chính thức ban hành Quyết định số 3545/QĐ-BVHTTDL xếp hạng Địa điểm nơi ở và làm việc của Cục Tác chiến (1949 – 1954) tại xã Bảo Linh là Di tích Lịch sử cấp Quốc gia."
        ],
        timeline: [
          { year: "Năm 1949", event: "Cục Tác chiến thiết lập khu lán làm việc và phòng bản đồ chiến dịch tại đồi Khau Muộc, xã Bảo Linh." },
          { year: "1950 – 1953", event: "Tham mưu trực tiếp cho 7 chiến dịch tiến công và phản công quy mô lớn trên chiến trường miền Bắc." },
          { year: "Đông Xuân 1953–1954", event: "Theo dõi sát diễn biến tập đoàn cứ điểm Điện Biên Phủ, phục vụ Bộ Chính trị và Tổng Quân ủy hạ quyết tâm chiến lược." },
          { year: "20/11/2024", event: "Xếp hạng Di tích Lịch sử cấp Quốc gia theo Quyết định số 3545/QĐ-BVHTTDL." }
        ],
        keyFigures: ["Đại tướng Hoàng Văn Thái", "Thiếu tướng Đào Văn Trường, Cục trưởng Cục Tác chiến", "Đội ngũ sĩ quan bản đồ và tham mưu tác chiến QĐNDVN"],
        architectureItems: [
          "Nhà bia Di tích Quốc gia Cục Tác chiến tại đồi Khau Muộc, xã Bảo Linh.",
          "Vị trí nền phòng bản đồ chiến dịch và hầm chỉ huy tác chiến.",
          "Tuyến đường mòn liên lạc lịch sử nối Đồi Khau Muộc với Đồi Tỉ."
        ],
        galleryCaptions: [
          "Nhà bia Di tích Quốc gia Cục Tác chiến (QĐ số 3545/QĐ-BVHTTDL ngày 20/11/2024)",
          "Không gian đồi Khau Muộc xã Bảo Linh gắn liền với các bản đồ chiến dịch lịch sử",
          "Đoàn đại biểu và thế hệ trẻ dâng hương tưởng niệm tại di tích Cục Tác chiến"
        ],
        travelGuide: "Nằm trên tuyến tham quan xã Bảo Linh, cách di tích Bộ Tổng Tham mưu (Đồi Tỉ) 1,8km và cách Thị trấn Chợ Chu 3,7km. Rất thuận tiện để kết hợp tham quan trong cùng một buổi."
      }
    },
    {
      order: 6,
      id: "DH-CT-01",
      gisCode: "ATK-CC-06",
      stampVerifyCode: "ATK-D187-2785",
      shortTabName: "6. Tiểu Đoàn 187",
      stampShortTitle: "6. Tiểu Đoàn Cận Vệ 187",
      stampBadgeLine: "TIỂU ĐOÀN 187",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • ĐỒI CỌ THÔN ROÒNG",
      categoryTag: "Lực lượng Cận vệ Bảo vệ Trung ương",
      name: "Tiểu Đoàn 187 – Tiền Thân Lữ Đoàn 144",
      fullName: "Di tích Nơi thành lập Tiểu đoàn 187 – Tiền thân Lữ đoàn 144 Cận vệ (TT. Chợ Chu)",
      commune: "TT Chợ Chu",
      communeFull: "Đồi Cọ Thôn Roòng, Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 2785/QĐ-UBND",
      gisPopupDecision: "QĐ số 2785/QĐ-UBND năm 2014 của UBND Tỉnh Thái Nguyên",
      period: "1949 – 1954",
      lat: "21.905100°B",
      lng: "105.648900°Đ",
      elevation: "270m tại Đồi Cọ Thôn Roòng",
      distanceFromCenter: "1.5 km",
      mapPin: { x: 430, y: 175, num: 6, label: "6. Tiểu Đoàn 187" },
      shortDesc: "Lực lượng vũ trang cận vệ tinh nhuệ làm nhiệm vụ canh gác, bảo vệ an toàn tuyệt đối cho Chủ tịch Hồ Chí Minh, Trung ương Đảng và Bộ Tổng Tư lệnh tại ATK.",
      fieldStatus: "Nhà bia di tích cấp Tỉnh kết hợp khuôn viên Nhà văn hóa khu phố tại Thị trấn Chợ Chu, được bảo tồn khang trang.",
      nextTargetId: "DH-CT-02",
      nextDistanceKm: "1.5 km",
      nextDurationText: "~5 phút đi xe / 16 phút đi bộ",
      stampedDefault: false,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Tỉnh được UBND Tỉnh Thái Nguyên xếp hạng theo Quyết định số 2785/QĐ-UBND năm 2014.",
        historicalStory: [
          "Để bảo vệ tuyệt đối an toàn cho Chủ tịch Hồ Chí Minh, Thường vụ Trung ương Đảng, Chính phủ và Bộ Tổng Tư lệnh trước âm mưu tập kích đường không và biệt kích thám báo của địch, Tiểu đoàn 187 đã được thành lập tại khu vực Đồi Cọ thôn Roòng, Thị trấn Chợ Chu, huyện Định Hóa — đây chính là đơn vị tiền thân của Lữ đoàn Cận vệ 144 (Bộ Tổng Tham mưu) anh hùng ngày nay.",
          "Cán bộ, chiến sĩ Tiểu đoàn 187 được tuyển chọn kỹ lưỡng từ những quân nhân ưu tú, tuyệt đối trung thành với Đảng và Tổ quốc. Đơn vị đã thiết lập mạng lưới vọng gác nhiều tầng, tuần tra kiểm soát ngày đêm trên các ngả đường dẫn vào vùng lõi ATK Định Hóa và hộ tống an toàn các đồng chí lãnh đạo đi công tác chiến dịch.",
          "Suốt những năm tháng đóng quân tại Định Hóa, Tiểu đoàn 187 đã hoàn thành xuất sắc sứ mệnh 'Lá chắn thép bảo vệ Thủ đô Gió Ngàn', giữ vững an ninh tuyệt đối cho đầu não kháng chiến."
        ],
        timeline: [
          { year: "Giai đoạn 1949–1951", event: "Thành lập và kiện toàn lực lượng Tiểu đoàn 187 bảo vệ cơ quan đầu não tại Thị trấn Chợ Chu." },
          { year: "1951 – 1954", event: "Canh gác vòng trong, bảo vệ tuyệt đối an toàn các hội nghị quan trọng của Trung ương và Tổng Quân ủy." },
          { year: "Năm 2014", event: "UBND Tỉnh Thái Nguyên ban hành Quyết định số 2785/QĐ-UBND công nhận Di tích Lịch sử cấp Tỉnh." }
        ],
        keyFigures: ["Cán bộ, chiến sĩ Tiểu đoàn 187 (tiền thân Lữ đoàn 144 – Bộ Tổng Tham mưu)", "Nhân dân thôn Roòng, Thị trấn Chợ Chu phối hợp lập vành đai an ninh nhân dân"],
        architectureItems: [
          "Nhà bia tưởng niệm nơi thành lập Tiểu đoàn 187 tại Đồi Cọ thôn Roòng, Thị trấn Chợ Chu.",
          "Khuôn viên Nhà văn hóa tổ dân phố kết hợp không gian giáo dục truyền thống.",
          "Bảng thông tin giới thiệu lịch sử Lữ đoàn Cận vệ 144 anh hùng."
        ],
        galleryCaptions: [
          "Nhà bia Di tích Nơi thành lập Tiểu đoàn 187 tại Thị trấn Chợ Chu",
          "Cảnh quan Đồi Cọ thôn Roòng — vị trí đóng quân bảo vệ vòng ngoài ATK",
          "Cán bộ, chiến sĩ Lữ đoàn 144 hành quân về nguồn tri ân tại di tích"
        ],
        travelGuide: "Nằm ngay trong địa bàn Thị trấn Chợ Chu, cách trung tâm thị trấn 1,5km. Thuộc Tuyến tham quan 01 (Cụm Trung tâm Lịch sử Chợ Chu)."
      }
    },
    {
      order: 7,
      id: "DH-CT-02",
      gisCode: "ATK-CC-07",
      stampVerifyCode: "ATK-DBC-2606",
      shortTabName: "7. Đảng Bộ Châu",
      stampShortTitle: "7. Đảng Bộ Châu Định Hóa",
      stampBadgeLine: "ĐẢNG BỘ CHÂU",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • TRUNG TÂM CHỢ CHU",
      categoryTag: "Cội nguồn Lãnh đạo Đảng bộ Địa phương",
      name: "Nơi Thành Lập Đảng Bộ Châu Định Hóa",
      fullName: "Di tích Địa điểm thành lập Đảng bộ Châu Định Hóa (26/6/1946)",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ ngày 01/12/2014",
      gisPopupDecision: "Quyết định xếp hạng Di tích cấp Tỉnh ngày 01/12/2014",
      period: "26/06/1946",
      lat: "21.911000°B",
      lng: "105.645100°Đ",
      elevation: "260m tại trung tâm Thị trấn Chợ Chu",
      distanceFromCenter: "0.8 km",
      mapPin: { x: 345, y: 215, num: 7, label: "7. Đảng Bộ Châu" },
      shortDesc: "Nơi ra đời Chi bộ Đảng đầu tiên của huyện Định Hóa ngày 26/6/1946, hạt nhân chính trị lãnh đạo nhân dân các dân tộc xây dựng căn cứ địa đón Trung ương về ATK.",
      fieldStatus: "Khuôn viên bia lưu niệm di tích đặt trang trọng tại trụ sở Huyện ủy Định Hóa, Thị trấn Chợ Chu.",
      nextTargetId: "DH-CT-03",
      nextDistanceKm: "0.8 km",
      nextDurationText: "~3 phút đi xe / 10 phút đi bộ",
      stampedDefault: false,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Tỉnh được UBND Tỉnh Thái Nguyên công nhận ngày 01/12/2014.",
        historicalStory: [
          "Sau thắng lợi của cuộc khởi nghĩa giành chính quyền tại Định Hóa (tháng 3/1945) và Cách mạng Tháng Tám năm 1945, yêu cầu cấp bách đặt ra là phải có tổ chức Đảng trực tiếp lãnh đạo chính quyền và phong trào cách mạng địa phương. Ngày 26/6/1946, tại Thị trấn Chợ Chu, Chi bộ Đảng bộ Châu Định Hóa đầu tiên đã chính thức được tuyên bố thành lập.",
          "Dù mới ra đời với số lượng đảng viên ban đầu còn ít, Đảng bộ Châu Định Hóa đã nhanh chóng phát triển cơ sở đảng rộng khắp các xã, lãnh đạo nhân dân củng cố chính quyền dân chủ nhân dân, diệt giặc đói, giặc dốt và xây dựng lực lượng dân quân tự vệ vững mạnh.",
          "Chính nhờ nền tảng chính trị vững chắc và lòng trung thành tuyệt đối của Đảng bộ, nhân dân các dân tộc Định Hóa mà chỉ vài tháng sau (cuối năm 1946 – đầu năm 1947), Trung ương Đảng và Chủ tịch Hồ Chí Minh đã tin tưởng chọn Định Hóa làm trung tâm An toàn khu (ATK) của cả nước."
        ],
        timeline: [
          { year: "26/06/1946", event: "Lễ công bố quyết định thành lập Chi bộ Đảng Châu Định Hóa tại Chợ Chu." },
          { year: "1947 – 1954", event: "Đảng bộ lãnh đạo nhân dân Định Hóa làm tròn sứ mệnh hậu phương trực tiếp bảo vệ Bác Hồ và Trung ương." },
          { year: "01/12/2014", event: "UBND Tỉnh Thái Nguyên quyết định xếp hạng Di tích Lịch sử cấp Tỉnh." }
        ],
        keyFigures: ["Các đảng viên đầu tiên của Chi bộ Châu Định Hóa (26/6/1946)", "Các thế hệ cán bộ, đảng viên và nhân dân huyện Định Hóa"],
        architectureItems: [
          "Bia lưu niệm Di tích lịch sử Địa điểm thành lập Đảng bộ Châu Định Hóa (26/6/1946).",
          "Khuôn viên cảnh quan trang nghiêm tại trung tâm Thị trấn Chợ Chu."
        ],
        galleryCaptions: [
          "Bia lưu niệm Địa điểm thành lập Đảng bộ Châu Định Hóa (26/6/1946)",
          "Không gian giáo dục truyền thống cách mạng cho đảng viên trẻ và học sinh Định Hóa",
          "Tư liệu lịch sử Đảng bộ huyện Định Hóa qua các thời kỳ kháng chiến"
        ],
        travelGuide: "Nằm ngay trung tâm Thị trấn Chợ Chu, cách Chùa Hang và Đình Quan Đế chỉ khoảng 800m, rất thuận lợi cho lộ trình đi bộ hoặc xe điện tham quan."
      }
    },
    {
      order: 8,
      id: "DH-CT-03",
      gisCode: "ATK-CC-08",
      stampVerifyCode: "ATK-DQD-3873",
      shortTabName: "8. Đình Quan Đế",
      stampShortTitle: "8. Mít Tinh Đình Quan Đế",
      stampBadgeLine: "ĐÌNH QUAN ĐẾ",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • CÂY ĐA ĐÌNH QUAN ĐẾ",
      categoryTag: "Sự kiện Khởi nghĩa Giành chính quyền 1945",
      name: "Đình Quan Đế (Mít Tinh 28/3/1945)",
      fullName: "Di tích Lịch sử Địa điểm Cuộc Mít tinh tại Đình Quan Đế (28/3/1945)",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ số 3873/QĐ-UBND",
      gisPopupDecision: "QĐ số 3873/QĐ-UBND năm 2023 của UBND Tỉnh Thái Nguyên",
      period: "28/03/1945",
      lat: "21.908200°B",
      lng: "105.645100°Đ",
      elevation: "258m tại trung tâm phố Chợ Chu",
      distanceFromCenter: "1.2 km",
      mapPin: { x: 315, y: 165, num: 8, label: "8. Đình Quan Đế" },
      shortDesc: "Nơi diễn ra cuộc mít tinh lịch sử ngày 28/3/1945 dưới bóng cây đa cổ thụ, tuyên bố xóa bỏ chính quyền thực dân phong kiến và thành lập Ủy ban Dân tộc Giải phóng Châu Định Hóa.",
      fieldStatus: "Bia đá di tích cấp Tỉnh, Cây đa cổ thụ di sản tỏa bóng mát và khuôn viên Nhà văn hóa tại Thị trấn Chợ Chu.",
      nextTargetId: "DH-QG-01",
      nextDistanceKm: "1.2 km",
      nextDurationText: "~4 phút đi xe / 15 phút đi bộ",
      stampedDefault: false,
      dossier5Blocks: {
        legalSummary: "Di tích Lịch sử cấp Tỉnh được UBND Tỉnh Thái Nguyên xếp hạng theo Quyết định số 3873/QĐ-UBND năm 2023.",
        historicalStory: [
          "Tháng 3 năm 1945, sau khi Nhật đảo chính Pháp ở Đông Dương, cao trào kháng Nhật cứu nước bùng nổ mạnh mẽ khắp chiến khu Việt Bắc. Dưới sự lãnh đạo của Mặt trận Việt Minh và lực lượng Cứu quốc quân, quần chúng cách mạng Châu Định Hóa đã vùng lên làm chủ phố Chợ Chu.",
          "Ngày 28/3/1945, tại sân Đình Quan Đế dưới bóng cây đa cổ thụ sừng sững giữa Thị trấn Chợ Chu, một cuộc mít tinh lớn với hàng ngàn nhân dân các dân tộc Tày, Nùng, Kinh, Dao... cùng lực lượng vũ trang cách mạng đã long trọng diễn ra. Đại diện Mặt trận Việt Minh đọc tuyên cáo xóa bỏ hoàn toàn bộ máy cai trị của thực dân phong kiến tay sai, chính thức thành lập Ủy ban Dân tộc Giải phóng lâm thời Châu Định Hóa.",
          "Thắng lợi của cuộc mít tinh tại Đình Quan Đế ngày 28/3/1945 đã đưa Định Hóa trở thành một trong những địa phương giành chính quyền sớm nhất cả nước trước Cách mạng Tháng Tám, mở đầu trang sử vàng của Thủ đô Gió Ngàn."
        ],
        timeline: [
          { year: "Đầu tháng 3/1945", event: "Lực lượng Việt Minh và Cứu quốc quân tiến công giải phóng châu lỵ Chợ Chu." },
          { year: "28/03/1945", event: "Mít tinh lớn tại Đình Quan Đế tuyên bố thành lập chính quyền cách mạng Châu Định Hóa." },
          { year: "Năm 2023", event: "UBND Tỉnh Thái Nguyên ban hành Quyết định số 3873/QĐ-UBND xếp hạng Di tích Lịch sử cấp Tỉnh." }
        ],
        keyFigures: ["Lực lượng Cứu quốc quân và cán bộ Mặt trận Việt Minh", "Hàng ngàn đồng bào các dân tộc Châu Định Hóa tham gia mít tinh ngày 28/3/1945"],
        architectureItems: [
          "Cây đa cổ thụ Đình Quan Đế — chứng nhân lịch sử của ngày khởi nghĩa 28/3/1945.",
          "Bia đá Di tích lịch sử cấp Tỉnh Địa điểm diễn ra cuộc mít tinh tại Đình Quan Đế.",
          "Sân sinh hoạt cộng đồng và Nhà văn hóa phố Chợ Chu."
        ],
        galleryCaptions: [
          "Cây đa cổ thụ và Bia di tích lịch sử Đình Quan Đế tại Thị trấn Chợ Chu",
          "Không gian sân Đình Quan Đế — nơi diễn ra cuộc mít tinh lịch sử ngày 28/3/1945",
          "Hoạt động giáo dục truyền thống cách mạng cho thanh thiếu niên dưới gốc đa Đình Quan Đế"
        ],
        travelGuide: "Tọa lạc tại trung tâm Thị trấn Chợ Chu, cách Chùa Hang 1,2km. Du khách có thể dễ dàng kết hợp tham quan Đình Quan Đế – Đảng bộ Châu – Chùa Hang – Tiểu đoàn 187 trong hành trình Tuyến 01."
      }
    }
  ],

  flipbookSpreads: [
    {
      spreadIndex: 0,
      rangeLabel: "Trang 01–02",
      tocCategory: "KHÁI QUÁT ẤN BẢN",
      tocTitle: "Bìa Ấn Bản & Tổng Quan ATK Định Hóa",
      tocSub: "Bản đồ tổng quan 8 điểm di tích kháng chiến",
      pageLeftNum: "01",
      pageRightNum: "02",
      fileCode: "ATK-TL-01A",
      periodTag: "TƯ LIỆU TỔNG QUAN 1947–1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • ATK ĐỊNH HÓA",
      photoCaption: "Toàn cảnh địa hình thung lũng Chợ Chu và rừng cọ Bảo Linh nhìn từ đài quan sát ATK Định Hóa.",
      diaryQuote: "“Định Hóa có địa thế tiến khả dĩ công, thoái khả dĩ thủ; nhân dân các dân tộc một lòng đi theo kháng chiến, xứng đáng là Thủ đô Gió Ngàn của cả nước.”",
      gisCoord: "21°52'30\"N 105°38'15\"E",
      rightBadge: "TỔNG QUAN CHIẾN KHU VIỆT BẮC",
      rightDecision: "Hồ sơ Lưu chiểu Quốc gia",
      rightTitle: "Tổng Quan Căn Cứ Địa Cách Mạng ATK Định Hóa",
      rightLocation: "Địa phận: Huyện Định Hóa, Tỉnh Thái Nguyên (Trung tâm Thủ đô Kháng chiến)",
      rightBody: "Từ năm 1947 đến năm 1954, Chủ tịch Hồ Chí Minh cùng Trung ương Đảng, Chính phủ và Bộ Tổng Tư lệnh đã chọn Định Hóa làm nơi đặt đại bản doanh chỉ đạo cuộc kháng chiến chống thực dân Pháp xâm lược đến thắng lợi hoàn toàn.",
      rightPreservation: "Hệ thống 08 điểm di tích tiêu biểu đã được đo đạc tọa độ GIS chuẩn VN-2000, biên soạn hồ sơ 5 khối chuẩn và tích hợp thuyết minh tự động.",
      qrTargetRelicId: "DH-QG-01",
      audioTitle: "Thuyết minh Trang 01 - 02: Tổng quan Thủ đô Gió Ngàn ATK Định Hóa",
      audioDuration: "02:45"
    },
    {
      spreadIndex: 1,
      rangeLabel: "Trang 03–04",
      tocCategory: "DI TÍCH QUỐC GIA",
      tocTitle: "Chùa Hang Chợ Chu & Đồi Tỉ Bảo Linh",
      tocSub: "Căn cứ Chủ tịch Hồ Chí Minh & Bộ Tổng Tham mưu",
      pageLeftNum: "03",
      pageRightNum: "04",
      fileCode: "ATK-TL-04B",
      periodTag: "TƯ LIỆU THỰC ĐỊA 1947–1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • ATK ĐỊNH HÓA",
      photoCaption: "Vòm động đá vôi núi Tháp Tượng (Chùa Hang) và khu lán làm việc dưới tán rừng cọ Đồi Tỉ xã Bảo Linh.",
      diaryQuote: "“Tháng 10 năm 1947, giặc Pháp nhảy dù xuống Bắc Kạn hòng tiêu diệt cơ quan đầu não kháng chiến. Từ Chùa Hang và Đồi Tỉ, các chỉ thị mật đã kịp thời truyền đi khắp các mặt trận, bẻ gãy gọng kìm Sông Lô - Đường 4...”",
      gisCoord: "21°54'12\"N 105°38'04\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA",
      rightDecision: "QĐ 515/QĐ-BVHTTDL & 2245/QĐ-BVHTTDL",
      rightTitle: "Thắng Cảnh Chùa Hang & Đại Bản Doanh Bộ Tổng Tham Mưu",
      rightLocation: "Địa phận: Thị trấn Chợ Chu & Xã Bảo Linh, Huyện Định Hóa",
      rightBody: "Chùa Hang nằm sâu trong lòng núi đá vôi Tháp Tượng — nơi Bác Hồ từng làm việc và đặt trạm phát sóng VNTTX. Cách đó 2,4km tại Đồi Tỉ (xã Bảo Linh) là đại bản doanh Bộ Tổng Tham mưu do Đại tướng Võ Nguyên Giáp và Tổng Tham mưu trưởng Hoàng Văn Thái chỉ huy.",
      rightPreservation: "Lòng hang tự nhiên giữ nguyên hệ thống nhũ đá, bậc đá cổ; khu vực Đồi Tỉ bảo tồn Nhà bia Quốc gia và dấu tích hầm chỉ huy dưới rừng cọ.",
      qrTargetRelicId: "DH-QG-02",
      audioTitle: "Thuyết minh Trang 03 - 04: Chùa Hang Chợ Chu & Bộ Tổng Tham mưu Đồi Tỉ",
      audioDuration: "03:45"
    },
    {
      spreadIndex: 2,
      rangeLabel: "Trang 05–06",
      tocCategory: "DI TÍCH QUỐC GIA",
      tocTitle: "Xưởng Quân Giới K77 & Cục Tổng Thanh Tra",
      tocSub: "Xã Đồng Thịnh & Thôn Bãi Hội, Xã Bảo Cường",
      pageLeftNum: "05",
      pageRightNum: "06",
      fileCode: "ATK-TL-06C",
      periodTag: "TƯ LIỆU QUÂN GIỚI 1947–1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • QUÂN GIỚI K77",
      photoCaption: "Khu vực Xưởng Đội Cấn – Nhà máy Quân giới K77 chế tạo đạn bazooka tại xã Đồng Thịnh.",
      diaryQuote: "“Dưới tán rừng Đồng Thịnh, máy tiện chạy bằng sức nước và bếp lò rèn đỏ lửa suốt đêm. Mỗi viên đạn, quả mìn xuất xưởng từ K77 đều mang theo ý chí tất thắng của công nhân quân giới Việt Bắc...”",
      gisCoord: "21°52'05\"N 105°37'12\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA",
      rightDecision: "QĐ số 2245/QĐ-BVHTTDL & 86/QĐ-BVHTTDL",
      rightTitle: "Xưởng Đội Cấn – Nhà Máy Quân Giới K77 & Cục Tổng Thanh Tra",
      rightLocation: "Địa phận: Xã Đồng Thịnh & Thôn Bãi Hội, Xã Bảo Cường, Huyện Định Hóa",
      rightBody: "Xưởng Đội Cấn (K77) tại xã Đồng Thịnh là nòng cốt sản xuất vũ khí của Quân giới Việt Nam. Cùng thời gian này, tại thôn Bãi Hội (xã Bảo Cường), Cục Tổng Thanh tra Quân đội được thành lập theo Sắc lệnh 130-SL để giữ nghiêm kỷ luật chiến trường.",
      rightPreservation: "Nhà bia tưởng niệm di tích Quốc gia tại xã Đồng Thịnh và xã Bảo Cường được bảo vệ nguyên trạng, gắn mã QR số hóa thực địa.",
      qrTargetRelicId: "DH-QG-03",
      audioTitle: "Thuyết minh Trang 05 - 06: Xưởng Quân giới K77 & Cục Tổng Thanh tra",
      audioDuration: "03:20"
    },
    {
      spreadIndex: 3,
      rangeLabel: "Trang 07–08",
      tocCategory: "DI TÍCH QUỐC GIA & TỈNH",
      tocTitle: "Cục Tác Chiến & Tiểu Đoàn Cận Vệ 187",
      tocSub: "Đồi Khau Muộc Bảo Linh & Đồi Cọ Chợ Chu",
      pageLeftNum: "07",
      pageRightNum: "08",
      fileCode: "ATK-TL-08D",
      periodTag: "TƯ LIỆU TÁC CHIẾN 1949–1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • BỘ TỔNG THAM MƯU",
      photoCaption: "Giao ban tác chiến bên sa bàn chiến dịch tại lán làm việc Cục Tác chiến xã Bảo Linh.",
      diaryQuote: "“Từ lán làm việc đơn sơ dưới chân đồi Khau Muộc xã Bảo Linh, các bản đồ tác chiến Chiến dịch Biên giới 1950 và Điện Biên Phủ 1954 đã được cập nhật từng giờ để trình Đại tướng Tổng Tư lệnh...”",
      gisCoord: "21°53'20\"N 105°35'53\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA & CẤP TỈNH",
      rightDecision: "QĐ số 3545/QĐ-BVHTTDL & 2785/QĐ-UBND",
      rightTitle: "Cơ Quan Cục Tác Chiến & Nơi Thành Lập Tiểu Đoàn 187",
      rightLocation: "Địa phận: Xã Bảo Linh & Thị trấn Chợ Chu, Huyện Định Hóa",
      rightBody: "Cục Tác chiến (1949–1954) là trung tâm tham mưu tác chiến trực thuộc Bộ Tổng Tham mưu. Song hành bảo vệ cơ quan đầu não là Tiểu đoàn 187 (tiền thân Lữ đoàn 144 Cận vệ) đóng tại Đồi Cọ thôn Roòng, Thị trấn Chợ Chu.",
      rightPreservation: "Nhà bia di tích Quốc gia Cục Tác chiến (xếp hạng năm 2024) và Nhà bia Tiểu đoàn 187 tại Thị trấn Chợ Chu.",
      qrTargetRelicId: "DH-QG-05",
      audioTitle: "Thuyết minh Trang 07 - 08: Cục Tác chiến & Tiểu đoàn Cận vệ 187",
      audioDuration: "03:15"
    },
    {
      spreadIndex: 4,
      rangeLabel: "Trang 09–10",
      tocCategory: "DI TÍCH CẤP TỈNH",
      tocTitle: "Đình Quan Đế (1945) & Đảng Bộ Châu (1946)",
      tocSub: "Cội nguồn khởi nghĩa và Đảng bộ Định Hóa",
      pageLeftNum: "09",
      pageRightNum: "10",
      fileCode: "ATK-TL-10E",
      periodTag: "TƯ LIỆU KHỞI NGHĨA 1945–1946",
      stampLabel: "LƯU TRỮ LỊCH SỬ • ĐẢNG BỘ ĐỊNH HÓA",
      photoCaption: "Cây đa cổ thụ và bia đá chứng tích cuộc mít tinh giành chính quyền ngày 28/3/1945 tại Đình Quan Đế.",
      diaryQuote: "“Ngày 28/3/1945, dưới gốc đa Đình Quan Đế, cờ đỏ sao vàng tung bay trước hàng ngàn quần chúng cách mạng và tự vệ Cứu quốc quân, tuyên bố xóa bỏ hoàn toàn chính quyền thực dân phong kiến tay sai...”",
      gisCoord: "21°54'29\"N 105°38'42\"E",
      rightBadge: "DI TÍCH LỊCH SỬ CẤP TỈNH",
      rightDecision: "QĐ số 3873/QĐ-UBND & QĐ 01/12/2014",
      rightTitle: "Đình Quan Đế (28/3/1945) & Nơi Thành Lập Đảng Bộ Châu Định Hóa",
      rightLocation: "Địa phận: Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      rightBody: "Cuộc mít tinh tại Đình Quan Đế (28/3/1945) mở đầu chính quyền cách mạng tại Định Hóa, tạo tiền đề để ngày 26/6/1946 Đảng bộ Châu Định Hóa chính thức thành lập, xây dựng hậu phương vững chắc đón Trung ương về ATK.",
      rightPreservation: "Bia đá di tích, Cây đa di sản tại Đình Quan Đế và bia lưu niệm nơi thành lập Đảng bộ Châu Định Hóa.",
      qrTargetRelicId: "DH-CT-03",
      audioTitle: "Thuyết minh Trang 09 - 10: Đình Quan Đế & Đảng bộ Châu Định Hóa",
      audioDuration: "03:30"
    }
  ],

  vrScenes: [
    {
      id: "vr-chua-hang",
      relicId: "DH-QG-01",
      badge: "TRẠM PANORAMA 360° #01 • CHÙA HANG CHỢ CHU",
      title: "Lòng Động Đá Vôi & Nhà Bia Chùa Hang",
      sub: "Thị trấn Chợ Chu • 4 Điểm tương tác 360°",
      resolutionTag: "8K HDR • Góc nhìn chuẩn",
      description: "Không gian 360° bên trong lòng hang đá tự nhiên Tháp Tượng, nơi đặt trạm phát sóng bí mật VNTTX và Nhà bia tưởng niệm Chủ tịch Hồ Chí Minh.",
      hotspots: [
        { angle: "45° Đông Bắc", name: "Nhà bia tưởng niệm Chủ tịch Hồ Chí Minh", detail: "Khắc ghi dấu ấn Bác Hồ dừng chân làm việc tại Chùa Hang trong kháng chiến chống Pháp." },
        { angle: "120° Đông Nam", name: "Vách đá & Hệ thống nhũ đá tự nhiên", detail: "Vòm đá vôi dày hàng chục mét che chắn an toàn trước máy bay trinh sát năm 1947." },
        { angle: "215° Tây Nam", name: "Nền trạm in & Điện đài bí mật VNTTX", detail: "Nơi phát đi các bản tin chiến thắng Sông Lô, Đèo Bông Lau Thu - Đông 1947." },
        { angle: "310° Tây Bắc", name: "Cửa hang hướng ra thung lũng Chợ Chu", detail: "Tầm nhìn chiến lược bao quát toàn bộ địa hình trung tâm Chợ Chu." }
      ]
    },
    {
      id: "vr-doi-ti",
      relicId: "DH-QG-02",
      badge: "TRẠM PANORAMA 360° #02 • ĐỒI TỈ BẢO LINH",
      title: "Rừng Cọ Đồi Tỉ & Lán Bộ Tổng Tham Mưu",
      sub: "Xã Bảo Linh • 3 Điểm tương tác 360°",
      resolutionTag: "8K HDR • Rừng cọ sinh thái",
      description: "Toàn cảnh không gian rừng cọ Đồi Tỉ xã Bảo Linh, nơi Đại tướng Võ Nguyên Giáp và Bộ Tổng Tham mưu chỉ đạo các chiến dịch lớn 1949 – 1954.",
      hotspots: [
        { angle: "30° Bắc", name: "Nhà bia Di tích Quốc gia Bộ Tổng Tham mưu", detail: "Công trình xếp hạng Quốc gia theo Quyết định số 2245/QĐ-BVHTTDL." },
        { angle: "110° Đông", name: "Lán tác chiến dưới tán rừng cọ cổ thụ", detail: "Nơi trải bản đồ chiến dịch Biên giới 1950 và Điện Biên Phủ 1954." },
        { angle: "200° Nam", name: "Hệ thống giao thông hào & đường mòn liên lạc", detail: "Kết nối bí mật sang khu vực Cục Tác chiến tại đồi Khau Muộc." }
      ]
    },
    {
      id: "vr-k77",
      relicId: "DH-QG-03",
      badge: "TRẠM PANORAMA 360° #03 • QUÂN GIỚI K77",
      title: "Xưởng Vũ Khí Đội Cấn – Nhà Máy K77",
      sub: "Xã Đồng Thịnh • 3 Điểm tương tác 360°",
      resolutionTag: "8K HDR • Không gian thực địa",
      description: "Khu vực Nhà bia di tích Quốc gia và không gian tái hiện xưởng rèn đúc vũ khí Đội Cấn – Nhà máy Quân giới K77 tại xã Đồng Thịnh.",
      hotspots: [
        { angle: "60° Đông Bắc", name: "Nhà bia Di tích Quốc gia Xưởng Đội Cấn K77", detail: "Vinh danh các kỹ sư, công nhân ngành Quân giới Việt Nam thời kỳ 1947–1954." },
        { angle: "150° Đông Nam", name: "Khu vực nền lò rèn & máy tiện vũ khí", detail: "Nơi sản xuất đạn bazooka, đạn súng cối và lựu đạn chi viện tiền tuyến." },
        { angle: "270° Tây", name: "Nhà văn hóa & Khu trưng bày truyền thống", detail: "Điểm sinh hoạt truyền thống và đón tiếp các đoàn khách hành hương về nguồn." }
      ]
    }
  ],

  eduQuizzes: {
    "DH-QG-01": {
      code: "Q-CH01",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 01/08 • DI TÍCH CHÙA HANG",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA DI TÍCH CHÙA HANG:",
      question: "Năm 1947, Chùa Hang (Định Hóa) được Trung ương Đảng và Chính phủ lựa chọn làm căn cứ bí mật phục vụ mục đích trọng yếu nào sau đây?",
      options: [
        { key: "A", text: "Kho tập kết quân lương chiến dịch Hòa Bình và xưởng đúc đồng thau dân sự.", correct: false },
        { key: "B", text: "Đặt cơ quan làm việc an toàn của Việt Nam Thông tấn xã (VNTTX), báo chí Trung ương và điểm phát sóng vô tuyến điện mật, nơi Bác Hồ từng dừng chân làm việc.", correct: true },
        { key: "C", text: "Trụ sở phân hiệu Trường Quân sự Lục quân Trần Quốc Tuấn đào tạo sĩ quan chỉ huy.", correct: false },
        { key: "D", text: "Bệnh viện Dã chiến Phẫu thuật Hậu cần Quân y Viện 108.", correct: false }
      ],
      explanation: "Chính xác! Trong chiến dịch Việt Bắc Thu – Đông 1947, lòng hang đá vôi kiên cố của Chùa Hang (TT. Chợ Chu) là căn cứ che chở an toàn cho cơ quan thông tấn, báo chí cách mạng và là nơi Chủ tịch Hồ Chí Minh từng làm việc (QĐ số 515/QĐ-BVHTTDL)."
    },
    "DH-QG-02": {
      code: "Q-BT02",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 02/08 • BỘ TỔNG THAM MƯU",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA BỘ TỔNG THAM MƯU (ĐỒI TỈ):",
      question: "Cơ quan Bộ Tổng Tham mưu QĐND Việt Nam đóng tại xã Bảo Linh (1949 - 1954) gắn liền với vai trò chỉ đạo trực tiếp của vị tướng lĩnh nào?",
      options: [
        { key: "A", text: "Đại tướng Võ Nguyên Giáp và Tổng Tham mưu trưởng Hoàng Văn Thái.", correct: true },
        { key: "B", text: "Khu trưởng Khu 10 Tây Bắc.", correct: false },
        { key: "C", text: "Ban Chỉ huy Mặt trận Đường số 5 đồng bằng Bắc Bộ.", correct: false },
        { key: "D", text: "Bộ Tư lệnh Phân khu Nam Bộ.", correct: false }
      ],
      explanation: "Chính xác! Tại xã Bảo Linh (Định Hóa), Đại tướng Võ Nguyên Giáp và đồng chí Hoàng Văn Thái cùng Bộ Tổng Tham mưu đã hoạch định kế hoạch tác chiến cho các chiến dịch lớn từ Biên giới 1950 đến Điện Biên Phủ 1954 (QĐ số 2245/QĐ-BVHTTDL)."
    },
    "DH-QG-03": {
      code: "Q-K77",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 03/08 • XƯỞNG QUÂN GIỚI K77",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA XƯỞNG QUÂN GIỚI K77:",
      question: "Xưởng Đội Cấn – Nhà máy Quân giới K77 (1947 - 1954) tọa lạc tại địa bàn xã nào của huyện Định Hóa?",
      options: [
        { key: "A", text: "Xã Đồng Thịnh, huyện Định Hóa, tỉnh Thái Nguyên.", correct: true },
        { key: "B", text: "Xã Tân Trào, huyện Sơn Dương, tỉnh Tuyên Quang.", correct: false },
        { key: "C", text: "Phường Hoàng Văn Thụ, thành phố Thái Nguyên.", correct: false },
        { key: "D", text: "Thị trấn Bắc Sơn, tỉnh Lạng Sơn.", correct: false }
      ],
      explanation: "Chính xác! Xưởng Đội Cấn – Nhà máy Quân giới K77 đặt tại xã Đồng Thịnh, huyện Định Hóa, được công nhận Di tích cấp Quốc gia theo QĐ số 2245/QĐ-BVHTTDL."
    },
    "DH-QG-04": {
      code: "Q-TT04",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 04/08 • CỤC TỔNG THANH TRA",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA CỤC TỔNG THANH TRA:",
      question: "Di tích Nơi thành lập và đóng quân của Cục Tổng Thanh tra Quân đội Quốc gia Việt Nam (1948 - 1954) thuộc địa danh nào?",
      options: [
        { key: "A", text: "Thôn Bãi Hội, xã Bảo Cường, huyện Định Hóa (QĐ số 86/QĐ-BVHTTDL).", correct: true },
        { key: "B", text: "Đèo De, xã Phú Đình, huyện Định Hóa.", correct: false },
        { key: "C", text: "Xã Bình Thành, huyện Định Hóa.", correct: false },
        { key: "D", text: "Xã Điềm Mặc, huyện Định Hóa.", correct: false }
      ],
      explanation: "Chính xác! Di tích tọa lạc tại thôn Bãi Hội, xã Bảo Cường, huyện Định Hóa, được xếp hạng Di tích lịch sử cấp Quốc gia ngày 16/01/2018 theo QĐ số 86/QĐ-BVHTTDL."
    },
    "DH-QG-05": {
      code: "Q-TC05",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 05/08 • CỤC TÁC CHIẾN",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA CỤC TÁC CHIẾN:",
      question: "Địa điểm nơi ở và làm việc của Cục Tác chiến (1949 - 1954) tại xã Bảo Linh được Bộ VHTTDL xếp hạng Di tích cấp Quốc gia theo Quyết định nào?",
      options: [
        { key: "A", text: "Quyết định số 3545/QĐ-BVHTTDL ngày 20/11/2024.", correct: true },
        { key: "B", text: "Quyết định số 102/QĐ-UBND năm 2010.", correct: false },
        { key: "C", text: "Quyết định số 990/QĐ-BVHTTDL năm 2005.", correct: false },
        { key: "D", text: "Quyết định số 412/QĐ-TTg năm 2012.", correct: false }
      ],
      explanation: "Chính xác! Di tích Cục Tác chiến tại xã Bảo Linh được Bộ Văn hóa, Thể thao và Du lịch xếp hạng Di tích lịch sử cấp Quốc gia theo Quyết định số 3545/QĐ-BVHTTDL ngày 20/11/2024."
    },
    "DH-CT-01": {
      code: "Q-D187",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 06/08 • TIỂU ĐOÀN 187",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA TIỂU ĐOÀN 187:",
      question: "Tiểu đoàn 187 thành lập tại Thị trấn Chợ Chu (Định Hóa) là đơn vị tiền thân của lữ đoàn nào thuộc Bộ Tổng Tham mưu ngày nay?",
      options: [
        { key: "A", text: "Lữ đoàn Cận vệ 144 – Bộ Tổng Tham mưu (QĐ số 2785/QĐ-UBND).", correct: true },
        { key: "B", text: "Lữ đoàn Pháo binh 368.", correct: false },
        { key: "C", text: "Lữ đoàn Công binh 249.", correct: false },
        { key: "D", text: "Lữ đoàn Thông tin 205.", correct: false }
      ],
      explanation: "Chính xác! Tiểu đoàn 187 là tiền thân của Lữ đoàn 144 – Bộ Tổng Tham mưu, đơn vị cận vệ bảo vệ an toàn các cơ quan đầu não kháng chiến tại ATK Định Hóa."
    },
    "DH-CT-02": {
      code: "Q-DB07",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 07/08 • ĐẢNG BỘ CHÂU ĐỊNH HÓA",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA ĐẢNG BỘ CHÂU ĐỊNH HÓA:",
      question: "Sự kiện thành lập Đảng bộ Châu Định Hóa (tiền thân của Đảng bộ huyện Định Hóa) diễn ra vào ngày tháng năm nào?",
      options: [
        { key: "A", text: "Ngày 26/6/1946 tại Thị trấn Chợ Chu.", correct: true },
        { key: "B", text: "Ngày 19/5/1949 tại xã Phú Đình.", correct: false },
        { key: "C", text: "Ngày 22/12/1944 tại rừng Trần Hưng Đạo.", correct: false },
        { key: "D", text: "Ngày 02/9/1945 tại Quảng trường Ba Đình.", correct: false }
      ],
      explanation: "Chính xác! Đảng bộ Châu Định Hóa được thành lập ngày 26/6/1946 tại Thị trấn Chợ Chu, trực tiếp lãnh đạo nhân dân các dân tộc Định Hóa xây dựng và bảo vệ căn cứ địa ATK."
    },
    "DH-CT-03": {
      code: "Q-DQD8",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "CÂU HỎI 08/08 • ĐÌNH QUAN ĐẾ",
      categoryTitle: "CÂU HỎI TRẮC NGHIỆM THỰC ĐỊA ĐÌNH QUAN ĐẾ:",
      question: "Tại cuộc mít tinh lịch sử ở Đình Quan Đế (Thị trấn Chợ Chu) ngày 28/3/1945, sự kiện trọng đại nào đã diễn ra?",
      options: [
        { key: "A", text: "Đại diện Mặt trận Việt Minh tuyên bố xóa bỏ chính quyền tay sai do thực dân Pháp dựng lên, thành lập chính quyền cách mạng.", correct: true },
        { key: "B", text: "Ký hiệp định sơ bộ ngừng bắn tại miền Bắc.", correct: false },
        { key: "C", text: "Khai giảng khóa đầu tiên của Trường Nguyễn Ái Quốc.", correct: false },
        { key: "D", text: "Tổng kết chiến dịch Biên giới Thu Đông 1950.", correct: false }
      ],
      explanation: "Chính xác! Ngày 28/3/1945 tại Đình Quan Đế (TT. Chợ Chu), đại diện Mặt trận Việt Minh tuyên bố xóa bỏ chính quyền tay sai thực dân, thành lập chính quyền cách mạng tại Định Hóa (QĐ số 3873/QĐ-UBND)."
    }
  },

  emulationRanks: [
    { level: "01", name: "Chiến Sĩ Sơ Cấp", rule: "Dưới 50% điểm kiểm tra", status: "locked" },
    { level: "02", name: "Đội Viên Am Hiểu Di Sản", rule: "Đạt 50% – 70% điểm", status: "passed" },
    { level: "03", name: "Chiến Sĩ Thi Đua Về Nguồn", rule: "Đạt 75% – 90% điểm (Hiện tại 80đ)", status: "active", badge: "ĐANG ĐẠT" },
    { level: "04", name: "ĐẠI SỨ DI SẢN ATK", rule: "Đạt 95% – 100% • Mở khóa huy hiệu Vàng", status: "gold" }
  ],

  juniorScripts: {
    "DH-QG-01": {
      sampleBadge: "CHÙA HANG – THÔNG TẤN XÃ CHIẾN KHU",
      part1: "“Kính chào quý thầy cô và các bạn du khách về nguồn. Em là thuyết minh viên nhí đại diện cho thanh thiếu niên ATK Định Hóa. Hôm nay, em xin trân trọng giới thiệu điểm di tích lịch sử Chùa Hang – nơi lưu giữ những năm tháng hào hùng đầu kháng chiến chống thực dân Pháp.”",
      part2: "“Thưa quý vị, năm 1947, khi giặc Pháp mở cuộc tấn công nhảy dù lên Bắc Kạn và càn quét Việt Bắc hòng chụp bắt cơ quan đầu não kháng chiến, Chùa Hang nằm nép mình dưới chân dãy núi đá hiểm trở đã được Bác Hồ và Trung ương tin tưởng lựa chọn làm căn cứ bí mật của Việt Nam Thông tấn xã. Trong lòng hang đá thâm nghiêm, tiếng máy vô tuyến điện tạch-tè vang lên không ngừng nghỉ giữa đêm rừng. Các chiến sĩ thông tấn đã vượt qua muôn vàn gian khổ, thiếu thốn lương thực, bảo vệ làn sóng điện đài thông suốt, kịp thời phát đi lời kêu gọi kháng chiến thiêng liêng của Chủ tịch Hồ Chí Minh cùng những tin thắng trận vang dội trên mặt trận sông Lô, đèo Bông Lau.”",
      part3: "“Chiến tranh đã lùi xa, nhưng vách đá Chùa Hang vẫn mãi khắc ghi lòng quả cảm của thế hệ cha anh. Thế hệ học sinh chúng em hôm nay nguyện ra sức học tập, gìn giữ và lan tỏa ngọn lửa cách mạng bất diệt của Thủ đô Gió Ngàn Định Hóa đến muôn đời sau. Em xin trân trọng cảm ơn!”"
    }
  },

  tourismRoutes: [
    {
      routeCode: "Tuyến 01: Trung Tâm Lịch Sử Thị Trấn Chợ Chu",
      durationBadge: "Nửa ngày • 04 Điểm Di Tích",
      totalDistance: "~4.5 km",
      suitability: "Phù hợp: Đoàn học sinh, Sinh viên & Khách tham quan gia đình",
      themeColor: "brand",
      steps: [
        { num: 1, relicId: "DH-QG-01", title: "Chùa Hang Định Hóa", desc: "Điểm xuất phát, danh lam thắng cảnh và căn cứ Bác Hồ làm việc (1947)." },
        { num: 2, relicId: "DH-CT-03", title: "Đình Quan Đế (Mít tinh 28/3/1945)", desc: "Nơi diễn ra cuộc mít tinh vũ trang xóa bỏ chính quyền thực dân phong kiến." },
        { num: 3, relicId: "DH-CT-02", title: "Địa điểm thành lập Đảng bộ Châu", desc: "Chi bộ Đảng đầu tiên của huyện Định Hóa ra đời ngày 26/6/1946." },
        { num: 4, relicId: "DH-CT-01", title: "Địa điểm Tiểu đoàn 187 Cận vệ", desc: "Lực lượng bảo vệ tuyệt đối an toàn Trung ương Đảng và Bác Hồ." }
      ]
    },
    {
      routeCode: "Tuyến 02: Dấu Ấn Chiến Khu Bảo Linh – Đồng Thịnh – Bảo Cường",
      durationBadge: "01 Ngày • 04 Điểm Di Tích Quốc Gia",
      totalDistance: "~14.8 km",
      suitability: "Phù hợp: Đoàn nghiên cứu lịch sử, Cựu chiến binh & Hành trình về nguồn",
      themeColor: "olive",
      steps: [
        { num: 1, relicId: "DH-QG-02", title: "Đại bản doanh Bộ Tổng Tham Mưu (Đồi Tỉ)", desc: "Nơi ở và làm việc của Đại tướng Võ Nguyên Giáp và cơ quan đầu não quân sự." },
        { num: 2, relicId: "DH-QG-05", title: "Cục Tác Chiến QĐNDVN (Đồi Khau Muộc)", desc: "Cơ quan lập bản đồ tác chiến các chiến dịch lớn (QĐ 3545/QĐ-BVHTTDL)." },
        { num: 3, relicId: "DH-QG-04", title: "Cục Tổng Thanh Tra Quân Đội (Bảo Cường)", desc: "Nơi ban hành quy chế thanh tra quân sự kháng chiến tại thôn Bãi Hội." },
        { num: 4, relicId: "DH-QG-03", title: "Quân Giới K77 – Xưởng Đội Cấn", desc: "Nhà máy bí mật sản xuất vũ khí đạn dược giữa rừng Đồng Thịnh." }
      ]
    }
  ],

  supportAmenities: [
    { icon: "P", title: "Bãi Đỗ Xe Đoàn", sub: "Sức chứa 30 xe 45 chỗ tại trung tâm Chợ Chu" },
    { icon: "Ψ", title: "Ẩm Thực Định Hóa", sub: "Cơm lam, xôi ngũ sắc, chè xanh ATK truyền thống" },
    { icon: "✚", title: "Y Tế Hỗ Trợ Du Khách", sub: "Trung tâm Y tế Huyện Định Hóa: 0208 3878 222" },
    { icon: "☎", title: "Đăng Ký Thuyết Minh", sub: "Ban Quản lý Di tích đón đoàn & hướng dẫn tại chỗ" }
  ]
};
