## Developer overview — react_layout

This file explains the app structure, important patterns, developer commands, and CI gotchas so engineers can become productive quickly.

### App contract (short)
- Inputs: user interactions (header/menu clicks, Login/Contact form entries). Forms currently submit to a client-side alert — there is no backend integration in this repo.
- Outputs: single-page UI rendered by React; production build is a static site produced by Vite and served by an HTTP server.
- Error modes: validation handled client-side with Yup/Formik; no HTTP/network error handling in repo.

### High-level architecture
- Entry: `index.html` -> `src/main.jsx` -> `App.jsx`.
- Layout: `src/layout/Layout.jsx` owns UI-level state (modal toggles) and renders `children`.
- Header/Menu: `src/layout/MobileHeader.jsx` and `src/layout/Header.jsx` handle responsive navigation and forward toggle handlers.
- Forms: `src/forms/Login.jsx` and `src/forms/Contact.jsx` are Formik/Yup modal popups and use a click-outside close pattern (ref + `mousedown` listener in `useEffect`).
- Page content: `src/page/PageImage.jsx` provides the main page example content.
- Styles & assets: `src/assets/` contains images and CSS; `stylesV1.css` is a W3.CSS-derived global stylesheet. The project uses global classnames rather than CSS modules.

### Key files to read first
- `package.json` — scripts and deps.
- `vite.config.js` — build plugin config for SWC.
- `src/layout/Layout.jsx` — modal state & toggle flow.
- `src/forms/*` — canonical popup pattern (ref + `mousedown` listener).
- `index.html` — root element and inline base styles.

### Developer commands (PowerShell / Windows)
Install deps (use cmd.exe if PowerShell blocks npm wrapper scripts):
```powershell
npm install --legacy-peer-deps
```
Start dev server (HMR):
```powershell
npm run dev
```
Build production bundle:
```powershell
npm run build
```
Preview production bundle:
```powershell
npm run preview
```
Run linter:
```powershell
npm run lint
```
Run tests (if present):
```powershell
npm run test
npm run test:ci
```

### Conventions & tips
- Use `.jsx` and default exports (e.g., `export default function Component(){}`).
- Keep top-level UI state (popups) in `Layout.jsx` and pass toggles down as props; avoid scattering global state.
- Preserve the click-outside `useEffect` pattern in popups: attach `mousedown` listener on mount and remove it in cleanup.
- Use relative imports for assets (e.g., `import pic from '../assets/mt.jpg'`) so Vite resolves them during build.
- Prefer adding class names and editing `src/assets/css/` over introducing new styling systems.

### CI / integration notes (important)
- `.github/workflows/main.yml` builds Docker images and runs tests inside a container. The workflow expects `Dockerfile.dev` and `Dockerfile` and uses Vitest to run tests.
- If the repo is missing Dockerfiles, Vitest config, or tests, CI will fail — either add those artifacts or update the workflow to a simpler `npm ci && npm run test` step.
- The current workflow triggers on branch `main`; if your default branch is `master`, either update the workflow or push a `main` branch.

### Quick next steps suggestions
- Add small, focused unit tests (Vitest) under `test/` and a `vitest.config.js` to give CI a meaningful check.
- If you prefer not to use Docker in CI, simplify the workflow to run natively on the runner (faster to iterate).

If anything here is inaccurate or you'd like this expanded into a CONTRIBUTING.md or a shorter cheatsheet, tell me which sections to expand or compress and I will update the file.
