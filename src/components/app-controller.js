/**
 * MODULE 4: TRÌNH ĐIỀU PHỐI TRANG CHỦ HUB TỔNG (MAIN.JPG), VR 360° & TUYẾN DU LỊCH SỐ
 * Tách riêng logic & giao diện trang chủ Hub tổng và điều hướng (src/components/app-controller.js)
 */

window.ATKAppController = (function () {
  let directoryRankFilter = "ALL";
  let currentVrSceneId = "vr-chua-hang";
  let vrYawAngle = 120;
  let currentTheme = "option1";

  function showToast(msg) {
    const el = document.getElementById("globalToastBar");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(window.__atkToastTimer);
    window.__atkToastTimer = setTimeout(() => {
      el.classList.add("hidden");
    }, 3200);
  }

  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadHandbookFile() {
    const data = window.ATK_PORTAL_DATA;
    const lines = [
      "ẤN PHẨM SỐ HÓA 3D: CẨM NANG DI TÍCH KHÁNG CHIẾN ATK ĐỊNH HÓA (1947 - 1954)",
      "Bản lưu chiểu Quốc gia: " + data.metadata.archiveCode,
      "==========================================================================",
      ""
    ];
    data.relics.forEach((r) => {
      lines.push(`${r.order}. [${r.gisCode}] ${r.fullName}`);
      lines.push(`   - Cấp xếp hạng: ${r.rankBadge} (${r.decision})`);
      lines.push(`   - Địa phận: ${r.communeFull}`);
      lines.push(`   - Tọa độ GIS: LAT ${r.lat} | LONG ${r.lng}`);
      lines.push(`   - Giới thiệu: ${r.shortDesc}`);
      lines.push(`   - Hiện trạng: ${r.fieldStatus}`);
      lines.push("");
    });
    downloadTextFile("Cam-Nang-Di-Tich-Khang-Chien-ATK-Dinh-Hoa-A5.txt", lines.join("\n"));
    showToast("Đã tải Ấn phẩm Cẩm nang số ATK Định Hóa (Khổ A5 • 10 Trang)!");
  }

  function exportPassportCertificate() {
    const stamps = window.EduHubModule.getStampsState();
    const count = Object.keys(stamps).filter((k) => stamps[k] && stamps[k].verified).length;
    const lines = [
      "CHỨNG NHẬN ĐẠI SỨ DI SẢN SỐ ATK ĐỊNH HÓA – THÁI NGUYÊN",
      "Mã phiên xác thực: " + window.ATK_PORTAL_DATA.metadata.eduSessionCode,
      "Số con dấu đã thu thập: " + count + "/8 Điểm Di tích",
      "=======================================================",
      ""
    ];
    window.ATK_PORTAL_DATA.relics.forEach((r) => {
      const st = stamps[r.id];
      lines.push(`${r.order}. ${r.name} (${r.commune}): ${st && st.verified ? "ĐÃ XÁC THỰC [" + st.code + "]" : "CHỜ CHECK-IN"}`);
    });
    downloadTextFile("Chung-Nhan-Ho-Chieu-Di-San-ATK-Dinh-Hoa.txt", lines.join("\n"));
    showToast("Đã xuất Chứng nhận Hộ chiếu Di sản Số ATK Định Hóa!");
  }

  function speakVietnamese(text, rate) {
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "vi-VN";
        utter.rate = rate || 1.0;
        window.speechSynthesis.speak(utter);
        showToast("Đang phát thuyết minh giọng đọc AI tiếng Việt...");
        return;
      } catch (e) {}
    }
    showToast("Đang phát Audio Guide: " + text.slice(0, 65) + "...");
  }

  function refreshHeaderStampCounter() {
    const stamps = window.EduHubModule.getStampsState();
    const count = Object.keys(stamps).filter((k) => stamps[k] && stamps[k].verified).length;
    const badge = document.getElementById("headerStampBadgeCount");
    if (badge) badge.textContent = count + "/8";
    const kpiStamp = document.getElementById("kpiStampCounterValue");
    if (kpiStamp) kpiStamp.textContent = count + "/8";
  }

  function renderMainOverviewSection(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const hero = data.hero;
    const vrScene = data.vrScenes.find((v) => v.id === currentVrSceneId) || data.vrScenes[0];
    const stamps = window.EduHubModule.getStampsState();
    const stampedCount = Object.keys(stamps).filter((k) => stamps[k] && stamps[k].verified).length;

    root.innerHTML = `
      <!-- Top National Red Address Bar (Matches Main.jpg) -->
      <div class="bg-surface-warm border-b border-subtle px-4 py-2 text-[11px] font-mono-code">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span class="font-bold text-brand-primary">✪ ${hero.topBarLeft}</span>
          <div class="flex items-center gap-3">
            <span class="text-content-muted font-semibold">${hero.topBarRightCode}</span>
            <span class="bg-[#D9EFE2] text-[#22543D] font-bold px-2 py-0.5 border border-[#9AE6B4]">
              ● ${hero.topBarStatus}
            </span>
          </div>
        </div>
      </div>

      <!-- HERO SECTION (2-Column Google Stitch Standard) -->
      <div class="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left 7 Cols -->
          <div class="lg:col-span-7 space-y-4">
            <div class="inline-block bg-[#FCE8E6] text-[#7A1C1C] border border-[#F5C2C0] text-[11px] font-bold px-2.5 py-1 uppercase">
              ${hero.eyebrow}
            </div>

            <div class="space-y-1">
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-brand-primary leading-tight uppercase">
                ${hero.titleLine1}<br />${hero.titleLine2}
              </h1>
              <div class="text-xl sm:text-2xl font-display font-bold text-brand-olive pt-1">
                ${hero.subtitle}
              </div>
            </div>

            <p class="text-xs sm:text-sm text-content-muted leading-relaxed max-w-2xl">
              ${hero.description}
            </p>

            <!-- Quote Box from General Vo Nguyen Giap -->
            <div class="bg-surface-card border border-subtle border-l-4 border-l-[#7A1C1C] p-4 space-y-1.5">
              <blockquote class="text-xs sm:text-sm italic text-content-primary leading-relaxed">
                ${hero.quote}
              </blockquote>
              <div class="text-[11px] font-mono-code text-content-muted font-semibold">
                ${hero.quoteAuthor}
              </div>
            </div>

            <div class="flex flex-wrap gap-3 pt-1">
              <a href="#gisFullSectionMount" class="btn-brand">
                🗺 Khám Phá Bản Đồ Số &amp; Cẩm Nang
              </a>
              <a href="#tourismRoutesSection" class="btn-olive">
                ⑂ Bắt Đầu Tuyến Trải Nghiệm
              </a>
            </div>
          </div>

          <!-- Right 5 Cols: Archival Showcase Frame -->
          <div class="lg:col-span-5 space-y-2">
            <div class="bg-[#231917] border-4 border-strong p-5 min-h-[290px] flex flex-col justify-between relative text-white">
              <!-- Top-Right Tilted Stamp Badge -->
              <div class="self-end bg-[#FAF5EB] text-[#7A1C1C] border-2 border-[#7A1C1C] px-3 py-1.5 text-[10px] font-mono-code font-extrabold uppercase text-center stamp-box-rotate">
                <div>★ SỐ HÓA LƯU TRỮ ★</div>
                <div>ATK ĐỊNH HÓA</div>
              </div>

              <!-- Center Visual Graphic -->
              <div class="my-4 p-4 border border-white/25 bg-[#3A231E] text-center space-y-1.5">
                <div class="text-[10px] font-mono-code text-[#C29A50] uppercase tracking-widest">
                  KHÔNG GIAN DI SẢN SỐ HÓA 3D &amp; VR 360°
                </div>
                <div class="font-display font-extrabold text-base sm:text-lg text-white uppercase">
                  ĐẠI BẢN DOANH THỦ ĐÔ KHÁNG CHIẾN (1947 – 1954)
                </div>
                <div class="text-[11px] text-gray-300">
                  Chợ Chu • Bảo Linh • Đồng Thịnh • Bảo Cường
                </div>
              </div>

              <!-- Bottom Caption Overlay -->
              <div class="space-y-1 pt-2 border-t border-white/20">
                <span class="bg-brand-primary text-white text-[9px] font-mono-code font-bold px-2 py-0.5 uppercase">
                  ${hero.mediaOverlayTag}
                </span>
                <h3 class="font-display font-bold text-sm sm:text-base text-white">
                  ${hero.mediaOverlayTitle}
                </h3>
                <div class="text-[11px] font-mono-code text-[#E5DCCB]">
                  ${hero.mediaOverlayMeta}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-[11px] font-mono-code text-content-muted px-1">
              <span><strong>ĐV:</strong> ${hero.mediaFooterLeft}</span>
              <span class="font-bold text-brand-primary">${hero.mediaFooterRight}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- KPI METRICS STRIP (08 | 100% | 1947 | 8/8) -->
      <div class="bg-surface-warm border-y border-subtle py-6">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${data.kpiMetrics.map((m, idx) => `
            <div class="bg-surface-card border border-subtle p-4 flex items-start justify-between">
              <div class="space-y-1">
                <div ${idx === 3 ? 'id="kpiStampCounterValue"' : ''} class="text-2xl sm:text-3xl font-display font-extrabold ${m.accentClass === 'olive' ? 'text-brand-olive' : 'text-brand-primary'}">
                  ${idx === 3 ? stampedCount + "/8" : m.value}
                </div>
                <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${m.label}</div>
                <div class="text-[11px] text-content-muted">${m.sub}</div>
              </div>
              <span class="w-8 h-8 bg-surface-primary border border-subtle flex items-center justify-center text-xs font-bold text-brand-primary">
                ${idx === 0 ? "🏛" : idx === 1 ? "❂" : idx === 2 ? "⚑" : "★"}
              </span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- MAIN HUB SUMMARY SECTIONS (GIS OVERVIEW + FLIPBOOK OVERVIEW + 8 RELICS GRID + VR 360 + EDU OVERVIEW + 2 ROUTES) -->
      <div class="max-w-7xl mx-auto px-4 py-10 space-y-14">

        <!-- 1. Tóm tắt Bản Đồ Số GIS & Phân Bổ 4 Địa Bàn Chiến Lược -->
        <section class="space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-[11px] font-mono-code font-bold uppercase text-brand-olive">
                🗺 KHỐI DỮ LIỆU ĐỊA LÝ KHÔNG GIAN
              </div>
              <h2 class="text-xl sm:text-3xl font-display font-extrabold text-content-primary mt-1">
                Bản Đồ Số GIS &amp; Không Gian Địa Lý ATK Định Hóa
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Tích hợp chuẩn quy chiếu WGS84 và VN-2000, số hóa chính xác tọa độ thực địa các hầm chỉ huy, nhà bia, điểm tập hợp tại 4 địa bàn trọng yếu.
              </p>
            </div>
            <a href="#gisFullSectionMount" class="btn-flat-outline shrink-0">
              Truy Cập Bản Đồ Số Toàn Cảnh →
            </a>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Mini GIS Preview Left 7 Cols -->
            <div class="lg:col-span-7 bg-[#DCEAD6] border-2 border-subtle p-5 relative min-h-[260px] flex flex-col justify-between">
              <div class="bg-surface-card border border-subtle p-3 max-w-xs space-y-1">
                <div class="text-[10px] font-mono-code font-bold text-brand-primary uppercase">● LỚP BẢN ĐỒ: ĐỊA HÌNH ATK</div>
                <div class="text-[11px] font-mono-code text-content-muted">Hệ tọa độ: WGS84 / Kinh tuyến 105°45'</div>
                <div class="text-[11px] font-mono-code text-content-muted">Độ chính xác định vị: ± 0.03m</div>
              </div>

              <div class="flex flex-wrap gap-2 my-4">
                <a href="#gisFullSectionMount" class="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 border border-white">
                  ★ Chùa Hang Chợ Chu
                </a>
                <a href="#gisFullSectionMount" class="bg-surface-card text-brand-primary text-xs font-bold px-3 py-1.5 border border-brand">
                  ★ Xưởng K77 Đồng Thịnh
                </a>
                <a href="#gisFullSectionMount" class="bg-brand-olive text-white text-xs font-bold px-3 py-1.5 border border-white">
                  ★ Bộ Tổng Tham Mưu (Đồi Tỉ)
                </a>
              </div>

              <div class="self-end bg-surface-card border border-subtle px-3 py-1.5 text-[11px] font-mono-code font-bold text-brand-primary">
                ■ 8 Điểm Di tích Trực quan Thời gian thực
              </div>
            </div>

            <!-- Right 5 Cols: Phân Bổ 4 Địa Bàn Chiến Lược -->
            <div class="lg:col-span-5 bg-surface-card border border-subtle p-5 space-y-3">
              <div class="text-xs font-mono-code font-bold uppercase text-brand-primary border-b border-subtle pb-2">
                PHÂN BỔ 4 ĐỊA BÀN CHIẾN LƯỢC
              </div>
              <div class="space-y-2.5">
                ${data.communeDistribution.map((c) => `
                  <div class="p-3 bg-surface-primary border border-subtle flex items-center justify-between gap-3">
                    <div>
                      <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${c.commune}</div>
                      <div class="text-[11px] text-content-muted">${c.items}</div>
                    </div>
                    <span class="bg-surface-secondary text-brand-primary font-mono-code font-bold text-xs px-2.5 py-1 border border-subtle shrink-0">
                      ${c.countLabel}
                    </span>
                  </div>
                `).join("")}
              </div>
              <div class="text-[11px] text-content-muted pt-1 space-y-1">
                <div>⊙ Hỗ trợ định tuyến GPS 1 chạm tới từng nhà bia di tích</div>
                <div>▤ Tra cứu khảo sát hiện trạng bảo tồn theo Quyết định xếp hạng</div>
              </div>
            </div>
          </div>
        </section>

        <!-- 2. Tóm tắt Cẩm Nang Số 3D Flipbook Tương Tác -->
        <section class="bg-surface-warm border-2 border-subtle p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-[11px] font-mono-code font-bold uppercase text-brand-primary">
                ẤN PHẨM LƯU HÀNH DI SẢN SỐ
              </div>
              <h2 class="text-xl sm:text-3xl font-display font-extrabold text-content-primary mt-1">
                Cẩm Nang Số 3D Flipbook Tương Tác
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Mô phỏng trải nghiệm lật trang chân thực ấn phẩm 10 trang bìa cứng, tích hợp thuyết minh giọng đọc chuẩn, tư liệu lịch sử và mã QR tra cứu nhanh.
              </p>
            </div>
            <a href="#flipbookFullSectionMount" class="btn-brand shrink-0">
              Mở Cẩm Nang Chế Độ Lật Trang ↗
            </a>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <!-- Left 5 Cols: Book Card Preview -->
            <div class="lg:col-span-5 bg-surface-card border-2 border-subtle p-5 space-y-3">
              <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted border-b border-subtle pb-2">
                <span class="font-bold text-brand-primary uppercase">ẤN PHẨM HÀNH HƯƠNG • TẬP 1</span>
                <span>TRANG 04/10</span>
              </div>
              <div class="bg-[#E8DEC8] border border-subtle p-4 text-center space-y-2">
                <div class="text-[10px] font-mono-code font-bold text-brand-primary uppercase">
                  LỊCH SỬ CÁC ĐIỂM DI TÍCH ATK ĐỊNH HÓA (1947 - 1954)
                </div>
                <div class="h-24 bg-[#2F2B26] text-white flex items-center justify-center text-xs font-mono-code px-3">
                  [TƯ LIỆU SỐ HÓA BẢN GỐC • BỘ TỔNG THAM MƯU]
                </div>
              </div>
              <div class="space-y-1">
                <span class="text-[10px] font-mono-code font-bold text-brand-primary uppercase">TƯ LIỆU SỐ HÓA BẢN GỐC</span>
                <h3 class="font-display font-bold text-base text-content-primary">Đại Bản Doanh Bộ Tổng Tham Mưu QĐNDVN</h3>
                <p class="text-xs text-content-muted leading-relaxed">
                  Nơi Tổng Tư lệnh Võ Nguyên Giáp và cơ quan đầu não quân sự lập kế hoạch tác chiến cho các chiến dịch Biên giới 1950 và Điện Biên Phủ 1954.
                </p>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-subtle text-xs">
                <button type="button" id="mainPreviewAudioBtn" class="font-bold text-brand-olive">🔊 Audio Guide (02:45)</button>
                <a href="#flipbookFullSectionMount" class="font-bold text-brand-primary">‹ Trước | Tiếp ›</a>
              </div>
            </div>

            <!-- Right 7 Cols: 4 Feature Cards -->
            <div class="lg:col-span-7 space-y-3">
              <div class="bg-surface-card border border-subtle p-4 flex items-start gap-3.5">
                <div class="w-9 h-9 bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 text-sm">📖</div>
                <div>
                  <h4 class="font-display font-bold text-sm text-content-primary">Hiệu Ứng Lật Trang 3D Realistic</h4>
                  <p class="text-xs text-content-muted mt-0.5">Công nghệ WebGL kết hợp hiệu ứng âm thanh lật giấy trang nghiêm, chân thực trên cả máy tính và smartphone.</p>
                </div>
              </div>
              <div class="bg-surface-card border border-subtle p-4 flex items-start gap-3.5">
                <div class="w-9 h-9 bg-brand-olive text-white font-bold flex items-center justify-center shrink-0 text-sm">🎙</div>
                <div>
                  <h4 class="font-display font-bold text-sm text-content-primary">Thuyết Minh Giọng Đọc AI &amp; Nghệ Sĩ Chuẩn</h4>
                  <p class="text-xs text-content-muted mt-0.5">Tích hợp từng trang sổ tay audio guide rõ ràng, truyền cảm phục vụ học sinh và du khách mọi lứa tuổi.</p>
                </div>
              </div>
              <div class="bg-surface-card border border-subtle p-4 flex items-start gap-3.5">
                <div class="w-9 h-9 bg-brand-gold-dark text-white font-bold flex items-center justify-center shrink-0 text-sm">▣</div>
                <div>
                  <h4 class="font-display font-bold text-sm text-content-primary">Mã QR Động Đối Chiếu Tọa Độ &amp; Mô Hình 3D</h4>
                  <p class="text-xs text-content-muted mt-0.5">Mỗi trang có mã định danh thực địa, cho phép dùng điện thoại quét để mở ngay không gian VR 360° tương ứng.</p>
                </div>
              </div>
              <div class="bg-surface-card border border-subtle p-4 flex items-start gap-3.5">
                <div class="w-9 h-9 bg-surface-secondary text-brand-primary border border-subtle font-bold flex items-center justify-center shrink-0 text-sm">⬇</div>
                <div class="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 class="font-display font-bold text-sm text-content-primary">Tải Ấn Phẩm PDF Ngoại Tuyến (12MB)</h4>
                    <p class="text-xs text-content-muted mt-0.5">Bản in dàn trang chuẩn khổ A5 lưu hành nội bộ, có thể đọc offline khi di chuyển trong vùng chiến khu không có sóng.</p>
                  </div>
                  <button type="button" id="mainDownloadPdfBtn" class="btn-flat-outline text-xs shrink-0">Tải Ngay</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. Hệ Thống 8 Điểm Di Tích Kháng Chiến Được Số Hóa Chuẩn Hóa (4x2 Grid) -->
        <section id="relicsDirectoryGridSection" class="space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-[11px] font-mono-code font-bold uppercase text-brand-primary">
                🏛 DANH MỤC HỒ SƠ LƯU TRỮ CHÍNH THỨC
              </div>
              <h2 class="text-xl sm:text-3xl font-display font-extrabold text-content-primary mt-1">
                Hệ Thống 8 Điểm Di Tích Kháng Chiến Được Số Hóa Chuẩn Hóa
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Toàn bộ 8 điểm di tích đã hoàn tất đo vẽ tọa độ GIS, gắn thẻ số hóa định danh và biên soạn thuyết minh khoa học theo quyết định của Bộ VHTTDL &amp; UBND Tỉnh Thái Nguyên.
              </p>
            </div>

            <div class="flex items-center gap-1.5 shrink-0">
              <button type="button" class="main-dir-filter px-3 py-1.5 text-xs font-bold border border-subtle ${directoryRankFilter === 'ALL' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="ALL">
                Tất Cả (8)
              </button>
              <button type="button" class="main-dir-filter px-3 py-1.5 text-xs font-bold border border-subtle ${directoryRankFilter === 'Quốc gia' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="Quốc gia">
                Cấp Quốc Gia (5)
              </button>
              <button type="button" class="main-dir-filter px-3 py-1.5 text-xs font-bold border border-subtle ${directoryRankFilter === 'Cấp Tỉnh' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="Cấp Tỉnh">
                Cấp Tỉnh (3)
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${data.relics
              .filter((r) => directoryRankFilter === "ALL" || r.rank === directoryRankFilter)
              .map((r) => {
                const isNational = r.rank === "Quốc gia";
                return `
                  <div class="bg-surface-card border border-subtle p-5 flex flex-col justify-between space-y-4 hover:border-brand transition-colors">
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between text-[10px] font-mono-code">
                        <span class="px-2 py-0.5 font-bold uppercase ${isNational ? 'bg-[#FCE8E6] text-[#7A1C1C] border border-[#F5C2C0]' : 'bg-[#D9EFE2] text-[#22543D] border border-[#9AE6B4]'}">
                          ${r.rankBadge}
                        </span>
                        <span class="font-bold text-content-muted">${r.id}</span>
                      </div>

                      <div class="text-[11px] font-semibold ${isNational ? 'text-brand-primary' : 'text-brand-olive'}">
                        ■ ${r.categoryTag}
                      </div>

                      <h3 class="font-display font-bold text-base text-content-primary leading-snug">
                        ${r.name}
                      </h3>

                      <div class="text-xs text-content-muted space-y-0.5 font-mono-code">
                        <div>${r.commune}</div>
                        <div class="text-[11px]">${r.decision}</div>
                      </div>
                    </div>

                    <button type="button" class="open-relic-dossier-btn pt-3 border-t border-subtle flex items-center justify-between text-xs font-bold text-brand-primary w-full text-left" data-relic-id="${r.id}">
                      <span>Khám Phá Di Tích</span>
                      <span>→</span>
                    </button>
                  </div>
                `;
              }).join("")}
          </div>
        </section>

        <!-- 4. Trải Nghiệm Thực Tế Ảo VR 360° ATK -->
        <section id="vr360ShowcaseSection" class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-[11px] font-mono-code font-bold uppercase text-brand-olive">
                ❂ KHÔNG GIAN TRỰC QUAN ĐA CHIỀU
              </div>
              <h2 class="text-xl sm:text-3xl font-display font-extrabold text-content-primary mt-1">
                Trải Nghiệm Thực Tế Ảo VR 360° ATK
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Khám phá chi tiết lòng hang Chùa Hang, Đồi Tỉ Bảo Linh và Nhà bia tưởng niệm qua hình ảnh Panorama 360° 8K tích hợp con quay hồi chuyển trên điện thoại thông minh.
              </p>
            </div>
            <button type="button" id="vrRotateActionTopBtn" class="btn-olive shrink-0">
              Khám Phá Không Gian VR 360° →
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <!-- Left 8 Cols: VR 360 Panorama Canvas -->
            <div class="lg:col-span-8 bg-[#1B1D1A] border-2 border-strong p-5 text-white flex flex-col justify-between min-h-[340px] relative">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="bg-black/75 border border-white/25 text-[10px] font-mono-code font-bold px-2.5 py-1 uppercase text-[#E5DCCB]">
                  ● ${vrScene.badge}
                </span>
                <button type="button" id="vrToggleAutoYawBtn" class="bg-black/75 border border-white/25 text-[10px] font-mono-code px-2.5 py-1 text-white">
                  ⟳ Chế độ Xoay Tự Động (Góc: ${vrYawAngle}°)
                </button>
              </div>

              <!-- Center Interactive 360 Scene Representation -->
              <div class="my-6 p-5 bg-black/55 border border-white/20 space-y-3 text-center max-w-xl mx-auto">
                <div class="inline-block bg-brand-primary text-white text-[10px] font-mono-code font-bold px-2.5 py-0.5 uppercase">
                  TRẠM QUAN SÁT VR 360° • ${vrScene.title}
                </div>
                <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  ${vrScene.description}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-left">
                  ${vrScene.hotspots.map((hs) => `
                    <div class="p-2 bg-white/10 border border-white/15 text-[11px]">
                      <div class="font-mono-code font-bold text-[#C29A50]">⌖ ${hs.angle}: ${hs.name}</div>
                      <div class="text-gray-300 text-[10px] mt-0.5">${hs.detail}</div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-code pt-3 border-t border-white/20">
                <span>❂ Độ phân giải: ${vrScene.resolutionTag}</span>
                <span>Nhấn &amp; kéo chuột hoặc chọn điểm bên phải để chuyển cảnh 360°</span>
              </div>
            </div>

            <!-- Right 4 Cols: VR Scene Selector & Device Compatibility -->
            <div class="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div class="bg-surface-card border border-subtle p-4 space-y-2.5">
                <div class="text-xs font-mono-code font-bold uppercase text-brand-primary border-b border-subtle pb-2">
                  CÁC ĐIỂM XEM NỔI BẬT
                </div>
                ${data.vrScenes.map((sc) => {
                  const active = sc.id === currentVrSceneId;
                  return `
                    <button type="button" class="vr-scene-select-btn w-full text-left p-3 border ${active ? 'border-brand bg-surface-secondary' : 'border-subtle bg-surface-primary'} flex items-center gap-3" data-vr-scene="${sc.id}">
                      <span class="w-8 h-8 ${active ? 'bg-brand-primary text-white' : 'bg-surface-secondary text-brand-primary'} font-mono-code text-xs font-bold flex items-center justify-center shrink-0">
                        360°
                      </span>
                      <div>
                        <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${sc.title}</div>
                        <div class="text-[11px] text-content-muted">${sc.sub}</div>
                      </div>
                    </button>
                  `;
                }).join("")}
              </div>

              <div class="bg-surface-card border border-subtle p-4 space-y-2 text-xs">
                <div class="font-mono-code font-bold uppercase text-content-primary text-[11px]">TƯƠNG THÍCH THIẾT BỊ</div>
                <div class="text-content-muted space-y-1 text-[11px]">
                  <div>✓ Kính thực tế ảo VR Cardboard / Oculus Quest</div>
                  <div>✓ Cảm biến con quay xoay góc nhìn trên iOS / Android</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Tuyến Du Lịch Số & Tiện Ích Phụ Cận -->
        <section id="tourismRoutesSection" class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-[11px] font-mono-code font-bold uppercase text-brand-primary">
                ⑂ HÀNH TRÌNH VỀ NGUỒN THỰC ĐỊA
              </div>
              <h2 class="text-xl sm:text-3xl font-display font-extrabold text-content-primary mt-1">
                Tuyến Du Lịch Số &amp; Tiện Ích Phụ Cận
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Gợi ý 2 hành trình tham quan chuẩn hóa theo cụm vị trí địa lý, tối ưu quãng đường di chuyển và tích hợp thông tin trạm dịch vụ, điểm dừng nghỉ.
              </p>
            </div>
            <a href="#gisFullSectionMount" class="btn-flat-outline shrink-0">
              Xem Lộ Trình Tuyến Du Lịch Chi Tiết →
            </a>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${data.tourismRoutes.map((rt) => `
              <div class="bg-surface-card border-2 border-subtle p-6 flex flex-col justify-between space-y-5">
                <div class="space-y-4">
                  <div class="flex items-center justify-between gap-2 border-b border-subtle pb-3">
                    <h3 class="font-display font-bold text-base sm:text-lg ${rt.themeColor === 'olive' ? 'text-brand-olive' : 'text-brand-primary'}">
                      ⚑ ${rt.routeCode}
                    </h3>
                    <span class="bg-surface-primary border border-subtle text-[11px] font-mono-code font-bold px-2.5 py-1">
                      ${rt.durationBadge}
                    </span>
                  </div>

                  <div class="space-y-3">
                    ${rt.steps.map((st, sIdx) => `
                      <div class="flex items-start gap-3">
                        <span class="w-6 h-6 ${sIdx === 0 ? 'bg-brand-primary text-white' : sIdx === 3 ? 'bg-brand-olive text-white' : 'bg-surface-secondary text-content-primary border border-subtle'} font-mono-code text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          ${st.num}
                        </span>
                        <div>
                          <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${st.title}</div>
                          <div class="text-xs text-content-muted">${st.desc}</div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-subtle text-[11px] font-mono-code">
                  <span>Tổng cự ly: <strong>${rt.totalDistance}</strong></span>
                  <span class="font-bold text-brand-primary">${rt.suitability}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Support Amenities Strip -->
          <div class="bg-surface-card border border-subtle p-5 space-y-3">
            <div class="text-[11px] font-mono-code font-bold uppercase text-brand-primary">
              TIỆN ÍCH DỊCH VỤ HỖ TRỢ DU KHÁCH
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${data.supportAmenities.map((am) => `
                <div class="p-3 bg-surface-primary border border-subtle flex items-center gap-3">
                  <span class="w-8 h-8 bg-surface-secondary border border-subtle font-bold text-xs flex items-center justify-center shrink-0 text-brand-primary">
                    ${am.icon}
                  </span>
                  <div>
                    <div class="font-display font-bold text-xs text-content-primary">${am.title}</div>
                    <div class="text-[11px] text-content-muted">${am.sub}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      </div>
    `;

    bindMainOverviewEvents(containerId);
  }

  function bindMainOverviewEvents(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;

    root.querySelectorAll(".main-dir-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        directoryRankFilter = btn.getAttribute("data-dir-rank");
        renderMainOverviewSection(containerId);
      });
    });

    root.querySelectorAll(".open-relic-dossier-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const relicId = btn.getAttribute("data-relic-id");
        openRelicDossierModal(relicId);
      });
    });

    root.querySelectorAll(".vr-scene-select-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentVrSceneId = btn.getAttribute("data-vr-scene");
        renderMainOverviewSection(containerId);
      });
    });

    const vrTopBtn = root.querySelector("#vrRotateActionTopBtn");
    if (vrTopBtn) {
      vrTopBtn.addEventListener("click", () => {
        vrYawAngle = (vrYawAngle + 45) % 360;
        renderMainOverviewSection(containerId);
        showToast("Đã xoay góc nhìn Panorama 360° sang " + vrYawAngle + "°");
      });
    }

    const vrToggleBtn = root.querySelector("#vrToggleAutoYawBtn");
    if (vrToggleBtn) {
      vrToggleBtn.addEventListener("click", () => {
        vrYawAngle = (vrYawAngle + 60) % 360;
        renderMainOverviewSection(containerId);
      });
    }

    const pdfBtn = root.querySelector("#mainDownloadPdfBtn");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", downloadHandbookFile);
    }

    const previewAudioBtn = root.querySelector("#mainPreviewAudioBtn");
    if (previewAudioBtn) {
      previewAudioBtn.addEventListener("click", () => {
        speakVietnamese("Đại bản doanh Bộ Tổng Tham mưu Quân đội Nhân dân Việt Nam tại Đồi Tỉ, xã Bảo Linh, huyện Định Hóa, tỉnh Thái Nguyên.", 1.0);
      });
    }
  }

  function openRelicDossierModal(relicId) {
    const data = window.ATK_PORTAL_DATA;
    const r = data.relics.find((item) => item.id === relicId) || data.relics[0];
    const modal = document.getElementById("globalDossierModal");
    const content = document.getElementById("globalDossierModalBody");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="bg-brand-primary text-white text-xs font-mono-code font-bold px-2.5 py-1">${r.id} • ${r.gisCode}</span>
          <span class="bg-brand-olive text-white text-xs font-bold px-2.5 py-1 uppercase">${r.rankBadge}</span>
          <span class="text-xs font-mono-code text-content-muted">${r.decision}</span>
        </div>
        <h3 class="text-xl font-display font-extrabold text-brand-primary">${r.fullName}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code bg-surface-primary border border-subtle p-3.5">
          <div><strong>Địa bàn:</strong> ${r.communeFull}</div>
          <div><strong>Tọa độ WGS84:</strong> LAT ${r.lat} | LONG ${r.lng}</div>
          <div><strong>Cự ly từ trung tâm:</strong> ${r.distanceFromCenter}</div>
          <div><strong>Mã xác thực Tem:</strong> ${r.stampVerifyCode}</div>
        </div>
        <div class="space-y-2 text-xs sm:text-sm">
          <div><strong>1. Giá trị lịch sử &amp; Chiến dịch:</strong> ${r.shortDesc}</div>
          <div><strong>2. Hiện trạng bảo tồn thực địa:</strong> ${r.fieldStatus}</div>
          <div><strong>3. Điểm di tích kết nối tiếp theo:</strong> Cách ${r.nextDistanceKm} (${r.nextDurationText})</div>
        </div>
        <div class="flex flex-wrap gap-2 pt-3 border-t border-subtle">
          <button type="button" id="modalSelectOnGisBtn" class="btn-brand text-xs">Định Vị Trên Bản Đồ GIS</button>
          <button type="button" id="modalSpeakRelicBtn" class="btn-olive text-xs">🔊 Nghe Thuyết Minh Điểm Này</button>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");

    const gisBtn = document.getElementById("modalSelectOnGisBtn");
    if (gisBtn) {
      gisBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        window.GISMapModule.selectRelic(r.id, "gisFullSectionMount");
        const el = document.getElementById("gisFullSectionMount");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }

    const speakBtn = document.getElementById("modalSpeakRelicBtn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        speakVietnamese(r.fullName + ". " + r.shortDesc + " " + r.fieldStatus, 1.0);
      });
    }
  }

  function applyThemeOption(themeKey) {
    currentTheme = themeKey;
    document.documentElement.setAttribute("data-theme", themeKey);
    document.querySelectorAll("[data-theme-switch]").forEach((btn) => {
      if (btn.getAttribute("data-theme-switch") === themeKey) {
        btn.classList.add("pill-active");
      } else {
        btn.classList.remove("pill-active");
      }
    });
    showToast("Đã chuyển sang hệ màu 60–30–10: " + themeKey.toUpperCase());
  }

  function initPortal() {
    renderMainOverviewSection("mainOverviewMount");
    window.GISMapModule.render("gisFullSectionMount");
    window.FlipbookModule.render("flipbookFullSectionMount");
    window.EduHubModule.render("eduHubFullSectionMount");
    refreshHeaderStampCounter();

    document.querySelectorAll("[data-theme-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyThemeOption(btn.getAttribute("data-theme-switch"));
      });
    });

    const closeBtn = document.getElementById("closeGlobalDossierModalBtn");
    const modal = document.getElementById("globalDossierModal");
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
      modal.addEventListener("click", (e) => {
        if (e.target.id === "globalDossierModal") modal.classList.add("hidden");
      });
    }
  }

  return {
    init: initPortal,
    showToast: showToast,
    downloadTextFile: downloadTextFile,
    downloadHandbookFile: downloadHandbookFile,
    exportPassportCertificate: exportPassportCertificate,
    speakVietnamese: speakVietnamese,
    refreshHeaderStampCounter: refreshHeaderStampCounter,
    openRelicDossierModal: openRelicDossierModal
  };
})();

window.addEventListener("DOMContentLoaded", () => {
  window.ATKAppController.init();
});
