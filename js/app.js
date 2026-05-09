/* ─── Social Sports — App.js ─────────────────────────────── */

// ─── i18n ─────────────────────────────────────────────────
const LANG = { current: 'tr' };

const T = {
  tr: {
    appTagline: 'Spor arkadaşını bul, sahaya çık.',
    loginWith: 'Google ile Giriş Yap',
    loginNote: 'Giriş yaparak kullanım koşullarını kabul etmiş olursunuz.',
    orWith: 'veya',
    emailPh: 'E-posta adresi',
    passwordPh: 'Şifre',
    namePh: 'Ad Soyad',
    loginTab: 'Giriş Yap', registerTab: 'Üye Ol',
    doLogin: 'Giriş Yap', doRegister: 'Hesap Oluştur',
    forgotPass: 'Şifremi unuttum',
    chooseCity: 'Şehrini Seç',
    chooseCitySub: 'Aktivitelerini takip edeceğin şehri seç. İstediğinde değiştirebilirsin.',
    navHome: 'Akış', navVenues: 'Mekanlar', navCreate: 'Oluştur', navNotif: 'Bildirim', navProfile: 'Profil',
    search: 'Spor, aktivite, konum ara...', filterAll: 'Tümü',
    nearby: 'Yakınındakiler', seeAll: 'Tümünü Gör',
    join: 'Katılmak İstiyorum', propose: 'Alternatif Öner',
    slots: (n) => `${n} kişi aranıyor`, slotsFull: 'Takım Doldu',
    level: { beginner: 'Başlangıç', intermediate: 'Orta', advanced: 'İleri', pro: 'Pro' },
    createTitle: 'İlan Oluştur', chooseSport: 'Spor / Aktivite Seç',
    date: 'Tarih', time: 'Saat', players: 'Kaç Kişi?',
    skillLevel: 'Seviye', equipment: 'Ekipman (bende var)',
    notes: 'Notlar', notesPh: 'Ek bilgi, özel koşullar...',
    publish: 'İlanı Yayınla',
    profileTitle: 'Profilim', notifsTitle: 'Bildirimler',
    accept: 'Kabul Et', reject: 'Reddet',
    joined: 'İsteğiniz gönderildi!', published: 'İlanınız yayınlandı!',
    participants: 'Katılımcılar', equipment_info: 'Ekipman',
    host: 'İlan Sahibi', infoWhen: 'Tarih & Saat', infoWhere: 'Konum',
    listView: 'Liste', mapView: 'Harita',
    venueTitle: 'Yakın Mekanlar', teammatesTitle: 'Önerilen Oyuncular',
    proposeTitle: 'Alternatif Öner', proposeDate: 'Tarih Seç', proposeTime: 'Saat Seç',
    proposeSend: 'Öneriyi Gönder', proposeSent: '📅 Alternatif öneriniz gönderildi!',
    pickLocation: 'Haritadan Konum Seç',
    loadingVenues: 'Tesisler yükleniyor...', noVenues: 'Bu bölgede tesis bulunamadı.',
    nearbyVenuesCreate: 'Yakın Spor Tesisleri',
    districtTitle: 'Mekanlar', districtSub: 'İlçe seç, spor tesislerini keşfet',
    loadingDistricts: 'İlçe verileri yükleniyor...', sportCenters: 'tesis',
    venueOpen: 'Açık', venueClosed: 'Kapalı',
    venueWebsite: 'Web Sitesi', venuePhone: 'Telefon',
    joinConditionLabel: 'Kimler Katılabilir?',
    joinConditions: { all:'Herkes', beginner:'Başlangıç', intermediate:'Orta+', advanced:'İleri+', pro:'Sadece Pro' },
    friendsOnly: 'Sadece Arkadaşlarım Görsün',
    friendsOnlySub: 'İlan sadece arkadaş listendekilere görünür',
    daysLabel: 'Uygun Günler', timeRangeLabel: 'Saat Aralığı',
    days: { mon:'Pzt', tue:'Sal', wed:'Çar', thu:'Per', fri:'Cum', sat:'Cmt', sun:'Paz' },
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
    orWith: 'or', emailPh: 'Email address', passwordPh: 'Password',
    namePh: 'Full Name', loginTab: 'Sign In', registerTab: 'Sign Up',
    doLogin: 'Sign In', doRegister: 'Create Account', forgotPass: 'Forgot password',
    chooseCity: 'Choose Your City',
    chooseCitySub: 'Select the city where you want to find activities. You can change this later.',
    navHome: 'Feed', navVenues: 'Venues', navCreate: 'Create', navNotif: 'Notifs', navProfile: 'Profile',
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
    pickLocation: 'Pick Location on Map',
    loadingVenues: 'Loading venues...', noVenues: 'No venues found in this area.',
    nearbyVenuesCreate: 'Nearby Sports Venues',
    districtTitle: 'Venues', districtSub: 'Select a district, explore sports facilities',
    loadingDistricts: 'Loading district data...', sportCenters: 'facilities',
    venueOpen: 'Open', venueClosed: 'Closed',
    venueWebsite: 'Website', venuePhone: 'Phone',
    joinConditionLabel: 'Who Can Join?',
    joinConditions: { all:'Everyone', beginner:'Beginner', intermediate:'Intermediate+', advanced:'Advanced+', pro:'Pro Only' },
    friendsOnly: 'Friends Only',
    friendsOnlySub: 'Activity is only visible to people on your friends list',
    daysLabel: 'Available Days', timeRangeLabel: 'Time Range',
    days: { mon:'Mon', tue:'Tue', wed:'Wed', thu:'Thu', fri:'Fri', sat:'Sat', sun:'Sun' },
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

// ─── Cities ───────────────────────────────────────────────
const CITIES = [
  { id:'istanbul',  name:'İstanbul',  lat:41.0082, lng:28.9784, emoji:'🌉', bbox:[40.82,28.61,41.32,29.50] },
  { id:'ankara',    name:'Ankara',    lat:39.9334, lng:32.8597, emoji:'🏛', bbox:[39.75,32.50,40.15,33.10] },
  { id:'izmir',     name:'İzmir',     lat:38.4237, lng:27.1428, emoji:'🌊', bbox:[38.25,26.80,38.65,27.60] },
  { id:'bursa',     name:'Bursa',     lat:40.1885, lng:29.0610, emoji:'🏔', bbox:[40.05,28.85,40.35,29.35] },
  { id:'antalya',   name:'Antalya',   lat:36.8841, lng:30.7056, emoji:'☀️', bbox:[36.75,30.55,37.05,31.00] },
  { id:'adana',     name:'Adana',     lat:37.0000, lng:35.3213, emoji:'🌿', bbox:[36.85,35.15,37.15,35.55] },
  { id:'konya',     name:'Konya',     lat:37.8713, lng:32.4846, emoji:'🌾', bbox:[37.75,32.35,38.00,32.65] },
  { id:'kocaeli',   name:'Kocaeli',   lat:40.7654, lng:29.9408, emoji:'⚓', bbox:[40.65,29.80,40.90,30.15] },
  { id:'eskisehir', name:'Eskişehir', lat:39.7767, lng:30.5206, emoji:'🎓', bbox:[39.65,30.40,39.90,30.65] },
  { id:'trabzon',   name:'Trabzon',   lat:41.0015, lng:39.7178, emoji:'⛰', bbox:[40.90,39.55,41.10,39.85] },
  { id:'gaziantep', name:'Gaziantep', lat:37.0662, lng:37.3833, emoji:'🍽', bbox:[36.95,37.25,37.20,37.55] },
  { id:'mersin',    name:'Mersin',    lat:36.8000, lng:34.6333, emoji:'🚢', bbox:[36.70,34.50,36.95,34.80] },
];

// ─── Districts per city ───────────────────────────────────
const CITY_DISTRICTS = {
  istanbul: [
    { name:'Kadıköy',         lat:40.9928, lng:29.0233, r:2200 },
    { name:'Beşiktaş',        lat:41.0438, lng:29.0072, r:2000 },
    { name:'Şişli',           lat:41.0623, lng:28.9877, r:2200 },
    { name:'Üsküdar',         lat:41.0243, lng:29.0147, r:2500 },
    { name:'Fatih',           lat:41.0165, lng:28.9396, r:2000 },
    { name:'Beyoğlu',         lat:41.0316, lng:28.9749, r:1800 },
    { name:'Bakırköy',        lat:40.9803, lng:28.8696, r:2200 },
    { name:'Maltepe',         lat:40.9357, lng:29.1312, r:2500 },
    { name:'Ataşehir',        lat:40.9834, lng:29.1170, r:2200 },
    { name:'Ümraniye',        lat:41.0162, lng:29.1027, r:2800 },
    { name:'Kağıthane',       lat:41.0887, lng:28.9718, r:2200 },
    { name:'Sarıyer',         lat:41.1674, lng:29.0505, r:3500 },
    { name:'Bağcılar',        lat:41.0399, lng:28.8561, r:2200 },
    { name:'Küçükçekmece',    lat:41.0008, lng:28.7826, r:2800 },
    { name:'Kartal',          lat:40.9018, lng:29.1892, r:2500 },
    { name:'Pendik',          lat:40.8716, lng:29.2565, r:3500 },
    { name:'Eyüpsultan',      lat:41.0623, lng:28.9374, r:2800 },
    { name:'Bahçelievler',    lat:41.0067, lng:28.8622, r:2000 },
    { name:'Gaziosmanpaşa',   lat:41.0572, lng:28.9174, r:2500 },
    { name:'Esenyurt',        lat:41.0365, lng:28.6718, r:3000 },
  ],
  ankara: [
    { name:'Çankaya',     lat:39.9140, lng:32.8560, r:3500 },
    { name:'Keçiören',    lat:39.9938, lng:32.8642, r:3000 },
    { name:'Mamak',       lat:39.9127, lng:32.9257, r:3000 },
    { name:'Yenimahalle', lat:39.9748, lng:32.7781, r:3000 },
    { name:'Altındağ',    lat:39.9522, lng:32.8679, r:2500 },
    { name:'Sincan',      lat:39.9736, lng:32.6001, r:3500 },
    { name:'Etimesgut',   lat:39.9539, lng:32.6752, r:3000 },
    { name:'Pursaklar',   lat:40.0451, lng:32.9021, r:2500 },
  ],
  izmir: [
    { name:'Konak',      lat:38.4189, lng:27.1287, r:2500 },
    { name:'Karşıyaka',  lat:38.4569, lng:27.1161, r:2500 },
    { name:'Bornova',    lat:38.4694, lng:27.2179, r:2800 },
    { name:'Buca',       lat:38.3842, lng:27.1799, r:2800 },
    { name:'Bayraklı',   lat:38.4633, lng:27.1660, r:2000 },
    { name:'Gaziemir',   lat:38.3226, lng:27.1275, r:2500 },
    { name:'Çiğli',      lat:38.5011, lng:27.0636, r:3000 },
    { name:'Balçova',    lat:38.3944, lng:27.0706, r:2000 },
  ],
  bursa: [
    { name:'Osmangazi', lat:40.1965, lng:29.0614, r:3500 },
    { name:'Nilüfer',   lat:40.2122, lng:28.9832, r:3500 },
    { name:'Yıldırım',  lat:40.1839, lng:29.1028, r:3000 },
  ],
};

// ─── Context-aware location questions ─────────────────────
const SPORT_LOCATION_Q = {
  tennis:{tr:'Hangi kortta oynayacaksınız?',en:'Which court will you play at?'},
  padel:{tr:'Hangi padel kortunda?',en:'Which padel court?'},
  badminton:{tr:'Hangi badminton kortunda?',en:'Which badminton court?'},
  squash:{tr:'Hangi squash kortunda?',en:'Which squash court?'},
  tabletennis:{tr:'Hangi masa tenisi salonunda?',en:'Which table tennis venue?'},
  football:{tr:'Hangi sahada oynayacaksınız?',en:'Which pitch or field?'},
  basketball:{tr:'Hangi basketbol sahasında?',en:'Which basketball court?'},
  volleyball:{tr:'Hangi sahada oynayacaksınız?',en:'Which court or beach?'},
  yoga:{tr:'Nerede pratik yapacaksınız?',en:'Where will you practice?'},
  pilates:{tr:'Nerede pratik yapacaksınız?',en:'Where will you practice?'},
  fitness:{tr:'Hangi spor salonunda?',en:'Which gym?'},
  boxing:{tr:'Hangi salonda antrenman yapacaksınız?',en:'Which boxing gym?'},
  martial:{tr:'Hangi dojo / salonda?',en:'Which dojo or gym?'},
  dancing:{tr:'Hangi dans stüdyosunda?',en:'Which dance studio?'},
  cycling:{tr:'Hangi güzergahı kullanacaksınız?',en:'Which cycling route?'},
  running:{tr:'Hangi parkurda koşacaksınız?',en:'Which running route?'},
  hiking:{tr:'Hangi rotadan yürüyeceksiniz?',en:'Which hiking trail?'},
  swimming:{tr:'Hangi havuz veya plajda?',en:'Which pool or beach?'},
  golf:{tr:'Hangi golf sahasında?',en:'Which golf course?'},
  climbing:{tr:'Hangi tırmanış duvarı veya kayalık?',en:'Which climbing wall or rock?'},
  skiing:{tr:'Hangi kayak pistinde?',en:'Which ski slope?'},
  iceskating:{tr:'Hangi buz pistinde?',en:'Which ice rink?'},
  archery:{tr:'Hangi okçuluk tesisinde?',en:'Which archery range?'},
  esports:{tr:'LAN kafe veya online platform?',en:'LAN cafe or online platform?'},
};
function getLocationQuestion(s) { return s && SPORT_LOCATION_Q[s] ? SPORT_LOCATION_Q[s][LANG.current] : (LANG.current==='tr'?'Nerede buluşacaksınız?':'Where will you meet?'); }

// ─── Sports ───────────────────────────────────────────────
const SPORTS = [
  {id:'tennis',icon:'🎾',key:'tennis'},{id:'football',icon:'⚽',key:'football'},
  {id:'basketball',icon:'🏀',key:'basketball'},{id:'volleyball',icon:'🏐',key:'volleyball'},
  {id:'padel',icon:'🏓',key:'padel'},{id:'badminton',icon:'🏸',key:'badminton'},
  {id:'cycling',icon:'🚴',key:'cycling'},{id:'running',icon:'🏃',key:'running'},
  {id:'swimming',icon:'🏊',key:'swimming'},{id:'hiking',icon:'🥾',key:'hiking'},
  {id:'yoga',icon:'🧘',key:'yoga'},{id:'pilates',icon:'🤸',key:'pilates'},
  {id:'golf',icon:'⛳',key:'golf'},{id:'tabletennis',icon:'🏓',key:'tabletennis'},
  {id:'squash',icon:'🥊',key:'squash'},{id:'boxing',icon:'🥊',key:'boxing'},
  {id:'martial',icon:'🥋',key:'martial'},{id:'dancing',icon:'💃',key:'dancing'},
  {id:'climbing',icon:'🧗',key:'climbing'},{id:'skiing',icon:'⛷️',key:'skiing'},
  {id:'fitness',icon:'💪',key:'fitness'},{id:'frisbee',icon:'🥏',key:'frisbee'},
  {id:'rowing',icon:'🚣',key:'rowing'},{id:'iceskating',icon:'⛸️',key:'iceskating'},
  {id:'archery',icon:'🎯',key:'archery'},{id:'esports',icon:'🎮',key:'esports'},
];

const SPORT_OSM = {tennis:'tennis',football:'football',basketball:'basketball',volleyball:'volleyball',padel:'padel',badminton:'badminton',squash:'squash',tabletennis:'table_tennis',swimming:'swimming',golf:'golf',cycling:'cycling',running:'running',climbing:'climbing',rowing:'rowing',archery:'archery',boxing:'boxing',martial:'martial_arts',fitness:'fitness'};

// ─── Mock Activities ───────────────────────────────────────
const ACTIVITIES = [
  {id:1,sport:'tennis',icon:'🎾',title:{tr:'Tenis partneri arıyorum',en:'Looking for tennis partner'},host:{name:'Seren U.',initials:'SU'},location:{tr:'Kadıköy Tenis Kulübü',en:'Kadıköy Tennis Club'},coords:{lat:40.9909,lng:29.0295},date:'12 Mayıs',time:'18:00',slots:1,totalSlots:2,level:'intermediate',joinCondition:'intermediate',friendsOnly:false,days:['sat','sun'],timeFrom:'16:00',timeTo:'20:00',equipment:[{tr:'2 Tenis Raketi',en:'2 Tennis Rackets'},{tr:'Top bende',en:'Balls provided'}],note:{tr:'Raketim var, gerekirse paylaşabilirim.',en:'Rackets to share.'},participants:[{name:'Seren U.',initials:'SU',level:'intermediate'}]},
  {id:2,sport:'football',icon:'⚽',title:{tr:'Halı saha — 3 kişi eksik',en:'Futsal — need 3 more'},host:{name:'Ahmet K.',initials:'AK'},location:{tr:'Beşiktaş Halı Saha',en:'Beşiktaş Futsal'},coords:{lat:41.0451,lng:29.0078},date:'13 Mayıs',time:'20:00',slots:3,totalSlots:10,level:'beginner',joinCondition:'all',friendsOnly:false,days:['mon','wed','fri'],timeFrom:'19:00',timeTo:'22:00',equipment:[],note:{tr:'Herkesin ayakkabısı olsun!',en:'Bring boots!'},participants:[{name:'Ahmet K.',initials:'AK',level:'beginner'},{name:'Mehmet Y.',initials:'MY',level:'beginner'}]},
  {id:3,sport:'basketball',icon:'🏀',title:{tr:'3v3 Basketbol — Üsküdar',en:'3v3 Basketball — Üsküdar'},host:{name:'Zeynep A.',initials:'ZA'},location:{tr:'Üsküdar Açık Saha',en:'Üsküdar Open Court'},coords:{lat:41.0219,lng:29.0152},date:'14 Mayıs',time:'17:30',slots:2,totalSlots:6,level:'advanced',joinCondition:'advanced',friendsOnly:false,days:['tue','thu','sat'],timeFrom:'15:00',timeTo:'20:00',equipment:[{tr:'Top var',en:'Ball provided'}],note:{tr:'Rekabetçi oynuyoruz.',en:'Competitive play.'},participants:[{name:'Zeynep A.',initials:'ZA',level:'advanced'}]},
  {id:4,sport:'yoga',icon:'🧘',title:{tr:'Sabah yogası — Gülhane',en:'Morning yoga — Gülhane'},host:{name:'Elif B.',initials:'EB'},location:{tr:'Gülhane Parkı',en:'Gülhane Park'},coords:{lat:41.0131,lng:28.9812},date:'16 Mayıs',time:'08:00',slots:8,totalSlots:15,level:'beginner',joinCondition:'all',friendsOnly:true,days:['sat','sun'],timeFrom:'07:00',timeTo:'10:00',equipment:[{tr:'Kendi matını getir',en:'Bring your mat'}],note:{tr:'Sadece arkadaşlarıma açık.',en:'Friends only activity.'},participants:[{name:'Elif B.',initials:'EB',level:'beginner'}]},
  {id:5,sport:'running',icon:'🏃',title:{tr:'Sabah koşusu — Caddebostan',en:'Morning run — Caddebostan'},host:{name:'Lena S.',initials:'LS'},location:{tr:'Caddebostan Sahili',en:'Caddebostan Promenade'},coords:{lat:40.9627,lng:29.0601},date:'11 Mayıs',time:'07:00',slots:5,totalSlots:10,level:'beginner',joinCondition:'all',friendsOnly:false,days:['mon','tue','wed','thu','fri'],timeFrom:'06:30',timeTo:'08:30',equipment:[],note:{tr:'5 km, rahat tempo.',en:'5km easy pace.'},participants:[{name:'Lena S.',initials:'LS',level:'beginner'}]},
];

const SUGGESTED_PLAYERS = [
  {name:'Mert B.',initials:'MB',sport:'tennis',level:'intermediate',distance:'0.8 km',rating:4.7},
  {name:'Ceren A.',initials:'CA',sport:'tennis',level:'intermediate',distance:'1.3 km',rating:4.9},
  {name:'Naz K.',initials:'NK',sport:'football',level:'beginner',distance:'1.6 km',rating:4.8},
];

const NOTIFICATIONS = [
  {id:1,unread:true,icon:'🎾',title:{tr:'Yeni katılım isteği',en:'New join request'},text:{tr:'Mert B. tenis ilanınıza katılmak istiyor. Seviye: Orta.',en:'Mert B. wants to join your tennis activity.'},time:{tr:'5 dk önce',en:'5 min ago'},hasActions:true},
  {id:2,unread:true,icon:'✅',title:{tr:'İsteğiniz kabul edildi!',en:'Request accepted!'},text:{tr:'Ahmet K. halı saha isteğinizi kabul etti.',en:'Ahmet K. accepted your futsal request.'},time:{tr:'1 saat önce',en:'1 hour ago'},hasActions:false},
  {id:3,unread:false,icon:'📅',title:{tr:'Alternatif zaman önerisi',en:'Alternative time proposed'},text:{tr:'Zeynep A. 17:30 yerine 19:00\'u öneriyor.',en:'Zeynep A. proposes 19:00 instead of 17:30.'},time:{tr:'3 saat önce',en:'3 hours ago'},hasActions:true},
  {id:4,unread:true,icon:'👤',title:{tr:'Arkadaşlık İsteği',en:'Friend Request'},text:{tr:'Ahmet Y. sizi arkadaş olarak eklemek istiyor.',en:'Ahmet Y. wants to add you as a friend.'},time:{tr:'10 dk önce',en:'10 min ago'},hasActions:true,type:'friend'},
];

// ─── Friends ──────────────────────────────────────────────
const FRIENDS = [
  {id:1,name:'Mert Baran',  initials:'MB',sport:'tennis',    level:'intermediate',rating:4.7,mutualActivities:3},
  {id:2,name:'Ceren Aydın', initials:'CA',sport:'volleyball',level:'beginner',    rating:4.9,mutualActivities:1},
  {id:3,name:'Naz Kaya',    initials:'NK',sport:'football',  level:'beginner',    rating:4.8,mutualActivities:2},
  {id:4,name:'Tolga Şahin', initials:'TS',sport:'basketball',level:'advanced',   rating:4.6,mutualActivities:0},
];

// ─── State ────────────────────────────────────────────────
const state = {
  currentScreen:'login',
  user: null,
  selectedCity: null,
  selectedDistrict: null,
  districtVenues: [],
  districtCounts: {},
  activeFilter:'all',
  homeView:'list',
  selectedActivity: null,
  selectedSport: null,
  selectedLevel: null,
  joinCondition: 'all',
  friendsOnly: false,
  selectedDays: new Set(),
  timeFrom:'08:00', timeTo:'22:00',
  checkedEquipment: new Set(),
  createCoords: null,
  createLocationName:'',
  createMapVisible: false,
  authTab:'login',
  maps:{},
  venueMarkers:[],
};

// ─── Router ───────────────────────────────────────────────
function navigate(screenId, data={}) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const screen=document.getElementById('screen-'+screenId);
  if(!screen) return;
  screen.classList.add('active');
  state.currentScreen=screenId;
  if(data.activity) state.selectedActivity=data.activity;
  if(data.district) state.selectedDistrict=data.district;
  updateNav(screenId);
  renderScreen(screenId);
  window.scrollTo(0,0);
}

function updateNav(screenId) {
  const map={home:0,districts:1,create:2,notifs:3,profile:4};
  document.querySelectorAll('.bottom-nav').forEach(nav=>{
    nav.querySelectorAll('.nav-item').forEach((item,i)=>{
      item.classList.toggle('active',i===map[screenId]);
    });
  });
}

function renderScreen(id) {
  ({splash:renderSplash,auth:renderAuth,city:renderCitySelect,home:renderHome,detail:renderDetail,create:renderCreate,districts:renderDistricts,district_detail:renderDistrictDetail,profile:renderProfile,notifs:renderNotifs}[id]||(() => {}))();
}

// ─── SPLASH ───────────────────────────────────────────────
function renderSplash() {
  setTimeout(()=> navigate('auth'), 2200);
}

// ─── AUTH ─────────────────────────────────────────────────
function renderAuth() {
  const lang=LANG.current;
  // Tab switching
  document.querySelectorAll('.auth-tab').forEach((tab,i)=>{
    tab.classList.toggle('active', (i===0&&state.authTab==='login')||(i===1&&state.authTab==='register'));
  });
  document.getElementById('auth-login-form').style.display=state.authTab==='login'?'flex':'none';
  document.getElementById('auth-register-form').style.display=state.authTab==='register'?'flex':'none';
  document.getElementById('auth-submit-btn').textContent=state.authTab==='login'?t('doLogin'):t('doRegister');
  document.getElementById('google-auth-btn').innerHTML=`<svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg> ${t('loginWith')}`;
  document.getElementById('auth-or').textContent=t('orWith');
  document.getElementById('auth-email').placeholder=t('emailPh');
  document.getElementById('auth-password').placeholder=t('passwordPh');
  const nameField=document.getElementById('auth-name');
  if(nameField) nameField.placeholder=t('namePh');
}

function switchAuthTab(tab) {
  state.authTab=tab;
  renderAuth();
}

function handleAuth() {
  const btn=document.getElementById('auth-submit-btn');
  btn.textContent='⏳'; btn.disabled=true;
  setTimeout(()=>{
    state.user={name:'Seren Uğurlu',email:'seren@example.com',initials:'SU',photo:null};
    const onboarded=localStorage.getItem('ss_onboarded');
    if(!onboarded) {
      navigate('city');
    } else {
      const cityId=localStorage.getItem('ss_city');
      state.selectedCity=CITIES.find(c=>c.id===cityId)||CITIES[0];
      navigate('home');
    }
  },1200);
}

function handleGoogleAuth() {
  const btn=document.getElementById('google-auth-btn');
  btn.textContent='⏳ Giriş yapılıyor...'; btn.disabled=true;
  setTimeout(()=>{
    state.user={name:'Seren Uğurlu',email:'seren.ugurlu@gmail.com',initials:'SU',photo:null};
    const onboarded=localStorage.getItem('ss_onboarded');
    if(!onboarded) navigate('city');
    else { const cityId=localStorage.getItem('ss_city'); state.selectedCity=CITIES.find(c=>c.id===cityId)||CITIES[0]; navigate('home'); }
  },1200);
}

// ─── CITY SELECTION ───────────────────────────────────────
function renderCitySelect() {
  const lang=LANG.current;
  document.getElementById('city-title').textContent=t('chooseCity');
  document.getElementById('city-sub').textContent=t('chooseCitySub');
  document.getElementById('city-grid').innerHTML=CITIES.map(c=>`
    <button class="city-card" onclick="selectCity('${c.id}')">
      <span class="city-emoji">${c.emoji}</span>
      <span class="city-name">${c.name}</span>
    </button>`).join('');
}

function selectCity(cityId) {
  state.selectedCity=CITIES.find(c=>c.id===cityId);
  localStorage.setItem('ss_onboarded','1');
  localStorage.setItem('ss_city',cityId);
  navigate('home');
}

// ─── HOME ─────────────────────────────────────────────────
function renderHome() {
  const lang=LANG.current;
  const filter=state.activeFilter;

  document.getElementById('filter-chips').innerHTML=[
    {id:'all',label:t('filterAll'),icon:'🏅'},
    ...SPORTS.map(s=>({id:s.id,label:t('sports')[s.key],icon:s.icon}))
  ].map(f=>`<button class="chip ${f.id===filter?'active':''}" onclick="setFilter('${f.id}')">${f.icon} ${f.label}</button>`).join('');

  const btnList=document.getElementById('btn-list-view');
  const btnMap=document.getElementById('btn-map-view');
  if(btnList) btnList.textContent='☰ '+t('listView');
  if(btnMap) btnMap.textContent='🗺 '+t('mapView');

  if(state.homeView==='map') {
    document.getElementById('home-list-view').style.display='none';
    document.getElementById('home-map-view').style.display='block';
    btnList.classList.remove('active'); btnMap.classList.add('active');
    initHomeMap(filter);
  } else {
    document.getElementById('home-list-view').style.display='block';
    document.getElementById('home-map-view').style.display='none';
    btnList.classList.add('active'); btnMap.classList.remove('active');
    renderActivityList(filter);
  }

  document.getElementById('search-input').placeholder=t('search');
  document.getElementById('home-section-title').textContent=t('nearby');
  document.querySelectorAll('.lang-toggle-btn').forEach(b=>b.textContent=LANG.current==='tr'?'EN':'TR');

  // City badge
  const cityBadge=document.getElementById('city-badge');
  if(cityBadge&&state.selectedCity) cityBadge.textContent=state.selectedCity.emoji+' '+state.selectedCity.name;
}

function renderActivityList(filter) {
  const lang=LANG.current;
  const filtered=filter==='all'?ACTIVITIES:ACTIVITIES.filter(a=>a.sport===filter);
  const cardsEl=document.getElementById('activity-cards');
  if(!filtered.length) {
    cardsEl.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">${lang==='tr'?'İlan bulunamadı':'No activities found'}</div><div class="empty-sub">${lang==='tr'?'Bu spor için henüz ilan yok. İlk ilanı sen aç!':'No activities yet. Be the first!'}</div></div>`;
    return;
  }
  cardsEl.innerHTML=filtered.map(a=>{
    const isFull=a.slots===0;
    const eqTags=a.equipment.map(e=>`<span class="eq-tag">${e[lang]}</span>`).join('');
    const dayTags=a.days.slice(0,3).map(d=>`<span class="day-tag">${t('days')[d]}</span>`).join('');
    const joinBadge=a.joinCondition!=='all'?`<span class="join-badge">${t('joinConditions')[a.joinCondition]}</span>`:'';
    const friendsBadge=a.friendsOnly?`<span class="friends-badge">🔒 ${lang==='tr'?'Arkadaşlar':'Friends'}</span>`:'';
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
            <div class="meta-row"><span class="meta-icon">🕐</span>${a.timeFrom} – ${a.timeTo} · ${dayTags}</div>
          </div>
          ${eqTags?`<div class="equipment-tags">${eqTags}</div>`:''}
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">${joinBadge}${friendsBadge}</div>
          <div class="card-footer">
            <div class="card-host"><div class="avatar">${a.host.initials}</div><span class="host-name">${a.host.name}</span></div>
            <span class="slots-badge ${isFull?'full':''}">${isFull?t('slotsFull'):'👥 '+t('slots',a.slots)}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function initHomeMap(filter) {
  if(typeof L==='undefined') return;
  const mapEl=document.getElementById('home-map-container');
  if(state.maps.home){state.maps.home.remove();state.maps.home=null;mapEl.innerHTML='';}
  const city=state.selectedCity||CITIES[0];
  const map=L.map(mapEl,{zoomControl:true,attributionControl:false}).setView([city.lat,city.lng],12);
  state.maps.home=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  const filtered=filter==='all'?ACTIVITIES:ACTIVITIES.filter(a=>a.sport===filter);
  filtered.forEach(a=>{
    const icon=L.divIcon({className:'',html:`<div class="map-pin-activity">${a.icon}</div>`,iconSize:[40,40],iconAnchor:[20,20]});
    L.marker([a.coords.lat,a.coords.lng],{icon}).addTo(map)
      .bindPopup(`<b>${a.title[LANG.current]}</b><br>${a.location[LANG.current]}<br><button onclick="openDetail(${a.id})" class="popup-btn">Detay →</button>`);
  });
  setTimeout(()=>map.invalidateSize(),100);
}

// ─── DETAIL ───────────────────────────────────────────────
function renderDetail() {
  const a=state.selectedActivity; if(!a) return;
  const lang=LANG.current; const isFull=a.slots===0;
  document.getElementById('detail-sport-icon').textContent=a.icon;
  document.getElementById('detail-title').textContent=a.title[lang];
  document.getElementById('detail-sport-tag').textContent=t('sports')[a.sport];
  document.getElementById('detail-location').textContent=a.location[lang];
  document.getElementById('detail-datetime').textContent=`${a.date} · ${a.timeFrom} – ${a.timeTo}`;
  document.getElementById('detail-slots').textContent=isFull?t('slotsFull'):t('slots',a.slots);
  document.getElementById('detail-level').textContent=t('level')[a.level];
  document.getElementById('detail-host-initials').textContent=a.host.initials;
  document.getElementById('detail-host-name').textContent=a.host.name;
  document.getElementById('detail-note').textContent=a.note[lang];
  document.getElementById('detail-equipment').innerHTML=a.equipment.length
    ?a.equipment.map(e=>`<span class="eq-tag" style="font-size:13px;padding:6px 14px">${e[lang]}</span>`).join('')
    :`<span style="color:var(--text-secondary);font-size:13px">${lang==='tr'?'Belirtilmemiş':'Not specified'}</span>`;
  document.getElementById('detail-participants').innerHTML=a.participants.map(p=>`
    <div class="participant-row"><div class="avatar">${p.initials}</div>
    <div class="participant-info"><div class="participant-name">${p.name}</div><div class="participant-level">${t('level')[p.level]}</div></div></div>`).join('');

  // Join condition & privacy badges
  const condEl=document.getElementById('detail-conditions');
  if(condEl) {
    const cond=a.joinCondition==='all'?`🌍 ${lang==='tr'?'Herkes Katılabilir':'Everyone Welcome'}`:`⭐ ${t('joinConditions')[a.joinCondition]}`;
    const priv=a.friendsOnly?`<span class="friends-badge">🔒 ${t('friendsOnly')}</span>`:'';
    condEl.innerHTML=`<span class="join-badge" style="font-size:13px;padding:6px 14px">${cond}</span>${priv}`;
  }

  // Days
  const daysEl=document.getElementById('detail-days');
  if(daysEl) daysEl.innerHTML=a.days.map(d=>`<span class="day-tag active">${t('days')[d]}</span>`).join('');

  const joinBtn=document.getElementById('join-btn');
  joinBtn.textContent=isFull?t('slotsFull'):t('join');
  joinBtn.disabled=isFull; joinBtn.style.opacity=isFull?'0.5':'1';
  document.getElementById('propose-btn').textContent=t('propose');
  document.getElementById('detail-participants-title').textContent=t('participants');
  document.getElementById('detail-equipment-title').textContent=t('equipment_info');
  document.getElementById('detail-host-title').textContent=t('host');
  document.getElementById('detail-back-text').textContent=lang==='tr'?'Geri':'Back';
  document.getElementById('detail-when-label').textContent=t('infoWhen');
  document.getElementById('detail-where-label').textContent=t('infoWhere');

  // Suggested players
  const suggested=SUGGESTED_PLAYERS.filter(p=>p.sport===a.sport).slice(0,3);
  document.getElementById('detail-suggested-players').innerHTML=suggested.length
    ?suggested.map(p=>`<div class="participant-row" style="padding:8px 0"><div class="avatar">${p.initials}</div><div class="participant-info" style="flex:1"><div class="participant-name">${p.name}</div><div class="participant-level">⭐${p.rating} · ${p.distance} · ${t('level')[p.level]}</div></div><button class="btn btn-sm btn-outline" onclick="addFriend('${p.name}','${p.initials}')" style="font-size:11px">${lang==='tr'?'+ Arkadaş':'+ Friend'}</button></div>`).join('')
    :`<div style="color:var(--text-secondary);font-size:13px">${lang==='tr'?'Öneri bulunamadı':'No suggestions'}</div>`;

  initDetailMap(a);
  loadDetailVenues(a.coords.lat,a.coords.lng,a.sport);
}

function initDetailMap(a) {
  if(typeof L==='undefined') return;
  const mapEl=document.getElementById('detail-map-container');
  if(state.maps.detail){state.maps.detail.remove();state.maps.detail=null;mapEl.innerHTML='';}
  const map=L.map(mapEl,{zoomControl:false,attributionControl:false,scrollWheelZoom:false}).setView([a.coords.lat,a.coords.lng],15);
  state.maps.detail=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  const icon=L.divIcon({className:'',html:`<div class="map-pin-activity" style="width:44px;height:44px;font-size:22px;border:3px solid #fff">${a.icon}</div>`,iconSize:[44,44],iconAnchor:[22,22]});
  L.marker([a.coords.lat,a.coords.lng],{icon}).addTo(map).bindPopup(a.location[LANG.current]).openPopup();
  setTimeout(()=>map.invalidateSize(),200);
}

async function loadDetailVenues(lat,lng,sport) {
  const el=document.getElementById('detail-venues');
  if(!el) return;
  el.innerHTML=`<div class="venue-loading">⏳ ${t('loadingVenues')}</div>`;
  const venues=await fetchNearbyVenues(lat,lng,sport,3000);
  el.innerHTML=venues.slice(0,4).map(v=>{
    const name=v.tags?.name||(LANG.current==='tr'?'İsimsiz Tesis':'Unnamed Venue');
    const sport=v.tags?.sport||v.tags?.leisure||'';
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)"><div style="width:36px;height:36px;background:#F3F0FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px">${getSportIconFromOsm(v.tags)}</div><div style="flex:1"><div style="font-size:14px;font-weight:600">${name}</div><div style="font-size:12px;color:var(--text-secondary)">${sport}</div></div></div>`;
  }).join('')||`<div style="color:var(--text-secondary);font-size:13px">${t('noVenues')}</div>`;
}

// ─── DISTRICTS ────────────────────────────────────────────
function renderDistricts() {
  const lang=LANG.current;
  const city=state.selectedCity||CITIES[0];
  document.getElementById('districts-city-name').textContent=city.emoji+' '+city.name;
  document.getElementById('districts-sub').textContent=t('districtSub');

  const districts=CITY_DISTRICTS[city.id]||[];
  if(!districts.length) {
    document.getElementById('districts-list').innerHTML=`<div class="empty-state"><div class="empty-icon">🏙</div><div class="empty-title">${lang==='tr'?'Bu şehir için veri hazırlanıyor':'Data coming soon for this city'}</div></div>`;
    return;
  }

  // Show skeleton list first
  renderDistrictList(districts, city.id);
  // Init map
  initDistrictsMap(city, districts);
  // Load real counts from Overpass
  loadDistrictCounts(city, districts);
}

function renderDistrictList(districts, cityId) {
  const lang=LANG.current;
  const sortedByCount=[...districts].sort((a,b)=>(state.districtCounts[b.name]||0)-(state.districtCounts[a.name]||0));
  document.getElementById('districts-list').innerHTML=sortedByCount.map(d=>{
    const count=state.districtCounts[d.name];
    const countStr=count!=null?`${count} ${t('sportCenters')}`:`<span class="loading-dot">···</span>`;
    const pct=count?Math.min(count/60,1):0;
    const color=`hsl(${270-pct*30},${60+pct*30}%,${55-pct*10}%)`;
    return `
      <div class="district-item" onclick="openDistrict('${d.name}',${d.lat},${d.lng})">
        <div class="district-item-color" style="background:${color}"></div>
        <div class="district-item-info">
          <div class="district-item-name">${d.name}</div>
          <div class="district-item-count">${countStr}</div>
        </div>
        <span style="color:var(--grad-start);font-size:18px">›</span>
      </div>`;
  }).join('');
}

function initDistrictsMap(city, districts) {
  if(typeof L==='undefined') return;
  const mapEl=document.getElementById('districts-map');
  if(state.maps.districts){state.maps.districts.remove();state.maps.districts=null;mapEl.innerHTML='';}
  const map=L.map(mapEl,{zoomControl:true,attributionControl:false}).setView([city.lat,city.lng],11);
  state.maps.districts=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);

  // Draw district circles
  districts.forEach(d=>{
    const count=state.districtCounts[d.name]||0;
    const pct=Math.min(count/60,1);
    const fillColor=count?`hsl(${270-pct*30},${60+pct*30}%,${60-pct*10}%)`:'#C4B5FD';
    const circle=L.circle([d.lat,d.lng],{
      radius:d.r||2500, color:'#7C3AED', weight:2, opacity:0.7,
      fillColor, fillOpacity:0.35
    }).addTo(map);

    const label=L.divIcon({
      className:'', iconSize:[null,null],
      html:`<div class="district-map-label" onclick="openDistrict('${d.name}',${d.lat},${d.lng})">
        <div class="district-map-name">${d.name}</div>
        <div class="district-map-count" id="dmc-${d.name.replace(/\s/g,'_')}">${count||'…'}</div>
      </div>`
    });
    L.marker([d.lat,d.lng],{icon:label}).addTo(map);

    circle.on('click',()=>openDistrict(d.name,d.lat,d.lng));
  });

  setTimeout(()=>map.invalidateSize(),200);
}

async function loadDistrictCounts(city, districts) {
  // Query all sport centers in the city bbox
  const [minLat,minLng,maxLat,maxLng]=city.bbox;
  const query=`[out:json][timeout:40];(node["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall|ice_rink|stadium|track"](${minLat},${minLng},${maxLat},${maxLng});way["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall|ice_rink|stadium|track"](${minLat},${minLng},${maxLat},${maxLng});node["sport"](${minLat},${minLng},${maxLat},${maxLng});way["sport"](${minLat},${minLng},${maxLat},${maxLng}););out center 1000;`;
  try {
    const r=await fetch('https://overpass-api.de/api/interpreter',{method:'POST',body:`data=${encodeURIComponent(query)}`});
    const data=await r.json();
    const venues=(data.elements||[]).filter(e=>e.tags?.leisure||e.tags?.sport);

    // Count per district (nearest district center)
    const counts={};
    districts.forEach(d=>counts[d.name]=0);
    venues.forEach(v=>{
      const vLat=v.lat||v.center?.lat; const vLng=v.lon||v.center?.lon;
      if(!vLat) return;
      let nearest=null; let minD=Infinity;
      districts.forEach(d=>{
        const dd=Math.sqrt(Math.pow(vLat-d.lat,2)+Math.pow(vLng-d.lng,2));
        if(dd<minD){minD=dd;nearest=d.name;}
      });
      if(nearest&&minD<0.07) counts[nearest]=(counts[nearest]||0)+1;
    });

    state.districtCounts=counts;

    // Update map labels
    districts.forEach(d=>{
      const el=document.getElementById('dmc-'+d.name.replace(/\s/g,'_'));
      if(el) el.textContent=counts[d.name]||0;
    });

    // Re-render list with real counts
    if(state.currentScreen==='districts') renderDistrictList(districts, city.id);
  } catch(e) {
    // Fallback: show mock counts
    const mock={};
    districts.forEach((d,i)=>mock[d.name]=Math.floor(10+Math.random()*45));
    state.districtCounts=mock;
    districts.forEach(d=>{
      const el=document.getElementById('dmc-'+d.name.replace(/\s/g,'_'));
      if(el) el.textContent=mock[d.name];
    });
    if(state.currentScreen==='districts') renderDistrictList(districts, city.id);
  }
}

function openDistrict(name, lat, lng) {
  state.selectedDistrict={name,lat,lng};
  navigate('district_detail');
}

// ─── DISTRICT DETAIL ──────────────────────────────────────
function renderDistrictDetail() {
  const d=state.selectedDistrict; if(!d) return;
  const lang=LANG.current;
  document.getElementById('dd-name').textContent=d.name;
  document.getElementById('dd-venues-list').innerHTML=`<div class="venue-loading">⏳ ${t('loadingVenues')}</div>`;
  loadDistrictVenues(d.lat,d.lng,d.name);
}

async function loadDistrictVenues(lat, lng, name) {
  const ibbData = IBB_VENUES[name] || [];
  // Show İBB venues immediately while Overpass loads
  state.districtVenues = ibbData;
  renderVenueList(ibbData, name);
  initDistrictDetailMap(lat, lng, ibbData);

  const query=`[out:json][timeout:20];(node["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall|ice_rink|stadium|track"](around:4000,${lat},${lng});way["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall|ice_rink|stadium|track"](around:4000,${lat},${lng});node["sport"](around:4000,${lat},${lng});way["sport"](around:4000,${lat},${lng}););out center tags 100;`;
  try {
    const r=await fetch('https://overpass-api.de/api/interpreter',{method:'POST',body:`data=${encodeURIComponent(query)}`});
    const data=await r.json();
    const osmVenues=(data.elements||[]).filter(e=>e.tags?.name||e.tags?.operator||e.tags?.sport);
    // Merge: IBB first, then OSM venues not already covered
    const ibbNames=new Set(ibbData.map(v=>v.tags?.name));
    const extra=osmVenues.filter(v=>v.tags?.name&&!ibbNames.has(v.tags.name));
    const merged=[...ibbData, ...extra];
    state.districtVenues=merged;
    renderVenueList(merged, name);
    initDistrictDetailMap(lat, lng, merged);
  } catch { /* keep IBB data already shown */ }
}

function renderVenueList(venues, districtName='') {
  const lang=LANG.current;
  const el=document.getElementById('dd-venues-list');
  if(!venues.length){
    el.innerHTML=`<div class="empty-state"><div class="empty-icon">🏟</div><div class="empty-title">${t('noVenues')}</div><div class="empty-sub"><a href="https://spor.istanbul/tesisler" target="_blank" style="color:var(--grad-start);font-weight:600">spor.istanbul</a> üzerinden tüm İBB tesislerini görebilirsiniz.</div></div>`;
    return;
  }

  el.innerHTML=venues.map(v=>{
    const tags=v.tags||{};
    const vLat=v.lat||v.center?.lat; const vLng=v.lon||v.center?.lon;
    const name=tags.name||tags.operator||(lang==='tr'?'İsimsiz Tesis':'Unnamed Venue');
    const sport=tags.sport||''; const leisure=tags.leisure||'';
    const sportIcon=getSportIconFromOsm(tags);
    const leisureLabel={sports_centre:lang==='tr'?'Spor Merkezi':'Sports Centre',fitness_centre:lang==='tr'?'Fitness Merkezi':'Fitness Centre',swimming_pool:lang==='tr'?'Yüzme Havuzu':'Swimming Pool',pitch:lang==='tr'?'Saha':'Pitch',sports_hall:lang==='tr'?'Spor Salonu':'Sports Hall',ice_rink:lang==='tr'?'Buz Pateni Pisti':'Ice Rink',stadium:lang==='tr'?'Stadyum':'Stadium',track:lang==='tr'?'Atletizm Pisti':'Track'}[leisure]||leisure;

    // Category badge — İBB / Belediye / Özel
    const isIBB=tags.operator&&/İBB|ibb|spor istanbul|istanbul büyükşehir/i.test(tags.operator);
    const isMunicipal=isIBB||(tags.operator&&/belediye|spor a\.ş/i.test(tags.operator))||tags['operator:type']==='government'||tags['operator:type']==='public_authority';
    const catBadge=isIBB
      ?`<span class="venue-cat-badge ibb">🏛 İBB</span>`
      :isMunicipal
      ?`<span class="venue-cat-badge municipal">🏛 Belediye</span>`
      :`<span class="venue-cat-badge private">🏢 ${lang==='tr'?'Özel':'Private'}</span>`;

    // Opening hours
    const hours=tags.opening_hours||'';
    const isOpenNow=checkOpenNow(hours);
    const hoursDisplay=hours?`<div class="venue-hours"><span class="venue-open-dot ${isOpenNow?'open':'closed'}"></span>${isOpenNow?t('venueOpen'):t('venueClosed')} · ${hours.split(';')[0]}</div>`:'';

    // Website & phone
    const website=tags.website||tags['contact:website']||tags.url||'';
    const phone=tags.phone||tags['contact:phone']||'';
    const websiteLink=isIBB&&website
      ?`<a href="${website}" target="_blank" class="venue-booking-btn">🗓 Randevu Al · spor.istanbul</a>`
      :website?`<a href="${website}" target="_blank" class="venue-link">🔗 ${t('venueWebsite')}</a>`:'';
    const phoneLink=phone?`<a href="tel:${phone}" class="venue-link">📞 ${phone}</a>`:'';

    // Sports list + leisure type
    const sportsList=[
      ...(sport?sport.split(';').map(s=>`<span class="eq-tag">${translateOsmSport(s.trim())}</span>`):[]),
      ...(leisureLabel&&!sport?[`<span class="eq-tag">${leisureLabel}</span>`]:[]),
    ].join('');

    return `
      <div class="venue-card">
        <div class="venue-card-header">
          <div class="venue-card-icon">${sportIcon}</div>
          <div class="venue-card-info">
            <div class="venue-card-name">${name}</div>
            <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-top:3px">${catBadge}${sportsList}</div>
          </div>
        </div>
        ${hoursDisplay}
        ${websiteLink||phoneLink?`<div class="venue-links">${websiteLink}${phoneLink}</div>`:''}
        ${vLat?`<button class="btn btn-outline" style="font-size:12px;padding:7px 14px;margin-top:8px" onclick="showVenueOnMap(${vLat},${vLng},'${name.replace(/'/g,"\\'")}')">📍 Haritada Gör</button>`:''}
      </div>`;
  }).join('');
}

function checkOpenNow(hoursStr) {
  if(!hoursStr||hoursStr==='24/7') return true;
  try {
    const now=new Date();
    const h=now.getHours(); const m=now.getMinutes();
    const cur=h*60+m;
    const match=hoursStr.match(/(\d{2}):(\d{2})-(\d{2}):(\d{2})/);
    if(match) {
      const open=parseInt(match[1])*60+parseInt(match[2]);
      const close=parseInt(match[3])*60+parseInt(match[4]);
      return cur>=open&&cur<=close;
    }
  } catch {}
  return null;
}

function initDistrictDetailMap(lat, lng, venues) {
  if(typeof L==='undefined') return;
  const mapEl=document.getElementById('dd-map');
  if(state.maps.districtDetail){state.maps.districtDetail.remove();state.maps.districtDetail=null;mapEl.innerHTML='';}
  const map=L.map(mapEl,{zoomControl:true,attributionControl:false}).setView([lat,lng],14);
  state.maps.districtDetail=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  venues.forEach(v=>{
    const vLat=v.lat||v.center?.lat; const vLng=v.lon||v.center?.lon; if(!vLat) return;
    const icon=L.divIcon({className:'',html:`<div class="map-pin-venue">${getSportIconFromOsm(v.tags)}</div>`,iconSize:[32,32],iconAnchor:[16,16]});
    L.marker([vLat,vLng],{icon}).addTo(map).bindPopup(`<b>${v.tags?.name||'Tesis'}</b><br>${v.tags?.sport||v.tags?.leisure||''}`);
  });
  setTimeout(()=>map.invalidateSize(),200);
}

function showVenueOnMap(lat, lng, name) {
  if(state.maps.districtDetail) {
    state.maps.districtDetail.setView([lat,lng],17);
    document.getElementById('dd-map').scrollIntoView({behavior:'smooth'});
  }
}

// ─── Feedback Modal ───────────────────────────────────────
function openFeedbackModal(type) {
  const lang=LANG.current;
  const modal=document.getElementById('feedback-modal');
  const isVenue = type==='venue';
  const venueTypes=lang==='tr'
    ?['Halı Saha','Tenis Kortu','Padel Kortu','Fitness / Pilates','Yüzme Havuzu','Kapalı Spor Salonu','Basketbol Sahası','Voleybol Sahası','Diğer']
    :['Futsal Pitch','Tennis Court','Padel Court','Fitness / Pilates','Swimming Pool','Sports Hall','Basketball Court','Volleyball Court','Other'];
  const title=isVenue?(lang==='tr'?'Yeni Tesis Bildir':'Report a New Venue'):(lang==='tr'?'Geliştirme Önerisi':'Suggest a Feature');
  const sub=lang==='tr'
    ?(isVenue?'Bilgin doğrulandıktan sonra haritaya eklenir. Teşekkürler!':'Fikrin veya önerinizi bizimle paylaş.')
    :(isVenue?'Your report will be verified and added to the map. Thanks!':'Share your idea or improvement with us.');
  modal.innerHTML=`
    <div class="modal-backdrop" onclick="closeFeedbackModal()"></div>
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${title}</div>
      <div style="font-size:13px;color:var(--text-secondary);text-align:center;margin-bottom:16px">${sub}</div>
      ${isVenue?`
        <label class="field-label">Tesis Adı</label>
        <input class="input-field" id="fb-venue-name" placeholder="Örn: Kadıköy Halı Saha" style="margin-bottom:12px"/>
        <label class="field-label">Tesis Türü</label>
        <select class="input-field" id="fb-venue-type" style="margin-bottom:12px">
          ${venueTypes.map(t=>`<option>${t}</option>`).join('')}
        </select>
        <label class="field-label">Adres / Konum</label>
        <textarea class="input-field" id="fb-venue-addr" rows="2" style="resize:none;margin-bottom:12px" placeholder="Mahalle, sokak veya koordinat..."></textarea>
        <label class="field-label">Kaynak (opsiyonel)</label>
        <input class="input-field" id="fb-venue-src" placeholder="Web sitesi, Instagram..." style="margin-bottom:16px"/>
      `:`
        <label class="field-label">Konu</label>
        <select class="input-field" id="fb-type-sel" style="margin-bottom:12px">
          ${(lang==='tr'?['Hata Bildirimi','Yeni Özellik İsteği','İyileştirme Önerisi','Diğer']:['Bug Report','Feature Request','Improvement','Other']).map(t=>`<option>${t}</option>`).join('')}
        </select>
        <label class="field-label">Açıklama</label>
        <textarea class="input-field" id="fb-desc" rows="4" style="resize:none;margin-bottom:16px" placeholder="${lang==='tr'?'Önerinizi detaylıca anlatın...':'Describe your suggestion in detail...'}"></textarea>
      `}
      <button class="btn btn-primary" onclick="submitFeedback('${type}')">${lang==='tr'?'Gönder ✓':'Submit ✓'}</button>
    </div>`;
  modal.style.display='flex';
  requestAnimationFrame(()=>modal.querySelector('.modal-sheet').classList.add('open'));
}

function closeFeedbackModal(){
  const modal=document.getElementById('feedback-modal');
  const sheet=modal.querySelector('.modal-sheet');
  if(sheet) sheet.classList.remove('open');
  setTimeout(()=>{modal.style.display='none';modal.innerHTML='';},300);
}

function submitFeedback(type){
  closeFeedbackModal();
  const lang=LANG.current;
  setTimeout(()=>showToast(lang==='tr'?'✅ Geri bildiriminiz alındı, teşekkürler!':'✅ Feedback received, thank you!'),350);
}

// ─── CREATE ACTIVITY ──────────────────────────────────────
function renderCreate() {
  const lang=LANG.current;
  document.getElementById('create-topbar-title').textContent=t('createTitle');

  // Sport grid
  document.getElementById('sport-grid').innerHTML=SPORTS.map(s=>`
    <button class="sport-btn ${state.selectedSport===s.id?'selected':''}" onclick="selectSport('${s.id}')">
      <span class="sport-btn-icon">${s.icon}</span>
      <span class="sport-btn-label">${t('sports')[s.key]}</span>
    </button>`).join('');

  // Context-aware location question
  document.getElementById('location-label').textContent=getLocationQuestion(state.selectedSport);

  // Level
  document.getElementById('level-options').innerHTML=['beginner','intermediate','advanced','pro'].map(l=>
    `<button class="level-btn ${state.selectedLevel===l?'selected':''}" onclick="selectLevel('${l}')">${t('level')[l]}</button>`).join('');

  // Join condition
  document.getElementById('join-condition-label').textContent=t('joinConditionLabel');
  document.getElementById('join-condition-options').innerHTML=Object.entries(T[lang].joinConditions).map(([id,label])=>
    `<button class="join-cond-btn ${state.joinCondition===id?'selected':''}" onclick="setJoinCondition('${id}')">${label}</button>`).join('');

  // Friends only toggle
  document.getElementById('friends-only-label').textContent=t('friendsOnly');
  document.getElementById('friends-only-sub').textContent=t('friendsOnlySub');
  document.getElementById('friends-only-toggle').classList.toggle('on',state.friendsOnly);

  // Days picker
  document.getElementById('days-label').textContent=t('daysLabel');
  const dayOrder=['mon','tue','wed','thu','fri','sat','sun'];
  document.getElementById('days-picker').innerHTML=dayOrder.map(d=>
    `<button class="day-btn ${state.selectedDays.has(d)?'selected':''}" onclick="toggleDay('${d}')">${t('days')[d]}</button>`).join('');

  // Time range
  document.getElementById('time-range-label').textContent=t('timeRangeLabel');
  document.getElementById('time-from').value=state.timeFrom;
  document.getElementById('time-to').value=state.timeTo;

  // Equipment
  const eqOpts=[
    {id:'racket',icon:'🎾',label:{tr:'Raket / Top',en:'Racket / Ball'},sub:{tr:'Paylaşabilirim',en:'Can share'}},
    {id:'ball',icon:'⚽',label:{tr:'Top',en:'Ball'},sub:{tr:'Top götürüyorum',en:'Bringing a ball'}},
    {id:'net',icon:'🏐',label:{tr:'File / Kale',en:'Net / Goal'},sub:{tr:'Ekstra ekipman',en:'Extra equipment'}},
    {id:'venue',icon:'🏟',label:{tr:'Saha rezervasyonu bende',en:'Venue booked by me'},sub:{tr:'Ücreti paylaşabiliriz',en:'Can split costs'}},
  ];
  document.getElementById('equipment-checks').innerHTML=eqOpts.map(e=>`
    <div class="check-item ${state.checkedEquipment.has(e.id)?'checked':''}" onclick="toggleEquipment('${e.id}')">
      <div class="check-box">${state.checkedEquipment.has(e.id)?'✓':''}</div>
      <span style="font-size:20px">${e.icon}</span>
      <div><div class="check-label">${e.label[lang]}</div><div class="check-sub">${e.sub[lang]}</div></div>
    </div>`).join('');

  document.getElementById('publish-btn').textContent=t('publish');
  document.getElementById('create-notes').placeholder=t('notesPh');
  document.getElementById('create-pick-map-btn').textContent='📍 '+t('pickLocation');
  if(state.createLocationName) document.getElementById('create-location-input').value=state.createLocationName;
  const mapContainer=document.getElementById('create-map-container');
  if(mapContainer) {
    mapContainer.style.display=state.createMapVisible?'block':'none';
    if(state.createMapVisible) initCreateMap();
  }
}

// ─── PROFILE ──────────────────────────────────────────────
function renderProfile() {
  const lang=LANG.current;
  const u={name:'Seren Uğurlu',sub:lang==='tr'?'İstanbul · Üye: Mayıs 2026':'Istanbul · May 2026',initials:'SU',
    stats:[{value:12,label:lang==='tr'?'Aktivite':'Activities'},{value:8,label:lang==='tr'?'Arkadaş':'Friends'},{value:'4.9',label:lang==='tr'?'Puan':'Rating'}],
    sports:[{icon:'🎾',name:lang==='tr'?'Tenis':'Tennis',level:'intermediate'},{icon:'🏐',name:lang==='tr'?'Voleybol':'Volleyball',level:'beginner'}],
    history:[{icon:'🎾',title:lang==='tr'?'Tenis — Kadıköy':'Tennis — Kadıköy',date:'5 Mayıs'},{icon:'⚽',title:lang==='tr'?'Halı saha':'Futsal',date:'2 Mayıs'}]
  };
  document.getElementById('profile-initials').textContent=u.initials;
  document.getElementById('profile-name').textContent=u.name;
  document.getElementById('profile-sub').textContent=u.sub;
  document.getElementById('profile-stats').innerHTML=u.stats.map(s=>`<div class="stat-item"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('');
  document.getElementById('profile-sports').innerHTML=u.sports.map(s=>`<div class="sport-level-row"><div class="sport-level-left">${s.icon} ${s.name}</div><span class="level-pill">${t('level')[s.level]}</span></div>`).join('');
  document.getElementById('profile-history').innerHTML=u.history.map(h=>`<div class="activity-history-item"><div class="history-icon">${h.icon}</div><div><div class="history-title">${h.title}</div><div class="history-date">${h.date}</div></div></div>`).join('');
  document.getElementById('profile-topbar-title').textContent=t('profileTitle');
  document.getElementById('profile-sports-title').textContent=lang==='tr'?'Sporlarım':'My Sports';
  document.getElementById('profile-history-title').textContent=lang==='tr'?'Aktivite Geçmişi':'Activity History';
  document.getElementById('profile-friends-title').textContent=lang==='tr'?`Arkadaşlarım (${FRIENDS.length})`:`My Friends (${FRIENDS.length})`;
  document.getElementById('profile-friends').innerHTML=FRIENDS.map(f=>`
    <div class="friend-row">
      <div class="avatar">${f.initials}</div>
      <div class="friend-info">
        <div class="friend-name">${f.name}</div>
        <div class="friend-meta">${t('sports')[f.sport]||f.sport} · ${t('level')[f.level]} · ⭐${f.rating}${f.mutualActivities?` · ${f.mutualActivities} ${lang==='tr'?'ortak':'mutual'}`:''}
        </div>
      </div>
      <button class="btn btn-sm btn-outline" onclick="showToast('💬 '+(LANG.current==='tr'?'Mesaj yakında!':'Messaging soon!'))" style="font-size:12px;padding:6px 12px">💬</button>
    </div>`).join('');
}

// ─── NOTIFS ───────────────────────────────────────────────
function renderNotifs() {
  const lang=LANG.current;
  document.getElementById('notifs-list').innerHTML=NOTIFICATIONS.map(n=>`
    <div class="notif-card ${n.unread?'unread':''}">
      <div class="notif-top"><div class="avatar" style="font-size:18px;background:linear-gradient(135deg,#F3F0FF,#FCE7F3);color:#7C3AED">${n.icon}</div>
      <div class="notif-body"><div class="notif-title">${n.title[lang]}</div><div class="notif-text">${n.text[lang]}</div><div class="notif-time">${n.time[lang]}</div></div></div>
      ${n.hasActions?`<div class="notif-actions"><button class="btn btn-primary btn-sm" onclick="handleNotif(${n.id},'accept')" style="flex:1">${t('accept')}</button><button class="btn btn-outline btn-sm" onclick="handleNotif(${n.id},'reject')" style="flex:1">${t('reject')}</button></div>`:''}
    </div>`).join('');
  document.getElementById('notifs-topbar-title').textContent=t('notifsTitle');
}

// ─── PROPOSE MODAL ────────────────────────────────────────
function openProposeModal() {
  const lang=LANG.current;
  const modal=document.getElementById('propose-modal');
  const days=[]; for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()+i);const dn=['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];const dne=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];days.push({label:(lang==='tr'?dn:dne)[d.getDay()],num:d.getDate(),month:d.toLocaleString(lang==='tr'?'tr-TR':'en-US',{month:'short'})});}
  const times=['08:00','09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];
  modal.innerHTML=`<div class="modal-backdrop" onclick="closeProposeModal()"></div><div class="modal-sheet"><div class="modal-handle"></div><div class="modal-title">${t('proposeTitle')}</div><div class="modal-section-label">${t('proposeDate')}</div><div class="propose-days">${days.map((d,i)=>`<button class="propose-day-btn ${i===0?'selected':''}" onclick="selectProposeDays(this)"><span class="propose-day-name">${d.label}</span><span class="propose-day-num">${d.num}</span><span class="propose-day-month">${d.month}</span></button>`).join('')}</div><div class="modal-section-label" style="margin-top:16px">${t('proposeTime')}</div><div class="propose-times">${times.map(ts=>`<button class="propose-time-btn" onclick="toggleProposeTime(this)">${ts}</button>`).join('')}</div><button class="btn btn-primary" style="margin-top:20px" onclick="submitPropose()">${t('proposeSend')}</button></div>`;
  modal.style.display='flex';
  requestAnimationFrame(()=>modal.querySelector('.modal-sheet').classList.add('open'));
}
function closeProposeModal(){const modal=document.getElementById('propose-modal');const sheet=modal.querySelector('.modal-sheet');if(sheet)sheet.classList.remove('open');setTimeout(()=>{modal.style.display='none';modal.innerHTML='';},300);}
function selectProposeDays(btn){document.querySelectorAll('.propose-day-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}
function toggleProposeTime(btn){btn.classList.toggle('selected');}
function submitPropose(){const times=[...document.querySelectorAll('.propose-time-btn.selected')];const day=document.querySelector('.propose-day-btn.selected');if(!day||!times.length){showToast(LANG.current==='tr'?'⚠️ Tarih ve en az bir saat seçin':'⚠️ Select date and time');return;}closeProposeModal();setTimeout(()=>showToast(t('proposeSent')),350);}

// ─── Create Map ────────────────────────────────────────────
function initCreateMap() {
  if(typeof L==='undefined') return;
  const mapEl=document.getElementById('create-map-container'); if(!mapEl) return;
  if(state.maps.create){state.maps.create.remove();state.maps.create=null;mapEl.innerHTML='';}
  const city=state.selectedCity||CITIES[0];
  const center=state.createCoords||{lat:city.lat,lng:city.lng};
  const map=L.map(mapEl,{zoomControl:true,attributionControl:false}).setView([center.lat,center.lng],13);
  state.maps.create=map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  let marker=null;
  if(state.createCoords) marker=L.marker([state.createCoords.lat,state.createCoords.lng]).addTo(map);
  map.on('click',async(e)=>{
    const{lat,lng}=e.latlng; state.createCoords={lat,lng};
    if(marker) map.removeLayer(marker);
    marker=L.marker([lat,lng]).addTo(map);
    try{const r=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);const data=await r.json();const name=data.display_name?.split(',').slice(0,3).join(',').trim()||`${lat.toFixed(4)},${lng.toFixed(4)}`;state.createLocationName=name;document.getElementById('create-location-input').value=name;}catch{document.getElementById('create-location-input').value=`${lat.toFixed(4)},${lng.toFixed(4)}`;}
    showToast('📍 '+(LANG.current==='tr'?'Konum seçildi':'Location selected'));
  });
  setTimeout(()=>map.invalidateSize(),200);
}

function toggleCreateMap(){
  state.createMapVisible=!state.createMapVisible;
  document.getElementById('create-map-container').style.display=state.createMapVisible?'block':'none';
  document.getElementById('create-pick-map-btn').textContent=state.createMapVisible?'✕ '+(LANG.current==='tr'?'Haritayı Kapat':'Close Map'):'📍 '+t('pickLocation');
  if(state.createMapVisible) initCreateMap();
}

// ─── Location Autocomplete ─────────────────────────────────
let _locTimer=null;
function onLocationInput(val){clearTimeout(_locTimer);if(val.length<3){hideLocationDropdown();return;}_locTimer=setTimeout(()=>doLocationSearch(val),400);}
async function doLocationSearch(q){try{const r=await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&countrycodes=tr&limit=5`);const res=await r.json();showLocationDropdown(res);}catch{hideLocationDropdown();}}
function showLocationDropdown(results){const dd=document.getElementById('location-dropdown');if(!dd) return;if(!results.length){hideLocationDropdown();return;}dd.innerHTML=results.map(r=>{const short=r.display_name.split(',').slice(0,3).join(',').trim();return `<div class="location-dd-item" onclick="pickLocation('${short.replace(/'/g,"\\'")}',${r.lat},${r.lon})"><span class="location-dd-icon">📍</span><div><div class="location-dd-name">${short}</div><div class="location-dd-type">${r.type||''}</div></div></div>`;}).join('');dd.style.display='block';}
function hideLocationDropdown(){const dd=document.getElementById('location-dropdown');if(dd) dd.style.display='none';}
async function pickLocation(name,lat,lng){state.createLocationName=name;state.createCoords={lat:parseFloat(lat),lng:parseFloat(lng)};document.getElementById('create-location-input').value=name;hideLocationDropdown();state.createMapVisible=true;document.getElementById('create-map-container').style.display='block';document.getElementById('create-pick-map-btn').textContent='✕ '+(LANG.current==='tr'?'Haritayı Kapat':'Close Map');initCreateMap();}

// ─── Overpass helpers ──────────────────────────────────────
async function fetchNearbyVenues(lat,lng,sport,radius){
  const sportTag=sport&&SPORT_OSM[sport];
  const filter=sportTag
    ?`node["sport"="${sportTag}"](around:${radius},${lat},${lng});way["sport"="${sportTag}"](around:${radius},${lat},${lng});`
    :`node["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall"](around:${radius},${lat},${lng});way["leisure"~"sports_centre|fitness_centre|swimming_pool|pitch|sports_hall"](around:${radius},${lat},${lng});`;
  const query=`[out:json][timeout:15];(${filter});out center tags 20;`;
  try{const r=await fetch('https://overpass-api.de/api/interpreter',{method:'POST',body:`data=${encodeURIComponent(query)}`});const data=await r.json();return(data.elements||[]).filter(e=>e.tags?.name);}catch{return[];}
}

function getSportIconFromOsm(tags){if(!tags) return '🏟';const map={tennis:'🎾',football:'⚽',soccer:'⚽',basketball:'🏀',volleyball:'🏐',padel:'🏓',badminton:'🏸',swimming:'🏊',fitness:'💪',golf:'⛳',climbing:'🧗',cycling:'🚴',running:'🏃',rowing:'🚣',archery:'🎯',boxing:'🥊',martial_arts:'🥋',table_tennis:'🏓',squash:'🎯',sports_centre:'🏅',pitch:'🏟',fitness_centre:'💪',swimming_pool:'🏊'};return map[tags.sport]||map[tags.leisure]||'🏟';}

function translateOsmSport(tag){const lang=LANG.current;const tr={tennis:'Tenis',football:'Futbol',soccer:'Futbol',basketball:'Basketbol',volleyball:'Voleybol',padel:'Padel',badminton:'Badminton',swimming:'Yüzme',fitness:'Fitness',golf:'Golf',climbing:'Tırmanış',cycling:'Bisiklet',running:'Koşu',rowing:'Kürek',archery:'Okçuluk',boxing:'Boks',martial_arts:'Dövüş Sanatları',table_tennis:'Masa Tenisi',squash:'Squash',ice_rink:'Buz Pateni',sports_centre:'Spor Merkezi',pitch:'Saha',fitness_centre:'Fitness Merkezi',swimming_pool:'Yüzme Havuzu'};const en={tennis:'Tennis',football:'Football',basketball:'Basketball',volleyball:'Volleyball',padel:'Padel',badminton:'Badminton',swimming:'Swimming',fitness:'Fitness',golf:'Golf',climbing:'Climbing',cycling:'Cycling',running:'Running',rowing:'Rowing',archery:'Archery',boxing:'Boxing',martial_arts:'Martial Arts',table_tennis:'Table Tennis',squash:'Squash',ice_rink:'Ice Rink',sports_centre:'Sports Centre',pitch:'Pitch',fitness_centre:'Fitness Centre',swimming_pool:'Swimming Pool'};return(lang==='tr'?tr:en)[tag]||tag;}

// ─── İBB / Spor İstanbul venue dataset ───────────────────
// Fallback when Overpass is unavailable. operator tag drives badge logic.
const IBB_VENUES = {
  'Kadıköy': [
    {tags:{name:'Kadıköy Spor ve Eğitim Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'tennis;swimming;basketball;fitness',opening_hours:'07:00-23:00',website:'https://spor.istanbul/tesisler'},lat:40.9910,lon:29.0260},
    {tags:{name:'Moda Tenis Kortları',operator:'İBB',leisure:'pitch',sport:'tennis',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:40.9855,lon:29.0267},
    {tags:{name:'Kadıköy Halı Saha Tesisi',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.9945,lon:29.0215},
  ],
  'Beşiktaş': [
    {tags:{name:'Beşiktaş Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;swimming',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0450,lon:29.0080},
    {tags:{name:'Beşiktaş Halı Saha Tesisi',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0420,lon:29.0050},
    {tags:{name:'Yıldız Parkı Tenis Kortları',operator:'İBB',leisure:'pitch',sport:'tennis',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:41.0465,lon:29.0100},
  ],
  'Şişli': [
    {tags:{name:'Şişli Spor ve Yaşam Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;yoga;basketball',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0610,lon:28.9870},
    {tags:{name:'Şişli Halı Saha Tesisi',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0640,lon:28.9850},
    {tags:{name:'Şişli Tenis ve Padel Kortları',operator:'İBB',leisure:'pitch',sport:'tennis;padel',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:41.0600,lon:28.9900},
  ],
  'Üsküdar': [
    {tags:{name:'Üsküdar Spor ve Eğitim Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;volleyball',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0250,lon:29.0160},
    {tags:{name:'Üsküdar Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0230,lon:29.0185},
  ],
  'Fatih': [
    {tags:{name:'Fatih Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;boxing;martial_arts',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0175,lon:28.9380},
    {tags:{name:'Yedikule Spor Parkı',operator:'İBB',leisure:'pitch',sport:'football;basketball',opening_hours:'08:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0140,lon:28.9340},
  ],
  'Beyoğlu': [
    {tags:{name:'Beyoğlu Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;yoga',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0320,lon:28.9760},
    {tags:{name:'Kasımpaşa Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0345,lon:28.9720},
  ],
  'Bakırköy': [
    {tags:{name:'Bakırköy Spor ve Eğitim Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'tennis;swimming;fitness;pilates',opening_hours:'07:00-23:00',website:'https://spor.istanbul/tesisler'},lat:40.9810,lon:28.8700},
    {tags:{name:'Bakırköy Sahil Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.9820,lon:28.8665},
    {tags:{name:'Ataköy Spor Parkı',operator:'İBB',leisure:'pitch',sport:'basketball;volleyball',opening_hours:'08:00-22:00',website:'https://spor.istanbul/tesisler'},lat:40.9790,lon:28.8735},
  ],
  'Maltepe': [
    {tags:{name:'Maltepe Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;basketball',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler','addr:full':'Altıayak Mah. Maltepe/İstanbul'},lat:40.9365,lon:29.1325},
    {tags:{name:'Maltepe Sahil Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.9320,lon:29.1355},
    {tags:{name:'Maltepe Tenis ve Padel Kortu',operator:'İBB',leisure:'pitch',sport:'tennis;padel',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:40.9340,lon:29.1295},
    {tags:{name:'Maltepe Duvar Tenisi Kortu',operator:'İBB',leisure:'pitch',sport:'squash',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:40.9355,lon:29.1310},
    {tags:{name:'Maltepe Kapalı Spor Salonu',operator:'Spor İstanbul A.Ş.',leisure:'sports_hall',sport:'basketball;volleyball;table_tennis',opening_hours:'08:00-22:00',website:'https://spor.istanbul/tesisler'},lat:40.9375,lon:29.1340},
  ],
  'Ataşehir': [
    {tags:{name:'Ataşehir Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;swimming',opening_hours:'07:00-23:00',website:'https://spor.istanbul/tesisler'},lat:40.9840,lon:29.1175},
    {tags:{name:'Ataşehir Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.9820,lon:29.1150},
    {tags:{name:'Ataşehir Tenis Kortları',operator:'İBB',leisure:'pitch',sport:'tennis',opening_hours:'08:00-21:00',website:'https://spor.istanbul/tesisler'},lat:40.9855,lon:29.1200},
  ],
  'Ümraniye': [
    {tags:{name:'Ümraniye Spor ve Eğitim Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;boxing',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0170,lon:29.1035},
    {tags:{name:'Ümraniye Halı Saha Kompleksi',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0150,lon:29.1000},
  ],
  'Kağıthane': [
    {tags:{name:'Kağıthane Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;yoga',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0890,lon:28.9720},
    {tags:{name:'Kağıthane Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0870,lon:28.9700},
  ],
  'Sarıyer': [
    {tags:{name:'Sarıyer Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'tennis;fitness;swimming',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.1680,lon:29.0510},
    {tags:{name:'Sarıyer Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.1660,lon:29.0490},
  ],
  'Bağcılar': [
    {tags:{name:'Bağcılar Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;boxing',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0405,lon:28.8565},
    {tags:{name:'Bağcılar Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0420,lon:28.8550},
  ],
  'Küçükçekmece': [
    {tags:{name:'Küçükçekmece Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;swimming;pilates',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0010,lon:28.7830},
    {tags:{name:'Küçükçekmece Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0025,lon:28.7810},
  ],
  'Kartal': [
    {tags:{name:'Kartal Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;volleyball',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:40.9025,lon:29.1900},
    {tags:{name:'Kartal Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.9010,lon:29.1880},
  ],
  'Pendik': [
    {tags:{name:'Pendik Spor ve Eğitim Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;swimming;tennis',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:40.8720,lon:29.2570},
    {tags:{name:'Pendik Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:40.8700,lon:29.2550},
  ],
  'Eyüpsultan': [
    {tags:{name:'Eyüpsultan Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;martial_arts;boxing',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0630,lon:28.9380},
    {tags:{name:'Eyüpsultan Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0615,lon:28.9360},
  ],
  'Bahçelievler': [
    {tags:{name:'Bahçelievler Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;pilates;yoga',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0070,lon:28.8630},
    {tags:{name:'Bahçelievler Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0055,lon:28.8610},
  ],
  'Gaziosmanpaşa': [
    {tags:{name:'Gaziosmanpaşa Spor Tesisi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;football',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0580,lon:28.9180},
    {tags:{name:'Gaziosmanpaşa Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0565,lon:28.9165},
  ],
  'Esenyurt': [
    {tags:{name:'Esenyurt Spor Merkezi',operator:'Spor İstanbul A.Ş.',leisure:'sports_centre',sport:'fitness;basketball;volleyball',opening_hours:'07:00-22:00',website:'https://spor.istanbul/tesisler'},lat:41.0370,lon:28.6725},
    {tags:{name:'Esenyurt Halı Saha',operator:'İBB',leisure:'pitch',sport:'football',opening_hours:'09:00-24:00',website:'https://spor.istanbul/tesisler'},lat:41.0355,lon:28.6705},
  ],
};

// ─── Friend system ────────────────────────────────────────
function addFriend(name, initials) {
  if(FRIENDS.find(f=>f.name===name)){showToast(LANG.current==='tr'?'Zaten arkadaşsınız!':'Already friends!');return;}
  FRIENDS.push({id:Date.now(),name,initials,sport:'tennis',level:'beginner',rating:4.5,mutualActivities:0});
  showToast(LANG.current==='tr'?`👤 ${name} arkadaş listene eklendi!`:`👤 ${name} added to friends!`);
}

// ─── Event handlers ────────────────────────────────────────
function setFilter(id){state.activeFilter=id;renderHome();}
function setHomeView(v){state.homeView=v;renderHome();}
function openDetail(id){const a=ACTIVITIES.find(a=>a.id===id);if(a) navigate('detail',{activity:a});}
function selectSport(id){state.selectedSport=state.selectedSport===id?null:id;const lbl=document.getElementById('location-label');if(lbl) lbl.textContent=getLocationQuestion(state.selectedSport);renderCreate();}
function selectLevel(l){state.selectedLevel=state.selectedLevel===l?null:l;renderCreate();}
function setJoinCondition(c){state.joinCondition=c;renderCreate();}
function toggleFriendsOnly(){state.friendsOnly=!state.friendsOnly;document.getElementById('friends-only-toggle').classList.toggle('on',state.friendsOnly);}
function toggleDay(d){state.selectedDays.has(d)?state.selectedDays.delete(d):state.selectedDays.add(d);renderCreate();}
function toggleEquipment(id){state.checkedEquipment.has(id)?state.checkedEquipment.delete(id):state.checkedEquipment.add(id);renderCreate();}
function handleJoin(){showToast('🎉 '+t('joined'));}
function handlePropose(){openProposeModal();}
function handlePublish(){
  if(!state.selectedSport){showToast(LANG.current==='tr'?'⚠️ Lütfen bir spor seçin':'⚠️ Please select a sport');return;}
  if(state.friendsOnly){
    const n=FRIENDS.length;
    showToast(LANG.current==='tr'?`🔒 Yayınlandı · ${n} arkadaşına bildirim gönderildi!`:`🔒 Published · Notified ${n} friends!`);
  } else {
    showToast('🎉 '+t('published'));
  }
  state.selectedSport=null;state.selectedLevel=null;state.joinCondition='all';state.friendsOnly=false;state.selectedDays.clear();state.checkedEquipment.clear();state.createCoords=null;state.createLocationName='';state.createMapVisible=false;
  setTimeout(()=>navigate('home'),800);
}
function handleNotif(id,action){
  const n=NOTIFICATIONS.find(n=>n.id===id);
  if(n?.type==='friend'){
    if(action==='accept'){
      FRIENDS.push({id:Date.now(),name:'Ahmet Y.',initials:'AY',sport:'football',level:'beginner',rating:4.5,mutualActivities:0});
      showToast(LANG.current==='tr'?'👤 Arkadaş eklendi!':'👤 Friend added!');
    } else {
      showToast(LANG.current==='tr'?'❌ İstek reddedildi':'❌ Request rejected');
    }
  } else {
    showToast(action==='accept'?(LANG.current==='tr'?'✅ Kabul edildi':'✅ Accepted'):(LANG.current==='tr'?'❌ Reddedildi':'❌ Rejected'));
  }
  if(n){n.hasActions=false;n.unread=false;}
  renderNotifs();
}
function toggleLang(){LANG.current=LANG.current==='tr'?'en':'tr';document.querySelectorAll('.lang-toggle-btn').forEach(b=>b.textContent=LANG.current==='tr'?'EN':'TR');renderScreen(state.currentScreen);}

// ─── Toast ─────────────────────────────────────────────────
function showToast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2500);}

// ─── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{ navigate('splash'); });
