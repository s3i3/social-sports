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
    loadingVenues: 'Tesisler yükleniyor...', noVenues: 'Bu bölgede tesis bulunamadı.',
    nearbyVenuesCreate: 'Yakın Spor Tesisleri',
    exploreTitle: 'Burada Ne Yapılabilir?',
    exploreSearch: 'Mahalle, ilçe veya şehir ara...',
    exploreBtn: '🔍 Keşfet',
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
    loadingVenues: 'Loading venues...', noVenues: 'No venues found in this area.',
    nearbyVenuesCreate: 'Nearby Sports Venues',
    exploreTitle: 'What Can I Do Here?',
    exploreSearch: 'Search neighbourhood, district or city...',
    exploreBtn: '🔍 Explore',
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

// ─── Context-aware location questions ─────────────────────
const SPORT_LOCATION_Q = {
  tennis:      { tr: 'Hangi kortta oynayacaksınız?',         en: 'Which court will you play at?' },
  padel:       { tr: 'Hangi padel kortunda?',                en: 'Which padel court?' },
  badminton:   { tr: 'Hangi badminton kortunda?',            en: 'Which badminton court?' },
  squash:      { tr: 'Hangi squash kortunda?',               en: 'Which squash court?' },
  tabletennis: { tr: 'Hangi masa tenisi salonunda?',         en: 'Which table tennis venue?' },
  football:    { tr: 'Hangi sahada oynayacaksınız?',         en: 'Which pitch or field?' },
  basketball:  { tr: 'Hangi basketbol sahasında?',           en: 'Which basketball court?' },
  volleyball:  { tr: 'Hangi sahada oynayacaksınız?',         en: 'Which court or beach?' },
  frisbee:     { tr: 'Hangi park veya alanda?',              en: 'Which park or field?' },
  yoga:        { tr: 'Nerede pratik yapacaksınız?',          en: 'Where will you practice?' },
  pilates:     { tr: 'Nerede pratik yapacaksınız?',          en: 'Where will you practice?' },
  fitness:     { tr: 'Hangi spor salonunda?',                en: 'Which gym?' },
  boxing:      { tr: 'Hangi salonda antrenman yapacaksınız?',en: 'Which boxing gym?' },
  martial:     { tr: 'Hangi dojo / salonda?',                en: 'Which dojo or gym?' },
  dancing:     { tr: 'Hangi dans stüdyosunda?',              en: 'Which dance studio?' },
  cycling:     { tr: 'Hangi güzergahı kullanacaksınız?',     en: 'Which cycling route?' },
  running:     { tr: 'Hangi parkurda koşacaksınız?',         en: 'Which running route?' },
  hiking:      { tr: 'Hangi rotadan yürüyeceksiniz?',        en: 'Which hiking trail?' },
  swimming:    { tr: 'Hangi havuz veya plajda?',             en: 'Which pool or beach?' },
  rowing:      { tr: 'Hangi su yolunda kürek çekeceksiniz?', en: 'Which waterway?' },
  golf:        { tr: 'Hangi golf sahasında?',                en: 'Which golf course?' },
  climbing:    { tr: 'Hangi tırmanış duvarı veya kayalık?',  en: 'Which climbing wall or rock?' },
  skiing:      { tr: 'Hangi kayak pistinde?',                en: 'Which ski slope?' },
  iceskating:  { tr: 'Hangi buz pistinde?',                  en: 'Which ice rink?' },
  archery:     { tr: 'Hangi okçuluk tesisinde?',             en: 'Which archery range?' },
  esports:     { tr: 'LAN kafe veya online platform?',       en: 'LAN cafe or online platform?' },
};

function getLocationQuestion(sportId) {
  const lang = LANG.current;
  if (sportId && SPORT_LOCATION_Q[sportId]) return SPORT_LOCATION_Q[sportId][lang];
  return lang === 'tr' ? 'Nerede buluşacaksınız?' : 'Where will you meet?';
}

// ─── OSM sport tag mapping ─────────────────────────────────
const SPORT_OSM = {
  tennis: 'tennis', football: 'football', basketball: 'basketball',
  volleyball: 'volleyball', padel: 'padel', badminton: 'badminton',
  squash: 'squash', tabletennis: 'table_tennis', swimming: 'swimming',
  golf: 'golf', cycling: 'cycling', running: 'running',
  climbing: 'climbing', rowing: 'rowing', archery: 'archery',
  boxing: 'boxing', martial: 'martial_arts', fitness: 'fitness',
};

// ─── Sports & Activities ──────────────────────────────────
const SPORTS = [
  { id: 'tennis',     icon: '🎾', key: 'tennis' },
  { id: 'football',   icon: '⚽', key: 'football' },
  { id: 'basketball', icon: '🏀', key: 'basketball' },
  { id: 'volleyball', icon: '🏐', key: 'volleyball' },
  { id: 'padel',      icon: '🏓', key: 'padel' },
  { id: 'badminton',  icon: '🏸', key: 'badminton' },
  { id: 'cycling',    icon: '🚴', key: 'cycling' },
  { id: 'running',    icon: '🏃', key: 'running' },
  { id: 'swimming',   icon: '🏊', key: 'swimming' },
  { id: 'hiking',     icon: '🥾', key: 'hiking' },
  { id: 'yoga',       icon: '🧘', key: 'yoga' },
  { id: 'pilates',    icon: '🤸', key: 'pilates' },
  { id: 'golf',       icon: '⛳', key: 'golf' },
  { id: 'tabletennis',icon: '🏓', key: 'tabletennis' },
  { id: 'squash',     icon: '🎯', key: 'squash' },
  { id: 'boxing',     icon: '🥊', key: 'boxing' },
  { id: 'martial',    icon: '🥋', key: 'martial' },
  { id: 'dancing',    icon: '💃', key: 'dancing' },
  { id: 'climbing',   icon: '🧗', key: 'climbing' },
  { id: 'skiing',     icon: '⛷️', key: 'skiing' },
  { id: 'fitness',    icon: '💪', key: 'fitness' },
  { id: 'frisbee',    icon: '🥏', key: 'frisbee' },
  { id: 'rowing',     icon: '🚣', key: 'rowing' },
  { id: 'iceskating', icon: '⛸️', key: 'iceskating' },
  { id: 'archery',    icon: '🎯', key: 'archery' },
  { id: 'esports',    icon: '🎮', key: 'esports' },
];

const SPORT_ICON = Object.fromEntries(SPORTS.map(s => [s.id, s.icon]));

// ─── Mock Activities ───────────────────────────────────────
const ISTANBUL = { lat: 41.0082, lng: 28.9784 };

const ACTIVITIES = [
  { id:1, sport:'tennis', icon:'🎾', title:{tr:'Tenis partneri arıyorum',en:'Looking for tennis partner'}, host:{name:'Seren U.',initials:'SU',id:'me'}, location:{tr:'Kadıköy Tenis Kulübü',en:'Kadıköy Tennis Club'}, coords:{lat:40.9909,lng:29.0295}, date:'12 Mayıs', time:'18:00', slots:1, totalSlots:2, level:'intermediate', equipment:[{tr:'2 Tenis Raketi',en:'2 Tennis Rackets'},{tr:'Top bende',en:'Balls provided'}], note:{tr:'Raketim var, gerekirse paylaşabilirim.',en:'Rackets to share if needed.'}, participants:[{name:'Seren U.',initials:'SU',level:'intermediate'}] },
  { id:2, sport:'football', icon:'⚽', title:{tr:'Halı saha — 3 kişi eksik',en:'Futsal — need 3 more'}, host:{name:'Ahmet K.',initials:'AK',id:'ak'}, location:{tr:'Beşiktaş Halı Saha',en:'Beşiktaş Futsal Court'}, coords:{lat:41.0451,lng:29.0078}, date:'13 Mayıs', time:'20:00', slots:3, totalSlots:10, level:'beginner', equipment:[], note:{tr:'Herkesin ayakkabısı olsun yeter!',en:'Just bring your boots!'}, participants:[{name:'Ahmet K.',initials:'AK',level:'beginner'},{name:'Mehmet Y.',initials:'MY',level:'beginner'},{name:'Can T.',initials:'CT',level:'intermediate'}] },
  { id:3, sport:'basketball', icon:'🏀', title:{tr:'3v3 Basketbol — Üsküdar',en:'3v3 Basketball — Üsküdar'}, host:{name:'Zeynep A.',initials:'ZA',id:'za'}, location:{tr:'Üsküdar Açık Basketbol Sahası',en:'Üsküdar Open Court'}, coords:{lat:41.0219,lng:29.0152}, date:'14 Mayıs', time:'17:30', slots:2, totalSlots:6, level:'advanced', equipment:[{tr:'Basketbol topu var',en:'Ball provided'}], note:{tr:'Rekabetçi oynamak istiyoruz.',en:'Looking for competitive play.'}, participants:[{name:'Zeynep A.',initials:'ZA',level:'advanced'},{name:'Yıldız K.',initials:'YK',level:'advanced'}] },
  { id:4, sport:'padel', icon:'🏓', title:{tr:'Padel — ilk kez deneyenlere',en:'Padel for beginners'}, host:{name:'Kaan M.',initials:'KM',id:'km'}, location:{tr:'Ataşehir Padel Center',en:'Ataşehir Padel Center'}, coords:{lat:40.9769,lng:29.1201}, date:'15 Mayıs', time:'10:00', slots:2, totalSlots:4, level:'beginner', equipment:[{tr:'4 Padel Raketi',en:'4 Padel Rackets'},{tr:'Toplar',en:'Balls'}], note:{tr:'Tüm ekipman bende!',en:'All equipment provided!'}, participants:[{name:'Kaan M.',initials:'KM',level:'beginner'}] },
  { id:5, sport:'volleyball', icon:'🏐', title:{tr:'Plaj voleybolu — Florya',en:'Beach volleyball — Florya'}, host:{name:'Deniz Y.',initials:'DY',id:'dy'}, location:{tr:'Florya Plajı',en:'Florya Beach'}, coords:{lat:40.9721,lng:28.7841}, date:'17 Mayıs', time:'11:00', slots:0, totalSlots:6, level:'intermediate', equipment:[{tr:'File ve top var',en:'Net and ball provided'}], note:{tr:'Takım doldu!',en:'Team full!'}, participants:[{name:'Deniz Y.',initials:'DY',level:'intermediate'},{name:'Pınar K.',initials:'PK',level:'intermediate'}] },
  { id:6, sport:'running', icon:'🏃', title:{tr:'Sabah koşusu — Caddebostan',en:'Morning run — Caddebostan'}, host:{name:'Lena S.',initials:'LS',id:'ls'}, location:{tr:'Caddebostan Sahil Yolu',en:'Caddebostan Promenade'}, coords:{lat:40.9627,lng:29.0601}, date:'11 Mayıs', time:'07:00', slots:4, totalSlots:10, level:'beginner', equipment:[], note:{tr:'5 km, rahat tempo.',en:'5km easy pace.'}, participants:[{name:'Lena S.',initials:'LS',level:'beginner'}] },
  { id:7, sport:'yoga', icon:'🧘', title:{tr:'Açık hava yoga — Gülhane',en:'Outdoor yoga — Gülhane'}, host:{name:'Elif B.',initials:'EB',id:'eb'}, location:{tr:'Gülhane Parkı',en:'Gülhane Park'}, coords:{lat:41.0131,lng:28.9812}, date:'16 Mayıs', time:'08:30', slots:6, totalSlots:15, level:'beginner', equipment:[{tr:'Kendi matını getir',en:'Bring your own mat'}], note:{tr:'Tüm seviyeler katılabilir.',en:'All levels welcome.'}, participants:[{name:'Elif B.',initials:'EB',level:'beginner'}] },
  { id:8, sport:'hiking', icon:'🥾', title:{tr:'Belgrad Ormanı yürüyüşü',en:'Belgrade Forest hike'}, host:{name:'Tarık D.',initials:'TD',id:'td'}, location:{tr:'Belgrad Ormanı Giriş',en:'Belgrade Forest Entrance'}, coords:{lat:41.1721,lng:28.9784}, date:'18 Mayıs', time:'09:00', slots:5, totalSlots:12, level:'intermediate', equipment:[], note:{tr:'12 km, su getir.',en:'12km, bring water.'}, participants:[{name:'Tarık D.',initials:'TD',level:'intermediate'}] },
];

const SUGGESTED_PLAYERS = [
  { name:'Mert B.', initials:'MB', sport:'tennis', level:'intermediate', distance:'0.8 km', rating:4.7 },
  { name:'Ceren A.', initials:'CA', sport:'tennis', level:'intermediate', distance:'1.3 km', rating:4.9 },
  { name:'Burak T.', initials:'BT', sport:'tennis', level:'advanced',     distance:'2.1 km', rating:4.5 },
  { name:'Naz K.',   initials:'NK', sport:'football',level:'beginner',    distance:'1.6 km', rating:4.8 },
];

const NOTIFICATIONS = [
  { id:1, unread:true,  icon:'🎾', title:{tr:'Yeni katılım isteği',en:'New join request'}, text:{tr:'Mert B. tenis ilanınıza katılmak istiyor. Seviye: Orta.',en:'Mert B. wants to join your tennis activity. Level: Intermediate.'}, time:{tr:'5 dk önce',en:'5 min ago'}, hasActions:true },
  { id:2, unread:true,  icon:'✅', title:{tr:'İsteğiniz kabul edildi!',en:'Request accepted!'}, text:{tr:'Ahmet K. halı saha ilanına isteğinizi kabul etti.',en:'Ahmet K. accepted your futsal request.'}, time:{tr:'1 saat önce',en:'1 hour ago'}, hasActions:false },
  { id:3, unread:false, icon:'📅', title:{tr:'Alternatif zaman önerisi',en:'Alternative time proposed'}, text:{tr:'Zeynep A. 17:30 yerine 19:00\'u öneriyor.',en:'Zeynep A. is proposing 19:00 instead of 17:30.'}, time:{tr:'3 saat önce',en:'3 hours ago'}, hasActions:true },
  { id:4, unread:false, icon:'🏐', title:{tr:'Aktivite yarın!',en:'Activity tomorrow!'}, text:{tr:'"3v3 Basketbol" aktiviteniz yarın saat 17:30\'da.',en:'Your "3v3 Basketball" is tomorrow at 17:30.'}, time:{tr:'Dün',en:'Yesterday'}, hasActions:false },
];

// ─── State ────────────────────────────────────────────────
const state = {
  currentScreen: 'login',
  activeFilter: 'all',
  homeView: 'list',
  selectedActivity: null,
  selectedSport: null,
  selectedLevel: null,
  checkedEquipment: new Set(),
  createCoords: null,
  createLocationName: '',
  createMapVisible: false,
  maps: {},
  venueMarkers: [],
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
  const map = { home:0, create:1, notifs:2, profile:3 };
  document.querySelectorAll('.bottom-nav').forEach(nav => {
    nav.querySelectorAll('.nav-item').forEach((item, i) => {
      item.classList.toggle('active', i === map[screenId]);
    });
  });
}

function renderScreen(id) {
  ({ home:renderHome, detail:renderDetail, create:renderCreate, profile:renderProfile, notifs:renderNotifs }[id] || (() => {}))();
}

// ─── HOME ─────────────────────────────────────────────────
function renderHome() {
  const filter = state.activeFilter;

  document.getElementById('filter-chips').innerHTML = [
    { id:'all', label:t('filterAll'), icon:'🏅' },
    ...SPORTS.map(s => ({ id:s.id, label:t('sports')[s.key], icon:s.icon }))
  ].map(f => `<button class="chip ${f.id===filter?'active':''}" onclick="setFilter('${f.id}')">${f.icon} ${f.label}</button>`).join('');

  const btnList = document.getElementById('btn-list-view');
  const btnMap  = document.getElementById('btn-map-view');
  if (btnList) btnList.textContent = '☰ ' + t('listView');
  if (btnMap)  btnMap.textContent  = '🗺 ' + t('mapView');

  if (state.homeView === 'map') {
    document.getElementById('home-list-view').style.display = 'none';
    document.getElementById('home-map-view').style.display = 'block';
    btnList.classList.remove('active'); btnMap.classList.add('active');
    initHomeMap(filter);
  } else {
    document.getElementById('home-list-view').style.display = 'block';
    document.getElementById('home-map-view').style.display = 'none';
    btnList.classList.add('active'); btnMap.classList.remove('active');
    renderActivityList(filter);
  }

  document.getElementById('search-input').placeholder = t('search');
  document.getElementById('home-section-title').textContent = t('nearby');
  document.querySelectorAll('.lang-toggle-btn').forEach(b => b.textContent = LANG.current==='tr'?'EN':'TR');
}

function renderActivityList(filter) {
  const filtered = filter==='all' ? ACTIVITIES : ACTIVITIES.filter(a => a.sport===filter);
  const cardsEl = document.getElementById('activity-cards');
  if (!filtered.length) {
    const lang = LANG.current;
    cardsEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">${lang==='tr'?'İlan bulunamadı':'No activities found'}</div><div class="empty-sub">${lang==='tr'?'Bu spor için henüz ilan yok. İlk ilanı sen aç!':'No activities yet. Be the first!'}</div></div>`;
    return;
  }
  cardsEl.innerHTML = filtered.map(a => {
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
            <div class="card-host"><div class="avatar">${a.host.initials}</div><span class="host-name">${a.host.name}</span></div>
            <span class="slots-badge ${isFull?'full':''}">${isFull ? t('slotsFull') : '👥 '+t('slots',a.slots)}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ─── HOME MAP ─────────────────────────────────────────────
function initHomeMap(filter) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('home-map-container');
  if (state.maps.home) { state.maps.home.remove(); state.maps.home = null; mapEl.innerHTML = ''; }

  const map = L.map(mapEl, { zoomControl:true, attributionControl:false })
    .setView([ISTANBUL.lat, ISTANBUL.lng], 12);
  state.maps.home = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19 }).addTo(map);

  const filtered = filter==='all' ? ACTIVITIES : ACTIVITIES.filter(a => a.sport===filter);
  filtered.forEach(a => {
    const icon = L.divIcon({ className:'', html:`<div class="map-pin-activity">${a.icon}</div>`, iconSize:[40,40], iconAnchor:[20,20] });
    L.marker([a.coords.lat,a.coords.lng],{icon}).addTo(map)
      .bindPopup(`<b>${a.title[LANG.current]}</b><br>${a.location[LANG.current]}<br>${a.date} · ${a.time}<br><button onclick="openDetail(${a.id})" class="popup-btn">Detay →</button>`);
  });

  setTimeout(() => map.invalidateSize(), 100);
}

// ─── DETAIL ───────────────────────────────────────────────
function renderDetail() {
  const a = state.selectedActivity; if (!a) return;
  const lang = LANG.current; const isFull = a.slots===0;

  document.getElementById('detail-sport-icon').textContent = a.icon;
  document.getElementById('detail-title').textContent = a.title[lang];
  document.getElementById('detail-sport-tag').textContent = t('sports')[a.sport];
  document.getElementById('detail-location').textContent = a.location[lang];
  document.getElementById('detail-datetime').textContent = `${a.date} · ${a.time}`;
  document.getElementById('detail-slots').textContent = isFull ? t('slotsFull') : t('slots',a.slots);
  document.getElementById('detail-level').textContent = t('level')[a.level];
  document.getElementById('detail-host-initials').textContent = a.host.initials;
  document.getElementById('detail-host-name').textContent = a.host.name;
  document.getElementById('detail-note').textContent = a.note[lang];

  document.getElementById('detail-equipment').innerHTML = a.equipment.length
    ? a.equipment.map(e=>`<span class="eq-tag" style="font-size:13px;padding:6px 14px">${e[lang]}</span>`).join('')
    : `<span style="color:var(--text-secondary);font-size:13px">${lang==='tr'?'Belirtilmemiş':'Not specified'}</span>`;

  document.getElementById('detail-participants').innerHTML = a.participants.map(p=>`
    <div class="participant-row">
      <div class="avatar">${p.initials}</div>
      <div class="participant-info"><div class="participant-name">${p.name}</div><div class="participant-level">${t('level')[p.level]}</div></div>
    </div>`).join('');

  const suggested = SUGGESTED_PLAYERS.filter(p=>p.sport===a.sport).slice(0,3);
  document.getElementById('detail-suggested-players').innerHTML = suggested.length
    ? suggested.map(p=>`
        <div class="participant-row" style="padding:8px 0">
          <div class="avatar">${p.initials}</div>
          <div class="participant-info" style="flex:1"><div class="participant-name">${p.name}</div><div class="participant-level">⭐ ${p.rating} · ${p.distance} · ${t('level')[p.level]}</div></div>
          <button class="btn btn-sm btn-outline" onclick="showToast('📨 Davet gönderildi!')" style="font-size:11px">${lang==='tr'?'Davet Et':'Invite'}</button>
        </div>`).join('')
    : `<div style="color:var(--text-secondary);font-size:13px">${lang==='tr'?'Öneri bulunamadı':'No suggestions'}</div>`;

  const joinBtn = document.getElementById('join-btn');
  joinBtn.textContent = isFull ? t('slotsFull') : t('join');
  joinBtn.disabled = isFull; joinBtn.style.opacity = isFull ? '0.5' : '1';
  document.getElementById('propose-btn').textContent = t('propose');
  document.getElementById('detail-participants-title').textContent = t('participants');
  document.getElementById('detail-equipment-title').textContent = t('equipment_info');
  document.getElementById('detail-host-title').textContent = t('host');
  document.getElementById('detail-back-text').textContent = lang==='tr'?'Geri':'Back';
  document.getElementById('detail-when-label').textContent = t('infoWhen');
  document.getElementById('detail-where-label').textContent = t('infoWhere');
  document.getElementById('detail-suggested-title').textContent = t('teammatesTitle');

  // Load nearby venues from OSM
  loadDetailVenues(a.coords.lat, a.coords.lng, a.sport);
  initDetailMap(a);
}

async function loadDetailVenues(lat, lng, sport) {
  const lang = LANG.current;
  const el = document.getElementById('detail-venues');
  el.innerHTML = `<div class="venue-loading">⏳ ${t('loadingVenues')}</div>`;

  const venues = await fetchNearbyVenues(lat, lng, sport, 3000);
  if (!venues.length) {
    el.innerHTML = `<div style="color:var(--text-secondary);font-size:13px">${t('noVenues')}</div>`;
    return;
  }
  el.innerHTML = venues.slice(0,5).map(v => {
    const name = v.tags?.name || (lang==='tr'?'İsimsiz Tesis':'Unnamed Venue');
    const sportTag = v.tags?.sport || v.tags?.leisure || '';
    const sportIcon = getSportIconFromOsm(v.tags);
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="width:36px;height:36px;background:#F3F0FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px">${sportIcon}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600">${name}</div>
          <div style="font-size:12px;color:var(--text-secondary)">${sportTag}</div>
        </div>
      </div>`;
  }).join('');
}

function initDetailMap(a) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('detail-map-container');
  if (state.maps.detail) { state.maps.detail.remove(); state.maps.detail = null; mapEl.innerHTML = ''; }
  const map = L.map(mapEl, { zoomControl:false, attributionControl:false, scrollWheelZoom:false })
    .setView([a.coords.lat,a.coords.lng],15);
  state.maps.detail = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19 }).addTo(map);
  const icon = L.divIcon({ className:'', html:`<div class="map-pin-activity" style="width:44px;height:44px;font-size:22px;border:3px solid #fff">${a.icon}</div>`, iconSize:[44,44], iconAnchor:[22,22] });
  L.marker([a.coords.lat,a.coords.lng],{icon}).addTo(map).bindPopup(a.location[LANG.current]).openPopup();
  setTimeout(() => map.invalidateSize(), 200);
}

// ─── CREATE ACTIVITY ──────────────────────────────────────
function renderCreate() {
  const lang = LANG.current;
  document.getElementById('create-topbar-title').textContent = t('createTitle');

  // Sport grid
  document.getElementById('sport-grid').innerHTML = SPORTS.map(s => `
    <button class="sport-btn ${state.selectedSport===s.id?'selected':''}" onclick="selectSport('${s.id}')">
      <span class="sport-btn-icon">${s.icon}</span>
      <span class="sport-btn-label">${t('sports')[s.key]}</span>
    </button>`).join('');

  // Context-aware location question
  document.getElementById('location-label').textContent = getLocationQuestion(state.selectedSport);

  // Level
  document.getElementById('level-options').innerHTML = ['beginner','intermediate','advanced','pro'].map(l =>
    `<button class="level-btn ${state.selectedLevel===l?'selected':''}" onclick="selectLevel('${l}')">${t('level')[l]}</button>`).join('');

  // Equipment
  const eqOpts = [
    { id:'racket', icon:'🎾', label:{tr:'Raket / Top',en:'Racket / Ball'}, sub:{tr:'Paylaşabilirsin',en:'Can share'} },
    { id:'ball',   icon:'⚽', label:{tr:'Top',en:'Ball'},                  sub:{tr:'Top götürüyorsun',en:'Bringing a ball'} },
    { id:'net',    icon:'🏐', label:{tr:'File / Kale',en:'Net / Goal'},    sub:{tr:'Ekstra ekipman',en:'Extra equipment'} },
    { id:'venue',  icon:'🏟', label:{tr:'Saha rezervasyonu bende',en:'Venue booked by me'}, sub:{tr:'Ücreti paylaşabiliriz',en:'Can split costs'} },
  ];
  document.getElementById('equipment-checks').innerHTML = eqOpts.map(e => `
    <div class="check-item ${state.checkedEquipment.has(e.id)?'checked':''}" onclick="toggleEquipment('${e.id}')">
      <div class="check-box">${state.checkedEquipment.has(e.id)?'✓':''}</div>
      <span style="font-size:20px">${e.icon}</span>
      <div><div class="check-label">${e.label[lang]}</div><div class="check-sub">${e.sub[lang]}</div></div>
    </div>`).join('');

  document.getElementById('publish-btn').textContent = t('publish');
  document.getElementById('create-notes').placeholder = t('notesPh');
  document.getElementById('create-pick-map-btn').textContent = '📍 ' + t('pickLocation');

  if (state.createLocationName) {
    document.getElementById('create-location-input').value = state.createLocationName;
  }

  // Map visibility
  const mapContainer = document.getElementById('create-map-container');
  if (mapContainer) {
    mapContainer.style.display = state.createMapVisible ? 'block' : 'none';
    if (state.createMapVisible) initCreateMap();
  }
}

function initCreateMap() {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('create-map-container');
  if (!mapEl) return;
  if (state.maps.create) { state.maps.create.remove(); state.maps.create = null; mapEl.innerHTML = ''; }

  const center = state.createCoords || ISTANBUL;
  const map = L.map(mapEl, { zoomControl:true, attributionControl:false }).setView([center.lat,center.lng],13);
  state.maps.create = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19 }).addTo(map);

  let marker = null;
  if (state.createCoords) marker = L.marker([state.createCoords.lat,state.createCoords.lng]).addTo(map);

  map.on('click', async (e) => {
    const { lat, lng } = e.latlng;
    state.createCoords = { lat, lng };
    if (marker) map.removeLayer(marker);
    marker = L.marker([lat,lng]).addTo(map);
    // Reverse geocode
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await r.json();
      const name = data.display_name?.split(',').slice(0,3).join(',').trim() || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
      state.createLocationName = name;
      document.getElementById('create-location-input').value = name;
    } catch {
      document.getElementById('create-location-input').value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    }
    showToast('📍 ' + (LANG.current==='tr'?'Konum seçildi':'Location selected'));
    // Load venues near clicked point
    loadCreateVenues(lat, lng, state.selectedSport);
  });

  // If coords already set, load venues
  if (state.createCoords) loadCreateVenues(state.createCoords.lat, state.createCoords.lng, state.selectedSport);

  setTimeout(() => map.invalidateSize(), 200);
}

async function loadCreateVenues(lat, lng, sport) {
  const lang = LANG.current;
  const listEl = document.getElementById('create-venues-list');
  if (!listEl) return;
  listEl.style.display = 'block';
  listEl.innerHTML = `<div class="venue-loading">⏳ ${t('loadingVenues')}</div>`;

  const venues = await fetchNearbyVenues(lat, lng, sport, 2000);

  if (!venues.length) {
    listEl.innerHTML = `<div class="venue-empty">${t('noVenues')}</div>`;
    return;
  }

  // Also put pins on create map
  if (state.maps.create) {
    state.venueMarkers.forEach(m => state.maps.create.removeLayer(m));
    state.venueMarkers = [];
    venues.slice(0,10).forEach(v => {
      const vLat = v.lat || v.center?.lat; const vLng = v.lon || v.center?.lon;
      if (!vLat) return;
      const vIcon = L.divIcon({ className:'', html:`<div class="map-pin-venue">${getSportIconFromOsm(v.tags)}</div>`, iconSize:[32,32], iconAnchor:[16,16] });
      const m = L.marker([vLat,vLng],{icon:vIcon}).addTo(state.maps.create)
        .bindPopup(`<b>${v.tags?.name||'Tesis'}</b><br>${v.tags?.sport||v.tags?.leisure||''}`);
      state.venueMarkers.push(m);
    });
  }

  listEl.innerHTML = `
    <div class="venues-list-title">${t('nearbyVenuesCreate')} (${venues.length})</div>
    ${venues.slice(0,8).map(v => {
      const vLat = v.lat||v.center?.lat; const vLng = v.lon||v.center?.lon;
      const name = v.tags?.name || (lang==='tr'?'İsimsiz Tesis':'Unnamed Venue');
      const sportTag = v.tags?.sport || v.tags?.leisure || '';
      const icon = getSportIconFromOsm(v.tags);
      return `
        <div class="venue-result-item" onclick="selectVenueForCreate('${name.replace(/'/g,"\\'")}', ${vLat||lat}, ${vLng||lng})">
          <div class="venue-result-icon">${icon}</div>
          <div class="venue-result-info">
            <div class="venue-result-name">${name}</div>
            <div class="venue-result-sub">${sportTag}</div>
          </div>
          <span style="color:var(--grad-start);font-size:12px;font-weight:600">Seç</span>
        </div>`;
    }).join('')}`;
}

function selectVenueForCreate(name, lat, lng) {
  state.createLocationName = name;
  state.createCoords = { lat, lng };
  document.getElementById('create-location-input').value = name;
  if (state.maps.create) {
    state.maps.create.setView([lat,lng],16);
  }
  showToast('📍 ' + name.split(',')[0]);
  hideLocationDropdown();
}

// ─── EXPLORE: "Burada ne yapılabilir?" ────────────────────
async function exploreLocation() {
  const query = document.getElementById('explore-input').value.trim();
  if (!query) return;
  const resultEl = document.getElementById('explore-results');
  resultEl.innerHTML = `<div class="venue-loading">⏳ ${LANG.current==='tr'?'Aranıyor...':'Searching...'}</div>`;

  // Geocode
  try {
    const geoR = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query+' Türkiye')}&format=json&limit=1`);
    const geoData = await geoR.json();
    if (!geoData.length) { resultEl.innerHTML=`<div class="venue-empty">${LANG.current==='tr'?'Konum bulunamadı':'Location not found'}</div>`; return; }
    const { lat, lon, display_name } = geoData[0];

    // Fetch all sports venues
    const venues = await fetchNearbyVenues(parseFloat(lat), parseFloat(lon), null, 5000);

    if (!venues.length) { resultEl.innerHTML=`<div class="venue-empty">${t('noVenues')}</div>`; return; }

    // Group by sport/type
    const groups = {};
    venues.forEach(v => {
      const key = v.tags?.sport || v.tags?.leisure || 'other';
      if (!groups[key]) groups[key] = [];
      groups[key].push(v);
    });

    const lang = LANG.current;
    resultEl.innerHTML = `
      <div class="explore-location-title">📍 ${display_name.split(',').slice(0,2).join(',')}</div>
      <div class="explore-groups">
        ${Object.entries(groups).slice(0,8).map(([sport, items]) => `
          <div class="explore-group">
            <div class="explore-group-header">${getSportIconFromTag(sport)} ${translateOsmSport(sport)} <span class="explore-count">${items.length}</span></div>
            ${items.slice(0,3).map(v => `
              <div class="venue-result-item" style="padding:8px 0">
                <div class="venue-result-info">
                  <div class="venue-result-name">${v.tags?.name||(lang==='tr'?'İsimsiz Tesis':'Unnamed Venue')}</div>
                  <div class="venue-result-sub">${v.tags?.['addr:street']||v.tags?.leisure||''}</div>
                </div>
              </div>`).join('')}
          </div>`).join('')}
      </div>`;

    // Update explore map
    initExploreMap(parseFloat(lat), parseFloat(lon), venues);
  } catch (e) {
    resultEl.innerHTML = `<div class="venue-empty">${LANG.current==='tr'?'Bir hata oluştu, tekrar deneyin.':'An error occurred, try again.'}</div>`;
  }
}

function initExploreMap(lat, lng, venues) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('explore-map');
  if (!mapEl) return;
  mapEl.style.display = 'block';
  if (state.maps.explore) { state.maps.explore.remove(); state.maps.explore = null; mapEl.innerHTML = ''; }

  const map = L.map(mapEl, { zoomControl:true, attributionControl:false }).setView([lat,lng],14);
  state.maps.explore = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19 }).addTo(map);

  venues.slice(0,30).forEach(v => {
    const vLat = v.lat||v.center?.lat; const vLng = v.lon||v.center?.lon;
    if (!vLat) return;
    const icon = L.divIcon({ className:'', html:`<div class="map-pin-venue">${getSportIconFromOsm(v.tags)}</div>`, iconSize:[32,32], iconAnchor:[16,16] });
    L.marker([vLat,vLng],{icon}).addTo(map)
      .bindPopup(`<b>${v.tags?.name||'Tesis'}</b><br>${v.tags?.sport||v.tags?.leisure||''}`);
  });
  setTimeout(() => map.invalidateSize(), 200);
}

// ─── NOMINATIM Autocomplete ───────────────────────────────
let _locationTimer = null;

function onLocationInput(val) {
  clearTimeout(_locationTimer);
  if (val.length < 3) { hideLocationDropdown(); return; }
  _locationTimer = setTimeout(() => doLocationSearch(val), 400);
}

async function doLocationSearch(query) {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&countrycodes=tr&limit=5`);
    const results = await r.json();
    showLocationDropdown(results);
  } catch { hideLocationDropdown(); }
}

function showLocationDropdown(results) {
  let dd = document.getElementById('location-dropdown');
  if (!dd) return;
  if (!results.length) { hideLocationDropdown(); return; }
  dd.innerHTML = results.map(r => {
    const short = r.display_name.split(',').slice(0,3).join(',').trim();
    const type = r.type || r.class || '';
    return `<div class="location-dd-item" onclick="pickLocation('${short.replace(/'/g,"\\'")}', ${r.lat}, ${r.lon})">
      <span class="location-dd-icon">📍</span>
      <div><div class="location-dd-name">${short}</div><div class="location-dd-type">${type}</div></div>
    </div>`;
  }).join('');
  dd.style.display = 'block';
}

function hideLocationDropdown() {
  const dd = document.getElementById('location-dropdown');
  if (dd) dd.style.display = 'none';
}

async function pickLocation(name, lat, lng) {
  state.createLocationName = name;
  state.createCoords = { lat: parseFloat(lat), lng: parseFloat(lng) };
  document.getElementById('create-location-input').value = name;
  hideLocationDropdown();

  // Open map and load venues
  state.createMapVisible = true;
  document.getElementById('create-map-container').style.display = 'block';
  document.getElementById('create-pick-map-btn').textContent = '✕ ' + (LANG.current==='tr'?'Haritayı Kapat':'Close Map');
  initCreateMap();
  loadCreateVenues(parseFloat(lat), parseFloat(lng), state.selectedSport);
}

// ─── OVERPASS API ─────────────────────────────────────────
async function fetchNearbyVenues(lat, lng, sport, radius) {
  const sportTag = sport && SPORT_OSM[sport];
  let filter;
  if (sportTag) {
    filter = `node["sport"="${sportTag}"](around:${radius},${lat},${lng});way["sport"="${sportTag}"](around:${radius},${lat},${lng});node["leisure"]["sport"="${sportTag}"](around:${radius},${lat},${lng});way["leisure"]["sport"="${sportTag}"](around:${radius},${lat},${lng});`;
  } else {
    filter = `node["leisure"~"sports_centre|pitch|fitness_centre|swimming_pool|golf_course|ice_rink|climbing"](around:${radius},${lat},${lng});way["leisure"~"sports_centre|pitch|fitness_centre|swimming_pool|golf_course|ice_rink|climbing"](around:${radius},${lat},${lng});node["sport"](around:${radius},${lat},${lng});way["sport"](around:${radius},${lat},${lng});`;
  }
  const query = `[out:json][timeout:15];(${filter});out center 30;`;
  try {
    const r = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: `data=${encodeURIComponent(query)}`
    });
    const data = await r.json();
    return (data.elements || []).filter(e => e.tags?.name);
  } catch { return []; }
}

function getSportIconFromOsm(tags) {
  if (!tags) return '🏟';
  const sport = tags.sport || '';
  const leisure = tags.leisure || '';
  const map = { tennis:'🎾', football:'⚽', soccer:'⚽', basketball:'🏀', volleyball:'🏐', padel:'🏓', badminton:'🏸', swimming:'🏊', fitness:'💪', golf:'⛳', climbing:'🧗', cycling:'🚴', running:'🏃', rowing:'🚣', archery:'🎯', boxing:'🥊', martial_arts:'🥋', table_tennis:'🏓', squash:'🎯', ice_rink:'⛸️', sports_centre:'🏅', pitch:'🏟', fitness_centre:'💪', swimming_pool:'🏊' };
  return map[sport] || map[leisure] || '🏟';
}

function getSportIconFromTag(tag) {
  const map = { tennis:'🎾', football:'⚽', soccer:'⚽', basketball:'🏀', volleyball:'🏐', padel:'🏓', badminton:'🏸', swimming:'🏊', fitness:'💪', golf:'⛳', climbing:'🧗', cycling:'🚴', running:'🏃', rowing:'🚣', archery:'🎯', boxing:'🥊', martial_arts:'🥋', table_tennis:'🏓', squash:'🎯', ice_rink:'⛸️', sports_centre:'🏅', pitch:'🏟', fitness_centre:'💪', swimming_pool:'🏊' };
  return map[tag] || '🏟';
}

function translateOsmSport(tag) {
  const lang = LANG.current;
  const tr = { tennis:'Tenis', football:'Futbol', soccer:'Futbol', basketball:'Basketbol', volleyball:'Voleybol', padel:'Padel', badminton:'Badminton', swimming:'Yüzme', fitness:'Fitness', golf:'Golf', climbing:'Tırmanış', cycling:'Bisiklet', running:'Koşu', rowing:'Kürek', archery:'Okçuluk', boxing:'Boks', martial_arts:'Dövüş Sanatları', table_tennis:'Masa Tenisi', squash:'Squash', ice_rink:'Buz Pateni', sports_centre:'Spor Merkezi', pitch:'Saha', fitness_centre:'Fitness Merkezi', swimming_pool:'Yüzme Havuzu', other:'Diğer' };
  const en = { tennis:'Tennis', football:'Football', soccer:'Football', basketball:'Basketball', volleyball:'Volleyball', padel:'Padel', badminton:'Badminton', swimming:'Swimming', fitness:'Fitness', golf:'Golf', climbing:'Climbing', cycling:'Cycling', running:'Running', rowing:'Rowing', archery:'Archery', boxing:'Boxing', martial_arts:'Martial Arts', table_tennis:'Table Tennis', squash:'Squash', ice_rink:'Ice Rink', sports_centre:'Sports Centre', pitch:'Pitch/Court', fitness_centre:'Fitness Centre', swimming_pool:'Swimming Pool', other:'Other' };
  return (lang==='tr' ? tr : en)[tag] || tag;
}

// ─── PROFILE ──────────────────────────────────────────────
function renderProfile() {
  const lang = LANG.current;
  const u = { name:'Seren Uğurlu', sub:lang==='tr'?'İstanbul · Üye: Mayıs 2026':'Istanbul · Member: May 2026', initials:'SU',
    stats:[{value:12,label:lang==='tr'?'Aktivite':'Activities'},{value:8,label:lang==='tr'?'Arkadaş':'Friends'},{value:'4.9',label:lang==='tr'?'Puan':'Rating'}],
    sports:[{icon:'🎾',name:lang==='tr'?'Tenis':'Tennis',level:'intermediate'},{icon:'🏐',name:lang==='tr'?'Voleybol':'Volleyball',level:'beginner'},{icon:'⚽',name:lang==='tr'?'Futbol':'Football',level:'beginner'}],
    history:[{icon:'🎾',title:lang==='tr'?'Tenis — Kadıköy':'Tennis — Kadıköy',date:'5 Mayıs'},{icon:'⚽',title:lang==='tr'?'Halı saha — Beşiktaş':'Futsal — Beşiktaş',date:'2 Mayıs'},{icon:'🏐',title:lang==='tr'?'Plaj voleybolu':'Beach volleyball',date:'28 Nisan'}]
  };
  document.getElementById('profile-initials').textContent = u.initials;
  document.getElementById('profile-name').textContent = u.name;
  document.getElementById('profile-sub').textContent = u.sub;
  document.getElementById('profile-stats').innerHTML = u.stats.map(s=>`<div class="stat-item"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('');
  document.getElementById('profile-sports').innerHTML = u.sports.map(s=>`<div class="sport-level-row"><div class="sport-level-left">${s.icon} ${s.name}</div><span class="level-pill">${t('level')[s.level]}</span></div>`).join('');
  document.getElementById('profile-history').innerHTML = u.history.map(h=>`<div class="activity-history-item"><div class="history-icon">${h.icon}</div><div><div class="history-title">${h.title}</div><div class="history-date">${h.date}</div></div></div>`).join('');
  document.getElementById('profile-topbar-title').textContent = t('profileTitle');
  document.getElementById('profile-sports-title').textContent = lang==='tr'?'Sporlarım':'My Sports';
  document.getElementById('profile-history-title').textContent = lang==='tr'?'Aktivite Geçmişi':'Activity History';
}

// ─── NOTIFS ───────────────────────────────────────────────
function renderNotifs() {
  const lang = LANG.current;
  document.getElementById('notifs-list').innerHTML = NOTIFICATIONS.map(n=>`
    <div class="notif-card ${n.unread?'unread':''}">
      <div class="notif-top">
        <div class="avatar" style="font-size:18px;background:linear-gradient(135deg,#F3F0FF,#FCE7F3);color:#7C3AED">${n.icon}</div>
        <div class="notif-body">
          <div class="notif-title">${n.title[lang]}</div>
          <div class="notif-text">${n.text[lang]}</div>
          <div class="notif-time">${n.time[lang]}</div>
        </div>
      </div>
      ${n.hasActions?`<div class="notif-actions"><button class="btn btn-primary btn-sm" onclick="handleNotif(${n.id},'accept')" style="flex:1">${t('accept')}</button><button class="btn btn-outline btn-sm" onclick="handleNotif(${n.id},'reject')" style="flex:1">${t('reject')}</button></div>`:''}
    </div>`).join('');
  document.getElementById('notifs-topbar-title').textContent = t('notifsTitle');
}

// ─── PROPOSE MODAL ────────────────────────────────────────
function openProposeModal() {
  const lang = LANG.current;
  const modal = document.getElementById('propose-modal');
  const days = [];
  for (let i=0;i<7;i++) {
    const d = new Date(); d.setDate(d.getDate()+i);
    const dn = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
    const dne = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    days.push({ value:d.toISOString().split('T')[0], label:(lang==='tr'?dn:dne)[d.getDay()], num:d.getDate(), month:d.toLocaleString(lang==='tr'?'tr-TR':'en-US',{month:'short'}) });
  }
  const times = ['08:00','09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeProposeModal()"></div>
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${t('proposeTitle')}</div>
      <div class="modal-section-label">${t('proposeDate')}</div>
      <div class="propose-days">${days.map((d,i)=>`<button class="propose-day-btn ${i===0?'selected':''}" onclick="selectProposeDays(this)"><span class="propose-day-name">${d.label}</span><span class="propose-day-num">${d.num}</span><span class="propose-day-month">${d.month}</span></button>`).join('')}</div>
      <div class="modal-section-label" style="margin-top:16px">${t('proposeTime')}</div>
      <div class="propose-times">${times.map(ts=>`<button class="propose-time-btn" onclick="toggleProposeTime(this)">${ts}</button>`).join('')}</div>
      <button class="btn btn-primary" style="margin-top:20px" onclick="submitPropose()">${t('proposeSend')}</button>
    </div>`;
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.querySelector('.modal-sheet').classList.add('open'));
}

function closeProposeModal() {
  const modal = document.getElementById('propose-modal');
  const sheet = modal.querySelector('.modal-sheet');
  if (sheet) sheet.classList.remove('open');
  setTimeout(() => { modal.style.display='none'; modal.innerHTML=''; }, 300);
}

function selectProposeDays(btn) { document.querySelectorAll('.propose-day-btn').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); }
function toggleProposeTime(btn) { btn.classList.toggle('selected'); }
function submitPropose() {
  const times = [...document.querySelectorAll('.propose-time-btn.selected')];
  const day = document.querySelector('.propose-day-btn.selected');
  if (!day||!times.length) { showToast(LANG.current==='tr'?'⚠️ Tarih ve en az bir saat seçin':'⚠️ Select a date and at least one time'); return; }
  closeProposeModal();
  setTimeout(() => showToast(t('proposeSent')), 350);
}

// ─── EVENT HANDLERS ───────────────────────────────────────
function setFilter(id) { state.activeFilter=id; renderHome(); }
function setHomeView(v) { state.homeView=v; renderHome(); }
function openDetail(id) { const a=ACTIVITIES.find(a=>a.id===id); if(a) navigate('detail',{activity:a}); }
function selectSport(id) {
  state.selectedSport = state.selectedSport===id ? null : id;
  // Update location question live without full re-render
  const lbl = document.getElementById('location-label');
  if (lbl) lbl.textContent = getLocationQuestion(state.selectedSport);
  // Re-render sport grid only
  document.getElementById('sport-grid').querySelectorAll('.sport-btn').forEach(btn => {
    const sid = btn.onclick?.toString().match(/'(\w+)'/)?.[1];
    btn.classList.toggle('selected', sid === state.selectedSport);
  });
  renderCreate();
}
function selectLevel(l) { state.selectedLevel=state.selectedLevel===l?null:l; renderCreate(); }
function toggleEquipment(id) { state.checkedEquipment.has(id)?state.checkedEquipment.delete(id):state.checkedEquipment.add(id); renderCreate(); }
function handleJoin() { showToast('🎉 '+t('joined')); }
function handlePropose() { openProposeModal(); }
function handlePublish() {
  if (!state.selectedSport) { showToast(LANG.current==='tr'?'⚠️ Lütfen bir spor seçin':'⚠️ Please select a sport'); return; }
  showToast('🎉 '+t('published'));
  state.selectedSport=null; state.selectedLevel=null; state.checkedEquipment.clear(); state.createCoords=null; state.createLocationName=''; state.createMapVisible=false;
  setTimeout(()=>navigate('home'),800);
}
function handleNotif(id,action) {
  showToast(action==='accept'?(LANG.current==='tr'?'✅ Kabul edildi':'✅ Accepted'):(LANG.current==='tr'?'❌ Reddedildi':'❌ Rejected'));
  const n=NOTIFICATIONS.find(n=>n.id===id); if(n){n.hasActions=false;n.unread=false;} renderNotifs();
}
function toggleLang() {
  LANG.current=LANG.current==='tr'?'en':'tr';
  document.querySelectorAll('.lang-toggle-btn').forEach(b=>b.textContent=LANG.current==='tr'?'EN':'TR');
  renderScreen(state.currentScreen);
}
function toggleCreateMap() {
  state.createMapVisible = !state.createMapVisible;
  const container = document.getElementById('create-map-container');
  const btn = document.getElementById('create-pick-map-btn');
  container.style.display = state.createMapVisible ? 'block' : 'none';
  btn.textContent = state.createMapVisible
    ? '✕ '+(LANG.current==='tr'?'Haritayı Kapat':'Close Map')
    : '📍 '+t('pickLocation');
  if (state.createMapVisible) initCreateMap();
}
function handleLogin() {
  const btn=document.getElementById('google-login-btn');
  btn.innerHTML=`<span style="display:inline-block;animation:spin .8s linear infinite">⏳</span> ${LANG.current==='tr'?'Giriş yapılıyor...':'Signing in...'}`;
  btn.disabled=true;
  setTimeout(()=>navigate('home'),1200);
}

// ─── TOAST ────────────────────────────────────────────────
function showToast(msg) {
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2500);
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  navigate('login');
  const tagline=document.getElementById('app-tagline'); if(tagline) tagline.textContent=t('appTagline');
  const loginBtn=document.getElementById('google-login-btn');
  if(loginBtn) loginBtn.innerHTML=`<svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg> ${t('loginWith')}`;
  const loginNote=document.getElementById('login-note'); if(loginNote) loginNote.textContent=t('loginNote');
});
