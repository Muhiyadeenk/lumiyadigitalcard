# Lumiya Gold and Diamonds: Digital Visiting Card

A fast, mobile-first React page that opens when a customer scans the QR code on the back of the Lumiya visiting card. Frontend only: no backend, no database, no tracking, no sign-in.

**Three full-screen pages, scrolling down:**

1. **Logo** with the tagline "Where Luxury Shines". The logo drifts up, shrinks and fades as you scroll.
2. **Connect**: Instagram, WhatsApp 1, WhatsApp 2, Website ("Coming soon" until it is ready), Location.
3. **Visit us**: the address box (Behind Al Salem Carpet, opposite Karina Jewellery, Gold Souq, Deira), both phone numbers, and an "Open in Google Maps" button.

---

## 1. Run it on your computer

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # opens http://localhost:5173
npm run build    # production build into /dist
npm run preview  # test the production build locally
```

---

## 2. Change details later: `src/config.js`

Everything editable is in this one file.

| Setting | Now | Change when |
|---|---|---|
| `instagramUrl` | `instagram.com/comingsoon.dubai_/` | the final Instagram profile is ready |
| `whatsapp1`, `whatsapp2` | `+971 50 889 6916`, `+971 50 970 1916` | a number changes |
| `websiteUrl` | `""` (button shows "Coming soon") | the website is live: `"https://www.yourdomain.com"` |
| `address` | Behind Al Salem Carpet, opposite Karina Jewellery, Gold Souq, Deira | the shop moves |
| `location` | 25.270309, 55.296421 | the pin changes |
| `whatsappMessage` | pre-filled greeting (`""` for none) | you want other wording |

**Website goes live:** put the address in `websiteUrl`. The "Coming soon" tile turns into a normal button automatically.

**Phone numbers:** type them with the country code. Spaces and `+` are handled for you. WhatsApp links become `https://wa.me/971508896916`, call links become `tel:+971508896916`.

---

## 3. Logo and icons

`public/images/` holds the official logo, extracted from the brand presentation PDF as a transparent PNG (ivory and diamond-rose on a transparent background, designed for the dark page). The logo is only scaled, never redrawn.

- `lumiya-logo.png`: page 1 logo
- `favicon-64.png`, `apple-touch-icon.png`, `lumiya-icon.png`: the emblem on the dark brand plate (browser tab, home screen, link preview)

To replace the logo, keep the same file name. A light-on-transparent logo is needed because the page is dark.

---

## 4. Deploy to Vercel

**Option A: GitHub (recommended, easy updates)**

1. Create a free account at vercel.com and a GitHub account.
2. Create a GitHub repository and upload this folder (not `node_modules`).
3. In Vercel: **Add New → Project**, import the repository.
4. Vercel detects Vite automatically (Build `npm run build`, Output `dist`). Click **Deploy**.
5. You get a public HTTPS address such as `https://lumiya-digital-card.vercel.app`.

**Option B: Vercel CLI**

```bash
npm install -g vercel
vercel          # follow the prompts
vercel --prod   # publish to production
```

**Use a permanent address.** Before printing the QR code, give the card a permanent URL: add your own domain or sub-domain (for example `card.yourdomain.com`) under **Project → Settings → Domains**. Later edits to `src/config.js` republish on the same URL, so the printed QR code keeps working.

**Link preview image:** in `index.html`, change `og:image` to the full address, for example `https://card.yourdomain.com/images/lumiya-icon.png`, so WhatsApp shows the emblem when the link is shared.

---

## 5. Create the QR code

1. Open the deployed page on your phone and check every button.
2. Use a generator that makes a **static** QR code (not a dynamic one that expires), for example qrcode-monkey.com or the one in Canva.
3. Enter the permanent production URL (never `localhost`).
4. Download **SVG or high-resolution PNG**.
5. Colours: dark dots (`#230A07` or `#442C2C`) on Soft Ivory `#F4ECE9` or white. Keep strong contrast.
6. Print at least **2 cm × 2 cm** with a clear blank border around it.
7. **Scan a printed proof** with an iPhone and an Android phone before the final print.

---

## 6. Project structure

```
lumiya-digital-card/
├── public/images/            logo + icons
├── src/
│   ├── components/
│   │   ├── Hero.jsx            page 1
│   │   ├── ConnectSection.jsx  page 2
│   │   ├── ContactButton.jsx
│   │   ├── VisitSection.jsx    page 3
│   │   └── Icons.jsx           Instagram + WhatsApp line icons
│   ├── config.js             all details
│   ├── hooks.js              scroll animation + reveal
│   ├── utils.js              WhatsApp / call / map link builders
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             colours, type, animation
├── index.html                title, description, fonts, icons
└── package.json
```

## Brand reference

| Colour | Hex | Use |
|---|---|---|
| Logo plate | `#230A07` | page background |
| Soft Ivory | `#F4ECE9` | text, logo |
| Diamond Accent | `#CCAEAE` | secondary text, lines |
| Deep Cocoa Brown | `#442C2C` | hover surface |
| Secondary Brown | `#685353` | small decorative marks |

Typography: Cormorant Garamond (headings, tagline) and Jost (small text), loaded from Google Fonts with Georgia and system sans as fallbacks.
