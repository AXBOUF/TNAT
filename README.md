# TNAT - The Nepali Anonymous Traders

A premium trading mentorship community website built with React, TypeScript, and TanStack Router.

## Features

- Modular video system with YouTube integration
- Header hide on scroll
- Checkout links integration (Whop)
- Book 1-on-1 call form (Jotform)
- Floating announcement modal
- Fully responsive design
- Dark theme with premium styling

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

### Deploy

#### **Cloudflare Workers** (Recommended ⭐)

This project is optimized for Cloudflare Workers and Pages. It's the fastest and most cost-effective option.

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
wrangler deploy
```

#### **Vercel** (Possible, but requires changes)

Vercel can host this project, but it's not the ideal choice because:
- Project uses Nitro (Cloudflare-specific)
- TanStack Start is optimized for edge computing
- Would require reconfiguration for Vercel's serverless

**If you still want to use Vercel:**
- Remove Nitro backend or reconfigure
- Build as static/hybrid mode
- Connect repository and deploy

#### **Other Options**

- **Netlify** - Similar approach to Vercel
- **Heroku** - Requires major reconfiguration
- **Self-hosted** - Possible with any Node.js host

**Recommendation:** Use Cloudflare Workers for best performance and lowest cost.

## Project Structure

- `src/routes/` - Page routes
- `src/components/` - Reusable components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and configs

## Tech Stack

- React 19
- TypeScript
- TanStack Router
- Tailwind CSS
- Nitro (Cloudflare Workers)

## License

Educational content only — not financial advice.
