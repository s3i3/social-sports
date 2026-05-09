/* ─── Social Sports — App.js ────────────────────────────────
   SPA router + mock data + tüm uygulama mantığı
   ──────────────────────────────────────────────────────────── */

// ─── i18n ────────────────────────────────────────────────────
const LANG = { current: 'tr' };

const T = {
  tr: {
    appTagline: 'Spor arkadaşını bul, sahaya çık.',
    loginWith: 'Google ile Giriş Yap',
    loginNote: 'Giriş yaparak kullanım koşullarını kabul etmiş olursunuz.',
    navHome: 'Keşfet',
    navCreate: 'İlan Ver',
    navNotif: 'Bildirimler',
    navProfile: 'Profil',
    search: 'Spor, konum ara...',
    filterAll: 'Tümü',
    nearby: 'Yakınındakiler',
    seeAll: 'Tümünü Gör',
    join: 'Katılmak İstiyorum',
    propose: 'Alternatif Öner',
    slots: (n) => `${n} kişi aranıyor`,
    slotsFull: 'Takım Doldu',
    level: { beginner: 'Başlangıç', intermediate: 'Orta', advanced: 'İleri', pro: 'Pro' },
    createTitle: 'İlan Oluştur',
    chooseSport: 'Spor Seç',
    location: 'Konum',
    locationPh: 'Nerede oynayacaksınız?',
    date: 'Tarih',
    time: 'Saat',
    players: 'Kaç Kişi?',
    skillLevel: 'Seviye',
    equipment: 'Ekipman (bende var)',
    notes: 'Notlar',
    notesPh: 'Ek bilgi, özel koşullar...',
    publish: 'İlanı Yayınla',
    profileTitle: 'Profilim',
    myActivities: 'Aktivitelerim',
    notifsTitle: 'Bildirimler',
    accept: 'Kabul Et',
    reject: 'Reddet',
    joined: 'İsteğiniz gönderildi!',
    published: 'İlanınız yayınlandı!',
    participants: 'Katılımcılar',
    equipment_info: 'Ekipman',
    host: 'İlan Sahibi',
    infoWhen: 'Tarih & Saat',
    infoWhere: 'Konum',
    sports: {
      tennis: 'Tenis', football: 'Futbol', basketball: 'Basketbol',
      volleyball: 'Voleybol', padel: 'Padel', badminton: 'Badminton',
      cycling: 'Bisiklet', running: 'Koşu'
    }
  },
  en: {
    appTagline: 'Find your sports buddy, hit the field.',
    loginWith: 'Sign in with Google',
    loginNote: 'By signing in, you agree to the Terms of Service.',
    navHome: 'Explore',
    navCreate: 'Post',
    navNotif: 'Notifs',
    navProfile: 'Profile',
    search: 'Search sports, location...',
    filterAll: 'All',
    nearby: 'Nearby',
    seeAll: 'See All',
    join: 'I Want to Join',
    propose: 'Suggest Alternative',
    slots: (n) => `${n} spots left`,
    slotsFull: 'Team Full',
    level: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', pro: 'Pro' },
    createTitle: 'Create Activity',
    chooseSport: 'Choose Sport',
    location: 'Location',
    locationPh: 'Where will you play?',
    date: 'Date',
    time: 'Time',
    players: 'How many?',
    skillLevel: 'Level',
    equipment: 'Equipment (I have)',
    notes: 'Notes',
    notesPh: 'Additional info, special conditions...',
    publish: 'Publish Activity',
    profileTitle: 'My Profile',
    myActivities: 'My Activities',
    notifsTitle: 'Notifications',
    accept: 'Accept',
    reject: 'Reject',
    joined: 'Request sent!',
    published: 'Activity published!',
    participants: 'Participants',
    equipment_info: 'Equipment',
    host: 'Host',
    infoWhen: 'Date & Time',
    infoWhere: 'Location',
    sports: {
      tennis: 'Tennis', football: 'Football', basketball: 'Basketball',
      volleyball: 'Volleyball', padel: 'Padel', badminton: 'Badminton',
      cycling: 'Cycling', running: 'Running'
    }
  }
};

function t(key, ...args) {
  const val = T[LANG.current][key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}

// ─── Mock Data ───────────────────────────────────────────────
const SPORTS = [
  { id: 'tennis',     icon: '🎾', key: 'tennis' },
  { id: 'football',   icon: '⚽', key: 'football' },
  { id: 'basketball', icon: '🏀', key: 'basketball' },
  { id: 'volleyball', icon: '🏐', key: 'volleyball' },
  { id: 'padel',      icon: '🏓', key: 'padel' },
  { id: 'badminton',  icon: '🏸', key: 'badminton' },
  { id: 'cycling',    icon: '🚴', key: 'cycling' },
  { id: 'running',    icon: '🏃', key: 'running' },
];

const ACTIVITIES = [
  {
    id: 1, sport: 'tennis', icon: '🎾',
    title: { tr: 'Tenis partneri arıyorum', en: 'Looking for tennis partner' },
    host: { name: 'Seren U.', initials: 'SU', id: 'me' },
    location: { tr: 'Kadıköy Tenis Kulübü', en: 'Kadıköy Tennis Club' },
    date: '12 Mayıs', time: '18:00',
    slots: 1, totalSlots: 2,
    level: 'intermediate',
    equipment: [
      { tr: '2 Tenis Raketi', en: '2 Tennis Rackets' },
      { tr: 'Topsunuz olmasa sorun değil', en: 'Balls provided' }
    ],
    note: { tr: 'Raketim var, gerekirse paylaşabilirim.', en: 'I have rackets to share if needed.' },
    participants: [
      { name: 'Seren U.', initials: 'SU', level: 'intermediate' }
    ]
  },
  {
    id: 2, sport: 'football', icon: '⚽',
    title: { tr: 'Halı saha — 3 kişi eksik', en: 'Futsal — need 3 more' },
    host: { name: 'Ahmet K.', initials: 'AK', id: 'ak' },
    location: { tr: 'Beşiktaş Halı Saha', en: 'Beşiktaş Futsal Court' },
    date: '13 Mayıs', time: '20:00',
    slots: 3, totalSlots: 10,
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
    date: '14 Mayıs', time: '17:30',
    slots: 2, totalSlots: 6,
    level: 'advanced',
    equipment: [{ tr: 'Basketbol topumuz var', en: 'Ball provided' }],
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
    date: '15 Mayıs', time: '10:00',
    slots: 2, totalSlots: 4,
    level: 'beginner',
    equipment: [
      { tr: '4 Padel Raketi', en: '4 Padel Rackets' },
      { tr: 'Toplar', en: 'Balls' }
    ],
    note: { tr: 'Tüm ekipman bende, sadece gel!', en: 'All equipment provided, just show up!' },
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
    date: '17 Mayıs', time: '11:00',
    slots: 0, totalSlots: 6,
    level: 'intermediate',
    equipment: [{ tr: 'File ve top var', en: 'Net and ball provided' }],
    note: { tr: 'Takım doldu! Bekleme listesine girebilirsiniz.', en: 'Team full! You can join the waitlist.' },
    participants: [
      { name: 'Deniz Y.', initials: 'DY', level: 'intermediate' },
      { name: 'Pınar K.', initials: 'PK', level: 'intermediate' },
      { name: 'Gizem A.', initials: 'GA', level: 'intermediate' },
      { name: 'Ece T.', initials: 'ET', level: 'beginner' },
      { name: 'Selin B.', initials: 'SB', level: 'intermediate' },
      { name: 'Ayşe D.', initials: 'AD', level: 'intermediate' },
    ]
  }
];

const NOTIFICATIONS = [
  {
    id: 1, unread: true,
    icon: '🎾',
    title: { tr: 'Yeni katılım isteği', en: 'New join request' },
    text: { tr: 'Mert B. "Tenis partneri arıyorum" ilanına katılmak istiyor. Seviye: Orta.', en: 'Mert B. wants to join "Looking for tennis partner". Level: Intermediate.' },
    time: { tr: '5 dk önce', en: '5 min ago' },
    hasActions: true
  },
  {
    id: 2, unread: true,
    icon: '✅',
    title: { tr: 'İsteğiniz kabul edildi!', en: 'Request accepted!' },
    text: { tr: 'Ahmet K. halı saha ilanına katılım isteğinizi kabul etti.', en: 'Ahmet K. accepted your request to join the futsal activity.' },
    time: { tr: '1 saat önce', en: '1 hour ago' },
    hasActions: false
  },
  {
    id: 3, unread: false,
    icon: '📅',
    title: { tr: 'Alternatif zaman önerisi', en: 'Alternative time proposed' },
    text: { tr: 'Zeynep A. saat 17:30 yerine 19:00\'u öneriyor.', en: 'Zeynep A. is proposing 19:00 instead of 17:30.' },
    time: { tr: '3 saat önce', en: '3 hours ago' },
    hasActions: true
  },
  {
    id: 4, unread: false,
    icon: '🏐',
    title: { tr: 'Aktivite yarın!', en: 'Activity tomorrow!' },
    text: { tr: '"3v3 Basketbol" aktiviteniz yarın saat 17:30\'da. Hazır mısınız?', en: 'Your "3v3 Basketball" activity is tomorrow at 17:30. Ready?' },
    time: { tr: 'Dün', en: 'Yesterday' },
    hasActions: false
  }
];

// ─── State ───────────────────────────────────────────────────
const state = {
  currentScreen: 'login',
  activeFilter: 'all',
  selectedActivity: null,
  selectedSport: null,
  selectedLevel: null,
  checkedEquipment: new Set(),
  activeTab: 'open',
  lang: 'tr'
};

// ─── Router ──────────────────────────────────────────────────
function navigate(screenId, data = {}) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + screenId);
  if (screen) {
    screen.classList.add('active');
    state.currentScreen = screenId;
    if (data.activity) state.selectedActivity = data.activity;
  }
  updateNav(screenId);
  renderScreen(screenId);
  window.scrollTo(0, 0);
}

function updateNav(screenId) {
  const navScreens = ['home', 'notifs', 'profile'];
  document.querySelectorAll('.nav-item').forEach((item, i) => {
    const screens = ['home', 'notifs', 'profile'];
    item.classList.toggle('active', screens[i] === screenId);
  });
}

// ─── Render Functions ─────────────────────────────────────────
function renderScreen(screenId) {
  switch (screenId) {
    case 'home':    renderHome(); break;
    case 'detail':  renderDetail(); break;
    case 'create':  renderCreate(); break;
    case 'profile': renderProfile(); break;
    case 'notifs':  renderNotifs(); break;
  }
}

function renderHome() {
  const lang = LANG.current;
  const filter = state.activeFilter;

  // Filter chips
  const filtersEl = document.getElementById('filter-chips');
  const sportFilters = [
    { id: 'all', label: t('filterAll'), icon: '🏅' },
    ...SPORTS.map(s => ({ id: s.id, label: t('sports')[s.key], icon: s.icon }))
  ];
  filtersEl.innerHTML = sportFilters.map(f => `
    <button class="chip ${f.id === filter ? 'active' : ''}" onclick="setFilter('${f.id}')">
      ${f.icon} ${f.label}
    </button>
  `).join('');

  // Cards
  const filtered = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.sport === filter);
  const cardsEl = document.getElementById('activity-cards');
  if (filtered.length === 0) {
    cardsEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">${lang === 'tr' ? 'İlan bulunamadı' : 'No activities found'}</div>
        <div class="empty-sub">${lang === 'tr' ? 'Bu spor için henüz ilan yok. İlk ilanı sen aç!' : 'No activities for this sport yet. Be the first!'}</div>
      </div>`;
    return;
  }
  cardsEl.innerHTML = filtered.map(a => renderActivityCard(a)).join('');

  // Search placeholder
  document.getElementById('search-input').placeholder = t('search');

  // Section title
  document.getElementById('home-section-title').textContent = t('nearby');

  // Nav labels
  document.querySelectorAll('.nav-label').forEach((el, i) => {
    el.textContent = [t('navHome'), t('navCreate'), t('navNotif'), t('navProfile')][i];
  });
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

  // Equipment
  const eqEl = document.getElementById('detail-equipment');
  eqEl.innerHTML = a.equipment.length
    ? a.equipment.map(e => `<span class="eq-tag" style="font-size:13px;padding:6px 14px">${e[lang]}</span>`).join('')
    : `<span style="color:var(--text-secondary);font-size:13px">${lang === 'tr' ? 'Belirtilmemiş' : 'Not specified'}</span>`;

  // Participants
  const partEl = document.getElementById('detail-participants');
  partEl.innerHTML = a.participants.map(p => `
    <div class="participant-row">
      <div class="avatar">${p.initials}</div>
      <div class="participant-info">
        <div class="participant-name">${p.name}</div>
        <div class="participant-level">${t('level')[p.level]}</div>
      </div>
    </div>`).join('');

  // Join button
  const joinBtn = document.getElementById('join-btn');
  joinBtn.textContent = isFull ? t('slotsFull') : t('join');
  joinBtn.disabled = isFull;
  joinBtn.style.opacity = isFull ? '0.5' : '1';

  document.getElementById('propose-btn').textContent = t('propose');
  document.getElementById('detail-participants-title').textContent = t('participants');
  document.getElementById('detail-equipment-title').textContent = t('equipment_info');
  document.getElementById('detail-host-title').textContent = t('host');
  document.getElementById('detail-back-text').textContent = lang === 'tr' ? 'Geri' : 'Back';
  document.getElementById('detail-when-label').textContent = t('infoWhen');
  document.getElementById('detail-where-label').textContent = t('infoWhere');
}

function renderCreate() {
  const lang = LANG.current;
  document.getElementById('create-topbar-title').textContent = t('createTitle');

  // Sport grid
  const sportGrid = document.getElementById('sport-grid');
  sportGrid.innerHTML = SPORTS.map(s => `
    <button class="sport-btn ${state.selectedSport === s.id ? 'selected' : ''}" onclick="selectSport('${s.id}')">
      <span class="sport-btn-icon">${s.icon}</span>
      <span class="sport-btn-label">${t('sports')[s.key]}</span>
    </button>`).join('');

  // Level buttons
  const levels = ['beginner', 'intermediate', 'advanced', 'pro'];
  const levelEl = document.getElementById('level-options');
  levelEl.innerHTML = levels.map(l => `
    <button class="level-btn ${state.selectedLevel === l ? 'selected' : ''}" onclick="selectLevel('${l}')">
      ${t('level')[l]}
    </button>`).join('');

  // Equipment checks
  const equipmentOptions = [
    { id: 'racket', icon: '🎾', label: { tr: 'Raket / Top', en: 'Racket / Ball' }, sub: { tr: 'Karşı tarafla paylaşabilirsin', en: 'Can share with partner' } },
    { id: 'ball', icon: '⚽', label: { tr: 'Top', en: 'Ball' }, sub: { tr: 'Sahaya top götürüyorsun', en: 'Bringing a ball' } },
    { id: 'net', icon: '🏐', label: { tr: 'File / Kale', en: 'Net / Goal' }, sub: { tr: 'Ekstra ekipman', en: 'Extra equipment' } },
    { id: 'venue', icon: '🏟', label: { tr: 'Saha reservasyonu bende', en: 'Venue booked by me' }, sub: { tr: 'Ücreti paylaşabiliriz', en: 'Can split costs' } },
  ];
  const eqEl = document.getElementById('equipment-checks');
  eqEl.innerHTML = equipmentOptions.map(e => `
    <div class="check-item ${state.checkedEquipment.has(e.id) ? 'checked' : ''}" onclick="toggleEquipment('${e.id}')">
      <div class="check-box">${state.checkedEquipment.has(e.id) ? '✓' : ''}</div>
      <span style="font-size:20px">${e.icon}</span>
      <div>
        <div class="check-label">${e.label[lang]}</div>
        <div class="check-sub">${e.sub[lang]}</div>
      </div>
    </div>`).join('');

  document.getElementById('publish-btn').textContent = t('publish');
  document.getElementById('create-location').placeholder = t('locationPh');
  document.getElementById('create-notes').placeholder = t('notesPh');

  // Labels
  document.querySelectorAll('[data-label]').forEach(el => {
    const key = el.dataset.label;
    if (t(key) !== key) el.textContent = t(key);
  });
}

function renderProfile() {
  const lang = LANG.current;
  const user = {
    name: 'Seren Uğurlu',
    sub: lang === 'tr' ? 'İstanbul · Üye: Mayıs 2026' : 'Istanbul · Member: May 2026',
    initials: 'SU',
    stats: [
      { value: 12, label: lang === 'tr' ? 'Aktivite' : 'Activities' },
      { value: 8, label: lang === 'tr' ? 'Arkadaş' : 'Friends' },
      { value: '4.9', label: lang === 'tr' ? 'Puan' : 'Rating' }
    ],
    sports: [
      { icon: '🎾', name: lang === 'tr' ? 'Tenis' : 'Tennis', level: 'intermediate' },
      { icon: '🏐', name: lang === 'tr' ? 'Voleybol' : 'Volleyball', level: 'beginner' },
      { icon: '⚽', name: lang === 'tr' ? 'Futbol' : 'Football', level: 'beginner' }
    ],
    history: [
      { icon: '🎾', title: lang === 'tr' ? 'Tenis — Kadıköy' : 'Tennis — Kadıköy', date: '5 Mayıs' },
      { icon: '⚽', title: lang === 'tr' ? 'Halı saha — Beşiktaş' : 'Futsal — Beşiktaş', date: '2 Mayıs' },
      { icon: '🏐', title: lang === 'tr' ? 'Plaj voleybolu' : 'Beach volleyball', date: '28 Nisan' }
    ]
  };

  document.getElementById('profile-initials').textContent = user.initials;
  document.getElementById('profile-name').textContent = user.name;
  document.getElementById('profile-sub').textContent = user.sub;

  document.getElementById('profile-stats').innerHTML = user.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  document.getElementById('profile-sports').innerHTML = user.sports.map(s => `
    <div class="sport-level-row">
      <div class="sport-level-left">${s.icon} ${s.name}</div>
      <span class="level-pill">${t('level')[s.level]}</span>
    </div>`).join('');

  document.getElementById('profile-history').innerHTML = user.history.map(h => `
    <div class="activity-history-item">
      <div class="history-icon">${h.icon}</div>
      <div>
        <div class="history-title">${h.title}</div>
        <div class="history-date">${h.date}</div>
      </div>
    </div>`).join('');

  document.getElementById('profile-topbar-title').textContent = t('profileTitle');
  document.getElementById('profile-sports-title').textContent = lang === 'tr' ? 'Sporlarım' : 'My Sports';
  document.getElementById('profile-history-title').textContent = lang === 'tr' ? 'Aktivite Geçmişi' : 'Activity History';
}

function renderNotifs() {
  const lang = LANG.current;
  const el = document.getElementById('notifs-list');
  el.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-card ${n.unread ? 'unread' : ''}">
      <div class="notif-top">
        <div class="avatar" style="font-size:18px;background:linear-gradient(135deg,#F3F0FF,#FCE7F3);color:#7C3AED">${n.icon}</div>
        <div class="notif-body">
          <div class="notif-title">${n.title[lang]}</div>
          <div class="notif-text">${n.text[lang]}</div>
          <div class="notif-time">${n.time[lang]}</div>
        </div>
      </div>
      ${n.hasActions ? `
      <div class="notif-actions">
        <button class="btn btn-primary btn-sm" onclick="handleNotif(${n.id}, 'accept')" style="flex:1">${t('accept')}</button>
        <button class="btn btn-outline btn-sm" onclick="handleNotif(${n.id}, 'reject')" style="flex:1">${t('reject')}</button>
      </div>` : ''}
    </div>`).join('');

  document.getElementById('notifs-topbar-title').textContent = t('notifsTitle');
}

// ─── Event Handlers ──────────────────────────────────────────
function setFilter(sportId) {
  state.activeFilter = sportId;
  renderHome();
}

function openDetail(activityId) {
  const activity = ACTIVITIES.find(a => a.id === activityId);
  if (activity) navigate('detail', { activity });
}

function selectSport(sportId) {
  state.selectedSport = state.selectedSport === sportId ? null : sportId;
  renderCreate();
}

function selectLevel(level) {
  state.selectedLevel = state.selectedLevel === level ? null : level;
  renderCreate();
}

function toggleEquipment(id) {
  if (state.checkedEquipment.has(id)) {
    state.checkedEquipment.delete(id);
  } else {
    state.checkedEquipment.add(id);
  }
  renderCreate();
}

function handleJoin() {
  showToast('🎉 ' + t('joined'));
}

function handlePropose() {
  const lang = LANG.current;
  const msg = lang === 'tr'
    ? '📅 Alternatif zaman önerisi gönderildi!'
    : '📅 Alternative time suggestion sent!';
  showToast(msg);
}

function handlePublish() {
  if (!state.selectedSport) {
    const msg = LANG.current === 'tr' ? '⚠️ Lütfen bir spor seçin' : '⚠️ Please select a sport';
    showToast(msg);
    return;
  }
  showToast('🎉 ' + t('published'));
  state.selectedSport = null;
  state.selectedLevel = null;
  state.checkedEquipment.clear();
  setTimeout(() => navigate('home'), 800);
}

function handleNotif(id, action) {
  const lang = LANG.current;
  const msg = action === 'accept'
    ? (lang === 'tr' ? '✅ Kabul edildi' : '✅ Accepted')
    : (lang === 'tr' ? '❌ Reddedildi' : '❌ Rejected');
  showToast(msg);
  const idx = NOTIFICATIONS.findIndex(n => n.id === id);
  if (idx !== -1) {
    NOTIFICATIONS[idx].hasActions = false;
    NOTIFICATIONS[idx].unread = false;
  }
  renderNotifs();
}

function toggleLang() {
  LANG.current = LANG.current === 'tr' ? 'en' : 'tr';
  state.lang = LANG.current;
  renderScreen(state.currentScreen);
  document.getElementById('lang-toggle').textContent = LANG.current === 'tr' ? 'EN' : 'TR';
}

function handleLogin() {
  const btn = document.getElementById('google-login-btn');
  btn.textContent = LANG.current === 'tr' ? 'Giriş yapılıyor...' : 'Signing in...';
  btn.disabled = true;
  setTimeout(() => {
    navigate('home');
  }, 1200);
}

// ─── Toast ───────────────────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  navigate('login');

  // Update login screen text
  document.getElementById('app-tagline').textContent = t('appTagline');
  document.getElementById('google-login-btn').innerHTML = `
    <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
    ${t('loginWith')}`;
  document.getElementById('login-note').textContent = t('loginNote');
});
