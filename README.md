### Next.js Portfolio – README (EN / FR / KO)

---

## Overview (English)
A multilingual portfolio built with Next.js 14 (App Router). It implements internationalization with `next-intl`, modern styling with Tailwind CSS + shadcn/ui, and SEO/accessibility best practices. Deployed on Vercel.

- **Routing**: Next.js App Router (`app/`), locale-prefixed routes (`/en`, `/fr`, `/ko`)
- **i18n**: `next-intl` (server: `setRequestLocale`, `getMessages`, client: `useTranslations`)
- **API**: Next.js Route Handlers (`app/api/...`) used for email sending
- **UI/Styling**: Tailwind CSS, shadcn/ui components, responsive and accessible design
- **Images**: Next/Image for optimized loading and LCP focus
- **SEO**: `metadataBase`, per-page `canonical`, `hreflang` alternates, dynamic `robots.txt`
- **Deployment**: Vercel (production), environment-driven absolute URLs

### Getting Started
```bash
pnpm install    # or npm install / yarn
pnpm dev        # or npm run dev / yarn dev
```
Open `http://localhost:3000/en` (or `/fr`, `/ko`).

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Scripts
```bash
pnpm dev
pnpm build
pnpm start
```

### Project Structure
- `app/[locale]/` localized routes, layout, and pages (App Router)
- `app/api/` route handlers (e.g., email endpoint)
- `app/robots.js` dynamic robots.txt
- `components/` UI/navigation/sections (shadcn/ui + custom)
- `i18n/` request/routing config
- `messages/` translation JSON (`en.json`, `fr.json`, `ko.json`)

### Internationalization
- Layout sets locale on the server: `setRequestLocale(locale)` and fetches messages with `getMessages`
- Pages/components use `useTranslations()` or `getTranslations()`
- Language switcher: `components/nav/LocaleSwitcher.js`

### SEO
- Global: `metadataBase` from `NEXT_PUBLIC_SITE_URL`, `hreflang` alternates in layout
- Per-page: `generateMetadata` can define `canonical` and `alternates`
- Robots: `app/robots.js` generates valid rules with `Host` and `Sitemap`

### Accessibility
- Icon-only buttons include `aria-label` or hidden text (`sr-only`)
- Decorative flags/icons are `aria-hidden` with `role="presentation"`
- Touch targets sized to meet ~44×44px where applicable

### Deployment (Vercel)
- Set `NEXT_PUBLIC_SITE_URL` in the Vercel Project Settings → Environment Variables
- Trigger a production build; Next.js will emit absolute URLs for SEO tags

---

## Présentation (Français)
Portfolio multilingue basé sur Next.js 14 (App Router), avec `next-intl`. Style moderne via Tailwind CSS + shadcn/ui, bonnes pratiques SEO et accessibilité. Déployé sur Vercel.

- **Routage**: App Router (`app/`), préfixes de langue (`/en`, `/fr`, `/ko`)
- **i18n**: `next-intl` (serveur: `setRequestLocale`, `getMessages`, client: `useTranslations`)
- **API**: Route Handlers Next.js (`app/api/...`) pour l’envoi d’e-mails
- **UI/Style**: Tailwind CSS, composants shadcn/ui, design responsive et accessible
- **Images**: Next/Image (optimisation et LCP)
- **SEO**: `metadataBase`, canonical par page, alternates `hreflang`, `robots.txt` dynamique
- **Déploiement**: Vercel, URLs absolues via variables d’environnement

### Démarrage
```bash
pnpm install
pnpm dev
```
Ouvrez `http://localhost:3000/fr` (ou `/en`, `/ko`).

### Variables d’environnement
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Scripts
```bash
pnpm dev
pnpm build
pnpm start
```

### Structure du projet
- `app/[locale]/` routes/pages localisées (App Router)
- `app/api/` route handlers (ex: endpoint e-mail)
- `app/robots.js` robots.txt dynamique
- `components/` UI/navigation/sections (shadcn/ui + custom)
- `i18n/` configuration requêtes/routage
- `messages/` traductions (`en.json`, `fr.json`, `ko.json`)

### Internationalisation
- Layout serveur: `setRequestLocale` + `getMessages`
- Pages/composants: `useTranslations()` ou `getTranslations()`
- Sélecteur de langue: `components/nav/LocaleSwitcher.js`

### SEO
- Global: `metadataBase` (via `NEXT_PUBLIC_SITE_URL`), alternates `hreflang`
- Par page: `generateMetadata` (canonical/alternates)
- Robots: `app/robots.js` (Host/Sitemap valides)

### Accessibilité
- Boutons uniquement icône: `aria-label` ou texte `sr-only`
- Drapeaux/icônes décoratifs: `aria-hidden`, `role="presentation"`
- Cibles tactiles ~44×44px

### Déploiement (Vercel)
- Définissez `NEXT_PUBLIC_SITE_URL` dans Vercel → Variables d’environnement
- Lancez un build de production pour générer des URLs absolues

---

## 소개 (한국어)
Next.js 14(App Router) 기반의 다국어 포트폴리오입니다. `next-intl`로 i18n을 구현하고 Tailwind CSS + shadcn/ui로 스타일링했으며, SEO/접근성 베스트 프랙티스를 반영했습니다. Vercel에 배포되었습니다.

- **라우팅**: App Router(`app/`), 로케일 프리픽스(`/en`, `/fr`, `/ko`)
- **i18n**: `next-intl` (서버: `setRequestLocale`, `getMessages`, 클라이언트: `useTranslations`)
- **API**: 이메일 전송용 Next.js Route Handlers (`app/api/...`)
- **UI/스타일**: Tailwind CSS, shadcn/ui 컴포넌트, 반응형/접근성
- **이미지**: Next/Image (최적화 및 LCP)
- **SEO**: `metadataBase`, 페이지별 `canonical`, `hreflang` alternates, 동적 `robots.txt`
- **배포**: Vercel (프로덕션), 절대 URL은 환경 변수로 관리

### 시작하기
```bash
pnpm install
pnpm dev
```
브라우저에서 `http://localhost:3000/ko` (또는 `/en`, `/fr`)로 접속하세요.

### 환경 변수
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 스크립트
```bash
pnpm dev
pnpm build
pnpm start
```

### 구조
- `app/[locale]/` 다국어 레이아웃/페이지 (App Router)
- `app/api/` 이메일 등 API 라우트 핸들러
- `app/robots.js` 유효한 robots.txt 동적 생성
- `components/` UI/내비게이션/섹션 (shadcn/ui + 커스텀)
- `i18n/` 요청/라우팅 설정
- `messages/` 번역 JSON(`en.json`, `fr.json`, `ko.json`)

### 국제화
- 레이아웃(서버): `setRequestLocale` + `getMessages`
- 페이지/컴포넌트: `useTranslations()` 또는 `getTranslations()`
- 언어 스위처: `components/nav/LocaleSwitcher.js`

### SEO
- 전역: `NEXT_PUBLIC_SITE_URL` 기준의 `metadataBase`, 레이아웃 `hreflang`
- 페이지: `generateMetadata`로 `canonical`/`alternates` 지정
- 로봇: `app/robots.js`에서 `Host`/`Sitemap` 포함

### 접근성
- 아이콘 전용 버튼: `aria-label` 또는 `sr-only` 텍스트 제공
- 장식용 국기/아이콘: `aria-hidden`, `role="presentation"`
- 터치 타깃 최소 약 44×44px 권장

### 배포 (Vercel)
- Vercel 프로젝트 설정에서 `NEXT_PUBLIC_SITE_URL` 환경 변수를 설정하세요.
- 프로덕션 빌드 시 절대 URL이 메타 태그에 반영됩니다.




