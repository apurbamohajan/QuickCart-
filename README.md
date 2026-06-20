<!-- Improved README for QuickCart frontend -->
# QuickCart

QuickCart is a lightweight, open-source Next.js + Tailwind CSS frontend for an eCommerce experience. It provides a fast, responsive UI and modular components so you can iterate quickly on product listings, cart flows, and seller views.

## Key Points

- **Frontend-only**: This repository contains the Next.js app and UI components (no hosted backend). The app expects API routes under `app/api/*` (already present for demo/test data).
- **Tech stack**: Next.js (App Router), React, Tailwind CSS, Inngest hooks (for background tasks), and a small Node-style API routes folder structure.

## Features

- Responsive product listing and product pages
- Cart and checkout flow UI (demo hooks and API routes)
- Seller dashboard skeleton (product list, orders)
- Reusable components and Tailwind-based styling

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Open in the browser

Visit http://localhost:3000 to view the app.

Notes:
- If you have environment variables, add them to a `.env.local` file at the project root. This repo runs with local/mock API routes by default.
- Do not change code in `app/` unless you intend to modify UI or behavior—this README update intentionally leaves code untouched.

## Project Structure (short)

- `app/` — Next.js App Router pages, components, and API routes (see `app/api/`)
- `components/` — UI components used across pages
- `lib/`, `config/`, `models/` — small helpers and data models used by API routes
- `public/` — static assets

## Contributing

Contributions are welcome. Typical ways to help:

- Improve accessibility and responsiveness
- Add unit or integration tests for components
- Enhance documentation and examples
- Improve performance and reduce bundle size

Please follow the contribution guidelines in `docs/CONTRIBUTING.md`.

## License

This project is licensed under the MIT License. See `docs/LICENSE.md` or the `LICENSE` file for details.

---

If you want, I can also add a short development checklist or run formatting checks next. 