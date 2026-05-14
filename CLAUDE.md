# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

A centralized schema registry hosting documentation and JSON Schema Draft 7 definitions for **SEFR (Singapore Emission Factors Registry) PACT v3 Data Model Extensions** — required extensions under the PACT v3 methodology for standardizing carbon footprint and sustainability data exchange. Schemas are hosted as static files via GitHub Pages, and the site itself is a Jekyll static site.

## Commands

### Validation
```bash
npm run validate                          # Validate all schemas (AJV)
node tools/validate-schema.js <file>      # Validate a single schema file
node tools/validate-schema.js <dir>       # Validate all schemas in a directory
```

### Local Development (Jekyll)
```bash
bundle install                            # Install Ruby dependencies
bundle exec jekyll serve                  # Dev server at http://localhost:4000
bundle exec jekyll build                  # Build static site to _site/
```

### Testing
```bash
npm test                                  # Run Jest tests
```

## Architecture

### Extension Schema Structure

Extensions live in `_extensions/{extensionName}/{version}/` (e.g., `_extensions/economic/2025-07.01/`). Each version directory contains:
- `schema.json` — the JSON Schema Draft 7 definition
- `documentation.md` — Jekyll page with front matter, usage tables, and examples

Version directories use a `YYYY-MM.patch` naming convention. Jekyll's `_config.yml` configures `_extensions/` as a collection that outputs to `/extensions/:path/`.

### URL Pattern for Published Schemas
```
https://simtech-sustainable-systems-engineering.github.io/advise_json_schema/extensions/{name}/{version}/schema.json
```

The `$id` field in each `schema.json` must match this URL exactly. `assets/js/change-domain.js` rewrites these URLs client-side to match the deployment domain.

### Jekyll Layouts

Three layouts in `_layouts/` control how extension pages render:
- `extension.md` — renders a specific versioned extension page
- `extension_index.md` — lists all versions of an extension
- `latest_extension.md` — redirects to the newest version

### Schema Conventions

All schemas follow these patterns:
- `"$schema": "http://json-schema.org/draft-07/schema#"`
- `"additionalProperties": false` — strict enforcement, no extra fields allowed
- Numeric values validated with regex patterns (e.g., positive decimal strings)
- Enumerations for controlled vocabularies (currency codes, Incoterms, etc.)

## Adding a New Extension Version

1. Create `_extensions/{name}/{version}/schema.json` and `documentation.md`
2. In `documentation.md`, set front matter: `layout`, `title`, `extension`, `version`, `release_date`, `parent`
3. Ensure `$id` in schema.json matches the published GitHub Pages URL
4. Run `npm run validate` to confirm schema syntax
5. Push to `main` — GitHub Actions builds and deploys automatically
