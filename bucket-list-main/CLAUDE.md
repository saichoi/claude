# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A bucket-list (life-goals) web app built as a fully static, client-side SPA. No server, database, build step, or package manager — data lives entirely in the browser's LocalStorage under the key `bucketList`. UI text and code comments are in Korean.

## Running

There is no build or test tooling. Open `index.html` directly in a browser, or serve the directory statically:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

Tailwind CSS is loaded from a CDN at runtime (no local install/compile).

## Architecture

Two layers, loaded in order by `index.html` (`storage.js` before `app.js`):

- **`js/storage.js`** — Data layer. A singleton object literal `BucketStorage` that owns all LocalStorage I/O, CRUD, stats, and filtering. It has **no knowledge of the DOM**. Every method calls `this.load()` to re-parse the full array from LocalStorage, mutates, then `this.save()`s — there is no in-memory cache, so the persisted array is the single source of truth.

- **`js/app.js`** — Presentation layer. A `BucketListApp` class that caches DOM elements, binds events, and re-renders. The flow is always: call a `BucketStorage` method → call `this.render()`, which re-reads from storage and rebuilds the list HTML. A single global `app` instance is created on `DOMContentLoaded`.

The two layers are wired together through **inline `onclick` handlers in dynamically generated HTML** (e.g. `onclick="app.handleToggle('${item.id}')"` in `createBucketItemHTML`). This is why `app` must be a global. When adding interactive list elements, follow this same pattern and remember the handler string is built via template literals.

### Item data model

```javascript
{ id, title, completed, createdAt, completedAt }
```
`id` is `Date.now().toString()`. `createdAt`/`completedAt` are ISO strings; `completedAt` is set on toggle-complete and reset to `null` when un-completed. New items are `unshift`ed (newest first).

### Rendering & state

- `currentFilter` (`'all' | 'active' | 'completed'`) lives on the app instance, not in storage.
- `render()` is the only place that touches list/empty-state DOM; it recomputes stats and the filtered list every call. Prefer routing any data change through `render()` rather than patching the DOM directly.

## Conventions & gotchas

- **XSS handling is manual.** User-supplied `title` is escaped with `escapeHtml()` before insertion. When that value is also embedded in an inline `onclick` attribute, single quotes are additionally escaped (`.replace(/'/g, "\\'")`). Preserve both steps when generating handler markup.
- Custom CSS in `css/styles.css` complements Tailwind (filter-button active state, animations, dark mode via `prefers-color-scheme`, mobile layout under 640px). Tailwind utility classes handle most styling inline in the HTML.
- README documents an `assets/` folder that does not actually exist.
