### Next.js Portfolio – README (KO / EN / FR)

---

### 소개 (한국어)
이 저장소는 Next.js 14(App Router) 기반의 다국어 포트폴리오 웹사이트입니다. `next-intl`로 i18n을 지원하며, 접근성과 SEO(메타데이터, hreflang, robots, sitemap)를 고려했습니다.

- **주요 기술**: Next.js 14, React, next-intl, Tailwind CSS, shadcn/ui, Vercel
- **i18n**: `en`, `fr`, `ko` 로케일, 라우팅 프리픽스(`/en`, `/fr`, `/ko`)
- **접근성/SEO**: aria 라벨, 큰 터치 타깃, canonical/hreflang/robots

#### 빠른 시작
```bash
pnpm install    # 또는 npm install / yarn
pnpm dev        # 또는 npm run dev / yarn dev
```

브라우저에서 `http://localhost:3000/en` (또는 `/fr`, `/ko`)로 접속하세요.

#### 환경 변수
프로덕션용 도메인을 설정하세요.
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

#### 주요 스크립트
```bash
pnpm dev        # 개발 서버 (http://localhost:3000)
pnpm build      # 프로덕션 빌드
pnpm start      # 프로덕션 서버 실행
```

#### 프로젝트 구조 개요
- `app/[locale]/` 다국어 라우트 및 레이아웃, 페이지
- `app/robots.js` 동적 robots.txt 생성
- `components/` UI 컴포넌트, 내비게이션, 섹션 컴포넌트
- `i18n/` 요청/라우팅 설정
- `messages/` 번역 JSON(`en.json`, `fr.json`, `ko.json`)

#### i18n 사용법 요약
- 레이아웃: `setRequestLocale`, `getMessages`, `NextIntlClientProvider`
- 페이지/컴포넌트: `useTranslations()` 또는 `getTranslations()`
- 로케일 전환: `components/nav/LocaleSwitcher.js`

#### SEO 구성 요약
- `app/[locale]/layout.js`에서 `metadataBase`, canonical, `alternates.languages`(`x-default` 포함) 설정
- 각 페이지는 필요 시 `generateMetadata`에서 canonical/alternates 지정
- `app/robots.js`는 `Host`/`Sitemap` 포함한 유효한 robots.txt 제공

#### 접근성 가이드
- 아이콘 버튼에는 `aria-label` 또는 `sr-only` 텍스트 제공
- 장식 아이콘/국기는 `aria-hidden`/`role="presentation"`
- 터치 타깃 최소 44×44px 유지, 포커스 표시 보존

#### 배포
- Vercel에 배포 시 환경 변수 `NEXT_PUBLIC_SITE_URL`을 반드시 설정하세요.

---

### Overview (English)
This is a multilingual portfolio built with Next.js 14 (App Router). It uses `next-intl` for i18n and implements accessibility and SEO best practices.

- **Stack**: Next.js 14, React, next-intl, Tailwind CSS, shadcn/ui, Vercel
- **i18n**: Locales `en`, `fr`, `ko` with URL prefixes
- **A11y/SEO**: aria labels, large touch targets, canonical/hreflang/robots

#### Getting Started
```bash
pnpm install
pnpm dev
```
Open `http://localhost:3000/en` (or `/fr`, `/ko`).

#### Environment Vars
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

#### Scripts
```bash
pnpm dev
pnpm build
pnpm start
```

#### Structure Highlights
- `app/[locale]/` localized routes/layout/pages
- `app/robots.js` dynamic robots.txt
- `components/` UI/navigation/sections
- `i18n/` request/routing config
- `messages/` translations

#### i18n Quick Use
- Layout: `setRequestLocale`, `getMessages`, `NextIntlClientProvider`
- Pages/Components: `useTranslations()` or `getTranslations()`
- Locale switcher: `components/nav/LocaleSwitcher.js`

#### SEO Notes
- Set `metadataBase`, canonical, `alternates.languages` (with `x-default`) in `app/[locale]/layout.js`
- Pages may define `generateMetadata`
- `app/robots.js` outputs valid robots.txt with Host/Sitemap

#### Accessibility Notes
- Provide `aria-label`/`sr-only` for icon-only buttons
- Decorative flags/icons: `aria-hidden`, `role="presentation"`
- Keep minimum 44×44px touch targets

---

### Présentation (Français)
Portfolio multilingue basé sur Next.js 14 (App Router), avec `next-intl`. Accessibilité et SEO pris en compte.

- **Stack**: Next.js 14, React, next-intl, Tailwind CSS, shadcn/ui, Vercel
- **i18n**: Locales `en`, `fr`, `ko` (préfixes d’URL)
- **A11y/SEO**: libellés aria, grandes cibles tactiles, canonical/hreflang/robots

#### Démarrage
```bash
pnpm install
pnpm dev
```
Ouvrez `http://localhost:3000/fr` (ou `/en`, `/ko`).

#### Variables d’environnement
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

#### Scripts
```bash
pnpm dev
pnpm build
pnpm start
```

#### Structure
- `app/[locale]/` routes/pages localisées
- `app/robots.js` robots.txt dynamique
- `components/` UI/navigation/sections
- `i18n/` configuration
- `messages/` traductions

#### i18n – Utilisation rapide
- Layout: `setRequestLocale`, `getMessages`, `NextIntlClientProvider`
- Pages/Composants: `useTranslations()` ou `getTranslations()`
- Sélecteur de langue: `components/nav/LocaleSwitcher.js`

#### SEO
- Définir `metadataBase`, canonical, `alternates.languages` (avec `x-default`) dans `app/[locale]/layout.js`
- Définir `generateMetadata` par page si nécessaire
- `app/robots.js` génère un robots.txt valide (Host/Sitemap)

#### Accessibilité
- Boutons icône uniquement: `aria-label`/texte `sr-only`
- Icônes/drapeaux décoratifs: `aria-hidden`, `role="presentation"`
- Cibles tactiles min. 44×44px




