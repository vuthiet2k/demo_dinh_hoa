/**
 * MODULE 3: EDU-HUB KHÔNG GIAN LỊCH SỬ & SỔ TAY CHECK-IN DI SẢN SỐ ATK ĐỊNH HÓA
 * Tách riêng logic & giao diện phân hệ Edu-Hub (src/components/edu-hub-module.js)
 */

window.EduHubModule = (function () {
  let activeQuizRelicId = "DH-QG-01";
  let quizScore = 80;
  let answeredMap = {};
  let timerSeconds = 120;
  let timerInterval = null;
  let teleprompterMode = false;
  let gpsGeofencingActive = false;

  function getStampsState() {
    try {
      const raw = localStorage.getItem("atk_dinh_hoa_stamps_v3");
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    const initial = {};
    window.ATK_PORTAL_DATA.relics.forEach((r) => {
      if (r.stampedDefault) {
        initial[r.id] = { verified: true, code: r.stampVerifyCode, timestamp: "2026-10-25" };
      }
    });
    return initial;
  }

  function saveStampsState(state) {
    try {
      localStorage.setItem("atk_dinh_hoa_stamps_v3", JSON.stringify(state));
    } catch (e) {}
  }

  function renderEduHubSection(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;
    const stampsState = getStampsState();
    const stampedCount = Object.keys(stampsState).filter((k) => stampsState[k] && stampsState[k].verified).length;
    const quizData = data.eduQuizzes[activeQuizRelicId] || data.eduQuizzes["DH-QG-01"];
    const scriptData = data.juniorScripts["DH-QG-01"];
    const activeRelicObj = data.relics.find((r) => r.id === activeQuizRelicId) || data.relics[0];

    const mStr = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
    const sStr = String(timerSeconds % 60).padStart(2, "0");

    root.innerHTML = `
      <!-- Top Edu-Hub Status Bar -->
      <div class="bg-surface-warm border-b border-subtle px-4 py-2 text-[11px] font-mono-code">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span class="font-bold text-content-muted">🛡 CHƯƠNG TRÌNH GIÁO DỤC LỊCH SỬ DI SẢN SỐ HÓA 2026</span>
          <div class="flex items-center gap-3">
            <span class="text-brand-olive font-bold">● KẾT NỐI HỆ THỐNG GIS THỰC ĐỊA: TRỰC TUYẾN</span>
            <span class="text-content-muted">MÃ PHIÊN: <strong>${data.metadata.eduSessionCode}</strong></span>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-8 space-y-12">
        <!-- Header + Hồ Sơ Về Nguồn Scoreboard -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-subtle pb-8">
          <div class="lg:col-span-7 space-y-2.5">
            <div class="text-xs font-mono-code font-bold uppercase text-brand-primary tracking-wider">
              CHIẾN KHU VIỆT BẮC • THỦ ĐÔ GIÓ NGÀN
            </div>
            <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-brand-primary leading-tight uppercase">
              EDU-HUB KHÔNG GIAN LỊCH SỬ &amp; SỔ TAY CHECK-IN DI SẢN SỐ ATK ĐỊNH HÓA
            </h2>
            <p class="text-xs sm:text-sm text-content-muted leading-relaxed">
              Hệ thống giáo dục truyền thống tương tác 1 chạm dành cho học sinh, thanh thiếu niên và du khách hành hương về nguồn. Học tập trực quan, giải mã cứ liệu văn bản chỉ thị 1947–1954 và tích lũy con dấu lưu niệm số đạt chuẩn lưu trữ quốc gia.
            </p>
          </div>

          <!-- Scoreboard Card: HỒ SƠ VỀ NGUỒN -->
          <div class="lg:col-span-5 bg-surface-card border-2 border-subtle p-5 space-y-4">
            <div class="flex items-center justify-between border-b border-subtle pb-2.5">
              <span class="font-display font-bold text-sm uppercase text-brand-primary">HỒ SƠ VỀ NGUỒN</span>
              <span class="bg-brand-olive text-white text-[10px] font-bold px-2.5 py-1 uppercase">
                CHIẾN SĨ THI ĐUA VỀ NGUỒN
              </span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-surface-primary border border-subtle p-3.5 space-y-1">
                <div class="text-[10px] font-mono-code uppercase text-content-muted">ĐIỂM THI ĐUA QUIZ</div>
                <div class="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary">
                  ${quizScore} <span class="text-xs font-normal text-content-muted">/100 Điểm</span>
                </div>
                <div class="w-full h-1.5 bg-surface-secondary mt-1">
                  <div class="h-1.5 bg-brand-primary" style="width: ${Math.min(100, quizScore)}%;"></div>
                </div>
              </div>

              <div class="bg-surface-primary border border-subtle p-3.5 space-y-1">
                <div class="text-[10px] font-mono-code uppercase text-content-muted">TEM CHECK-IN DI SẢN</div>
                <div class="text-2xl sm:text-3xl font-display font-extrabold text-brand-olive">
                  ${stampedCount} <span class="text-xs font-normal text-content-muted">/8 Điểm</span>
                </div>
                <div class="w-full h-1.5 bg-surface-secondary mt-1">
                  <div class="h-1.5 bg-brand-olive" style="width: ${(stampedCount / 8) * 100}%;"></div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-[11px] font-mono-code pt-1">
              <span class="text-content-muted">⏳ Tiến độ hoàn thiện: <strong>${Math.round((stampedCount / 8) * 100)}%</strong></span>
              <span class="font-bold text-brand-primary uppercase">
                ${quizScore >= 100 ? "ĐÃ ĐẠT ĐẠI SỨ DI SẢN ATK" : "CÒN " + Math.max(0, 100 - quizScore) + " ĐIỂM ĐẠT ĐẠI SỨ DI SẢN"}
              </span>
            </div>
          </div>
        </div>

        <!-- MODULE 01: THỬ THÁCH TRẮC NGHIỆM LỊCH SỬ 1 CHẠM -->
        <div class="space-y-5">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div class="space-y-1">
              <div class="text-[11px] font-mono-code font-bold text-brand-primary uppercase">
                ⚡ MÔ-ĐUN 01 • PHẢN HỒI TỨC THÌ (ZERO-SUBMIT FRICTION)
              </div>
              <h3 class="text-xl sm:text-2xl font-display font-extrabold uppercase text-content-primary">
                THỬ THÁCH TRẮC NGHIỆM LỊCH SỬ 1 CHẠM
              </h3>
              <p class="text-xs text-content-muted">
                Chạm trực tiếp vào đáp án để nhận chứng thực đúng/sai kèm tư liệu giải mật trích lục gốc từ Cục Lưu trữ Trung ương.
              </p>
            </div>

            <!-- 8 Relic Quiz Tabs -->
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-xs font-mono-code font-bold mr-1">DI TÍCH:</span>
              ${data.relics.map((r) => `
                <button type="button" class="edu-quiz-tab px-2.5 py-1.5 text-[11px] font-mono-code font-bold border border-subtle ${r.id === activeQuizRelicId ? 'pill-active' : 'bg-surface-card'}" data-quiz-relic="${r.id}">
                  ${r.shortTabName}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <!-- Left 8 Cols: Question Card -->
            <div class="lg:col-span-8 bg-surface-card border-2 border-subtle p-5 sm:p-6 space-y-5">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
                <div class="flex items-center gap-2">
                  <span class="bg-brand-primary text-white text-xs font-mono-code font-bold px-2.5 py-1">
                    MÃ: ${quizData.code}
                  </span>
                  <span class="bg-[#D9EFE2] text-[#22543D] text-xs font-mono-code font-bold px-2.5 py-1 border border-[#9AE6B4]">
                    ${quizData.points}
                  </span>
                </div>
                <span class="text-[11px] font-mono-code text-content-muted">
                  ${quizData.stepLabel}
                </span>
              </div>

              <div class="space-y-2">
                <div class="text-[11px] font-mono-code font-bold uppercase text-brand-primary">
                  ${quizData.categoryTitle}
                </div>
                <h4 class="text-lg sm:text-xl font-display font-bold text-content-primary leading-snug">
                  ${quizData.question}
                </h4>
              </div>

              <!-- 4 Options (A, B, C, D) -->
              <div class="space-y-2.5" id="eduQuizOptionsList">
                ${quizData.options.map((opt) => {
                  const chosenKey = answeredMap[activeQuizRelicId];
                  let stateStyle = "bg-surface-primary border-subtle hover:border-brand";
                  let badgeStyle = "bg-surface-secondary text-content-primary border-subtle";
                  if (chosenKey) {
                    if (opt.correct) {
                      stateStyle = "bg-[#E6F4EA] border-[#22543D] font-bold";
                      badgeStyle = "bg-[#22543D] text-white border-[#22543D]";
                    } else if (chosenKey === opt.key && !opt.correct) {
                      stateStyle = "bg-[#FCE8E6] border-[#B91C1C]";
                      badgeStyle = "bg-[#B91C1C] text-white border-[#B91C1C]";
                    }
                  }
                  return `
                    <button type="button" class="edu-quiz-opt-btn w-full text-left p-3.5 border-2 ${stateStyle} flex items-start gap-3 transition-colors" data-opt-key="${opt.key}" data-opt-correct="${opt.correct}">
                      <span class="w-7 h-7 border ${badgeStyle} font-mono-code text-xs font-bold flex items-center justify-center shrink-0">
                        ${opt.key}
                      </span>
                      <span class="text-xs sm:text-sm leading-relaxed text-content-primary flex-1">
                        ${opt.text}
                      </span>
                    </button>
                  `;
                }).join("")}
              </div>

              <!-- Instant Historical Explanation Box -->
              <div id="eduQuizFeedbackBox" class="${answeredMap[activeQuizRelicId] ? '' : 'hidden'} bg-surface-primary border-2 border-brand p-4 text-xs leading-relaxed space-y-1">
                <div class="font-bold text-brand-primary uppercase">✓ TƯ LIỆU GIẢI MẬT &amp; ĐỐI CHIẾU LỊCH SỬ:</div>
                <p>${quizData.explanation}</p>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-subtle">
                <button type="button" id="eduResetQuizQuestionBtn" class="btn-flat-outline text-xs">
                  ↻ Làm Lại Câu Hỏi
                </button>
                <button type="button" id="eduNextQuizQuestionBtn" class="btn-brand text-xs">
                  Câu Kế Tiếp →
                </button>
              </div>
            </div>

            <!-- Right 4 Cols: THANG BẬC THI ĐUA (4 Cấp Danh Hiệu) -->
            <div class="lg:col-span-4 space-y-4">
              <div class="bg-surface-card border border-subtle p-5 space-y-3.5">
                <div class="flex items-center justify-between border-b border-subtle pb-2.5">
                  <h4 class="font-display font-bold text-sm uppercase text-brand-primary">THANG BẬC THI ĐUA</h4>
                  <span class="text-[11px] font-mono-code text-content-muted">4 CẤP DANH HIỆU</span>
                </div>

                <div class="space-y-2.5">
                  ${data.emulationRanks.map((rk) => {
                    const isActive = rk.status === "active";
                    return `
                      <div class="p-3 border ${isActive ? 'bg-brand-primary text-white border-brand' : 'bg-surface-primary border-subtle'} flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                          <span class="w-7 h-7 ${isActive ? 'bg-white/20 text-white' : rk.status === 'gold' ? 'bg-brand-gold-dark text-white' : 'bg-surface-secondary text-content-primary'} font-mono-code text-xs font-bold flex items-center justify-center shrink-0">
                            ${rk.level}
                          </span>
                          <div>
                            <div class="text-xs font-bold flex items-center gap-1.5">
                              <span>${rk.name}</span>
                              ${rk.badge ? `<span class="bg-brand-olive text-white text-[9px] px-1.5 py-0.5 uppercase">${rk.badge}</span>` : ""}
                            </div>
                            <div class="text-[11px] ${isActive ? 'text-white/85' : 'text-content-muted'}">${rk.rule}</div>
                          </div>
                        </div>
                        <span class="text-xs font-bold">${isActive ? "🏆" : rk.status === "gold" ? "✪" : "•"}</span>
                      </div>
                    `;
                  }).join("")}
                </div>

                <!-- Special Privilege Note -->
                <div class="bg-surface-primary border border-subtle p-3.5 flex items-start gap-3">
                  <div class="w-8 h-8 bg-brand-gold-dark text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    ★
                  </div>
                  <div class="text-[11px] leading-snug">
                    <div class="font-bold uppercase text-content-primary">QUYỀN LỢI ĐẶC CÁCH</div>
                    <p class="text-content-muted mt-0.5">
                      Được cấp chứng nhận PDF có mã QR xác thực của Ban Quản lý Di tích ATK Định Hóa.
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-surface-card border border-subtle p-4 flex items-start gap-3">
                <span class="text-brand-primary font-bold text-base">📖</span>
                <div class="text-xs">
                  <div class="font-bold text-brand-primary uppercase">NGÂN HÀNG 24 CÂU HỎI</div>
                  <p class="text-content-muted text-[11px] mt-0.5 leading-relaxed">
                    Được biên soạn dựa trên Lịch sử Đảng bộ tỉnh Thái Nguyên và Tư liệu Bảo tàng ATK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MODULE 02: GÓC THUYẾT MINH VIÊN NHÍ CHUẨN 250 TỪ -->
        <div class="space-y-5 pt-4 border-t border-subtle">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div class="space-y-1">
              <div class="text-[11px] font-mono-code font-bold text-brand-olive uppercase">
                🎙 MÔ-ĐUN 02 • THỰC HÀNH DIỄN THUYẾT HỌC SINH THCS
              </div>
              <h3 class="text-xl sm:text-2xl font-display font-extrabold uppercase text-content-primary">
                GÓC THUYẾT MINH VIÊN NHÍ CHUẨN 250 TỪ
              </h3>
              <p class="text-xs text-content-muted">
                Khung luyện tập độc quyền với kịch bản chuẩn 250 từ (~2 phút diễn thuyết), chia 3 đoạn mạch lạc giúp học sinh tự tin giới thiệu di sản hào hùng.
              </p>
            </div>

            <div class="bg-surface-card border border-subtle px-3.5 py-2 text-xs font-mono-code">
              <span class="text-content-muted">MẪU DI TÍCH:</span>
              <strong class="text-brand-primary ml-1">${scriptData.sampleBadge}</strong>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <!-- Left 8 Cols: 3-Paragraph Script -->
            <div class="lg:col-span-8 bg-surface-card border-2 border-subtle p-5 sm:p-6 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
                <div class="flex flex-wrap gap-2">
                  <button type="button" id="eduSpeakAiSampleBtn" class="btn-brand text-xs py-2 px-3">
                    🔊 Nghe Giọng Đọc Mẫu AI
                  </button>
                  <button type="button" id="eduToggleTeleprompterBtn" class="btn-flat-outline text-xs py-2 px-3 ${teleprompterMode ? 'pill-active' : ''}">
                    ▣ Chế Độ Teleprompter
                  </button>
                  <button type="button" id="eduCopyScriptTextBtn" class="btn-flat-outline text-xs py-2 px-3">
                    📋 Sao Chép Kịch Bản
                  </button>
                </div>
                <span class="text-[11px] font-mono-code font-bold text-brand-olive">
                  ● ĐỘ DÀI: 250 TỪ • CHUẨN 02:00 PHÚT
                </span>
              </div>

              <div class="space-y-4 ${teleprompterMode ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}" id="eduJuniorScriptContent">
                <!-- Đoạn 1 -->
                <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#3E5A47] p-4 space-y-1.5">
                  <div class="flex items-center justify-between text-[11px] font-mono-code font-bold text-brand-olive uppercase">
                    <span>ĐOẠN 1 • LỜI CHÀO &amp; GIỚI THIỆU KHÁI QUÁT (50 TỪ)</span>
                    <span>00:00 - 00:25</span>
                  </div>
                  <p class="italic leading-relaxed text-content-primary">${scriptData.part1}</p>
                </div>

                <!-- Đoạn 2 -->
                <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#7A1C1C] p-4 space-y-1.5">
                  <div class="flex items-center justify-between text-[11px] font-mono-code font-bold text-brand-primary uppercase">
                    <span>ĐOẠN 2 • CÂU CHUYỆN LỊCH SỬ &amp; CHIẾN DỊCH VIỆT BẮC 1947 (140 TỪ)</span>
                    <span>00:25 - 01:35</span>
                  </div>
                  <p class="italic leading-relaxed text-content-primary">${scriptData.part2}</p>
                </div>

                <!-- Đoạn 3 -->
                <div class="bg-surface-primary border border-subtle border-l-4 border-l-[#C29A50] p-4 space-y-1.5">
                  <div class="flex items-center justify-between text-[11px] font-mono-code font-bold text-content-primary uppercase">
                    <span>ĐOẠN 3 • LỜI KẾT TỰ HÀO &amp; TRÁCH NHIỆM THẾ HỆ TRẺ (60 TỪ)</span>
                    <span>01:35 - 02:00</span>
                  </div>
                  <p class="italic leading-relaxed text-content-primary">${scriptData.part3}</p>
                </div>
              </div>
            </div>

            <!-- Right 4 Cols: Countdown Timer & Speaking Tips -->
            <div class="lg:col-span-4 space-y-4">
              <div class="bg-surface-card border-2 border-subtle p-5 text-center space-y-4">
                <div class="text-xs font-mono-code font-bold uppercase text-content-muted">
                  ĐỒNG HỒ ĐẾM LÙI THUYẾT MINH
                </div>

                <!-- Square-framed Countdown Display (0px radius) -->
                <div class="w-40 h-40 mx-auto border-8 border-brand bg-surface-primary flex flex-col items-center justify-center">
                  <div id="eduTimerDigits" class="text-3xl font-mono-code font-extrabold text-brand-primary">${mStr}:${sStr}</div>
                  <div class="text-[10px] font-mono-code uppercase text-content-muted mt-1">PHÚT : GIÂY</div>
                </div>

                <div class="flex gap-2">
                  <button type="button" id="eduStartTimerBtn" class="btn-brand text-xs flex-1 py-2.5">
                    ${timerInterval ? "⏸ Tạm Dừng" : "▶ Bắt Đầu Tập"}
                  </button>
                  <button type="button" id="eduResetTimerBtn" class="btn-flat-outline text-xs px-3 py-2.5" title="Đặt lại 02:00">
                    ↻
                  </button>
                </div>

                <div class="text-[11px] font-mono-code space-y-1 pt-2 border-t border-subtle text-left">
                  <div class="flex justify-between">
                    <span class="text-content-muted">Tốc độ lý tưởng:</span>
                    <strong>120 - 130 từ/phút</strong>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-content-muted">Trạng thái nhịp thở:</span>
                    <strong class="text-brand-primary">Ngắt nghỉ đúng dấu phẩy</strong>
                  </div>
                </div>
              </div>

              <div class="bg-surface-card border border-subtle p-4 space-y-2 text-xs">
                <div class="font-bold text-brand-primary uppercase">💡 MẸO THUYẾT MINH HAY</div>
                <ul class="space-y-1.5 text-content-muted leading-relaxed">
                  <li>✓ Mở đầu tươi vui, ánh mắt hướng đều về phía đoàn du khách.</li>
                  <li>✓ Nhấn mạnh cụm từ <em>“Việt Nam Thông tấn xã”</em> và <em>“Thủ đô Gió Ngàn”</em>.</li>
                  <li>✓ Hạ nhẹ giọng ở câu kết để tạo dư âm tự hào sâu lắng.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- MODULE 03: SỔ TAY CHECK-IN & CON DẤU DI SẢN ATK (8 CON DẤU) -->
        <div class="space-y-5 pt-4 border-t border-subtle">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div class="space-y-1">
              <div class="text-[11px] font-mono-code font-bold text-brand-primary uppercase">
                ★ MÔ-ĐUN 03 • HỘ CHIẾU DI SẢN SỐ (DIGITAL HERITAGE PASSPORT)
              </div>
              <h3 class="text-xl sm:text-2xl font-display font-extrabold uppercase text-content-primary">
                SỔ TAY CHECK-IN &amp; CON DẤU DI SẢN ATK
              </h3>
              <p class="text-xs text-content-muted">
                Sưu tập đủ 8 con dấu đỏ truyền thống khi hành hương qua các điểm di tích thực địa để hoàn thành Hộ chiếu Di sản Định Hóa.
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              <button type="button" id="eduExportStampPngBtn" class="btn-flat-outline text-xs">
                ⬇ Tải Ảnh Tem (.PNG)
              </button>
              <button type="button" id="eduSaveLocalDeviceBtn" class="btn-flat-outline text-xs">
                💾 Lưu Bộ Nhớ Máy
              </button>
              <button type="button" id="eduIssueAmbassadorCertBtn" class="btn-brand text-xs">
                ★ Xuất Chứng Nhận Đại Sứ
              </button>
            </div>
          </div>

          <!-- 8 Stamp Cards Grid (4x2) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${data.relics.map((r) => {
              const st = stampsState[r.id];
              const isVerified = Boolean(st && st.verified);
              const numTag = "#" + String(r.order).padStart(2, "0");

              if (isVerified) {
                return `
                  <div class="bg-surface-card border-2 border-subtle p-4 flex flex-col justify-between space-y-4">
                    <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted">
                      <span class="font-bold text-brand-olive">${numTag} • ĐÃ XÁC THỰC</span>
                      <span>★</span>
                    </div>

                    <!-- Square Red Heritage Stamp Box (Rotated slightly like physical stamp, 0px border-radius) -->
                    <div class="my-2 mx-auto w-36 h-36 border-4 border-[#7A1C1C] bg-[#FAF5EB] p-2.5 flex flex-col items-center justify-center text-center text-[#7A1C1C] stamp-box-rotate">
                      <div class="text-[8px] font-mono-code font-bold uppercase tracking-wider">DI TÍCH ${r.rankBadge}</div>
                      <div class="text-[9px] font-bold mt-0.5">★ DẤU TÍCH ★</div>
                      <div class="font-display font-extrabold text-xs uppercase my-1 border-y border-[#7A1C1C] py-1 w-full">
                        ${r.stampBadgeLine}
                      </div>
                      <div class="text-[8px] font-mono-code uppercase">ĐỊNH HÓA - THÁI NGUYÊN</div>
                    </div>

                    <div class="text-center space-y-1 pt-2 border-t border-subtle">
                      <h4 class="font-display font-bold text-sm text-content-primary">${r.stampShortTitle}</h4>
                      <div class="text-[10px] font-mono-code text-content-muted">
                        Mã xác thực: <strong>${r.stampVerifyCode}</strong>
                      </div>
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="bg-surface-primary border-2 border-dashed border-subtle p-4 flex flex-col justify-between space-y-4">
                    <div class="flex items-center justify-between text-[10px] font-mono-code text-content-muted">
                      <span>${numTag} • CHỜ CHECK-IN</span>
                      <span>○</span>
                    </div>

                    <div class="my-2 mx-auto w-32 h-32 border-2 border-dashed border-subtle bg-surface-card flex flex-col items-center justify-center text-center p-3 text-content-muted">
                      <div class="text-lg">⌖</div>
                      <div class="text-[9px] font-mono-code uppercase mt-1">CHƯA XÁC THỰC THỰC ĐỊA</div>
                    </div>

                    <div class="text-center space-y-2 pt-2 border-t border-subtle">
                      <h4 class="font-display font-bold text-sm text-content-primary">${r.stampShortTitle}</h4>
                      <button type="button" class="edu-stamp-now-btn btn-flat-outline text-[11px] w-full py-1.5" data-stamp-relic="${r.id}">
                        ⌖ Mô Phỏng Đóng Dấu
                      </button>
                    </div>
                  </div>
                `;
              }
            }).join("")}
          </div>

          <!-- GPS Geofencing Bar -->
          <div class="bg-surface-card border border-subtle p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-[#D9EFE2] text-[#22543D] font-bold flex items-center justify-center shrink-0">
                🛰
              </div>
              <div>
                <div class="text-xs font-bold text-brand-primary uppercase">
                  XÁC THỰC CON DẤU BẰNG BÁN KÍNH GPS (GEOFENCING)
                </div>
                <p class="text-xs text-content-muted mt-0.5">
                  Khi đến thực địa trong phạm vi 150 mét quanh cột mốc di tích, hệ thống sẽ tự động quét mã và cấp chứng thư số đóng dấu vào Sổ tay.
                </p>
              </div>
            </div>
            <button type="button" id="eduToggleGpsGeofenceBtn" class="btn-olive text-xs shrink-0">
              ${gpsGeofencingActive ? "✓ Đã Bật Định Vị GPS Thực Địa" : "⌖ Bật Định Vị GPS"}
            </button>
          </div>
        </div>
      </div>
    `;

    bindEduHubEvents(containerId);
  }

  function bindEduHubEvents(containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const data = window.ATK_PORTAL_DATA;

    root.querySelectorAll(".edu-quiz-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        activeQuizRelicId = tab.getAttribute("data-quiz-relic");
        renderEduHubSection(containerId);
      });
    });

    root.querySelectorAll(".edu-quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-opt-key");
        const isCorrect = btn.getAttribute("data-opt-correct") === "true";
        if (!answeredMap[activeQuizRelicId] && isCorrect) {
          quizScore = Math.min(100, quizScore + 10);
        }
        answeredMap[activeQuizRelicId] = key;
        renderEduHubSection(containerId);
      });
    });

    const resetBtn = root.querySelector("#eduResetQuizQuestionBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        delete answeredMap[activeQuizRelicId];
        renderEduHubSection(containerId);
      });
    }

    const nextBtn = root.querySelector("#eduNextQuizQuestionBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const idx = data.relics.findIndex((r) => r.id === activeQuizRelicId);
        const nextIdx = (idx + 1) % data.relics.length;
        activeQuizRelicId = data.relics[nextIdx].id;
        renderEduHubSection(containerId);
      });
    }

    // Junior script buttons
    const speakSampleBtn = root.querySelector("#eduSpeakAiSampleBtn");
    if (speakSampleBtn) {
      speakSampleBtn.addEventListener("click", () => {
        const s = data.juniorScripts["DH-QG-01"];
        window.ATKAppController.speakVietnamese(s.part1 + " " + s.part2 + " " + s.part3, 1.0);
      });
    }

    const teleBtn = root.querySelector("#eduToggleTeleprompterBtn");
    if (teleBtn) {
      teleBtn.addEventListener("click", () => {
        teleprompterMode = !teleprompterMode;
        renderEduHubSection(containerId);
      });
    }

    const copyScriptBtn = root.querySelector("#eduCopyScriptTextBtn");
    if (copyScriptBtn) {
      copyScriptBtn.addEventListener("click", () => {
        const s = data.juniorScripts["DH-QG-01"];
        const full = s.part1 + "\n\n" + s.part2 + "\n\n" + s.part3;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(full).catch(() => {});
        }
        window.ATKAppController.showToast("Đã sao chép kịch bản 250 từ vào bộ nhớ tạm!");
      });
    }

    const startTimerBtn = root.querySelector("#eduStartTimerBtn");
    if (startTimerBtn) {
      startTimerBtn.addEventListener("click", () => {
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
          renderEduHubSection(containerId);
          return;
        }
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            const digits = document.getElementById("eduTimerDigits");
            if (digits) {
              const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
              const s = String(timerSeconds % 60).padStart(2, "0");
              digits.textContent = m + ":" + s;
            }
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            window.ATKAppController.showToast("Đã hoàn thành 02:00 phút diễn thuyết!");
            renderEduHubSection(containerId);
          }
        }, 1000);
        renderEduHubSection(containerId);
      });
    }

    const resetTimerBtn = root.querySelector("#eduResetTimerBtn");
    if (resetTimerBtn) {
      resetTimerBtn.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timerSeconds = 120;
        renderEduHubSection(containerId);
      });
    }

    // Stamp simulation buttons
    root.querySelectorAll(".edu-stamp-now-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const relicId = btn.getAttribute("data-stamp-relic");
        const relic = data.relics.find((r) => r.id === relicId);
        const state = getStampsState();
        state[relicId] = {
          verified: true,
          code: relic ? relic.stampVerifyCode : "ATK-VERIFIED",
          timestamp: new Date().toLocaleDateString("vi-VN")
        };
        saveStampsState(state);
        renderEduHubSection(containerId);
        window.ATKAppController.refreshHeaderStampCounter();
        window.ATKAppController.showToast("Đã đóng dấu xác thực điểm di tích: " + (relic ? relic.name : relicId));
      });
    });

    const pngBtn = root.querySelector("#eduExportStampPngBtn");
    if (pngBtn) {
      pngBtn.addEventListener("click", () => {
        window.ATKAppController.exportPassportCertificate();
      });
    }

    const saveLocalBtn = root.querySelector("#eduSaveLocalDeviceBtn");
    if (saveLocalBtn) {
      saveLocalBtn.addEventListener("click", () => {
        saveStampsState(getStampsState());
        window.ATKAppController.showToast("Đã đồng bộ Sổ tay Check-in vào bộ nhớ thiết bị (LocalStorage)!");
      });
    }

    const certBtn = root.querySelector("#eduIssueAmbassadorCertBtn");
    if (certBtn) {
      certBtn.addEventListener("click", () => {
        window.ATKAppController.exportPassportCertificate();
      });
    }

    const gpsBtn = root.querySelector("#eduToggleGpsGeofenceBtn");
    if (gpsBtn) {
      gpsBtn.addEventListener("click", () => {
        gpsGeofencingActive = !gpsGeofencingActive;
        renderEduHubSection(containerId);
        window.ATKAppController.showToast(
          gpsGeofencingActive
            ? "Đã bật xác thực bán kính GPS (150m quanh mốc di tích ATK Định Hóa)"
            : "Đã tắt định vị GPS thực địa"
        );
      });
    }
  }

  return {
    render: renderEduHubSection,
    getStampsState: getStampsState
  };
})();
