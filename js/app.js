/* ─── Social Sports — App.js ─────────────────────────────── */

// ─── i18n ─────────────────────────────────────────────────
const LANG = { current: 'tr' };

const T = {
  tr: {
    appTagline: 'Spor arkadaşını bul, sahaya çık.',
    loginWith: 'Google ile Giriş Yap',
    loginNote: 'Giriş yaparak kullanım koşullarını kabul etmiş olursunuz.',
    navHome: 'Keşfet', navCreate: 'İlan Ver', navNotif: 'Bildirimler', navProfile: 'Profil',
    search: 'Spor, aktivite, konum ara...', filterAll: 'Tümü',
    nearby: 'Yakınındakiler', seeAll: 'Tümünü Gör',
    join: 'Katılmak İstiyorum', propose: 'Alternatif Öner',
    slots: (n) => `${n} kişi aranıyor`, slotsFull: 'Takım Doldu',
    level: { beginner: 'Başlangıç', intermediate: 'Orta', advanced: 'İleri', pro: 'Pro' },
    createTitle: 'İlan Oluştur', chooseSport: 'Spor / Aktivite Seç',
    location: 'Konum', locationPh: 'Nerede oynayacaksınız?',
    date: 'Tarih', time: 'Saat', players: 'Kaç Kişi?',
    skillLevel: 'Seviye', equipment: 'Ekipman (bende var)',
    notes: 'Notlar', notesPh: 'Ek bilgi, özel koşullar...',
    publish: 'İlanı Yayınla', profileTitle: 'Profilim',
    notifsTitle: 'Bildirimler', accept: 'Kabul Et', reject: 'Reddet',
    joined: 'İsteğiniz gönderildi!', published: 'İlanınız yayınlandı!',
    participants: 'Katılımcılar', equipment_info: 'Ekipman',
    host: 'İlan Sahibi', infoWhen: 'Tarih & Saat', infoWhere: 'Konum',
    listView: 'Liste', mapView: 'Harita',
    venueTitle: 'Yakın Mekanlar', teammatesTitle: 'Önerilen Oyuncular',
    proposeTitle: 'Alternatif Öner', proposeDate: 'Tarih Seç', proposeTime: 'Saat Seç',
    proposeSend: 'Öneriyi Gönder', proposeSent: '📅 Alternatif öneriniz gönderildi!',
    pickLocation: 'Haritadan Konum Seç', confirmLocation: 'Konumu Onayla',
    sports: {
      tennis:'Tenis', football:'Futbol', basketball:'Basketbol', volleyball:'Voleybol',
      padel:'Padel', badminton:'Badminton', cycling:'Bisiklet', running:'Koşu',
      swimming:'Yüzme', hiking:'Doğa Yürüyüşü', yoga:'Yoga', pilates:'Pilates',
      golf:'Golf', tabletennis:'Masa Tenisi', squash:'Squash', boxing:'Boks',
      martial:'Dövüş Sanatları', dancing:'Dans', climbing:'Tırmanış', skiing:'Kayak',
      fitness:'Fitness', frisbee:'Frizbi', rowing:'Kürek', iceskating:'Buz Pateni',
      archery:'Okçuluk', esports:'E-Spor'
    }
  },
  en: {
    appTagline: 'Find your sports buddy, hit the field.',
    loginWith: 'Sign in with Google', loginNote: 'By signing in you agree to the Terms of Service.',
    navHome: 'Explore', navCreate: 'Post', navNotif: 'Notifs', navProfile: 'Profile',
    search: 'Search sports, activities, location...', filterAll: 'All',
    nearby: 'Nearby', seeAll: 'See All',
    join: 'I Want to Join', propose: 'Suggest Alternative',
    slots: (n) => `${n} spots left`, slotsFull: 'Team Full',
    level: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', pro: 'Pro' },
    createTitle: 'Create Activity', chooseSport: 'Choose Sport / Activity',
    location: 'Location', locationPh: 'Where will you play?',
    date: 'Date', time: 'Time', players: 'How many?',
    skillLevel: 'Level', equipment: 'Equipment (I have)',
    notes: 'Notes', notesPh: 'Additional info, special conditions...',
    publish: 'Publish Activity', profileTitle: 'My Profile',
    notifsTitle: 'Notifications', accept: 'Accept', reject: 'Reject',
    joined: 'Request sent!', published: 'Activity published!',
    participants: 'Participants', equipment_info: 'Equipment',
    host: 'Host', infoWhen: 'Date & Time', infoWhere: 'Location',
    listView: 'List', mapView: 'Map',
    venueTitle: 'Nearby Venues', teammatesTitle: 'Suggested Players',
    proposeTitle: 'Suggest Alternative', proposeDate: 'Choose Date', proposeTime: 'Choose Time',
    proposeSend: 'Send Suggestion', proposeSent: '📅 Alternative suggestion sent!',
    pickLocation: 'Pick Location on Map', confirmLocation: 'Confirm Location',
    sports: {
      tennis:'Tennis', football:'Football', basketball:'Basketball', volleyball:'Volleyball',
      padel:'Padel', badminton:'Badminton', cycling:'Cycling', running:'Running',
      swimming:'Swimming', hiking:'Hiking', yoga:'Yoga', pilates:'Pilates',
      golf:'Golf', tabletennis:'Table Tennis', squash:'Squash', boxing:'Boxing',
      martial:'Martial Arts', dancing:'Dancing', climbing:'Climbing', skiing:'Skiing',
      fitness:'Fitness', frisbee:'Frisbee', rowing:'Rowing', iceskating:'Ice Skating',
      archery:'Archery', esports:'E-Sports'
    }
  }
};

function t(key, ...args) {
  const val = T[LANG.current][key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}

// ─── Sports & Activities ──────────────────────────────────
const SPORTS = [
  { id: 'tennis',     icon: '🎾', key: 'tennis',     category: 'racket' },
  { id: 'football',   icon: '⚽', key: 'football',   category: 'team' },
  { id: 'basketball', icon: '🏀', key: 'basketball', category: 'team' },
  { id: 'volleyball', icon: '🏐', key: 'volleyball', category: 'team' },
  { id: 'padel',      icon: '🏓', key: 'padel',      category: 'racket' },
  { id: 'badminton',  icon: '🏸', key: 'badminton',  category: 'racket' },
  { id: 'cycling',    icon: '🚴', key: 'cycling',    category: 'outdoor' },
  { id: 'running',    icon: '🏃', key: 'running',    category: 'outdoor' },
  { id: 'swimming',   icon: '🏊', key: 'swimming',   category: 'water' },
  { id: 'hiking',     icon: '🥾', key: 'hiking',     category: 'outdoor' },
  { id: 'yoga',       icon: '🧘', key: 'yoga',       category: 'wellness' },
  { id: 'pilates',    icon: '🤸', key: 'pilates',    category: 'wellness' },
  { id: 'golf',       icon: '⛳', key: 'golf',       category: 'individual' },
  { id: 'tabletennis',icon: '🏓', key: 'tabletennis',category: 'racket' },
  { id: 'squash',     icon: '🎯', key: 'squash',     category: 'racket' },
  { id: 'boxing',     icon: '🥊', key: 'boxing',     category: 'individual' },
  { id: 'martial',    icon: '🥋', key: 'martial',    category: 'individual' },
  { id: 'dancing',    icon: '💃', key: 'dancing',    category: 'wellness' },
  { id: 'climbing',   icon: '🧗', key: 'climbing',   category: 'outdoor' },
  { id: 'skiing',     icon: '⛷️', key: 'skiing',     category: 'outdoor' },
  { id: 'fitness',    icon: '💪', key: 'fitness',    category: 'wellness' },
  { id: 'frisbee',    icon: '🥏', key: 'frisbee',    category: 'team' },
  { id: 'rowing',     icon: '🚣', key: 'rowing',     category: 'water' },
  { id: 'iceskating', icon: '⛸️', key: 'iceskating', category: 'outdoor' },
  { id: 'archery',    icon: '🎯', key: 'archery',    category: 'individual' },
  { id: 'esports',    icon: '🎮', key: 'esports',    category: 'individual' },
];

// ─── Mock Data ────────────────────────────────────────────
// İstanbul koordinatları merkez
const ISTANBUL = { lat: 41.0082, lng: 28.9784 };

const ACTIVITIES = [
  {
    id: 1, sport: 'tennis', icon: '🎾',
    title: { tr: 'Tenis partneri arıyorum', en: 'Looking for tennis partner' },
    host: { name: 'Seren U.', initials: 'SU', id: 'me' },
    location: { tr: 'Kadıköy Tenis Kulübü', en: 'Kadıköy Tennis Club' },
    coords: { lat: 40.9909, lng: 29.0295 },
    date: '12 Mayıs', time: '18:00', slots: 1, totalSlots: 2,
    level: 'intermediate',
    equipment: [{ tr: '2 Tenis Raketi', en: '2 Tennis Rackets' }, { tr: 'Top bende', en: 'Balls provided' }],
    note: { tr: 'Raketim var, gerekirse paylaşabilirim.', en: 'Rackets to share if needed.' },
    participants: [{ name: 'Seren U.', initials: 'SU', level: 'intermediate' }]
  },
  {
    id: 2, sport: 'football', icon: '⚽',
    title: { tr: 'Halı saha — 3 kişi eksik', en: 'Futsal — need 3 more' },
    host: { name: 'Ahmet K.', initials: 'AK', id: 'ak' },
    location: { tr: 'Beşiktaş Halı Saha', en: 'Beşiktaş Futsal Court' },
    coords: { lat: 41.0451, lng: 29.0078 },
    date: '13 Mayıs', time: '20:00', slots: 3, totalSlots: 10,
    level: 'beginner',
    equipment: [],
    note: { tr: 'Herkesin ayakkabısı olsun yeter!', en: 'Just bring your boots!' },
    participants: [
      { name: 'Ahmet K.', initials: 'AK', level: 'beginner' },
      { name: 'Mehmet Y.', initials: 'MY', level: 'beginner' },
      { name: 'Can T.', initials: 'CT', level: 'intermediate' },
      { name: 'Burak S.', initials: 'BS', level: 'beginner' },
      { name: 'Emre D.', initials: 'ED', level: 'beginner' },
      { name: 'Furkan A.', initials: 'FA', level: 'beginner' },
      { name: 'Ozan M.', initials: 'OM', level: 'beginner' },
    ]
  },
  {
    id: 3, sport: 'basketball', icon: '🏀',
    title: { tr: '3v3 Basketbol — Üsküdar', en: '3v3 Basketball — Üsküdar' },
    host: { name: 'Zeynep A.', initials: 'ZA', id: 'za' },
    location: { tr: 'Üsküdar Açık Basketbol Sahası', en: 'Üsküdar Open Court' },
    coords: { lat: 41.0219, lng: 29.0152 },
    date: '14 Mayıs', time: '17:30', slots: 2, totalSlots: 6,
    level: 'advanced',
    equipment: [{ tr: 'Basketbol topu var', en: 'Ball provided' }],
    note: { tr: 'Rekabetçi oynamak istiyoruz.', en: 'Looking for competitive play.' },
    participants: [
      { name: 'Zeynep A.', initials: 'ZA', level: 'advanced' },
      { name: 'Yıldız K.', initials: 'YK', level: 'advanced' },
      { name: 'Naz B.', initials: 'NB', level: 'intermediate' },
      { name: 'Aslı T.', initials: 'AT', level: 'advanced' },
    ]
  },
  {
    id: 4, sport: 'padel', icon: '🏓',
    title: { tr: 'Padel — ilk kez deneyenlere', en: 'Padel for beginners' },
    host: { name: 'Kaan M.', initials: 'KM', id: 'km' },
    location: { tr: 'Ataşehir Padel Center', en: 'Ataşehir Padel Center' },
    coords: { lat: 40.9769, lng: 29.1201 },
    date: '15 Mayıs', time: '10:00', slots: 2, totalSlots: 4,
    level: 'beginner',
    equipment: [{ tr: '4 Padel Raketi', en: '4 Padel Rackets' }, { tr: 'Toplar', en: 'Balls' }],
    note: { tr: 'Tüm ekipman bende, sadece gel!', en: 'All equipment provided!' },
    participants: [
      { name: 'Kaan M.', initials: 'KM', level: 'beginner' },
      { name: 'Serra O.', initials: 'SO', level: 'beginner' },
    ]
  },
  {
    id: 5, sport: 'volleyball', icon: '🏐',
    title: { tr: 'Plaj voleybolu — Florya', en: 'Beach volleyball — Florya' },
    host: { name: 'Deniz Y.', initials: 'DY', id: 'dy' },
    location: { tr: 'Florya Plajı', en: 'Florya Beach' },
    coords: { lat: 40.9721, lng: 28.7841 },
    date: '17 Mayıs', time: '11:00', slots: 0, totalSlots: 6,
    level: 'intermediate',
    equipment: [{ tr: 'File ve top var', en: 'Net and ball provided' }],
    note: { tr: 'Takım doldu! Bekleme listesine girebilirsiniz.', en: 'Team full! Waitlist available.' },
    participants: [
      { name: 'Deniz Y.', initials: 'DY', level: 'intermediate' },
      { name: 'Pınar K.', initials: 'PK', level: 'intermediate' },
      { name: 'Gizem A.', initials: 'GA', level: 'intermediate' },
      { name: 'Ece T.', initials: 'ET', level: 'beginner' },
      { name: 'Selin B.', initials: 'SB', level: 'intermediate' },
      { name: 'Ayşe D.', initials: 'AD', level: 'intermediate' },
    ]
  },
  {
    id: 6, sport: 'running', icon: '🏃',
    title: { tr: 'Sabah koşusu — Caddebostan', en: 'Morning run — Caddebostan' },
    host: { name: 'Lena S.', initials: 'LS', id: 'ls' },
    location: { tr: 'Caddebostan Sahil Yolu', en: 'Caddebostan Promenade' },
    coords: { lat: 40.9627, lng: 29.0601 },
    date: '11 Mayıs', time: '07:00', slots: 4, totalSlots: 10,
    level: 'beginner',
    equipment: [],
    note: { tr: '5 km koşu planlanıyor, tempolu değil rahat.', en: '5km easy pace run planned.' },
    participants: [
      { name: 'Lena S.', initials: 'LS', level: 'beginner' },
      { name: 'Mert A.', initials: 'MA', level: 'beginner' },
    ]
  },
  {
    id: 7, sport: 'yoga', icon: '🧘',
    title: { tr: 'Açık hava yoga — Gülhane', en: 'Outdoor yoga — Gülhane' },
    host: { name: 'Elif B.', initials: 'EB', id: 'eb' },
    location: { tr: 'Gülhane Parkı', en: 'Gülhane Park' },
    coords: { lat: 41.0131, lng: 28.9812 },
    date: '16 Mayıs', time: '08:30', slots: 6, totalSlots: 15,
    level: 'beginner',
    equipment: [{ tr: 'Kendi matını getir', en: 'Bring your own mat' }],
    note: { tr: 'Tüm seviyeler katılabilir.', en: 'All levels welcome.' },
    participants: [
      { name: 'Elif B.', initials: 'EB', level: 'beginner' },
      { name: 'Sema K.', initials: 'SK', level: 'intermediate' },
    ]
  },
  {
    id: 8, sport: 'hiking', icon: '🥾',
    title: { tr: 'Belgrad Ormanı yürüyüşü', en: 'Belgrade Forest hike' },
    host: { name: 'Tarık D.', initials: 'TD', id: 'td' },
    location: { tr: 'Belgrad Ormanı Giriş', en: 'Belgrade Forest Entrance' },
    coords: { lat: 41.1721, lng: 28.9784 },
    date: '18 Mayıs', time: '09:00', slots: 5, totalSlots: 12,
    level: 'intermediate',
    equipment: [],
    note: { tr: '12 km rota, su ve atıştırmalık getir.', en: '12km trail, bring water and snacks.' },
    participants: [
      { name: 'Tarık D.', initials: 'TD', level: 'intermediate' },
      { name: 'Can B.', initials: 'CB', level: 'intermediate' },
    ]
  }
];

const VENUES = [
  { id: 'v1', name: { tr: 'Kadıköy Tenis Kulübü', en: 'Kadıköy Tennis Club' }, sports: ['tennis', 'padel'], distance: '1.2 km', rating: 4.8, coords: { lat: 40.9909, lng: 29.0295 }, icon: '🎾' },
  { id: 'v2', name: { tr: 'Beşiktaş Spor Kompleksi', en: 'Beşiktaş Sports Complex' }, sports: ['football', 'basketball'], distance: '2.4 km', rating: 4.5, coords: { lat: 41.0451, lng: 29.0078 }, icon: '🏟' },
  { id: 'v3', name: { tr: 'Caddebostan Spor Tesisi', en: 'Caddebostan Sports Facility' }, sports: ['tennis', 'volleyball', 'basketball'], distance: '3.1 km', rating: 4.7, coords: { lat: 40.9627, lng: 29.0601 }, icon: '🏅' },
  { id: 'v4', name: { tr: 'Ataşehir Padel Center', en: 'Ataşehir Padel Center' }, sports: ['padel'], distance: '4.8 km', rating: 4.9, coords: { lat: 40.9769, lng: 29.1201 }, icon: '🏓' },
  { id: 'v5', name: { tr: 'Gülhane Parkı', en: 'Gülhane Park' }, sports: ['yoga', 'running', 'frisbee'], distance: '5.2 km', rating: 4.6, coords: { lat: 41.0131, lng: 28.9812 }, icon: '🌳' },
];

const SUGGESTED_PLAYERS = [
  { name: 'Mert B.', initials: 'MB', sport: 'tennis', level: 'intermediate', distance: '0.8 km', rating: 4.7 },
  { name: 'Ceren A.', initials: 'CA', sport: 'tennis', level: 'intermediate', distance: '1.3 km', rating: 4.9 },
  { name: 'Burak T.', initials: 'BT', sport: 'tennis', level: 'advanced', distance: '2.1 km', rating: 4.5 },
  { name: 'Naz K.', initials: 'NK', sport: 'football', level: 'beginner', distance: '1.6 km', rating: 4.8 },
];

const NOTIFICATIONS = [
  { id: 1, unread: true, icon: '🎾', title: { tr: 'Yeni katılım isteği', en: 'New join request' }, text: { tr: 'Mert B. "Tenis partneri arıyorum" ilanına katılmak istiyor. Seviye: Orta.', en: 'Mert B. wants to join your tennis activity. Level: Intermediate.' }, time: { tr: '5 dk önce', en: '5 min ago' }, hasActions: true },
  { id: 2, unread: true, icon: '✅', title: { tr: 'İsteğiniz kabul edildi!', en: 'Request accepted!' }, text: { tr: 'Ahmet K. halı saha ilanına katılım isteğinizi kabul etti.', en: 'Ahmet K. accepted your futsal request.' }, time: { tr: '1 saat önce', en: '1 hour ago' }, hasActions: false },
  { id: 3, unread: false, icon: '📅', title: { tr: 'Alternatif zaman önerisi', en: 'Alternative time proposed' }, text: { tr: 'Zeynep A. saat 17:30 yerine 19:00\'u öneriyor.', en: 'Zeynep A. is proposing 19:00 instead of 17:30.' }, time: { tr: '3 saat önce', en: '3 hours ago' }, hasActions: true },
  { id: 4, unread: false, icon: '🏐', title: { tr: 'Aktivite yarın!', en: 'Activity tomorrow!' }, text: { tr: '"3v3 Basketbol" aktiviteniz yarın saat 17:30\'da.', en: 'Your "3v3 Basketball" is tomorrow at 17:30.' }, time: { tr: 'Dün', en: 'Yesterday' }, hasActions: false }
];

// ─── State ────────────────────────────────────────────────
const state = {
  currentScreen: 'login',
  activeFilter: 'all',
  homeView: 'list', // 'list' | 'map'
  selectedActivity: null,
  selectedSport: null,
  selectedLevel: null,
  checkedEquipment: new Set(),
  createCoords: null,
  createLocationName: '',
  maps: {} // leaflet instances by screen
};

// ─── Router ───────────────────────────────────────────────
function navigate(screenId, data = {}) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + screenId);
  if (!screen) return;
  screen.classList.add('active');
  state.currentScreen = screenId;
  if (data.activity) state.selectedActivity = data.activity;
  updateNav(screenId);
  renderScreen(screenId);
  window.scrollTo(0, 0);
}

function updateNav(screenId) {
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.remove('active');
  });
  const map = { home: 0, create: 1, notifs: 2, profile: 3 };
  const allNavGroups = document.querySelectorAll('.bottom-nav');
  allNavGroups.forEach(nav => {
    const items = nav.querySelectorAll('.nav-item');
    if (map[screenId] !== undefined && items[map[screenId]]) {
      items[map[screenId]].classList.add('active');
    }
  });
}

// ─── Render ───────────────────────────────────────────────
function renderScreen(screenId) {
  const renders = { home: renderHome, detail: renderDetail, create: renderCreate, profile: renderProfile, notifs: renderNotifs };
  if (renders[screenId]) renders[screenId]();
}

function renderHome() {
  const lang = LANG.current;
  const filter = state.activeFilter;

  // Filter chips
  const filtersEl = document.getElementById('filter-chips');
  const sportFilters = [{ id: 'all', label: t('filterAll'), icon: '🏅' }, ...SPORTS.map(s => ({ id: s.id, label: t('sports')[s.key], icon: s.icon }))];
  filtersEl.innerHTML = sportFilters.map(f => `<button class="chip ${f.id === filter ? 'active' : ''}" onclick="setFilter('${f.id}')">${f.icon} ${f.label}</button>`).join('');

  // View toggle buttons text
  const btnList = document.getElementById('btn-list-view');
  const btnMap = document.getElementById('btn-map-view');
  if (btnList) btnList.textContent = '☰ ' + t('listView');
  if (btnMap) btnMap.textContent = '🗺 ' + t('mapView');

  // Toggle view
  const listView = document.getElementById('home-list-view');
  const mapView = document.getElementById('home-map-view');
  if (state.homeView === 'map') {
    listView.style.display = 'none';
    mapView.style.display = 'block';
    btnList.classList.remove('active');
    btnMap.classList.add('active');
    initHomeMap(filter);
  } else {
    listView.style.display = 'block';
    mapView.style.display = 'none';
    btnList.classList.add('active');
    btnMap.classList.remove('active');
    renderActivityList(filter);
  }

  document.getElementById('search-input').placeholder = t('search');
  document.getElementById('home-section-title').textContent = t('nearby');

  document.querySelectorAll('.nav-label').forEach((el, i) => {
    el.textContent = [t('navHome'), t('navCreate'), t('navNotif'), t('navProfile')][i];
  });

  // Lang toggle text sync
  document.querySelectorAll('.lang-toggle-btn').forEach(b => b.textContent = LANG.current === 'tr' ? 'EN' : 'TR');
}

function renderActivityList(filter) {
  const lang = LANG.current;
  const filtered = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.sport === filter);
  const cardsEl = document.getElementById('activity-cards');
  if (filtered.length === 0) {
    cardsEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">${lang === 'tr' ? 'İlan bulunamadı' : 'No activities found'}</div><div class="empty-sub">${lang === 'tr' ? 'Bu spor için henüz ilan yok. İlk ilanı sen aç!' : 'No activities yet. Be the first!'}</div></div>`;
    return;
  }
  cardsEl.innerHTML = filtered.map(a => renderActivityCard(a)).join('');
}

function renderActivityCard(a) {
  const lang = LANG.current;
  const isFull = a.slots === 0;
  const eqTags = a.equipment.map(e => `<span class="eq-tag">${e[lang]}</span>`).join('');
  return `
    <div class="activity-card" onclick="openDetail(${a.id})">
      <div class="card-sport-banner"></div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-sport-tag">${a.icon} ${t('sports')[a.sport]}</span>
          <span class="card-level">${t('level')[a.level]}</span>
        </div>
        <div class="card-title">${a.title[lang]}</div>
        <div class="card-meta">
          <div class="meta-row"><span class="meta-icon">📍</span>${a.location[lang]}</div>
          <div class="meta-row"><span class="meta-icon">🗓</span>${a.date} · ${a.time}</div>
        </div>
        ${eqTags ? `<div class="equipment-tags">${eqTags}</div>` : ''}
        <div class="card-footer">
          <div class="card-host">
            <div class="avatar">${a.host.initials}</div>
            <span class="host-name">${a.host.name}</span>
          </div>
          <span class="slots-badge ${isFull ? 'full' : ''}">
            ${isFull ? t('slotsFull') : '👥 ' + t('slots', a.slots)}
          </span>
        </div>
      </div>
    </div>`;
}

// ─── Home Map ─────────────────────────────────────────────
function initHomeMap(filter) {
  if (typeof L === 'undefined') { document.getElementById('home-map-view').innerHTML = '<div class="empty-state"><div class="empty-icon">🗺</div><div class="empty-title">Harita yükleniyor...</div></div>'; return; }

  const mapEl = document.getElementById('home-map-container');
  if (state.maps.home) {
    state.maps.home.remove();
    state.maps.home = null;
    mapEl.innerHTML = '';
  }

  const map = L.map(mapEl, { zoomControl: true, attributionControl: false }).setView([ISTANBUL.lat, ISTANBUL.lng], 12);
  state.maps.home = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  const filtered = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.sport === filter);
  filtered.forEach(a => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:linear-gradient(135deg,#7C3AED,#EC4899);color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 3px 12px rgba(124,58,237,0.5);border:2px solid #fff;cursor:pointer">${a.icon}</div>`,
      iconSize: [40, 40], iconAnchor: [20, 20]
    });
    L.marker([a.coords.lat, a.coords.lng], { icon })
      .addTo(map)
      .bindPopup(`<b>${a.title[LANG.current]}</b><br>${a.location[LANG.current]}<br>${a.date} · ${a.time}<br><button onclick="openDetail(${a.id})" style="margin-top:6px;padding:4px 12px;background:linear-gradient(135deg,#7C3AED,#EC4899);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:12px">Detay</button>`)
      .openPopup();
  });

  // Venue markers
  VENUES.forEach(v => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:#fff;border:2px solid #7C3AED;color:#7C3AED;border-radius:10px;padding:3px 8px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.15)">${v.icon} ${v.name[LANG.current].split(' ').slice(0,2).join(' ')}</div>`,
      iconSize: [null, 28], iconAnchor: [0, 14]
    });
    L.marker([v.coords.lat, v.coords.lng], { icon }).addTo(map)
      .bindPopup(`<b>${v.name[LANG.current]}</b><br>⭐ ${v.rating} · ${v.distance}`);
  });

  setTimeout(() => map.invalidateSize(), 100);
}

// ─── Detail ───────────────────────────────────────────────
function renderDetail() {
  const a = state.selectedActivity;
  if (!a) return;
  const lang = LANG.current;
  const isFull = a.slots === 0;

  document.getElementById('detail-sport-icon').textContent = a.icon;
  document.getElementById('detail-title').textContent = a.title[lang];
  document.getElementById('detail-sport-tag').textContent = t('sports')[a.sport];
  document.getElementById('detail-location').textContent = a.location[lang];
  document.getElementById('detail-datetime').textContent = `${a.date} · ${a.time}`;
  document.getElementById('detail-slots').textContent = isFull ? t('slotsFull') : t('slots', a.slots);
  document.getElementById('detail-level').textContent = t('level')[a.level];
  document.getElementById('detail-host-initials').textContent = a.host.initials;
  document.getElementById('detail-host-name').textContent = a.host.name;
  document.getElementById('detail-note').textContent = a.note[lang];

  document.getElementById('detail-equipment').innerHTML = a.equipment.length
    ? a.equipment.map(e => `<span class="eq-tag" style="font-size:13px;padding:6px 14px">${e[lang]}</span>`).join('')
    : `<span style="color:var(--text-secondary);font-size:13px">${lang === 'tr' ? 'Belirtilmemiş' : 'Not specified'}</span>`;

  document.getElementById('detail-participants').innerHTML = a.participants.map(p => `
    <div class="participant-row">
      <div class="avatar">${p.initials}</div>
      <div class="participant-info">
        <div class="participant-name">${p.name}</div>
        <div class="participant-level">${t('level')[p.level]}</div>
      </div>
    </div>`).join('');

  // Suggested players for this sport
  const suggested = SUGGESTED_PLAYERS.filter(p => p.sport === a.sport).slice(0, 3);
  const sugEl = document.getElementById('detail-suggested-players');
  if (suggested.length) {
    sugEl.innerHTML = suggested.map(p => `
      <div class="participant-row" style="padding:8px 0">
        <div class="avatar">${p.initials}</div>
        <div class="participant-info" style="flex:1">
          <div class="participant-name">${p.name}</div>
          <div class="participant-level">⭐ ${p.rating} · ${p.distance} · ${t('level')[p.level]}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="showToast('📨 Davet gönderildi!')" style="font-size:11px;padding:6px 12px">${lang === 'tr' ? 'Davet Et' : 'Invite'}</button>
      </div>`).join('');
  } else {
    sugEl.innerHTML = `<div style="color:var(--text-secondary);font-size:13px">${lang === 'tr' ? 'Öneri bulunamadı' : 'No suggestions'}</div>`;
  }

  // Venue suggestions
  const nearVenues = VENUES.filter(v => v.sports.includes(a.sport)).slice(0, 2);
  const venueEl = document.getElementById('detail-venues');
  venueEl.innerHTML = nearVenues.map(v => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="width:36px;height:36px;background:#F3F0FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px">${v.icon}</div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600">${v.name[lang]}</div>
        <div style="font-size:12px;color:var(--text-secondary)">⭐ ${v.rating} · ${v.distance}</div>
      </div>
    </div>`).join('') || `<div style="color:var(--text-secondary);font-size:13px">${lang === 'tr' ? 'Yakın mekan bulunamadı' : 'No nearby venues'}</div>`;

  const joinBtn = document.getElementById('join-btn');
  joinBtn.textContent = isFull ? t('slotsFull') : t('join');
  joinBtn.disabled = isFull;
  joinBtn.style.opacity = isFull ? '0.5' : '1';
  document.getElementById('propose-btn').textContent = t('propose');

  // Labels
  document.getElementById('detail-participants-title').textContent = t('participants');
  document.getElementById('detail-equipment-title').textContent = t('equipment_info');
  document.getElementById('detail-host-title').textContent = t('host');
  document.getElementById('detail-back-text').textContent = lang === 'tr' ? 'Geri' : 'Back';
  document.getElementById('detail-when-label').textContent = t('infoWhen');
  document.getElementById('detail-where-label').textContent = t('infoWhere');
  document.getElementById('detail-suggested-title').textContent = t('teammatesTitle');
  document.getElementById('detail-venue-title').textContent = t('venueTitle');

  // Detail map
  initDetailMap(a);
}

function initDetailMap(a) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('detail-map-container');
  if (state.maps.detail) { state.maps.detail.remove(); state.maps.detail = null; mapEl.innerHTML = ''; }

  const map = L.map(mapEl, { zoomControl: false, attributionControl: false, dragging: true, scrollWheelZoom: false })
    .setView([a.coords.lat, a.coords.lng], 15);
  state.maps.detail = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  const icon = L.divIcon({
    className: '',
    html: `<div style="background:linear-gradient(135deg,#7C3AED,#EC4899);color:#fff;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 16px rgba(124,58,237,0.5);border:3px solid #fff">${a.icon}</div>`,
    iconSize: [44, 44], iconAnchor: [22, 22]
  });
  L.marker([a.coords.lat, a.coords.lng], { icon }).addTo(map).bindPopup(a.location[LANG.current]).openPopup();
  setTimeout(() => map.invalidateSize(), 200);
}

// ─── Create Activity ──────────────────────────────────────
function renderCreate() {
  const lang = LANG.current;
  document.getElementById('create-topbar-title').textContent = t('createTitle');

  const sportGrid = document.getElementById('sport-grid');
  sportGrid.innerHTML = SPORTS.map(s => `
    <button class="sport-btn ${state.selectedSport === s.id ? 'selected' : ''}" onclick="selectSport('${s.id}')">
      <span class="sport-btn-icon">${s.icon}</span>
      <span class="sport-btn-label">${t('sports')[s.key]}</span>
    </button>`).join('');

  const levels = ['beginner', 'intermediate', 'advanced', 'pro'];
  document.getElementById('level-options').innerHTML = levels.map(l => `
    <button class="level-btn ${state.selectedLevel === l ? 'selected' : ''}" onclick="selectLevel('${l}')">${t('level')[l]}</button>`).join('');

  const equipmentOptions = [
    { id: 'racket', icon: '🎾', label: { tr: 'Raket / Top', en: 'Racket / Ball' }, sub: { tr: 'Karşı tarafla paylaşabilirsin', en: 'Can share with partner' } },
    { id: 'ball', icon: '⚽', label: { tr: 'Top', en: 'Ball' }, sub: { tr: 'Top götürüyorsun', en: 'Bringing a ball' } },
    { id: 'net', icon: '🏐', label: { tr: 'File / Kale', en: 'Net / Goal' }, sub: { tr: 'Ekstra ekipman', en: 'Extra equipment' } },
    { id: 'venue', icon: '🏟', label: { tr: 'Saha rezervasyonu bende', en: 'Venue booked by me' }, sub: { tr: 'Ücreti paylaşabiliriz', en: 'Can split costs' } },
  ];
  document.getElementById('equipment-checks').innerHTML = equipmentOptions.map(e => `
    <div class="check-item ${state.checkedEquipment.has(e.id) ? 'checked' : ''}" onclick="toggleEquipment('${e.id}')">
      <div class="check-box">${state.checkedEquipment.has(e.id) ? '✓' : ''}</div>
      <span style="font-size:20px">${e.icon}</span>
      <div><div class="check-label">${e.label[lang]}</div><div class="check-sub">${e.sub[lang]}</div></div>
    </div>`).join('');

  document.getElementById('publish-btn').textContent = t('publish');
  document.getElementById('create-location-input').placeholder = t('locationPh');
  document.getElementById('create-notes').placeholder = t('notesPh');
  document.getElementById('create-pick-map-btn').textContent = '📍 ' + t('pickLocation');

  if (state.createLocationName) {
    document.getElementById('create-location-input').value = state.createLocationName;
  }

  initCreateMap();
}

function initCreateMap() {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('create-map-container');
  if (!mapEl) return;
  if (state.maps.create) { state.maps.create.remove(); state.maps.create = null; mapEl.innerHTML = ''; }

  const center = state.createCoords || ISTANBUL;
  const map = L.map(mapEl, { zoomControl: true, attributionControl: false }).setView([center.lat, center.lng], 13);
  state.maps.create = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  let marker = null;
  if (state.createCoords) {
    marker = L.marker([state.createCoords.lat, state.createCoords.lng]).addTo(map);
  }

  map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    state.createCoords = { lat, lng };
    if (marker) map.removeLayer(marker);
    marker = L.marker([lat, lng]).addTo(map);
    const locName = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    state.createLocationName = locName;
    document.getElementById('create-location-input').value = locName;
    showToast('📍 ' + (LANG.current === 'tr' ? 'Konum seçildi' : 'Location selected'));
  });

  setTimeout(() => map.invalidateSize(), 200);
}

// ─── Profile ──────────────────────────────────────────────
function renderProfile() {
  const lang = LANG.current;
  const user = {
    name: 'Seren Uğurlu',
    sub: lang === 'tr' ? 'İstanbul · Üye: Mayıs 2026' : 'Istanbul · Member: May 2026',
    initials: 'SU',
    stats: [{ value: 12, label: lang === 'tr' ? 'Aktivite' : 'Activities' }, { value: 8, label: lang === 'tr' ? 'Arkadaş' : 'Friends' }, { value: '4.9', label: lang === 'tr' ? 'Puan' : 'Rating' }],
    sports: [{ icon: '🎾', name: lang === 'tr' ? 'Tenis' : 'Tennis', level: 'intermediate' }, { icon: '🏐', name: lang === 'tr' ? 'Voleybol' : 'Volleyball', level: 'beginner' }, { icon: '⚽', name: lang === 'tr' ? 'Futbol' : 'Football', level: 'beginner' }],
    history: [{ icon: '🎾', title: lang === 'tr' ? 'Tenis — Kadıköy' : 'Tennis — Kadıköy', date: '5 Mayıs' }, { icon: '⚽', title: lang === 'tr' ? 'Halı saha — Beşiktaş' : 'Futsal — Beşiktaş', date: '2 Mayıs' }, { icon: '🏐', title: lang === 'tr' ? 'Plaj voleybolu' : 'Beach volleyball', date: '28 Nisan' }]
  };

  document.getElementById('profile-initials').textContent = user.initials;
  document.getElementById('profile-name').textContent = user.name;
  document.getElementById('profile-sub').textContent = user.sub;
  document.getElementById('profile-stats').innerHTML = user.stats.map(s => `<div class="stat-item"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('');
  document.getElementById('profile-sports').innerHTML = user.sports.map(s => `<div class="sport-level-row"><div class="sport-level-left">${s.icon} ${s.name}</div><span class="level-pill">${t('level')[s.level]}</span></div>`).join('');
  document.getElementById('profile-history').innerHTML = user.history.map(h => `<div class="activity-history-item"><div class="history-icon">${h.icon}</div><div><div class="history-title">${h.title}</div><div class="history-date">${h.date}</div></div></div>`).join('');
  document.getElementById('profile-topbar-title').textContent = t('profileTitle');
  document.getElementById('profile-sports-title').textContent = lang === 'tr' ? 'Sporlarım' : 'My Sports';
  document.getElementById('profile-history-title').textContent = lang === 'tr' ? 'Aktivite Geçmişi' : 'Activity History';
}

// ─── Notifs ───────────────────────────────────────────────
function renderNotifs() {
  const lang = LANG.current;
  document.getElementById('notifs-list').innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-card ${n.unread ? 'unread' : ''}">
      <div class="notif-top">
        <div class="avatar" style="font-size:18px;background:linear-gradient(135deg,#F3F0FF,#FCE7F3);color:#7C3AED">${n.icon}</div>
        <div class="notif-body">
          <div class="notif-title">${n.title[lang]}</div>
          <div class="notif-text">${n.text[lang]}</div>
          <div class="notif-time">${n.time[lang]}</div>
        </div>
      </div>
      ${n.hasActions ? `<div class="notif-actions"><button class="btn btn-primary btn-sm" onclick="handleNotif(${n.id},'accept')" style="flex:1">${t('accept')}</button><button class="btn btn-outline btn-sm" onclick="handleNotif(${n.id},'reject')" style="flex:1">${t('reject')}</button></div>` : ''}
    </div>`).join('');
  document.getElementById('notifs-topbar-title').textContent = t('notifsTitle');
}

// ─── Propose Modal ────────────────────────────────────────
function openProposeModal() {
  const lang = LANG.current;
  const modal = document.getElementById('propose-modal');

  // Generate next 7 days
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.push({
      value: d.toISOString().split('T')[0],
      label: (lang === 'tr' ? dayNames : dayNamesEn)[d.getDay()],
      num: d.getDate(),
      month: d.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US', { month: 'short' })
    });
  }

  const timeSlots = ['08:00','09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];

  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeProposeModal()"></div>
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${t('proposeTitle')}</div>

      <div class="modal-section-label">${t('proposeDate')}</div>
      <div class="propose-days" id="propose-days">
        ${days.map((d, i) => `
          <button class="propose-day-btn ${i === 0 ? 'selected' : ''}" onclick="selectProposeDays(this, '${d.value}')">
            <span class="propose-day-name">${d.label}</span>
            <span class="propose-day-num">${d.num}</span>
            <span class="propose-day-month">${d.month}</span>
          </button>`).join('')}
      </div>

      <div class="modal-section-label" style="margin-top:16px">${t('proposeTime')}</div>
      <div class="propose-times" id="propose-times">
        ${timeSlots.map(ts => `
          <button class="propose-time-btn" onclick="toggleProposeTime(this, '${ts}')">${ts}</button>`).join('')}
      </div>

      <button class="btn btn-primary" style="margin-top:20px" onclick="submitPropose()">${t('proposeSend')}</button>
    </div>`;

  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.querySelector('.modal-sheet').classList.add('open'));
}

function closeProposeModal() {
  const modal = document.getElementById('propose-modal');
  const sheet = modal.querySelector('.modal-sheet');
  if (sheet) sheet.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; modal.innerHTML = ''; }, 300);
}

function selectProposeDays(btn, value) {
  document.querySelectorAll('.propose-day-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function toggleProposeTime(btn, value) {
  btn.classList.toggle('selected');
}

function submitPropose() {
  const selectedTimes = [...document.querySelectorAll('.propose-time-btn.selected')].map(b => b.textContent);
  const selectedDay = document.querySelector('.propose-day-btn.selected');
  if (!selectedDay || selectedTimes.length === 0) {
    showToast(LANG.current === 'tr' ? '⚠️ Lütfen tarih ve en az bir saat seçin' : '⚠️ Select a date and at least one time slot');
    return;
  }
  closeProposeModal();
  setTimeout(() => showToast(t('proposeSent')), 350);
}

// ─── Event Handlers ───────────────────────────────────────
function setFilter(sportId) { state.activeFilter = sportId; renderHome(); }

function setHomeView(view) { state.homeView = view; renderHome(); }

function openDetail(activityId) {
  const activity = ACTIVITIES.find(a => a.id === activityId);
  if (activity) navigate('detail', { activity });
}

function selectSport(sportId) { state.selectedSport = state.selectedSport === sportId ? null : sportId; renderCreate(); }
function selectLevel(level) { state.selectedLevel = state.selectedLevel === level ? null : level; renderCreate(); }
function toggleEquipment(id) {
  state.checkedEquipment.has(id) ? state.checkedEquipment.delete(id) : state.checkedEquipment.add(id);
  renderCreate();
}

function handleJoin() { showToast('🎉 ' + t('joined')); }
function handlePropose() { openProposeModal(); }

function handlePublish() {
  if (!state.selectedSport) { showToast(LANG.current === 'tr' ? '⚠️ Lütfen bir spor seçin' : '⚠️ Please select a sport'); return; }
  showToast('🎉 ' + t('published'));
  state.selectedSport = null; state.selectedLevel = null; state.checkedEquipment.clear(); state.createCoords = null; state.createLocationName = '';
  setTimeout(() => navigate('home'), 800);
}

function handleNotif(id, action) {
  const msg = action === 'accept' ? (LANG.current === 'tr' ? '✅ Kabul edildi' : '✅ Accepted') : (LANG.current === 'tr' ? '❌ Reddedildi' : '❌ Rejected');
  showToast(msg);
  const n = NOTIFICATIONS.find(n => n.id === id);
  if (n) { n.hasActions = false; n.unread = false; }
  renderNotifs();
}

function toggleLang() {
  LANG.current = LANG.current === 'tr' ? 'en' : 'tr';
  document.querySelectorAll('.lang-toggle-btn').forEach(b => b.textContent = LANG.current === 'tr' ? 'EN' : 'TR');
  renderScreen(state.currentScreen);
}

function handleLogin() {
  const btn = document.getElementById('google-login-btn');
  btn.innerHTML = `<span style="animation:spin 0.8s linear infinite;display:inline-block">⏳</span> ${LANG.current === 'tr' ? 'Giriş yapılıyor...' : 'Signing in...'}`;
  btn.disabled = true;
  setTimeout(() => navigate('home'), 1200);
}

// ─── Toast ────────────────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  navigate('login');
  const tagline = document.getElementById('app-tagline');
  if (tagline) tagline.textContent = t('appTagline');
  const loginBtn = document.getElementById('google-login-btn');
  if (loginBtn) loginBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg> ${t('loginWith')}`;
  const loginNote = document.getElementById('login-note');
  if (loginNote) loginNote.textContent = t('loginNote');
});
