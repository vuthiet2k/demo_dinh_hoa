/**
 * MODULE 2: ẤN PHẨM SỐ HÓA 3D — CẨM NANG DI TÍCH KHÁNG CHIẾN ATK ĐỊNH HÓA (1947 - 1954)
 * Tách riêng logic & giao diện phân hệ Cẩm nang 3D Flipbook (src/components/flipbook-module.js)
 */

window.FlipbookModule = (function () {
  let currentSpreadIndex = 1; // Mặc định mở Trang 04 - 05 (Chùa Hang & Đồi Tỉ) đúng thiết kế
  let zoomLevel = 100;
  let audioSpeed = 1.0;
  let isAudioPlaying = false;

  function renderFlipbookSection(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const spreads = data.flipbookSpreads;
    const spread = spreads[currentSpreadIndex] || spreads[0];

    root.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <!-- Header & A5 Badge -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-subtle pb-6">
          <div class="space-y-2 max-w-3xl">
            <div class="flex flex-wrap items-center gap-2">
              <span class="bg-brand-primary text-white text-[11px] font-bold px-2.5 py-1 uppercase">
                HỒ SƠ KHẢO SÁT THỰC ĐỊA
              </span>
              <span class="text-xs font-mono-code font-bold text-brand-olive">
                ⊙ BẢN LƯU CHIỂU QUỐC GIA: ${data.metadata.archiveCode}
              </span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-brand-primary leading-tight uppercase">
              ẤN PHẨM SỐ HÓA 3D: CẨM NANG DI TÍCH KHÁNG CHIẾN ATK ĐỊNH HÓA (1947 - 1954)
            </h2>
            <p class="text-xs sm:text-sm text-content-muted leading-relaxed">
              Công trình tư liệu hóa địa bạ quân sự và căn cứ cách mạng Thủ đô Gió Ngàn. Chuẩn định dạng lật trang 3D tương tác đa lớp, tích hợp dữ liệu trắc địa GIS vệ tinh và cổng số hóa Tour VR 360°.
            </p>
          </div>

          <!-- A5 Spec Box -->
          <div class="bg-surface-card border border-subtle p-3.5 flex items-center gap-3 shrink-0">
            <div class="text-right">
              <div class="text-[10px] font-mono-code uppercase text-content-muted">ẤN PHẨM QUY CHUẨN</div>
              <div class="text-sm font-display font-extrabold text-brand-primary">KHỔ A5 • 10 TRANG</div>
            </div>
            <div class="w-10 h-10 bg-brand-primary text-white font-bold flex items-center justify-center text-base">
              📖
            </div>
          </div>
        </div>

        <!-- Flipbook Toolbar: Search, Filter Pills, Zoom, Print, PDF Download -->
        <div class="bg-surface-card border border-subtle p-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2 flex-1">
            <input type="search" id="fbSearchKeywordInput" placeholder="🔍 Tìm địa danh, sự kiện, quyết định..." class="px-3 py-2 text-xs bg-surface-primary border border-subtle w-full sm:w-64" />
            <button type="button" class="fb-filter-tab px-3 py-2 text-xs font-bold border border-subtle pill-active" data-spread-jump="all">
              Tất Cả (10)
            </button>
            <button type="button" class="fb-filter-tab px-3 py-2 text-xs font-bold border border-subtle bg-surface-primary" data-spread-jump="1">
              5 Di Tích Quốc Gia
            </button>
            <button type="button" class="fb-filter-tab px-3 py-2 text-xs font-bold border border-subtle bg-surface-primary" data-spread-jump="4">
              3 Di Tích Tỉnh
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <div class="flex items-center border border-subtle bg-surface-primary text-xs font-mono-code">
              <button type="button" id="fbZoomOutBtn" class="px-2.5 py-1.5 border-r border-subtle hover:bg-surface-secondary">−</button>
              <span class="px-2.5 py-1.5 font-bold">${zoomLevel}%</span>
              <button type="button" id="fbZoomInBtn" class="px-2.5 py-1.5 border-l border-subtle hover:bg-surface-secondary">+</button>
            </div>
            <button type="button" id="fbPrintA5Btn" class="btn-flat-outline text-xs">
              🖨 In Ấn Bản A5
            </button>
            <button type="button" id="fbDownloadPdf12MbBtn" class="btn-olive text-xs">
              ⬇ Tải PDF (12MB)
            </button>
          </div>
        </div>

        <!-- Main 2-Column Layout: Left 8 Cols (2-Page Book Spread + Slider + Audio Bar) | Right 4 Cols (10-Page TOC) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left 8 Cols: 3D Flipbook Spread -->
          <div class="lg:col-span-8 space-y-4">
            <div class="bg-surface-warm border-2 border-subtle p-4 sm:p-6 relative">
              <!-- Previous / Next Page Floating Square Buttons -->
              <button type="button" id="fbPrevSpreadBtn" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-surface-card border-2 border-strong font-bold hover:bg-brand-primary hover:text-white" title="Trang trước">
                ‹
              </button>
              <button type="button" id="fbNextSpreadBtn" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-surface-card border-2 border-strong font-bold hover:bg-brand-primary hover:text-white" title="Trang tiếp">
                ›
              </button>

              <!-- 2-Page Spread Container -->
              <div class="grid grid-cols-1 md:grid-cols-12 bg-surface-card border-2 border-subtle relative">
                <!-- Left Page (Page 04) -->
                <div class="md:col-span-6 p-5 sm:p-6 border-b md:border-b-0 md:border-r-2 border-subtle flex flex-col justify-between space-y-4 relative">
                  <!-- Red Stamp Overlay Top-Right of Left Page -->
                  <div class="absolute top-3 right-3 z-10 border-2 border-[#7A1C1C] text-[#7A1C1C] bg-[#FAF7F0]/95 px-2.5 py-1 text-[9px] font-mono-code font-extrabold uppercase text-center stamp-box-rotate">
                    <div>★ LƯU TRỮ QUỐC GIA ★</div>
                    <div>ATK ĐỊNH HÓA</div>
                    <div class="text-[8px]">ĐÃ SỐ HÓA</div>
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted border-b border-subtle pb-2">
                      <span>MÃ HỒ SƠ: <strong>${spread.fileCode}</strong></span>
                      <span>${spread.periodTag}</span>
                    </div>

                    <!-- Archival B&W Photo Frame -->
                    <div class="bg-[#232321] border-2 border-subtle p-3 text-white space-y-2">
                      <div class="h-44 bg-[#343430] border border-white/20 flex flex-col items-center justify-center p-4 text-center relative">
                        <div class="text-[10px] font-mono-code uppercase tracking-widest text-[#E5DCCB] mb-1">
                          [TƯ LIỆU LỊCH SỬ KHÁNG CHIẾN 1947 – 1954]
                        </div>
                        <div class="font-display font-bold text-sm text-white max-w-xs">
                          ${spread.tocTitle}
                        </div>
                        <div class="mt-2 text-[11px] text-gray-300 max-w-xs">
                          Ảnh chụp tư liệu thực địa gốc lưu chiểu tại Bảo tàng ATK Định Hóa
                        </div>
                      </div>
                      <div class="text-[11px] text-gray-200 leading-snug">
                        <strong class="uppercase text-[10px] text-[#C29A50]">ẢNH CHỤP THỰC ĐỊA GỐC:</strong> ${spread.photoCaption}
                      </div>
                    </div>

                    <!-- Military Diary Excerpt Box -->
                    <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#7A1C1C] p-3.5 space-y-1.5">
                      <div class="text-[11px] font-bold text-brand-primary uppercase">
                        ▤ TRÍCH LỤC NHẬT KÝ QUÂN SỰ:
                      </div>
                      <blockquote class="text-xs italic text-content-primary leading-relaxed">
                        ${spread.diaryQuote}
                      </blockquote>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted pt-3 border-t border-subtle">
                    <span>ĐỊNH DANH GIS: ${spread.gisCoord}</span>
                    <span class="font-bold text-brand-primary">${spread.pageLeftNum}</span>
                  </div>
                </div>

                <!-- Right Page (Page 05) -->
                <div class="md:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div class="space-y-3.5">
                    <div class="flex items-center justify-between gap-2 border-b border-subtle pb-2">
                      <span class="bg-[#D9EFE2] text-[#22543D] text-[10px] font-bold px-2 py-0.5 uppercase border border-[#9AE6B4]">
                        ${spread.rightBadge}
                      </span>
                      <span class="text-[10px] font-mono-code font-semibold text-content-muted">
                        ${spread.rightDecision}
                      </span>
                    </div>

                    <h3 class="text-xl sm:text-2xl font-display font-extrabold text-brand-primary leading-snug">
                      ${spread.rightTitle}
                    </h3>

                    <div class="text-xs font-mono-code text-content-muted">
                      ${spread.rightLocation}
                    </div>

                    <p class="text-xs sm:text-sm text-content-primary leading-relaxed">
                      ${spread.rightBody}
                    </p>

                    <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#C29A50] p-3 text-xs leading-relaxed">
                      <strong>Hiện trạng bảo tồn:</strong> ${spread.rightPreservation}
                    </div>

                    <!-- Virtual Tour 360 QR Box -->
                    <div class="bg-surface-primary border border-subtle p-3.5 flex items-center justify-between gap-3">
                      <div class="space-y-1">
                        <div class="text-[11px] font-bold text-brand-primary uppercase">
                          ❂ TRẢI NGHIỆM VIRTUAL TOUR 360°
                        </div>
                        <p class="text-[11px] text-content-muted leading-snug">
                          Quét camera điện thoại để trực tiếp bước vào không gian 3D di tích thực địa.
                        </p>
                        <div class="text-[10px] font-mono-code font-bold text-brand-olive uppercase">
                          TỌA ĐỘ ĐỊNH VỊ CHUẨN GIS WGS84
                        </div>
                      </div>
                      <!-- Square QR Graphic -->
                      <button type="button" class="w-16 h-16 bg-white border-2 border-strong p-1.5 flex flex-col items-center justify-center shrink-0 cursor-pointer" id="fbQrOpenVrBtn" title="Mở không gian VR 360">
                        <div class="grid grid-cols-3 gap-0.5 w-full h-full">
                          <span class="bg-black"></span><span class="bg-white"></span><span class="bg-black"></span>
                          <span class="bg-white"></span><span class="bg-black"></span><span class="bg-white"></span>
                          <span class="bg-black"></span><span class="bg-white"></span><span class="bg-black"></span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted pt-3 border-t border-subtle">
                    <span class="font-bold text-brand-primary">${spread.pageRightNum}</span>
                    <span>BẢN QUYỀN SỐ HÓA: BQL DI TÍCH ATK</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Page Range Slider Bar -->
            <div class="bg-surface-card border border-subtle px-4 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div class="font-bold text-content-primary">
                📖 Trang ${spread.pageLeftNum} - ${spread.pageRightNum} / 10 Trang
              </div>
              <div class="flex items-center gap-2 flex-1 max-w-md font-mono-code">
                <span>01</span>
                <input type="range" id="fbSpreadRangeSlider" min="0" max="${spreads.length - 1}" value="${currentSpreadIndex}" class="w-full accent-brand-primary cursor-pointer" />
                <span>10</span>
              </div>
              <div class="text-[11px] font-mono-code font-bold text-brand-olive uppercase">
                ↻ HIỆU ỨNG LẬT 3D ĐANG BẬT
              </div>
            </div>

            <!-- Synchronized Audio Guide Player Bar -->
            <div class="bg-surface-card border border-subtle p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-brand-primary text-white font-bold flex items-center justify-center text-lg shrink-0">
                  🎙
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="bg-brand-olive text-white text-[10px] font-bold px-2 py-0.5 uppercase">
                      AUDIO GUIDE ĐỒNG BỘ
                    </span>
                    <span class="text-xs font-mono-code text-content-muted">
                      Giọng đọc Di sản AI Thái Nguyên
                    </span>
                  </div>
                  <h4 class="font-display font-bold text-sm text-brand-primary mt-1">
                    ${spread.audioTitle}
                  </h4>
                </div>
              </div>

              <div class="flex items-center gap-3 self-end sm:self-center">
                <!-- Soundbar visualizer bars -->
                <div class="hidden md:flex items-center gap-1 h-6 px-2">
                  <span class="w-1 h-3 bg-brand-primary"></span>
                  <span class="w-1 h-5 bg-brand-primary"></span>
                  <span class="w-1 h-2 bg-brand-primary"></span>
                  <span class="w-1 h-6 bg-brand-primary"></span>
                  <span class="w-1 h-4 bg-brand-primary"></span>
                </div>
                <button type="button" id="fbPlayAudioBtn" class="w-10 h-10 bg-brand-primary text-white font-bold flex items-center justify-center">
                  ${isAudioPlaying ? "⏸" : "▶"}
                </button>
                <span class="text-xs font-mono-code text-content-muted">01:14 / ${spread.audioDuration}</span>
                <button type="button" id="fbAudioSpeedBtn" class="px-2 py-1 border border-subtle bg-surface-primary text-xs font-mono-code font-bold">
                  ${audioSpeed.toFixed(1)}x
                </button>
              </div>
            </div>
          </div>

          <!-- Right 4 Cols: 10-Page Table of Contents -->
          <div class="lg:col-span-4 space-y-4">
            <div class="bg-surface-card border border-subtle p-4 space-y-3">
              <div class="flex items-center justify-between border-b border-subtle pb-3">
                <h3 class="font-display font-bold text-base text-brand-primary">☰ MỤC LỤC 10 TRANG</h3>
                <span class="bg-brand-primary text-white text-xs font-mono-code font-bold px-2.5 py-1">10 TRANG</span>
              </div>

              <div class="space-y-2.5">
                ${spreads.map((sp, idx) => {
                  const active = idx === currentSpreadIndex;
                  return `
                    <div class="fb-toc-card cursor-pointer p-3.5 border-2 ${active ? 'border-brand bg-surface-secondary' : 'border-subtle bg-surface-primary'} hover:border-brand transition-colors space-y-1" data-spread-idx="${idx}">
                      <div class="flex items-center justify-between">
                        <span class="bg-brand-primary text-white text-[10px] font-mono-code font-bold px-2 py-0.5">${sp.rangeLabel}</span>
                        <span class="text-[10px] font-mono-code font-bold uppercase text-brand-olive">${sp.tocCategory}</span>
                      </div>
                      <h4 class="font-display font-bold text-sm text-content-primary pt-1">${sp.tocTitle}</h4>
                      <p class="text-xs text-content-muted">${sp.tocSub}</p>
                    </div>
                  `;
                }).join("")}
              </div>

              <!-- Digital Certification Box -->
              <div class="bg-surface-primary border border-subtle p-3.5 space-y-1">
                <div class="text-xs font-bold text-brand-primary uppercase">❖ CHỨNG NHẬN SỐ HÓA</div>
                <p class="text-xs text-content-muted leading-relaxed">
                  Tài liệu đã được đối chiếu khoa học cùng Viện Lịch sử Quân sự và Ban Tuyên giáo Tỉnh ủy Thái Nguyên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    bindFlipbookEvents(containerId);
  }

  function bindFlipbookEvents(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const spreads = window.ATK_PORTAL_DATA.flipbookSpreads;

    root.querySelectorAll(".fb-toc-card").forEach((card) => {
      card.addEventListener("click", () => {
        currentSpreadIndex = Number(card.getAttribute("data-spread-idx"));
        renderFlipbookSection(containerId);
      });
    });

    root.querySelectorAll(".fb-filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const jump = tab.getAttribute("data-spread-jump");
        if (jump !== "all") {
          currentSpreadIndex = Number(jump);
          renderFlipbookSection(containerId);
        }
      });
    });

    const prevBtn = root.querySelector("#fbPrevSpreadBtn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentSpreadIndex = (currentSpreadIndex - 1 + spreads.length) % spreads.length;
        renderFlipbookSection(containerId);
      });
    }

    const nextBtn = root.querySelector("#fbNextSpreadBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentSpreadIndex = (currentSpreadIndex + 1) % spreads.length;
        renderFlipbookSection(containerId);
      });
    }

    const slider = root.querySelector("#fbSpreadRangeSlider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        currentSpreadIndex = Number(e.target.value);
        renderFlipbookSection(containerId);
      });
    }

    const searchInput = root.querySelector("#fbSearchKeywordInput");
    if (searchInput) {
      searchInput.addEventListener("change", (e) => {
        const kw = e.target.value.trim().toLowerCase();
        if (!kw) return;
        const foundIdx = spreads.findIndex(
          (sp) =>
            sp.rightTitle.toLowerCase().includes(kw) ||
            sp.rightBody.toLowerCase().includes(kw) ||
            sp.tocTitle.toLowerCase().includes(kw)
        );
        if (foundIdx !== -1) {
          currentSpreadIndex = foundIdx;
          renderFlipbookSection(containerId);
          window.ATKAppController.showToast("Đã mở trang cẩm nang khớp từ khóa: " + spreads[foundIdx].tocTitle);
        } else {
          window.ATKAppController.showToast("Không tìm thấy trang khớp từ khóa vừa nhập.");
        }
      });
    }

    const zoomIn = root.querySelector("#fbZoomInBtn");
    if (zoomIn) {
      zoomIn.addEventListener("click", () => {
        zoomLevel = Math.min(130, zoomLevel + 10);
        renderFlipbookSection(containerId);
      });
    }

    const zoomOut = root.querySelector("#fbZoomOutBtn");
    if (zoomOut) {
      zoomOut.addEventListener("click", () => {
        zoomLevel = Math.max(80, zoomLevel - 10);
        renderFlipbookSection(containerId);
      });
    }

    const printBtn = root.querySelector("#fbPrintA5Btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.ATKAppController.showToast("Đang chuẩn bị bản dàn trang chuẩn Khổ A5 (10 trang)...");
      });
    }

    const pdfBtn = root.querySelector("#fbDownloadPdf12MbBtn");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", () => {
        window.ATKAppController.downloadHandbookFile();
      });
    }

    const playAudioBtn = root.querySelector("#fbPlayAudioBtn");
    if (playAudioBtn) {
      playAudioBtn.addEventListener("click", () => {
        const sp = spreads[currentSpreadIndex];
        isAudioPlaying = !isAudioPlaying;
        window.ATKAppController.speakVietnamese(sp.rightTitle + ". " + sp.rightBody, audioSpeed);
        renderFlipbookSection(containerId);
      });
    }

    const speedBtn = root.querySelector("#fbAudioSpeedBtn");
    if (speedBtn) {
      speedBtn.addEventListener("click", () => {
        audioSpeed = audioSpeed === 1.0 ? 1.25 : 1.0;
        renderFlipbookSection(containerId);
      });
    }

    const qrBtn = root.querySelector("#fbQrOpenVrBtn");
    if (qrBtn) {
      qrBtn.addEventListener("click", () => {
        constvrEl = document.getElementById("vr360ShowcaseSection");
        if (constvrEl) constvrEl.scrollIntoView({ behavior: "smooth" });
        window.ATKAppController.showToast("Đã kết nối mã QR sang Không gian Thực tế ảo VR 360°");
      });
    }
  }

  return {
    render: renderFlipbookSection,
    openSpread: function (spreadIdx, containerId) {
      currentSpreadIndex = spreadIdx;
      renderFlipbookSection(containerId || "flipbookFullSectionMount");
    }
  };
})();
