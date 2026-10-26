/**
 * MODULE 1: BẢN ĐỒ SỐ KHÔNG GIAN ĐỊA LÝ (GIS) - QUẦN THỂ 8 ĐIỂM DI TÍCH KHÁNG CHIẾN ĐỊNH HÓA
 * Tách riêng logic & giao diện phân hệ GIS Map (src/components/gis-map-module.js)
 * Hỗ trợ: Bật/tắt 4 lớp dữ liệu phụ thời gian thực, Phóng to/Thu nhỏ bản đồ, Minh họa trực quan & Mở Trang Chi Tiết 5 Khối Chuẩn
 */

window.GISMapModule = (function () {
  let selectedRelicId = "DH-QG-01";
  let activeFilter = "ALL";
  let activeMapLayerMode = "hanh-chinh";
  let mapZoomScale = 1.0;
  let auxLayers = {
    parking: true,
    food: true,
    medical: true,
    marchRoute: true
  };

  function getRelicById(id) {
    const list = window.ATK_PORTAL_DATA.relics;
    return list.find((r) => r.id === id) || list[0];
  }

  function renderFullGisSection(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const currentRelic = getRelicById(selectedRelicId);

    root.innerHTML = `
      <!-- Top GIS Metadata Bar -->
      <div class="bg-surface-warm border-b border-subtle px-4 py-2 text-[11px] font-sans">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-brand-primary font-bold">⊕ ${data.metadata.vn2000Spec}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 bg-brand-olive"></span>
            <span class="font-semibold text-brand-olive">${data.metadata.stationStatus}</span>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <!-- Header & 5 / 3 Summary Counters -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-subtle pb-6">
          <div class="space-y-2 max-w-3xl">
            <div class="flex items-center gap-2">
              <span class="bg-brand-primary text-white text-[11px] font-sans font-bold px-2.5 py-1 uppercase">
                CHUYÊN TRANG BẢN ĐỒ SỐ ĐỊA LÝ DI SẢN
              </span>
              <span class="text-xs font-mono-code text-content-muted font-semibold">
                ${data.metadata.systemCode}
              </span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-display font-black text-brand-primary leading-tight">
              Bản Đồ Số Không Gian Địa Lý (GIS) – Quần Thể 08 Điểm Di Tích ATK Định Hóa
            </h2>
            <p class="text-xs sm:text-sm text-content-muted leading-relaxed">
              Hệ thống trắc địa không gian bảo tồn và số hóa tọa độ thực địa, tích hợp đa tầng dữ liệu: ranh giới khoanh vùng bảo vệ, phân cấp xếp hạng di tích, trạm dịch vụ hậu cần và đồ giải tuyến đường hành quân lịch sử thời kỳ 1947 – 1954.
            </p>
          </div>

          <div class="flex items-stretch gap-3 shrink-0 font-sans">
            <div class="bg-surface-card border border-subtle p-3.5 flex items-center gap-3 min-w-[165px]">
              <div class="w-10 h-10 bg-brand-primary text-white font-display font-black text-lg flex items-center justify-center">
                05
              </div>
              <div>
                <div class="text-xs font-bold text-brand-primary uppercase">CẤP QUỐC GIA</div>
                <div class="text-[11px] text-content-muted">Bảo vệ nghiêm ngặt</div>
              </div>
            </div>
            <div class="bg-surface-card border border-subtle p-3.5 flex items-center gap-3 min-w-[165px]">
              <div class="w-10 h-10 bg-brand-olive text-white font-display font-black text-lg flex items-center justify-center">
                03
              </div>
              <div>
                <div class="text-xs font-bold text-brand-olive uppercase">CẤP TỈNH</div>
                <div class="text-[11px] text-content-muted">Lưu trữ bổ sung</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter & Layer Mode Bar -->
        <div class="bg-surface-card border border-subtle p-3 flex flex-wrap items-center justify-between gap-3 font-sans">
          <div class="flex flex-wrap items-center gap-2" id="gisFilterBtnGroup">
            <button type="button" class="gis-filter-btn px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${activeFilter === 'ALL' ? 'pill-active' : 'bg-surface-primary'}" data-gis-filter="ALL">
              ▣ Tất cả (08 điểm)
            </button>
            <button type="button" class="gis-filter-btn px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${activeFilter === 'Quốc gia' ? 'pill-active' : 'bg-surface-primary'}" data-gis-filter="Quốc gia">
              ● Cấp Quốc Gia (05)
            </button>
            <button type="button" class="gis-filter-btn px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${activeFilter === 'Cấp Tỉnh' ? 'pill-active' : 'bg-surface-primary'}" data-gis-filter="Cấp Tỉnh">
              ● Cấp Tỉnh (03)
            </button>
            <button type="button" class="gis-filter-btn px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${activeFilter === 'TT Chợ Chu' ? 'pill-active' : 'bg-surface-primary'}" data-gis-filter="TT Chợ Chu">
              Cụm TT Chợ Chu (04)
            </button>
            <button type="button" class="gis-filter-btn px-3.5 py-2 text-xs font-bold border border-subtle cursor-pointer ${activeFilter === 'Xã Bảo Linh' ? 'pill-active' : 'bg-surface-primary'}" data-gis-filter="Xã Bảo Linh">
              Cụm Xã Bảo Linh (02)
            </button>
          </div>

          <div class="flex items-center gap-1.5 text-xs font-semibold">
            <button type="button" class="gis-mode-btn px-3 py-1.5 border cursor-pointer ${activeMapLayerMode === 'hanh-chinh' ? 'border-brand text-brand-primary font-bold bg-surface-primary' : 'border-subtle'}" data-gis-mode="hanh-chinh">
              ❖ Hành Chính
            </button>
            <button type="button" class="gis-mode-btn px-3 py-1.5 border cursor-pointer ${activeMapLayerMode === 've-tinh' ? 'border-brand text-brand-primary font-bold bg-surface-primary' : 'border-subtle'}" data-gis-mode="ve-tinh">
              🛰 Vệ Tinh Địa Hình
            </button>
            <button type="button" class="gis-mode-btn px-3 py-1.5 border cursor-pointer ${activeMapLayerMode === 'chien-khu' ? 'border-brand text-brand-primary font-bold bg-surface-primary' : 'border-subtle'}" data-gis-mode="chien-khu">
              ⚑ Chiến Khu 1947–1954
            </button>
          </div>
        </div>

        <!-- Main 2-Column GIS Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left 8 Cols -->
          <div class="lg:col-span-8 space-y-6">
            <!-- Map Viewport Box -->
            <div class="relative bg-[#E5DEC9] border-2 border-subtle overflow-hidden">
              <!-- Auxiliary Layer Legend Box (Interactive Checkboxes) -->
              <div class="absolute top-4 left-4 z-10 bg-surface-card border border-subtle p-3.5 w-64 text-xs font-sans space-y-2">
                <div class="flex items-center justify-between border-b border-subtle pb-1.5">
                  <span class="font-bold text-brand-primary uppercase text-[11px]">⊞ LỚP DỮ LIỆU PHỤ KHÁNG CHIẾN</span>
                  <span class="font-mono-code text-[10px] font-bold text-brand-olive">${Math.round(mapZoomScale * 100)}%</span>
                </div>
                <div class="grid grid-cols-2 gap-2 text-[11px]">
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" class="gis-aux-toggle accent-brand-primary" data-aux-key="parking" ${auxLayers.parking ? "checked" : ""} /> Bãi đỗ xe đoàn
                  </label>
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" class="gis-aux-toggle accent-brand-primary" data-aux-key="food" ${auxLayers.food ? "checked" : ""} /> Trạm ẩm thực
                  </label>
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" class="gis-aux-toggle accent-brand-primary" data-aux-key="medical" ${auxLayers.medical ? "checked" : ""} /> Trạm y tế huyện
                  </label>
                  <label class="flex items-center gap-1.5 cursor-pointer font-bold text-brand-primary">
                    <input type="checkbox" class="gis-aux-toggle accent-brand-primary" data-aux-key="marchRoute" ${auxLayers.marchRoute ? "checked" : ""} /> Tuyến hành quân
                  </label>
                </div>
              </div>

              <!-- Interactive SVG Topographic & Historical Map -->
              <div class="overflow-hidden w-full h-[440px]">
                <svg viewBox="0 0 620 430" style="transform: scale(${mapZoomScale}); transform-origin: center center; transition: transform 0.2s ease;" class="w-full h-[440px] block select-none" role="img" aria-label="Bản đồ GIS 8 điểm di tích kháng chiến Định Hóa">
                  <!-- Topographic background contours -->
                  <rect width="620" height="430" fill="${activeMapLayerMode === 've-tinh' ? '#C9D6B8' : activeMapLayerMode === 'chien-khu' ? '#E4D8BE' : '#E6DEC8'}" />
                  <path d="M 0,90 Q 160,60 320,110 T 620,80" fill="none" stroke="#C5B99E" stroke-width="1.5" />
                  <path d="M 0,190 Q 200,150 410,210 T 620,180" fill="none" stroke="#C5B99E" stroke-width="1.5" />
                  <path d="M 0,310 Q 260,280 460,330 T 620,290" fill="none" stroke="#C5B99E" stroke-width="1.5" />

                  <!-- Protected Core Zone Polygon -->
                  <polygon points="60,150 280,105 510,135 450,285 210,275 80,235" fill="#7D8C69" fill-opacity="0.18" stroke="#566447" stroke-width="1.5" stroke-dasharray="5 4" />

                  <!-- Chu River Line -->
                  <path d="M 320,40 Q 360,180 410,260 T 590,345" fill="none" stroke="#7FA4BD" stroke-width="3.5" />
                  <text x="485" y="255" font-size="10" fill="#3B5B70" font-style="italic">Dòng suối Chợ Chu</text>

                  <!-- Historical 1947 March Route (Red Dashed Line) -->
                  ${auxLayers.marchRoute ? `
                    <polyline points="105,155 140,185 170,225 240,245 345,215 430,175" fill="none" stroke="#7A1C1C" stroke-width="2.5" stroke-dasharray="6 4" />
                    <polyline points="265,120 315,165 345,215 430,175" fill="none" stroke="#3E5A47" stroke-width="2" stroke-dasharray="4 3" />
                  ` : ""}

                  <!-- Auxiliary Service Icons -->
                  ${auxLayers.parking ? `
                    <g transform="translate(275, 175)">
                      <rect x="-10" y="-10" width="20" height="20" fill="#292723" />
                      <text x="0" y="4" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="700">P</text>
                    </g>
                  ` : ""}
                  ${auxLayers.medical ? `
                    <g transform="translate(362, 212)">
                      <rect x="-10" y="-10" width="20" height="20" fill="#B91C1C" />
                      <text x="0" y="4" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="700">+</text>
                    </g>
                  ` : ""}
                  ${auxLayers.food ? `
                    <g transform="translate(325, 222)">
                      <rect x="-10" y="-10" width="20" height="20" fill="#85641E" />
                      <text x="0" y="4" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="700">Ψ</text>
                    </g>
                  ` : ""}

                  <!-- Render 8 Relic Pins -->
                  ${data.relics.map((r) => {
                    const isSelected = r.id === currentRelic.id;
                    const pinColor = r.rank === "Quốc gia" ? "#7A1C1C" : "#3E5A47";
                    return `
                      <g class="cursor-pointer gis-svg-pin" data-relic-id="${r.id}" transform="translate(${r.mapPin.x}, ${r.mapPin.y})">
                        <rect x="-50" y="-34" width="100" height="18" fill="${pinColor}" stroke="#FFFFFF" stroke-width="1" />
                        <text x="0" y="-22" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="700">${r.mapPin.label}</text>
                        <rect x="-12" y="-12" width="24" height="24" fill="${pinColor}" stroke="${isSelected ? '#C29A50' : '#FFFFFF'}" stroke-width="${isSelected ? '3' : '1.5'}" />
                        <text x="0" y="4" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="800">${r.order}</text>
                      </g>
                    `;
                  }).join("")}
                </svg>
              </div>

              <!-- Map Zoom Controls (Bottom Right) -->
              <div class="absolute bottom-4 right-4 z-10 flex flex-col border border-subtle bg-surface-card font-sans">
                <button type="button" class="w-9 h-9 font-bold border-b border-subtle hover:bg-surface-secondary cursor-pointer" id="gisZoomInBtn" title="Phóng to bản đồ">+</button>
                <button type="button" class="w-9 h-9 font-bold border-b border-subtle hover:bg-surface-secondary cursor-pointer" id="gisZoomOutBtn" title="Thu nhỏ bản đồ">−</button>
                <button type="button" class="w-9 h-9 text-xs hover:bg-surface-secondary cursor-pointer" id="gisResetViewBtn" title="Đặt lại tỷ lệ 100%">⛶</button>
              </div>

              <!-- Active Relic Overlay Card on Map -->
              <div class="bg-surface-card border-2 border-strong p-4 m-4 lg:w-[460px] relative z-10">
                <div class="flex items-center justify-between gap-2 mb-2.5 font-sans">
                  <div class="flex items-center gap-2">
                    <span class="bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 uppercase">
                      DI TÍCH ${currentRelic.rankBadge} #0${currentRelic.order}
                    </span>
                    <span class="font-mono-code text-xs font-bold text-content-muted">${currentRelic.gisCode}</span>
                  </div>
                  <span class="text-xs font-semibold text-content-muted">${currentRelic.commune}</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div class="sm:col-span-5">
                    ${data.renderRelicVisualSvg(currentRelic.id, "thumb")}
                  </div>

                  <div class="sm:col-span-7 space-y-1">
                    <h3 class="font-display font-bold text-sm sm:text-base leading-snug text-brand-primary">
                      ${currentRelic.fullName}
                    </h3>
                    <div class="text-[11px] font-sans text-content-muted">${currentRelic.gisPopupDecision}</div>
                    <div class="text-[11px] font-mono-code text-content-muted">WGS84: ${currentRelic.lat}, ${currentRelic.lng}</div>
                    <div class="text-[11px] font-sans font-bold text-brand-olive">Cự ly: ${currentRelic.distanceFromCenter} từ TT Chợ Chu</div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-subtle">
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentRelic.lat.replace('°B','') + ',' + currentRelic.lng.replace('°Đ',''))}" target="_blank" rel="noopener noreferrer" class="btn-flat-outline text-xs py-2 text-center">
                    ◁ Chỉ Đường Google Maps
                  </a>
                  <button type="button" id="gisOpenDossierModalBtn" class="btn-brand text-xs py-2">
                    ▤ Mở Trang Hồ Sơ 5 Khối →
                  </button>
                </div>
              </div>
            </div>

            <!-- Route Calculation & Field Distance Measurement Box -->
            <div class="bg-surface-card border border-subtle p-5 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-subtle pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-7 h-7 bg-brand-olive text-white font-bold text-xs flex items-center justify-center">⑂</span>
                  <h3 class="font-display font-bold text-base">
                    Bảng Tính Toán Lộ Trình &amp; Đo Đạc Khoảng Cách Thực Địa
                  </h3>
                </div>
                <span class="text-xs font-sans text-content-muted">
                  Thuật toán Dijkstra tối ưu cung đường đồi chiến khu
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center font-sans">
                <div class="md:col-span-4 space-y-1">
                  <label class="text-[10px] font-bold uppercase text-content-muted">ĐIỂM XUẤT PHÁT (POINT A)</label>
                  <select id="gisRoutePointA" class="w-full px-3 py-2 text-xs font-semibold bg-surface-primary border border-subtle">
                    ${data.relics.map((r) => `<option value="${r.id}" ${r.id === currentRelic.id ? 'selected' : ''}>${r.order}. ${r.name} (${r.commune})</option>`).join("")}
                  </select>
                </div>

                <div class="md:col-span-1 text-center font-bold text-brand-primary pt-4">⇄</div>

                <div class="md:col-span-4 space-y-1">
                  <label class="text-[10px] font-bold uppercase text-content-muted">ĐIỂM ĐẾN TIẾP THEO (POINT B)</label>
                  <select id="gisRoutePointB" class="w-full px-3 py-2 text-xs font-semibold bg-surface-primary border border-subtle">
                    ${data.relics.map((r) => `<option value="${r.id}" ${r.id === currentRelic.nextTargetId ? 'selected' : ''}>${r.order}. ${r.name} (${r.commune})</option>`).join("")}
                  </select>
                </div>

                <div class="md:col-span-3 bg-surface-primary border border-subtle p-3 text-center">
                  <div class="text-[10px] font-bold uppercase text-content-muted">CỰ LY &amp; DỰ KIẾN</div>
                  <div id="gisRouteCalcDistance" class="text-xl font-display font-black text-brand-primary mt-0.5">${currentRelic.nextDistanceKm}</div>
                  <div id="gisRouteCalcDuration" class="text-[11px] text-content-muted">${currentRelic.nextDurationText}</div>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div class="flex flex-wrap gap-2">
                  <button type="button" id="exportGpxBtn" class="btn-flat-outline text-xs">⬇ Xuất file GPX</button>
                  <button type="button" id="exportKmlBtn" class="btn-flat-outline text-xs">⬇ Xuất file KML Google Earth</button>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(currentRelic.lat.replace('°B','') + ',' + currentRelic.lng.replace('°Đ',''))}" target="_blank" rel="noopener noreferrer" class="btn-olive text-xs">
                  ▲ Mở Chỉ Đường Trực Tiếp Trên Google Maps
                </a>
              </div>
            </div>
          </div>

          <!-- Right 4 Cols: Danh Mục 8 Điểm Khảo Sát -->
          <div class="lg:col-span-4 space-y-4">
            <div class="bg-surface-card border border-subtle p-4 space-y-3">
              <div class="flex items-center justify-between border-b border-subtle pb-3">
                <h3 class="font-display font-bold text-base text-brand-primary">Danh Mục 08 Điểm Khảo Sát</h3>
                <span class="bg-brand-primary text-white text-xs font-mono-code font-bold px-2.5 py-1">08 Vị Trí</span>
              </div>

              <div class="space-y-2.5 max-h-[680px] overflow-y-auto pr-1" id="gisSurveyListContainer">
                ${data.relics
                  .filter((r) => activeFilter === "ALL" || r.rank === activeFilter || r.commune === activeFilter)
                  .map((r) => {
                    const isSel = r.id === currentRelic.id;
                    const leftBorderClass = r.rank === "Quốc gia" ? "border-l-4 border-l-[#7A1C1C]" : "border-l-4 border-l-[#3E5A47]";
                    return `
                      <div class="gis-list-item cursor-pointer p-3.5 border border-subtle ${leftBorderClass} ${isSel ? 'bg-surface-secondary' : 'bg-surface-primary'} hover:bg-surface-secondary transition-colors space-y-1.5" data-relic-id="${r.id}">
                        <div class="flex items-center justify-between text-[11px] font-sans">
                          <span class="font-bold ${r.rank === 'Quốc gia' ? 'text-brand-primary' : 'text-brand-olive'}">● ${r.gisHeaderLabel}</span>
                          <span class="font-mono-code font-semibold text-content-muted">${r.distanceFromCenter}</span>
                        </div>
                        <h4 class="font-display font-bold text-sm text-content-primary">${r.order}. ${r.name} (${r.commune})</h4>
                        <p class="text-xs text-content-muted line-clamp-2">${r.shortDesc}</p>
                        <div class="flex items-center justify-between text-[11px] font-sans pt-1.5 border-t border-subtle">
                          <span class="font-mono-code text-[10px] text-content-muted">${r.lat} | ${r.lng}</span>
                          <button type="button" class="gis-item-open-detail text-brand-primary font-bold hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs" data-detail-id="${r.id}">
                            Hồ sơ 5 khối →
                          </button>
                        </div>
                      </div>
                    `;
                  }).join("")}
              </div>

              <!-- Verification Stamp Note -->
              <div class="bg-surface-primary border border-subtle p-3 flex items-center gap-3 font-sans">
                <div class="w-8 h-8 bg-brand-accent text-content-primary font-bold flex items-center justify-center shrink-0">✓</div>
                <div class="text-xs">
                  <div class="font-bold text-content-primary">Dữ liệu GIS đã nghiệm thu thực địa</div>
                  <div class="text-[11px] text-content-muted">${data.metadata.acceptanceNote}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom 4 GIS Technical Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          ${data.gisFooterStats.map((st) => `
            <div class="bg-surface-card border border-subtle p-4 space-y-1.5">
              <div class="text-xs font-sans font-bold uppercase text-content-muted">${st.title}</div>
              <div class="text-2xl sm:text-3xl font-display font-black text-brand-primary">${st.value}</div>
              <p class="text-xs text-content-muted leading-relaxed">${st.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    bindGisEvents(containerId);
  }

  function bindGisEvents(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;

    root.querySelectorAll(".gis-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-gis-filter");
        renderFullGisSection(containerId);
      });
    });

    root.querySelectorAll(".gis-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeMapLayerMode = btn.getAttribute("data-gis-mode");
        renderFullGisSection(containerId);
      });
    });

    root.querySelectorAll(".gis-aux-toggle").forEach((chk) => {
      chk.addEventListener("change", () => {
        const key = chk.getAttribute("data-aux-key");
        auxLayers[key] = chk.checked;
        renderFullGisSection(containerId);
      });
    });

    const zoomInBtn = root.querySelector("#gisZoomInBtn");
    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => {
        mapZoomScale = Math.min(1.5, Number((mapZoomScale + 0.15).toFixed(2)));
        renderFullGisSection(containerId);
      });
    }

    const zoomOutBtn = root.querySelector("#gisZoomOutBtn");
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => {
        mapZoomScale = Math.max(0.85, Number((mapZoomScale - 0.15).toFixed(2)));
        renderFullGisSection(containerId);
      });
    }

    const resetViewBtn = root.querySelector("#gisResetViewBtn");
    if (resetViewBtn) {
      resetViewBtn.addEventListener("click", () => {
        mapZoomScale = 1.0;
        renderFullGisSection(containerId);
      });
    }

    root.querySelectorAll(".gis-svg-pin, .gis-list-item").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.classList.contains("gis-item-open-detail")) return;
        selectedRelicId = el.getAttribute("data-relic-id");
        renderFullGisSection(containerId);
      });
    });

    root.querySelectorAll(".gis-item-open-detail").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const rId = btn.getAttribute("data-detail-id");
        window.ATKAppController.openRelicDetailView(rId);
      });
    });

    const routeA = root.querySelector("#gisRoutePointA");
    const routeB = root.querySelector("#gisRoutePointB");
    function updateRouteDistance() {
      if (!routeA || !routeB) return;
      const a = getRelicById(routeA.value);
      const b = getRelicById(routeB.value);
      if (a.id === b.id) {
        root.querySelector("#gisRouteCalcDistance").textContent = "0.0 km";
        root.querySelector("#gisRouteCalcDuration").textContent = "Cùng một vị trí thực địa";
      } else {
        const dist = (Math.abs(a.order - b.order) * 1.4 + 0.8).toFixed(1);
        const mins = Math.max(3, Math.round(Number(dist) * 3));
        root.querySelector("#gisRouteCalcDistance").textContent = dist + " km";
        root.querySelector("#gisRouteCalcDuration").textContent = "~" + mins + " phút xe / " + (mins * 3) + " phút đi bộ";
      }
    }
    if (routeA) routeA.addEventListener("change", updateRouteDistance);
    if (routeB) routeB.addEventListener("change", updateRouteDistance);

    const gpxBtn = root.querySelector("#exportGpxBtn");
    if (gpxBtn) {
      gpxBtn.addEventListener("click", () => {
        const r = getRelicById(selectedRelicId);
        window.ATKAppController.downloadTextFile(
          `ATK-${r.id}.gpx`,
          `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="GIS-ATK-2024"><wpt lat="21.9125" lon="105.6428"><name>${r.fullName}</name><desc>${r.gisPopupDecision}</desc></wpt></gpx>`
        );
        window.ATKAppController.showToast("Đã xuất tệp tọa độ trắc địa GPX cho " + r.name);
      });
    }

    const kmlBtn = root.querySelector("#exportKmlBtn");
    if (kmlBtn) {
      kmlBtn.addEventListener("click", () => {
        const r = getRelicById(selectedRelicId);
        window.ATKAppController.downloadTextFile(
          `ATK-${r.id}.kml`,
          `<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Placemark><name>${r.fullName}</name><description>${r.shortDesc}</description></Placemark></kml>`
        );
        window.ATKAppController.showToast("Đã xuất tệp KML Google Earth cho " + r.name);
      });
    }

    const dossierBtn = root.querySelector("#gisOpenDossierModalBtn");
    if (dossierBtn) {
      dossierBtn.addEventListener("click", () => {
        window.ATKAppController.openRelicDetailView(selectedRelicId);
      });
    }
  }

  return {
    render: renderFullGisSection,
    selectRelic: function (relicId, containerId) {
      selectedRelicId = relicId;
      renderFullGisSection(containerId || "gisFullSectionMount");
    }
  };
})();
