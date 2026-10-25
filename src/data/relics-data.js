/**
 * CƠ SỞ DỮ LIỆU ĐỊA LÝ DI SẢN ĐẶC BIỆT & 8 ĐIỂM DI TÍCH KHÁNG CHIẾN ATK ĐỊNH HÓA
 * Tách biệt hoàn toàn dữ liệu ra file JS độc lập (src/data/relics-data.js)
 * Chuẩn hóa theo 4 màn hình thiết kế Google Stitch & Tài liệu Đặc tả Astra Agentic Workflow
 */

window.ATK_PORTAL_DATA = {
  metadata: {
    systemCode: "GIS-ATK-2024-V3.2",
    archiveCode: "ATK-DH-2024-VR",
    eduSessionCode: "ATK-EDU-8492",
    vn2000Spec: "HỆ QUY CHIẾU QUỐC GIA VN-2000 (KINH TUYẾN TRỤC 105°45') | WGS-84 RTK REAL-TIME GNSS ±0.03M | SỐ HIỆU MẢNH BẢN ĐỒ F-48-56-C",
    stationStatus: "TRẠM THAM CHIẾU ĐO ĐẠC: HOẠT ĐỘNG 24/7",
    acceptanceNote: "Biên bản nghiệm thu Sở KH&CN Thái Nguyên số 18/BB-GIS"
  },

  hero: {
    topBarLeft: "CỔNG DỮ LIỆU ĐỊA CHỈ ĐỎ QUỐC GIA | CHIẾN KHU VIỆT BẮC (1947-1954)",
    topBarRightCode: "HỒ SƠ SỐ HÓA: BQL-ATK-TN01",
    topBarStatus: "HỆ THỐNG TRỰC TUYẾN 24/7",
    eyebrow: "DI TÍCH LỊCH SỬ QUỐC GIA ĐẶC BIỆT",
    titleLine1: "HỆ THỐNG SỐ HÓA DI TÍCH",
    titleLine2: "LỊCH SỬ ATK ĐỊNH HÓA",
    subtitle: "Thủ đô Gió Ngàn Chiến Khu Việt Bắc",
    description: "Bảo tồn & phát huy giá trị 8 điểm di tích lịch sử kháng chiến qua nền tảng Bản đồ số GIS, Cẩm nang số tương tác Flipbook, Không gian thực tế ảo VR 360° và Edu-Hub tương tác.",
    quote: "“Thu Đông năm 1947, giặc Pháp mở cuộc tấn công lớn lên Việt Bắc hòng tiêu diệt cơ quan đầu não kháng chiến của ta... Nhưng Định Hóa nói riêng và Việt Bắc nói chung đã trở thành căn cứ địa bất khả xâm phạm.”",
    quoteAuthor: "— Đại tướng Võ Nguyên Giáp | Hồi ký “Chiến đấu trong vòng vây”",
    mediaOverlayTag: "TƯ LIỆU SỐ HÓA LỊCH SỬ KHÁNG CHIẾN",
    mediaOverlayTitle: "Không Gian Trưng Bày & Lưu Giữ Ký Ức Thủ Đô Gió Ngàn",
    mediaOverlayMeta: "Tích hợp 3D GIS • VR 360° HDR • Lưu trữ Quốc gia",
    mediaFooterLeft: "Đơn vị lưu chiểu: Bảo tàng ATK Định Hóa",
    mediaFooterRight: "QĐ SỐ: 515/QĐ-BVHTTDL"
  },

  kpiMetrics: [
    {
      value: "08",
      label: "Điểm Di Tích Số Hóa",
      sub: "05 Cấp Quốc Gia & 03 Cấp Tỉnh",
      accentClass: "brand"
    },
    {
      value: "100%",
      label: "Thực Tế Ảo & Audio",
      sub: "VR 360° Panorama và Thuyết minh AI",
      accentClass: "olive"
    },
    {
      value: "1947",
      label: "Mốc Son Kháng Chiến",
      sub: "Kỷ nguyên 1947 – 1954 bất khuất",
      accentClass: "gold"
    },
    {
      value: "8/8",
      label: "Con Dấu Check-in",
      sub: "Nhận Huy hiệu Đại sứ Di sản Số",
      accentClass: "brand"
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
      title: "ẢNH KHÔNG GIAN LỊCH SỬ",
      value: "1947-1954",
      desc: "Lồng ghép đối sánh không ảnh quân sự Pháp chụp chiến khu Việt Bắc năm 1948."
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
      items: "Chùa Hang, Đình Quan Đế, Đảng Bộ Châu, ĐĐ 187",
      countLabel: "4 Điểm",
      filterKey: "TT Chợ Chu"
    },
    {
      commune: "Xã Bảo Linh",
      items: "Bộ Tổng Tham mưu, Cục Tác chiến QĐNDVN",
      countLabel: "2 Điểm",
      filterKey: "Xã Bảo Linh"
    },
    {
      commune: "Xã Đồng Thịnh",
      items: "Xưởng Đội Cấn - Nhà máy Quân giới K77",
      countLabel: "1 Điểm",
      filterKey: "Xã Đồng Thịnh"
    },
    {
      commune: "Xã Bảo Cường",
      items: "Nơi thành lập Cục Tổng Thanh tra Quân đội",
      countLabel: "1 Điểm",
      filterKey: "Xã Bảo Cường"
    }
  ],

  relics: [
    {
      order: 1,
      id: "DH-QG-01",
      gisCode: "ATK-CC-04",
      stampVerifyCode: "ATK-CH-9482",
      shortTabName: "1. CHÙA HANG",
      stampShortTitle: "1. Chùa Hang",
      stampBadgeLine: "CHÙA HANG",
      rank: "Quốc gia",
      rankBadge: "QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • TRUNG TÂM",
      categoryTag: "Danh lam thắng cảnh",
      name: "Chùa Hang Định Hóa",
      fullName: "Di tích Lịch sử Chùa Hang (TT. Chợ Chu)",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 515/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ: Số 1460-QĐ/VH ngày 28/6/1999",
      lat: "21.912500°B",
      lng: "105.642800°Đ",
      distanceFromCenter: "0.8 km",
      mapPin: { x: 265, y: 120, num: 4, label: "Chùa Hang Chợ Chu" },
      shortDesc: "Nơi đặt trạm báo chí bí mật và xưởng in tài liệu đặc biệt của Trung ương Đảng, đồng thời là nơi Chủ tịch Hồ Chí Minh từng làm việc.",
      fieldStatus: "Lòng hang tự nhiên giữ nguyên hệ thống nhũ đá, dấu vết cải tạo kho quân nhu, bậc đá nguyên gốc và bia đá chứng tích thời kỳ Toàn quốc kháng chiến.",
      nextTargetId: "DH-CT-03",
      nextDistanceKm: "1.2 km",
      nextDurationText: "~4 phút xe / 15 phút đi bộ",
      stampedDefault: true
    },
    {
      order: 2,
      id: "DH-QG-02",
      gisCode: "ATK-BL-01",
      stampVerifyCode: "ATK-BT-4410",
      shortTabName: "2. ĐỒI TỈ",
      stampShortTitle: "2. Bộ Tổng Tham Mưu Đồi Tỉ",
      stampBadgeLine: "BỘ TỔNG THAM MƯU",
      rank: "Quốc gia",
      rankBadge: "QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • ĐỒI TỈ",
      categoryTag: "Cơ quan Đầu não Quân sự",
      name: "Bộ Tổng Tham Mưu QĐNDVN",
      fullName: "1. Cơ quan Bộ Tổng Tham Mưu (Đồi Tỉ)",
      commune: "Xã Bảo Linh",
      communeFull: "Xã Bảo Linh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 2245/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ: Số 2245/QĐ-BVHTTDL ngày 29/6/2015",
      lat: "21.874200°B",
      lng: "105.612500°Đ",
      distanceFromCenter: "2.4 km",
      mapPin: { x: 140, y: 185, num: 1, label: "Tổng Tham Mưu" },
      shortDesc: "Xã Bảo Linh, nơi Đại tướng Tổng Tư lệnh Võ Nguyên Giáp và cơ quan đầu não quân sự lập kế hoạch tác chiến cho các chiến dịch lớn 1949 - 1954.",
      fieldStatus: "Nhà bia di tích và hệ thống hầm hào chỉ huy chiến lược dưới tán rừng cọ Đồi Tỉ xã Bảo Linh.",
      nextTargetId: "DH-QG-05",
      nextDistanceKm: "1.8 km",
      nextDurationText: "~5 phút xe / 18 phút đi bộ",
      stampedDefault: true
    },
    {
      order: 3,
      id: "DH-QG-03",
      gisCode: "ATK-DT-03",
      stampVerifyCode: "ATK-K77-7705",
      shortTabName: "3. K77",
      stampShortTitle: "3. Xưởng Quân Giới K77",
      stampBadgeLine: "QUÂN GIỚI K77",
      rank: "Quốc gia",
      rankBadge: "QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • ĐỒNG THỊNH",
      categoryTag: "Quân giới Kháng chiến",
      name: "Xưởng Đội Cấn - Quân Giới K77",
      fullName: "Xưởng Đội Cấn - Nhà máy Quân giới K77 (1947 - 1954)",
      commune: "Xã Đồng Thịnh",
      communeFull: "Xã Đồng Thịnh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 2245/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ: Số 2245/QĐ-BVHTTDL ngày 29/6/2015",
      lat: "21.868100°B",
      lng: "105.620200°Đ",
      distanceFromCenter: "3.1 km",
      mapPin: { x: 170, y: 225, num: 2, label: "Đồi Tín Keo / K77" },
      shortDesc: "Cơ sở nghiên cứu, chế tạo vũ khí đạn dược chủ lực của ngành Quân giới Việt Nam phục vụ chiến trường Việt Bắc và Điện Biên Phủ.",
      fieldStatus: "Nhà bia di tích + Nhà văn hóa thôn, bảo tồn dấu tích nền xưởng rèn đúc vũ khí kháng chiến.",
      nextTargetId: "DH-QG-04",
      nextDistanceKm: "5.2 km",
      nextDurationText: "~10 phút xe / 45 phút đi bộ",
      stampedDefault: true
    },
    {
      order: 4,
      id: "DH-QG-04",
      gisCode: "ATK-BC-04",
      stampVerifyCode: "ATK-TT-8618",
      shortTabName: "4. TỔNG THANH TRA",
      stampShortTitle: "4. Cục Tổng Thanh Tra",
      stampBadgeLine: "TỔNG THANH TRA",
      rank: "Quốc gia",
      rankBadge: "QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • BÃI HỘI",
      categoryTag: "Thanh tra Quốc phòng",
      name: "Cục Tổng Thanh Tra Quân Đội",
      fullName: "Nơi thành lập Cục Tổng Thanh tra Quân đội (Thôn Bãi Hội)",
      commune: "Xã Bảo Cường",
      communeFull: "Thôn Bãi Hội, Xã Bảo Cường, Huyện Định Hóa",
      decision: "QĐ: 86/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ: Số 86/QĐ-BVHTTDL ngày 16/01/2018",
      lat: "21.881000°B",
      lng: "105.599100°Đ",
      distanceFromCenter: "4.2 km",
      mapPin: { x: 105, y: 155, num: 3, label: "Lán Khau Lầu / Bãi Hội" },
      shortDesc: "Cơ quan kiểm tra kỷ luật, giám sát việc chấp hành mệnh lệnh tác chiến và chính sách hậu phương quân đội giai đoạn 1948 - 1954.",
      fieldStatus: "Nhà bia di tích lịch sử tại thôn Bãi Hội, xã Bảo Cường (nay là Thanh tra Bộ Quốc phòng).",
      nextTargetId: "DH-QG-03",
      nextDistanceKm: "5.2 km",
      nextDurationText: "~10 phút xe / 45 phút đi bộ",
      stampedDefault: false
    },
    {
      order: 5,
      id: "DH-QG-05",
      gisCode: "ATK-BL-05",
      stampVerifyCode: "ATK-TC-3545",
      shortTabName: "5. CỤC TÁC CHIẾN",
      stampShortTitle: "5. Cục Tác Chiến",
      stampBadgeLine: "CỤC TÁC CHIẾN",
      rank: "Quốc gia",
      rankBadge: "QUỐC GIA",
      gisHeaderLabel: "CẤP QUỐC GIA • ĐỒI KHAU MUỘC",
      categoryTag: "Tham mưu Chiến lược",
      name: "Cục Tác Chiến - Bộ TTM",
      fullName: "5. Cơ quan Cục Tác Chiến (1949 - 1954)",
      commune: "Xã Bảo Linh",
      communeFull: "Xã Bảo Linh, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 3545/QĐ-BVHTTDL",
      gisPopupDecision: "QĐ: Số 3545/QĐ-BVHTTDL ngày 20/11/2024",
      lat: "21.849300°B",
      lng: "105.631800°Đ",
      distanceFromCenter: "3.7 km",
      mapPin: { x: 240, y: 245, num: 5, label: "Cục Tác Chiến" },
      shortDesc: "Trung tâm tham mưu cơ mật hoạch định các chiến dịch quân sự lớn: Biên giới 1950, Trung Du, Hòa Bình, Tây Bắc và Điện Biên Phủ 1954.",
      fieldStatus: "Nhà bia di tích được Bộ VHTTDL xếp hạng cấp Quốc gia theo QĐ số 3545/QĐ-BVHTTDL.",
      nextTargetId: "DH-QG-02",
      nextDistanceKm: "1.8 km",
      nextDurationText: "~5 phút xe / 18 phút đi bộ",
      stampedDefault: false
    },
    {
      order: 6,
      id: "DH-CT-01",
      gisCode: "ATK-CC-06",
      stampVerifyCode: "ATK-D187-2785",
      shortTabName: "6. TIỂU ĐOÀN 187",
      stampShortTitle: "6. Tiểu Đoàn 187",
      stampBadgeLine: "TIỂU ĐOÀN 187",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • TT. CHỢ CHU",
      categoryTag: "Lực lượng Cận vệ",
      name: "Tiểu Đoàn 187 Cận Vệ (LĐ 144)",
      fullName: "Nơi thành lập Tiểu đoàn 187 – Tiền thân Lữ đoàn 144",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 2785/QĐ-UBND",
      gisPopupDecision: "QĐ: Số 2785/QĐ-UBND Tỉnh Thái Nguyên (2014)",
      lat: "21.905100°B",
      lng: "105.648900°Đ",
      distanceFromCenter: "1.5 km",
      mapPin: { x: 430, y: 175, num: 7, label: "Đồi Cọ Thôn Roòng" },
      shortDesc: "Lực lượng cận vệ vũ trang bảo vệ trực tiếp tuyệt đối an toàn cho Trung ương Đảng, Chính phủ, Bác Hồ và Bộ Tổng Tư lệnh.",
      fieldStatus: "Nhà bia di tích kết hợp khuôn viên Nhà văn hóa khu phố tại Thị trấn Chợ Chu.",
      nextTargetId: "DH-CT-02",
      nextDistanceKm: "1.5 km",
      nextDurationText: "~5 phút xe / 16 phút đi bộ",
      stampedDefault: false
    },
    {
      order: 7,
      id: "DH-CT-02",
      gisCode: "ATK-CC-07",
      stampVerifyCode: "ATK-DBC-2606",
      shortTabName: "7. ĐẢNG BỘ CHÂU",
      stampShortTitle: "7. Đảng Bộ Châu Định Hóa",
      stampBadgeLine: "ĐẢNG BỘ CHÂU",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • TT. CHỢ CHU",
      categoryTag: "Cội nguồn Đảng bộ",
      name: "Thành Lập Đảng Bộ Châu Định Hóa",
      fullName: "Địa điểm thành lập Đảng bộ Châu Định Hóa (26/6/1946)",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 01/12/2014",
      gisPopupDecision: "QĐ công nhận cấp Tỉnh ngày 01/12/2014",
      lat: "21.911000°B",
      lng: "105.645100°Đ",
      distanceFromCenter: "0.8 km",
      mapPin: { x: 345, y: 215, num: 8, label: "Đảng Bộ Châu ĐH" },
      shortDesc: "Chi bộ Đảng đầu tiên của huyện Định Hóa ra đời ngày 26/6/1946, hạt nhân lãnh đạo nhân dân các dân tộc xây dựng căn cứ địa kháng chiến.",
      fieldStatus: "Khuôn viên di tích tại trụ sở Đảng bộ huyện Định Hóa, Thị trấn Chợ Chu.",
      nextTargetId: "DH-CT-03",
      nextDistanceKm: "0.8 km",
      nextDurationText: "~3 phút xe / 10 phút đi bộ",
      stampedDefault: false
    },
    {
      order: 8,
      id: "DH-CT-03",
      gisCode: "ATK-CC-08",
      stampVerifyCode: "ATK-DQD-3873",
      shortTabName: "8. ĐÌNH QUAN ĐẾ",
      stampShortTitle: "8. Mít Tinh Đình Quan Đế",
      stampBadgeLine: "ĐÌNH QUAN ĐẾ",
      rank: "Cấp Tỉnh",
      rankBadge: "CẤP TỈNH",
      gisHeaderLabel: "CẤP TỈNH • TT. CHỢ CHU",
      categoryTag: "Sự kiện Giành chính quyền",
      name: "Cuộc Mít Tinh Đình Quan Đế",
      fullName: "6. Di tích Lịch sử Đình Quan Đế (Mít tinh 28/3/1945)",
      commune: "TT Chợ Chu",
      communeFull: "Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      decision: "QĐ: 3873/QĐ-UBND",
      gisPopupDecision: "QĐ: Số 3873/QĐ-UBND Tỉnh Thái Nguyên (2023)",
      lat: "21.908200°B",
      lng: "105.645100°Đ",
      distanceFromCenter: "1.2 km",
      mapPin: { x: 315, y: 165, num: 6, label: "Đình Quan Đế" },
      shortDesc: "Nơi diễn ra cuộc mít tinh lịch sử ngày 28/3/1945, đại diện Mặt trận Việt Minh tuyên bố xóa bỏ chính quyền tay sai thực dân, thành lập chính quyền cách mạng.",
      fieldStatus: "Bia đá di tích + Cây đa cổ thụ di sản và khuôn viên Nhà văn hóa phía sau tại TT. Chợ Chu.",
      nextTargetId: "DH-QG-01",
      nextDistanceKm: "1.2 km",
      nextDurationText: "~4 phút xe / 15 phút đi bộ",
      stampedDefault: false
    }
  ],

  flipbookSpreads: [
    {
      spreadIndex: 0,
      rangeLabel: "P. 01-02",
      tocCategory: "KHÁI QUÁT ẤN BẢN",
      tocTitle: "Bìa Ấn Bản & Lời Mở Đầu",
      tocSub: "Bản đồ tổng quan chiến khu ATK",
      pageLeftNum: "01",
      pageRightNum: "02",
      fileCode: "ATK-TL-01A",
      periodTag: "TƯ LIỆU TỔNG QUAN 1947-1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • ATK ĐỊNH HÓA",
      photoCaption: "Toàn cảnh địa hình thung lũng Chợ Chu và rừng cọ Bảo Linh nhìn từ đài quan sát ATK.",
      diaryQuote: "“Định Hóa có địa thế tiến khả dĩ công, thoái khả dĩ thủ; nhân dân các dân tộc một lòng đi theo kháng chiến, xứng đáng là Thủ đô Gió Ngàn của cả nước.”",
      gisCoord: "21°52'30\"N 105°38'15\"E",
      rightBadge: "TỔNG QUAN CHIẾN KHU VIỆT BẮC",
      rightDecision: "Hồ sơ Lưu chiểu Quốc gia",
      rightTitle: "Tổng Quan Căn Cứ Địa Cách Mạng ATK Định Hóa",
      rightLocation: "Địa phận: Huyện Định Hóa, Tỉnh Thái Nguyên (Trung tâm Thủ đô Kháng chiến)",
      rightBody: "Từ năm 1947 đến năm 1954, Chủ tịch Hồ Chí Minh cùng Trung ương Đảng, Chính phủ và Bộ Tổng Tư lệnh đã chọn Định Hóa làm nơi đặt đại bản doanh chỉ đạo cuộc kháng chiến chống thực dân Pháp xâm lược đến thắng lợi hoàn toàn.",
      rightPreservation: "Hệ thống 08 điểm di tích tiêu biểu đã được đo đạc tọa độ GIS chuẩn VN-2000, số hóa tư liệu 3D và tích hợp thuyết minh tự động.",
      qrTargetRelicId: "DH-QG-01",
      audioTitle: "Thuyết minh Trang 01 - 02: Tổng quan Thủ đô Gió Ngàn ATK Định Hóa",
      audioDuration: "02:45"
    },
    {
      spreadIndex: 1,
      rangeLabel: "P. 03-04",
      tocCategory: "DI TÍCH QUỐC GIA",
      tocTitle: "Thắng Cảnh Chùa Hang & Đồi Tỉ",
      tocSub: "Cơ quan BTTM & Báo Sự Thật",
      pageLeftNum: "04",
      pageRightNum: "05",
      fileCode: "ATK-TL-04B",
      periodTag: "TƯ LIỆU THỰC ĐỊA 1947-1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • ATK ĐỊNH HÓA",
      photoCaption: "Vị trí Lán bí mật của Thường vụ Trung ương Đảng và Ban biên tập tại rừng Định Hóa.",
      diaryQuote: "“Tháng 10 năm 1947, giặc Pháp nhảy dù xuống Bắc Kạn hòng tiêu diệt cơ quan đầu não kháng chiến. Từ Chùa Hang và Đồi Tỉ, các chỉ thị mật đã kịp thời truyền đi khắp các mặt trận, bẻ gãy gọng kìm Sông Lô - Đường 4...”",
      gisCoord: "21°54'12\"N 105°38'04\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA",
      rightDecision: "QĐ số 1460-QĐ/VH & 515/QĐ-BVHTTDL",
      rightTitle: "Di Tích Danh Lam Thắng Cảnh Chùa Hang",
      rightLocation: "Địa phận: Thị trấn Chợ Chu, Huyện Định Hóa, Tỉnh Thái Nguyên",
      rightBody: "Chùa Hang nằm sâu trong lòng dãy núi đá vôi Tháp Tượng. Trong thời kỳ 1947 - 1948, đây là nơi sơ tán an toàn, bảo vệ tài liệu tuyệt mật và đồng thời là nơi làm việc của các cơ quan Trung ương, trạm phát sóng và Chủ tịch Hồ Chí Minh.",
      rightPreservation: "Lòng hang tự nhiên giữ nguyên hệ thống nhũ đá, dấu vết cải tạo kho quân nhu, bậc đá nguyên gốc và bia đá chứng tích thời kỳ Toàn quốc kháng chiến.",
      qrTargetRelicId: "DH-QG-01",
      audioTitle: "Thuyết minh Trang 04 - 05: Căn cứ Chùa Hang & Đồi Tỉ Định Hóa",
      audioDuration: "03:45"
    },
    {
      spreadIndex: 2,
      rangeLabel: "P. 05-06",
      tocCategory: "DI TÍCH QUỐC GIA",
      tocTitle: "Xưởng Quân Giới K77 & Bãi Hội",
      tocSub: "Cục Tổng Thanh tra Chính phủ & Quân đội",
      pageLeftNum: "05",
      pageRightNum: "06",
      fileCode: "ATK-TL-06C",
      periodTag: "TƯ LIỆU QUÂN GIỚI 1947-1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • QUÂN GIỚI K77",
      photoCaption: "Các chiến sĩ công nhân ngành Quân giới chế tạo đạn bazooka và lựu đạn tại Xưởng Đội Cấn K77.",
      diaryQuote: "“Dưới tán rừng Đồng Thịnh, máy tiện chạy bằng sức nước và bếp lò rèn đỏ lửa suốt đêm. Mỗi viên đạn, quả mìn xuất xưởng từ K77 đều mang theo ý chí tất thắng của công nhân quân giới Việt Bắc...”",
      gisCoord: "21°52'05\"N 105°37'12\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA",
      rightDecision: "QĐ số 2245/QĐ-BVHTTDL & 86/QĐ-BVHTTDL",
      rightTitle: "Xưởng Đội Cấn – Nhà Máy Quân Giới K77 & Cục Tổng Thanh Tra",
      rightLocation: "Địa phận: Xã Đồng Thịnh & Thôn Bãi Hội, Xã Bảo Cường, Huyện Định Hóa",
      rightBody: "Xưởng Đội Cấn (K77) tại xã Đồng Thịnh là nòng cốt sản xuất vũ khí của Quân giới Việt Nam. Cùng thời gian này, tại thôn Bãi Hội (xã Bảo Cường), Cục Tổng Thanh tra Quân đội được thành lập để giữ nghiêm kỷ luật chiến trường.",
      rightPreservation: "Nhà bia tưởng niệm di tích Quốc gia tại xã Đồng Thịnh và xã Bảo Cường được bảo vệ nguyên trạng, gắn mã QR số hóa thực địa.",
      qrTargetRelicId: "DH-QG-03",
      audioTitle: "Thuyết minh Trang 05 - 06: Xưởng Quân giới K77 & Cục Tổng Thanh tra",
      audioDuration: "03:20"
    },
    {
      spreadIndex: 3,
      rangeLabel: "P. 07-08",
      tocCategory: "DI TÍCH QUỐC GIA & TỈNH",
      tocTitle: "Cục Tác Chiến & Tiểu Đoàn 187",
      tocSub: "Bảo Linh và đơn vị bảo vệ ATK",
      pageLeftNum: "07",
      pageRightNum: "08",
      fileCode: "ATK-TL-08D",
      periodTag: "TƯ LIỆU TÁC CHIẾN 1949-1954",
      stampLabel: "LƯU TRỮ QUỐC GIA • BỘ TỔNG THAM MƯU",
      photoCaption: "Giao ban tác chiến bên sa bàn chiến dịch tại lán làm việc Cục Tác chiến xã Bảo Linh.",
      diaryQuote: "“Từ lán làm việc đơn sơ dưới chân đồi Khau Muộc xã Bảo Linh, các bản đồ tác chiến Chiến dịch Biên giới 1950 và Điện Biên Phủ 1954 đã được cập nhật từng giờ để trình Đại tướng Tổng Tư lệnh...”",
      gisCoord: "21°53'20\"N 105°35'53\"E",
      rightBadge: "DI TÍCH LỊCH SỬ QUỐC GIA & CẤP TỈNH",
      rightDecision: "QĐ số 3545/QĐ-BVHTTDL & 2785/QĐ-UBND",
      rightTitle: "Cơ Quan Cục Tác Chiến & Nơi Thành Lập Tiểu Đoàn 187",
      rightLocation: "Địa phận: Xã Bảo Linh & Thị trấn Chợ Chu, Huyện Định Hóa",
      rightBody: "Cục Tác chiến (1949–1954) là trung tâm tham mưu tác chiến trực thuộc Bộ Tổng Tham mưu. Song hành bảo vệ cơ quan đầu não là Tiểu đoàn 187 (tiền thân Lữ đoàn 144 Cận vệ) đóng tại Chợ Chu.",
      rightPreservation: "Nhà bia di tích Quốc gia Cục Tác chiến (xếp hạng năm 2024) và Nhà bia Tiểu đoàn 187 tại Thị trấn Chợ Chu.",
      qrTargetRelicId: "DH-QG-05",
      audioTitle: "Thuyết minh Trang 07 - 08: Cục Tác chiến & Tiểu đoàn Cận vệ 187",
      audioDuration: "03:15"
    },
    {
      spreadIndex: 4,
      rangeLabel: "P. 09-10",
      tocCategory: "DI TÍCH TỈNH & DI SẢN",
      tocTitle: "Đảng Bộ Châu & Cây Đa Đình Q",
      tocSub: "Địa điểm mít tinh kháng chiến 1945",
      pageLeftNum: "09",
      pageRightNum: "10",
      fileCode: "ATK-TL-10E",
      periodTag: "TƯ LIỆU KHỞI NGHĨA 1945-1946",
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
      badge: "ĐIỂM QUAY: LÒNG HANG CHÙA HANG (PANORAMA 360°)",
      title: "Lòng Hang & Nhà Bia Chùa Hang",
      sub: "Thị trấn Chợ Chu • 4 Điểm ngắm VR",
      resolutionTag: "8K HDR • Góc nhìn: 120°",
      description: "Không gian 360° bên trong lòng hang đá tự nhiên Tháp Tượng, nơi đặt trạm làm việc bí mật và bia tưởng niệm Chủ tịch Hồ Chí Minh.",
      hotspots: [
        { angle: "45° Đông Bắc", name: "Bia tưởng niệm Chủ tịch Hồ Chí Minh", detail: "Khắc ghi dấu ấn Bác Hồ dừng chân làm việc tại Chùa Hang." },
        { angle: "120° Đông Nam", name: "Vách đá & Hệ thống nhũ đá tự nhiên", detail: "Che chắn an toàn trước máy bay trinh sát của địch năm 1947." },
        { angle: "215° Tây Nam", name: "Nền trạm in & Điện đài bí mật", detail: "Nơi phát đi các bản tin kháng chiến quan trọng." },
        { angle: "310° Tây Bắc", name: "Cửa hang hướng ra thung lũng Chợ Chu", detail: "Tầm nhìn chiến lược bao quát thị trấn Chợ Chu." }
      ]
    },
    {
      id: "vr-doi-ti",
      relicId: "DH-QG-02",
      badge: "ĐIỂM QUAY: ĐỒI TỈ BẢO LINH (PANORAMA 360°)",
      title: "Đồi Tỉ & Lán Làm Việc Bộ Tổng TTM",
      sub: "Xã Bảo Linh • 5 Điểm ngắm VR",
      resolutionTag: "8K HDR • Góc nhìn: 165°",
      description: "Toàn cảnh không gian rừng cọ Đồi Tỉ xã Bảo Linh, nơi Đại tướng Võ Nguyên Giáp và Bộ Tổng Tham mưu chỉ đạo các chiến dịch lớn.",
      hotspots: [
        { angle: "30° Bắc", name: "Nhà bia Di tích Bộ Tổng Tham mưu", detail: "Bia xếp hạng Quốc gia theo QĐ số 2245/QĐ-BVHTTDL." },
        { angle: "110° Đông", name: "Lán tác chiến dưới tán rừng cọ", detail: "Nơi trải bản đồ chiến dịch Biên giới 1950 và Điện Biên Phủ 1954." },
        { angle: "200° Nam", name: "Hệ thống giao thông hào bảo vệ", detail: "Kết nối an toàn sang khu vực Cục Tác chiến." }
      ]
    },
    {
      id: "vr-k77",
      relicId: "DH-QG-03",
      badge: "ĐIỂM QUAY: XƯỞNG ĐỘI CẤN K77 (PANORAMA 360°)",
      title: "Lò Đúc Súng Nhà Máy Quân Giới K77",
      sub: "Xã Đồng Thịnh • 3 Điểm ngắm VR",
      resolutionTag: "8K HDR • Góc nhìn: 90°",
      description: "Khu vực Nhà bia di tích và không gian tái hiện xưởng rèn đúc vũ khí Đội Cấn – Nhà máy Quân giới K77 tại xã Đồng Thịnh.",
      hotspots: [
        { angle: "60° Đông Bắc", name: "Nhà bia Di tích Xưởng Đội Cấn K77", detail: "Vinh danh các chiến sĩ, công nhân ngành Quân giới Việt Nam." },
        { angle: "150° Đông Nam", name: "Khu vực đặt lò rèn & máy tiện vũ khí", detail: "Nơi sản xuất đạn bazooka và súng cối thời kỳ 1947 - 1954." },
        { angle: "270° Tây", name: "Nhà văn hóa & Không gian trưng bày", detail: "Điểm sinh hoạt truyền thống và đón tiếp các đoàn về nguồn." }
      ]
    }
  ],

  eduQuizzes: {
    "DH-QG-01": {
      code: "Q-CH01",
      points: "+10 ĐIỂM DI SẢN",
      stepLabel: "ĐIỂM SỐ 01/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 02/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 03/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 04/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 05/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 06/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 07/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
      stepLabel: "ĐIỂM SỐ 08/08 • THỜI GIAN KHÔNG GIỚI HẠN",
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
    { level: "03", name: "Chiến Sĩ Thi Đua Về Nguồn", rule: "Đạt 75% – 90% điểm (Hiện tại 80d)", status: "active", badge: "ĐANG ĐẠT" },
    { level: "04", name: "ĐẠI SỨ DI SẢN ATK", rule: "Đạt 95% – 100% • Mở khóa huy hiệu Vàng", status: "gold" }
  ],

  juniorScripts: {
    "DH-QG-01": {
      sampleBadge: "CHÙA HANG - THÔNG TẤN XÃ CHIẾN KHU",
      part1: "“Kính chào quý thầy cô và các bạn du khách về nguồn. Em là thuyết minh viên nhí đại diện cho thanh thiếu niên ATK Định Hóa. Hôm nay, em xin trân trọng giới thiệu điểm di tích lịch sử Chùa Hang – nơi lưu giữ những năm tháng hào hùng đầu kháng chiến chống thực dân Pháp.”",
      part2: "“Thưa quý vị, năm 1947, khi giặc Pháp mở cuộc tấn công nhảy dù lên Bắc Kạn và càn quét Việt Bắc hòng chụp bắt cơ quan đầu não kháng chiến, Chùa Hang nằm nép mình dưới chân dãy núi đá hiểm trở đã được Bác Hồ và Trung ương tin tưởng lựa chọn làm căn cứ bí mật của Việt Nam Thông tấn xã. Trong lòng hang đá thâm nghiêm, tiếng máy vô tuyến điện tạch-tè vang lên không ngừng nghỉ giữa đêm rừng. Các chiến sĩ thông tấn đã vượt qua muôn vàn gian khổ, thiếu thốn lương thực, bảo vệ làn sóng điện đài thông suốt, kịp thời phát đi lời kêu gọi kháng chiến thiêng liêng của Chủ tịch Hồ Chí Minh cùng những tin thắng trận vang dội trên mặt trận sông Lô, đèo Bông Lau.”",
      part3: "“Chiến tranh đã lùi xa, nhưng vách đá Chùa Hang vẫn mãi khắc ghi lòng quả cảm của thế hệ cha anh. Thế hệ học sinh chúng em hôm nay nguyện ra sức học tập, gìn giữ và lan tỏa ngọn lửa cách mạng bất diệt của Thủ đô Gió Ngàn Định Hóa đến muôn đời sau. Em xin trân trọng cảm ơn!”"
    }
  },

  tourismRoutes: [
    {
      routeCode: "Tuyến 01: Trung Tâm Lịch Sử Chợ Chu",
      durationBadge: "Nửa ngày • 4 Điểm",
      totalDistance: "~4.5 km",
      suitability: "Phù hợp: Đoàn học sinh & Khách tham quan",
      themeColor: "brand",
      steps: [
        { num: 1, title: "Chùa Hang Định Hóa", desc: "Điểm xuất phát, danh lam thắng cảnh và di tích quốc gia." },
        { num: 2, title: "Đình Quan Đế", desc: "Nơi diễn ra cuộc mít tinh vũ trang lịch sử ngày 28/3/1945." },
        { num: 3, title: "Địa điểm thành lập Đảng bộ Châu", desc: "Chi bộ Đảng đầu tiên của huyện Định Hóa (26/6/1946)." },
        { num: 4, title: "Địa điểm Tiểu đoàn 187 Cận vệ", desc: "Lực lượng bảo vệ tuyệt đối Trung ương Đảng và Bác Hồ." }
      ]
    },
    {
      routeCode: "Tuyến 02: Dấu Ấn Chiến Khu Bảo Linh - Đồng Thịnh",
      durationBadge: "1 Ngày • 4 Điểm",
      totalDistance: "~14.8 km",
      suitability: "Phù hợp: Nghiên cứu, Cựu chiến binh, Phượt thủ",
      themeColor: "olive",
      steps: [
        { num: 1, title: "Đại bản doanh Bộ Tổng Tham Mưu (Đồi Tỉ)", desc: "Nơi ở và làm việc của Đại tướng Võ Nguyên Giáp và cơ quan đầu não." },
        { num: 2, title: "Cục Tác Chiến QĐNDVN", desc: "Cơ quan lập bản đồ tác chiến các chiến dịch lớn (QĐ 3545/QĐ-BVHTTDL)." },
        { num: 3, title: "Cục Tổng Thanh Tra Quân Đội (Bảo Cường)", desc: "Nơi ban hành quy chế thanh tra quân sự kháng chiến (Thôn Bãi Hội)." },
        { num: 4, title: "Quân Giới K77 - Xưởng Đội Cấn", desc: "Nhà máy bí mật sản xuất vũ khí đạn dược giữa rừng Đồng Thịnh." }
      ]
    }
  ],

  supportAmenities: [
    { icon: "P", title: "Bãi Đỗ Xe Đoàn", sub: "Sức chứa 30 xe 45 chỗ (Chợ Chu)" },
    { icon: "Ψ", title: "Ẩm Thực Chợ Chu", sub: "Cơm lam, thịt lợn mán, xôi ngũ sắc" },
    { icon: "✚", title: "Y Tế Khẩn Cấp", sub: "TT Y tế Huyện: 0208 3878 222" },
    { icon: "☎", title: "Trực Hướng Dẫn Viên", sub: "Ban QLDT ATK: Đón đoàn tại chỗ" }
  ]
};
