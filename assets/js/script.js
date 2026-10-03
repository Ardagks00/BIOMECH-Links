// IEEE YTU BIOMECH link sayfası: paylaş penceresi ve masaüstü QR kodu.
// Pencere ve QR kodu bu dosya tarafından oluşturulur; sayfadaki link kartları
// çoğaltılsa ya da değiştirilse de (örn. Bootstrap Studio'da) kendiliğinden çalışır.
function initLinkPage() {
  const enc = encodeURIComponent;
  const pageUrl = () => location.origin + location.pathname;
  const clean = (s) => s.replace(/\s+/g, " ").trim();
  const pageTitle = () => clean(document.querySelector(".title")?.textContent || document.title);

  /* ---------- Paylaş penceresi ---------- */

  const CHEVRON = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="m1.7 4 .36.35L7.71 10l5.64-5.65.36-.35.7.7-.35.36-6 6h-.7l-6-6L1 4.71 1.7 4Z"/></svg>';

  const ITEMS = [
    ["x", "X", '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#000"/><path d="M11.559 12.251 20.825 25.1736 11.5 35.6775h2.1l8.163-9.1981 6.596 9.1992H35.5L25.712 22.029 34.392 12.25h-2.099l-7.518 8.4711L18.7 12.251zm3.086 1.6115h3.28l14.488 20.2036h-3.28L14.644 13.8635z" fill="#fff"/></svg>'],
    ["facebook", "Facebook", '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path d="M18 12a6 6 0 1 0-12 0 6 6 0 0 0 5.063 5.928v-4.193H9.539V12h1.524v-1.322c0-1.503.895-2.334 2.266-2.334.656 0 1.343.117 1.343.117v1.477h-.757c-.745 0-.977.463-.977.937V12h1.664l-.267 1.735h-1.398v4.193A6 6 0 0 0 18 12" fill="#fff"/></svg>'],
    ["whatsapp", "WhatsApp", '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#00E676"/><path d="M16.201 7.746a5.9 5.9 0 0 0-4.205-1.745c-3.276 0-5.945 2.669-5.948 5.945 0 1.049.274 2.07.793 2.973L6 18.001l3.153-.826a5.95 5.95 0 0 0 2.843.724h.003c3.275 0 5.944-2.669 5.947-5.948A5.92 5.92 0 0 0 16.2 7.746m-4.205 9.146c-.89 0-1.76-.24-2.518-.69l-.18-.108-1.87.49.5-1.824-.118-.188a4.9 4.9 0 0 1-.755-2.63 4.95 4.95 0 0 1 4.944-4.937c1.32 0 2.56.516 3.495 1.448a4.92 4.92 0 0 1 1.445 3.496 4.95 4.95 0 0 1-4.943 4.943m2.711-3.7a27 27 0 0 0-1.015-.485c-.137-.049-.236-.074-.334.074-.1.148-.384.485-.47.582-.085.1-.174.11-.322.037s-.627-.231-1.195-.739a4.5 4.5 0 0 1-.827-1.029c-.085-.148-.008-.228.066-.302.066-.066.148-.174.223-.26.074-.085.1-.148.148-.248s.025-.185-.012-.259-.333-.807-.459-1.103c-.12-.291-.242-.251-.333-.254C10.09 9.2 9.99 9.2 9.892 9.2c-.1 0-.26.037-.397.185-.136.149-.519.508-.519 1.24 0 .733.534 1.438.608 1.537.074.1 1.046 1.6 2.537 2.244.354.154.63.245.847.314.356.114.678.097.935.06.285-.043.878-.36 1.004-.707.122-.348.122-.645.085-.707-.037-.063-.137-.1-.285-.174" fill="#fff"/></svg>'],
    ["linkedin", "LinkedIn", '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#0A66C2"/><path d="M8.656 10.132h-2.46V18h2.46zm.221-2.705A1.417 1.417 0 0 0 7.47 6h-.044a1.426 1.426 0 0 0 0 2.852A1.416 1.416 0 0 0 8.877 7.47zM18 13.22c0-2.365-1.505-3.285-3-3.285a2.8 2.8 0 0 0-2.488 1.269h-.07v-1.072h-2.31V18h2.458v-4.186a1.633 1.633 0 0 1 1.476-1.76h.093c.782 0 1.362.492 1.362 1.731V18h2.46z" fill="#fff"/></svg>'],
    ["messenger", "Messenger", '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="messenger-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.3 17.9) scale(13 13)"><stop stop-color="#0099FF"/><stop offset="0.6" stop-color="#A033FF"/><stop offset="0.93" stop-color="#FF5280"/><stop offset="1" stop-color="#FF7061"/></radialGradient></defs><circle cx="12" cy="12" r="12" fill="#F1F1F1"/><path d="M12 6.002c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305a.48.48 0 0 1 .162.342l.032 1.067a.48.48 0 0 0 .674.424l1.19-.525a.48.48 0 0 1 .321-.024c.547.15 1.13.23 1.737.23 3.38 0 6-2.475 6-5.82 0-3.343-2.62-5.82-6-5.82" fill="url(#messenger-grad)"/><path d="m8.397 13.524 1.762-2.796a.9.9 0 0 1 1.302-.24l1.402 1.05a.36.36 0 0 0 .433 0L15.19 10.1c.252-.192.582.11.413.379l-1.763 2.796a.9.9 0 0 1-1.301.24l-1.402-1.051a.36.36 0 0 0-.434.001L8.81 13.903c-.252.191-.582-.11-.413-.38" fill="#fff"/></svg>'],
    ["snapchat", "Snapchat", '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#FFFC00"/><path fill="#fff" d="M18.78 15.392c-.058-.193-.337-.329-.337-.329l-.07-.036a5.4 5.4 0 0 1-1.224-.802 4.2 4.2 0 0 1-.71-.809 3 3 0 0 1-.391-.806c-.026-.104-.022-.146 0-.2a.3.3 0 0 1 .097-.11c.157-.111.41-.275.565-.375.135-.087.25-.162.318-.21.218-.152.368-.308.456-.476a.82.82 0 0 0 .039-.69c-.12-.317-.416-.505-.792-.505q-.126 0-.255.027c-.216.047-.42.124-.59.19a.018.018 0 0 1-.026-.018c.019-.423.04-.992-.008-1.533a3.8 3.8 0 0 0-.307-1.26 3.4 3.4 0 0 0-.548-.821 3.4 3.4 0 0 0-.867-.697 4 4 0 0 0-2.022-.515 4 4 0 0 0-2.02.515c-.45.257-.737.547-.868.697-.168.193-.383.46-.548.82s-.266.771-.307 1.261a12 12 0 0 0-.009 1.533c0 .014-.012.024-.026.018a4 4 0 0 0-.59-.19 1.2 1.2 0 0 0-.256-.027c-.375 0-.67.188-.791.505a.82.82 0 0 0 .039.69c.089.168.237.324.455.476.067.048.183.123.318.21.151.099.397.258.556.368a.3.3 0 0 1 .106.117c.023.055.027.097-.002.208a3 3 0 0 1-.39.798c-.19.29-.43.561-.709.809-.347.306-.76.577-1.224.802l-.077.04s-.278.142-.33.325c-.078.271.129.525.339.661.344.223.763.342 1.006.407q.102.027.185.052a.4.4 0 0 1 .16.093c.047.06.052.136.07.22.025.143.085.32.262.442.194.133.44.143.752.156.326.012.732.027 1.197.182.215.07.411.191.636.33.472.29 1.06.651 2.062.651 1.004 0 1.596-.362 2.07-.654.226-.137.419-.257.63-.326.465-.154.87-.17 1.197-.182.312-.012.558-.02.752-.156.19-.13.243-.325.268-.47.014-.072.023-.138.064-.19a.36.36 0 0 1 .154-.09q.085-.027.192-.055c.243-.065.548-.142.92-.351.446-.254.477-.565.43-.72Z"/><path fill="#000" d="M19.168 15.242c-.1-.269-.288-.412-.502-.531a1 1 0 0 0-.108-.057l-.195-.099c-.667-.354-1.19-.801-1.55-1.33a3 3 0 0 1-.267-.472c-.03-.09-.03-.14-.007-.185a.3.3 0 0 1 .086-.089c.115-.076.233-.153.314-.204.143-.093.257-.167.329-.217.275-.191.466-.395.586-.623.17-.32.19-.688.06-1.032-.18-.478-.634-.775-1.18-.775q-.173 0-.344.038l-.089.02a10 10 0 0 0-.031-1.01c-.103-1.195-.521-1.82-.957-2.32a3.8 3.8 0 0 0-.974-.784A4.4 4.4 0 0 0 12.11 5c-.815 0-1.565.192-2.227.57a3.8 3.8 0 0 0-.975.785c-.436.499-.854 1.125-.957 2.32-.029.338-.036.685-.032 1.01l-.089-.02a1.6 1.6 0 0 0-.343-.038c-.547 0-1 .297-1.18.775-.13.344-.11.71.06 1.031.12.228.312.432.586.624.073.051.186.125.329.217.078.05.19.123.301.197a.3.3 0 0 1 .098.097c.023.047.023.098-.012.193-.058.13-.143.287-.262.462-.354.518-.861.957-1.507 1.307-.343.182-.698.303-.848.711-.114.308-.039.66.248.955q.14.152.364.275c.353.195.653.29.889.356a.6.6 0 0 1 .18.08c.105.092.09.23.23.434.084.126.182.212.262.268.293.202.624.215.973.229.316.012.674.026 1.082.16.17.056.346.165.549.29.489.301 1.16.712 2.28.712 1.122 0 1.795-.414 2.288-.715.203-.124.378-.232.542-.286.408-.135.766-.149 1.082-.161.35-.014.678-.027.973-.23.092-.063.208-.167.3-.326.1-.17.099-.291.193-.373a.6.6 0 0 1 .17-.077 4 4 0 0 0 .9-.36c.16-.087.284-.183.382-.292l.005-.004c.267-.292.336-.632.224-.934m-.996.535c-.608.336-1.012.3-1.326.501-.267.173-.11.543-.303.677-.239.165-.943-.011-1.852.288-.75.249-1.23.961-2.58.961-1.354 0-1.82-.71-2.58-.96-.91-.3-1.615-.124-1.853-.29-.193-.133-.036-.503-.303-.676-.313-.202-.718-.166-1.326-.501-.387-.214-.168-.346-.039-.408 2.203-1.065 2.553-2.712 2.57-2.836.019-.147.04-.264-.123-.415-.157-.146-.855-.578-1.048-.712-.321-.224-.461-.447-.357-.722.072-.19.25-.261.437-.261q.089 0 .175.019c.352.076.693.253.89.3q.042.01.073.01c.105 0 .141-.053.134-.174-.022-.385-.078-1.134-.016-1.836.083-.963.394-1.441.763-1.865.178-.202 1.011-1.083 2.604-1.083 1.597 0 2.426.88 2.604 1.083.369.423.68.9.763 1.865.061.702.009 1.451-.016 1.836-.009.126.03.174.134.174a.3.3 0 0 0 .073-.01c.197-.047.538-.224.89-.3a1 1 0 0 1 .175-.02c.187 0 .365.073.437.262.104.275-.037.498-.357.722-.193.134-.891.566-1.048.712-.163.15-.142.267-.122.415.015.124.366 1.77 2.569 2.836.125.062.345.194-.042.408"/></svg>'],
    ["email", "E-posta", '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#60696C"/><path d="M24.154 26.568a.5.5 0 0 0 .692 0l1.416-1.354 5.192 4.976a.5.5 0 0 0 .692-.722l-5.16-4.946 5.228-4.997a.5.5 0 0 0-.691-.723l-5.582 5.336-.048.045-1.393 1.332-1.386-1.325-.062-.059-5.575-5.329a.5.5 0 1 0-.691.723l5.229 4.998-5.162 4.947a.5.5 0 1 0 .695.721l5.19-4.976z" fill="#fff"/><path d="M35 29.318a3.683 3.683 0 0 1-3.679 3.68H17.679A3.683 3.683 0 0 1 14 29.317v-9.642a3.683 3.683 0 0 1 3.679-3.679h13.642A3.683 3.683 0 0 1 35 19.677zm-17.321-12.32A2.68 2.68 0 0 0 15 19.675v9.642a2.68 2.68 0 0 0 2.679 2.68h13.642A2.68 2.68 0 0 0 34 29.317v-9.642a2.68 2.68 0 0 0-2.679-2.679z" fill="#fff"/></svg>'],
  ];

  const targets = {
    x: (u, t) => `https://x.com/intent/tweet?text=${enc(`${t} - ${u}`)}`,
    facebook: (u) => `https://www.facebook.com/sharer.php?u=${enc(u)}`,
    whatsapp: (u, t) => `https://wa.me/?text=${enc(`${t} - ${u}`)}`,
    linkedin: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${enc(u)}`,
    messenger: () => "https://www.messenger.com/new",
    snapchat: (u) => `snapchat://creativeKitWeb/camera/1?attachmentUrl=${enc(u)}`,
    email: (u, t) => `mailto:?subject=${enc(t)}&body=${enc(`${t} - ${u}`)}`,
  };

  document.body.insertAdjacentHTML("beforeend", `
<dialog class="sheet" id="share" aria-labelledby="share-title">
  <div class="sheet-inner">
    <div class="sheet-head">
      <p class="sheet-title" id="share-title"></p>
      <button class="sheet-close" type="button" aria-label="Kapat">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.354 3.354 13.707 3 13 2.293l-.354.353zM2.647 12.647 2.293 13l.707.707.354-.353zm.707-10L3 2.292 2.293 3l.354.354zm9.293 10.707.353.353.707-.707-.353-.354zm0-10.708-10 10 .707.708 10-10zm-10 .708 10 10 .707-.707-10-10z"/></svg>
      </button>
    </div>
    <div class="sheet-preview">
      <svg class="og-preview" id="share-og" viewBox="0 0 1200 630" role="img">
        <defs><clipPath id="og-avatar-clip"><circle cx="600" cy="225" r="145"/></clipPath></defs>
        <rect width="1200" height="630" fill="#2d2d2d"/>
        <circle cx="600" cy="225" r="145" fill="#fff"/>
        <image x="455" y="80" width="290" height="290" preserveAspectRatio="xMidYMid slice" clip-path="url(#og-avatar-clip)"/>
        <text x="600" y="481" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="800" font-size="61"></text>
        <text x="600" y="535" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="500" font-size="40"></text>
      </svg>
      <a class="link-card" id="share-card" target="_blank" rel="noopener" hidden>
        <img alt="" width="120" height="120">
        <span class="link-card-text">
          <span class="link-card-title"></span>
          <span class="link-card-url"></span>
        </span>
      </a>
    </div>
    <div class="share-list">
      <button class="share-arrow prev" type="button" aria-label="Sola kaydır" hidden>${CHEVRON}</button>
      <button class="share-arrow next" type="button" aria-label="Sağa kaydır" hidden>${CHEVRON}</button>
      <div class="share-scroll">
        <button class="share-item" type="button" data-share="copy">
          <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#E0E2D9"/><path class="i-copy" d="m23.863 18.214-.422.489-.757-.654.434-.503.025-.027a5.19 5.19 0 1 1 7.337 7.34l-.025.023-.5.435-.657-.755.487-.423a4.19 4.19 0 0 0-5.922-5.925m3.654 2.975-.354.354-5.626 5.626-.353.353-.708-.707.354-.353 5.626-5.627.354-.353zm-8.81 2.25-.481.425a4.16 4.16 0 0 0 .01 5.91 4.25 4.25 0 0 0 5.953.026l.349-.47.802.597-.372.5-.05.058a5.25 5.25 0 0 1-7.385 0 5.16 5.16 0 0 1 0-7.342l.02-.02.491-.433z"/><path class="i-done" d="m17.5 24.5 4.5 4.5 8.5-9" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" hidden/></svg>
          <span>Linki kopyala</span>
        </button>
        ${ITEMS.map(([key, label, icon]) =>
          `<a class="share-item" data-share="${key}"${key === "email" ? "" : ' target="_blank" rel="noopener"'}>${icon}<span>${label}</span></a>`).join("")}
      </div>
    </div>
  </div>
</dialog>`);

  const dialog = document.getElementById("share");
  const titleEl = document.getElementById("share-title");
  const og = document.getElementById("share-og");
  const card = document.getElementById("share-card");
  const scroller = dialog.querySelector(".share-scroll");
  const prevBtn = dialog.querySelector(".share-arrow.prev");
  const nextBtn = dialog.querySelector(".share-arrow.next");
  const copyBtn = dialog.querySelector('[data-share="copy"]');
  const copyLabel = copyBtn.querySelector("span");
  let current = { url: "", text: "" };
  let copyTimer;

  function resetCopy() {
    clearTimeout(copyTimer);
    copyLabel.textContent = "Linki kopyala";
    copyBtn.querySelector(".i-copy").removeAttribute("hidden");
    copyBtn.querySelector(".i-done").setAttribute("hidden", "");
  }

  function updateArrows() {
    const max = scroller.scrollWidth - scroller.clientWidth;
    prevBtn.hidden = scroller.scrollLeft <= 1;
    nextBtn.hidden = scroller.scrollLeft >= max - 1;
  }

  function openShare({ url, text, title, link }) {
    current = { url, text };
    titleEl.textContent = title;
    // SVG öğelerinde .hidden özelliği yok; bu yüzden attribute ile değiştiriliyor.
    og.toggleAttribute("hidden", !!link);
    card.toggleAttribute("hidden", !link);
    if (link) {
      card.href = url;
      card.querySelector("img").src = link.thumb;
      card.querySelector(".link-card-title").textContent = link.title;
      card.querySelector(".link-card-url").textContent = url.replace(/^https?:\/\//, "");
    } else {
      // Linktree'deki profil kartının aynısı: profil fotoğrafı, başlık ve sitenin adresi.
      const avatar = document.querySelector(".avatar");
      og.querySelector("image").setAttribute("href", avatar ? avatar.currentSrc || avatar.src : "");
      const [titleText, hostText] = og.querySelectorAll("text");
      titleText.textContent = text;
      hostText.textContent = location.host;
      og.setAttribute("aria-label", `${text} - ${location.host}`);
    }
    for (const a of dialog.querySelectorAll("a[data-share]")) {
      a.href = targets[a.dataset.share](url, text);
    }
    resetCopy();
    scroller.scrollLeft = 0;
    dialog.showModal();
    updateArrows();
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#share-page")) {
      e.preventDefault();
      openShare({ url: pageUrl(), text: pageTitle(), title: "Bu sayfayı paylaş" });
      return;
    }
    const more = e.target.closest(".link-more");
    if (more) {
      e.preventDefault();
      const item = more.closest(".link");
      const label = clean(item.querySelector(".link-label").textContent);
      const thumb = item.querySelector(".thumb img");
      openShare({
        url: item.querySelector(".link-main").href,
        text: label,
        title: "Bağlantıyı paylaş",
        link: { title: label, thumb: thumb ? thumb.currentSrc || thumb.src : "" },
      });
    }
  });

  // role="button" olan linkler Boşluk tuşuyla da açılsın.
  document.addEventListener("keydown", (e) => {
    if (e.key === " " && e.target.matches('a[role="button"]')) {
      e.preventDefault();
      e.target.click();
    }
  });

  for (const more of document.querySelectorAll(".link-more")) {
    const label = more.closest(".link")?.querySelector(".link-label");
    if (label) more.setAttribute("aria-label", `Bağlantıyı paylaş: ${clean(label.textContent)}`);
  }

  dialog.querySelector(".sheet-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(current.url);
    } catch {
      const tmp = document.createElement("textarea");
      tmp.value = current.url;
      tmp.style.cssText = "position:fixed;opacity:0";
      dialog.append(tmp);
      tmp.select();
      document.execCommand("copy");
      tmp.remove();
    }
    copyLabel.textContent = "Kopyalandı!";
    copyBtn.querySelector(".i-copy").setAttribute("hidden", "");
    copyBtn.querySelector(".i-done").removeAttribute("hidden");
    clearTimeout(copyTimer);
    copyTimer = setTimeout(resetCopy, 2000);
  });

  scroller.addEventListener("scroll", updateArrows, { passive: true });
  prevBtn.addEventListener("click", () => scroller.scrollBy({ left: -scroller.clientWidth * 0.8 }));
  nextBtn.addEventListener("click", () => scroller.scrollBy({ left: scroller.clientWidth * 0.8 }));

  /* ---------- Masaüstü "Mobilde görüntüle" QR kodu ---------- */

  document.body.insertAdjacentHTML("beforeend", '<div class="qr" id="qr" hidden><p>Mobilde görüntüle</p></div>');
  const qrBox = document.getElementById("qr");
  const wide = matchMedia("(min-width: 1022px)");
  let qrLoading = false;

  // Linktree'deki gibi: yuvarlatılmış modüller + yuvarlak köşeli konum işaretleri, beyaz renk.
  function renderQR() {
    let qr;
    try {
      qr = qrcode(5, "M");
      qr.addData(pageUrl());
      qr.make();
    } catch {
      qr = qrcode(0, "M");
      qr.addData(pageUrl());
      qr.make();
    }
    const n = qr.getModuleCount();
    const size = n * 2;
    const dark = (r, c) => r >= 0 && c >= 0 && r < n && c < n && qr.isDark(r, c);
    const inFinder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
    let d = "";
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (!dark(r, c) || inFinder(r, c)) continue;
        const t = !dark(r - 1, c), b = !dark(r + 1, c), l = !dark(r, c - 1), rt = !dark(r, c + 1);
        const tl = t && l ? 1 : 0, tr = t && rt ? 1 : 0, br = b && rt ? 1 : 0, bl = b && l ? 1 : 0;
        const x = c * 2, y = r * 2;
        d += `M${x + tl} ${y}H${x + 2 - tr}` + (tr ? "a1 1 0 0 1 1 1" : "") +
             `V${y + 2 - br}` + (br ? "a1 1 0 0 1-1 1" : "") +
             `H${x + bl}` + (bl ? "a1 1 0 0 1-1-1" : "") +
             `V${y + tl}` + (tl ? "a1 1 0 0 1 1-1" : "") + "Z";
      }
    }
    const eye = (x, y) =>
      `<rect x="${x + 4}" y="${y + 4}" width="6" height="6" rx="1"/>` +
      `<path transform="translate(${x} ${y})" fill-rule="evenodd" d="M11 0H3C1.34 0 0 1.34 0 3v8c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3Zm1 10c0 1.1-.89 2-2 2H4c-1.1 0-2-.89-2-2V4c0-1.1.89-2 2-2h6.01c1.1 0 2 .89 2 2V10Z"/>`;
    const off = size - 14;
    qrBox.insertAdjacentHTML("beforeend",
      `<svg viewBox="0 0 ${size} ${size}" fill="#fff" role="img" aria-label="Bu sayfanın QR kodu">` +
      `<path d="${d}"/>${eye(0, 0)}${eye(off, 0)}${eye(0, off)}</svg>`);
    qrBox.hidden = false;
  }

  function loadQR() {
    if (qrLoading) return;
    qrLoading = true;
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    s.integrity = "sha384-mZT2gIty7ZDdOGkxfP6joZcYdMW1Jvj9dRlfpTmaJAKKXTqzygtB22k7FLe+KZC1";
    s.crossOrigin = "anonymous";
    s.referrerPolicy = "no-referrer";
    s.onload = renderQR;
    document.head.append(s);
  }

  if (wide.matches) loadQR();
  else wide.addEventListener("change", (e) => { if (e.matches) loadQR(); });
}

// Betik <head> içine konsa bile sayfa hazır olunca çalışsın.
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initLinkPage);
else initLinkPage();
