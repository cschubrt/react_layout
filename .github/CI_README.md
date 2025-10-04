CI notes for this repository

What the workflow does (.github/workflows/main.yml)
- Builds a lightweight development Docker image (`Dockerfile.dev`) and loads it into the runner.
- Runs tests inside that image using `npm ci` and `npx vitest` (the container entrypoint is overridden to run the test command).
- Builds a production multi-stage image (`Dockerfile`) and pushes tags to Docker Hub.

Required GitHub Secrets
- `DOCKER_USERNAME` - Docker Hub username used for `docker/login-action`.
- `DOCKERHUB_TOKEN` - Docker Hub token (or password) with push access.
- `DOCKERHUB_PROJECT_NAME` - repository name on Docker Hub to tag images.

Notes and repo mismatches
- This repo did not previously include `Dockerfile.dev`, `Dockerfile`, or any Vitest tests. Minimal Dockerfiles were added to match the workflow, but there are no tests or `vitest.config.js` present.
- The workflow triggers on branch `main` but this repository's active branch is `master`. You can either change the workflow to `master` or push a branch named `main`/set `default_branch` in repo settings.
- If you want CI to actually run tests, add:
  - `vitest` as a dev dependency and create `vitest.config.js` (or add a script that runs `npx vitest`).
  - At least one test file under e.g. `test/`.

Reproduce CI steps locally (PowerShell)
1) Build dev image (optional, mirrors workflow build step):
```powershell
docker build -f Dockerfile.dev -t react_layout-dev:latest .
```
2) Run tests inside the dev image (the workflow runs `npm ci` inside the image):
```powershell
docker run --rm -it --workdir /app --entrypoint "" react_layout-dev:latest sh -c "npm ci && npx vitest run --reporter=verbose"
```
3) Build and run production image locally:
```powershell
docker build -t react_layout:prod .
docker run --rm -p 8080:80 react_layout:prod
# then open http://localhost:8080
```

Quick fixes if you want CI to be green
- Add `vitest` and a single smoke test (example: test that App renders) so the workflow's test step has something to run.
- Add `package-lock.json` to the repo (the workflow caches `~/.npm` keyed by `package-lock.json` hash) or adapt the workflow to use `npm ci` without the cached step.
