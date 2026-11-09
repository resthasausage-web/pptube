/**
 * ============================================================================
 * PPTUBE - MODERN VIDEO STREAMING PLATFORM
 * Pure Vanilla JavaScript
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. DATA MASTER VIDEO PPTUBE
// Video 1 -> Kategori Indonesia
// Video 2 -> Kategori Jepang
// Video 3 -> Kategori Korea
// ----------------------------------------------------------------------------
const pptubeVideos = [
  // ==================== VIDEO 1: INDONESIA ====================
  {
    id: 'user-id-01',
    title: 'Video Pilihan Indonesia: Ragam Pesona Budaya & Wisata Nusantara',
    category: 'indonesia',
    categoryName: 'Indonesia',
    duration: '00:15',
    durationSec: 15,
    views: '52.4K',
    viewsCount: 52400,
    date: 'Hari ini',
    quality: '1080p HD',
    fileSize: '1.0 MB',
    thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'videos/video_indonesia.mp4',
    description: 'Video unggulan pilihan kategori Indonesia. Menampilkan visual ragam pesona budaya nusantara dengan audio jernih dan kualitas optimal.',
    tags: ['Indonesia', 'Nusantara', 'TrendingIndo', 'KaryaKreator'],
    isLatest: true,
    isTrending: true
  },

  // ==================== VIDEO 2: JEPANG ====================
  {
    id: 'user-jp-02',
    title: 'Video Pilihan Jepang: Suasana Estetik & Pesona Kota Tokyo Jepang',
    category: 'jepang',
    categoryName: 'Jepang',
    duration: '00:45',
    durationSec: 45,
    views: '78.9K',
    viewsCount: 78900,
    date: 'Hari ini',
    quality: '1080p HD',
    fileSize: '3.5 MB',
    thumbnail: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'videos/video_jepang.mp4',
    description: 'Video unggulan pilihan kategori Jepang. Menampilkan nuansa estetik khas Negeri Sakura, gemerlap kota Tokyo, dan visual menawan.',
    tags: ['Jepang', 'TokyoAesthetic', 'JapanVibes', 'TrendingJepang'],
    isLatest: true,
    isTrending: true
  },

  // ==================== VIDEO 3: KOREA ====================
  {
    id: 'user-kr-03',
    title: 'Video Pilihan Korea: Momen Seru & Tren Terkini Korea Selatan',
    category: 'korea',
    categoryName: 'Korea',
    duration: '00:22',
    durationSec: 22,
    views: '64.1K',
    viewsCount: 64100,
    date: 'Hari ini',
    quality: '1080p HD',
    fileSize: '1.4 MB',
    thumbnail: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'videos/video_korea.mp4',
    description: 'Video unggulan pilihan kategori Korea. Menghadirkan tren seru dan gaya visual modern khas budaya populer Korea Selatan.',
    tags: ['Korea', 'KCulture', 'SeoulVibe', 'TrendingKorea'],
    isLatest: true,
    isTrending: true
  },

  // ==================== KOLEKSI PELENGKAP KATALOG ====================
  {
    id: 'hj-01',
    title: 'Modern Hijab Lookbook 2026: Inspirasi OOTD Elegan, Minimalis & Modest',
    category: 'hijab',
    categoryName: 'Hijab',
    duration: '12:15',
    durationSec: 735,
    views: '67.8K',
    viewsCount: 67800,
    date: 'Kemarin',
    quality: '1080p HD',
    fileSize: '92 MB',
    thumbnail: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    description: 'Koleksi inspirasi busana modest kontemporer dengan perpaduan warna earth tone, siluet modern, dan gaya pashmina simpel nan elegan untuk aktivitas harian.',
    tags: ['Hijab', 'HijabOOTD', 'ModestFashion', 'Style2026'],
    isLatest: true,
    isTrending: true
  },
  {
    id: 'id-02',
    title: 'Jakarta Street Food Night Tour: Kuliner Legendaris Pasar Lama',
    category: 'indonesia',
    categoryName: 'Indonesia',
    duration: '11:10',
    durationSec: 670,
    views: '32.1K',
    viewsCount: 32100,
    date: '2 hari lalu',
    quality: '1080p HD',
    fileSize: '88 MB',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Menelusuri kelezatan kuliner malam khas Jakarta dan sekitarnya: sate legendaris, martabak manis istimewa, hingga aneka jajanan pasar otentik.',
    tags: ['StreetFood', 'Jakarta', 'Kuliner', 'FoodVlog'],
    isLatest: false,
    isTrending: false
  },
  {
    id: 'kr-02',
    title: 'K-Style Cooking Show: Resep Rahasia Tteokbokki & Ayam Goreng Korea Renyah',
    category: 'korea',
    categoryName: 'Korea',
    duration: '09:18',
    durationSec: 558,
    views: '54.0K',
    viewsCount: 54000,
    date: '3 hari lalu',
    quality: '1080p HD',
    fileSize: '72 MB',
    thumbnail: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    description: 'Panduan langkah demi langkah memasak sajian populer khas Korea Selatan dengan bumbu gochujang otentik dan tekstur super lezat.',
    tags: ['KoreanFood', 'Resep', 'Mukbang', 'Tteokbokki'],
    isLatest: false,
    isTrending: false
  },
  {
    id: 'jp-02',
    title: 'Kyoto Hidden Temples & Bamboo Forest: Ketenangan Tradisional Jepang',
    category: 'jepang',
    categoryName: 'Jepang',
    duration: '13:05',
    durationSec: 785,
    views: '41.3K',
    viewsCount: 41300,
    date: '3 hari lalu',
    quality: '1080p HD',
    fileSize: '95 MB',
    thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: 'Dokumentasi ketenangan kuil kuno Kyoto dan sejuknya hutan bambu Arashiyama di pagi hari sebelum keramaian turis.',
    tags: ['Kyoto', 'Arashiyama', 'JepangTradisional', 'Peaceful'],
    isLatest: false,
    isTrending: false
  },
  {
    id: 'hj-02',
    title: 'Tutorial 5 Gaya Pashmina Silk & Segiempat Tanpa Jarum Pentul Ribet',
    category: 'hijab',
    categoryName: 'Hijab',
    duration: '08:42',
    durationSec: 522,
    views: '39.4K',
    viewsCount: 39400,
    date: '4 hari lalu',
    quality: '1080p HD',
    fileSize: '65 MB',
    thumbnail: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Tips praktis dan cepat menata pashmina silk shimmer serta hijab segiempat untuk tampilan formal dan kasual yang rapi sepanjang hari.',
    tags: ['TutorialHijab', 'PashminaSilk', 'HijabStyle', 'TipsFashion'],
    isLatest: false,
    isTrending: false
  }
];

// ----------------------------------------------------------------------------
// 2. STATE APLIKASI
// ----------------------------------------------------------------------------
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'newest';
let currentQuality = '1080p';
let lastVolume = 100;

// ----------------------------------------------------------------------------
// 3. DOM ELEMENT REFERENCES
// ----------------------------------------------------------------------------
const mainSearchInput = document.getElementById('main-search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const categoryChips = document.querySelectorAll('.chip');
const activeCategoryTitle = document.getElementById('active-category-title');
const totalVideoCounter = document.getElementById('total-video-counter');

// Grids
const latestVideosGrid = document.getElementById('latest-videos-grid');
const mainVideoGrid = document.getElementById('main-video-grid');
const emptyState = document.getElementById('empty-state');
const btnResetFilters = document.getElementById('btn-reset-filters');
const sortSelect = document.getElementById('sort-select');

// Referral & Contact Form
const videoReferralForm = document.getElementById('video-referral-form');
const btnOpenRefModal = document.getElementById('btn-open-ref-modal');

// Video Player Modal
const videoPlayerModal = document.getElementById('video-player-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const activeVideoElement = document.getElementById('active-video-element');
const mCategory = document.getElementById('m-category');
const mTitle = document.getElementById('m-title');
const mViews = document.getElementById('m-views');
const mDuration = document.getElementById('m-duration');
const mDate = document.getElementById('m-date');
const mDescription = document.getElementById('m-description');
const mTags = document.getElementById('m-tags');
const modalDownloadBtn = document.getElementById('modal-download-btn');

// Volume Controls
const btnVolumeToggle = document.getElementById('btn-volume-toggle');
const volumeSlider = document.getElementById('volume-slider');
const volumeValText = document.getElementById('volume-val-text');
const volIconSvg = document.getElementById('vol-icon-svg');
const volChips = document.querySelectorAll('.vol-chip');

// Quality Controls
const qualityBtns = document.querySelectorAll('.q-btn');

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Toast
const toastPopup = document.getElementById('toast-popup');
const toastMessage = document.getElementById('toast-message');

// ----------------------------------------------------------------------------
// 4. TEMPLATE KARTU VIDEO
// ----------------------------------------------------------------------------
function createVideoCardTemplate(video) {
  return `
    <article class="v-card" data-id="${video.id}" data-category="${video.category}">
      
      <!-- Thumbnail Box -->
      <div class="v-thumb-box" onclick="playVideo('${video.id}')">
        <img src="${video.thumbnail}" alt="${video.title}" class="v-thumb" loading="lazy">
        <span class="v-cat-pill">${video.categoryName}</span>
        <span class="v-duration">${video.duration}</span>
        <span class="v-quality-pill">${video.quality}</span>
        
        <!-- Play Overlay Hover -->
        <div class="v-overlay">
          <div class="v-play-btn" title="Tonton Video">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          </div>
        </div>
      </div>

      <!-- Card Body -->
      <div class="v-body">
        <h3 class="v-title" onclick="playVideo('${video.id}')" title="${video.title}">
          ${video.title}
        </h3>
        <p class="v-desc">${video.description}</p>
        <div class="v-stats">
          <span>${video.views} x ditonton</span> • <span>${video.date}</span>
        </div>

        <!-- OPSI AKSI: PLAY & DEDICATED DOWNLOAD OPTION -->
        <div class="v-actions">
          <button class="btn-card-play" onclick="playVideo('${video.id}')" title="Buka Player">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Tonton</span>
          </button>

          <!-- OPSI DOWNLOAD PADA SETIAP VIDEO -->
          <button class="btn-card-download" onclick="downloadVideoAction('${video.id}', event)" title="Unduh File Video (${video.fileSize})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>

    </article>
  `;
}

// ----------------------------------------------------------------------------
// 5. RENDERING LOGIC
// ----------------------------------------------------------------------------
function renderLatestVideos() {
  if (!latestVideosGrid) return;
  const latest = pptubeVideos.filter(v => v.isLatest);
  latestVideosGrid.innerHTML = latest.map(createVideoCardTemplate).join('');
}

function renderMainCatalog() {
  if (!mainVideoGrid) return;

  let filtered = pptubeVideos.filter(video => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'trending') return video.isTrending;
    return video.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const q = searchQuery.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(v => 
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.categoryName.toLowerCase().includes(q) ||
      v.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (currentSort === 'popular') {
    filtered.sort((a, b) => b.viewsCount - a.viewsCount);
  } else if (currentSort === 'duration') {
    filtered.sort((a, b) => b.durationSec - a.durationSec);
  }

  if (filtered.length === 0) {
    mainVideoGrid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    mainVideoGrid.innerHTML = filtered.map(createVideoCardTemplate).join('');
  }

  updateCategoryBarMeta(filtered.length);
}

function updateCategoryBarMeta(count) {
  if (totalVideoCounter) {
    totalVideoCounter.textContent = `${count} Video Tersedia`;
  }
  
  if (activeCategoryTitle) {
    let catLabel = 'Semua Video';
    if (activeCategory === 'indonesia') catLabel = 'Indonesia 🇮🇩';
    else if (activeCategory === 'korea') catLabel = 'Korea 🇰🇷';
    else if (activeCategory === 'jepang') catLabel = 'Jepang 🇯🇵';
    else if (activeCategory === 'hijab') catLabel = 'Hijab ✨';
    else if (activeCategory === 'trending') catLabel = 'Trending 🔥';

    activeCategoryTitle.innerHTML = `Menampilkan: <strong class="highlight-text">${catLabel}</strong>`;
  }
}

// ----------------------------------------------------------------------------
// 6. VIDEO PLAYER CONTROLS (VOLUME & KUALITAS VIDEO)
// ----------------------------------------------------------------------------

/**
 * Buka Video Player Modal berdasarkan ID Video
 */
window.playVideo = function(videoId) {
  const video = pptubeVideos.find(v => v.id === videoId);
  if (!video) return;

  mCategory.textContent = video.categoryName;
  mTitle.textContent = video.title;
  mViews.textContent = `${video.views} x ditonton`;
  mDuration.textContent = video.duration;
  mDate.textContent = video.date;
  mDescription.textContent = video.description;

  // Render Tags
  mTags.innerHTML = video.tags
    .map(tag => `<span class="modal-tag">#${tag}</span>`)
    .join('');

  // Setup Download Link di dalam modal
  modalDownloadBtn.setAttribute('href', video.videoUrl);
  modalDownloadBtn.setAttribute('download', `${video.title.replace(/[^a-zA-Z0-9]/g, '_')}.mp4`);
  modalDownloadBtn.onclick = () => {
    showToast(`Memulai download file video: ${video.title} (${video.fileSize})`);
  };

  // Setup Media Source
  activeVideoElement.src = video.videoUrl;
  activeVideoElement.poster = video.thumbnail;

  // Reset Volume Setting ke state saat ini
  applyVolume(lastVolume);

  // Buka Modal
  videoPlayerModal.classList.add('active');
  videoPlayerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Autoplay
  const playPromise = activeVideoElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }

  showToast(`Sedang memutar: "${video.title}"`);
};

/**
 * Tutup Video Player Modal
 */
function closeVideoPlayer() {
  if (!videoPlayerModal.classList.contains('active')) return;
  activeVideoElement.pause();
  activeVideoElement.removeAttribute('src');
  activeVideoElement.load();

  videoPlayerModal.classList.remove('active');
  videoPlayerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Download Video Action
 */
window.downloadVideoAction = function(videoId, e) {
  if (e) e.stopPropagation();
  const video = pptubeVideos.find(v => v.id === videoId);
  if (!video) return;

  const downloadLink = document.createElement('a');
  downloadLink.href = video.videoUrl;
  downloadLink.download = `${video.title.replace(/[^a-zA-Z0-9]/g, '_')}.mp4`;
  downloadLink.target = '_blank';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  showToast(`📥 Mengunduh: "${video.title}" (${video.fileSize})...`);
};

// ----------------------------------------------------------------------------
// 7. PENGATURAN VOLUME VIDEO (SETTING VOLUME)
// ----------------------------------------------------------------------------
function applyVolume(vol) {
  const clampedVol = Math.max(0, Math.min(100, vol));
  lastVolume = clampedVol;

  if (activeVideoElement) {
    activeVideoElement.volume = clampedVol / 100;
    activeVideoElement.muted = (clampedVol === 0);
  }

  if (volumeSlider) {
    volumeSlider.value = clampedVol;
  }

  if (volumeValText) {
    volumeValText.textContent = clampedVol === 0 ? 'Mute' : `${clampedVol}%`;
  }

  // Update Vol Chips
  volChips.forEach(chip => {
    const chipVal = parseInt(chip.getAttribute('data-volume'), 10);
    chip.classList.toggle('active', chipVal === clampedVol);
  });

  // Update Volume Icon SVG
  updateVolumeIcon(clampedVol);
}

function updateVolumeIcon(vol) {
  if (!volIconSvg) return;

  if (vol === 0) {
    volIconSvg.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    `;
  } else if (vol < 50) {
    volIconSvg.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    `;
  } else {
    volIconSvg.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    `;
  }
}

// Event Volume Slider
if (volumeSlider) {
  volumeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    applyVolume(val);
  });
}

// Event Preset Volume Chips (25%, 50%, 75%, 100%)
volChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const val = parseInt(chip.getAttribute('data-volume'), 10);
    applyVolume(val);
    showToast(`Volume diatur ke: ${val}%`);
  });
});

// Event Mute / Unmute Toggle
if (btnVolumeToggle) {
  btnVolumeToggle.addEventListener('click', () => {
    if (activeVideoElement.muted || lastVolume === 0) {
      applyVolume(100);
      showToast('🔊 Audio Diaktifkan (100%)');
    } else {
      applyVolume(0);
      showToast('🔇 Audio Dimatikan (Muted)');
    }
  });
}

// ----------------------------------------------------------------------------
// 8. PILIHAN KUALITAS VIDEO (QUALITY SETTINGS)
// ----------------------------------------------------------------------------
qualityBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    qualityBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedQ = btn.getAttribute('data-q');
    currentQuality = selectedQ;

    // Simpan posisi playback dan status pemutaran
    const currentTime = activeVideoElement.currentTime;
    const isPlaying = !activeVideoElement.paused;

    let qLabel = '1080p Full HD';
    if (selectedQ === '720p') qLabel = '720p HD';
    else if (selectedQ === '480p') qLabel = '480p SD';
    else if (selectedQ === '360p') qLabel = '360p Hemat Kuota';
    else if (selectedQ === 'auto') qLabel = 'Auto (Adaptif)';

    // Update label download di modal
    if (modalDownloadBtn) {
      modalDownloadBtn.querySelector('span').textContent = `Download Video (${selectedQ.toUpperCase()})`;
    }

    // Terapkan kembali currentTime agar mulus
    activeVideoElement.currentTime = currentTime;
    if (isPlaying) {
      activeVideoElement.play().catch(() => {});
    }

    showToast(`⚙️ Kualitas Video dialihkan ke: ${qLabel}`);
  });
});

// ----------------------------------------------------------------------------
// 9. EVENT LISTENERS LAINNYA
// ----------------------------------------------------------------------------

// Filter Kategori Chips di Bar Atas
categoryChips.forEach(chip => {
  chip.addEventListener('click', () => {
    categoryChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    activeCategory = chip.getAttribute('data-cat');
    renderMainCatalog();
  });
});

// Quick Filter dari Footer
window.quickFilterCategory = function(catName) {
  activeCategory = catName;
  categoryChips.forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-cat') === catName);
  });
  renderMainCatalog();
  const catSection = document.getElementById('kategori');
  if (catSection) {
    catSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Input Pencarian
if (mainSearchInput) {
  mainSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    }
    renderMainCatalog();
  });
}

// Tombol Bersihkan Pencarian
if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    mainSearchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    mainSearchInput.focus();
    renderMainCatalog();
  });
}

// Reset Filter
if (btnResetFilters) {
  btnResetFilters.addEventListener('click', () => {
    activeCategory = 'all';
    searchQuery = '';
    if (mainSearchInput) mainSearchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';

    categoryChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-cat') === 'all');
    });

    renderMainCatalog();
  });
}

// Sorting Select
if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderMainCatalog();
  });
}

// Modal Close Listeners
if (btnCloseModal) {
  btnCloseModal.addEventListener('click', closeVideoPlayer);
}

if (videoPlayerModal) {
  videoPlayerModal.addEventListener('click', (e) => {
    if (e.target === videoPlayerModal) {
      closeVideoPlayer();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoPlayerModal.classList.contains('active')) {
    closeVideoPlayer();
  }
});

// Mobile Menu Toggle
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Nav Button Kirim Referensi Smooth Scroll
if (btnOpenRefModal) {
  btnOpenRefModal.addEventListener('click', () => {
    const contactSection = document.getElementById('kontak-developer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const refInput = document.getElementById('ref-title');
      if (refInput) setTimeout(() => refInput.focus(), 600);
    }
  });
}

// Form Referensi Video ke Gmail Developer
if (videoReferralForm) {
  videoReferralForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('ref-name').value.trim();
    const category = document.getElementById('ref-category').value;
    const title = document.getElementById('ref-title').value.trim();
    const link = document.getElementById('ref-link').value.trim();
    const notes = document.getElementById('ref-notes').value.trim();

    const developerEmail = 'pptube.developer@gmail.com';
    const emailSubject = encodeURIComponent(`[Referensi Video pptube] - ${category}: ${title}`);
    
    const emailBody = encodeURIComponent(
      `Halo Tim Developer pptube,\n\n` +
      `Saya ingin merekomendasikan video berikut untuk ditambahkan ke platform pptube:\n\n` +
      `-----------------------------------------\n` +
      `• Pengirim          : ${name}\n` +
      `• Kategori          : ${category}\n` +
      `• Judul Video       : ${title}\n` +
      `• Tautan/Link Video : ${link}\n` +
      `• Catatan           : ${notes ? notes : '-'}\n` +
      `-----------------------------------------\n\n` +
      `Terima kasih,\n${name}`
    );

    const mailtoUrl = `mailto:${developerEmail}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoUrl, '_blank');

    showToast(`✓ Draf Gmail ke ${developerEmail} berhasil dibuka! Terima kasih atas referensinya.`);
    videoReferralForm.reset();
  });
}

function showToast(msg) {
  if (!toastPopup) return;
  toastMessage.textContent = msg;
  toastPopup.classList.add('show');
  setTimeout(() => {
    toastPopup.classList.remove('show');
  }, 3500);
}

// ----------------------------------------------------------------------------
// 10. INISIALISASI SAAT HALAMAN SIAP
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderLatestVideos();
  renderMainCatalog();
  console.log('pptube video platform initialized successfully with volume & quality controls.');
});
