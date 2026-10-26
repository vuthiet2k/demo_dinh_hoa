/**
 * MODULE 4: TRÌNH ĐIỀU PHỐI SPA ĐA TRANG (MULTI-VIEW ROUTER), TRANG CHỦ LANDING PAGE & TRANG CHI TIẾT 5 KHỐI CHUẨN
 * Tách biệt hoàn toàn:
 *  - View 1 (trang-chu): Landing Page chuẩn di sản, gọn gàng, không lặp lại các phân hệ bên dưới
 *  - View 2 (chi-tiet-di-tich): Trang Chi Tiết Di Tích toàn màn hình (Đủ 5 Khối Chuẩn cho từng điểm trong 8 di tích)
 *  - View 3 (ban-do-gis): Chuyên trang Bản đồ số GIS VN-2000
 *  - View 4 (cam-nang-3d): Chuyên trang Cẩm nang số 3D Flipbook
 *  - View 5 (edu-hub): Chuyên trang Edu-Hub & Hộ chiếu Con dấu Di sản
 */

window.ATKAppController = (function () {
  let currentView = "trang-chu";
  let activeDetailRelicId = "DH-QG-01";
  let detailQuizSelectedOpt = null;
  let directoryRankFilter = "ALL";
  let currentVrSceneId = "vr-chua-hang";
  let activeVrHotspotIndex = 0;
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
      "Đơn vị quản lý: " + data.metadata.managementBoard,
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

  /**
   * Điều hướng SPA giữa 5 chuyên trang độc lập (không xếp chồng lặp nội dung)
   */
  function navigateToView(viewName, options) {
    const opts = options || {};
    currentView = viewName || "trang-chu";

    if (opts.relicId) {
      activeDetailRelicId = opts.relicId;
      detailQuizSelectedOpt = null;
    }

    // Ẩn/hiện các view section
    document.querySelectorAll("[data-view-section]").forEach((sec) => {
      if (sec.getAttribute("data-view-section") === currentView) {
        sec.classList.remove("hidden");
      } else {
        sec.classList.add("hidden");
      }
    });

    // Cập nhật trạng thái active trên thanh menu Header
    document.querySelectorAll("header [data-nav-view]").forEach((btn) => {
      if (btn.classList.contains("nav-view-btn")) {
        if (btn.getAttribute("data-nav-view") === currentView) {
          btn.classList.add("nav-active");
        } else {
          btn.classList.remove("nav-active");
        }
      }
    });

    // Render nội dung tương ứng của trang đang mở
    if (currentView === "trang-chu") {
      renderMainOverviewSection("mainOverviewMount");
    } else if (currentView === "chi-tiet-di-tich") {
      renderRelicDetailPage("relicDetailMount", activeDetailRelicId);
    } else if (currentView === "ban-do-gis") {
      if (opts.selectGisRelicId) {
        window.GISMapModule.selectRelic(opts.selectGisRelicId, "gisFullSectionMount");
      } else {
        window.GISMapModule.render("gisFullSectionMount");
      }
    } else if (currentView === "cam-nang-3d") {
      if (typeof opts.spreadIndex === "number") {
        window.FlipbookModule.openSpread(opts.spreadIndex, "flipbookFullSectionMount");
      } else {
        window.FlipbookModule.render("flipbookFullSectionMount");
      }
    } else if (currentView === "edu-hub") {
      window.EduHubModule.render("eduHubFullSectionMount");
    }

    // Cập nhật URL Hash không gây nhảy giật
    try {
      const hashTarget =
        currentView === "chi-tiet-di-tich"
          ? `#di-tich-${activeDetailRelicId}`
          : `#${currentView}`;
      if (window.location.hash !== hashTarget) {
        history.replaceState(null, "", hashTarget);
      }
    } catch (e) {}

    if (opts.scrollId) {
      setTimeout(() => {
        const targetEl = document.getElementById(opts.scrollId);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function openRelicDetailView(relicId) {
    navigateToView("chi-tiet-di-tich", { relicId: relicId || "DH-QG-01" });
  }

  /**
   * VIEW 1: TRANG CHỦ LANDING PAGE CHUẨN DI SẢN
   */
  function renderMainOverviewSection(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const hero = data.hero;
    const vrScene = data.vrScenes.find((v) => v.id === currentVrSceneId) || data.vrScenes[0];
    const activeHotspot = vrScene.hotspots[activeVrHotspotIndex] || vrScene.hotspots[0];
    const stamps = window.EduHubModule.getStampsState();
    const stampedCount = Object.keys(stamps).filter((k) => stamps[k] && stamps[k].verified).length;

    root.innerHTML = `
      <!-- Top Heritage Ribbon -->
      <div class="bg-surface-warm border-b border-subtle px-4 py-2 text-[11px] font-sans">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span class="font-bold text-brand-primary">✪ ${hero.topBarLeft}</span>
          <div class="flex items-center gap-3">
            <span class="text-content-muted font-medium hidden sm:inline">${hero.topBarRightCode}</span>
            <span class="bg-[#D9EFE2] text-[#22543D] font-bold px-2.5 py-0.5 border border-[#9AE6B4]">
              ● ${hero.topBarStatus}
            </span>
          </div>
        </div>
      </div>

      <!-- HERO SECTION (2-Column Editorial Merriweather + Visual Artwork Frame) -->
      <div class="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left 7 Cols -->
          <div class="lg:col-span-7 space-y-5">
            <div class="inline-block bg-[#FCE8E6] text-[#7A1C1C] border border-[#F5C2C0] text-xs font-sans font-bold px-3 py-1 uppercase tracking-wide">
              ${hero.eyebrow}
            </div>

            <div class="space-y-2">
              <h1 class="text-3xl sm:text-5xl font-display font-black text-brand-primary leading-tight uppercase">
                ${hero.titleLine1}<br />${hero.titleLine2}
              </h1>
              <div class="text-lg sm:text-2xl font-display font-bold text-brand-olive">
                ${hero.subtitle}
              </div>
            </div>

            <p class="text-sm sm:text-base text-content-primary leading-relaxed max-w-2xl">
              ${hero.description}
            </p>

            <!-- Quote Box from General Vo Nguyen Giap -->
            <div class="bg-surface-card border border-subtle border-l-4 border-l-[#7A1C1C] p-4 space-y-2">
              <blockquote class="text-xs sm:text-sm italic text-content-primary leading-relaxed">
                ${hero.quote}
              </blockquote>
              <div class="text-xs font-sans text-brand-primary font-bold">
                ${hero.quoteAuthor}
              </div>
            </div>

            <div class="flex flex-wrap gap-3 pt-1">
              <button type="button" id="heroExplore8RelicsBtn" class="btn-brand">
                🏛 Xem Hồ Sơ 08 Điểm Di Tích
              </button>
              <button type="button" id="heroOpenGisBtn" class="btn-olive">
                🗺 Mở Bản Đồ Số GIS
              </button>
              <button type="button" id="heroOpenFlipbookBtn" class="btn-flat-outline">
                📖 Đọc Cẩm Nang 3D A5
              </button>
            </div>
          </div>

          <!-- Right 5 Cols: Illustrated Archival Showcase Frame -->
          <div class="lg:col-span-5 space-y-2.5">
            <div class="bg-surface-card border-4 border-strong p-3 space-y-3 relative">
              ${data.renderRelicVisualSvg("HERO", "hero")}
              <div class="p-3 bg-surface-primary border border-subtle flex items-center justify-between gap-3">
                <div>
                  <div class="text-[11px] font-sans font-bold text-brand-primary uppercase">${hero.mediaOverlayTag}</div>
                  <div class="font-display font-bold text-sm text-content-primary mt-0.5">${hero.mediaOverlayTitle}</div>
                  <div class="text-xs font-sans text-content-muted mt-0.5">${hero.mediaOverlayMeta}</div>
                </div>
                <button type="button" id="heroQuickTourAudioBtn" class="btn-brand text-xs py-2 px-3 shrink-0" title="Nghe lời chào thuyết minh">
                  🔊 Thuyết Minh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- INTERACTIVE KPI METRICS STRIP (Click to open respective section/view) -->
      <div class="bg-surface-warm border-y border-subtle py-6">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${data.kpiMetrics.map((m, idx) => `
            <button type="button" class="kpi-nav-card text-left bg-surface-card border-2 border-subtle hover:border-brand p-4 flex items-start justify-between cursor-pointer transition-colors" data-kpi-view="${m.targetView}" data-kpi-scroll="${m.scrollId || ''}">
              <div class="space-y-1">
                <div ${idx === 3 ? 'id="kpiStampCounterValue"' : ''} class="text-2xl sm:text-3xl font-display font-black ${m.accentClass === 'olive' ? 'text-brand-olive' : 'text-brand-primary'}">
                  ${idx === 3 ? stampedCount + "/8" : m.value}
                </div>
                <div class="font-display font-bold text-sm text-content-primary">${m.label}</div>
                <div class="text-xs font-sans text-content-muted">${m.sub}</div>
              </div>
              <span class="w-9 h-9 bg-surface-primary border border-subtle flex items-center justify-center text-sm font-bold text-brand-primary shrink-0">
                ${idx === 0 ? "🏛" : idx === 1 ? "🗺" : idx === 2 ? "📖" : "★"}
              </span>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- MAIN LANDING PAGE CONTENT (NO DUPLICATE FULL MODULES) -->
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-16">

        <!-- SECTION 1: DANH MỤC 08 ĐIỂM DI TÍCH LỊCH SỬ KHÁNG CHIẾN (CÓ ẢNH MINH HỌA & NÚT MỞ TRANG CHI TIẾT RIÊNG) -->
        <section id="relicsDirectoryGridSection" class="space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b-2 border-subtle pb-4">
            <div class="space-y-1">
              <div class="text-xs font-sans font-bold uppercase text-brand-primary tracking-wider">
                🏛 HỆ THỐNG HỒ SƠ DI SẢN 5 KHỐI CHUẨN
              </div>
              <h2 class="text-2xl sm:text-3xl font-display font-black text-content-primary">
                Khám Phá Chi Tiết 08 Điểm Di Tích Kháng Chiến ATK Định Hóa
              </h2>
              <p class="text-xs sm:text-sm text-content-muted max-w-3xl">
                Nhấp vào từng điểm di tích để mở <strong>Trang Hồ Sơ Chi Tiết (5 Khối Chuẩn)</strong> gồm: Pháp lý xếp hạng, Biên niên sử &amp; Câu chuyện lịch sử, Kiến trúc &amp; Hiện trạng bảo tồn, Bản đồ GIS và Trắc nghiệm &amp; Đóng dấu Hộ chiếu.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-1.5 shrink-0 font-sans">
              <button type="button" class="main-dir-filter px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${directoryRankFilter === 'ALL' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="ALL">
                Tất Cả (08)
              </button>
              <button type="button" class="main-dir-filter px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${directoryRankFilter === 'Quốc gia' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="Quốc gia">
                Di Tích Quốc Gia (05)
              </button>
              <button type="button" class="main-dir-filter px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${directoryRankFilter === 'Cấp Tỉnh' ? 'pill-active' : 'bg-surface-card'}" data-dir-rank="Cấp Tỉnh">
                Di Tích Cấp Tỉnh (03)
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${data.relics
              .filter((r) => directoryRankFilter === "ALL" || r.rank === directoryRankFilter)
              .map((r) => {
                const isNational = r.rank === "Quốc gia";
                const isStamped = Boolean(stamps[r.id] && stamps[r.id].verified);
                return `
                  <article class="bg-surface-card border-2 border-subtle hover:border-brand flex flex-col justify-between transition-colors">
                    <div>
                      <!-- Visual Illustration Thumbnail (Clickable to Detail Page) -->
                      <div class="cursor-pointer open-relic-detail-trigger" data-relic-id="${r.id}">
                        ${data.renderRelicVisualSvg(r.id, "card")}
                      </div>

                      <div class="p-4 space-y-2.5">
                        <div class="flex items-center justify-between text-[11px] font-sans">
                          <span class="px-2 py-0.5 font-bold uppercase ${isNational ? 'bg-[#FCE8E6] text-[#7A1C1C] border border-[#F5C2C0]' : 'bg-[#D9EFE2] text-[#22543D] border border-[#9AE6B4]'}">
                            ${r.rankBadge}
                          </span>
                          <span class="font-mono-code text-content-muted font-bold">${r.gisCode}</span>
                        </div>

                        <h3 class="font-display font-bold text-base text-brand-primary leading-snug cursor-pointer hover:underline open-relic-detail-trigger" data-relic-id="${r.id}">
                          ${r.order}. ${r.name}
                        </h3>

                        <p class="text-xs text-content-primary leading-relaxed line-clamp-3">
                          ${r.shortDesc}
                        </p>

                        <div class="pt-2 border-t border-subtle text-[11px] font-sans text-content-muted space-y-0.5">
                          <div>📍 <strong>Địa bàn:</strong> ${r.commune} (${r.distanceFromCenter})</div>
                          <div>📜 <strong>Xếp hạng:</strong> ${r.decision}</div>
                          <div>${isStamped ? '<span class="text-brand-olive font-bold">✓ Đã đóng dấu Hộ chiếu Di sản</span>' : '<span class="text-content-muted">○ Chưa đóng dấu check-in</span>'}</div>
                        </div>
                      </div>
                    </div>

                    <div class="p-4 pt-0 flex items-center gap-2">
                      <button type="button" class="open-relic-detail-trigger btn-brand text-xs py-2 px-3 flex-1" data-relic-id="${r.id}">
                        Xem Chi Tiết (5 Khối) →
                      </button>
                      <button type="button" class="jump-relic-gis-trigger btn-flat-outline text-xs py-2 px-2.5" data-relic-id="${r.id}" title="Định vị điểm này trên Bản đồ Số GIS">
                        🗺 GIS
                      </button>
                    </div>
                  </article>
                `;
              }).join("")}
          </div>
        </section>

        <!-- SECTION 2: 03 CHUYÊN TRANG SỐ HÓA CHUYÊN SÂU (GATEWAY CARDS — CHUYỂN TRANG ĐỘC LẬP, KHÔNG LẶP NỘI DUNG) -->
        <section class="bg-surface-warm border-2 border-subtle p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div class="text-xs font-sans font-bold uppercase text-brand-olive tracking-wider">
                ❖ HỆ SINH THÁI CHUYÊN TRANG TƯƠNG TÁC
              </div>
              <h2 class="text-2xl sm:text-3xl font-display font-black text-content-primary mt-1">
                Trải Nghiệm 03 Phân Hệ Số Hóa Chuyên Sâu
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Mỗi phân hệ được thiết kế thành một trang làm việc độc lập. Chọn một phân hệ bên dưới để mở toàn màn hình:
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Gateway Card 1: GIS Map -->
            <div class="bg-surface-card border-2 border-subtle p-5 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="bg-brand-primary text-white text-xs font-sans font-bold px-2.5 py-1 uppercase">CHUYÊN TRANG 01</span>
                  <span class="font-mono-code text-xs font-bold text-brand-olive">VN-2000 • WGS84</span>
                </div>
                <h3 class="font-display font-bold text-lg text-brand-primary">
                  Bản Đồ Số Không Gian Địa Lý GIS
                </h3>
                <p class="text-xs text-content-primary leading-relaxed">
                  Tra cứu tọa độ thực địa 8 điểm di tích, bật/tắt 4 lớp dữ liệu phụ kháng chiến, chuyển đổi 3 chế độ bản đồ (Hành chính, Vệ tinh, Chiến khu 1947–1954), tính toán lộ trình Dijkstra và xuất file GPX/KML.
                </p>
                <div class="bg-surface-primary border border-subtle p-3 text-xs font-sans space-y-1">
                  <div>• <strong>04 Địa bàn:</strong> Chợ Chu (4), Bảo Linh (2), Đồng Thịnh (1), Bảo Cường (1)</div>
                  <div>• <strong>Độ chính xác RTK:</strong> ±0.03m trên diện tích 128 km²</div>
                </div>
              </div>
              <button type="button" data-nav-view="ban-do-gis" class="btn-brand w-full">
                🗺 Mở Trang Bản Đồ Số GIS →
              </button>
            </div>

            <!-- Gateway Card 2: 3D Flipbook -->
            <div class="bg-surface-card border-2 border-subtle p-5 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="bg-brand-olive text-white text-xs font-sans font-bold px-2.5 py-1 uppercase">CHUYÊN TRANG 02</span>
                  <span class="font-mono-code text-xs font-bold text-brand-primary">KHỔ A5 • 10 TRANG</span>
                </div>
                <h3 class="font-display font-bold text-lg text-brand-primary">
                  Ấn Phẩm Cẩm Nang Số 3D Flipbook
                </h3>
                <p class="text-xs text-content-primary leading-relaxed">
                  Trải nghiệm lật trang sách đôi khổ A5 lưu chiểu quốc gia, tích hợp hình ảnh tư liệu, trích lục nhật ký quân sự, phóng to/thu nhỏ trang sách, thuyết minh giọng đọc AI đồng bộ và tải ấn bản ngoại tuyến.
                </p>
                <div class="bg-surface-primary border border-subtle p-3 text-xs font-sans space-y-1">
                  <div>• <strong>Mục lục 10 trang:</strong> Chia theo 5 cặp trang chuyên đề</div>
                  <div>• <strong>Audio Guide AI:</strong> Đọc thuyết minh tự động từng trang</div>
                </div>
              </div>
              <button type="button" data-nav-view="cam-nang-3d" class="btn-olive w-full">
                📖 Mở Trang Cẩm Nang 3D Flipbook →
              </button>
            </div>

            <!-- Gateway Card 3: Edu-Hub & Passport -->
            <div class="bg-surface-card border-2 border-subtle p-5 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="bg-brand-gold-dark text-white text-xs font-sans font-bold px-2.5 py-1 uppercase">CHUYÊN TRANG 03</span>
                  <span class="font-mono-code text-xs font-bold text-brand-primary">ĐÃ ĐÓNG DẤU: ${stampedCount}/8</span>
                </div>
                <h3 class="font-display font-bold text-lg text-brand-primary">
                  Edu-Hub &amp; Sổ Tay 8 Con Dấu Di Sản
                </h3>
                <p class="text-xs text-content-primary leading-relaxed">
                  Thử thách trắc nghiệm lịch sử 1 chạm cho cả 8 điểm di tích, Góc luyện tập Thuyết minh viên nhí chuẩn 250 từ có đồng hồ đếm ngược 02:00 và Sổ tay thu thập 8 Con dấu đỏ Hộ chiếu Di sản ATK.
                </p>
                <div class="bg-surface-primary border border-subtle p-3 text-xs font-sans space-y-1">
                  <div>• <strong>Ngân hàng Quiz:</strong> Giải mật tư liệu lịch sử 1945–1954</div>
                  <div>• <strong>Chứng nhận số:</strong> Xuất Chứng nhận Đại sứ Di sản ATK</div>
                </div>
              </div>
              <button type="button" data-nav-view="edu-hub" class="btn-brand w-full">
                ★ Mở Trang Edu-Hub &amp; Hộ Chiếu Số →
              </button>
            </div>
          </div>
        </section>

        <!-- SECTION 3: TRẢI NGHIỆM KHÔNG GIAN THỰC TẾ ẢO VR 360° PANORAMA TƯƠNG TÁC -->
        <section id="vr360ShowcaseSection" class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-subtle pb-4">
            <div>
              <div class="text-xs font-sans font-bold uppercase text-brand-olive">
                ❂ KHÔNG GIAN TRỰC QUAN ĐA CHIỀU
              </div>
              <h2 class="text-2xl sm:text-3xl font-display font-black text-content-primary mt-1">
                Trải Nghiệm Thực Tế Ảo VR 360° ATK Định Hóa
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Chọn trạm quan sát bên phải và nhấp vào từng điểm Hotspot để xoay góc nhìn Panorama 360° và xem thuyết minh chi tiết từng hạng mục thực địa.
              </p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" id="vrRotateActionTopBtn" class="btn-flat-outline text-xs">
                ⟳ Xoay Góc Nhìn 360° (${vrYawAngle}°)
              </button>
              <button type="button" class="open-relic-detail-trigger btn-brand text-xs" data-relic-id="${vrScene.relicId}">
                Mở Hồ Sơ Điểm Này →
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <!-- Left 8 Cols: Interactive VR 360 Panorama Viewport -->
            <div class="lg:col-span-8 bg-[#1B1D1A] border-2 border-strong p-4 sm:p-5 text-white flex flex-col justify-between space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="bg-black/80 border border-white/25 text-xs font-sans font-bold px-3 py-1 uppercase text-[#DFC58E]">
                  ● ${vrScene.badge}
                </span>
                <div class="flex items-center gap-2">
                  <button type="button" id="vrPanLeftBtn" class="bg-white/15 hover:bg-white/25 border border-white/30 text-xs font-sans font-bold px-2.5 py-1 text-white cursor-pointer">
                    ◀ Quay Trái
                  </button>
                  <span class="bg-black/80 border border-white/25 text-xs font-mono-code px-2.5 py-1 text-[#DFC58E]">
                    Góc: ${vrYawAngle}°
                  </span>
                  <button type="button" id="vrPanRightBtn" class="bg-white/15 hover:bg-white/25 border border-white/30 text-xs font-sans font-bold px-2.5 py-1 text-white cursor-pointer">
                    Quay Phải ▶
                  </button>
                </div>
              </div>

              <!-- Visual Scene + Hotspot Inspector -->
              <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/45 border border-white/15 p-3">
                <div class="md:col-span-6">
                  ${data.renderRelicVisualSvg(vrScene.relicId, "card")}
                </div>
                <div class="md:col-span-6 space-y-2.5 p-2">
                  <div class="text-[11px] font-sans font-bold uppercase text-[#DFC58E]">
                    ĐIỂM NGẮM ĐANG CHỌN (${activeHotspot.angle}):
                  </div>
                  <h3 class="font-display font-bold text-base sm:text-lg text-white">
                    ⌖ ${activeHotspot.name}
                  </h3>
                  <p class="text-xs text-gray-200 leading-relaxed">
                    ${activeHotspot.detail}
                  </p>
                  <p class="text-[11px] text-gray-400 leading-relaxed border-t border-white/15 pt-2">
                    ${vrScene.description}
                  </p>
                </div>
              </div>

              <!-- Interactive Hotspot Selector Buttons -->
              <div class="space-y-1.5">
                <div class="text-[11px] font-sans font-bold uppercase text-[#DFC58E]">
                  CHỌN ĐIỂM NGẮM HOTSPOT TRONG KHÔNG GIAN 360°:
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${vrScene.hotspots.map((hs, hIdx) => `
                    <button type="button" class="vr-hotspot-btn text-left p-2.5 border ${hIdx === activeVrHotspotIndex ? 'bg-brand-primary border-white text-white' : 'bg-white/10 border-white/20 text-gray-200 hover:bg-white/20'} text-xs cursor-pointer transition-colors" data-hotspot-idx="${hIdx}">
                      <div class="font-sans font-bold text-[#F0D796]">⌖ ${hs.angle} — ${hs.name}</div>
                      <div class="text-[11px] opacity-90 mt-0.5 truncate">${hs.detail}</div>
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- Right 4 Cols: VR Scene Selector -->
            <div class="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div class="bg-surface-card border-2 border-subtle p-4 space-y-3">
                <div class="text-xs font-sans font-bold uppercase text-brand-primary border-b border-subtle pb-2">
                  CHỌN TRẠM QUAN SÁT VR 360° (03 TRẠM)
                </div>
                ${data.vrScenes.map((sc) => {
                  const active = sc.id === currentVrSceneId;
                  return `
                    <button type="button" class="vr-scene-select-btn w-full text-left p-3.5 border-2 cursor-pointer ${active ? 'border-brand bg-surface-secondary' : 'border-subtle bg-surface-primary hover:bg-surface-secondary'} flex items-center gap-3 transition-colors" data-vr-scene="${sc.id}">
                      <span class="w-10 h-10 ${active ? 'bg-brand-primary text-white' : 'bg-surface-secondary text-brand-primary border border-subtle'} font-mono-code text-xs font-bold flex items-center justify-center shrink-0">
                        360°
                      </span>
                      <div>
                        <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${sc.title}</div>
                        <div class="text-[11px] font-sans text-content-muted mt-0.5">${sc.sub}</div>
                      </div>
                    </button>
                  `;
                }).join("")}
              </div>

              <div class="bg-surface-card border border-subtle p-4 space-y-2 text-xs font-sans">
                <div class="font-bold uppercase text-brand-primary">HƯỚNG DẪN TRẢI NGHIỆM</div>
                <div class="text-content-muted space-y-1.5 text-[11px]">
                  <div>✓ Nhấp vào các ô <strong>Hotspot</strong> để chuyển góc máy quan sát từng hạng mục.</div>
                  <div>✓ Nhấp <strong>"Mở Hồ Sơ Điểm Này"</strong> để đọc toàn bộ lịch sử 5 khối chuẩn của di tích.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: 02 TUYẾN DU LỊCH SỐ & TIỆN ÍCH ĐÓN ĐOÀN -->
        <section id="tourismRoutesSection" class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-subtle pb-4">
            <div>
              <div class="text-xs font-sans font-bold uppercase text-brand-primary">
                ⑂ HÀNH TRÌNH VỀ NGUỒN THỰC ĐỊA
              </div>
              <h2 class="text-2xl sm:text-3xl font-display font-black text-content-primary mt-1">
                Lộ Trình 02 Tuyến Tham Quan &amp; Tiện Ích Phụ Cận
              </h2>
              <p class="text-xs sm:text-sm text-content-muted mt-1">
                Nhấp trực tiếp vào bất kỳ điểm dừng nào trong tuyến để xem trang hồ sơ chi tiết của điểm di tích đó.
              </p>
            </div>
            <button type="button" data-nav-view="ban-do-gis" class="btn-flat-outline shrink-0">
              Đo Khoảng Cách Trên Bản Đồ GIS →
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${data.tourismRoutes.map((rt) => `
              <div class="bg-surface-card border-2 border-subtle p-6 flex flex-col justify-between space-y-5">
                <div class="space-y-4">
                  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
                    <h3 class="font-display font-bold text-base sm:text-lg ${rt.themeColor === 'olive' ? 'text-brand-olive' : 'text-brand-primary'}">
                      ⚑ ${rt.routeCode}
                    </h3>
                    <span class="bg-surface-primary border border-subtle text-xs font-sans font-bold px-2.5 py-1">
                      ${rt.durationBadge}
                    </span>
                  </div>

                  <div class="space-y-2.5">
                    ${rt.steps.map((st, sIdx) => `
                      <div class="p-3 bg-surface-primary border border-subtle hover:border-brand flex items-start justify-between gap-3 cursor-pointer open-relic-detail-trigger transition-colors" data-relic-id="${st.relicId}">
                        <div class="flex items-start gap-3">
                          <span class="w-6 h-6 ${sIdx === 0 ? 'bg-brand-primary text-white' : sIdx === 3 ? 'bg-brand-olive text-white' : 'bg-surface-secondary text-content-primary border border-subtle'} font-mono-code text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            ${st.num}
                          </span>
                          <div>
                            <div class="font-display font-bold text-xs sm:text-sm text-brand-primary hover:underline">${st.title}</div>
                            <div class="text-xs text-content-muted mt-0.5">${st.desc}</div>
                          </div>
                        </div>
                        <span class="text-xs font-sans font-bold text-brand-primary shrink-0">Chi tiết →</span>
                      </div>
                    `).join("")}
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-subtle text-xs font-sans">
                  <span>Tổng cự ly tuyến: <strong>${rt.totalDistance}</strong></span>
                  <span class="font-bold text-brand-primary">${rt.suitability}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Support Amenities Strip -->
          <div class="bg-surface-card border border-subtle p-5 space-y-3">
            <div class="text-xs font-sans font-bold uppercase text-brand-primary">
              TIỆN ÍCH DỊCH VỤ ĐÓN TIẾP ĐOÀN THAM QUAN TẠI ATK ĐỊNH HÓA
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${data.supportAmenities.map((am) => `
                <div class="p-3.5 bg-surface-primary border border-subtle flex items-center gap-3">
                  <span class="w-9 h-9 bg-surface-secondary border border-subtle font-sans font-bold text-xs flex items-center justify-center shrink-0 text-brand-primary">
                    ${am.icon}
                  </span>
                  <div>
                    <div class="font-display font-bold text-xs sm:text-sm text-content-primary">${am.title}</div>
                    <div class="text-xs font-sans text-content-muted mt-0.5">${am.sub}</div>
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

  /**
   * VIEW 2: TRANG CHI TIẾT TỪNG ĐIỂM DI TÍCH TOÀN MÀN HÌNH (ĐỦ 5 KHỐI HỒ SƠ CHUẨN)
   */
  function renderRelicDetailPage(containerId, relicId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const r = data.relics.find((item) => item.id === relicId) || data.relics[0];
    activeDetailRelicId = r.id;

    const currentIndex = data.relics.findIndex((item) => item.id === r.id);
    const prevRelic = data.relics[(currentIndex - 1 + data.relics.length) % data.relics.length];
    const nextRelic = data.relics[(currentIndex + 1) % data.relics.length];
    const connectedNextRelic = data.relics.find((item) => item.id === r.nextTargetId) || nextRelic;

    const dossier = r.dossier5Blocks;
    const quizData = data.eduQuizzes[r.id] || data.eduQuizzes["DH-QG-01"];
    const stampsState = window.EduHubModule.getStampsState();
    const isStamped = Boolean(stampsState[r.id] && stampsState[r.id].verified);

    root.innerHTML = `
      <!-- Top Breadcrumb & 8-Relic Switcher Bar -->
      <div class="bg-surface-warm border-b-2 border-subtle px-4 py-3">
        <div class="max-w-7xl mx-auto space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-sans">
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-nav-view="trang-chu" class="text-brand-primary font-bold hover:underline cursor-pointer bg-transparent border-0 p-0">
                ← Quay về Trang Chủ
              </button>
              <span class="text-content-muted">/</span>
              <span class="text-content-muted">Hồ sơ 08 Điểm Di tích ATK Định Hóa</span>
              <span class="text-content-muted">/</span>
              <strong class="text-content-primary">${r.order}. ${r.name}</strong>
            </div>

            <div class="flex items-center gap-2">
              <button type="button" class="detail-switch-relic-btn px-2.5 py-1 bg-surface-card border border-subtle hover:border-brand font-bold cursor-pointer" data-relic-id="${prevRelic.id}">
                ‹ ${prevRelic.shortTabName}
              </button>
              <button type="button" class="detail-switch-relic-btn px-2.5 py-1 bg-surface-card border border-subtle hover:border-brand font-bold cursor-pointer" data-relic-id="${nextRelic.id}">
                ${nextRelic.shortTabName} ›
              </button>
            </div>
          </div>

          <!-- Quick 8-Relic Tabs -->
          <div class="flex flex-wrap items-center gap-1.5 pt-1">
            <span class="text-[11px] font-sans font-bold uppercase text-content-muted mr-1">CHỌN DI TÍCH (08):</span>
            ${data.relics.map((item) => `
              <button type="button" class="detail-switch-relic-btn px-2.5 py-1.5 text-xs font-sans font-bold border border-subtle cursor-pointer ${item.id === r.id ? 'pill-active' : 'bg-surface-card hover:border-brand'}" data-relic-id="${item.id}">
                ${item.shortTabName}
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- MAIN 5-BLOCK DOSSIER CONTENT -->
      <div class="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-10">

        <!-- KHỐI 1: ĐỊNH DANH PHÁP LÝ, HÌNH ẢNH KIẾN TRÚC & THÔNG SỐ TRẮC ĐỊA -->
        <section class="bg-surface-card border-2 border-strong p-5 sm:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="bg-brand-primary text-white text-xs font-sans font-bold px-3 py-1 uppercase">
                KHỐI 01/05 • ĐỊNH DANH &amp; PHÁP LÝ DI TÍCH
              </span>
              <span class="bg-brand-olive text-white text-xs font-sans font-bold px-3 py-1 uppercase">
                DI TÍCH ${r.rankBadge}
              </span>
              <span class="text-xs font-mono-code font-bold text-content-muted">
                MÃ HỒ SƠ: ${r.id} (${r.gisCode})
              </span>
            </div>
            <span class="text-xs font-sans font-bold text-brand-primary">
              ${r.decision}
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Left 6 Cols: Large Architectural Artwork & Quick Actions -->
            <div class="lg:col-span-6 space-y-4">
              ${data.renderRelicVisualSvg(r.id, "detail")}

              <div class="flex flex-wrap gap-2.5">
                <button type="button" id="detailSpeakBtn" class="btn-brand text-xs flex-1">
                  🔊 Nghe Thuyết Minh Chuyên Sâu
                </button>
                <button type="button" id="detailJumpGisBtn" class="btn-olive text-xs">
                  🗺 Mở Trên Bản Đồ GIS
                </button>
                <button type="button" id="detailJumpFlipbookBtn" class="btn-flat-outline text-xs">
                  📖 Xem Cẩm Nang 3D
                </button>
              </div>
            </div>

            <!-- Right 6 Cols: Full Metadata Table & Legal Summary -->
            <div class="lg:col-span-6 space-y-4">
              <div class="space-y-1">
                <div class="text-xs font-sans font-bold uppercase text-brand-olive">
                  ${r.categoryTag} • THỜI KỲ ${r.period}
                </div>
                <h1 class="text-2xl sm:text-3xl font-display font-black text-brand-primary leading-tight">
                  ${r.fullName}
                </h1>
              </div>

              <p class="text-sm text-content-primary leading-relaxed">
                ${r.shortDesc}
              </p>

              <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#7A1C1C] p-3.5 text-xs leading-relaxed">
                <strong class="font-sans uppercase text-brand-primary block mb-1">📜 Căn cứ pháp lý xếp hạng:</strong>
                ${dossier.legalSummary}
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans bg-surface-primary border border-subtle p-4">
                <div><span class="text-content-muted">Địa bàn hành chính:</span><br /><strong>${r.communeFull}</strong></div>
                <div><span class="text-content-muted">Quyết định công nhận:</span><br /><strong>${r.gisPopupDecision}</strong></div>
                <div><span class="text-content-muted">Tọa độ trắc địa WGS-84:</span><br /><strong class="font-mono-code">${r.lat} | ${r.lng}</strong></div>
                <div><span class="text-content-muted">Độ cao &amp; Cự ly trung tâm:</span><br /><strong>${r.elevation} (${r.distanceFromCenter})</strong></div>
              </div>
            </div>
          </div>
        </section>

        <!-- KHỐI 2: BIÊN NIÊN SỬ, CÂU CHUYỆN LỊCH SỬ CHUYÊN SÂU & NHÂN VẬT GẮN LIỀN -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-8 bg-surface-card border-2 border-subtle p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-subtle pb-3">
              <span class="bg-brand-primary text-white text-xs font-sans font-bold px-3 py-1 uppercase">
                KHỐI 02/05 • CÂU CHUYỆN LỊCH SỬ &amp; CHIẾN DỊCH GẮN LIỀN
              </span>
              <span class="text-xs font-mono-code text-content-muted">TƯ LIỆU LỊCH SỬ ĐẢNG BỘ &amp; BẢO TÀNG ATK</span>
            </div>

            <h2 class="text-xl sm:text-2xl font-display font-bold text-content-primary">
              Giá Trị Lịch Sử &amp; Dấu Ấn Kháng Chiến Tại ${r.name}
            </h2>

            <div class="space-y-3.5 text-sm text-content-primary leading-relaxed font-serif">
              ${dossier.historicalStory.map((para) => `<p>${para}</p>`).join("")}
            </div>

            <div class="pt-3 border-t border-subtle space-y-2">
              <div class="text-xs font-sans font-bold uppercase text-brand-primary">
                👥 NHÂN VẬT LỊCH SỬ &amp; ĐƠN VỊ GẮN LIỀN:
              </div>
              <div class="flex flex-wrap gap-2">
                ${dossier.keyFigures.map((fig) => `
                  <span class="bg-surface-primary border border-subtle px-3 py-1.5 text-xs font-sans font-semibold text-content-primary">
                    ★ ${fig}
                  </span>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Timeline Sidebar -->
          <div class="lg:col-span-4 bg-surface-card border-2 border-subtle p-6 space-y-4">
            <div class="border-b border-subtle pb-3">
              <div class="text-xs font-sans font-bold uppercase text-brand-olive">BIÊN NIÊN SỰ KIỆN</div>
              <h3 class="font-display font-bold text-lg text-content-primary mt-0.5">Các Mốc Thời Gian Trọng Đại</h3>
            </div>

            <div class="space-y-3">
              ${dossier.timeline.map((tl) => `
                <div class="p-3.5 bg-surface-primary border border-subtle border-l-4 border-l-[#7A1C1C] space-y-1">
                  <div class="font-mono-code text-xs font-bold text-brand-primary">${tl.year}</div>
                  <div class="text-xs text-content-primary leading-relaxed">${tl.event}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

        <!-- KHỐI 3: KIẾN TRÚC, HIỆN TRẠNG BẢO TỒN & THƯ VIỆN MINH HỌA THỰC ĐỊA -->
        <section class="bg-surface-card border-2 border-subtle p-6 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
            <span class="bg-brand-olive text-white text-xs font-sans font-bold px-3 py-1 uppercase">
              KHỐI 03/05 • KIẾN TRÚC, HIỆN TRẠNG BẢO TỒN &amp; HÌNH ẢNH THỰC ĐỊA
            </span>
            <span class="text-xs font-sans text-content-muted">Đã khảo sát &amp; khoanh vùng bảo vệ nghiêm ngặt</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div class="lg:col-span-5 space-y-3">
              <h3 class="font-display font-bold text-lg text-brand-primary">
                Các Hạng Mục Kiến Trúc &amp; Dấu Tích Thực Địa
              </h3>
              <p class="text-xs sm:text-sm text-content-primary leading-relaxed">
                ${r.fieldStatus}
              </p>
              <ul class="space-y-2 pt-1">
                ${dossier.architectureItems.map((item) => `
                  <li class="p-3 bg-surface-primary border border-subtle text-xs leading-relaxed flex items-start gap-2.5">
                    <span class="text-brand-primary font-bold">■</span>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="lg:col-span-7 space-y-3">
              <h3 class="font-display font-bold text-lg text-content-primary">
                Thư Viện Minh Họa Không Gian &amp; Tư Liệu Khảo Sát (03 Góc Nhìn)
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                ${dossier.galleryCaptions.map((cap, gIdx) => `
                  <div class="bg-surface-primary border border-subtle flex flex-col justify-between">
                    ${data.renderRelicVisualSvg(r.id, "thumb")}
                    <div class="p-3 space-y-1">
                      <div class="text-[10px] font-mono-code font-bold text-brand-primary uppercase">GÓC KHẢO SÁT #0${gIdx + 1}</div>
                      <p class="text-xs text-content-primary leading-snug">${cap}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>

        <!-- KHỐI 4: TRẮC ĐỊA KHÔNG GIAN GIS, HƯỚNG DẪN DI CHUYỂN & ĐIỂM KẾT NỐI TIẾP THEO -->
        <section class="bg-surface-card border-2 border-subtle p-6 space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
            <span class="bg-brand-primary text-white text-xs font-sans font-bold px-3 py-1 uppercase">
              KHỐI 04/05 • ĐỊNH VỊ KHÔNG GIAN GIS &amp; HƯỚNG DẪN HÀNH TRÌNH
            </span>
            <span class="text-xs font-mono-code font-bold text-brand-olive">TỌA ĐỘ: ${r.lat}, ${r.lng}</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-7 space-y-3">
              <h3 class="font-display font-bold text-lg text-content-primary">
                Hướng Dẫn Đường Đi Thực Tế Từ Trung Tâm Thị Trấn Chợ Chu
              </h3>
              <p class="text-xs sm:text-sm text-content-primary leading-relaxed">
                ${dossier.travelGuide}
              </p>
              <div class="flex flex-wrap gap-3 pt-2">
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.lat.replace('°B','') + ',' + r.lng.replace('°Đ',''))}" target="_blank" rel="noopener noreferrer" class="btn-brand text-xs">
                  ◁ Mở Chỉ Đường GPS Google Maps
                </a>
                <button type="button" id="detailOpenFullGisBtn" class="btn-flat-outline text-xs">
                  🗺 Xem Trên Bản Đồ Tổng Thể 8 Di Tích
                </button>
              </div>
            </div>

            <div class="lg:col-span-5 bg-surface-primary border-2 border-subtle p-4 space-y-3">
              <div class="text-xs font-sans font-bold uppercase text-brand-olive">
                ⑂ ĐIỂM DI TÍCH KẾT NỐI TIẾP THEO TRONG TUYẾN
              </div>
              <div class="font-display font-bold text-base text-brand-primary">
                ${connectedNextRelic.order}. ${connectedNextRelic.name} (${connectedNextRelic.commune})
              </div>
              <div class="text-xs font-sans text-content-muted">
                Cự ly di chuyển: <strong>${r.nextDistanceKm}</strong> (${r.nextDurationText})
              </div>
              <button type="button" class="detail-switch-relic-btn btn-olive text-xs w-full" data-relic-id="${connectedNextRelic.id}">
                Chuyển Sang Xem Hồ Sơ: ${connectedNextRelic.shortTabName} →
              </button>
            </div>
          </div>
        </section>

        <!-- KHỐI 5: TƯƠNG TÁC DI SẢN SỐ (TRẮC NGHIỆM TẠI ĐIỂM & ĐÓNG DẤU HỘ CHIẾU) -->
        <section class="bg-surface-warm border-2 border-brand p-6 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
            <span class="bg-brand-primary text-white text-xs font-sans font-bold px-3 py-1 uppercase">
              KHỐI 05/05 • TRẮC NGHIỆM KIẾN THỨC &amp; ĐÓNG DẤU HỘ CHIẾU TẠI ĐIỂM DI TÍCH
            </span>
            <span class="text-xs font-mono-code font-bold text-brand-primary">MÃ TEM: ${r.stampVerifyCode}</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <!-- Left 8 Cols: Relic Specific Quiz -->
            <div class="lg:col-span-8 bg-surface-card border border-subtle p-5 space-y-4">
              <div class="text-xs font-sans font-bold uppercase text-brand-primary">
                ⚡ ${quizData.categoryTitle}
              </div>
              <h3 class="font-display font-bold text-base sm:text-lg text-content-primary">
                ${quizData.question}
              </h3>
              <div class="space-y-2">
                ${quizData.options.map((opt) => {
                  let stateStyle = "bg-surface-primary border-subtle hover:border-brand";
                  if (detailQuizSelectedOpt) {
                    if (opt.correct) {
                      stateStyle = "bg-[#E6F4EA] border-[#22543D] font-bold";
                    } else if (detailQuizSelectedOpt === opt.key && !opt.correct) {
                      stateStyle = "bg-[#FCE8E6] border-[#B91C1C]";
                    }
                  }
                  return `
                    <button type="button" class="detail-quiz-opt-btn w-full text-left p-3 border-2 ${stateStyle} flex items-start gap-3 cursor-pointer" data-opt-key="${opt.key}">
                      <span class="w-6 h-6 bg-surface-secondary border border-subtle font-mono-code text-xs font-bold flex items-center justify-center shrink-0">${opt.key}</span>
                      <span class="text-xs sm:text-sm text-content-primary">${opt.text}</span>
                    </button>
                  `;
                }).join("")}
              </div>
              ${detailQuizSelectedOpt ? `
                <div class="p-3.5 bg-surface-primary border-2 border-brand text-xs leading-relaxed">
                  <strong class="text-brand-primary uppercase block mb-1">✓ Giải thuyết lịch sử:</strong>
                  ${quizData.explanation}
                </div>
              ` : ""}
            </div>

            <!-- Right 4 Cols: Stamp Check-in Box -->
            <div class="lg:col-span-4 bg-surface-card border border-subtle p-5 text-center space-y-4">
              <div class="text-xs font-sans font-bold uppercase text-brand-primary">
                CON DẤU HỘ CHIẾU DI SẢN ĐIỂM #0${r.order}
              </div>

              <div class="mx-auto w-36 h-36 border-4 ${isStamped ? 'border-[#7A1C1C] bg-[#FAF5EB] text-[#7A1C1C] stamp-box-rotate' : 'border-dashed border-subtle bg-surface-primary text-content-muted'} p-2.5 flex flex-col items-center justify-center">
                <div class="text-[8px] font-mono-code font-bold uppercase">DI TÍCH ${r.rankBadge}</div>
                <div class="text-[10px] font-bold mt-0.5">${isStamped ? '★ ĐÃ XÁC THỰC ★' : '○ CHỜ CHECK-IN'}</div>
                <div class="font-display font-black text-xs uppercase my-1 border-y border-current py-1 w-full">
                  ${r.stampBadgeLine}
                </div>
                <div class="text-[8px] font-mono-code uppercase">${r.stampVerifyCode}</div>
              </div>

              <button type="button" id="detailStampActionBtn" class="${isStamped ? 'btn-olive' : 'btn-brand'} text-xs w-full">
                ${isStamped ? "✓ Đã Thu Thập Con Dấu Này (Xem Sổ Tay)" : "⌖ Đóng Dấu Check-in Điểm Di Tích Này"}
              </button>
            </div>
          </div>
        </section>
      </div>
    `;

    bindRelicDetailEvents(containerId, r);
  }

  function bindMainOverviewEvents(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;

    const exploreBtn = root.querySelector("#heroExplore8RelicsBtn");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        const sec = document.getElementById("relicsDirectoryGridSection");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      });
    }

    const heroGisBtn = root.querySelector("#heroOpenGisBtn");
    if (heroGisBtn) {
      heroGisBtn.addEventListener("click", () => navigateToView("ban-do-gis"));
    }

    const heroFbBtn = root.querySelector("#heroOpenFlipbookBtn");
    if (heroFbBtn) {
      heroFbBtn.addEventListener("click", () => navigateToView("cam-nang-3d"));
    }

    const heroAudioBtn = root.querySelector("#heroQuickTourAudioBtn");
    if (heroAudioBtn) {
      heroAudioBtn.addEventListener("click", () => {
        speakVietnamese(
          "Chào mừng quý khách đến với Khu Di tích Quốc gia Đặc biệt ATK Định Hóa, Thủ đô Gió Ngàn Chiến khu Việt Bắc tỉnh Thái Nguyên.",
          1.0
        );
      });
    }

    root.querySelectorAll(".kpi-nav-card").forEach((card) => {
      card.addEventListener("click", () => {
        const targetView = card.getAttribute("data-kpi-view");
        const scrollId = card.getAttribute("data-kpi-scroll");
        navigateToView(targetView, { scrollId: scrollId });
      });
    });

    root.querySelectorAll(".main-dir-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        directoryRankFilter = btn.getAttribute("data-dir-rank");
        renderMainOverviewSection(containerId);
      });
    });

    root.querySelectorAll(".open-relic-detail-trigger").forEach((el) => {
      el.addEventListener("click", () => {
        const relicId = el.getAttribute("data-relic-id");
        openRelicDetailView(relicId);
      });
    });

    root.querySelectorAll(".jump-relic-gis-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const relicId = btn.getAttribute("data-relic-id");
        navigateToView("ban-do-gis", { selectGisRelicId: relicId });
      });
    });

    root.querySelectorAll("[data-nav-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        navigateToView(btn.getAttribute("data-nav-view"));
      });
    });

    root.querySelectorAll(".vr-scene-select-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentVrSceneId = btn.getAttribute("data-vr-scene");
        activeVrHotspotIndex = 0;
        renderMainOverviewSection(containerId);
      });
    });

    root.querySelectorAll(".vr-hotspot-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeVrHotspotIndex = Number(btn.getAttribute("data-hotspot-idx"));
        vrYawAngle = (vrYawAngle + 45) % 360;
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

    const panLeft = root.querySelector("#vrPanLeftBtn");
    if (panLeft) {
      panLeft.addEventListener("click", () => {
        vrYawAngle = (vrYawAngle - 30 + 360) % 360;
        renderMainOverviewSection(containerId);
      });
    }

    const panRight = root.querySelector("#vrPanRightBtn");
    if (panRight) {
      panRight.addEventListener("click", () => {
        vrYawAngle = (vrYawAngle + 30) % 360;
        renderMainOverviewSection(containerId);
      });
    }
  }

  function bindRelicDetailEvents(containerId, relic) {
    const root = document.getElementById(containerId);
    if (!root) return;

    root.querySelectorAll("[data-nav-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        navigateToView(btn.getAttribute("data-nav-view"));
      });
    });

    root.querySelectorAll(".detail-switch-relic-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextId = btn.getAttribute("data-relic-id");
        openRelicDetailView(nextId);
      });
    });

    const speakBtn = root.querySelector("#detailSpeakBtn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        const text =
          relic.fullName +
          ". " +
          relic.dossier5Blocks.historicalStory.join(" ");
        speakVietnamese(text, 1.0);
      });
    }

    const jumpGisBtn = root.querySelector("#detailJumpGisBtn");
    if (jumpGisBtn) {
      jumpGisBtn.addEventListener("click", () => {
        navigateToView("ban-do-gis", { selectGisRelicId: relic.id });
      });
    }

    const openFullGisBtn = root.querySelector("#detailOpenFullGisBtn");
    if (openFullGisBtn) {
      openFullGisBtn.addEventListener("click", () => {
        navigateToView("ban-do-gis", { selectGisRelicId: relic.id });
      });
    }

    const jumpFbBtn = root.querySelector("#detailJumpFlipbookBtn");
    if (jumpFbBtn) {
      jumpFbBtn.addEventListener("click", () => {
        const spreadIdx = Math.min(4, Math.floor(relic.order / 2));
        navigateToView("cam-nang-3d", { spreadIndex: spreadIdx });
      });
    }

    root.querySelectorAll(".detail-quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        detailQuizSelectedOpt = btn.getAttribute("data-opt-key");
        renderRelicDetailPage(containerId, relic.id);
      });
    });

    const stampBtn = root.querySelector("#detailStampActionBtn");
    if (stampBtn) {
      stampBtn.addEventListener("click", () => {
        const stamps = window.EduHubModule.getStampsState();
        if (stamps[relic.id] && stamps[relic.id].verified) {
          navigateToView("edu-hub");
          return;
        }
        stamps[relic.id] = {
          verified: true,
          code: relic.stampVerifyCode,
          timestamp: new Date().toLocaleDateString("vi-VN")
        };
        try {
          localStorage.setItem("atk_dinh_hoa_stamps_v3", JSON.stringify(stamps));
        } catch (e) {}
        refreshHeaderStampCounter();
        renderRelicDetailPage(containerId, relic.id);
        showToast("Đã đóng dấu xác thực điểm di tích: " + relic.name);
      });
    }
  }

  /**
   * Khi gọi từ Bản đồ GIS hoặc Flipbook, chuyển sang Trang Chi Tiết 5 Khối Chuẩn
   */
  function openRelicDossierModal(relicId) {
    openRelicDetailView(relicId);
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
    const labels = {
      option1: "Đỏ Truyền Thống",
      option2: "Xanh Chiến Khu",
      option3: "Xanh Hòa Bình"
    };
    showToast("Đã chuyển sang giao diện: " + (labels[themeKey] || themeKey));
  }

  function initPortal() {
    // Khởi tạo sẵn dữ liệu của tất cả các view nhưng chỉ hiển thị view đang chọn
    renderMainOverviewSection("mainOverviewMount");
    renderRelicDetailPage("relicDetailMount", activeDetailRelicId);
    window.GISMapModule.render("gisFullSectionMount");
    window.FlipbookModule.render("flipbookFullSectionMount");
    window.EduHubModule.render("eduHubFullSectionMount");
    refreshHeaderStampCounter();

    // Lắng nghe sự kiện chuyển trang trên Header & Footer
    document.querySelectorAll("header [data-nav-view], footer [data-nav-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const viewKey = btn.getAttribute("data-nav-view");
        navigateToView(viewKey);
      });
    });

    // Lắng nghe sự kiện mở nhanh từng điểm di tích dưới Footer
    document.querySelectorAll("footer [data-footer-relic]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openRelicDetailView(btn.getAttribute("data-footer-relic"));
      });
    });

    // Chuyển đổi hệ màu
    document.querySelectorAll("[data-theme-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyThemeOption(btn.getAttribute("data-theme-switch"));
      });
    });

    // Đóng modal nếu có
    const closeBtn = document.getElementById("closeGlobalDossierModalBtn");
    const modal = document.getElementById("globalDossierModal");
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
      modal.addEventListener("click", (e) => {
        if (e.target.id === "globalDossierModal") modal.classList.add("hidden");
      });
    }

    // Kiểm tra URL hash khi tải trang
    const hash = (window.location.hash || "").replace("#", "");
    if (hash.startsWith("di-tich-")) {
      const rId = hash.replace("di-tich-", "");
      openRelicDetailView(rId);
    } else if (["trang-chu", "chi-tiet-di-tich", "ban-do-gis", "cam-nang-3d", "edu-hub"].includes(hash)) {
      navigateToView(hash);
    }
  }

  return {
    init: initPortal,
    navigateToView: navigateToView,
    openRelicDetailView: openRelicDetailView,
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
