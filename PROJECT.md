# Social Sports 🏃

Spor ve aktivitelerde eş / takım bulmayı sağlayan mobil-öncelikli uygulama.

---

## Fikir

Tenis oynamak istiyorsun, raket var, alan var — ama partner yok. Social Sports bu sorunu çözüyor: spor aktiviteleri için ilan açıp uygun kişilerle eşleşiyorsun. Tenis, voleybol, basketbol, futbol ve daha fazlası.

---

## MVP Özellikleri

| # | Özellik | Durum |
|---|---------|-------|
| 1 | Aktivite ilanı aç (spor, yer, zaman, kişi, ekipman) | 🚧 |
| 2 | İlanları listele & filtrele | 🚧 |
| 3 | Katılma isteği gönder / kabul-red | 🚧 |
| 4 | Alternatif zaman/yer önerisi | 🚧 |
| 5 | Kullanıcı profili & seviye | 🚧 |
| 6 | Harita & konum entegrasyonu | 🚧 |
| 7 | Google ile giriş | 🚧 |
| 8 | TR / EN dil desteği | 🚧 |

---

## Teknik Stack

### Şu An (HTML Prototype)
- HTML5 + CSS3 + Vanilla JS
- Mobile-first, SPA mimarisi (JS ile ekran geçişleri)
- Mock data ile çalışıyor

### Sonraki Adım (Native App)
- **Android**: Capacitor (HTML → APK)
- **Mac**: Tauri (HTML → .app)
- **Backend**: Firebase (MVP) → özel API (scale)
- **Auth**: Google OAuth → Email + Telefon (ilerleyen)

---

## Dizin Yapısı

```
social-sports/
├── PROJECT.md          ← bu dosya, her şey burada
├── index.html          ← giriş / login ekranı
├── css/
│   └── style.css       ← tüm stiller
├── js/
│   └── app.js          ← SPA router + mock data + mantık
└── assets/             ← ikonlar, görseller
```

---

## Tasarım Sistemi

| Değişken | Değer |
|----------|-------|
| Arka plan | `#FAFAFA` |
| Birincil gradient | `#7C3AED → #EC4899` |
| Kart arka planı | `#FFFFFF` + gölge |
| Metin (ana) | `#1F2937` |
| Metin (ikincil) | `#6B7280` |
| Font | Poppins (Google Fonts) |
| Border radius | 16px (kart), 24px (buton) |

---

## Ekranlar

1. **Login** — App logo + Google ile giriş
2. **Home Feed** — Aktivite listesi, filtre (spor türü), arama
3. **Aktivite Detay** — Tam bilgi, harita, katıl butonu, alternatif öner
4. **Aktivite Oluştur** — Spor seç, yer/zaman, ekipman, seviye
5. **Profil** — Kullanıcı bilgisi, geçmiş, ekipmanlar, seviyeler
6. **Bildirimler** — Gelen istekler, kabul/red bildirimleri

---

## Ajan Rolleri

### 🗂 Project Manager
- Backlog yönetimi, sprint planlama
- Özellik önceliklendirme
- İlerleme takibi

### 🎨 Frontend Developer
- UI/UX tasarım & implementasyon
- Responsive & mobile-first
- Animasyonlar, geçişler

### ⚙️ Backend Developer
- API tasarımı & implementasyon
- Veritabanı şeması
- Auth & güvenlik

### 🧪 QA
- Test senaryoları
- Bug raporlama
- UX geri bildirimi

---

## Karar Günlüğü

| Tarih | Karar | Neden |
|-------|-------|-------|
| 2026-05-09 | Proje başlatıldı | — |
| 2026-05-09 | Google Auth (MVP) | Hızlı, güvenilir; ilerleyen versiyonlarda email+telefon eklenir |
| 2026-05-09 | TR+EN çift dil | Türkiye odaklı ama global hedef |
| 2026-05-09 | Canlı & sosyal tasarım | Hedef kitle genç, aktif insanlar |
| 2026-05-09 | HTML → Capacitor/Tauri | Tek codebase ile Android + Mac |

---

## Sonraki Adımlar

- [ ] HTML prototype tamamla (tüm ekranlar)
- [ ] GitHub repo kur (s3i3/social-sports)
- [ ] Firebase projesi oluştur
- [ ] Google Auth entegre et
- [ ] Firestore veri modeli tasarla
- [ ] Capacitor kurulumu (Android)
- [ ] Tauri kurulumu (Mac)
