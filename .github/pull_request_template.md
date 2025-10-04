## Summary
Provide a short, imperative description of the change (what and why).

## Related issues
- Fixes # (issue number) or Relates to #...

## Verification checklist (please check before requesting review)
- [ ] I ran the dev server and verified my change (`npm run dev`).
- [ ] I ran the linter and fixed warnings (`npm run lint`).
- [ ] I ran tests locally (`npm run test` or `npm run test:ci`).
- [ ] I added or updated tests for any new behavior.
- [ ] I updated `DEVELOPER_OVERVIEW.md` or relevant docs if I changed public behavior or patterns.

## How to test / reproduce
Provide step-by-step instructions to reproduce the behavior and verify the change locally.

## Screenshots (if UI change)
Attach before/after screenshots or animated GIFs.

## CI notes
- This repo's CI builds a Docker dev image and runs tests inside it. If CI fails on `npm ci`, it may be due to peer dependency resolution — consider running `npm install --legacy-peer-deps` locally to reproduce and update `package-lock.json`.
- The workflow triggers on branch `main`. If your default branch is `master`, ensure you're opening PRs against `main` or update the workflow to match.

## Reviewer checklist
- [ ] Changes are small and focused.
- [ ] Tests added/updated and passing.
- [ ] No obvious accessibility, security, or performance regressions.

Thanks for contributing — a clear description and passing checks make reviews faster.
