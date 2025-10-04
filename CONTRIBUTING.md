# Contributing
1) Quick checklist (must run before opening a PR)
- Run the dev server and verify the UI builds and your changes display correctly.
- Run the linter and fix issues: `npm run lint`.
- Run tests: `npm run test` (or `npm run test:ci` for the CI runner).
- Add or update tests for any behavior changes (see Testing below).
- Keep changes small and focused; one feature/bugfix per PR.

2) Commands (PowerShell / Windows notes)
- Install deps (use cmd.exe if PowerShell blocks npm wrapper scripts):
```powershell
cmd /c "npm install --legacy-peer-deps"
```
- Dev server (HMR):
```powershell
npm run dev
```
- Build production bundle:
```powershell
npm run build
```
- Preview production bundle locally:
```powershell
npm run preview
```
- Lint:
```powershell
npm run lint
```
- Run tests locally:
```powershell
npm run test
npm run test:ci
```

3) Tests
- Test files live under `test/`.
- This project uses Vitest. A minimal `vitest.config.js` and a smoke test are present. Add tests alongside the `test/` folder using `.test.js` or `.test.jsx`.
- Keep tests small and deterministic. Prefer file-level or unit tests that don't require heavy DOM setup. If you need DOM testing, use JSDOM (Vitest runs with `jsdom` environment).
- Running tests in an environment similar to CI (Docker) — useful if debugging CI failures:
```powershell
docker build -f Dockerfile.dev -t react_layout-dev:latest .
docker run --rm --workdir /app --entrypoint "" react_layout-dev:latest sh -c "npm ci && npx vitest run --reporter=verbose"
```

4) Coding & style conventions (project-specific)
- Components use `.jsx` and default exports. Keep the `export default function Component(){}` pattern.
- Global CSS files live in `src/assets/css/` and the project uses a W3.CSS-derived style (`stylesV1.css`). Prefer adding classes to existing markup and editing these CSS files rather than introducing CSS-in-JS.
- Assets should be imported with relative paths so Vite resolves them on build (example: `import pic from '../assets/mt.jpg'`). Avoid referencing `src/` paths inside `index.html` for images that will be bundled.
- Layout & state: `src/layout/Layout.jsx` is the owner of modal state (login/contact toggles). Prefer passing toggle handlers down instead of adding separate global state for simple UI popups.
- Popup pattern: `src/forms/Login.jsx` and `src/forms/Contact.jsx` use a click-outside close pattern (a `ref` + `document.addEventListener('mousedown', ...)` in `useEffect`). Preserve the attach/remove pattern when refactoring.

5) Pull Request guidance
- Title: use a short imperative summary (e.g., `Fix: close popup when clicking outside`).
- Description: include what, why, and how to verify. Link any relevant issues.
- Screenshots: include where visual changes occur (if applicable).
- Checklist in PR body (copy from above): dev server, lint, tests, focused changes.

6) CI notes & common gotchas
- The GitHub Actions workflow (`.github/workflows/main.yml`) builds a dev Docker image, runs tests inside it, then builds/pushes a production image. The workflow expects `Dockerfile.dev` and `Dockerfile` to exist.
- Branch: the workflow triggers on `main`. If your repository default branch is `master`, either update the workflow or push PRs against a `main` branch.
- package-lock.json: the workflow's npm cache is keyed to `package-lock.json`. If you change dependencies, commit the updated lockfile so CI caching works.
- Peer dependency and install notes: this repo previously used `npm install --legacy-peer-deps` to avoid strict peer resolution conflicts (e.g., with newer React/testing libs). CI can be updated to use `npm install --legacy-peer-deps` in the test step if you prefer that safer behavior.

7) When adding features that change behavior
- Add or update tests under `test/` with clear assertions.
- Update `DEVELOPER_OVERVIEW.md` and inline comments where the pattern or contract changes (e.g., if you move modal state out of `Layout.jsx`).

8) Releasing & Docker
- Production image is built using the multi-stage `Dockerfile` that copies the Vite `dist` output into an Nginx image. The CI builds this and pushes to Docker Hub (requires secrets: `DOCKER_USERNAME`, `DOCKERHUB_TOKEN`, `DOCKERHUB_PROJECT_NAME`). See `.github/CI_README.md` for details.

9) If something breaks in CI
- Run the workflow steps locally via the Docker commands above to reproduce the environment.
- Check for missing `package-lock.json` changes, or peer-dep conflicts. If the CI fails during `npm ci`, try running `npm install --legacy-peer-deps` locally to generate an updated lockfile and commit it.

10) Contact / maintainers
- Open an issue or ping the repository owner for design questions or breaking changes.

Thanks for contributing — small, tested changes make reviews fast and keep the project healthy.
