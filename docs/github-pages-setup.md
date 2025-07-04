# GitHub Pages Configuration

This repository is configured to be served via GitHub Pages, making the schemas accessible via HTTPS URLs.

## Setup Steps

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: "Deploy from a branch"
   - Choose branch: `main` or `gh-pages`
   - Folder: `/ (root)`

2. **Configure Custom Domain** (optional):
   - Add your custom domain in Settings → Pages
   - Create a `CNAME` file in the repository root
   - Set up DNS records for your domain

3. **CORS Headers**:
   GitHub Pages automatically serves with appropriate CORS headers for JSON files.

## URL Structure

Once deployed, schemas will be accessible at:
```
https://your-username.github.io/advise-json-schema/schemas/{protocol}/{schema}.json
```

Or with custom domain:
```
https://schemas.your-domain.com/schemas/{protocol}/{schema}.json
```

## Custom Domain Setup

Create a `CNAME` file in the repository root:
```
schemas.your-domain.com
```

Add DNS records:
```
Type: CNAME
Name: schemas
Value: your-username.github.io
```

## SSL Certificate

GitHub Pages automatically provides SSL certificates for:
- `*.github.io` domains
- Custom domains (after DNS verification)

## Caching

GitHub Pages uses CDN caching. Schema updates may take a few minutes to propagate globally.
